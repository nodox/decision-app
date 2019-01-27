const NATS = require('nats');

// TODO: keeps the connection open until 
const nats = NATS.connect({ 
  url: "nats://localhost:4222",
  preserveBuffers: true,
})



const main = async () => {

  // simple publisher
  nats.publish('foo', 'Hello World!', () => {
    console.log('msg sent: hello')
  })

  
  // structured data
  let jsonData = {ticker: 'GOOG', price: 1200}
  let bufferData = Buffer.from(JSON.stringify(jsonData))

  nats.publish('foo', bufferData, () => {
    console.log('msg sent: jsonBuffer')
  
    // Close connection
    nats.close()
  })

}

main()
