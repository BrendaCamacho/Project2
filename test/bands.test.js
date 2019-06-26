var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

<<<<<<< HEAD
describe("GET /api/bands", function() {
=======
describe("GET /api/examples", function() {
>>>>>>> 90394c509704553eb6467ee82a80d1a55f9f8cf9
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
<<<<<<< HEAD
    db.Band([
      { bandName: "First Example", bandGenre: "First Description", bandLocation: "cdmx", bandVacancy: "vocalist", bandDescription:"jkohooooli", bandFbLink:"hooooliiiii" }
      // { bandGenre: "Second Example", desc: "Second Description" }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/bands").end(function(err, res) {
=======
    db.Example.bulkCreate([
      { text: "First Example", description: "First Description" },
      { text: "Second Example", description: "Second Description" }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/examples").end(function(err, res) {
>>>>>>> 90394c509704553eb6467ee82a80d1a55f9f8cf9
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
<<<<<<< HEAD
          .that.includes({ bandName: "First Example", bandGenre: "First Description", bandLocation: "cdmx", bandVacancy: "vocalist", bandDescription:"jkohooooli", bandFbLink:"hooooliiiii" });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({bandName: "First Example", bandGenre: "First Description", bandLocation: "cdmx", bandVacancy: "vocalist", bandDescription:"jkohooooli", bandFbLink:"hooooliiiii"});

        // The `done` function is used to end any asynchronous tests
        done(); 
=======
          .that.includes({ text: "First Example", description: "First Description" });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({ text: "Second Example", description: "Second Description" });

        // The `done` function is used to end any asynchronous tests
        done();
>>>>>>> 90394c509704553eb6467ee82a80d1a55f9f8cf9
      });
    });
  });
});
