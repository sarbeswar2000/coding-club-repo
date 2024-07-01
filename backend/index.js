const express=require('express');
const connectTomongo=require('./db.js');
const cors=require('cors');
const port=5000;
const app=express();
app.listen(port,()=>{
    console.log(`listening on the port${port}`);
});
connectTomongo();