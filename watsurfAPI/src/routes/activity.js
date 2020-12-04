const express = require('express');
const router = express.Router();
const activity = require('../models/activity');

router.get('/activities', (req, res, next) => {
    activity.find()
        .then(activities => res.json(activities))
        .catch(err => res.status(400).send(err));
});

router.get('/activities/:spot([a-z]+)', (req, res) => {
    var query = {spot: req.params.spot};
    
    if(req.query.start){
        query.start = req.query.start
    }
    
    if(req.query.end){
        query.end = req.query.end
    }

    activity.find(query)
        .then(activities => res.json(activities))
        .catch(err => res.status(400).send(err));
});

router.post('/activities', (req, res) => {
    activity.create(req.body)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).send(err));
});

router.put('/activities/:spot([a-z]+)', (req, res) => {
    if(!req.query.start || req.query.end){
        res.status(400).json({error: "The query params start ant end are required."})
    }
    
    var query = {
        spot: req.params.spot,
        start: req.query.start,
        end: req.query.end
    };

    activity.update(req.body, query)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).send(err));
}); 

router.delete('/activities/:spot([a-z]+)', (req, res) => {
    if(!req.query.start || req.query.end){
        res.status(400).json({error: "The query params start ant end are required."})
    }
    
    var query = {
        spot: req.params.spot,
        start: req.query.start,
        end: req.query.end
    };
    activity.remove(query)
        .then(activity => res.json(activity))
        .catch(err => res.status(400).send(err))
});

module.exports = router;