
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;


var mongoose = require('mongoose');
var gridfs = require('gridfs-stream');
var fs = require('fs');

 
mongoose.connect('mongodb://localhost:27017/wholesaller')
mongoose.Promise = global.Promise;
gridfs.mongo = mongoose.mongo;
 
var connection = mongoose.connection;




const axios = require("axios");
const config = require('../../config/config')
var url=config.mongoURI;
const multer  = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const { promisify } = require('util')
const sleep = promisify(setTimeout)
const storage = new GridFsStorage({ url });
 
// Set multer storage engine to the newly created object
const upload = multer({ storage });
module.exports = function(router) {
 router.post('/gstdocupload', upload.single('file'), (req, res, next) => { 



console.log("-------------")




          })
    
    

                

          router.post('/readfile', (req, res, next) => { 


            console.log('hahahha')  
            MongoClient.connect(url, function(err, client){
                if(err){      
                 return res.render('index', 
                  {
                  title: 'Uploaded Error', 
                  message: 'MongoClient Connection error', error: err.errMsg});    
                     }    
            const db = client.db('wholesaller');
            const collection = db.collection('fs.files');    
            const collectionChunks = db.collection('fs.chunks');
        collection.find({filename: "6012cba5e393ee405cad0b36"}).toArray(function(err, docs){        
            if(err){        
           console.log('hahahha')  
            }
          if(!docs || docs.length === 0){        
            console.log('hahahha')   
           }else{
          
           //Retrieving the chunks from the db          
           collectionChunks.find({files_id : ObjectId("6012cba4e393ee405cad0b35")})
             .sort({n: 1}).toArray(function(err, chunks){          
               if(err){            
                console.log('hahahha')   
                }
              if(!chunks || chunks.length === 0){            
                //No data found            
                console.log('hahahha')        
              }
            
            let fileData = [];          
            for(let i=0; i<chunks.length;i++){            
              //This is in Binary JSON or BSON format, which is stored               
              //in fileData array in base64 endocoded string format               
             
              fileData.push(chunks[i].data.toString('base64'));          
            }
            
             //Display the chunks using the data URI format          
             let finalFile = 'data:' + docs[0].contentType + ';base64,' 
                  + fileData.join('');          
                  console.log("-----------")
                  res.json(finalFile)
                 ////// console.log(finalFile)
             });      
            }          
           });  
         });
            
            
            
            
                      })





                      router.post("/test", (req, res) => {
                        
console.log("ssssssssss")
                       var filename= "7faa72eca59b8dfc9c81675152c71343";
                        res.set({
                          "Accept-Ranges": "bytes",
                          "Content-Disposition": `attachment; filename=${filename}`,
                          "Content-Type": "application/pdf"
                        });
                        gridfs.files.findOne({ filename: filename }, (err, file) => {
                          if (!file || file.length === 0) {
                            return res.status(404).json({
                              error: "That File Doesn't Exist"
                            });
                          }
                          if (file.contentType === "application/pdf") {
                            // Read output to browser
                            const readstream = gfs.createReadStream(file.filename);
                            res.json(readstream)
                            // console.log(readstream)
                            // readstream.pipe(res);
                          } else {
                            res.status(404).json({
                              error: "This is not an zip file"
                            });
                          }
                        });
                      });








                      var connection = mongoose.connection;
                      connection.on('error', console.error.bind(console, 'connection error:'));
                       
                      connection.once('open', () => {
                       


                          var gfs = gridfs(connection.db);
                       
                         
                       
                          // Upload a file from loca file-system to MongoDB
                          

                          router.post('/test1', (req, res) => {
                            console.log("----------")

                            var filename= "573652e22c19391b8d9cff36d7765cf7";
                            // Check file exist on MongoDB
                        
                      
                        
                            gfs.exist({ filename: filename }, (err, file) => {
                                if (err || !file) {
                                    res.status(404).send('File Not Found');
                            return
                                } 
                          
                          var readstream = gfs.createReadStream({ filename: filename });
                          res.send(readstream)
                         /// readstream.pipe(res);            
                            });
                        });

                        });







};