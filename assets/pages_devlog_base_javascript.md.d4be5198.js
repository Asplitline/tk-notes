import{_ as s,c as a,o as n,a as l}from"./app.9bb939e0.js";const A=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{"title":"JavaScript","order":3},"headers":[{"level":2,"title":"异步封装","slug":"异步封装","link":"#异步封装","children":[]},{"level":2,"title":"匹配标点","slug":"匹配标点","link":"#匹配标点","children":[]},{"level":2,"title":"筛选字符串中数组","slug":"筛选字符串中数组","link":"#筛选字符串中数组","children":[]},{"level":2,"title":"？直接返回函数和闭包函数","slug":"直接返回函数和闭包函数","link":"#直接返回函数和闭包函数","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"pages/devlog/base/javascript.md","lastUpdated":1673022142000}'),p={name:"pages/devlog/base/javascript.md"},o=l(`<h1 id="javascript-实战" tabindex="-1">JavaScript 实战 <a class="header-anchor" href="#javascript-实战" aria-hidden="true">#</a></h1><h2 id="异步封装" tabindex="-1">异步封装 <a class="header-anchor" href="#异步封装" aria-hidden="true">#</a></h2><p>query 是一个 promise 对象。可以搭配 promise.all 实现异步函数循环</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">handlePromise</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">promise</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#A6ACCD;">api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">v</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promise</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ajax</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">...</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">promise</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#A6ACCD;">(arr)</span></span>
<span class="line"></span></code></pre></div><h2 id="匹配标点" tabindex="-1">匹配标点 <a class="header-anchor" href="#匹配标点" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 匹配标点 - 存在兼容性问题</span></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">p{P}</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">u</span></span>
<span class="line"><span style="color:#89DDFF;">/[</span><span style="color:#C3E88D;">\\u0021|\\u0022|\\u0027|\\u002C|\\u002E|\\u003A|\\u003B|\\u003F|\\u0060|\\u3002|\\uff1f|\\uff01|\\uff0c|\\u3001|\\uff1b|\\uff1a|\\u201c|\\u201d|\\u2018|\\u2019|\\uff08|\\uff09|\\u300a|\\u300b|\\u3008|\\u3009|\\u3010|\\u3011|\\u300e|\\u300f|\\u300c|\\u300d|\\ufe43|\\ufe44|\\u3014|\\u3015|\\u2026|\\u2014|\\uff5e|\\ufe4f|\\uffe5</span><span style="color:#89DDFF;">]+/</span><span style="color:#F78C6C;">u</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\u0021  =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u0022  =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#89DDFF;"> &quot;</span></span>
<span class="line"><span style="color:#C3E88D;">\\u0027  =&gt; &#39;</span></span>
<span class="line"><span style="color:#C3E88D;">\\u002C  =&gt; ,</span></span>
<span class="line"><span style="color:#C3E88D;">\\u002E  =&gt; .</span></span>
<span class="line"><span style="color:#C3E88D;">\\u003A  =&gt; :</span></span>
<span class="line"><span style="color:#C3E88D;">\\u003B  =&gt; ;</span></span>
<span class="line"><span style="color:#C3E88D;">\\u003F  =&gt; ?</span></span>
<span class="line"><span style="color:#C3E88D;">\\u0060  =&gt; </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">3002 =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> 。</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">ff1f =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ？</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">ff01 =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ！</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">ff0c =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ，</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">3001 =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> 、</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">ff1b =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ；</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">ff1a =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ：</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">201c =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> “</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">201d =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ”</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">2018 =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> ‘</span></span>
<span class="line"><span style="color:#A6ACCD;">\\u</span><span style="color:#C3E88D;">2019 =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">\\uff08 =&gt; （</span></span>
<span class="line"><span style="color:#C3E88D;">\\uff09 =&gt; ）</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300a =&gt; 《</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300b =&gt; 》</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3008 =&gt; 〈</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3009 =&gt; 〉</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3010 =&gt; 【</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3011 =&gt; 】</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300e =&gt; 『</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300f =&gt; 』</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300c =&gt; 「</span></span>
<span class="line"><span style="color:#C3E88D;">\\u300d =&gt; 」</span></span>
<span class="line"><span style="color:#C3E88D;">\\ufe43 =&gt; ﹃</span></span>
<span class="line"><span style="color:#C3E88D;">\\ufe44 =&gt; ﹄</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3014 =&gt; 〔</span></span>
<span class="line"><span style="color:#C3E88D;">\\u3015 =&gt; 〕</span></span>
<span class="line"><span style="color:#C3E88D;">\\u2026 =&gt; …</span></span>
<span class="line"><span style="color:#C3E88D;">\\u2014 =&gt; —</span></span>
<span class="line"><span style="color:#C3E88D;">\\uff5e =&gt; ～</span></span>
<span class="line"><span style="color:#C3E88D;">\\ufe4f =&gt; ﹏</span></span>
<span class="line"><span style="color:#C3E88D;">\\uffe5 =&gt; ￥</span></span>
<span class="line"></span></code></pre></div><p><a href="https://unicode-table.com/en/blocks/basic-latin/" target="_blank" rel="noreferrer">https://unicode-table.com/en/blocks/basic-latin/</a></p><h2 id="筛选字符串中数组" tabindex="-1">筛选字符串中数组 <a class="header-anchor" href="#筛选字符串中数组" aria-hidden="true">#</a></h2><p><code>&#39;1,2,3,4,[7,8,9],4,5,7,[111,22,44]&#39;</code> =&gt;<code> [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;[7,8,9]&quot;, &quot;4&quot;, &quot;5&quot;, &quot;7&quot;, &quot;[111,22,44]&quot;]</code></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1,2,3,4,[7,8,9],4,5,7,[111,22,44,a]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reg </span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(</span><span style="color:#A6ACCD;">\\[</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*?</span><span style="color:#A6ACCD;">\\]</span><span style="color:#89DDFF;">)|</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(reg)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(Boolean)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="直接返回函数和闭包函数" tabindex="-1">？直接返回函数和闭包函数 <a class="header-anchor" href="#直接返回函数和闭包函数" aria-hidden="true">#</a></h2><p>直接返回函数和闭包函数的区别</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> cl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test1</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cl</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">add</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cl</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">query</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">query</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> test1</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> add2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> test2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">add1</span><span style="color:#A6ACCD;">()(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">add2</span><span style="color:#A6ACCD;">()(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1 undefined</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,16),e=[o];function t(c,r,y,D,F,C){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
