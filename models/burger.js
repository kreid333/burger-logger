const orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(cb) {
        orm.insertOne("burgers", function(res) {
            cb(res);
        })
    }
  };

  module.exports = burger;