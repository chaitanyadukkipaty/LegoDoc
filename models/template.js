var mongoose = require('mongoose');
module.exports=mongoose.model("Template",{
    username : String,
    name : String,
    type : String,
    date : String,
    des : String,
    path_to_file : String,
    used_by : [{
        id:String
    }],
    upvotes : {
        type : Number,
        default : 1 + Math.floor(Math.random()*10)
    },
    downvotes : {
        type : Number,
        default : 0
    },
    comment :[{
        com : String,
        id : String
    }],
    views : {
        type : Number,
        default : 1
    }
});
