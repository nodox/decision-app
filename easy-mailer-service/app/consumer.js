const NATS = require('nats');

// TODO: keeps the connection open until 
const nats = NATS.connect({ 
  url: "nats://localhost:4222",
  preserveBuffers: true,
})


nats.subscribe('foo', function(msg) {
  console.log('Received a message: ' + msg);
});



// Close connection
// nats.close();