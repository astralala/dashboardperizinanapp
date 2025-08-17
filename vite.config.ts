import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()    
  ],
  base:'/dashboardperizinanapp/',
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        login: "login.html",
        dashboard: "dashboard.html"
      }
    }
  }
})
