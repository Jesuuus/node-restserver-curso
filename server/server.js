require('./config/config');
//jesus b8irM89osQJDvnoJ
//MongoDB URL
//mongodb+srv://jesus:b8irM89osQJDvnoJ@cluster0-9bgzn.mongodb.net/cafe

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
//son middlewares
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

//mongoose.connect('mongodb://localhost:27017/cafe',
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    })

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);
})