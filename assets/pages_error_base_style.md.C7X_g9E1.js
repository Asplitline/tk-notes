import{_ as s,c as a,o as e,a5 as t}from"./chunks/framework.XlwyxPMj.js";const m=JSON.parse('{"title":"样式相关","description":"","frontmatter":{"title":"样式相关","order":3},"headers":[],"relativePath":"pages/error/base/style.md","filePath":"pages/error/base/style.md","lastUpdated":1683982947000}'),i={name:"pages/error/base/style.md"},n=t(`<h1 id="样式相关问题" tabindex="-1">样式相关问题 <a class="header-anchor" href="#样式相关问题" aria-label="Permalink to &quot;样式相关问题&quot;">​</a></h1><h2 id="sass-问题" tabindex="-1">sass 问题 <a class="header-anchor" href="#sass-问题" aria-label="Permalink to &quot;sass 问题&quot;">​</a></h2><h3 id="module-build-failed-typeerror-this-getresolve-is-not-a-function" tabindex="-1">Module build failed: TypeError: this.getResolve is not a function <a class="header-anchor" href="#module-build-failed-typeerror-this-getresolve-is-not-a-function" aria-label="Permalink to &quot;Module build failed: TypeError: this.getResolve is not a function&quot;">​</a></h3><p>sass-loader 版本过高，降级到 ^7.3</p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yarn add </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sass-loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@^7</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="node-sass-问题" tabindex="-1">node-sass 问题 <a class="header-anchor" href="#node-sass-问题" aria-label="Permalink to &quot;node-sass 问题&quot;">​</a></h2><p>删除 node-sass ，安装 sass 和 sass-loader。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;sass&quot;: &quot;~1.32.13&quot;,</span></span>
<span class="line"><span>&quot;sass-loader&quot;: &quot;~8.0.2&quot;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>需要锁住版本</p></blockquote>`,9),o=[n];function r(l,d,p,c,h,u){return e(),a("div",null,o)}const _=s(i,[["render",r]]);export{m as __pageData,_ as default};
