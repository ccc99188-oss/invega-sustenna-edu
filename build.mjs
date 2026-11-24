// 把 index.html（Claude 網頁片段）包成完整的 HTML 文件，輸出到 docs/index.html 供 GitHub Pages 使用。
// 用法：node build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const body = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const head = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font-size:14px;font-family:system-ui,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
</style>
</head>
<body>
`;
mkdirSync(new URL("./docs/", import.meta.url), { recursive: true });
writeFileSync(new URL("./docs/index.html", import.meta.url), head + body + "\n</body>\n</html>\n");
console.log("docs/index.html 已產生");
