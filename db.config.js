import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("gaurav_test", "root", "StrongPassword123", {
  host: "localhost",
  dialect: "mysql",
  logging: false // optional, disables SQL logging in console
});

export async function dbConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("✅ DB has been connected");
  } catch (error) {
    console.log("❌ Error while connecting DB", error);
  }
}
