var express     = require("express"),
    router      = express.Router({mergeParams: true}),
    Campground  = require("../models/campground"),
    Comment     = require("../models/comment"),
    middleware  = require("../middleware");

//====================
//Comments Routes
//====================
//Comments new
router.get("/new", middleware.isLoggedIn, function(req, res) {
    //find campground by id  
    Campground.findById(req.params.id, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
          res.render("comments/new", {campground: campground});
        }
    });
});
  
  //Comments create
router.post("/", middleware.isLoggedIn, function(req, res) {
    //look up campground using ID
    Campground.findById(req.params.id, function(err, campground) {
      if(err) {
        console.log(err);
        res.redirect("/campgrounds")
      } else {
    //create new comment
         Comment.create(req.body.comment, function(err, comment) {
          if(err) {
            console.log(err)
          } else {
            //add username and id to comment
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
    //Save new comment to campground
            comment.save();
            campgrounds.comments.push(comment)
            campground.save();
            console.log(comment);
    //redirect to campground show page
            res.redirect('/campgrounds/' + campground._id);
          }
        });
      }
    });
});

// Comment edit route
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res) {
  Commend.findById(req.params.comment_id, function(err, foundComment) {
    if(err) {
      res.redirect("back");
    } else {
      res.redirect("comments/edit", {campground_id: req.params.id, comment: foundComment});
    }
  });
});

// Comment Update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updateComment) {
    if(err) {
      res.redirect("back");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});
  
// Comment Destroy Route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res) {
  //findById and remove
  Comment.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
    res.redirect("back");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

//middleware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect("/login");
  }
  
module.exports = router;