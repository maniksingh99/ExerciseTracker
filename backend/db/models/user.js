const mongoose=require('../models/connection');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
       'username':{ type:String ,required:true,unique:true,trim:true,minlength:3},
       // 'password':{type:String, required:true},
});
var UserCollection=mongoose.model('users',UserSchema);
module.exports=UserCollection