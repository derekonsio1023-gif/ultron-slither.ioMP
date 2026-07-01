var fs = require('fs');
var path = require('path');

// Init variables
var regServer = /^--gServer=(.*)/;
var runClient = false;
var gConfig = false;

// Parse args
process.argv.forEach(function(val) {
    if (val == '--client') {
        runClient = true;
    } else if (regServer.test(val)) {
        gConfig = regServer.exec(val)[1];
    }
});

// FIX CONFIG PATH
var defaultConfig = path.join(__dirname, 'configs/GameServer.json');
var configPath = gConfig && fs.existsSync(gConfig)

// Run server
if (runClient) {
    var ClientServer = require('./ClientServer');
    var clientServer = new ClientServer();
    clientServer.start();
} else {
    var GameServer = require('./GameServer');
    var gameServer = new GameServer(configPath);
    gameServer.start();
}
