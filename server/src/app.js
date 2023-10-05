// src/app.js

const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
app.use(express.json());
const {mongoURI}= require('./config/config');
// using cors in this app
const mainRoute = require('./routes/mainRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/CategoryRoute');




const cors = require('cors');
app.use(cors());

mongoose.connect(mongoURI)
const conn = mongoose.connection
conn.once("open",()=>{
    console.log("done connecting")
})

// Set up a basic middleware to parse JSON requests

// Set up your main route
app.use('/', mainRoute);
app.use('/auth', userRoute);
app.use("/category",categoryRoute);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
