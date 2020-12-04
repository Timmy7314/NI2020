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
    user.create(req.body, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    })?.catch(err => res.json(err));
});

router.put('/users/:pseudo([a-z]+)', (req, res) => {
    user.update(req.body, req.params.pseudo, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    })?.catch(err => res.json(err));
}); 

router.delete('/users/:pseudo([a-z]+)', (req, res) => {
    user.remove(req.params.pseudo, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}); 


module.exports = router;
