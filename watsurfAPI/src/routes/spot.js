const express = require('express');
const router = express.Router();
const spot = require('../models/spot');

router.get('/spots', (req, res, next) => {
    spot.find()
        .then(spots => res.json(spots))
        .catch(err => res.status(400).send(err));
});

router.get('/spots/:name([a-z]+)', (req, res) => {
    spot.find(req.params)
        .then(spot => res.json(spot))
        .catch(err => res.status(400).send(err));
});

router.post('/spots', (req, res) => {
    spot.create(req.body)
        .then(spot => res.json(spot))
        .catch(err => res.status(400).send(err));
});

router.put('/spots/:name([a-z]+)', (req, res) => {
    spot.update(req.body, req.params.name)
        .then(spot => res.json(spot))
        .catch(err => res.status(400).send(err));
});

router.delete('/spots/:name([a-z]+)', (req, res) => {
    spot.remove(req.params.name)
        .then(spot => res.json(spot))
        .catch(err => res.status(400).send(err));
}); 



module.exports = router;