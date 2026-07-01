var path = require('path');
var fs = require('fs');

// Import GameServer
var GameServer = require('./GameServer');

// Config SIEMPRE válida (IMPORTANTE)
var configPath = path.join(__dirname, 'configs/GameServer.json');

// Comprobación opcional (por seguridad)
if (!fs.existsSync(configPath)) {
    console.error("[ERROR] No existe config:", configPath);
    process.exit(1);
}

// Iniciar servidor
var gameServer = new GameServer(configPath);
gameServer.start();

console.log("[Game] Game Server started");
