

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;



module.exports = function(router) {








  router.post("/addsets", (req, res1) => {

///console.log(req.body)

req.body.maindetails.uploderid=ObjectId(req.body.maindetails.uploderid)



MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("wholesaller");
  
      
     
        
            dbo.collection("addlisting").insertOne(req.body, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
              });

            res1.json("Account created.Now signIn");
          

        
    

      

    
  
});


  })




  router.post("/addtocart", (req, res1) => {

    ///console.log(req.body)
    
   /// req.body.maindetails.uploderid=ObjectId(req.body.maindetails.uploderid)
    
    
    
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("wholesaller");
      
          
         
            
                dbo.collection("carts").insertOne(req.body, function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                  });
    
                res1.json("Account created.Now signIn");
              
    
            
        
    
          
    
        
      
    });
    
    
      })


















    router.post("/addlisting", (req, res1) => {
      // var nameArr = req.body.pics.split(',');
      // req.body.pics = nameArr;

// var array=[];

// array.push(req.body.pics)
// array.push(req.body.pic2)
// array.push(req.body.pic3)
// array.push(req.body.pic4)


req.body.pics[0] =  req.body.pics[0].split(' ').join('+');
req.body.pics[1] =  req.body.pics[1].split(' ').join('+');
req.body.pics[2] =  req.body.pics[2].split(' ').join('+');
req.body.pics[3] =  req.body.pics[3].split(' ').join('+');
req.body.uploderid=ObjectId(req.body.uploderid)

        
          
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("wholesaller");
          
              
             
                
                    dbo.collection("addlisting").insertOne(req.body, function(err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                      });

                    res1.json("Account created.Now signIn");
                  
        
                
            
    
              
    
            
          
      });
    
        
         });


};