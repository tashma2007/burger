var orm = require('../config/orm.js');

var burger = {
    //grabs all burgers from database
    all: function (cb) {
        orm.all('burgers', function (res) {
            cb(res);
        })
    },
    // add burgers to database
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    //update burgers within database
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

//export database functions for controller
module.exports = burger;