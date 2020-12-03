var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/users', (req, res, next) => {
    user.find(undefined, (err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users)
    });
});

router.get('/users/:pseudo([a-z]+)', (req, res) => {
    user.find(req.params, (err, users) => {
        if (err) {
            res.send(err);
        }

        if(users.length == 1){
            res.json(users[0]);
        } else {
            res.json(users);
        }
    });
});

router.post('/users', (req, res) => {
    user.create(req.body)
            .then(usr =>res.json(usr))
            .catch(err => res.json(err));
});

module.exports = router;
