const express = require('express');
const mongoose = require('mongoose');
const authenticate = require('./middlewares/authentication');
const email = require('./middlewares/emails');
const app = express();
const avengers = require('./routes/avengers');
const home = require('./routes/home');
const PORT = 3000;

mongoose.connect('mongodb://localhost/avengersdb', { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Connected to the db successfully....!!'))
.catch((err) => console.log('Error__ Cannot connect to the db : ', err));

app.use(express.json()); //inbuilt express middleware to parse json
app.use(authenticate);  //coustom created authentication middleware
app.use(email);  ////coustom created email send middleware
app.use('/api/avengers', avengers);  //'/api/avengers' related route handler middleware
app.use('/', home);  //root route handler middleware

app.listen(PORT, () => {
    console.log("Listning on PORT " + PORT);
});