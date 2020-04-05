var connection = require("./connection");

var orm = {
    selectAll: function(table,callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err,result){
            if (err) throw err;
            callback(result);
        });
    },

    insertOne : function(table, cols, vals, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, cols, vals], function(err, data){
            if (err) throw err;
            callback(data);
        });
    },

    updateOne : function(colVal, id, callback) {
        var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    
    deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}

module.exports = orm;