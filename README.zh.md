# RedScript IDE

**在线编辑器** — 在浏览器中编写 RedScript 并实时预览生成的 Minecraft 数据包。

🔗 **[立即试用 → redscript-ide.pages.dev](https://redscript-ide.pages.dev)**

[English](./README.md)

![RedScript IDE](https://img.shields.io/badge/RedScript-IDE-red?style=for-the-badge&logo=minecraft&logoColor=white)

## 功能

- ✨ **实时编译** — 输入即编译，无需手动触发
- 🎨 **语法高亮** — 支持 RedScript 和 mcfunction
- 📦 **多文件预览** — 查看生成的所有 .mcfunction 文件
- 🚀 **零配置** — 打开即用，无需安装

## 示例

内置多个示例：

| 示例 | 描述 |
|------|------|
| Counter | 简单计时器 |
| PVP Timer | PVP 游戏倒计时 |
| Shop | 商店系统 |
| Lambda | Lambda 和高阶函数 |
| Structs & Enums | 结构体和枚举 |

## 技术栈

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) — VS Code 同款编辑器
- [esbuild](https://esbuild.github.io/) — 打包 RedScript 编译器
- [Cloudflare Pages](https://pages.cloudflare.com/) — 静态托管

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/bkmashiro/redscript-ide.git
cd redscript-ide

# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 访问 http://localhost:3000

# 部署到 Cloudflare Pages
npm run deploy
```

## 相关项目

- [RedScript](https://github.com/bkmashiro/redscript) — RedScript 编译器
- [RedScript VSCode](https://marketplace.visualstudio.com/items?itemName=bkmashiro.redscript-vscode) — VSCode 扩展

## 许可证

MIT
