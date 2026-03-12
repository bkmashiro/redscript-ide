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
    }
  }],
})

// Copy index.html to public/
fs.mkdirSync('public', { recursive: true })
console.log('✓ Built public/compiler.js')
