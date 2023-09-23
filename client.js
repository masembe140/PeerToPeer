import 'dotenv/config'
import DHT from '@hyperswarm/dht'
// Make a Hyperswarm DHT node that connects to the global network.
const node = new DHT()
const remoteKey = process.env.PUBKEY;
const pubKey = Buffer.from(remoteKey,'hex')

const conn = node.connect(pubKey);

conn.on('connection', () => {
  console.log('connected to server');
})

conn.on('data', (data) => {
  console.log('the data sent is: ', data.toString());
})

