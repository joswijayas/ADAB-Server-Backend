const express = require('express');
const app = express();
const port = process.env.PORT || 7759;
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes');
routes(app);

http.listen(port);
console.log('ADAB SERVER RUNNING AT PORT: ' + port);

require('./socket')(http);
