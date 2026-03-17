import esbuild from 'esbuild'
import fs from 'fs'

await esbuild.build({
  entryPoints: ['src/compiler.ts'],
  bundle: true,
  outfile: 'public/compiler.js',
  format: 'iife',
  globalName: 'RedScriptCompiler',
  platform: 'browser',
  target: 'es2020',
  // Stub Node builtins that the compiler tries to import
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [{
    name: 'stub-node-builtins',
    setup(build) {
      // Stub fs, path etc when building for browser
      build.onResolve({ filter: /^(fs|path|os|child_process|module)$/ }, args => ({
        path: args.path,
        namespace: 'stub'
      }))
      build.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
        contents: 'module.exports = {}',
        loader: 'js'
      }))
      // Stub Node's crypto with a browser-compatible shim
      // The incremental cache uses createHash('sha256') — provide a no-op that returns a fixed hash
      // so the cache simply misses every time (safe, just slower) rather than crashing
      build.onResolve({ filter: /^crypto$/ }, () => ({
        path: 'crypto',
        namespace: 'crypto-shim'
      }))
      build.onLoad({ filter: /.*/, namespace: 'crypto-shim' }, () => ({
        contents: `
module.exports = {
  createHash: function(algo) {
    let data = '';
    return {
      update: function(d) { data += d; return this; },
      digest: function(enc) {
        // Use a simple djb2 hash as browser fallback — cache will still work
        let h = 5381;
        for (let i = 0; i < data.length; i++) {
          h = (((h << 5) + h) + data.charCodeAt(i)) & 0xffffffff;
        }
        return (h >>> 0).toString(16).padStart(8, '0');
      }
    };
  }
};
`,
        loader: 'js'
      }))
    }
  }],
})

// Copy index.html to public/
fs.mkdirSync('public', { recursive: true })
console.log('✓ Built public/compiler.js')
