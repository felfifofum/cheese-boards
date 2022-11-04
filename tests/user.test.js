const { User } = require("../models/");
const db = require("cheese-boards/db/db.js");
const seed = require("cheese-boards/db/seed.js");

describe("The User table", () => {
  beforeEach(async () => {
    await User.sync({ force: true });
    await seed();
  });

  test("Propensity to make an instance of User i.e. Felix has just created an account", async () => {
    await User.create({ name: "Felix", email: "felix@yahoo.com" });
    const newUser = await User.findAll({
      where: { name: "Felix", email: "felix@yahoo.com" },
    });

    // getDataValue() - finds what's inside the key
    expect(newUser[0].getDataValue("email")).toMatch("felix@yahoo.com");
  });

  test("User should authomatically have an id column", async () => {
    const userTest = await User.findAll({
      where: { name: "Felix", email: "felix@yahoo.com" },
    });

    expect(userTest[0].getDataValue("id")).toBeTruthy();
  });

  test("has an email entity", async () => {
    const userTest = await User.findAll({
      where: { email: "felix@yahoo.com" },
    });

    // getDataValue() - finds what's inside the key
    expect(userTest[0].getDataValue("email")).toMatch("felix@yahoo.com");
  });
  test("has a name entity", async () => {
    const userTest = await User.findAll({
      where: { name: "Felix" },
    });

    // getDataValue() - finds what's inside the key
    expect(userTest[0].getDataValue("name")).toMatch("Felix");
  });
});
