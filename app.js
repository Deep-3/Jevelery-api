const express=require('express');
const userroutes=require('./routes/userroutes');
const loginroutes=require('./routes/loginroutes');
const categoryroutes=require('./routes/categoryroutes')
const clientroutes=require('./routes/clientroutes')
const purchaseroutes=require('./routes/purchaseroutes')
const salesroutes=require('./routes/salesroutes')
const rateroutes = require('./routes/rateroutes')
const reportroutes=require('./routes/reportroutes')
require('./cron/ratecron'); 


const app=express();
const port=3000;
app.use(express.json());
app.use('/auth',loginroutes)
app.use('/users',userroutes);
app.use('/category',categoryroutes);
app.use('/client',clientroutes);
app.use('/purchase',purchaseroutes);
app.use('/rate',rateroutes);
app.use('/sales',salesroutes);
app.use('/report',reportroutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);

});
