// Imports
var WebSocket = require('ws');
var fs = require("fs");

// GameServer implementation
function GameServer( confile ) {
    // Startup
    this.nodesPlayer = []; // Nodes controlled by players
    this.movingNodes = []; // For move engine
    this.clients = [];
    this.nodes = [];

    // Config
    this.config = {

	};

    // Parse config
    this.loadConfig( confile );
}

module.exports = GameServer;

GameServer.prototype.start = function () {
    var WebSocket = require('ws');
    var http = require('http');

    const PORT = process.env.PORT || 3000;

    // HTTP server (OBLIGATORIO para Render)
    this.server = http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("Ultron Slither Server Running");
    });

    // WebSocket server
    this.wss = new WebSocket.Server({ server: this.server });

    this.wss.on('connection', (ws) => {
        console.log("[Game] Client connected");

        ws.on('message', (msg) => {
            // aquí va la lógica del juego
        });

        ws.on('close', () => {
            console.log("[Game] Client disconnected");
        });
    });

    // IMPORTANTE: mantener vivo el server
    this.server.listen(PORT, () => {
        console.log('\x1b[31m[Game]\x1b[0m Server running on port ' + PORT);
    });
};

GameServer.prototype.loadConfig = function( confile ) {
    try {
        // Load the contents of the config file
        var load = JSON.parse(fs.readFileSync(confile, 'utf-8'));

        // Replace all the default config's values with the loaded config's values
        for (var obj in load) {
            this.config[obj] = load[obj];
        }

    } catch (err) {
        // No config
        console.log(err);

        // Create a new config
        fs.writeFileSync(confile, JSON.stringify(this.config, null, '\t'));
    }
};
