const Joi = require('joi');
const mongoCli = require('../db/connection');
const crypto = require('crypto-js');
const spot = require('./spot');

const activitySchema = Joi.object().keys({
    start: Joi.date().iso().default(Date.now()).required(),
    end: Joi.date().iso().required(),
    swell: Joi.string(),
    tide: Joi.string(),
    wind: Joi.string(),
    nbSwimers: Joi.number().min(0).default(0).required(),
    nbBoats: Joi.number().min(0).default(0).required(),
    nbNauticalActivity: Joi.number().min(0).default(0).required(),
    pollution: Joi.string(),
    waterman: Joi.string().required(),
    productsUsed: Joi.array().items(Joi.string()),
    spot: Joi.string().required()
});

function find(predicat, callback) {
    const db = mongoCli.getDb();
    db.collection('activity').find(predicat).toArray(callback);
}

function create(activity, callback) {
    const db = mongoCli.getDb();
    const check = activitySchema.validate(activity);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        spot.find({name: activity.spot}, (err, s) => {
            if(err || s.length < 1){
                return Promise.reject({error: "Spot " + activity.spot + " not found"})
            }

            db.collection('activity').insertOne(activity, callback);
        });
    }
}

function update(usr, query, callback) {
    const db = mongoCli.getDb();
    const check = activitySchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        spot.find({name: activity.spot}, (err, s) => {
            if(err || s.length < 1){
                return Promise.reject({error: "Spot " + activity.spot + " not found"})
            }

            db.collection('activity').updateOne(query, {$set: usr}, callback);
        });
    }
}

function remove(query, callback){
    const db = mongoCli.getDb();
    return db.collection('activity').deleteOne(query, callback);
}

module.exports = {
    find,
    create,
    update,
    remove
}