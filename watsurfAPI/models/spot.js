const mongoose = require('../db/connection'); 

const spotSchema = mongoose.Schema({
    name: String,
    seaFloor: String,
    gps: {
        x: Number,
        y: Number
    }
});

const Spot = mongoose.model('Spot', userSchema);

module.exports = Spot;