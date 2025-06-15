require("dotenv").config();

const http = require('http');
const app = require('./app/app');
const database = require('./database/db');

database.checkConnection();

const PORT = process.env.APP_PORT || 3000;
app.set('port', PORT || 3000);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

