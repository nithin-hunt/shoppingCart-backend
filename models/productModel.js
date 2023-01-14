const {DataTypes} = require('sequelize');
const {createDB} = require('../config/db');

const Product = createDB.define("products", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    productImage: DataTypes.STRING,
    date: DataTypes.STRING,
    brand: DataTypes.STRING,
    cost: DataTypes.INTEGER
});

module.exports = Product;