const express = require('express');
const router = express.Router();
const user = require('../models/user');
const auth = require('../services/authorization');

router.get('/users', (req, res, next) => {
    auth(req.headers.authorization)
        .then(() => {
            user.find()
            .then(users => res.json(users))
            .catch(err  => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));
});

router.get('/users/:pseudo([a-z]+)', (req, res) => {
    auth(req.headers.authorization)
        .then(() => {
            user.find(req.params)
            .then(usr => res.json(usr))
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(401).json(err));
    
});

router.post('/users', (req, res) => {
    auth(req.headers.authorization)
        .then(() => {
            user.create(req.body)
            .then(usr => res.json(usr))
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(401).json(err));
    
});

router.put('/users/:pseudo([a-z]+)', (req, res) => {
    auth(req.headers.authorization)
        .then(() => {
            user.update(req.body, req.params.pseudo)
            .then(usr => res.json(usr))
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(401).json(err));
   
});

router.delete('/users/:pseudo([a-z]+)', (req, res) => {
    auth(req.headers.authorization)
        .then(() => {
            user.remove(req.params.pseudo)
            .then(usr => res.json(usr))
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(401).json(err));
    
}); 


module.exports = router;
