const express=require('express');
const port=5000;
const app=express();

const myRout=require('./Routs/empviewrout');
const mongoosedb=require('./config/mongoose');
app.set('view engine','ejs');
app.set('views','./Views');
app.use('/',myRout);

app.listen(port,function(err){
  if(err){
      console.log(`ERROR in server CONNECTION : ${err}`);
  }
  console.log(`SERVER is LISTENNING SUCCESFULLY ON PORT :${port}`);
})