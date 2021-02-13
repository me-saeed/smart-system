const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {

    router.post("/editprofile", (req, res1) => {


var myid=req.body._id;
delete req.body["_id"];



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smartsystem");
  var myquery = {_id:ObjectId(myid)};
  var newvalues = { $set: req.body };
  dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    dbo.collection("users").findOne({_id:ObjectId(myid)}, function(err, result) {
      if (err) throw err;
      res1.json(result)
      db.close();
    });
  });
        
         });
        });

};