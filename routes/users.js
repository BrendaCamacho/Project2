//File to handle the log out
var express = require("express");
var router = express.Router();

//Log a user out
router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/");
});

module.exports = router;