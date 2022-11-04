const { Board, Cheese, User } = require("../models");
const db = require("./db");

async function seed() {
  await db.sync({
    force: true,
  });

  const cheeses = await Cheese.bulkCreate(
    [
      {
        title: "Parmesan",
        description:
          "It has a somewhat gritty texture and a strong umami taste.",
      },
    ],
    { validate: true }
  );

  const boards = await Board.bulkCreate(
    [
      {
        type: "frenchCheese",
        description:
          "An affair of French gastrononic cheeses for you to degust.",
        rating: -1,
      },
    ],
    { validate: true }
  );

  const users = await User.bulkCreate(
    [
      {
        name: "Felix",
        email: "felix@yahoo.com",
      },
    ],
    { validate: true }
  );

  // // Create a board, add board to user 1 - way 1
  // const user2 = await User.create({ name: "Saul", email: "saul@gmail.com" });
  // const board2 = await Board.create({
  //   type: "French Cheese",
  //   description: "Lo behold! Some even smellier French gastronomic cheeses.",
  //   rating: -1,
  // });
  // user2.addBoard(board2);

  // // Adding cheese to board - way 2
  // await boards[0].addCheese(cheeses[0]);
}

// seed(); // First time you run, thats when the actual dsatabase gets created

module.exports = seed;
