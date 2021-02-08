
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;

const { promisify } = require('util')
const sleep = promisify(setTimeout)

module.exports = function(router) {

    router.post("/fetchcards", (req, res1) => {
  

        var allposts=[];
        //   var checksubscribe=[];
            
            MongoClient.connect(url, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            },async function(err, db) {
              if (err) throw err;
              var dbo = db.db("wholesaller");
              /*Return only the documents with the address "Park Lane 38":*/
              var query = {};
          
              allposts= await dbo.collection('addlisting').aggregate([
                { $match : {}},
                 { $sort : { _id : -1}},
                { $lookup:
                   {
                     from: 'users',
                     localField: 'maindetails.uploderid',
                     foreignField: '_id',
                     as: 'users'
                   }
                 },
          
                
                 {   $unwind:"$users" }, 
          
             
            
               ]).toArray()
            
                           console.log(allposts);
                            res1.json(allposts);

          
          
             });
            
          
    
        
         });




         router.post("/fetchcardsbyid", (req, res1) => {
  
console.log(req.body)
          var allposts=[];
          //   var checksubscribe=[];
              
              MongoClient.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              },async function(err, db) {
                if (err) throw err;
                var dbo = db.db("wholesaller");
                /*Return only the documents with the address "Park Lane 38":*/
                var query = {};
            
                allposts= await dbo.collection('addlisting').aggregate([
                  { $match : {_id:ObjectId(req.body.id)}},
                   { $sort : { _id : -1}},
                  { $lookup:
                     {
                       from: 'users',
                       localField: 'maindetails.uploderid',
                       foreignField: '_id',
                       as: 'users'
                     }
                   },
            
                  
                   {   $unwind:"$users" }, 
            
               
              
                 ]).toArray()
              
                             console.log(allposts);
                              res1.json(allposts);
  
            
            
               });
              
            
      
          
           });
  



/////////////fetch seller listing
router.post("/fetchsellerproduct", (req, res1) => {
  

  var allposts=[];
  //   var checksubscribe=[];
      
      MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },async function(err, db) {
        if (err) throw err;
        var dbo = db.db("wholesaller");
        /*Return only the documents with the address "Park Lane 38":*/
        var query = {};
    
        allposts= await dbo.collection('addlisting').aggregate([
          { $match : {"maindetails.uploderid":ObjectId(req.body.id)}},
           { $sort : { _id : -1}},
          { $lookup:
             {
               from: 'users',
               localField: 'maindetails.uploderid',
               foreignField: '_id',
               as: 'users'
             }
           },
    
          
           {   $unwind:"$users" }, 
    
       
      
         ]).toArray()
      
                     console.log(allposts);
                      res1.json(allposts);

    
    
       });
      
    

  
   });








};