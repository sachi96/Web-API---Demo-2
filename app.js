const express = require('express');
const authenticate = require('./middlewares/authentication');
const email = require('./middlewares/emails');
const app = express();
const avengers = require('./routes/avengers');
const home = require('./routes/home');
const PORT = 3000;

app.use(express.json()); //inbuilt express middleware to parse json
app.use(authenticate);  //coustom created authentication middleware
app.use(email);  ////coustom created email send middleware
app.use('/api/avengers', avengers);  //'/api/avengers' related route handler middleware
app.use('/', home);  //root route handler middleware

app.listen(PORT, () => {
    console.log("Listning on PORT " + PORT);
});