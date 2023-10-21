//creating schema 
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
         type:String,
         required:true,

    },
    name:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },
     //for review we will creat array
     review:[
               {
                type:mongoose.Schema.Types.ObjectId,
                ref:"reviewModel"
               }

         ]

 },
    {
        timestamps:true,
});
const user=mongoose.model('user',userSchema);
module.exports=user;