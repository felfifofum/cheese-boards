// Associations
const Cheese = require("./cheese.model");
const Board = require("./board.model");
const User = require("./user.model");

// If one--to-one its setBoard(), but cant use set cos User can only hve 1 Board - one-to one

// One-to-many - User & Board
// Now can do: user.getBoards() - returns array | board.getUser() - cos there's only one user
User.hasMany(Board);
Board.belongsTo(User); //putting foreign key in the board - board will have extra column w user id

// Many-to-many - Boards & Cheeses
Board.belongsToMany(Cheese, { through: "Board_Cheese" }); //Board_Cheese created at this point
Cheese.belongsToMany(Board, { through: "Board_Cheese" });

module.exports = { Cheese, Board, User };
