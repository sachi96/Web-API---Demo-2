const express = require('express');
const app = express();
const PORT = 3000;

let avengerArray = [
    {id: 1, name: "IronMan"},
    {id: 2, name: "Caption America"},
    {id: 3, name: "Thor"}
];

app.get("/", (req, res) => {
    res.send("Welcome Avengers");
});

app.get("/api/avengers", (req, res) => {
    res.send(avengerArray);
});

// app.get("/api/avengers/1", (req, res) => {
//     res.send(avengerArray[0]);
// });

// app.get("/api/avengers/2", (req, res) => {
//     res.send(avengerArray[1]);
// });

// app.get("/api/avengers/3", (req, res) => {
//     res.send(avengerArray[2]);
// });

app.get("/api/avengers/:id", (req, res) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID);
    if(!avenger)
    {
        return res.status(404).send("The Avenger you looking for is does not exist");
    }
    console.log(avenger);
    res.status(200).send(avenger);
});

app.put("/api/:id", (req, res) =>{
    let requestedID = req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID);
    if(!avenger)
    {
        return res.status(404).send("The Avenger you looking for is does not exist");
    }
    avenger.name = req.body.name;
    return res.send("Avenger updated successfully");
})

// app.listen(PORT, function(){
//     console.log("Listning on PORT " + PORT);
// });

app.listen(PORT, () => {
    console.log("Listning on PORT " + PORT);
});