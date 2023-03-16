import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.047f4c6e.js";const p="/assets/image-20210107230144428.b1062bf9.png",h=JSON.parse('{"title":"系统模块","description":"","frontmatter":{"outline":"deep","title":"系统模块","order":1},"headers":[],"relativePath":"pages/js/nodejs/system-module.md","lastUpdated":1678983192000}'),o={name:"pages/js/nodejs/system-module.md"},e=l(`<h1 id="系统模块" tabindex="-1">系统模块 <a class="header-anchor" href="#系统模块" aria-label="Permalink to &quot;系统模块&quot;">​</a></h1><h2 id="fs" tabindex="-1">fs <a class="header-anchor" href="#fs" aria-label="Permalink to &quot;fs&quot;">​</a></h2><p>f：file 文件 ，s：system 系统，文件操作系统。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reaFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件路径/文件名称</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件编码</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 读取文件</span></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">文件路径/文件名称</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">数据</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 写入文件</span></span>
<span class="line"></span></code></pre></div><h2 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h2><p>路径操作</p><p>路径拼接原因：不同操作系统的路径分隔符不统一</p><p>Windows 上是 <code>\\ /</code> ， Linux 上是 <code>/</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">路径</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">路径</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ul><li><p>大多情况使用绝对路径，相对路径相对命令行工具当前工作目录</p></li><li><p>读取文件或者设置文件路径时都会选择绝对路径</p></li><li><p>使用<code>__dirname</code>获取当前文件所在绝对路径</p></li></ul><h2 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h2><h3 id="http-协议" tabindex="-1">http 协议 <a class="header-anchor" href="#http-协议" aria-label="Permalink to &quot;http 协议&quot;">​</a></h3><p><strong>超文本传输协议</strong>（英文：HyperText Transfer Protocol，缩写：<strong>HTTP</strong>）规定了如何从网站服务器传输超文本到本地浏览器，它基于客户端服务器架构工作，是客户端（用户）和服务器端（网站）请求和应答的标准。</p><p><img src="`+p+`" alt="image-20210107230144428"></p><h3 id="报文" tabindex="-1">报文 <a class="header-anchor" href="#报文" aria-label="Permalink to &quot;报文&quot;">​</a></h3><p>在 HTTP 请求和响应的过程中传递的数据块就叫报文，包括要传送的数据和一些附加信息，并且要遵守规定好的格式。</p><h4 id="请求报文" tabindex="-1">请求报文 <a class="header-anchor" href="#请求报文" aria-label="Permalink to &quot;请求报文&quot;">​</a></h4><p>请求方式 （Request Method）</p><ul><li>GET 请求数据</li><li>POST 发送数据</li></ul><p>请求地址 （Request URL）</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 获取请求报文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 获取请求地址</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">method</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 获取请求方法</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="响应报文" tabindex="-1">响应报文 <a class="header-anchor" href="#响应报文" aria-label="Permalink to &quot;响应报文&quot;">​</a></h4><p>HTTP 状态码</p><ul><li><p>200 请求成功</p></li><li><p>404 请求的资源没有被找到</p></li><li><p>500 服务器端错误</p></li><li><p>400 客户端请求有语法错误</p></li></ul><p>内容类型</p><ul><li>text/html</li><li>text/css</li><li>application/javascript</li><li>image/jpeg</li><li>application/json</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 设置响应报文</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writeHead</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html;charset=utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="创建-web-服务器" tabindex="-1">创建 web 服务器 <a class="header-anchor" href="#创建-web-服务器" aria-label="Permalink to &quot;创建 web 服务器&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 引用系统模块</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 创建web服务器</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 当客户端发送请求的时候</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//  响应</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;h1&gt;hi, user&lt;/h1&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 监听3000端口</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">服务器已启动，监听3000端口，请访问 localhost:3000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="获取参数" tabindex="-1">获取参数 <a class="header-anchor" href="#获取参数" aria-label="Permalink to &quot;获取参数&quot;">​</a></h3><h4 id="get-请求" tabindex="-1">GET 请求 <a class="header-anchor" href="#get-请求" aria-label="Permalink to &quot;GET 请求&quot;">​</a></h4><p>参数被放置在浏览器地址栏中，例如：<code>http://localhost:3000/?name=zhangsan&amp;age=20</code></p><p>参数获取需要借助系统模块 url，url 模块用来处理 url 地址</p><p>请求途径：浏览器地址栏、link 标签的 href 属性、script 标签的 src 属性、img 标签的 src 属性、Form 表单提交</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 导入url系统模块 用于处理url地址</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 将url路径的各个部分解析出来并返回对象</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// true 代表将参数解析为对象格式</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">query</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">query</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h4 id="post-请求" tabindex="-1">POST 请求 <a class="header-anchor" href="#post-请求" aria-label="Permalink to &quot;POST 请求&quot;">​</a></h4><p>参数被放置在请求体中进行传输</p><p>获取 POST 参数需要使用 data 事件和 end 事件</p><p>使用 querystring 系统模块将参数转换为对象格式</p><p>请求途径：Form 表单提交</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"> </span><span style="color:#676E95;font-style:italic;">// 导入系统模块querystring 用于将HTTP参数转换为对象格式</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> querystring </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">querystring</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">postData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 监听参数传输事件</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">chunk</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">postData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">chunk</span><span style="color:#F07178;">;)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 监听参数传输完毕事件</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">querystring</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">postData</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">         </span><span style="color:#676E95;font-style:italic;">// parse默认为false，返回Object</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><blockquote><p>如果要解析数据，要在 end 事件中解析</p></blockquote><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h3><p>路由是指客户端请求地址与服务器端程序代码的对应关系。简单的说，就是请求什么响应什么。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 当客户端发来请求的时候</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">request</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 获取客户端的请求路径</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pathname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">pathname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pathname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">欢迎来到首页</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">pathname</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/list</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">欢迎来到列表页页</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">抱歉, 您访问的页面出游了</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="静态资源" tabindex="-1">静态资源 <a class="header-anchor" href="#静态资源" aria-label="Permalink to &quot;静态资源&quot;">​</a></h3><p>服务器端不需要处理，可以直接响应给客户端的资源就是静态资源，例如 CSS、JavaScript、image 文件。</p><h3 id="动态资源" tabindex="-1">动态资源 <a class="header-anchor" href="#动态资源" aria-label="Permalink to &quot;动态资源&quot;">​</a></h3><p>相同的请求地址不同的响应资源，这种资源就是动态资源。</p>`,49),t=[e];function c(r,y,D,F,A,C){return n(),a("div",null,t)}const d=s(o,[["render",c]]);export{h as __pageData,d as default};
