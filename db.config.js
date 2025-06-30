import { Sequelize } from "sequelize";
// import { ContactsSchema } from "./src/schema/contacts.schema.js";

export const sequelize = new Sequelize("gaurav_test", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export async function dbConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("DB has beeen connected");
  } catch (error) {
    console.log("Error while connecting DB", error);
  }
}
