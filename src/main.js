const { Board, Cheese, User } = require("../models");

async function main() {
  // // Grabbing references to instances
  // const user2 = await User.findByPk(2);
  // const board1 = await Board.findByPk(1);
  // // Looks for every board in the boards table that belongs to user2 - Saul - array
  // const data = await user2.getBoards();
  // console.table(data.map((b) => b.toJSON()));
  // // Counts how many boards user2 has
  // const count = await user2.countBoards();
  // console.log(count);
  // // Removes user2's - Sauls - first board
  // // await user2.removeBoard(data[0])
  // // Getting the board's cheeses
  // const boardCheeses = await board1.getCheeses();
  // console.table(boardCheeses.map((c) => c.toJSON()));
}

main();
