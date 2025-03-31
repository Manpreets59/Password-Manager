const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");

dotenv.config();

//connection url
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

//database name
const dbName = "passop";
const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(cors());

client.connect();

//Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save or update a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const insertResult = await collection.insertOne(password);
  res.json({ success: true, result: insertResult });
});

// Delete a password by id
app.delete("/", async (req, res) => {
  const { id } = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const deleteResult = await collection.deleteOne({ id });
  if (deleteResult.deletedCount === 1) {
    res.json({ success: true, message: "Password deleted successfully" });
  } else {
    res.json({ success: false, message: "Password not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
