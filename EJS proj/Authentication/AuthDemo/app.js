const user = require("./models/user");

var express                 = require("express"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    app                     = express();

    mongoose.connect("mongodb://localhost/auth_demo_app");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "All dogs go to heaven!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===============
//====Routes====
//===============

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

//Auth routes
        //Registration signup form
app.get("/register", function(req, res) {
    res.render("register")
});
        //handling user signup
app.post("/register", function(req, res) {
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render('register');
        }
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secret");
        });
    });
});

//Login Routes

//render login form
app.get("/login", function(req, res) {
    res.render("login");
});
//**first middleware example. Code that runs before funnel route
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect:"/login"
}), function(req, res) {

});

app.get("/logout", function(req, res) {
    req.logout();
    redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthencated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("The Server has BEGUN!");   
});