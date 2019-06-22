var db = require("../models");
var path = require("path");

module.exports = function(app) {
  //Registro 
  app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });
};

module.exports = function(app, passport) {
 
    app.get('/register',function(req,res){
        res.sendFile(path.join(__dirname, "../public/register.html"));
    });
 
 
    app.get('/register');
 
 
    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
 
    ));
 
 
 
}