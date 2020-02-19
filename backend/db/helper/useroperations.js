const UserCollection=require('../models/user');

const userOperations={
    add(userObject,res){
        UserCollection.create(userObject,(err)=>{
            if(err){
                res.send('Error During add');
                console.log('Error During Add',err);
            }
            else{
                res.send('Record Added...');
            }
        })
    },
    // find(allUsers,res){
    //     UserCollection.find(allUsers,(err)=>{
    //         if(err){
    //             res.send('Error Data Not Found');
    //             console.log('Data not found',err);
    //         }
    //         else{
    //             res.json()
    //         }
    //     })
    // }
}

module.exports=userOperations