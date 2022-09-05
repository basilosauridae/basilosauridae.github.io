<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>canvas操作需要新建一个画布，然后在js中获取context进行绘制。
canvas的使用方法主要参考的教程是mdn上的
https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D 。
前端框架用的vue3。</p>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>
<p>在html中添加画布,js通过ref获取画布实例，获取context进行绘制。canvas必须要指定width和height属性。<br>
js通过ref获取实例，<code v-pre>ref&lt;HTMLCanvasElement&gt;()</code>是typescript的写法，规定传入的是HTMLCanvasElement，方便之后调用此接口的属性和方法。使用nextTick防止还有html元素没加载完。getContext('2d')获取context，用fillRect填充一个矩形，先提前指定填充样式为黑色。</p>
<CodeGroup>
<CodeGroupItem title="html">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span> <span class="token property">border-width</span><span class="token punctuation">:</span> 1px</span><span class="token punctuation">"</span></span></span>
    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvasRef<span class="token punctuation">"</span></span>
    <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    浏览器不支持canvas
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>nextTick<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> canvasRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLCanvasElement<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ctx <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>fillStyle<span class="token operator">=</span><span class="token string">'black'</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>效果如下图<br>
<img src="@source/blogs/2022/summer/batchCover/1.png" alt="图1"></p>
<h2 id="填充与描边" tabindex="-1"><a class="header-anchor" href="#填充与描边" aria-hidden="true">#</a> 填充与描边</h2>
<h3 id="填充" tabindex="-1"><a class="header-anchor" href="#填充" aria-hidden="true">#</a> 填充</h3>
<p>填充是跟fill相关的</p>
<ul>
<li>
<p>fillRect()就是填充绘制一个矩形。</p>
</li>
<li>
<p>fillText()是填充绘制文字。可以设置对齐方式和基线。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">text</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> CanvasRenderingContext2D</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"bold 30px HarmonyOS Sans SC"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>textAlign<span class="token operator">=</span><span class="token string">'end'</span>
ctx<span class="token punctuation">.</span>textBaseline<span class="token operator">=</span><span class="token string">'hanging'</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"#234554"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"文本1"</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下图
<img src="@source/blogs/2022/summer/batchCover/3.png" alt="图3"></p>
</li>
<li>
<p>fill()是填充当前画布中全部路径构成的形状，如果路径未封闭那么先将其封闭。<br>
由于fill()会首先自动调用closePath()连接当前所有未闭合的路径，可能导致意外的结果，如下图，<br>
<img src="@source/blogs/2022/summer/batchCover/2.png" alt="图2">
绘制一个圆形并填充为蓝色，但是由于之前绘制的黑色路径未封闭，所以折线与圆形连到了一起。解决方法是先调用一次beginPath()清空当前子路径列表。</p>
</li>
<li>
<p>fillStyle，在填充前设置，填充的样式，可以是颜色，也可以是渐变等属性。下图为填充矩形为黑色的渐变透明。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">gradientRect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> CanvasRenderingContext2D</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token keyword">let</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"black"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"#00000000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/2022/summer/batchCover/4.png" alt="图4"></p>
</li>
</ul>
<h3 id="描边" tabindex="-1"><a class="header-anchor" href="#描边" aria-hidden="true">#</a> 描边</h3>
<p>描边是和stroke相关的.</p>
<ul>
<li>strokeRect为画一个矩形的边框。</li>
<li>strokeText为绘制文本的边框，但是为文字描边还是有点勉强，文字描边不如直接在底层偏移一下，多fill几次，这样能在保证文字原有粗细的情况下自由调节边框宽度，效果如下图。<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"bold 30px HarmonyOS Sans SC"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">;</span>
    <span class="token function">drawTextBorder</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">"文本1"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"文本1"</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//绘制边框</span>
<span class="token keyword">const</span> <span class="token function-variable function">drawTextBorder</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">,</span>
    <span class="token literal-property property">str</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> number</span>
    <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"aqua"</span><span class="token punctuation">;</span>

    <span class="token comment">//移动填充吧</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> offx <span class="token operator">=</span> <span class="token operator">-</span>size<span class="token punctuation">;</span> offx <span class="token operator">&lt;=</span> size<span class="token punctuation">;</span> offx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> offy <span class="token operator">=</span> <span class="token operator">-</span>size<span class="token punctuation">;</span> offy <span class="token operator">&lt;=</span> size<span class="token punctuation">;</span> offy<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> x <span class="token operator">+</span> offx<span class="token punctuation">,</span> y <span class="token operator">+</span> offy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/blogs/2022/summer/batchCover/5.png" alt="图5"></li>
<li>strokeStyle与fill的同理。</li>
<li>stroke 如果使用路径绘制，只有在最后调用stroke() 路径才会被绘制出来</li>
</ul>
<h2 id="绘制图片" tabindex="-1"><a class="header-anchor" href="#绘制图片" aria-hidden="true">#</a> 绘制图片</h2>
<p>可以使用<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData" target="_blank" rel="noopener noreferrer">imagedata<ExternalLinkIcon/></a>，rgba数组的形式，也可以用html的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image" target="_blank" rel="noopener noreferrer">Image<ExternalLinkIcon/></a>引入现有图片。这里对Image的使用进行简单介绍。</p>
<p>Image就是html img标签的js形式，用法参考img标签就行，主要设置src图片地址，可能要考虑跨域等问题。</p>
<h3 id="获取本地上传图片" tabindex="-1"><a class="header-anchor" href="#获取本地上传图片" aria-hidden="true">#</a> 获取本地上传图片</h3>
<ul>
<li>上传图片用到了element-plus的el-upload组件。上传图片后，通过<code v-pre>URL.createObjectURL()</code>获取url。<CodeGroup>
<CodeGroupItem title="html">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-upload</span> <span class="token attr-name">:before-upload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleMainImgUpload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">></span></span>选择封面图<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-upload</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mainImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">handleMainImgUpload</span><span class="token operator">:</span> UploadProps<span class="token punctuation">[</span><span class="token string">"beforeUpload"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
mainImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
</li>
</ul>
<h3 id="引用外部地址图片" tabindex="-1"><a class="header-anchor" href="#引用外部地址图片" aria-hidden="true">#</a> 引用外部地址图片</h3>
<ul>
<li>我的需求是引用b站视频的封面。首先要调用api获取视频相关的信息，因为axois没法发送跨域请求，iframe也没法跨域获取其中内容，所以使用jsonp，安装第三方依赖vue-jsonp,在发送的请求后加上参数<code v-pre>{jsonp:jsonp'}</code>就行了。</li>
<li>获取到封面地址后，和本地图片一样，将地址赋值给subImg.src。这样浏览器会自动发送请求获取图片，</li>
<li>外部链接存在跨域问题，导致请求回复403。可以通过设置图片请求不携带referrer解决：<code v-pre>subImg.referrerPolicy = &quot;no-referrer&quot;;</code>。</li>
<li>绘制到画布上，在画布将其内容导出为png图片时还会遇到跨域问题而无法导出，通过设置crossOrigin解决<code v-pre>subImg.crossOrigin = &quot;Anonymous&quot;;</code>。<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> subImg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    subImg<span class="token punctuation">.</span>referrerPolicy <span class="token operator">=</span> <span class="token string">"no-referrer"</span><span class="token punctuation">;</span>
    subImg<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">"Anonymous"</span><span class="token punctuation">;</span> 
    subImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> String</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token string">"xxxxx"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">jsonp</span><span class="token operator">:</span> <span class="token string">"jsonp"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        subImg<span class="token punctuation">.</span>src <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>cover<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="将图片绘制到画布上" tabindex="-1"><a class="header-anchor" href="#将图片绘制到画布上" aria-hidden="true">#</a> 将图片绘制到画布上</h3>
<p>绘制图片使用ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);<br>
设置图片的src后，图片加载完需要一定时间，所以需要等待图片加载完后再进行绘制。应在img.onload中调用drawImage()</p>
<ul>
<li>image-图像资源，即上面获取到的本地或外部图片</li>
<li>sx，sy，sWidth，sHeight-用于裁切图片，分别是裁切起点和裁切宽高，sx和sy可以是负数，相当于图片左侧和上方有透明区域。</li>
<li>dx，dy，dWidth，dHeight是在裁切下来的图片在画布上绘制的起点和宽高，dx，dy同样可以为负，dWidth，dHeight为负则会翻转图像。dWidth和dHeight如果不等于裁切宽高，则会在将图片画布上进行缩放。</li>
<li>sWidth和sHeight是按图片未经dWidth，dHeight缩放时算的。如果我有一张超出画布尺寸的图片，想通过缩放修改其在画布上的尺寸并保证能填满画布，<strong>那么裁切宽高应该/缩放倍率,缩放宽高应该等于缩放后的宽高</strong>。比如图片原尺寸1920*1080，我想裁切一块，并且将裁切的这块宽高*0.5后绘制到画布上，要求绘制到画布上的宽高均为100，那么我需要设置sWidth,sHeight为200，dWidth，dHeight为100。如图所示。<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handleMainImgUpload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">file</span><span class="token operator">:</span> File</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    mainImg<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ctx <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mainImg<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>mainImg<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>mainImg<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/blogs/2022/summer/batchCover/6.png" alt="图6"></li>
</ul>
<h3 id="将图片裁切至任意形状" tabindex="-1"><a class="header-anchor" href="#将图片裁切至任意形状" aria-hidden="true">#</a> 将图片裁切至任意形状</h3>
<p>我们经常需要对图片进行裁切，使用drawImage裁切图片只能裁切矩形而且计算起来很麻烦，所以使用<code v-pre>globalCompositeOperation</code>或<code v-pre>clip()</code>来进行自定义裁切。
参考教程：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing</p>
<h4 id="使用图片叠加选项-globalcompositeoperation" tabindex="-1"><a class="header-anchor" href="#使用图片叠加选项-globalcompositeoperation" aria-hidden="true">#</a> 使用图片叠加选项 globalCompositeOperation</h4>
<p>设置canvas全局的组合选项为source-atop，让新图片仅绘制在当前画布存在图案的区域。</p>
<ol>
<li>用fillRect()填满画布，使用path绘制需要的形状（比如圆角矩形）并填充，设置叠加选项为用source-in，画布内容只留下path填充的形状，其余为透明。</li>
<li>设置叠加选项为source-atop, 绘制图片，图片只会绘制在形状内部。如下图<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">drawRadiusRect</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-atop"</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>mainImg<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-over"</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">drawRadiusRect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">,</span> <span class="token literal-property property">stroke</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token number">70</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">400</span> <span class="token operator">+</span> radius<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">400</span> <span class="token operator">+</span> radius<span class="token punctuation">,</span>radius<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//画曲线，第一个坐标是直角的坐标，第二个是目标位置</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span> <span class="token operator">+</span> radius<span class="token punctuation">,</span> <span class="token number">800</span> <span class="token operator">-</span> radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span><span class="token number">400</span> <span class="token operator">+</span> radius<span class="token punctuation">,</span><span class="token number">800</span><span class="token punctuation">,</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-over"</span><span class="token punctuation">;</span>

    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span>fullWidth<span class="token punctuation">,</span> m<span class="token punctuation">.</span>fullHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-in"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">"source-over"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/blogs/2022/summer/batchCover/7.png" alt="图7"></li>
</ol>
<h4 id="使用路径裁切-clip" tabindex="-1"><a class="header-anchor" href="#使用路径裁切-clip" aria-hidden="true">#</a> 使用路径裁切 clip()</h4>
<p>clip一次只能设置一个区域，如果要裁切多个区域，需要先save()保存当前画布状态，clip完再restore()恢复原始状态。</p>
<ul>
<li>可以参考上面的mdn教程。</li>
</ul>
<h3 id="按顺序绘制多张图片" tabindex="-1"><a class="header-anchor" href="#按顺序绘制多张图片" aria-hidden="true">#</a> 按顺序绘制多张图片</h3>
<ul>
<li>有时图片需要按顺序绘制，那么使用promise即可</li>
</ul>
<h2 id="绘制路径" tabindex="-1"><a class="header-anchor" href="#绘制路径" aria-hidden="true">#</a> 绘制路径</h2>
<p>具体教程可以参考文章开头的mdn教程</p>
<ol>
<li>beginPath() 清空当前子路径列表，并开始新的绘制</li>
<li>moveTo() 准备在哪个坐标开始画</li>
<li>lineTo() 画直线，从当前坐标到哪个坐标</li>
<li>quadraticCurveTo() 画曲线</li>
<li>closePath() 闭合当前全部路径</li>
<li>fill()/stroke() 将绘制路径填充/描边，只有调用此方法后，画布上才会真正显示图形</li>
</ol>
<h2 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影" aria-hidden="true">#</a> 阴影</h2>
<p>canvas可以为绘制的图片或路径添加阴影，仅当shadowColor不为全透明时生效。可以设置的属性有shadowBlur，shadowColor，shadowOffsetX。shadowOffsetY。如下图<br>
<img src="@source/blogs/2022/summer/batchCover/8.png" alt="图8"></p>
<h2 id="保存和恢复当前状态" tabindex="-1"><a class="header-anchor" href="#保存和恢复当前状态" aria-hidden="true">#</a> 保存和恢复当前状态</h2>
<p>使用save()和restore()来保存当前的一些样式设置，样式已经设置会全局有效，所以在绘制一些图案时如果修改了样式，可能导致之后的绘制出错，此时可以在自定义绘制前调用save()保存原始状态，绘制后调用restore()恢复原始状态。如图，由于在其他函数里更改了fillStyle，导致想绘制的黑色矩形变为了蓝色。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> ctx <span class="token operator">=</span> canvasRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ctx<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    
    <span class="token comment">//想绘制一个黑色矩形</span>
    ctx<span class="token punctuation">.</span>fillStyle<span class="token operator">=</span><span class="token string">'black'</span>
    <span class="token comment">//但是先做了一些其他操作</span>
    <span class="token function">someOption</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">someOption</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> CanvasRenderingContext2D</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// ctx.save()</span>
    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">'blue'</span>
    ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">)</span>
    <span class="token comment">// ctx.restore()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/2022/summer/batchCover/9.png" alt="图9"></p>
<!-- <batchCover-example /> --></div></template>
