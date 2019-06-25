var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
