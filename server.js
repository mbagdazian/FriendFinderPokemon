var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({type: 'application/*+json' }))

app.use(bodyParser.raw({type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({type: 'text/html' }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
	console.log("App is listening on PORT: " + PORT);
});