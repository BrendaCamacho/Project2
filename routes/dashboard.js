var express = require("express");
var router = express.Router();


    router.get("/dashboard", function(req, res){
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
    });

module.exports = router;

