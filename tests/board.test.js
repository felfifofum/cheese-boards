const { Board } = require("../models/");
const db = require("cheese-boards/db/db.js");
const seed = require("cheese-boards/db/seed.js");

describe("The Board table", () => {
  beforeEach(async () => {
    await Board.sync({ force: true });
    await seed();
  });

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
