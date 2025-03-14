// vite.config.js (React를 포함하지 않는 번들)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: 'src/WebComponentWrapper.tsx',
      formats: ['es'],
      fileName: 'auth-sdk.full.js',
    },
    rollupOptions: {
      external: [], // ✅ React를 포함
    },
  },
});
