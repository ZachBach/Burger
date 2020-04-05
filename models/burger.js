var orm = require("../config/orm.js");


var burger = {


    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(vals, callback) {
        orm.insertOne("burgers", "burger_name", vals, function(res) {
            console.log("Inserted a burger to be devoured: ", vals)
            callback(res);
        })
    },

    updateOne: function(colVal, id, callback) {
        orm.updateOne(colVal, id, function(res){
            callback(res)
        });
    },
    
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
};



module.exports = burger;