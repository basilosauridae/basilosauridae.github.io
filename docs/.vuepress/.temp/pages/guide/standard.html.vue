<template><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<p>::: info
这是一个提示
:::</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<!-- 代码组的写法 -->
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//代码块1;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//代码块2;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<!-- 单行代码写法 -->
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>//这是一个命令行
<span class="token function">npm</span> run dev
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://www.bilibili.com/video/BV1As411R7e3?from=search&amp;seid=8836255303393949866" target="_blank" rel="noopener noreferrer">链接语法<ExternalLinkIcon/></a></p>
</template>
