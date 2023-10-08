## vscode 配置 eslint

-首先安装两个 VsCode 插件

-   安装 `ESLint` 插件
-   安装 `Prettier - Code formatter` 插件

配置 VsCode "Workspace.json"
<br/>
`ps:git上.vscode/settings.json配置有相关工作区设置`

组合键 `ctrl+shift+p` -> `首选项：打开用户设置` -> `切换到工作区标签` -> `鼠标点击右上角打开设置(json)`

```
{
    // 将prettier设置为默认格式化程序(在编辑器中有可能被其他Formatter占用，所以将prettier设置为默认Formatter)
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 保存时自动格式化 (根据根目录下‘.prettierrc文件配置项’)
    "editor.formatOnSave": true,
    // Enable per-language
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    // 为ESLint启用“保存时自动修复”，并且仍然具有格式和快速修复功能
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    }
}
```

配置 vue 的 `.prettierrc`

```
{
    "bracketSpacing": true,
    "printWidth": 160,
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none",
    "endOfLine": "auto"
}
```

配置 vue 的 `code/.eslintrc.js`

```
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
```
