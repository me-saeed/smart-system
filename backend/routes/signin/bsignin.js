const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {



 router.post("/memberlogin", (req, res1) => {


        var finalcode=Math.floor(1000 + Math.random() * 9000)
        console.log(finalcode);

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("smartsystem");
          
              
                dbo.collection("users").findOne({  email: req.body.email,pass:req.body.pass }, function (err, result) {
                  if (err) throw err;
                  console.log(result);
                  if (result == null) {
                   
                    res1.json("fail");
                  }
        
                else{
               
                  console.log(result)
                    res1.json(result);
                }
              });
    
              
    
            
          
      });
    
        
         });


};