require('dotenv').config();
const express= require('express');
const app=express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(require('cors')())
const port = process.env.PORT||8000;
const dbUrl = process.env.DBURL;
// Database Connection Eastablishation
mongoose.connect(dbUrl).then(() => {
    console.log('Connected to MongoDB successfully!');
  }).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// routes configuration setup
app.use('/',require("./Routes/studentRoutes"));
app.use('/admin',require("./Routes/adminRoutes"));

// server runner code
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}/`);
})
