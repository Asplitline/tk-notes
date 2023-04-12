import{_ as e,c as o,o as t,Q as a}from"./chunks/framework.7addaa9c.js";const u=JSON.parse('{"title":"javascript","description":"","frontmatter":{"title":"javascript","order":4},"headers":[],"relativePath":"pages/qa/tech/javascript.md","lastUpdated":1681318149000}'),i={name:"pages/qa/tech/javascript.md"},l=a('<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="基础篇" tabindex="-1">基础篇 <a class="header-anchor" href="#基础篇" aria-label="Permalink to &quot;基础篇&quot;">​</a></h2><h3 id="new一个箭头函数的会怎么样" tabindex="-1">new一个箭头函数的会怎么样 <a class="header-anchor" href="#new一个箭头函数的会怎么样" aria-label="Permalink to &quot;new一个箭头函数的会怎么样&quot;">​</a></h3><p>箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。</p><p><strong>new操作符</strong>的实现步骤如下：</p><ol><li>创建一个对象</li><li>将构造函数的作用域赋给新对象（也就是将对象的__proto__属性指向构造函数的prototype属性）</li><li>指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）</li><li>返回新的对象</li></ol><p>所以，上面的第二、三步，箭头函数都是没有办法执行的。</p><h3 id="箭头函数与普通函数的区别" tabindex="-1">箭头函数与普通函数的区别 <a class="header-anchor" href="#箭头函数与普通函数的区别" aria-label="Permalink to &quot;箭头函数与普通函数的区别&quot;">​</a></h3><p>（1）箭头函数比普通函数更加简洁</p><p>（2）箭头函数没有自己的this。它只会在自己作用域的上一层继承this。所</p><p>（3）箭头函数继承来的this指向永远不会改变</p><p>（4）call()、apply()、bind()等方法不能改变箭头函数中this的指向</p><p>（5）箭头函数不能作为构造函数使用</p><p>（6）箭头函数没有自己的arguments</p><p>（7）箭头函数没有prototype</p><p>（8）箭头函数不能用作Generator函数，不能使用yeild关键字</p><h3 id="扩展运算符的作用及使用场景" tabindex="-1">扩展运算符的作用及使用场景 <a class="header-anchor" href="#扩展运算符的作用及使用场景" aria-label="Permalink to &quot;扩展运算符的作用及使用场景&quot;">​</a></h3><p>对象的扩展运算符：用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。</p><p>数组的扩展运算符：可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。</p><h3 id="什么是尾调用-使用尾调用有什么好处" tabindex="-1">什么是尾调用，使用尾调用有什么好处？ <a class="header-anchor" href="#什么是尾调用-使用尾调用有什么好处" aria-label="Permalink to &quot;什么是尾调用，使用尾调用有什么好处？&quot;">​</a></h3><p>尾调用是指一个函数在最后一步调用另一个函数。</p><p>在尾调用优化的情况下，调用函数的栈帧被弹出，让新的函数调用成为当前帧的最后一条语句，从而避免了额外的函数调用开销。</p><p>尾调用的好处主要有以下几点：</p><ol><li><strong>节省内存</strong>：由于尾调用优化会减少不必要的函数调用，所以可以减少内存的使用。在递归调用时，如果使用尾调用，可以有效地避免栈溢出的问题，因为只需要保留一帧栈帧即可。</li><li><strong>提高性能</strong>：由于尾调用不需要额外的函数调用开销，所以可以提高函数的性能，特别是在调用次数较多的情况下。</li><li><strong>简化代码</strong>：使用尾调用可以使代码更加简洁、易读、易维护，特别是在函数式编程中，可以使用尾调用实现函数的组合和柯里化等高级函数的特性。</li></ol><h3 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h3><p><strong>闭包是指有权访问另一个函数作用域中变量的函数</strong>。</p><p>创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。</p><p>两个常用用途：</p><p>1。 在函数外部能够访问到函数内部的变量。</p><ol start="2"><li>使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。</li></ol><p>在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。经典面试题：循环中使用闭包解决 var 定义函数的问题</p><p>判断数据类型的方式</p><ol><li><strong>typeof操作符</strong>：可以返回数据类型的字符串形式，包括undefined、boolean、number、string、object、symbol和function。但typeof null会返回object，无法准确区分null和object类型。</li><li><strong>instanceof操作符</strong>：可以判断一个实例是否属于某个构造函数创建的对象，判断结果是布尔值。但是，instanceof无法判断字面量方式创建的原始类型值，比如字符串、数字等。</li><li><strong>Object.prototype.toString</strong>方法：可以返回对象的类型字符串，比typeof更加精确。可以通过Function.prototype.call方法调用，传入需要判断类型的对象作为参数。</li><li><strong>Array.isArray</strong>方法：用于判断一个变量是否为数组类型，返回布尔值。</li><li><strong>constructor</strong>属性：所有的JavaScript对象都有一个constructor属性，该属性指向创建该对象的构造函数。但是该属性可以被更改，因此可能不准确。</li></ol><h3 id="宏任务、微任务" tabindex="-1">宏任务、微任务 <a class="header-anchor" href="#宏任务、微任务" aria-label="Permalink to &quot;宏任务、微任务&quot;">​</a></h3><p><strong>宏任务</strong>:可以看作是由JavaScript引擎（浏览器或Node.js）创建的任务。<strong>每次执行栈中的代码执行完毕，就会执行一次宏任务队列中的任务。</strong></p><p>如：script脚本、setTimeout、setInterval、I/O等。</p><p><strong>微任务</strong>：是相对于宏任务而言的，可以看作是在当前宏任务执行完毕后立即执行的任务。<strong>当一个宏任务中的代码执行完毕后，会立即执行微任务队列中的任务，直到微任务队列为空，然后再执行下一个宏任务。</strong></p><p>如：Promise的then方法、MutationObserver、Object.observe等。</p><h3 id="讲下原型链" tabindex="-1">讲下原型链 <a class="header-anchor" href="#讲下原型链" aria-label="Permalink to &quot;讲下原型链&quot;">​</a></h3><p>原型链是 JavaScript 中的一种机制，用于实现对象的继承和属性的查找。</p><ul><li>每个对象都有一个原型对象，即 <code>__proto__</code> 属性，它指向该对象的构造函数的原型对象。</li><li>原型对象也可以有自己的原型对象，形成一个链式结构。在查找对象的属性和方法时，如果在当前对象上找不到，则会沿着原型链向上查找，直到找到为止。</li><li>最终，所有对象的原型对象都会指向 <code>Object.prototype</code>。</li></ul><h3 id="暂死性死区" tabindex="-1">暂死性死区 <a class="header-anchor" href="#暂死性死区" aria-label="Permalink to &quot;暂死性死区&quot;">​</a></h3><p>暂时性死区是指在代码块内部，使用 <code>let</code> 或 <code>const</code> 声明变量之前，该变量是不能被访问的，否则会抛出一个 <code>ReferenceError</code> 错误。</p><p>由于 JavaScript 的变量提升机制变为了块级作用域，在变量声明前访问该变量时，该变量还没有被声明</p><p>特性可以避免在变量未声明的情况下使用变量，从而减少代码错误。</p><h3 id="事件循环-event-loop" tabindex="-1">事件循环（event loop） <a class="header-anchor" href="#事件循环-event-loop" aria-label="Permalink to &quot;事件循环（event loop）&quot;">​</a></h3><p>事件循环（event loop）是 JavaScript 实现异步编程的核心机制之一。它是一个事件处理的循环系统，负责接收事件并将它们派发给相应的处理器。在浏览器中，事件可以是用户输入、计时器到期、网络请求的响应等等。在 Node.js 中，事件可以是文件 I/O、网络 I/O、定时器等等。</p><p>JavaScript 的事件循环包含一个主线程和一个任务队列（task queue）。主线程会不停地从任务队列中取出任务并执行，这些任务可以是同步任务和异步任务。同步任务会立即执行，而异步任务会被放到任务队列中，等待下一次事件循环再次执行。</p><p>在事件循环中，异步任务分为宏任务（macro task）和微任务（micro task）。宏任务包括 setTimeout、setInterval、I/O 操作等，而微任务包括 Promise、process.nextTick、MutationObserver 等。在事件循环中，主线程执行完当前宏任务后，会立即处理所有微任务，然后再从任务队列中取出下一个宏任务执行。</p><p>JavaScript 采用单线程的事件循环机制，保证了同一时刻只能有一个任务在主线程中执行，避免了多线程带来的各种问题。同时，异步任务的使用也可以避免阻塞主线程，提高了 JavaScript 的执行效率。</p><h3 id="原型、构造函数、对象" tabindex="-1">原型、构造函数、对象 <a class="header-anchor" href="#原型、构造函数、对象" aria-label="Permalink to &quot;原型、构造函数、对象&quot;">​</a></h3><ol><li><strong>构造函数</strong>：构造函数是用于创建对象的函数，通过构造函数创建的对象，可以共享构造函数的属性和方法。</li><li><strong>原型</strong>：每个函数都有一个原型对象，可以通过函数的 <code>prototype</code> 属性来访问，原型对象中保存了构造函数的公共属性和方法，也就是所有通过构造函数创建的对象共享的属性和方法。</li><li><strong>对象</strong>：通过构造函数创建出来的实例对象。</li></ol><h3 id="js-继承" tabindex="-1">JS 继承 <a class="header-anchor" href="#js-继承" aria-label="Permalink to &quot;JS 继承&quot;">​</a></h3><p>在 JavaScript 中，继承可以通过原型链来实现。每个 JavaScript 对象都有一个原型，可以通过 <code>Object.getPrototypeOf()</code> 方法获取该对象的原型。当在一个对象上查找一个属性时，如果对象本身没有该属性，则会沿着原型链向上查找，直到找到该属性或者到达原型链的顶部为止。</p><p>JavaScript 中常用的继承方式有以下几种：</p><ol><li><strong>原型链继承</strong>：将父类的实例作为子类的原型，实现子类继承父类的属性和方法。</li><li><strong>构造函数继承</strong>：在子类构造函数中调用父类构造函数，使用 <code>call</code> 或 <code>apply</code> 方法将父类实例绑定到子类实例上，实现子类继承父类的属性。</li><li><strong>组合继承</strong>：将原型链继承和构造函数继承结合起来，既能够继承父类的属性和方法，又能够在子类实例上独立创建父类属性的副本。</li><li><strong>寄生组合继承</strong>：对组合继承进行优化，避免了在子类实例上创建多余的父类属性副本。</li></ol><h3 id="js-垃圾回收机制" tabindex="-1">js 垃圾回收机制 <a class="header-anchor" href="#js-垃圾回收机制" aria-label="Permalink to &quot;js 垃圾回收机制&quot;">​</a></h3><p>JavaScript的垃圾回收机制是自动的，不需要手动操作。JavaScript引擎会自动监测内存的使用情况，当发现一个对象不再被引用时，就会将其标记为垃圾对象，并在适当的时候进行回收，释放其所占用的内存空间，以便下一次的内存分配。</p><p>具体来说，JavaScript中的垃圾回收机制主要有两种实现方式：</p><ol><li>标记清除（Mark-and-Sweep）：JavaScript引擎会定期进行垃圾回收，先标记所有被引用的对象，再清除所有没有被标记的对象。</li><li>引用计数（Reference Counting）：JavaScript引擎会维护每个对象的引用计数，当引用计数为0时，就将其标记为垃圾对象，并立即回收。</li></ol><p>在实际应用中，标记清除是目前主流的垃圾回收算法，而引用计数的缺陷也是被广泛认可的，它不能处理循环引用的情况，会导致内存泄漏。因此，现代浏览器都采用了标记清除算法，并针对循环引用的问题进行了优化。</p><h3 id="promise" tabindex="-1">promise <a class="header-anchor" href="#promise" aria-label="Permalink to &quot;promise&quot;">​</a></h3><p>Promise 是一种异步编程的解决方案，可以有效地解决回调地狱的问题。</p><p>Promise 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。Promise 对象的状态改变只能从 pending 转变为 fulfilled 或 rejected，且一旦状态改变，就不能再次改变。</p><p>一个 Promise 对象通常包含两个函数作为参数，分别是 resolve 和 reject。当异步操作执行成功时，会调用 resolve 函数，并且把异步操作的结果作为参数传递给 resolve 函数。当异步操作执行失败时，会调用 reject 函数，并把错误信息作为参数传递给 reject 函数。</p><p>Promise 对象具有链式调用的特点，即可以在一个 then 方法中返回另一个 Promise 对象，从而实现多个异步操作的依次执行。此外，Promise 还提供了 catch 方法来捕获可能发生的错误，以及 finally 方法来指定不管 Promise 对象的状态如何都要执行的操作。</p><p>值得注意的是，在使用 Promise 的过程中，需要特别注意回调函数中的 this 指向问题，可以通过箭头函数或 bind 方法解决这个问题。此外，在使用 Promise 的过程中，还需要注意错误处理，以免出现未处理的异常情况。</p><h3 id="es6-新特性" tabindex="-1">ES6 新特性 <a class="header-anchor" href="#es6-新特性" aria-label="Permalink to &quot;ES6 新特性&quot;">​</a></h3><ol><li>let和const关键字</li><li>箭头函数</li><li>模板字符串</li><li>解构赋值</li><li>默认参数值</li><li>rest参数</li><li>扩展操作符</li><li>对象字面量增强</li><li>类与继承</li><li>模块化</li><li>Promise</li><li>Set和Map数据结构</li><li>迭代器和生成器</li><li>Symbol类型和Symbol属性</li><li>Proxy和Reflect</li><li>for...of循环</li><li>字符串和数值扩展</li><li>生成器和异步函数</li></ol><p>xhr 请求取消</p><h2 id="对比篇" tabindex="-1">对比篇 <a class="header-anchor" href="#对比篇" aria-label="Permalink to &quot;对比篇&quot;">​</a></h2><h3 id="let、const、var的区别" tabindex="-1">let、const、var的区别 <a class="header-anchor" href="#let、const、var的区别" aria-label="Permalink to &quot;let、const、var的区别&quot;">​</a></h3><p><strong>（1）块级作用域：</strong> 块作用域由 <code>{ }</code>包括，let和const具有块级作用域，var不存在块级作用域。块级作用域解决了ES5中的两个问题：</p><ul><li>内层变量可能覆盖外层变量</li><li>用来计数的循环变量泄露为全局变量</li></ul><p><strong>（2）变量提升：</strong> var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。</p><p><strong>（3）给全局添加属性：</strong> 浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。</p><p><strong>（4）重复声明：</strong> var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const和let不允许重复声明变量。</p><p><strong>（5）暂时性死区：</strong> 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为<strong>暂时性死区</strong>。使用var声明的变量不存在暂时性死区。</p><p><strong>（6）初始值设置：</strong> 在变量声明时，var 和 let 可以不用设置初始值。而const声明变量必须设置初始值。</p><p><strong>（7）指针指向：</strong> let和const都是ES6新增的用于创建变量的语法。 let创建的变量是可以更改指针指向（可以重新赋值）。但const声明的变量是不允许改变指针的指向。</p><h3 id="es6模块与commonjs模块有什么异同" tabindex="-1">ES6模块与CommonJS模块有什么异同？ <a class="header-anchor" href="#es6模块与commonjs模块有什么异同" aria-label="Permalink to &quot;ES6模块与CommonJS模块有什么异同？&quot;">​</a></h3><ol><li>语法不同：ES6模块使用<code>import</code>和<code>export</code>关键字来导入和导出模块，而CommonJS模块使用<code>require()</code>函数来导入模块，使用<code>module.exports</code>或<code>exports</code>对象来导出模块。</li><li>加载方式不同：ES6模块在编译时静态分析，可以通过网络或本地加载器（如Webpack）等进行加载，而CommonJS模块是在运行时动态加载的，只能在本地环境中使用。</li><li>导出方式不同：ES6模块可以导出变量、函数、类、对象等任何 JavaScript 对象，而CommonJS模块只能导出一个对象或函数。</li><li>执行顺序不同：ES6模块中的顶级代码是在模块加载时执行的，而CommonJS模块中的顶级代码是在运行时执行的。</li><li>可静态分析：由于ES6模块采用静态分析，因此可以进行更好的优化，例如在编译时进行静态分析，进行更好的压缩、减少依赖等。</li><li>循环依赖的处理方式不同：ES6模块支持循环依赖，但是需要注意处理方式；而CommonJS模块则会出现死锁的问题，因为每个模块都会在运行时进行加载和执行。</li></ol><h3 id="ajax、axios、fetch的区别" tabindex="-1">ajax、axios、fetch的区别 <a class="header-anchor" href="#ajax、axios、fetch的区别" aria-label="Permalink to &quot;ajax、axios、fetch的区别&quot;">​</a></h3><p><strong>XMLHttpRequest</strong> (XHR) 是一种用于网络请求的标准 API，它有以下优点和缺点：</p><p>优点：</p><ol><li><strong>支持同步和异步请求</strong>：XHR 可以进行同步和异步请求，具有一定的灵活性。</li><li>可以<strong>设置请求头和请求体</strong>：XHR 可以设置请求头和请求体，使得请求可以携带更多的信息。</li><li>可以<strong>监测上传和下载进度</strong>：XHR 可以监测文件上传和下载的进度，使得用户体验更佳。</li><li><strong>跨域请求支持</strong>：XHR 支持跨域请求，可以实现跨域数据获取和资源共享。</li></ol><p>缺点：</p><ol><li>处理复杂请求时<strong>代码复杂度高</strong>：当请求比较复杂或需要发送多个请求时，需要编写大量的代码，代码复杂度较高。</li><li>代码可读性较差：XHR 回调函数嵌套较多，代码可读性较差。</li><li>不支持 Promise：XHR 不支持 Promise 处理异步操作。</li></ol><p><strong>Fetch</strong> 一种用于网络请求的新的浏览器标准 API。fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。</p><p>优点：</p><ol><li><strong>链式调用</strong>：Fetch API 提供了链式调用的方式，使得代码可读性更好，更易于维护。</li><li><strong>支持 Promise</strong>：Fetch API 使用 Promise 处理异步操作，避免了回调地狱的问题，使得代码逻辑更加清晰。</li><li><strong>语法简单</strong>：Fetch API 语法简单，易于使用，且与现代 JavaScript 的标准语法更为一致。</li><li><strong>自动解析 JSON</strong>：Fetch API 可以自动解析 JSON 格式的数据，无需手动解析。</li></ol><p>缺点：</p><ol><li><strong>不支持同步请求</strong>：Fetch API 只支持异步请求，无法进行同步请求。</li><li><strong>可能存在兼容性问题</strong>：尽管 Fetch API 的浏览器支持性很好，但是在某些旧版本浏览器中可能存在兼容性问题。</li><li><strong>不支持超时设置</strong>：Fetch API 没有提供内置的超时处理机制，需要手动编写超时代码。</li><li><strong>无法监测上传进度</strong>：Fetch API 无法监测文件上传的进度。</li><li><strong>CSRF 攻击</strong>：在 Fetch API 中，需要手动处理 CSRF（跨站请求伪造）攻击的问题，增加了开发难度。</li></ol><p><strong>（3）Axios</strong> Axios 是一种基于Promise封装的HTTP客户端，其特点如下：</p><ul><li>浏览器端发起XMLHttpRequests请求</li><li>node端发起http请求</li><li>支持Promise API</li><li>监听请求和返回</li><li>对请求和返回进行转化</li><li>取消请求</li><li>自动转换json数据</li><li>客户端支持抵御XSRF攻击</li></ul><h3 id="map和object的区别" tabindex="-1">map和Object的区别 <a class="header-anchor" href="#map和object的区别" aria-label="Permalink to &quot;map和Object的区别&quot;">​</a></h3><ol><li>键的类型：<code>Object</code>的键必须是字符串或者Symbol，而<code>Map</code>的键可以是任意类型，包括函数、对象、原始类型等。</li><li>大小的获取：<code>Object</code>没有提供直接获取键值对数量的方法，需要手动遍历对象；而<code>Map</code>提供了<code>size</code>属性可以直接获取键值对的数量。</li><li>迭代：<code>Object</code>可以使用<code>for-in</code>、<code>Object.keys()</code>等方式迭代对象的键值对；而<code>Map</code>提供了多种迭代方式，如<code>forEach</code>、<code>for-of</code>等。</li><li>性能：在存储大量数据时，<code>Map</code>相对于<code>Object</code>具有更快的插入、查找和删除速度。</li><li>内存消耗：相比于<code>Object</code>，<code>Map</code>占用更多的内存空间。</li></ol><h3 id="map-和-weakmap-区别" tabindex="-1">map 和 weakMap 区别 <a class="header-anchor" href="#map-和-weakmap-区别" aria-label="Permalink to &quot;map 和 weakMap 区别&quot;">​</a></h3><ol><li>键的类型：<code>Map</code>的键可以是任意类型，包括函数、对象、原始类型等；而<code>WeakMap</code>的键只能是对象。</li><li>引用关系：<code>Map</code>中的键值对对于垃圾回收是可达的，即只要<code>Map</code>对象存在，其中的键值对就会一直存在；而<code>WeakMap</code>中的键值对只对其键是强引用关系，即如果键不再被引用，键值对会被自动清除，从而释放内存。</li><li>大小的获取：<code>Map</code>提供了<code>size</code>属性可以直接获取键值对的数量，而<code>WeakMap</code>没有提供获取大小的方法。</li><li>迭代：<code>Map</code>提供了多种迭代方式，如<code>forEach</code>、<code>for-of</code>等；而<code>WeakMap</code>没有提供直接迭代其内部键值对的方法。</li><li>方法：<code>Map</code>提供了一些操作方法，如<code>set</code>、<code>get</code>、<code>delete</code>、<code>has</code>等；而<code>WeakMap</code>只提供了<code>set</code>、<code>get</code>、<code>delete</code>等最基本的操作方法。</li></ol><h3 id="map-和-set-区别" tabindex="-1">map 和 set 区别 <a class="header-anchor" href="#map-和-set-区别" aria-label="Permalink to &quot;map 和 set 区别&quot;">​</a></h3><ol><li>存储方式：<code>Map</code>存储键值对，每个键都只能出现一次；而<code>Set</code>存储唯一的值，每个值只能出现一次。</li><li>键和值：在<code>Map</code>中，键和值可以是任意类型的数据，可以是基本数据类型、对象、甚至是函数等；而在<code>Set</code>中，值只能是JavaScript中的任意数据类型。</li><li>遍历方式：<code>Map</code>和<code>Set</code>都可以使用<code>for-of</code>循环进行遍历，但是遍历顺序不同。在<code>Map</code>中，遍历顺序是插入顺序；而在<code>Set</code>中，遍历顺序就是插入顺序。</li><li>方法：<code>Map</code>提供了一系列操作方法，如<code>set</code>、<code>get</code>、<code>has</code>、<code>delete</code>等；而<code>Set</code>也提供了类似的方法，如<code>add</code>、<code>has</code>、<code>delete</code>等。</li></ol><p>XML httpRequest 和 fetch 区别</p><h2 id="实战篇" tabindex="-1">实战篇 <a class="header-anchor" href="#实战篇" aria-label="Permalink to &quot;实战篇&quot;">​</a></h2><p>手写 Promise</p><p>手写 Promise.all</p><p>手写 深浅拷贝</p><p>如何切片并传输</p><h3 id="断点上传怎么做" tabindex="-1">断点上传怎么做 <a class="header-anchor" href="#断点上传怎么做" aria-label="Permalink to &quot;断点上传怎么做&quot;">​</a></h3><ol><li>断点续传如何保证文件一致？</li><li>串行断点续传有什么意义？如何并行传输</li><li>tcp 的最大并行限制，并行场景下如何断点续传？</li><li>超大文件怎么办？</li></ol><p>断点上传是指在上传文件时，将文件分割成多个小块进行上传，若某个小块上传失败，则只需重新上传该小块而不是整个文件。这种方式可以有效地提高文件上传的效率和稳定性。</p><ol><li>**保证文件一致性的关键在于每个小块的上传和校验。**每个小块上传完成后需要进行校验，确保上传成功，否则需要重新上传该小块。另外，在所有小块上传完成后还需要进行整个文件的校验，确保上传的所有小块拼接后能够得到完整的文件。</li><li><strong>串行断点续传</strong>可以保证上传的正确性，但是效率较低。并行传输可以提高上传效率，但需要注意并发请求的数量不能超过服务器的最大并发限制，否则会影响上传的速度和稳定性。可以采用线程池等方式来管理并发请求，避免同时上传过多的小块导致服务器拒绝服务。</li><li><strong>TCP协议的最大并行限制</strong>是由操作系统和硬件决定的，一般情况下为数千个连接。在并行上传场景下，可以采用多线程或多进程的方式来提高上传效率，同时需要注意避免同时上传过多的小块导致服务器拒绝服务。</li><li><strong>对于超大文件</strong>，可以将文件分割成更小的块进行上传，同时采用多线程或多进程的方式来提高上传效率。此外，可以使用分布式存储技术，将文件分布到多个服务器上，从而进一步提高上传速度和稳定性。</li></ol><p><strong>校验文件</strong></p><p>为了验证断点上传是否保证文件一致，可以在上传时，对文件进行哈希计算，并记录哈希值。上传完成后，再次计算哈希值，如果两个哈希值一致，则说明文件在上传过程中没有被篡改。</p><p><strong>利用线程池管理并发请求</strong></p><p>为了管理并发请求，可以利用线程池来限制并发请求数量。线程池是一种预先创建的线程集合，可用于执行一系列任务。在 Node.js 中，可以使用 <code>worker_threads</code> 模块来创建线程池。</p><p>当需要发送并发请求时，可以将每个请求封装成一个任务，然后将所有任务添加到线程池中执行。线程池会自动管理线程的数量，并控制并发请求数量不超过指定的阈值。</p><p>在断点上传的并行场景中，需要对每个上传任务记录已经上传的字节数，以便在断点续传时从上次上传的位置继续上传。当并发请求数量超过 TCP 的最大并行限制时，可以通过设置请求的超时时间来避免网络阻塞。如果一个请求超时，则可以将其重新放回线程池，等待后续处理。</p><h2 id="搜集篇" tabindex="-1">搜集篇 <a class="header-anchor" href="#搜集篇" aria-label="Permalink to &quot;搜集篇&quot;">​</a></h2><p>axios 并发执行多个请求的时候如何取消之前的请求</p><p>xss 和 csrf</p><p>token 无痕刷新</p><p>防止按钮重复提交怎么做，防抖节流的原理、除了防抖节流还能怎么做</p><p>setInterval 底层原理，有什么问题</p><p>promise 内部运行逻辑</p><p>promise then 方法的回调函数里，在 promise 最外层加个 try catch，能捕获到这个异常吗</p>',125),r=[l];function c(s,p,n,d,h,g){return t(),o("div",null,r)}const b=e(i,[["render",c]]);export{u as __pageData,b as default};
