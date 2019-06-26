var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

app.get("/search", function(req, res) {
  let filters = req.query;
  for (var prop in filters) {
    if (filters[prop] === "") {
      delete filters[prop];
    }
  }
  db.Band.findAll({ where: filters }).then(function (bandsdb) {
    res.render("search", {
      bands: bandsdb
    });
  });
})
  

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
