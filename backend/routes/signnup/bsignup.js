const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {

    router.post("/memberregister", (req, res1) => {


        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("smartsystem");
          
              
                dbo.collection("users").findOne({  email: req.body.email}, function (err, result) {
                  if (err) throw err;
                  console.log(result);
                  if (result == null) {
                   
                    dbo.collection("users").insertOne(req.body, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                      });

                    res1.json("Account created.Now signIn");
                  }
        
                else{

                    res1.json("This Email Already Exist.Try SignIn your account");
                }
              });
    
              
    
            
          
      });
    
        
         });


};