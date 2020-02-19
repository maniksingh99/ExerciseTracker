const express=require('express');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();




app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./controllers/user'));

app.use((res,req,next)=>{
    res.send('U type something Wrong');
})

app.listen(process.env.PORT||9999,()=>{
    console.log('Server Start....');
})