const express = require("express");

const app = express();

app.use('/',(req,res)=>{
   console.log('hello prem ')
})

app.listen("5000", ()=>{
    console.log("backend is connected!")
});

