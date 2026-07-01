// Imports
var fs = require('fs');

// Init variables
var regServer = /^--gServer=(.*)/;
var runClient = false;
var gConfig = false;

// Configs values
var countServers = 1;

// Run PlitherWeb
process.argv.forEach(function(val) {
	if ( val == '--client' ) {
		runClient = true;
	} else if (regServer.test(val)) {
		gConfig = regServer.exec(val)[1];
	}
});

if( runClient ){
	var ClientServer = require('./ClientServer');
	var clientServer = new ClientServer();
	clientServer.start();
} else {
	var GameServer = require('./GameServer');
	var path = require('path');

var defaultConfig = path.join(__dirname, 'configs/GameServer.json');

var gameServer = new GameServer(
    fs.existsSync(gConfig) ? gConfig : defaultConfig
	gameServer.start();
}
