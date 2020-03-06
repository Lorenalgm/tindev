const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://teste:teste@omnistack-vgqln.mongodb.net/omnistack8?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

// GET (buscar), POST (criar), PUT (editar), DELETE (deletar)

server.listen(3333);