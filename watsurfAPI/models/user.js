const Joi = require('joi');
const mongoCli = require('../db/connection');

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

function create(usr) {
    const db = mongoCli.getDb();
    const check = userSchema.validate(usr);
    if(check.error || check.errors){
        return Promise.reject(check);
    } else {
        return db.collection('user').insert(user);
    }
}

module.exports = {
    find,
    create
}