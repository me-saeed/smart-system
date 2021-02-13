const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;

module.exports = function(router) {

    router.post("/editprofile", (req, res1) => {
id=req.body._id
      delete req.body ['_id']
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("smartsystem");
        var myquery = { _id: ObjectId(id) };
        
        var newvalues = { $set: req.body };
        dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
         
        


          dbo.collection("users").findOne({ _id: ObjectId(id)}, function(err, result) {
            if (err) throw err;
            console.log(result);
       
           res1.json(result)
          });


       
        });
      });
 
    
        
         });


};