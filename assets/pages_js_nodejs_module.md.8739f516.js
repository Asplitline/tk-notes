import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.047f4c6e.js";const A=JSON.parse('{"title":"模块化","description":"","frontmatter":{"outline":"deep","title":"模块化","order":3},"headers":[],"relativePath":"pages/js/nodejs/module.md","lastUpdated":1678983192000}'),l={name:"pages/js/nodejs/module.md"},e=o(`<h1 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h1><h2 id="模块规范化" tabindex="-1">模块规范化 <a class="header-anchor" href="#模块规范化" aria-label="Permalink to &quot;模块规范化&quot;">​</a></h2><p>Node.js 规定一个<strong>JavaScript</strong>文件<strong>就是一个模块，模块</strong>内部定义的变量和函数<strong>默认情况下在</strong>外部无法得到</p><h3 id="导出-exports" tabindex="-1">导出 - exports <a class="header-anchor" href="#导出-exports" aria-label="Permalink to &quot;导出 - exports&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 在模块内部定义变量</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在模块内部定义方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sayHi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">您好, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 向模块外部导出数据</span></span>
<span class="line"><span style="color:#89DDFF;">exports.</span><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> version</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports.</span><span style="color:#A6ACCD;">sayHi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sayHi</span></span>
<span class="line"></span></code></pre></div><p><code>exports</code>是<code>module.exports</code>的地址引用，导出对象最终以 module.exports 为准</p><p>exports 只是前者一个引用，容易丢失，前者指向被覆盖，后者导出 3</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span></code></pre></div><h3 id="导入-require" tabindex="-1">导入 - require <a class="header-anchor" href="#导入-require" aria-label="Permalink to &quot;导入 - require&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./b.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 后缀可省</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出b模块中的version变量</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">version)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 调用b模块中的sayHi方法 并输出其返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHi</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="模块加载机制" tabindex="-1">模块加载机制 <a class="header-anchor" href="#模块加载机制" aria-label="Permalink to &quot;模块加载机制&quot;">​</a></h2><h3 id="模块查找规则" tabindex="-1">模块查找规则 <a class="header-anchor" href="#模块查找规则" aria-label="Permalink to &quot;模块查找规则&quot;">​</a></h3><h4 id="当模块拥有路径但没有后缀时" tabindex="-1">当模块拥有路径但没有后缀时 <a class="header-anchor" href="#当模块拥有路径但没有后缀时" aria-label="Permalink to &quot;当模块拥有路径但没有后缀时&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./find.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./find</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>1.require 方法根据模块路径查找模块，如果是完整路径，直接引入模块。</p><p>2.如果模块后缀省略，先找<strong>同名 JS 文件</strong>再找<strong>同名 JS 文件夹</strong></p><p>3.如果找到了<strong>同名文件夹</strong>，找文件夹中的<strong>index.js</strong></p><p>4.如果文件夹中没有 index.js 就会去当前文件夹中的 package.json 文件中查找<strong>main 选项中入口文件</strong></p><p>5.如果找指定的入口文件不存在或者没有指定入口文件就会报错，模块没有被找到</p><h4 id="当模块没有路径且没有后缀时" tabindex="-1">当模块没有路径且没有后缀时 <a class="header-anchor" href="#当模块没有路径且没有后缀时" aria-label="Permalink to &quot;当模块没有路径且没有后缀时&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">find</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>1.Node.js 会假设它是系统模块</p><p>2.Node.js 会去<strong>node_modules 文件夹中</strong></p><p>3.首先看是否有<strong>同名 JS 文件</strong></p><p>4.再看是否有<strong>同名文件夹</strong>，找文件夹中 index.js</p><p>5.如果没有 index.js 查看该文件夹中的<strong>package.json 中的 main 选项确定模块入口文件</strong></p><p>6.否则找不到报错</p>`,27),p=[e];function t(r,c,i,y,D,C){return n(),a("div",null,p)}const F=s(l,[["render",t]]);export{A as __pageData,F as default};
