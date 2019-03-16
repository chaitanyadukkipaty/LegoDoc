var express = require('express');
var app      = express();
var http = require("http").Server(app);
var port     = process.env.PORT || 8081;
var bodyParser = require('body-parser');
var User = require('./models/user');
var Template = require('./models/template');
var TemplateType = require('./models/typeofd');
var mongoose = require('mongoose');
var path = require('path');
var fs = require('promise-fs');
var morgan       = require('morgan');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __dirname+'/Uploads');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+'.docx');
    }
});
var upload = multer({storage: storage});
const request = require('request');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

var cors= require('cors');
app.use(cors());

var conString = "mongodb://127.0.0.1:27017/LegoDoc";
mongoose.Promise=Promise;

var phantom = require('phantom');   

//Connecting to the database
mongoose.connect(conString,(err) => {
    console.log("Database connection", err);
});


 //login
app.post('/login', function(req,res){
    // Request.get()
    var query = User.where({id:req.body.id});
    query.findOne((err,user)=>{
        if(err){
            return err;
        }
        else if(!user){
            res.sendStatus(401);
        }
        else{
            if(req.body.password==user.password){
                res.send(req.body.id);
            }
            else{
                res.sendStatus(500);
            }
        }
    });
});

//Registering a new user
app.post('/register',function(req,res){
    console.log(req.body);

        const userData={
            username :req.body.username,
            name : req.body.name,
            password : req.body.password,
            email: req.body.email
        };
        User.create(userData, function(error, user){
            if(error){
                res.sendStatus(401);
            }
            else{
                res.sendStatus(200);
            }
        });

    console.log(userData);
});

app.post('/printPDF',(req,res)=>{
    var finalHTML = "<html><body>"+req.body.htmldata+"</body></html>";
    // console.log(finalHTML);
    fileName = String(Date.now());
    var path_to_file = __dirname + '/Submissions/'+fileName+".html";
    fs.writeFile(path_to_file,finalHTML)
    .then(()=>{
        phantom.create()
        .then(function(ph) {
            ph.createPage().then(function(page) {
                page.open(path_to_file)
                .then(function(status) {
                    page.render(fileName+'.pdf')
                    .then(function() {
                        console.log('Page Rendered');
                        ph.exit();
                    })
                    .then(()=>{
                        console.log("okay");
                        var file = fs.createReadStream(fileName+".pdf");
                        var stat = fs.statSync("./"+fileName+".pdf");
                        res.setHeader('Content-Length', stat.size);
                        res.setHeader('Content-Type', 'application/pdf');
                        res.setHeader('Content-Disposition', 'attachment; filename=Output.pdf');
                        file.pipe(res);
                    });
                });
            });
        });
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.post('/viewTemplate', (req,res)=>{
    var tid = req.body._id;
    var templateFinal={
        name :""
    };
    // Template.findById(tid,(error,template)=>{
    //     templateFinal = template;
    //     fs.readFile(template.path_to_file,{encoding:"utf-8"},(error,data)=>{
    //         templateFinal.template = data;
    //     });
    // });
    // res.send(templateFinal);

    Template.findById(tid)
    .then((template)=>{
        
         fs.readFile(template.path_to_file,{encoding:"utf-8"})
            .then((data)=>{
                console.log(typeof(data));
                templateFinal.username = template.username;
                templateFinal.name = template.name;
                templateFinal.type = template.type;
                templateFinal.des = template.des;
                templateFinal.upvotes = template.upvotes-template.downvotes;
                templateFinal.percentage = (template.upvotes-template.downvotes)*100/(template.upvotes+template.downvotes);
                templateFinal.template = data;
                return templateFinal
            })
            .then((temp)=>{
                console.log(temp);
                res.send(temp);
            })
            .catch((err)=>{
                console.log(err);
            })
        
    })
    .catch((err)=>{
        console.log(err)
    });
});

app.post('/uploadTemplate',(req,res)=>{
    var templateData ={
        username : req.body.username,
        name : req.body.name,
        type : req.body.type,
        des : req.body.des
    };
    var temp = req.body.template;
    var finalString = "";
    for(var i = 0; i<temp.length; i++){
        if(temp.charAt(i)=='~'){
            finalString+='<span class="field"><mark>';
            for(i=i+1;i<temp.length;i++){
                if(temp.charAt(i)=='~'){
                    break;
                }
                else{
                    finalString+=temp.charAt(i);
                }
            }
            finalString+="</mark></span>";
        }
        else{
            finalString+=temp.charAt(i);
        }
    }
    var fileName = String(Date.now());
    var path_to_file = __dirname + '/Uploads/'+fileName+'.txt';
    fs.writeFile(path_to_file, finalString, (err) => {
        if(err) {
            return console.log(err);
        }
    });
    templateData.path_to_file = path_to_file;
    console.log("The file was saved!");
    Template.create(templateData)
        .then((template)=>{
            res.send(template._id);
            templateData._id=template._id;
            User.update({username:template.id},{
                $push:{
                    submitted_templates :{ 
                        name : template.name,
                        id : template._id
                    }
                }
            },function(error,success){
                if(error){
                    console.log(error);
                }
                else{
                    console.log(success)
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    console.log(finalString);
    // res.sendStatus(200);
});



//home page
app.post('/',(req,res)=>{
    Template.find({},'-comment -path_to_file')
    .exec(function(err,template){
        var toSend=[];
        for(var temp of template){
            var upvotes = temp.upvotes-temp.downvotes;
            var percentage = upvotes*100/(temp.upvotes+temp.downvotes);
            toSend.push({
                name:temp.name,
                type:temp.type,
                date:temp.date,
                des:temp.des,
                upvotes:upvotes,
                percentage:percentage,
                upvoteflag:false,
                downvoteflag:false
            });
        }
        res.send(toSend);
    });
});

app.post('/recaptchaCheckbox', (req, res) => {
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) {
        return res.sendStatus(400);
    }

    // Secret Key
    const secretKey = process.env.secretKey;

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

app.post('/recaptchaInvisible', (req, res) => {
    if (
        req.body.captcha === undefined ||
        req.body.captcha === '' ||
        req.body.captcha === null
    ) {
        return res.sendStatus(400);
    }

    // Secret Key
    const secretKey = process.env.secretKey;

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



//creating a server
var server = http.listen(8081, () => {
    console.log("Well done, now I am listening on ", server.address().port)
});
