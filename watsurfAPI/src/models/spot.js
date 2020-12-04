const Joi = require('joi');
const mongoCli = require('../db/connection');

const spotSchema = Joi.object().keys({
    name: Joi.string().required(),
    seaFloor: Joi.string().required(),
    gps: Joi.object().keys({
        lng: Joi.number().required(),
        lat: Joi.number().required()
    }).required()
});

function find(predicat) {
    const db = mongoCli.getDb();
    return db.collection('spot').find(predicat).toArray();
}

function create(spot) {
    const db = mongoCli.getDb();
    const check = spotSchema.validate(spot);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        return db.collection('spot').insertOne(spot);
    }
}

function update(spot, name) {
    const db = mongoCli.getDb();
    const check = spotSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        return db.collection('spot').updateOne({name: name}, {$set: spot});
    }
}

function remove(name){
    const db = mongoCli.getDb();
    return db.collection('spot').deleteOne({name: name});
}


module.exports = {
    find,
    create,
    update,
    remove
}