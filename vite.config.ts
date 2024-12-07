/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/components/ui-components/**/*.tsx'],
      exclude: [
        'node_modules/',
        '**/*.d.ts',
        'src/**/*.test.*',
        'src/**/*.stories.*',
      ],
      all: true,
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui_components': path.resolve(
        __dirname,
        './src/components/ui-components'
      ),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
    },
  },
});
