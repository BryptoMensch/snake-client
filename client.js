const net = require("net");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: "localhost",
		port: 50541,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	// connect handler.
	conn.on("connect", () => {
		conn.write("Name: AJS");
		// conn.write("Move: up");
		console.log("Successfully connected to game server");
	});
	return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
