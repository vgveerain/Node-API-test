const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const body_parser = require('body-parser');
const cors = require('cors');

//middlewares
// app.use('/posts', ()=>{
//     console.log("hello, this is a middleware running");
// });
// app.use(auth);

//import routes
const postsRoute = require('./routes/posts');

app.use(cors());
app.use(body_parser.json());

app.use('/posts', postsRoute);

//you have the ability to create routes
// app.get('/', (req,res)=>{
//     res.send("We are on Home");
// });

// app.get('/posts', (req,res)=>{
//     res.send("We are on Home/posts");
// });

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log("connected to DB");
});

//how do we start listening to the server
app.listen(3000);