const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Board extends Model {}
Board.init(
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "Board",
  }
);

module.exports = Board;
