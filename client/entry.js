var request = require("superagent"); // for sending HTTP requests (installed in node_modules)

var peopleElement = document.querySelector(".requested-people");

function renderPeople(people) {
  // Creates an element for each person and appends it to peopleElement
  people.forEach(function(person) {
    const element = document.createElement("div");
    element.innerHTML = person.name + " - " + person.age;
    peopleElement.appendChild(element);
  });
}

// Send a GET request to our server at the route /api/people
request.get("/api/people")
  .end(function(error, res) {
    if(error) {
      console.log("Request failed: " + error);
    } else {
      // success
      renderPeople(res.body); // res.body contains response data
    }
  });
