var db = require('./DB');

module.exports.handleSignup = (email,password) => {

    db.saveUser({email,password});
};