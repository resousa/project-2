'use strict';

const db = require(`../models`);

module.exports = app => {
app.get(`/api/sales`, (req, res) => {
    db.Shoe.findAll({
        attributes: [[db.sequelize.literal('SUM(inventory_sold * retail_price)'), 'result']],
    })
    .then(totalSold => {
      res.json(totalSold);
    });
  });

  app.get(`/api/costs`, (req, res) => {
    db.Shoe.findAll({
        attributes: [[db.sequelize.literal('SUM(inventory_sold * cost)'), 'result']],
    })
    .then(totalCost => {
      res.json(totalCost);
    });
  });


}