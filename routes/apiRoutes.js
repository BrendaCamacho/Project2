var db = require("../models");

module.exports = function(app) {
 //Get all bands 
  app.get("/api/bands", function(req, res){
    db.Band.findAll({}).then(function(bandsdb){
      res.json(bandsdb);
    });
  });

  //Create a new band
  app.post("/api/bands",function(req,res){
    db.Band.create(req.body).then(function(bandsdb){
      res.json(bandsdb);
    });
  });

 //Get all bands 
  app.get("/api/bands", function(req, res){
    db.Band.findAll({}).then(function(bandsdb){
      res.json(bandsdb);
    });
  });

  //Create a new band
  app.post("/api/bands",function(req,res){
    db.Band.create(req.body).then(function(bandsdb){
      res.json(bandsdb);
    });
  });
};
