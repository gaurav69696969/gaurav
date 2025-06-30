import { DataTypes } from "sequelize";
import { sequelize } from "../../db.config.js";

export const ContactsSchema = sequelize.define(
  "Contacts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true
    }
  },
  { tableName: "contacts" }
);

// export const ContactsModel = ContactsSchema.Model("contacts");
