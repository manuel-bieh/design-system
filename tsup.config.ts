import fs from 'node:fs/promises';
import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['src/index.ts'],
    external: ['react', 'react-dom'],
    format: ['esm'],
    loader: {
        // See: https://github.com/egoist/tsup/issues/536#issuecomment-1752121594
        '.css': 'local-css',
        '.woff': 'file',
        '.woff2': 'file',
        '.svg': 'dataurl',
        // '.svg': 'file',
    },
    // minify: true,
    minify: true,
    onSuccess: async () => {
        await fs.copyFile('./src/assets/css/media.css', './dist/media.css');
    },
    sourcemap: 'inline',
    splitting: false,
    treeshake: true,
});
