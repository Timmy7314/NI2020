const mongoose = require('../db/connection'); 

const userSchema = mongoose.Schema({
    pseudo: String,
    email: String,
    pwd: String,
    score: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;