// Import MySql Connection
const connection = require('./connection.js');

// Helper function to convert object key/value pairs to SQL syntax
var orm = {
    objToSql: function (ob) {
        var arr = [];
        for (var key in ob) {
            var value = ob[key];
            // check to skip hidden properties
            if (Object.hasOwnProperty.call(ob, key)) {
                // if string with spaces, add quotations cheese burger => "cheese burger"
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                }
                // e.g. {name: 'cheese burger'} => ["name='cheese burger'"]
                // e.g. {devoured: true} => ["devoured=true"]
                arr.push(key + "=" + value);
            }
        }

        // translate array of strings to a single comma-separated string
        return arr.toString();
    },
    all: function (table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    create: function (vals, cb) {
        // add input string as burger_name value into burgers table
        let queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    update: function (id, cb) {
        // Set 'devoured' condition to true based on id
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";

        console.log(queryString);
        connection.query(queryString, id, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }

}
// Export the orm object for the model (burgers.js).
module.exports = orm;