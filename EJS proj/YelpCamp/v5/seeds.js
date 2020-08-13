var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
    name: "Cloud's Rest", 
    image:"https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/camping-hero_0_0.jpg?itok=mgGs0-vw&timestamp=1520373602",
    description:"Blah blah blah"
    },
    { name: "Rocky Road",
    image: "https://cdn.thewirecutter.com/wp-content/uploads/2020/04/carcampingtents-lowres-72-2x1-1-1024x512.jpg",
    description: "This is a long Rocky Road. Not for the tenderfooted."
    },
    { name: "Witch Hill trail",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6G4jHHHIb31w2abkcXNb1kLyqbm881u6bdw&usqp=CAU",
    description: "Kayla's initiation site...interesting"
    }
]

function seedDB() {
    //Remove all campgrounds
Campground.remove({}, function(err) {
   if(err) {
        console.log(err);
   }    
        console.log("remove campgrounds!");
    //Add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, data) {
                if(err) {
                    console.log(err);
                } else { 
                    console.log("added campgrounds!");
                }
                //Create a comment
                Comment.create(
                    {
                        text: "This place is great, but it sucks.",
                        author: "KG"
                    }, function(err, comment) {
                        if(err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
            });
        });
    });
    //add a few comments
}
            
module.exports = seedDB;