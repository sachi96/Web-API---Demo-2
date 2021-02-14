const express = require('express');
const router = express.Router();
const Avenger = require('../models/avenger')

router.get("/", async (req, res) => {
    try{
        let avengers = await Avenger.find();
        res.send(avengers);
    }
    catch(err){
        return res.status(500).send("Error: ", err.message);
    }
    
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

router.post("/", async (req, res) => {
    if(!req.body.name)
    {
        return res.status(400).send("Bad Request");
    }
    let newAvenger = new Avenger({
        name: req.body.name,
        birthname: req.body.birthname,
        movies: req.body.movies,
        likeCount: req.body.likeCount,
        imageUrl: req.body.imageUrl,
        deceased: req.body.deceased
    });
    try{
        newAvenger = await newAvenger.save();
        return res.send(newAvenger);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
    
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