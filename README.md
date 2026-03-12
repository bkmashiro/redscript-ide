# RedScript IDE

**Online Editor** — Write RedScript in your browser and preview generated Minecraft datapacks in real-time.

🔗 **[Try it now → redscript-ide.pages.dev](https://redscript-ide.pages.dev)**

[中文版](./README.zh.md)

![RedScript IDE](https://img.shields.io/badge/RedScript-IDE-red?style=for-the-badge&logo=minecraft&logoColor=white)

## Features

- ✨ **Live Compilation** — Code compiles as you type
- 🎨 **Syntax Highlighting** — Full support for RedScript and mcfunction
- 📦 **Multi-file Preview** — View all generated .mcfunction files
- 🚀 **Zero Setup** — Just open and start coding

## Examples

Built-in examples to get you started:

| Example | Description |
|---------|-------------|
| Counter | Simple tick counter |
| PVP Timer | PVP game countdown |
| Shop | Item shop system |
| Lambda | Lambda and higher-order functions |
| Structs & Enums | Structs and enums |

## Tech Stack

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — The editor that powers VS Code
- [esbuild](https://esbuild.github.io/) — Bundling the RedScript compiler
- [Cloudflare Pages](https://pages.cloudflare.com/) — Static hosting

## Local Development

```bash
# Clone the repo
git clone https://github.com/bkmashiro/redscript-ide.git
cd redscript-ide

# Install dependencies
npm install

# Start dev server
npm run dev
# Visit http://localhost:3000

# Deploy to Cloudflare Pages
npm run deploy
```

## Related Projects

- [RedScript](https://github.com/bkmashiro/redscript) — The RedScript compiler
- [RedScript VSCode](https://marketplace.visualstudio.com/items?itemName=bkmashiro.redscript-vscode) — VSCode extension

## License

MIT
