const user = require('../models/user');
const jwt = require('jsonwebtoken');

function checktoken(headers) {
    if(!headers.authorization){
        return Promise.reject({error: "You must be authenticated to access this resource."})
    }

    const token = headers.authorization;
    const data = jwt.decode(token.substring("Bearer ".length));
    const timespamp = Math.floor(Date.now() / 1000);
    if(timespamp > data.exp){
        return Promise.reject({error: "Token time out"});
    }

    return user.find({_id: data.userId, email: data.email});
}

module.exports = checktoken;