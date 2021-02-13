
const express = require("express");
const app = require('express')();
const axios = require("axios");
const path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const signup=require('./routes/signnup/bsignup');
const signin=require('./routes/signin/bsignin');
const editprofile=require('./routes/Profile/editprofile');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/api", router);


editprofile(router);

signup(router);
signin(router);








io.on("connection", (socket) => {
  
});





module.exports = router;



app.use(express.static(path.join(__dirname, 'build')));

app.use('*', (req, res) => {

	res.sendFile(path.join(__dirname+'/build/index.html'));

});




// server.js

const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');



app.use(cors());
// const jwtSecret = 'secret123';
// router.get('/jwt', (req, res) => {
// 	console.log("in jwt")
//   res.json({
//     token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
//   });
// });
// app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));
// const foods = [
//   { id: 1, description: 'burritos' },
//   { id: 2, description: 'quesadillas' },
//   { id: 3, description: 'churos' }
// ];
// router.get('/foods', (req, res) => {
//   res.json(foods);
// });




app.listen(process.env.PORT || 5000, () => console.log(`Running on PORT ${process.env.PORT || 5000}`));