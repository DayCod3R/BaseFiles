var express             = require("express"),
    methodOverride      = require("method-override"),
    bodyParser          = require("body-parser"),
    expressSanitizer    = require("express-sanitizer"),
    app                 = express(),
    mongoose            = require("mongoose"),
    port                = process.env.PORT || 3000

//App Config
mongoose.connect("mongodb://localhost/restful_blog");
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressSanitizer());
    app.use(methodOverride("_method"));

//Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title:String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test Blog",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    body: "HELLO, welcome to my Blog post!"
});

//RESTful Routes

app.get("/", function(req, res){
    res.redirect("/blogs");
});

//Index route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err){
            console.log("Error!");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

//New Route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//Create route
app.post("/blogs", function(req, res) {
    //create blog
    console.log(req.body);
    req.body.blog.body = req.sanitize(req.body.blog.body)
    console.log("===============");
    console.log(req.body);
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render("new");
        } else {
     //then, redirect to the index
    res.redirect("/blogs");
        }
    });
});

//Show route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

//Edit route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById.apply(req.params.id, function(err, foundBlog) {
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit");
        }
    });
});

//Update route
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Delete route
app.delete("/blogs/:id", function(req, res) {
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/blogs");
        } else {
    //redirect to index
             res.redirect("/blogs");
        }
    });
});

app.listen(port);
console.log(`The server is running! on ${port}`);