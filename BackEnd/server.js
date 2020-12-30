const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
         //   "Cover": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
         //   "Cover": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
           // "Cover": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
           // "Cover": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    })
app.get('/api/books/:id',(req, res)=>{
    console.log(req.params.id);
    bookModel.findById(req.params.id, (err,data)=>{ //reads a book by id from my database in my node server        
        res.json(data);
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})