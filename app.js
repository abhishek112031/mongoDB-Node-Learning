const mongoose = require('mongoose');
const User=require('./userSchema');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');


// Replace the connectionURI with your MongoDB connection URI
const connectionURI = 'mongodb://0.0.0.0:27017/e-com';

const express=require('express');
const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.get('/',async(req,res,next)=>{

  res.status(200).sendFile(path.join(__dirname,'form.html'));
  // const {name,email,nessage}=req.body;
  
    // let user=new User({
    //     name:'Abhishek',
    //     age:32,
    //     course:'node js',
        
    // });
    // await user.save();
    // let users=await User.find();
    // res.status(200).json(users);
    
});

app.post('/submit',async(req,res,next)=>{
  try{

    const {name,email,message}=req.body;
      const user=new User({
          name:name,
          email:email,
          message:message,
          createdAt:new Date().toLocaleString().split(',')[0]
          
      });
      // user.updatedAt=new Date();
      await user.save();
      // let users=await User.find();
      res.status(201).json(user);
  }
  catch(err){
    console.log('err-->',err)
    res.status(500).json({err:'duplicate entry found!'})
  }



})









mongoose.connect(connectionURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(3000)
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
