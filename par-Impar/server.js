// -------------------------------------- Server ---------------------------------------\\
var dgram = require('dgram');
var server = dgram.createSocket("udp4");
var playerMoves = [];

server.on("error", (err) => {
    console.log("Server error:\n" + err.stack);
    server.close();
});

server.on("message", (msg, info) => {

    data = JSON.parse(msg);
    console.log("Server received from the player: " + data.user + "\nA PlayerMove: " + data.playerMove);
    playerMoves.push({ user: data.user, jogada: data.playerMove, port: info.port })

    if(playerMoves.length > 1) {
        var winner = Buffer.from('You Winner!');
        var lost = Buffer.from('You Lost!');

        if(((playerMoves[0].playerMove + playerMoves[1].jogada) % 2) == 0) {
            server.send(winner, jogadas[0].port, 'localhost', (error) => {
                if(error) {
                    client.close();
                }
            });

            server.send(lost, playerMoves[1].port, 'localhost', (error) => {
                if(error) {
                    client.close();
                }
            });
        } else {
            server.send(winner, playerMoves[1].port, 'localhost', (error) => {
                if(error) {
                    client.close();
                }
            });

            server.send(lost, playerMoves[0].port, 'localhost', (error) => {
                if(error) {
                    client.close();
                }
            });
        }

        playerMoves = [];
    }

});

server.on("listening", () => {
    var address = server.address();
    console.log("Server Listening " +
        address.address + ":" + address.port);
});

server.bind(9999);