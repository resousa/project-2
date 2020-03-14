

module.exports = function(sequelize, DataTypes) {
  const Vendor = sequelize.define(`Vendor`, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        len: [1, 10]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inventory_purchased: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_end: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  return Vendor;
};
