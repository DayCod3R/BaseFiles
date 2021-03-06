var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    User = require("../models/user");

app.get("/", function (req, res) {
    res.render("landing");
  });
  
  //===================
  //====Auth Routes====
  //===================
  
  //show register form
  router.get("/register", function(req, res) {
    res.render("register");
  });
  //handle sign up logic
  router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user) {
      if(err) {
        console.log(err);
        return res.render("register");
      }
      passport.authenticate("local")(req, res, function() {
        res.redirect("/campgrounds");
      });
    });
  });
  
  //show login form
  router.get("/login", function(req, res) {
    res.render("login");
  })
  //handling login logic
  router.post("/login", middleware, callback)
  router.post("/login", passport.authenticate("local",
      {
        successRedirect: "/campgrounds", 
        failureRedirect: "/login"
      }), function(req, res) {
  });
  
  //logic route
  router.get("/logout", function(req, res) {
    req.logout()
    res.redirect("/");
  });
  
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  }
  