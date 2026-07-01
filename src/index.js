var path = require('path');
var fs = require('fs');
var GameServer = require('./GameServer');

var configPath = path.join(__dirname, 'configs/GameServer.json');

if (!fs.existsSync(configPath)) {
    console.error("[ERROR] Missing config:", configPath);
    process.exit(1);
}

var gameServer = new GameServer(configPath);
gameServer.start();

console.log("[Game] Boot complete");
