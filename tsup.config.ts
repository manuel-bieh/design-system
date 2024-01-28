import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    dts: true,
    entry: ['src/index.ts'],
    external: ['react'],
    format: ['cjs', 'esm'],
    injectStyle: false,
    loader: {
        // See: https://github.com/egoist/tsup/issues/536#issuecomment-1752121594
        '.css': 'local-css',
        '.woff': 'file',
        '.woff2': 'file',
    },
    minify: true,
    sourcemap: 'inline',
    splitting: false,
    treeshake: true,
});
