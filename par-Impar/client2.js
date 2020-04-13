//--------------------------------------------------------------------------------------
// -------------------------------------- client2 ---------------------------------------\\

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

client.on('message', (msg,info) => {
  console.log('Result received from the server: ' + msg.toString());
});

var data = Buffer.from(JSON.stringify({ user: 'Client 2', playerMove: 1 }));

client.send(data,9999,'localhost', (error) => {
  if(error) {
    client.close();
  } else {
    console.log('Successful move!');
  }
});