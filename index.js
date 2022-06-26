const express = require('express')
const bodyparser = require('body-parser');
const multer = require('multer');
require("dotenv").config();

//initialize express server
const app = express();

app.use(bodyparser.urlencoded({extended: flase}));

const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '/utils/movies');
    },
    filename: (req, file, cb)=>{
        //to do check if the movie name is in our db
    }
})



//listen on port
app.listen(process.env.PORT);
console.log(`app is listening on port: ${process.env.PORT}`);