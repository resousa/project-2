'use strict'

module.exports = function(sequelize, DataTypes) {
    var Supplier = sequelize.define("Supplier", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
          validate: {
            len: [1,10]
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplies: {
        type: DataTypes.STRING,
        allowNull: false
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      supplies_purchased: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      unit_cost: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    });

    return Supplier;
  };