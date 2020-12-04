const Joi = require('joi');
const mongoCli = require('../db/connection');
const crypto = require('crypto-js');

const userSchema = Joi.object().keys({
    pseudo: Joi.string().required(),
    email: Joi.string().email().required(),
    pwd: Joi.string().required(),
    score: Joi.number().positive().min(0).default(0)
});

function find(predicat) {
    const db = mongoCli.getDb();
    return db.collection('user').find(predicat).toArray();
}

function create(usr) {
    const db = mongoCli.getDb();
    const check = userSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        usr.pwd = crypto.SHA256(usr.pwd).toString();
        usr.score = usr.score || 0;
        return db.collection('user').insertOne(usr);
    }
}

function update(usr, pseudo) {
    const db = mongoCli.getDb();
    const check = userSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check.error.details);
    } else {
        usr.pwd = crypto.SHA256(usr.pwd).toString();
        usr.score = usr.score || 0;
        return db.collection('user').updateOne({pseudo: pseudo}, {$set: usr});
    }
}

function remove(pseudo){
    const db = mongoCli.getDb();
    return db.collection('user').deleteOne({pseudo: pseudo});
}

module.exports = {
    find,
    create,
    update,
    remove
}