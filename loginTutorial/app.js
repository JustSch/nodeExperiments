const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');

const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MonogoDB connected...'))
    .catch(err => console.log(err));


app.use(expressEjsLayout);
app.set('view engine','ejs');

app.use(express.urlencoded({extended : true}));

app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server running on port: %s', PORT));