import{_ as s,o as a,c as t,a as p,e,r as c}from"./app.667935cf.js";const o={},i=e(`<h3 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		Magic Card
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F69\u8272\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#\u5F69\u8272\u6587\u5B57" aria-hidden="true">#</a> \u5F69\u8272\u6587\u5B57</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">span</span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">repeating-conic-gradient</span><span class="token punctuation">(</span>#5D67E8 10deg<span class="token punctuation">,</span>#ef4444 20deg<span class="token punctuation">,</span>#fff 55deg<span class="token punctuation">)</span><span class="token punctuation">;</span> 
	<span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span> 
	<span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span> 
	<span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F69\u8272\u81EA\u52A8\u65CB\u8F6C\u5361\u7247" tabindex="-1"><a class="header-anchor" href="#\u5F69\u8272\u81EA\u52A8\u65CB\u8F6C\u5361\u7247" aria-hidden="true">#</a> \u5F69\u8272\u81EA\u52A8\u65CB\u8F6C\u5361\u7247</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.bg</span><span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ada2a2<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.8rem<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.rainbow </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
  <span class="token property">--border-size</span><span class="token punctuation">:</span> 0.3rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--border-size<span class="token punctuation">)</span> dotted transparent<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
      to right<span class="token punctuation">,</span>
      <span class="token function">rgb</span><span class="token punctuation">(</span>255 255 255 <span class="token operator">/</span> <span class="token function">var</span><span class="token punctuation">(</span>--opacity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">rgb</span><span class="token punctuation">(</span>255 255 255 <span class="token operator">/</span> <span class="token function">var</span><span class="token punctuation">(</span>--opacity<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">conic-gradient</span><span class="token punctuation">(</span>
      <span class="token keyword">from</span> <span class="token function">var</span><span class="token punctuation">(</span>--angle<span class="token punctuation">)</span><span class="token punctuation">,</span>
      #d53e33 0deg 90deg<span class="token punctuation">,</span>
      #fbb300 90deg 180deg<span class="token punctuation">,</span>
      #377af5 180deg 270deg<span class="token punctuation">,</span>
      #399953 270deg 360deg
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">,</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Animate when Houdini is available */</span>
@supports <span class="token punctuation">(</span><span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">paint</span><span class="token punctuation">(</span>houdini<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@property</span> --opacity</span> <span class="token punctuation">{</span>
    <span class="token property">syntax</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;number&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">initial-value</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
    <span class="token property">inherits</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@property</span> --angle</span> <span class="token punctuation">{</span>
    <span class="token property">syntax</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;angle&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">initial-value</span><span class="token punctuation">:</span> 0deg<span class="token punctuation">;</span>
    <span class="token property">inherits</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> opacityChange</span> <span class="token punctuation">{</span>
    <span class="token selector">to </span><span class="token punctuation">{</span>
      <span class="token property">--opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span>
    <span class="token selector">to </span><span class="token punctuation">{</span>
      <span class="token property">--angle</span><span class="token punctuation">:</span> 360deg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.rainbow </span><span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotate 4s linear infinite<span class="token punctuation">,</span> opacityChange 3s infinite alternate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function l(u,r){const n=c("colorfulCard");return a(),t("div",null,[p(n),i])}var k=s(o,[["render",l],["__file","colorful.html.vue"]]);export{k as default};
