import{_ as e,c as a,o,a5 as l}from"./chunks/framework.XlwyxPMj.js";const b=JSON.parse('{"title":"进程间通信","description":"","frontmatter":{"title":"进程间通信","order":3},"headers":[],"relativePath":"pages/advance/electron-base/message.md","filePath":"pages/advance/electron-base/message.md","lastUpdated":1711813192000}'),r={name:"pages/advance/electron-base/message.md"},t=l('<h1 id="进程间通信" tabindex="-1">进程间通信 <a class="header-anchor" href="#进程间通信" aria-label="Permalink to &quot;进程间通信&quot;">​</a></h1><h2 id="渲染进程-到-主进程" tabindex="-1">渲染进程 到 主进程 <a class="header-anchor" href="#渲染进程-到-主进程" aria-label="Permalink to &quot;渲染进程 到 主进程&quot;">​</a></h2><h3 id="callback-写法" tabindex="-1">callback 写法 <a class="header-anchor" href="#callback-写法" aria-label="Permalink to &quot;callback 写法&quot;">​</a></h3><p>渲染进程发送：<code>ipcRenderer.send</code></p><p>主进程监听：<code>ipcMain.on</code></p><h3 id="promise-写法-7-0" tabindex="-1">Promise 写法 ^7.0+^ <a class="header-anchor" href="#promise-写法-7-0" aria-label="Permalink to &quot;Promise 写法 ^7.0+^&quot;">​</a></h3><p>处理请求 + 响应模式</p><p>渲染进程发送：<code>ipcRenderer.invoke</code></p><p>主进程处理：<code>ipcMain.handle</code></p><h2 id="主进程-到-渲染进程" tabindex="-1">主进程 到 渲染进程 <a class="header-anchor" href="#主进程-到-渲染进程" aria-label="Permalink to &quot;主进程 到 渲染进程&quot;">​</a></h2><p>渲染进程监听：<code>ipcRenderer.on</code></p><p>主进程发送：<code>webContents.send</code></p><h2 id="渲染进程之间" tabindex="-1">渲染进程之间 <a class="header-anchor" href="#渲染进程之间" aria-label="Permalink to &quot;渲染进程之间&quot;">​</a></h2><ol><li>通知事件</li></ol><ul><li>主进程转发 ^&lt;5.0^</li><li><code>ipcRenderer.sendTo</code> ^5.0+^</li></ul><ol start="2"><li>数据共享</li></ol><ul><li>Web 技术（localStorage、sessionStorage、indexedDB）</li><li>使用 remote</li></ul><blockquote><p>少用 remote，sync 方法，影响性能</p></blockquote><h2 id="主进程之间" tabindex="-1">主进程之间 <a class="header-anchor" href="#主进程之间" aria-label="Permalink to &quot;主进程之间&quot;">​</a></h2><p>主进程只有一个，只是内容过多，分文件</p><ul><li><code>webContents.send</code> ，发送给渲染进程</li><li>渲染进程 <ul><li><code>ipcRenderer.on</code>：接收事件</li><li><code>ipcRenderer.send</code>：返回事件</li></ul></li></ul>',21),c=[t];function i(d,n,s,p,h,u){return o(),a("div",null,c)}const m=e(r,[["render",i]]);export{b as __pageData,m as default};
