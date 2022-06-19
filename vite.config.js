const { resolve } = require('path');
const vue = require('@vitejs/plugin-vue')

module.exports = {
  plugins: [vue()],
  root: resolve('./static/src'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        app1: resolve('./static/src/entrypoints/app-1/main.ts'),
        app2: resolve('./static/src/entrypoints/app-2/main.ts')
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
