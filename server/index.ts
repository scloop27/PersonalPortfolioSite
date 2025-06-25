import express from 'express'
import { createServer as createViteServer } from 'vite'
import path from 'path'

async function startServer() {
  const app = express()
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: path.resolve(process.cwd(), 'client'),
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'client', 'src'),
      }
    }
  })
  
  // Use vite's connect instance as middleware
  app.use(vite.ssrFixStacktrace)
  app.use(vite.middlewares)

  const port = 5000
  
  app.listen(port, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${port}`)
  })
}

startServer().catch(console.error)