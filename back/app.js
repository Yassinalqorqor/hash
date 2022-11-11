
const express= require('express');
const hach= require('/back/hash.js');
const token=require("/back/token");

const app=express();

    
const mysql=require('mysql');



app.use((req,res,next)=>{
    res.setHeader('access-control-allow-origin','*')
    res.setHeader('access-control-allow-headers','*')
    res.setHeader('access-control-allow-methods','*')
    next()

})






app.use(express.json())

const hach =({'host':'localhost','user':'root', 'database':'hach'})
const coonnection= mysql.createConnection(hach);

connection.connect((err)=>{  

    if(err){
        console.log(err)
    }else{
        console .log("connected")
    }
} )
//  to regester data from db
app.post("/regester",(req,res)=>{

   var tokendata={"email": req.body.email,"username":req.body.username}

   var token1=token.createConnection(tokendata)
   console.log(token1s)

   var data=token.decrypttoken(token1)
   console.log(data)

//hach.hachpassword(req.body.password).then(hachpassword=>{



    //req.body.password=hachpassword
    //const addpassword="Insert into hach set ?"; 
    //connection.query(addpassword,res.body,(err)=> { 
        //if(err){
            //console.log(err)

       // } 
//} ) 


//})  
  //} )
  
//app.listen(2090,()=>{
   // console.log("express connected")
})
