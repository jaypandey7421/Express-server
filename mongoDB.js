const { json } = require("body-parser");
const { MongoClient } = require("mongodb");

require('dotenv').config();

const uri = process.env.MONGO_CONNECTION_STRING;

async function connectToDB() {
  const client = new MongoClient(uri);
  const database = client.db('sample_mflix');
  return {
    db: database,
    client: client
  };
}

async function findDocument(db, searchDoc) {
  const userCollection = db.collection('users');
  const document = await userCollection.findOne(searchDoc);

  return document;
}

async function indsertDocument(db, insertDoc) {
  const userCollection = db.collection('user');
  await userCollection.insertOne({
    user: insertDoc.user, 
    email: insertDoc.email, 
    password: insertDoc.password});
}

module.exports = { 
      connectToDB, 
      findDocument, 
      indsertDocument
    };


