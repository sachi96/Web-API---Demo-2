const mongoose = require('mongoose');

const avengerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    birthname: String,
    movies: {
        type: [String],
        enum: ["End Gane","Infinity War","Iron Man 1","Iron Man 2","Iron Man 3"],
        required: true
    },
    likeCount: Number,
    imageUrl: {
        type: String,
        default: "http://bascacakca"
    },
    deceased: Boolean
});

const avenger = mongoose.model("Avenger", avengerSchema);

module.exports = avenger;