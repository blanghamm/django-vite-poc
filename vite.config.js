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
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./static/src/entrypoints/main.js'),
        second: resolve('./static/src/entrypoints/main.js')
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
