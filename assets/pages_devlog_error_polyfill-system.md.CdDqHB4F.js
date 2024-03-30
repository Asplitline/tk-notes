import{_ as s,c as e,o as a,a5 as i}from"./chunks/framework.XlwyxPMj.js";const u=JSON.parse('{"title":"不同操作系统开发差异","description":"","frontmatter":{"title":"不同操作系统开发差异","order":5},"headers":[],"relativePath":"pages/devlog/error/polyfill-system.md","filePath":"pages/devlog/error/polyfill-system.md","lastUpdated":1711813192000}'),n={name:"pages/devlog/error/polyfill-system.md"},t=i('<h1 id="不同操作系统开发差异" tabindex="-1">不同操作系统开发差异 <a class="header-anchor" href="#不同操作系统开发差异" aria-label="Permalink to &quot;不同操作系统开发差异&quot;">​</a></h1><h2 id="路径" tabindex="-1">路径 <a class="header-anchor" href="#路径" aria-label="Permalink to &quot;路径&quot;">​</a></h2><p><code>Windows</code> 使用反斜杠 <code>\\</code> 作为文件路径分隔符。</p><p>例如：<code>C:\\Users\\Username\\Documents\\file.txt</code>。</p><p><code>Linux</code> 和 <code>macOS</code> 使用正斜杠 <code>/</code> 作为文件路径分隔符。</p><p>例如：<code>/home/username/Documents/file.txt</code>。</p><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><p>在 Linux 和 Mac OS 上使用<code>$env</code>，但在 Windows 上应该使用 <code>%env%</code> 来代替</p><p>以 env-cmd 为例</p><p>Linux/MacOS环境下</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cross-env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env=test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $env </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>window 环境下</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cross-env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env=test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %env%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',13),l=[t];function d(p,o,r,h,c,k){return a(),e("div",null,l)}const F=s(n,[["render",d]]);export{u as __pageData,F as default};
