const mongoose = require('../db/connection'); 

const activitySchema = mongoose.Schema({
    spot: {type: mongoose.Schema.Types.ObjectId, ref: 'Spot'},
    begin: {type: Date, default: Date.now},
    end: Date,
    swell: String
});

const Activity = mongoose.model('Activity', userSchema);

module.exports = Activity;