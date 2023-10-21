const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    massage:{
        type:String,
        requered:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
          ref:"empViewsModel"
    }

},
    {timestamps:true})