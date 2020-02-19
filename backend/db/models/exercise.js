const mongoose=require('../models/connection');
var Schema=mongoose.Schema;
var ExerciseSchema=new Schema({
    'username':{type:String,required:true},
    'description':{type:String,required:true},
    'duration':{type:Number,required:true},
    'date':{type:Date,required:true},
    'uid':{type:String,required:true}
});

const Exercise=mongoose.model('Exercises',ExerciseSchema);
module.exports=Exercise