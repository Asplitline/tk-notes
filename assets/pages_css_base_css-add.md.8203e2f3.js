import{_ as s,c as a,o as l,Q as n}from"./chunks/framework.047f4c6e.js";const o="/assets/xian.32a9c7aa.jpg",F=JSON.parse('{"title":"CSS补充","description":"","frontmatter":{"outline":"deep","title":"CSS补充","order":4},"headers":[],"relativePath":"pages/css/base/css-add.md","lastUpdated":1678983192000}'),e={name:"pages/css/base/css-add.md"},t=n(`<h1 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h1><h2 id="背景线性渐变" tabindex="-1">背景线性渐变 <a class="header-anchor" href="#背景线性渐变" aria-label="Permalink to &quot;背景线性渐变&quot;">​</a></h2><p>起始方向： <strong>方位名词 或者 度数</strong></p><p>如果省略默认就是 <code>top</code></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">background: linear-gradient(起始方向</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 颜色1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 颜色2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ...);</span></span>
<span class="line"><span style="color:#A6ACCD;">background: -webkit-linear-gradient(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"><span style="color:#A6ACCD;">background: -webkit-linear-gradient(left top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> blue);</span></span>
<span class="line"></span></code></pre></div><blockquote><p>背景渐变必须添加浏览器私有前缀</p></blockquote><h2 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-label="Permalink to &quot;BFC&quot;">​</a></h2><p>BFC(Block formatting context)：&quot;块级格式化上下文&quot;。它是一个独立的渲染区域，只有 Block-level box 参与</p><p>哪些情况会产生 BFC:</p><ol><li>根元素</li><li>float 属性不为 none</li><li>position 为 absolute 或 fixed</li><li>display 为 inline-block, table-cell, table-caption, flex, inline-flex</li><li>overflow 不为 visible</li></ol><h2 id="光标形状-cursor" tabindex="-1">光标形状 cursor <a class="header-anchor" href="#光标形状-cursor" aria-label="Permalink to &quot;光标形状 cursor&quot;">​</a></h2><p><code>cursor:值</code></p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td><code>default</code></td><td>箭头（默认）</td></tr><tr><td><code>pointer</code></td><td>小手</td></tr><tr><td><code>move</code></td><td>移动</td></tr><tr><td><code>text</code></td><td>文本</td></tr><tr><td><code>not-allowed</code></td><td>禁止</td></tr><tr><td><code>help</code></td><td>问号</td></tr><tr><td><code>url()</code></td><td>临时替换样式<br><code>cursor:url(&#39;*.ico&#39;),auto;</code></td></tr></tbody></table><h2 id="轮廓线-outline" tabindex="-1">轮廓线 outline <a class="header-anchor" href="#轮廓线-outline" aria-label="Permalink to &quot;轮廓线 outline&quot;">​</a></h2><p><code>outline:值</code></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">outline: </span><span style="color:#FFCB6B;">outline-color</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">|</span><span style="color:#FFCB6B;">outline-style</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">| </span><span style="color:#FFCB6B;">outline-width</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>应用： <code>outline: 0;</code> 或者 <code>outline: none;</code></p><h2 id="元素可见性" tabindex="-1">元素可见性 <a class="header-anchor" href="#元素可见性" aria-label="Permalink to &quot;元素可见性&quot;">​</a></h2><p><code>visibility:值</code> （<strong>占空间</strong>）</p><ul><li>hidden 隐藏</li><li>visible 可见</li></ul><p><code>display:none</code>（<strong>不占空间</strong>）</p><blockquote><p>应用：js 特效，下拉菜单</p></blockquote><p><code>overflow:值</code></p><ul><li><strong>auto</strong>：内容溢出时，生成滚动条（<strong>默认</strong>）</li><li><strong>hidden</strong>：内容溢出时超出部分隐藏</li><li><strong>scroll</strong>：右边和下边都有滚动条</li><li><strong>visible</strong>（默认）：不剪切内容，也不加滚动条</li></ul><blockquote><p>水平方向溢出可以使用 overflow-x，纵向溢出使用 overflow-y</p><p>应用：清除浮动，保证内容不超出盒子</p></blockquote><h2 id="行内文字溢出省略号显示" tabindex="-1">行内文字溢出省略号显示 <a class="header-anchor" href="#行内文字溢出省略号显示" aria-label="Permalink to &quot;行内文字溢出省略号显示&quot;">​</a></h2><p><code>white-space</code>：设置或检索对象内文本显示方式</p><ul><li><strong>normal</strong> - 默认</li><li><strong>nowarp</strong> - 一行显示（直到文本结束 or br 标签）</li></ul><p><code>text-overflow</code>：设置或检索是否使用一个省略标记</p><ul><li><strong>clip</strong>：不显示</li><li><strong>ellipsis</strong>：溢出省略号显示</li></ul><h3 id="单行溢出" tabindex="-1">单行溢出 <a class="header-anchor" href="#单行溢出" aria-label="Permalink to &quot;单行溢出&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">overflow: hidden;</span></span>
<span class="line"><span style="color:#FFCB6B;">white-space</span><span style="color:#A6ACCD;">: nowrap; </span><span style="color:#676E95;font-style:italic;">/* 设置文本不换行，单行显示 */</span></span>
<span class="line"><span style="color:#FFCB6B;">text-overflow</span><span style="color:#A6ACCD;">: ellipsis; </span><span style="color:#676E95;font-style:italic;">/* 超出的文本使用省略号代替 */</span></span>
<span class="line"></span></code></pre></div><h3 id="多行溢出省略号" tabindex="-1">多行溢出省略号 <a class="header-anchor" href="#多行溢出省略号" aria-label="Permalink to &quot;多行溢出省略号&quot;">​</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">display: -webkit-box; </span><span style="color:#676E95;font-style:italic;">/*弹性伸缩盒子模型*/</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-box-orient: vertical; </span><span style="color:#676E95;font-style:italic;">/*伸缩盒子子排列方式*/</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-line-clamp: 3; </span><span style="color:#676E95;font-style:italic;">/*设置显示文本行数*/</span></span>
<span class="line"><span style="color:#FFCB6B;">text-overflow</span><span style="color:#A6ACCD;">: ellipsis;</span></span>
<span class="line"><span style="color:#A6ACCD;">overflow: hidden;</span></span>
<span class="line"></span></code></pre></div><h2 id="多栏布局" tabindex="-1">多栏布局 <a class="header-anchor" href="#多栏布局" aria-label="Permalink to &quot;多栏布局&quot;">​</a></h2><p><strong>分栏显示</strong>：<code>column-count:值</code></p><ul><li>值：栏目的数量</li></ul><p><strong>多栏隔断框</strong>：<code>column-rule:值</code></p><ul><li>取值同边框</li></ul><p><strong>每一栏的宽度</strong>：<code>column-width:值</code></p><h2 id="对齐" tabindex="-1">对齐 <a class="header-anchor" href="#对齐" aria-label="Permalink to &quot;对齐&quot;">​</a></h2><h3 id="水平居中" tabindex="-1">水平居中 <a class="header-anchor" href="#水平居中" aria-label="Permalink to &quot;水平居中&quot;">​</a></h3><table><thead><tr><th></th><th>margin:0 auto；</th><th>text-align:center;</th></tr></thead><tbody><tr><td>针对的对象</td><td>块元素</td><td>行元素和行内块</td></tr><tr><td>居中的范围</td><td>盒子本身</td><td>盒子中的文字和行内块</td></tr></tbody></table><h3 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h3><p>只针对<strong>行内元素或行内块元素</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">vertical-align</span><span style="color:#A6ACCD;">: baseline </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">top </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">middle </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">bottom;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>设置在 img 上</p></blockquote><p><strong>应用</strong>：图片/表单与文字的对齐</p><img src="`+o+`" alt="xian" style="zoom:67%;"><h4 id="垂直居中补充" tabindex="-1">垂直居中补充 <a class="header-anchor" href="#垂直居中补充" aria-label="Permalink to &quot;垂直居中补充&quot;">​</a></h4><h5 id="table" tabindex="-1">table <a class="header-anchor" href="#table" aria-label="Permalink to &quot;table&quot;">​</a></h5><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">parent </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">child </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> table-cell</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="弹性布局" tabindex="-1">弹性布局 <a class="header-anchor" href="#弹性布局" aria-label="Permalink to &quot;弹性布局&quot;">​</a></h5><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">parent </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="定位" tabindex="-1">定位 <a class="header-anchor" href="#定位" aria-label="Permalink to &quot;定位&quot;">​</a></h5><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">parent </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">child </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translateY</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h5 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h5><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">parent</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">child </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> middle</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="图片底侧空白缝隙问题" tabindex="-1"><strong>图片底侧空白缝隙</strong>问题 <a class="header-anchor" href="#图片底侧空白缝隙问题" aria-label="Permalink to &quot;**图片底侧空白缝隙**问题&quot;">​</a></h3><p>原因：图片或者表单等行内块元素，他的<strong>底线会和父级盒子的基线对齐</strong></p><ul><li>设置图片对齐方式(除了 baseline) - <code>vertical-align:middle | top| bottom</code></li><li>将图片转为块级，<strong>垂直对齐对块级无效</strong> - <code>display:block</code></li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p><strong>去掉文本域自动拉伸</strong>：<code>resize:none;</code></p><p><strong>透明度</strong>：<code>opacity:值</code> （ 0 - 1）</p><p><strong>背景透明</strong>：<code>rgba(值1，值2，值3，值4)</code></p><ul><li>值 123：颜色（0-255）</li><li>值 4：透明度</li></ul><p><strong>缩放 ZOOM</strong>：<code>zoom:值</code></p><ul><li>倍数（整数，小数）</li></ul><p><strong>zoom 和 transform 区别</strong></p><p><code>zoom：2</code></p><p>默认以左上角，占位</p><p><code>transform:scale(2);</code></p><p>默认以中心点，不占位</p>`,73),p=[t];function c(r,i,d,C,D,y){return l(),a("div",null,p)}const A=s(e,[["render",c]]);export{F as __pageData,A as default};
