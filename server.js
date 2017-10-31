// ==============================================================================
// DEPENDENCIES
// express and body-parser
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS SET UP
// ==============================================================================

// Allows node to see we are starting an express server
var app = express();

// Identify the port we are using. 
var PORT = process.env.PORT || 8080;

// BodyParser allows the data from the server to be interpreted into JSON format. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ==============================================================================
// LISTENER - Keys to the server. Yeah, it starts the engine.
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
