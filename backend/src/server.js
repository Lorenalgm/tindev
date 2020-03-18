const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
// Aplicação pronta para receber requisições http e websocket
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
	const { user } = socket.handshake.query;

	connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://teste:teste@omnistack-vgqln.mongodb.net/omnistack8?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use((req, res, next) => {
	req.io = io;
	req.connectedUsers = connectedUsers;

	return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

// GET (buscar), POST (criar), PUT (editar), DELETE (deletar)

server.listen(3333);