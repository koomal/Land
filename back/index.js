const express = require('express')
const app= express();
const port = process.env.PORT || 4000;
const path =require('path');
var cors = require("cors");
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const  mongoose  = require('mongoose');

const uri = 'mongodb+srv://komal:dobby@cluster0.vzyfl.mongodb.net/contact?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))

const users = require('./routes/router');
app.set("views", path.join(__dirname,"views"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/',users);
app.get('/',function(req,res){
    res.send('hello');
});

app.listen(port,function(){
    console.log('server started');
})