const net = require("net");
const { IP, PORT } = require("./const");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: IP,
		port: PORT,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	// connect handler.
	conn.on("connect", () => {
		conn.write("Name: AJS");
		console.log("Successfully connected to game server");
	});

	conn.on("data", (data) => {
		console.log(data);
	});

	return conn;
};

module.exports = { connect };
