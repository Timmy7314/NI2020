// var mongoose = require('mongoose');
// mongoose.connect('mongodb://watsurf:watsurf@127.0.0.1:27017/watsurf');

// module.exports = mongoose;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://watsurf:watsurf@127.0.0.1:27017';

var _db;

module.exports = {
    connect: (callback) => {
        MongoClient.connect(url, {useNewUrlParser: true}, (err, cli) => {
            _db = cli.db('watsurf');
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};