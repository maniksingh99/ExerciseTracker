const express=require('express');
const route=express.Router();
const UserCollection=require('../db/models/user');
const Exercise=require('../db/models/exercise');
// const UserCollection=require('../models/user');

// route.get('/',(req,res)=>{
//     UserCollection.find()
//     .then(users=>res.json(users))
//     .catch((err)=>{
//         res.send('Data not found');
//         console.log('Data not found',err);
//     })
    // var allUsers=req.query;
    // const userOperations=require('../db/helper/useroperations');
    // userOperations.find(allUsers,res);
// })

route.post('/register',(req,res)=>{
    var userObject=req.body;
    const userOperations=require('../db/helper/useroperations');
    userOperations.add(userObject,res);
});


route.get('/register/data',(req,res)=>{
    UserCollection.find((err,data)=>{
        if(err){
            res.send('Error while fetching data');
            console.log('Error while fetching data',err);
        }
        else{
            res.json(data);
        }
    })
})

route.get('/exercise/data',(req,res)=>{
    Exercise.find((err,data)=>{
        if(err){
            res.send('Error while fetching data',);
            console.log('Error while fetching data',err);
        }
        else{
            res.json(data);
        }
    })
})

route.post('/exercise',(req,res)=>{
    var exerciseObject=req.body;
    const exerciseOperations=require('../db/helper/exerciseoperations');
    exerciseOperations.add(exerciseObject,res);
})

route.delete('/exercise/:uid',(req,res)=>{
    var exerciseId=req.params.uid;
    const exerciseOperations=require('../db/helper/exerciseoperations');
    exerciseOperations.delete(exerciseId,res);
})

route.post('/exercise/update/:uid',(req,res)=>{
    var exerciseId=req.params.uid;
    var exerciseObj={
        username:req.body.username,
        description:req.body.description,
        duration:req.body.duration,
        date:req.body.date
    }
    const exerciseOperations=require('../db/helper/exerciseoperations');
    exerciseOperations.update(exerciseId,exerciseObj,res);
})

module.exports=route