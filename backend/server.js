const express = require('express');
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require('body-parser');

dotenv.config();

//connection url
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);


//database name
const dbName = "passop";
const app = express();
const port = 3000;
app.use(bodyparser.json());

client.connect();

//Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

//save a password
app.post("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.insertOne(password);
  res.json({success : true});
});

//delete a password

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
