const express = require('express');
const router = express.Router();
const spot = require('../models/spot');
const auth = require('../services/authorization');

router.get('/spots', (req, res, next) => {
    auth(req.headers)
        .then(() => {
            spot.find()
                .then(spots => res.json(spots))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));

});

router.get('/spots/:name([a-z]+)', (req, res) => {
    auth(req.headers)
        .then(() => {
            spot.find(req.params)
                .then(spot => res.json(spot))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));

});

router.post('/spots', (req, res) => {
    auth(req.headers)
        .then(() => {
            spot.create(req.body)
                .then(spot => res.json(spot))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));

});

router.put('/spots/:name([a-z]+)', (req, res) => {
    auth(req.headers)
        .then(() => {
            spot.update(req.body, req.params.name)
                .then(spot => res.json(spot))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));

});

router.delete('/spots/:name([a-z]+)', (req, res) => {
    auth(req.headers)
        .then(() => {
            spot.remove(req.params.name)
                .then(spot => res.json(spot))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(401).json(err));

});



module.exports = router;