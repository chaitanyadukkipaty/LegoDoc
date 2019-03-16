var mongoose = require('mongoose');
module.exports=mongoose.model("Template",{
    tid: String,
    name : String,
    type : String,
    date : Date,
    des : String,
    used_by : [{
        id:String
    }],
    upvotes : {
        type : Number,
        default : 0
    },
    downvotes : {
        type : Number,
        default : 0
    },
    votes : {
        type : Number,
        default : 0
    },
    comment :[{
        com : String,
        id : String
    }]
});