// Browser-side compiler entry point
// esbuild bundles this + the entire redscript compiler into public/compiler.js
import { compile, version } from 'redscript-mc'

export type CompileResult = {
  ok: true
  files: { path: string; content: string }[]
  warnings: { message: string; code: string; line?: number; col?: number }[]
} | {
  ok: false
  error: string
}

export function compileRedScript(source: string): CompileResult {
  try {
    const result = compile(source, { namespace: 'playground' })
    return { ok: true, files: result.files, warnings: result.warnings ?? [] }
  } catch (err: unknown) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) }
  }
}

// Expose on window for Monaco worker usage
;(globalThis as unknown as Record<string, unknown>).RedScriptCompiler = { compileRedScript, version }
