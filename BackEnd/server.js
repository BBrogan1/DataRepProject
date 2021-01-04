const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build'))); //where it will find the build folder
app.use('/static', express.static(path.join(__dirname, 'build/static'))); //where it finds the static folder


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://benb:brogie26@cluster0.jz0gj.mongodb.net/BookClub?retryWrites=true&w=majority';
mongoose.connect(strConnection,{useNewUrlParser: true});

//creating object for schema
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    Title:String,
    Author:String,
    Year:String,
    Cover:String
})
//all created books go to this model
const bookModel = mongoose.model('Novel', bookSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/books', (req, res) => {

    bookModel.find((err,data)=>{
        res.json(data);
    })
         
    })
app.get('/api/books/:id',(req, res)=>{
    console.log(req.params.id);
    bookModel.findById(req.params.id, (err,data)=>{ //reads a book by id from my database in my node server        
        res.json(data);
    })
})

app.put('/api/books/:id',(req,res)=>{
    console.log("Update Book: "+req.params.id);
    console.log(req.body);
        bookModel.findByIdAndUpdate(req.params.id,
         req.body, {new:true},
         (err,data)=>{
             res.send(data);
     })
})

app.delete('/api/books/:id',(req, res)=>{
    console.log("Delete Book: "+req.params.id);

    bookModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

//write data to my mongodb
app.post('/api/books', (req, res) => {
    console.log(req.body);

    bookModel.create({
        Title:req.body.Title,
        Author:req.body.Author,
        Year:req.body.Year,
        Cover:req.body.Cover
    })
    .then()
    .catch();
    res.send('Data Recieved!');
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})