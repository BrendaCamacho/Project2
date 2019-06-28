var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Band.findAll({}).then(function(dbBands) {
      console.log(dbBands)
      res.render("index", {
        msg: "testing!",
        bands: dbBands
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

  app.get("/form", function(req, res){
    res.render("form");
  })
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  

};
