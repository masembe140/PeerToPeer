import DHT from '@hyperswarm/dht'

const node = new DHT()

const server = node.createServer(function (encryptedSocket) {
  console.log('New connection from', encryptedSocket.remotePublicKey.toString('hex'))
  encryptedSocket.write('Hello world')
  encryptedSocket.end()
})

const keyPair = DHT.keyPair()
await server.listen(keyPair)

console.log('Connect to:')
console.log(keyPair.publicKey.toString('hex'))