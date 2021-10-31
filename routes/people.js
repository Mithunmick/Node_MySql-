const express = require('express');
const Route = express.Router();
const mysqlConnection = require('../connection');

Route.get('/', (req, res) => {
  mysqlConnection.query('SELECT * from people', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log('error');
    }
  });
});

module.exports = Route;
