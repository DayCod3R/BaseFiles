var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  var campgrounds = [
    { name: "Rocky Road", image:"https://cdn.thewirecutter.com/wp-content/uploads/2020/04/carcampingtents-lowres-72-2x1-1-1024x512.jpg"},
    { name: "Nightlite Pass", image:"https://www.krudoknives.com/wp-content/uploads/2019/12/Best-Camping-Spots-in-the-US.jpg"},
    { name: "Catskill Rest", image:"https://img1.10bestmedia.com/Images/Photos/379809/GettyImages-904960682_54_990x660.jpg"},
    { name: "Mountain Road", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqSRPe7iE4Hi-mb8zkh53l3yuU6nr7hod2ww&usqp=CAU"},
    { name: "Highroad trail", image: "https://www.californiasbestcamping.com/photos3/june_lake_pan.jpg"},
    { name: "Long River path", image: "https://blog-assets.thedyrt.com/uploads/2019/05/shutterstock_532372924-2000x1120.jpg"}
  ];
  res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("The YelpCamp server has started!");
});
