const mongoose = require('mongoose');

const avenger = new mongoose.Schema({
    name: String,
    birthname: String,
    movies: String,
    likeCount: Number,
    deceased: Boolean
});