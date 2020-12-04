var express = require('express');
var router = express.Router();
var activity = require('../models/activity');

router.get('/activities', (req, res, next) => {
    activity.find(undefined, (err, activities) => {
        if (err) {
            res.send(err);
        }

        res.json(activities)
    });
});

router.get('/activities/:spot([a-z]+)', (req, res) => {
    var query = {spot: req.params.spot};
    
    if(req.query.start){
        query.start = req.query.start
    }
    
    if(req.query.end){
        query.end = req.query.end
    }

    activity.find(query, (err, activities) => {
        if (err) {
            res.send(err);
        }

        if(activities.length == 1){
            res.json(activities[0]);
        } else {
            res.json(activities);
        }
    });
});

router.post('/activities', (req, res) => {
    activity.create(req.body, (err, activity) => {
        if(err){
            res.send(err);
        }
        res.json(activity);
    })?.catch(err => res.json(err));
});

router.put('/activities/:spot([a-z]+)', (req, res) => {
    if(!req.query.start || req.query.end){
        res.json({error: "The query params start ant end are required."})
    }
    
    var query = {
        spot: req.params.spot,
        start: req.query.start,
        end: req.query.end
    };

    activity.update(req.body, query, (err, activity) => {
        if(err){
            res.send(err);
        }
        res.json(activity);
    })?.catch(err => res.json(err));
}); 

router.delete('/activities/:spot([a-z]+)', (req, res) => {
    if(!req.query.start || req.query.end){
        res.json({error: "The query params start ant end are required."})
    }
    
    var query = {
        spot: req.params.spot,
        start: req.query.start,
        end: req.query.end
    };
    activity.remove(query, (err, activity) => {
        if(err){
            res.send(err);
        }
        res.json(activity);
    });
});

module.exports = router;