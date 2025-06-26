#!/usr/bin/env node

import { spawn } from 'child_process';

// Start Vite with the correct configuration for Replit
const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});