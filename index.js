const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
require("./DB")  //DB connecting

const router = require("./Routes/main");
const { json } = require("express");
app.use('/',router);

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port


  console.log("Example app listening at http://%s:%s", host, port)
})