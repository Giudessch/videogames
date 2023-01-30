const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('genre', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING
      }
    })
};