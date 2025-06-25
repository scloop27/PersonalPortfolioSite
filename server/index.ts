import { createServer } from 'vite'
import path from 'path'

async function startServer() {
  try {
    const server = await createServer({
      root: path.resolve(process.cwd(), 'client'),
      server: {
        port: 5000,
        host: '0.0.0.0',
        strictPort: true
      },
      resolve: {
        alias: {
          '@': path.resolve(process.cwd(), 'client', 'src')
        }
      }
    })
    
    await server.listen()
    console.log('Portfolio running on http://0.0.0.0:5000')
  } catch (error) {
    console.error('Server failed to start:', error)
  }
}

startServer()