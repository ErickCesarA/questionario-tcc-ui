//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/questionario-tcc-ui'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/questionario-tcc-ui/index.html'));
});

// Start the app by listening on the default Heroku port
let port = process.env.PORT || 8000;

app.listen(port, () => { console.log('App running in port ${port}') });

