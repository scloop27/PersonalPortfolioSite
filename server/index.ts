import { createServer } from 'vite'

async function startServer() {
  const server = await createServer({
    server: {
      port: 5000,
      host: '0.0.0.0'
    }
  })
  
  await server.listen()
  console.log('Static React portfolio running on port 5000')
}

startServer().catch(console.error)