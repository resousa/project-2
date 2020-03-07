'use strict'

module.exports = function (sequelize, DataTypes) {
    const Shoe = sequelize.define("Shoe", {
        
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          len: [1, 9]
        }
      },
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      inventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      inventory_sold: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      retail_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
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
    return Shoe;
};