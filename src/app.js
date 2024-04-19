require('dotenv').config();

const Server = require('./models/server');
//test
const server = new Server();

server.listen();