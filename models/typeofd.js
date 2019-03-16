var mongoose = require('mongoose');
module.exports=mongoose.model("TemplateType",{
    name : String,
    existing_templates : [{
        tid : String
    }],
});