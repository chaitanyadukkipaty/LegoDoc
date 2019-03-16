var mongoose = require('mongoose');
//MongoDB schema for users
module.exports = mongoose.model("User",{
  id : {
    type : String,
    required : true
  },
  name : String,
  password : {
    type : String,
    required : true
    },
  submitted_templates:[{
      name : String,
      id : String
  }]
});