const { Board, Cheese, User } = require("../models");

async function main() {
  // one-to-many
  // many-to-many
  let boards = await Board.findAll();
}

main();
