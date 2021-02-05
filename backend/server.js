
const express = require("express");
const app = require('express')();
const axios = require("axios");

var server = require('http').createServer(app);
var io = require('socket.io')(server);
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();



app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/api", router);













io.on("connection", (socket) => {
  
});





module.exports = router;




app.use(express.static(path.join(__dirname, 'build')));

app.use('*', (req, res) => {

	console.log("yes i have recieved request")

});

app.listen(process.env.PORT || 5000, () => console.log(`Running on PORT ${process.env.PORT || 5000}`));