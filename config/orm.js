var connection = require("./connection");

var orm = {
  selectAll: function (table, cb) {
    connection.query(`SELECT * FROM ${table}`, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cb) {
    connection.query(`INTERT INTO ${table} (burger_name) VALUES ?`, req.body.burger, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
//   updateOne: function (table, cb) {
//     connection.query(`UPDATE ${table} SET ? WHERE id = `, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },
};
