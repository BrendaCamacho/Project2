require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var session = require("express-session");
var db = require("./models");
var okta = require("@okta/okta-sdk-nodejs");
var ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
var app = express();
//Additional stuff for okta and OIDC
var oktaClient = new okta.Client({
  orgURL: "https://dev-641920.okta.com",
  token: "004iqf3a1jLuldQ3jFGKdszNaJAYTg7OHFP9_yW-IU"
});
//oidc user stuff
var oidc = new ExpressOIDC({
  issuer: "https://dev-641920.okta.com/oauth2/default",
  client_id: "0oaree1dkFjs0BW2C356",
  client_secret: "CJTWcp4fU7U-NnHrk492CUPun5OWbde6MsPMLlha",
  redirect_uri: "http://localhost:3000/users/callback",
  scope: "opneid profile",
  routes:{
      login:{
        path: "/users/login"
      },
      callback:{
        path: "/users/callback",
        defaultRedirect:"/dashboard"
      }
  }
});
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//Router for logged users only
app.use("/dashboard", loginRequired, dashboardRouter);
app.use("/users", usersRouter);
//Middlwware extra for login session
//app.use(logger("dev"));
app.use(session({
  secret:"ejrgnrtnhfgrntdfig",
  resave: true,
  saveUninitialized: false
}));
//This tells expres.js yo enable the routes that ship with the oidc middleware library
//this handles the open id connect suport
app.use(oidc.router);
app.use((req, res, next)=>{
  if(!req.userContext){
    return next(); 
  }
  oktaClient.getUser(req.userContexto.userinfo.sub)
  .then(user => {
    req.user = user;
    res.locals.user = user;
    next();
  }).catch(err => {
    next(err);
  });
});
//Requires the log in function 
//IMPORTANT I GUESS
function loginRequired(req, res, next){
  if(!req.user){
    return res.status(401)
  }
  next();
}
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var usersRouters = require("./routes/users")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
/*db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
*/


 app.listen(PORT, function(){
   console.log("App listening on PORT: " + PORT);
 })
module.exports = app;

