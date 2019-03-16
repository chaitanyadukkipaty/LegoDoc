var express  = require('express');
var app      = express();
var http = require("http").Server(app);
var port     = process.env.PORT || 8081;
var bodyParser = require('body-parser');
var User = require('./models/user');
var Template = require('./models/template');
var TemplateType = require('./models/typeofd');
var mongoose = require('mongoose');

app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

var cors= require('cors');
app.use(cors());

var conString = "mongodb://127.0.0.1:27017/LegoDoc";
mongoose.Promise=Promise;

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
    if(req.body.id && req.body.password && req.body.name){
        var userData={
            id :req.body.id,
            name : req.body.name,
            password : req.body.password,
        };
        User.create(userData, function(error, user){
            if(error){
                res.sendStatus(401);
            }
            else{
                res.send(req.body.id);
            }
        });
    }
});

//home page
app.get('/',(req,res)=>{
    Template.find({},'-comment')
    .exec(function(err,template){
        res.send(template);
    });
});

//creating a server
var server = http.listen(8081, () => {
    console.log("Well done, now I am listening on ", server.address().port)
});