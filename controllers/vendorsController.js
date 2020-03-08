"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/vendors`, (req, res) => {
    db.Vendor.findAll({}).then(dbVendor => {
      res.json(dbVendor);
    });
  });

  app.get(`/api/vendors/:name`, (req, res) => {
    db.Vendor.findOne({
      where: {
        name: req.params.name
      }
    }).then(dbVendor => {
      res.json(dbVendor);
    });
  });

  app.delete(`/api/vendors/:name`, (req, res) => {
    db.Vendor.destroy({
      where: {
        name: req.params.name
      }
    }).then(dbVendor => {
      res.json(dbVendor);
    });
  });

  app.post(`/api/vendors/add`, (req, res) => {
    db.Vendor.create({
      sku: req.body.sku,
      style: req.body.style,
      name: req.body.name,
      inventory: req.body.inventory,
      retail_price: req.body.retail_price,
      cost: req.body.cost
    })
      .then(dbVendor => {
        res.json(dbVendor);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};