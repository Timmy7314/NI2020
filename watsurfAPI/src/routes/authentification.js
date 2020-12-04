const express = require('express');
const router = express.Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');

router.post('/auth/login', (req, res) => {
    try {
        user.find({email: req.body.email}).then(usr => {           
            const cpwd = crypto.SHA256(req.body.pwd).toString();
            usr = usr[0];
            
            if(cpwd !== usr.pwd){
                res.status(401).send('Incorrect password!');
            }
    
            const token = jwt.sign(
                {
                    userId: usr._id,
                    email: usr.email
                },
                'RANDOM_TOKEN_SECRET',
                {expiresIn: '4h'}
            );
    
            res.json({
                email: usr.email,
                pseudo: usr.pseudo,
                token: token
            })
        }).catch(err => res.status(401).send(err));
    } catch (error) {
        res.status(5000).json(error);
    }
});

module.exports = router;