const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome User");
});

// app.listen(PORT, function(){
//     console.log("Listning on PORT " + PORT);
// });

app.listen(PORT, () => {
    console.log("Listning on PORT " + PORT);
});