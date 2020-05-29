// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

let app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 2407;

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static('public'));

// Sets up the Express App to handle data parsing - JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Sets up Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes 
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start our server so it can listen to client requests
app.listen(PORT, function () {
    console.log('Server listening on: http://localhost: ' + PORT);
});