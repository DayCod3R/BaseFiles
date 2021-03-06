var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function (req, res) {
  res.render("home");
});
//post for sending new data to be added or used on server
app.post("/addfriend", function () {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server has started!");
});
