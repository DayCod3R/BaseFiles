var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
 
mongoose.connect("mongodb://localhost/yelp_camp_v2")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
Campground.create(
  { name: "Rocky Road",
    image: "https://cdn.thewirecutter.com/wp-content/uploads/2020/04/carcampingtents-lowres-72-2x1-1-1024x512.jpg",
    description: "This is a long Rocky Road. Not for the tenderfooted."
}, function(err, campground) {
  if(err) {
    console.log(err);
  } else {
    console.log("Newly created campground: ");
    console.log(campground);
  }
});
app.get("/", function (req, res) {
  res.render("landing");
});
//INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res) {
  //Get all compounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render ("index",{campgrounds:allCampgrounds});
    }
  });
});

//CREATE - add new campground to database
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
      if(err) {
        console.log(err);
      } else {
        //Redirect to campgrounds page
        res.redirect("/campgrounds");
      }
    });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

//SHOW- shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  //find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
if(err){
  console.log(err);
} else {
    //render show template with that campground
    res.render("show", {campground: foundCampground});
}
  });
  
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("The YelpCamp server has started!");

});