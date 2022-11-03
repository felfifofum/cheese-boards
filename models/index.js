// Associations
const Cheese = require("./cheese.model");
const Board = require("./board.model");
const User = require("./user.model");

// One-to-many - User & Board
User.hasMany(Board);
Board.belongsTo(User); //putting foreign key in the board - will have extra column w user id

// Many-to-many - Boards & Cheeses
Board.belongsToMany(Cheese, { through: "Board_Cheese" }); //Board_Cheese created at this point
Cheese.belongsToMany(Board, { through: "Board_Cheese" });

module.exports = { Cheese, Board, User };
