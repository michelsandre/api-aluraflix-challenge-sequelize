"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Título é obrigatório" },
        },
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Descrição é obrigatória" },
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "É necessário indicar a URL" },
        },
      },
    },
    {
      sequelize,
      modelName: "Video",
      tableName: "videos",
    }
  );
  return Video;
};
