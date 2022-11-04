const { Cheese } = require("../models/");
const db = require("cheese-boards/db/db.js");
const seed = require("cheese-boards/db/seed.js");

beforeEach(async () => {
  await Cheese.sync({ force: true });
  await seed();
});

describe("The Cheese table", () => {
  test("Propensity to make an instance of Cheese i.e. a new cheese has title and desc", async () => {
    await Cheese.create({
      title: "Parmesan",
      description: "It has a somewhat gritty texture and a strong umami taste.",
    });
    const newCheese = await Cheese.findAll({
      where: {
        title: "Parmesan",
        description:
          "It has a somewhat gritty texture and a strong umami taste.",
      },
    });

    // getDataValue() - finds what's inside the key
    expect(newCheese[0].getDataValue("title")).toMatch("Parmesan");
  });

  test("has an title entity", async () => {
    const cheeseTest = await Cheese.findAll({
      where: { title: "Parmesan" },
    });

    // getDataValue() - finds what's inside the key
    expect(cheeseTest[0].getDataValue("title")).toMatch("Parmesan");
  });
  test("has a description entity", async () => {
    const cheeseTest = await Cheese.findAll({
      where: {
        description:
          "It has a somewhat gritty texture and a strong umami taste.",
      },
    });

    // getDataValue() - finds what's inside the key
    expect(cheeseTest[0].getDataValue("description")).toMatch(
      "It has a somewhat gritty texture and a strong umami taste."
    );
  });
});
