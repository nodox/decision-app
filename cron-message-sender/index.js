const cron = require("node-cron");
const express = require("express");
const NATS = require('nats');

app = express();

// schedule tasks to be run on the server
// runs every minute
cron.schedule("* * * * *", function() {

  let jsonData = { msg: "descision expired" }
  let bufferData = Buffer.from(JSON.stringify(jsonData))
  
  const nats = NATS.connect({
    url: "nats://localhost:4222",
    preserveBuffers: true,
  })
  
  nats.publish('foo', bufferData, () => {
    console.log('msg sent: decision expired')
  
    // Close connection
    nats.close()
  })

});

// TODO: keeps the connection open until 

app.listen(process.env.PORT || 3124)