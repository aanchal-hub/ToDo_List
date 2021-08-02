//packages
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var ejs = require("ejs");
var bodyParser = require("body-parser");

//app configuration
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
//app.use(express.static(__dirname+"/static/")); //calling path for directory
app.use("/static", express.static('./static/'));

app.get("/", function(req, res){
	res.render("index");
});

//port
app.listen(3000, function(err){
	if (err) {
		console.log(err);
	}
	else{
		console.log("Server connected to port 3000");
	}
});