const Joi = require('joi');
const mongoCli = require('../db/connection');
const crypto = require('crypto-js');

const userSchema = Joi.object().keys({
    pseudo: Joi.string().required(),
    email: Joi.string().email().required(),
    pwd: Joi.string().required(),
    score: Joi.number().positive().min(0).default(0)
});

function find(predicat, callback) {
    const db = mongoCli.getDb();
    db.collection('user').find(predicat).toArray(callback);
}

function create(usr, callback) {
    const db = mongoCli.getDb();
    const check = userSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        usr.pwd = crypto.SHA256(usr.pwd).toString(); 
        return db.collection('user').insertOne(usr, callback);
    }
}

function update(usr, pseudo, callback) {
    const db = mongoCli.getDb();
    const check = userSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        usr.pwd = crypto.SHA256(usr.pwd).toString(); 
        return db.collection('user').updateOne({pseudo: pseudo}, {$set: usr}, callback);
    }
}

function remove(pseudo, callback){
    const db = mongoCli.getDb();
    return db.collection('user').deleteOne({pseudo: pseudo}, callback);
}

module.exports = {
    find,
    create,
    update,
    remove
}