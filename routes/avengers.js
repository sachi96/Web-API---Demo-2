const express = require('express');
const router = express.Router();

let avengerArray = [
    {id: 1, name: "IronMan"},
    {id: 2, name: "Caption America"},
    {id: 3, name: "Thor"}
];

router.get("/", (req, res) => {
    res.send(avengerArray);
});

router.get("/:id", (req, res) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID);
    if(!avenger)
    {
        return res.status(404).send("The Avenger you looking for is does not exist");
    }
    console.log(avenger);
    res.status(200).send(avenger);
});

router.put("/:id", (req, res) =>{
    let requestedID = req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID);
    if(!avenger)
    {
        return res.status(404).send("The Avenger you looking for is does not exist");
    }
    avenger.name = req.body.name;
    return res.send(avenger);
});

router.post("/", (req, res) => {
    if(!req.body.name)
    {
        return res.status(400).send("Bad Request");
    }
    let newAvenger = {
        id: avengerArray.length + 1,
        name: req.body.name
    }
    avengerArray.push(newAvenger);
    res.send(newAvenger);
});

router.delete("/:id", (req, res) => {
    let requestedID = req.params.id;
    let avenger = avengerArray.find(avenger => avenger.id == requestedID);
    if(!avenger)
    {
        return res.status(404).send("The Avenger you looking for is does not exist");
    }
    let indexOfAvenger = avengerArray.indexOf(avenger);
    avengerArray.splice(indexOfAvenger, 1);

    res.send(avenger);
});

module.exports = router;