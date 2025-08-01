const express = require('express');
const mongoose = require('mongoose');
const person =require("./model/Person")
const app = express();


const bodyParser=require("body-Parser");
const Person = require('./model/Person');
app.use(bodyParser.json())


app.get("/",function(req,res){
  res.send("welcome to Rishav sever")
})

app.post("/person",(res,req)=>{
  const data =req.body

  const newPerson=new Person(data);
  newPerson.save((error,savedPerson)=>{
    if (error){
      console.log("Error saving person",error);
      res.status(500).json({error:"enternal sever error"})
    }else{
      console.log("data save sucessfully");
      res.status(200).json(savePerson)
    }
  })
 
  
})

app.listen(3000, () => {
  console.log('Server is running at port:3000');
});
