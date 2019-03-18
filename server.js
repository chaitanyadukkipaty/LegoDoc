const express       = require('express');
const app           = express();
const http          = require("http").Server(app);
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const path          = require('path');
const fs            = require('promise-fs');
const morgan        = require('morgan');
const request       = require('request');
const phantom       = require('phantom');
const htmlDocx      = require('html-docx-js');
const cors          = require('cors');

const User          = require('./models/user');
const Template      = require('./models/template');
const TemplateType  = require('./models/typeofd');

const port          = process.env.PORT || 8082;

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

var conString = "mongodb://127.0.0.1:27017/LegoDoc";
mongoose.Promise=Promise;

// Connecting to the database
mongoose.connect(conString, (err) => {
    console.log("Database connection", err);
});

// Login
app.post('/login', (req, res) => {
    var query = User.where({username: req.body.username});
    query.findOne((err, user) => {
        if (err) {
            return err;
        }
        else if (!user) {
            res.sendStatus(401);
        }
        else {
            if (req.body.password == user.password){
                res.send(req.body.username);
            }
            else {
                res.sendStatus(500);
            }
        }
    });
});

// Register
app.post('/register', (req, res) => {
    console.log(req.body);
        const userData= {
            username:   req.body.username,
            name:       req.body.name,
            password:   req.body.password,
            email:      req.body.email
        };
        User.create(userData, (error, user) => {
            if (error) {
                res.sendStatus(401);
            }
            else {
                res.sendStatus(200);
            }
        });
    console.log(userData);
});

// Printing to .pdf
app.get('/printPDF/:f', (req, res) => {
    var fileName = req.params.f;
    var file     = fs.createReadStream(fileName);
    var stat     = fs.statSync("./" + fileName);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Output.pdf');
    file.pipe(res);
});

// Printing to .docx
app.post('/printDocX', (req, res) => {
    var finalHTML    = "<html><body>" + req.body.htmldata + "</body></html>";
    var fileName         = String(Date.now());
    var path_to_file = __dirname + '/Submissions/' + fileName + ".html";
    fs.writeFile(path_to_file, finalHTML)
    .then(() => {
        var converted = htmlDocx.asBlob(finalHTML);
        saveAs(converted, fileName + '.docx');
    })
    .then(() => {
        console.log('done');
    })
    .catch((err) => {
        console.log(err)
    });
});

app.post('/printPDF', (req, res) => {
    var finalHTML    = "<html><body>" + req.body.htmldata + "</body></html>";
    fileName         = String(Date.now());
    var path_to_file = __dirname + '/Submissions/' + fileName + ".html";
    fs.writeFile(path_to_file, finalHTML)
    .then(() => {
        phantom.create()
        .then(function(ph) {
            ph.createPage().then(function(page) {
                page.property('paperSize',{
                    format:      "A4",
                    orientation: "potrait",
                    margin:      "1cm"
                });
                page.open(path_to_file, {charset: 'UTF-8'})
                .then(function(status) {
                    page.render(fileName + '.pdf')
                    .then(function() {
                        console.log('Page Rendered');
                        ph.exit();
                    })
                    .then(() => {
                        res.send(fileName + ".pdf");
                    });
                });
            });
        });
        console.log("done");
    })
    .catch((err) => {
        console.log(err);
    });
});

app.post('/viewTemplate', (req, res) => {
    var tid = req.body._id;
    var templateFinal = {
        name: ""
    };
    Template.findById(tid)
    .then((template) => {
        fs.readFile(template.path_to_file, {encoding: "utf-8"})
        .then((data) => {
            templateFinal.username   = template.username;
            templateFinal.name       = template.name;
            templateFinal.type       = template.type;
            templateFinal.des        = template.des;
            templateFinal.upvotes    = template.upvotes-template.downvotes;
            templateFinal.percentage = (template.upvotes-template.downvotes) * 100/(template.upvotes + template.downvotes);
            templateFinal.template   = data;
            return templateFinal
        })
        .then((temp) => {
            res.send(temp);
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err)
    });
});

app.post('/uploadTemplate', (req, res) => {
    var templateData = {
        username: req.body.username,
        name:     req.body.name,
        type:     req.body.type,
        des:      req.body.des,
        date:     ""
    };
    var temp = req.body.template;
    var finalString = "";
    for(var i = 0; i < temp.length; i++) {
        if(temp.charAt(i) == '~') {
            finalString += '<span class="field"><mark>';
            for(i = i+1; i < temp.length; i++) {
                if(temp.charAt(i) == '~') {
                    break;
                }
                else {
                    finalString += temp.charAt(i);
                }
            }
            finalString += "</mark></span>";
        }
        else {
            finalString += temp.charAt(i);
        }
    }
    var date = Date.now()
    var fileName = String(date);
    var path_to_file = __dirname + '/Uploads/' + fileName + '.txt';
    fs.writeFile(path_to_file, finalString, (err) => {
        if(err) {
            return console.log(err);
        }
    });
    templateData.path_to_file = path_to_file;
    templateData.date = date;
    console.log("The file was saved!");
    Template.create(templateData)
        .then((template) => {
            res.send(template._id);
            templateData._id = template._id;
            User.update({username: template.id}, {
                $push: {
                    submitted_templates: {
                        name: template.name,
                        id: template._id
                    }
                }
            }, (error, success) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log(success)
                }
            });
            TemplateType.update({name: templateData.type}, {
                $push: {
                    existing_templates: {
                        tid: template._id
                    }
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// Home
app.post('/', (req, res) => {
    Template.find({}, '-comment -path_to_file')
    .exec((err, template) => {
        var toSend = [];
        var d = new Date();
        var newISODate = d.toISOString();
        for(var temp of template){
            var upvotes = temp.upvotes - temp.downvotes;
            var percentage = upvotes * 100/(temp.upvotes+temp.downvotes);
            toSend.push({
                _id:          temp._id,
                username:     temp.username,
                name:         temp.name,
                type:         temp.type,
                date:         newISODate,
                des:          temp.des,
                upvotes:      upvotes,
                percentage:   percentage,
                upvoteflag:   false,
                downvoteflag: false
            });
        }
        console.log(toSend);
        res.send(toSend);
    });
});

// Google reCAPTCHA v2 checkbox
app.post('/recaptchaCheckbox', (req, res) => {
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) {
        return res.sendStatus(400);
    }

    // Secret Key
    const secretKey = process.env.secretKeyCheckbox;

    // Verify URL
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKeyCheckbox}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

    // Make request to verifyUrl
    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);

        // If not successful
        if (body.success !== undefined && !body.success) {
            return res.sendStatus(400);
        }
    });

});

// Google reCAPTCHA v2 Invisible
app.post('/recaptchaInvisible', (req, res) => {
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) {
        return res.sendStatus(400);
    }

    // Secret Key
    const secretKey = process.env.secretKeyInvisible;

    // Verify URL
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKeyInvisible}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

    // Make request to verifyUrl
    request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);

        // If not successful
        if (body.success !== undefined && !body.success) {
            return res.sendStatus(400);
        }
    });
});

// Server
const server = http.listen(port, () => {
    console.log(`Listening on port: ${port}: `, server.address().port)
});
