import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Google Gemini API Key - only for local dev, use environment variables in production
const GEMINI_API_KEY = 'AIzaSyDQ_humNFTBWlhUYDpdBg8nQtLpo8Y5c7o';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/chat': {
        target: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        changeOrigin: true,
        rewrite: () => '',
        headers: {
          'Content-Type': 'application/json'
        },
      }
    }
  }
});
