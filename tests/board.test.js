const { Board, User, Cheese } = require("../models/");
const db = require("cheese-boards/db/db.js");
const seed = require("cheese-boards/db/seed.js");
beforeEach(async () => {
  await Board.sync({ force: true });
  await seed();
});

describe("The Board table", () => {
  test("Propensity to make an instance of Board i.e. a new board has been created with type, desc, rating etc", async () => {
    await Board.create({
      type: "frenchCheese",
      description: "An affair of French gastrononic cheeses for you to degust.",
      rating: -1,
    });
    const newBoard = await Board.findAll({
      where: {
        type: "frenchCheese",
        description:
          "An affair of French gastrononic cheeses for you to degust.",
        rating: -1,
      },
    });
    // getDataValue() - finds what's inside the key
    expect(newBoard[0].getDataValue("type")).toMatch("frenchCheese");
  });

  test("has a type entity", async () => {
    const boardTest = await Board.findAll({
      where: { type: "frenchCheese" },
    });
    // getDataValue() - finds what's inside the key
    expect(boardTest[0].getDataValue("type")).toMatch("frenchCheese");
  });

  test("has a description entity", async () => {
    const boardTest = await Board.findAll({
      where: {
        description:
          "An affair of French gastrononic cheeses for you to degust.",
      },
    });

    // getDataValue() - finds what's inside the key
    expect(boardTest[0].getDataValue("description")).toMatch(
      "An affair of French gastrononic cheeses for you to degust."
    );
  });

  test("has a rating entity", async () => {
    const boardTest = await Board.findAll({
      where: { rating: -1 },
    });
  });

  test("Rating is of data type integer", async () => {
    const boardTest = await Board.findOne({
      where: { rating: -1 },
    });
    expect(boardTest.getDataValue("rating")).toBeGreaterThan(-100);
  });
});

// Associations testing
// One-to-many
describe("The model associations", () => {
  test("allow for a hungry user to have one board", async () => {
    // Call a board so can use it to test user
    const boards = await Board.findAll();

    // call a user + including the class Board - so test user can include the board methods

    const testUser = await User.findOne({
      where: {
        name: "Saul",
      },
      include: Board,
    });

    // adding the first board from the constant boards french cheeses, so now lngth should be 1    // Put in array [] boards u want to add

    await testUser.addBoard(boards[0]);
    expect(await testUser.countBoards()).toBe(1);
  });

  test("Should add many boards to a hungry user", async () => {
    const boards = await Board.findAll();

    // Eager loading - the Board or whatever has to be related to the thing
    const testUser = await User.findOne({
      where: {
        name: "Felix",
      },
      include: Board,
    });

    testUser.addBoards(boards[1], boards[2]);
    await testUser.addBoard(boards[0]);
    expect(await testUser.countBoards()).toBe(2);
  });

  // Many-to-many
  test("many boards can have many cheeses", async () => {
    // const boards = await Board.findAll();
    // const boardCheeses = await boards.getCheeses();

    // expect(await boardCheeses.hasCheeses()).toBeTruthy();
    const cheese1 = await Cheese.findByPk(1);
    const cheese2 = await Cheese.findByPk(2);
    const board = await Board.findByPk(1);

    await board.addCheeses([cheese1, cheese2]);
    expect(await board.countCheeses()).toBe(2);
  });
});
