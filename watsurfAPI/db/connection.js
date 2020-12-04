const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://watsurf:watsurf@127.0.0.1:27017';

var _db;

module.exports = {
    connect: (callback) => {
        MongoClient.connect(url, (err, cli) => {
            _db = cli.db('watsurf');
            return callback(err);
        });
    },
    getDb: () => {
        return _db;
    }
};