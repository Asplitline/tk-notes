import{_ as s,c as a,o as n,d as l}from"./app.8e53d5c3.js";const D=JSON.parse('{"title":"yarn","description":"","frontmatter":{"title":"yarn","order":2},"headers":[{"level":2,"title":"config - \u914D\u7F6E","slug":"config-\u914D\u7F6E","link":"#config-\u914D\u7F6E","children":[{"level":3,"title":"\u5168\u5C40\u914D\u7F6E\u6587\u4EF6","slug":"\u5168\u5C40\u914D\u7F6E\u6587\u4EF6","link":"#\u5168\u5C40\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E","slug":"\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E","link":"#\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E","children":[]},{"level":3,"title":"\u914D\u7F6E\u955C\u50CF","slug":"\u914D\u7F6E\u955C\u50CF","link":"#\u914D\u7F6E\u955C\u50CF","children":[]}]},{"level":2,"title":"install - \u5B89\u88C5","slug":"install-\u5B89\u88C5","link":"#install-\u5B89\u88C5","children":[]},{"level":2,"title":"add - \u6DFB\u52A0","slug":"add-\u6DFB\u52A0","link":"#add-\u6DFB\u52A0","children":[]},{"level":2,"title":"upgrade - \u5347\u7EA7","slug":"upgrade-\u5347\u7EA7","link":"#upgrade-\u5347\u7EA7","children":[{"level":3,"title":"npm-check-updates","slug":"npm-check-updates","link":"#npm-check-updates","children":[]},{"level":3,"title":"upgrade-interactive","slug":"upgrade-interactive","link":"#upgrade-interactive","children":[]},{"level":3,"title":"upgrade","slug":"upgrade","link":"#upgrade","children":[]}]},{"level":2,"title":"remove - \u79FB\u9664","slug":"remove-\u79FB\u9664","link":"#remove-\u79FB\u9664","children":[]},{"level":2,"title":"link - \u94FE\u63A5","slug":"link-\u94FE\u63A5","link":"#link-\u94FE\u63A5","children":[]},{"level":2,"title":"yarn.lock","slug":"yarn-lock","link":"#yarn-lock","children":[]},{"level":2,"title":"\u751F\u6001","slug":"\u751F\u6001","link":"#\u751F\u6001","children":[{"level":3,"title":"yrm","slug":"yrm","link":"#yrm","children":[]}]},{"level":2,"title":"\u76F8\u5173\u94FE\u63A5","slug":"\u76F8\u5173\u94FE\u63A5","link":"#\u76F8\u5173\u94FE\u63A5","children":[]}],"relativePath":"pages/package/cli/yarn.md"}'),e={name:"pages/package/cli/yarn.md"},p=l(`<h1 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h1><h2 id="config-\u914D\u7F6E" tabindex="-1">config - \u914D\u7F6E <a class="header-anchor" href="#config-\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u5168\u5C40\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u5168\u5C40\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span></span>
<span class="line"><span style="color:#A6ACCD;">subl .yarnrc</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E" tabindex="-1">\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E <a class="header-anchor" href="#\u6539\u53D8\u7F13\u5B58\u4F4D\u7F6E" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># yarn bin \u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global bin</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config  </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> global-folder </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:/yarn/global</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># yarn \u5168\u5C40\u5B89\u88C5\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global dir</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> cache-folder </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:\\yarn\\cache</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E\u955C\u50CF" tabindex="-1">\u914D\u7F6E\u955C\u50CF <a class="header-anchor" href="#\u914D\u7F6E\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn config get registry</span></span>
<span class="line"><span style="color:#676E95;"># \u6DD8\u5B9D\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry http://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#676E95;"># \u5B98\u65B9\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry https://registry.npmjs.org/</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn config get</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn config delete</span></span>
<span class="line"></span></code></pre></div><h2 id="install-\u5B89\u88C5" tabindex="-1">install - \u5B89\u88C5 <a class="header-anchor" href="#install-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn install</span></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u65B0\u4E0B\u8F7D\u6240\u6709\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn install --force</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># \u6E05\u9664\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn cache clean</span></span>
<span class="line"></span></code></pre></div><h2 id="add-\u6DFB\u52A0" tabindex="-1">add - \u6DFB\u52A0 <a class="header-anchor" href="#add-\u6DFB\u52A0" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># devDependencies - peerDependencies - optionalDependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --dev</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --peer</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> --optional</span></span>
<span class="line"></span></code></pre></div><p>\u4F8B\u5B50</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add package-1@1.2.3</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add package-2@^1.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add package-3@beta</span></span>
<span class="line"></span></code></pre></div><h2 id="upgrade-\u5347\u7EA7" tabindex="-1">upgrade - \u5347\u7EA7 <a class="header-anchor" href="#upgrade-\u5347\u7EA7" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="npm-check-updates" tabindex="-1">npm-check-updates <a class="header-anchor" href="#npm-check-updates" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u5B89\u88C5 npm-check-updates</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn global add npm-check-updates</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u66F4\u65B0\u5305\uFF08yarn.lock\u548Cpackage.json\u540C\u6B65\u66F4\u65B0\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">ncu</span></span>
<span class="line"><span style="color:#676E95;"># \u5355\u5305\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">ncu -u axios</span></span>
<span class="line"></span></code></pre></div><h3 id="upgrade-interactive" tabindex="-1">upgrade-interactive <a class="header-anchor" href="#upgrade-interactive" aria-hidden="true">#</a></h3><blockquote><p>\u7248\u672C\u7BA1\u7406\u5B58\u5728\u95EE\u9898</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn upgrade-interactive --latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u9700\u8981\u624B\u52A8\u9009\u62E9\u5347\u7EA7\u7684\u4F9D\u8D56\u5305\uFF0C\u6309\u7A7A\u683C\u952E\u9009\u62E9\uFF0Ca \u952E\u5207\u6362\u6240\u6709\uFF0Ci \u952E\u53CD\u9009\u9009\u62E9</span></span>
<span class="line"></span></code></pre></div><h3 id="upgrade" tabindex="-1">upgrade <a class="header-anchor" href="#upgrade" aria-hidden="true">#</a></h3><blockquote><p>\u4E0D\u597D\u7528</p></blockquote><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn upgrade package@version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># yarn.lock\u548Cpackage.json\u90FD\u4F1A\u66F4\u65B0\uFF0C\u4F46\u662F\u4F1A\u9501\u5B9A\u7248\u672C</span></span>
<span class="line"></span></code></pre></div><h2 id="remove-\u79FB\u9664" tabindex="-1">remove - \u79FB\u9664 <a class="header-anchor" href="#remove-\u79FB\u9664" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn remove </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="link-\u94FE\u63A5" tabindex="-1">link - \u94FE\u63A5 <a class="header-anchor" href="#link-\u94FE\u63A5" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7 link \u94FE\u63A5\u672C\u5730\u4F9D\u8D56</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn clone \u6A21\u5757\u5230\u672C\u5730</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u6A21\u5757\u548C\u9879\u76EE\u5728\u540C\u4E00\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn link ../module</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u6A21\u5757\u548C\u9879\u76EE\u4E0D\u5728\u540C\u4E00\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#676E95;">## \u5148\u53BB\u5230\u6A21\u5757\u76EE\u5F55\uFF0C\u628A\u5B83 link \u5230\u5168\u5C40</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ../yarn-link-test</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn link</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u518D\u53BB\u9879\u76EE\u76EE\u5F55\u901A\u8FC7\u5305\u540D\u6765 link</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> ../my-project-link</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn link test-yarn-link</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\u6A21\u5757\u5305\u540D\uFF0C\u5373\uFF1Apackage.json\u4E2Dname</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u5728\u9879\u76EE\u76EE\u5F55\u4E0B\uFF0C\u89E3\u9664\u9879\u76EE\u4E0E\u6A21\u5757\u7684link</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn unlink \u6A21\u5757\u540D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u5728\u6A21\u5757\u76EE\u5F55\u4E0B\uFF1A\u89E3\u9664\u6A21\u5757\u5168\u5C40\u7684link</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn unlink \u6A21\u5757\u540D</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u76F4\u63A5\u6DFB\u52A0\u672C\u5730\u4F9D\u8D56</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">## \u94FE\u63A5\u672C\u5730\u5305 - \u76F8\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add  @pancakeswap/uikit </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">file:../pancake-toolkit/packages/pancake-uikit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add  @pancakeswap/uikit </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">*</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">pancake-toolkit</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">packages</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">pancake-uikit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">## \u94FE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn link @pancakeswap/uikit</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u91CD\u65B0\u5B89\u88C5</li></ol><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn install --force</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u5EFA\u8BAE \u76F4\u63A5\u5728 package.json \u4E2D\u6DFB\u52A0\uFF0C\u7136\u540E yarn install --force</p></blockquote><h2 id="yarn-lock" tabindex="-1">yarn.lock <a class="header-anchor" href="#yarn-lock" aria-hidden="true">#</a></h2><p>yarn.lock \u662F\u81EA\u52A8\u751F\u6210\u7684\uFF0C\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\u81EA\u52A8\u66F4\u65B0 <code>package.json</code> \u548C <code>package.lock</code></p><p>\u65B0\u589E\u4F9D\u8D56\uFF1A<code>yarn add</code></p><p>\u5347\u7EA7\u4F9D\u8D56\uFF1A<code>yarn upgrade</code></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;">core-js-compat@^</span><span style="color:#F78C6C;">3.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  version </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3.14.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolved </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://registry.npmjs.org/core-js-compat/-/core-js-compat-3.14.0.tgz#b574dabf29184681d5b16357bd33d104df3d29a5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  integrity sha</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">-tXTavykYRoHVsWNXvTPRBN</span><span style="color:#F78C6C;">89</span><span style="color:#A6ACCD;">KaU=</span></span>
<span class="line"><span style="color:#A6ACCD;">  dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">    browserslist </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.16.6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    semver </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>Identifier(s)</strong>\uFF1A<code>core-js-compat@^3.0.0</code>\u662F\u4F9D\u8D56\u7684 identifier\u3002</p><ul><li>package.json \u91CC\u5BF9\u5E94\u7684\u5305\u540D\u548C\u7248\u672C\u533A\u95F4\uFF0C\u7528<code>@</code>\u8FDE\u63A5\u3002</li><li>\u53EF\u80FD\u591A\u4E2A Identifier \u6307\u5411\u540C\u4E00\u7248\u672C</li></ul><p><strong>version</strong>\uFF1A\u5B9E\u9645\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u6EE1\u8DB3\u7248\u672C\u533A\u95F4\u91CC\u7684\u4E00\u4E2A\u7248\u672C (\u9664\u975E\u914D\u7F6E<code>resolutions</code> ) \u3002</p><p><strong>resolved</strong>\uFF1A\u4E00\u4E2A\u94FE\u63A5\uFF0C\u4E0B\u8F7D\u5305\u7684\u5730\u5740\u3002</p><p>integrity\uFF1A\u5BF9<code>resolved</code>\u4E0B\u8F7D\u4E0B\u6765\u7684\u6587\u4EF6\u8FDB\u884C\u5B8C\u6574\u6027\u6821\u9A8C\u3002\u5982\u679C\u51FA\u73B0 diff\uFF0C\u8BF4\u660E\u540C\u4E00\u4E2A\u4E0B\u8F7D\u94FE\u63A5\u5BF9\u5E94\u7684\u6587\u4EF6\u88AB\u4FEE\u6539\u8FC7\u3002</p><p><strong>dependencies</strong>\uFF1A\u5305\u81EA\u5DF1\u7684\u4F9D\u8D56\u3002</p><ul><li>\u4F9D\u8D56\u7684<code>browserslist &quot;^4.16.6&quot;</code></li><li>\u770B\u4E0B\u5B9E\u9645\u5B89\u88C5\u7684\u54EA\u4E2A\u7248\u672C\uFF0C\u628A\u5B83\u62FC\u6210<code>browserslist@^4.16.6</code>\uFF0C\u4EE5\u6B64\u4E3A\u5173\u952E\u5B57\u5728 yarn.lock \u4E2D\u641C\u7D22\uFF0C\u5C31\u80FD\u627E\u5230\u5BF9\u5E94\u7684\u201C\u5757\u201D</li></ul><h2 id="\u751F\u6001" tabindex="-1">\u751F\u6001 <a class="header-anchor" href="#\u751F\u6001" aria-hidden="true">#</a></h2><h3 id="yrm" tabindex="-1">yrm <a class="header-anchor" href="#yrm" aria-hidden="true">#</a></h3><p>yrm\uFF1A\u5207\u6362\u955C\u50CF\u6E90\uFF0C\u6D4B\u8BD5\u4E0D\u540C\u6E90\u901F\u5EA6</p><p>\u5B89\u88C5 yrm</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -g yrm</span></span>
<span class="line"></span></code></pre></div><p>\u5217\u51FA\u5F53\u524D\u53EF\u7528\u7684\u6240\u6709\u955C\u50CF\u6E90</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yrm ls</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm -----  https://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#A6ACCD;">cnpm ----  http://r.cnpmjs.org/</span></span>
<span class="line"><span style="color:#A6ACCD;">taobao --  https://registry.npm.taobao.org/</span></span>
<span class="line"><span style="color:#A6ACCD;">nj ------  https://registry.nodejitsu.com/</span></span>
<span class="line"><span style="color:#A6ACCD;">rednpm -- http://registry.mirror.cqupt.edu.cn</span></span>
<span class="line"><span style="color:#A6ACCD;">skimdb -- https://skimdb.npmjs.com/registry</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn ----  https://registry.yarnpkg.com</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF\u6E90</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yrm use taobao</span></span>
<span class="line"></span></code></pre></div><p>\u6D4B\u8BD5\u8BBF\u95EE\u901F\u5EA6</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yrm </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> taobao</span></span>
<span class="line"></span></code></pre></div><h2 id="\u76F8\u5173\u94FE\u63A5" tabindex="-1">\u76F8\u5173\u94FE\u63A5 <a class="header-anchor" href="#\u76F8\u5173\u94FE\u63A5" aria-hidden="true">#</a></h2><p>\u5B98\u7F51\uFF1A<a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">https://yarnpkg.com/</a></p><p>Yarn cli: <a href="https://classic.yarnpkg.com/en/docs/cli" target="_blank" rel="noreferrer">https://classic.yarnpkg.com/en/docs/cli</a></p><p>\u66F4\u6539 Yarn \u7F13\u5B58\u4F4D\u7F6E\uFF1A<a href="https://zhuanlan.zhihu.com/p/380723351" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/380723351</a></p>`,64),o=[p];function c(t,r,i,d,y,C){return n(),a("div",null,o)}const h=s(e,[["render",c]]);export{D as __pageData,h as default};
