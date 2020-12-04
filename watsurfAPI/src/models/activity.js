const Joi = require('joi');
const mongoCli = require('../db/connection');
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

function find(predicat) {
    const db = mongoCli.getDb();
    return db.collection('activity').find(predicat).toArray();
}

function create(activity) {
    const db = mongoCli.getDb();
    const check = activitySchema.validate(activity);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        spot.find({name: activity.spot}).then(res => {
            if(res.length < 1){
                return Promise.reject({error: "Spot " + activity.spot + " not found"})
            }

            return db.collection('activity').insertOne(activity);
        });
    }
}

function update(usr, query) {
    const db = mongoCli.getDb();
    const check = activitySchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        spot.find({name: activity.spot}).then(res => {
            if(res.length < 1){
                return Promise.reject({error: "Spot " + activity.spot + " not found"})
            }

            return db.collection('activity').updateOne(query, {$set: usr});
        });
    }
}

function remove(query){
    const db = mongoCli.getDb();
    return db.collection('activity').deleteOne(query);
}

module.exports = {
    find,
    create,
    update,
    remove
}