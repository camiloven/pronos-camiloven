import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: ['.monkeycode-ai.live'],
    host: true,
    port: 5173
  },
  preview: {
    allowedHosts: ['.monkeycode-ai.live'],
    host: true,
    port: 4173
  }
})
