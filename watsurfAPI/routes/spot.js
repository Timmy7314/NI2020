var express = require('express');
var router = express.Router();
var spot = require('../models/spot');

router.get('/spots', (req, res, next) => {
    spot.find(undefined, (err, spots) => {
        if (err) {
            res.send(err);
        }

        res.json(spots)
    });
});

router.get('/spots/:name([a-z]+)', (req, res) => {
    spot.find(req.params, (err, spots) => {
        if (err) {
            res.send(err);
        }

        if(spots.length == 1){
            res.json(spots[0]);
        } else {
            res.json(spots);
        }
    });
});

router.post('/spots', (req, res) => {
    spot.create(req.body, (err, spot) => {
        if(err){
            res.send(err);
        }
        res.json(spot);
    })?.catch(err => res.json(err));
});

router.put('/spots/:name([a-z]+)', (req, res) => {
    spot.update(req.body, req.params.name, (err, spot) => {
        if(err){
            res.send(err);
        }
        res.json(spot);
    });
})?.catch(err => res.json(err)); 

router.delete('/spots/:name([a-z]+)', (req, res) => {
    spot.remove(req.params.name, (err, spot) => {
        if(err){
            res.send(err);
        }
        res.json(spot);
    });
}); 



module.exports = router;