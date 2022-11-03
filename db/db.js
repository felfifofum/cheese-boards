// Create a file for your database connection and connect to your database using sequelize

const { Sequelize } = require("sequelize");
const path = require("path"); // Path is a library, when you have node, path lib is avaliable

// Creating new instance of sequelize class
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "iStiltonLikeCheese.sqlite"),
  logging: false,
});

module.exports = db;
