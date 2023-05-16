//Install express server
const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ui-questionario-tcc'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/ui-questionario-tcc/index.html'));
});

// Start the app by listening on the default Heroku port
var port_number = server.listen(process.env.PORT);
app.listen(port_number);
