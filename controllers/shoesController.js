"use strict";

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/shoes`, (req, res) => {
    db.Shoe.findAll({}).then(dbShoe => {
      res.json(dbShoe);
    });
  });

  app.get(`/api/shoes/:name`, (req, res) => {
    db.Shoe.findOne({
      where: {
        name: req.params.name
      }
    }).then(dbShoe => {
      res.json(dbShoe);
    });
  });

  app.delete(`/api/shoes/:name`, (req, res) => {
    db.Shoe.destroy({
      where: {
        name: req.params.name
      }
    }).then(dbShoe => {
      res.json(dbShoe);
    });
  });

  app.post(`/api/shoes`, (req, res) => {
    db.Shoe.create({
      name: req.body.name,
      contact: req.body.contact,
      adderess: req.body.adderess,
      inventory_purchased: req.body.inventory_purchased,
      contract_end: req.body.contract_end
    })
      .then(dbShoe => {
        res.json(dbShoe);
      })
      .catch(function(err) {
        res.json(err);
      });
  });
};