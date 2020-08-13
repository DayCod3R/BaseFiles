## RESTful Routing

## Intro
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

BLOG
C R /allBlogs U /updateBlog/:id D /destroyblog/:id
Create
Read
Update
Destroy
---
New /Blog/new
Show /Blog/:id
Edit /Blog/:id/edit

## Blog Index
* Setup the blog app
* Create the blog model
* Add INDEX route and template

## Basic Layout
* Add header and footer partials
* Inlude Semantic UI
* Add simple navbar

## Putting the C in CRUD
* Add new route
* Add new template
* Add Create route
* Add Create template

## SHOWtime 
* Add show route
* Add Show template
* Add links to show page
* Style show template

## Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

## Destroyyyyy
* Add Destroy route
* Add Edit and Destroy Links

## Final Updates
* Sanitize blog body
* Style Index
* Update REST table

RESTFUL ROUTES
name        url                 verb            desc.
==========================================================
INDEX       /campground         GET             Display a list of campgrounds
NEW         /campgrounds/new    GET             Displays form to make new campground
CREATE      /campground         POST            Add new campground to DB
SHOW        /campground/:id      GET             Show info about campground


NEW         /campgrounds/:id/comments/new   GET
CREATE      /campground/:id/comments        POST    
