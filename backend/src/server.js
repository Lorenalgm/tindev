const express = require('express');
const routes = require('./routes');

const server = express();


server.use(routes);

// GET (buscar), POST (criar), PUT (editar), DELETE (deletar)

server.listen(3333);