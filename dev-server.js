#!/usr/bin/env node

// Custom dev server script to run Vite with correct port and host for Replit
const { spawn } = require('child_process');

// Run vite with the correct port and host settings for Replit
const viteProcess = spawn('npx', ['vite', '--port', '5000', '--host', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite server:', error);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`Vite server exited with code ${code}`);
  process.exit(code);
});