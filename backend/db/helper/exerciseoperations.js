const Exercise=require('../models/exercise');
 
const exerciseOperations={
    add(exerciseObject,res){
        Exercise.create(exerciseObject,(err)=>{
            if(err){
                res.send('Error While Adding Exercise');
                console.log('Error While Adding Exercise',err);
                console.log(exerciseObject);
            }
            else{
                res.send('Exercise Added');
            }
        })
    },
    delete(exerciseId,res){
        Exercise.deleteOne({uid:exerciseId},(err)=>{
            if(err){
                res.send('Record does not exist');
                console.log('Record does not exist',err);
            }
            else{
                res.send('Record Deleted Successfully');
            }
        })
    },
    update(exerciseId,exerciseObj,res){
        Exercise.updateOne({"uid":exerciseId},{$set:exerciseObj},(err)=>{
            if(err){
                res.send('Error while updating');
                console.log('Error while updating',err);
            }
            else{
                res.send('Record updated');
            }
        })





        //  var exerciseObj=Exercise.findById(exerciseId);
        //  console.log('Before update...',exerciseObj);
        // exerciseObj.username=req.body.username;
        // exerciseObj.description=req.body.description;
        // exerciseObj.duration=Number(req.body.duration);
        // exerciseObj.date=Date.parse(req.body.date);
        // {username:exerciseObj.username},{$set:{username:req.body.username}},{username:exerciseObj.description},
        //     {$set:{username:req.body.description}},{username:exerciseObj.duration},{$set:{username:req.body.duration}},
        //     {username:exerciseObj.date},{$set:{username:req.body.date}}
        // console.log('Execise object is after update....',exerciseObj);
        // exerciseObj.save()
        // .then(()=>res.send('Record Added'))
        // .catch((err)=>{
        //     res.send('Error while updating');
        //     console.log('Error of update',err);
        // })
        // Exercise.save(exerciseObj,(err)=>{
        //     if(err){
        //         res.send('Data not updated');
        //         console.log('Data not updated',err);
        //     }
        //     else{
        //         res.send('Data updated');
        //     }
        // })
    
        }
}
module.exports=exerciseOperations;