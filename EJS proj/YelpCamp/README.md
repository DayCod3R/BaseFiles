# Add Mongoose
* Install and configure Mongoose
* Setup the campground model
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
*  Show db.collection.drop()
* Add a show route/template

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly
 
 # Add Seeds file
 * Add a seed.js file
 * Run the seeds files every time the server starts

 # Add the comment model!
 * Make our errors go away!
 * Display comments on campground show page

 # Comment New/Create
 * Discuss nested routes
 * Add the comment new and create routes
 * Add the new comment form

 # Style Show Page
 * Add sidebar to show page
 * Display comments nicely





























# 
* Add public directory
* Add custom stylesheet

 # Auth Pt 1 - Add user model
 * Install all packages needed for auth
 * Define User model

 # Auth Pt 2 - Register
 * Configure Passport
 * Add register routes
 * Add register template

 # Auth Pt 3 - Login
 * Add login routes
 * Add login template

 # Auth Pt 4 - Logout/Navbar
 * Add logout route
 * Prevent user from adding a comment if not signed in
 * Add links to navbar
 
 # Auth Pt 5 - Show/Hide Links
 * Show/hide auth links in navbar correctly

 # Refactor the Routes
 * Use express router to reoganize all routes
v9
 # Users + Comments
 * Associate users and comments
 * Save author's name to a comment automatically

 # Users + Campgrounds
 * Prevent an unauthenticated user from creating a campground
 * Save username + id to newly created cmpground

v10
# Editting Campgrounds
 * Add method-override
 * Add edit route for campgrounds
 * Add link to edit page
 * Add Update route
 * Fix $set problem

 # Deleting Campgrounds
 * Add destroy route
 * Add delete button

 # Authorization pt 1: Campgrounds
 * User can only edit his/her campgrounds
 * User can only delete his/her campgrounds
 * Hide/Show edit and delete buttons

 # Editting Comments
 * Add edit route for comments
 * Add edit button

Campground Edit Route: <!--/campgrounds/:id/edit -->
Comment Edit Route: <!--/campgrounds/:id/comments/:comment_id/edit -->

# Deleting Comments
* Add destroy route 
* Add delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

# Authorization part 2: Comments
* User can only edit his/her comments 
* User can only delete his/her comments
* Hide/show edit and delete buttons
* Refactor middleware

v11 
# Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

v12
# Background slider!

