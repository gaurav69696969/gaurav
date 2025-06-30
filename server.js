import expess from "express";
import { dbConnection } from "./db.config.js";
import { getContacts, createContacts } from "./src/controllers/contacts.js";

const app = expess();

app.use(expess.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ data: null, status: true, message: "Welcome to app" });
});

app.get("/api/contacts", getContacts);

app.post("/api/contacts", createContacts);
app.listen(8080, () => {
  dbConnection();
  console.log("Server runs on 8080");
});
