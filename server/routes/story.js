const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.get("/stories", async function (req, response) {
  // let db_connect = dbo.getDb();
  let db_connect = await dbo.getDb(function (err) {
    if (err) console.error(err);
  });
  let results = await db_connect
    .collection("stories")
    .find({})
    .toArray()
    .then((data) => {
      console.log(data);
      response.json(data).status(200);
    });
  // response.send(results).status(200);
});


 
// // This section will help you get a single record by id
// recordRoutes.route("/stories/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("stories")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });


// This section will help you get records by collection
recordRoutes.route("/stories/collections/:collection").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { collection: req.params.collection };
  db_connect
    .collection("stories")
    .find(myquery)
    .toArray()
    .then((data) => {
      console.log(data);
      res.json(data);
    });
 });
  

 recordRoutes.route("/collections").get(function (req, res) {
  let db_connect = dbo.getDb();
  console.log("getting collection")
  db_connect
    .collection("stories")
    .distinct("collection")
    .then((data) => {
      console.log(data);
      res.json(data);
    });
 });
 
// This section will help you create a new record.
recordRoutes.route("/stories/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   narrator: req.body.narrator,
   genre: req.body.genre,
   text: req.body.text,
   img: req.body.img,
   collection: req.body.collection,
   number: req.body.number,
 };
 db_connect.collection("stories").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    narrator: req.body.narrator,
    genre: req.body.genre,
    text: req.body.text,
    img: req.body.img,
    collection: req.body.collection,
      number: req.body.number,
   },
 };
 db_connect
   .collection("stories")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("stories").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;