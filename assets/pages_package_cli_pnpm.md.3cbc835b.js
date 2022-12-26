import{_ as s,c as a,o as p,a as n}from"./app.2e3c7667.js";const d=JSON.parse('{"title":"pnpm","description":"","frontmatter":{"title":"pnpm","order":4},"headers":[{"level":2,"title":"pnpm patch","slug":"pnpm-patch","link":"#pnpm-patch","children":[]}],"relativePath":"pages/package/cli/pnpm.md","lastUpdated":1671641288000}'),l={name:"pages/package/cli/pnpm.md"},o=n(`<h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h1><h2 id="pnpm-patch" tabindex="-1">pnpm patch <a class="header-anchor" href="#pnpm-patch" aria-hidden="true">#</a></h2><ol><li>生成临时包</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">patch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></span>
<span class="line"><span style="color:#FFCB6B;">You</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">can</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">edit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">following</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">folder:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\U</span><span style="color:#C3E88D;">sers</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">mbit</span><span style="color:#A6ACCD;">\\A</span><span style="color:#C3E88D;">ppData</span><span style="color:#A6ACCD;">\\L</span><span style="color:#C3E88D;">ocal</span><span style="color:#A6ACCD;">\\T</span><span style="color:#C3E88D;">emp</span><span style="color:#A6ACCD;">\\0</span><span style="color:#C3E88D;">c9a6d6f4d949994fcbba0b6adc4087b</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li><p>在生成的目录下进行代码修改</p></li><li><p>修改完成后，提交修改。提交后会生成 diff 文件，存放在 patches 文件夹下。</p></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">patch-commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Users</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Ambit</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">AppData</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Local</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">Temp</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">0c9a6d6f4d949994fcbba0b6adc4087b</span></span>
<span class="line"></span></code></pre></div><blockquote><p>注意：window 路径无法识别 <code>\\</code> ，使用 <code>\\\\</code> 或者 <code>/</code></p></blockquote>`,7),e=[o];function t(c,r,C,i,y,A){return p(),a("div",null,e)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
