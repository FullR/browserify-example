var express = require("express");
var app = express();
var port = 8080;

const testData = [
  {name: "joe", age: 20},
  {name: "sam", age: 33},
  {name: "tim", age: 17},
  {name: "jen", age: 49},
  {name: "scott", age: 3},
  {name: "carl", age: 55}
];

app.use(express.static("public"));

app.get("/api/people", function(req, res) {
  res.json(testData); // res.json automatically transforms input into JSON before sending
});

app.listen(port, function(error) {
  if(error) {
    console.log("Failed to launch server: " + error);
  } else {
    console.log("Listening on port " + port);
  }
});
