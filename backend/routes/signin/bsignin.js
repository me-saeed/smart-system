const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {


function sendotp(myph,code){
  var ph='91'+myph;

  const axios = require("axios");
  var url = 'https://api.textlocal.in/send/?apikey=akrUIXWaqFE-Dzmso5T12G2gWQo8X6u99aSwFHz3Vf&numbers='+myph+'&sender=WHOSLR&message=' + encodeURIComponent('This is your one-time password '+code);
    axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }












    router.post("/signin", (req, res1) => {


        var finalcode=Math.floor(1000 + Math.random() * 9000)
        console.log(finalcode);

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("wholesaller");
          
              
                dbo.collection("users").findOne({  email: req.body.email,pass:req.body.showpassword }, function (err, result) {
                  if (err) throw err;
                  console.log(result);
                  if (result == null) {
                   
                    res1.json("fail");
                  }
        
                else{
                  sendotp(result.phone,finalcode)
                  result["otp"] = finalcode;

                  sendotp()
                  console.log(result)
                    res1.json(result);
                }
              });
    
              
    
            
          
      });
    
        
         });


};