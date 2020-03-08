"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/suppliers`, (req, res) => {
    db.Supplier.findAll({}).then(dbSupplier => {
      res.json(dbSupplier);
    });
  });
  app.get(`/api/suppliers/:name`, (req, res) => {
    db.Supplier.findOne({
      where: {
        name: req.params.name
      }
    }).then(dbSupplier => {
      res.json(dbSupplier);
    });
  });

  app.delete(`/api/suppliers/:name`, (req, res) => {
    db.Supplier.destroy({
      where: {
        name: req.params.name
      }
    }).then(dbSupplier => {
      res.json(dbSupplier);
    });
  });

  app.post(`/api/suppliers/add`, (req, res) => {
    db.Supplier.create({
      sku: req.body.sku,
      style: req.body.style,
      name: req.body.name,
      inventory: req.body.inventory,
      retail_price: req.body.retail_price,
      cost: req.body.cost
    })
      .then(dbSupplier => {
        res.json(dbSupplier);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};