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

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/To-Do");
mongoose.set('useNewUrlParser', true);

//Model configuration
var listSchema = new mongoose.Schema({
	content : String
});

var List = mongoose.model("List", listSchema);


//Show Page
app.get("/", function(req, res){
	List.find({}, function(err, lists){
		if(err){
			console.log(err);
		}
		else{
			console.log(lists);
			res.render("index", {lists:lists});
		}
	});
});

//Post on index page
app.post("/", function(req, res){
	var content = req.body.content;
	var newcontent = {content:content};
	List.create(newcontent, function(err, newtodo){
		if(err){
			console.log(err);
		}
		else{
			console.log(newtodo);
			console.log("added newtodo");
			res.redirect("/");
		}
	});
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