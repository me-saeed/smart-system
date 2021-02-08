const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {

    router.post("/editbusiness", (req, res1) => {


        ////var finalcode=Math.floor(100 + Math.random() * 9000);
        const axios = require("axios");
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("wholesaller");
          
              
                dbo.collection("users").findOne({  name: req.body.id}, function (err, result) {
                  if (err) throw err;
                  console.log(result);
                  if (result == null) {
                    var userobj ={
                      name: '',
                      
                      
                      pic:'https://i.ibb.co/6gB1mQF/User-icon.png',
                      
                      
                      
                
                      
                    };
                
                    dbo.collection("users").insertOne(userobj, function(err, res) {
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