<template><div><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h2>
<p>连android studio, logcat选游戏键盘的包，发现报错。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Unexpected null in startExtractingText : mExtractedText = null, input connection = InputConnectionWrapper{idHash=#721e24 mMissingMethods=}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>emmm找了很多资料，甚至自己抄了一个输入法，后来发现这个报错貌似不解决也没什么关系。<br>
看了下游戏键盘的dex（居然还有混淆），调出输入法有两个showsoftinputfrommethod 和 showSoftInput，给这两个方法里加个log，发现用的是前者。然后as里调用这个方法，发现在安卓9之后被废弃了，建议用requestshowself。<br>
于是用了这个，就解决了。。。<br>
那个Unexpected null的报错还在。</p>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>
<p>解决前：<br>
<img src="@source/blogs/2022/autumn/gamekeyboardOnAndroid12/res/1.gif" alt="图1"></p>
<p>解决后<br>
<img src="@source/blogs/2022/autumn/gamekeyboardOnAndroid12/res/2.gif" alt="图2"></p>
<p>视频及修复后的apk下载地址：
<a href="https://www.bilibili.com/video/BV1TN4y1F7Pi" target="_blank" rel="noopener noreferrer">解决exagear 安卓12 无法调出键盘<ExternalLinkIcon/></a></p>
</div></template>
