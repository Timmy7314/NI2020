var express = require('express');
var router = express.Router();
var mongoCli = require('../db/connection');

/* GET home page. */
router.get('/users', (req, res, next) => {
    var db = mongoCli.getDb()
    db.collection('user').find().toArray((err, users) => {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });
});

module.exports = router;
