import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
        
          if (id.includes('node_modules')) {
            if (id.includes('@lottiefiles')) return 'lottie-vendor';
            if (id.includes('leaflet')) return 'map-vendor';
            return 'vendors'; 
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, 
  },
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
