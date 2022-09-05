<template><div><h1 id="解决exagear内置容器-必须点开一次环境设置才能启动环境的问题" tabindex="-1"><a class="header-anchor" href="#解决exagear内置容器-必须点开一次环境设置才能启动环境的问题" aria-hidden="true">#</a> 解决exagear内置容器，必须点开一次环境设置才能启动环境的问题</h1>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>本文前半部分为原理，篇幅较长，可以略过，直接看<RouterLink to="/blogs/2022/summer/exagearInitContainer/#%E8%A7%A3%E5%86%B3%E5%AE%9E%E6%93%8D">解决实操</RouterLink>部分即可</p>
</div><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2>
<ul>
<li>为模拟器添加内置容器，即安装解压后，环境那一页会自动出现一个环境，可以用来制作自定义环境（比如很早之前有人就有人做过的三个内置环境分别对应三个d3d版本。但是这样做会有一个问题，就是直接点环境或者快捷方式启动会闪退，必须要进入一次环境设置（也不需要修改什么选项）。</li>
<li>点击添加环境手动创建的环境就没有这个问题。</li>
</ul>
<h2 id="出现原因" tabindex="-1"><a class="header-anchor" href="#出现原因" aria-hidden="true">#</a> 出现原因</h2>
<ul>
<li>推测是在点击创建环境的时，调用了某个函数，而内置环境无需操作所以没有触发这个函数。</li>
<li>经hostei吧主提示，有可能是缺配置文件<code v-pre>shared_prefs/com.eltechs.ed.CONTAINER_CONFIG_1.xml</code></li>
</ul>
<ol>
<li>先使用android studio查看debug状态下的报错。如图，screenInfo这个对象没有初始化，导致读取其属性的时候出错了。关键代码在StartGuest类中的413行，使用jadx反编译即可查看。
<img src="@source/blogs/2022/summer/exagearInitContainer/1.png" alt="图1"></li>
<li>进入jadx，找到其所属的函数为<code v-pre>private static String getWineOptions(ScreenInfo screenInfo, boolean z)</code>,说明这个screenInfo是外部传来的，再溯源到<code v-pre>public void execute()</code>，发现传入的screenInfo是自身的成员变量，往上翻几行，发现<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mScreenInfo <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mCont<span class="token punctuation">.</span>mConfig<span class="token punctuation">.</span><span class="token function">setScreenInfo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mScreenInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>mScreenInfo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mCont<span class="token punctuation">.</span>mConfig<span class="token punctuation">.</span><span class="token function">getScreenInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><code v-pre>getScreenInfo()</code>所属类为<code v-pre>com.eltechs.ed.guestContainers</code>，进入这个类查看，发现其成员变量有一个sharepreference，正如hostei吧主所说。类内部的函数<code v-pre>loadDefaults()</code>则在新建容器时被调用。（新建容器调用的方法为<code v-pre>com.eltechs.ed.guestContainers.GuestContainerConfig</code>类下的<code v-pre>createContainer()</code>）<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//新建容器时，创建sharePreference文件的函数</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loadDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"Container_"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mCont<span class="token punctuation">.</span>mId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setScreenInfoDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setLocaleName</span><span class="token punctuation">(</span><span class="token class-name">Locales</span><span class="token punctuation">.</span><span class="token function">getLocaleByDevice</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mContext<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setRunArguments</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setControls</span><span class="token punctuation">(</span><span class="token class-name">Controls</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setHideTaskbarOnShortcut</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setDefaultControlsNotShortcut</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setDefaultResolutionNotShortcut</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setStartupActions</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setRunGuide</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setRunGuideShown</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>对比sharePreference，发现<code v-pre>loadDefaults()</code>就是内置环境没有调用的函数。而<code v-pre>createContainer()</code>中调用它之后也没什么其他的操作了。所以推测闪退原因就是缺少sharePreference文件。<div class="language-XML ext-XML line-numbers-mode"><pre v-pre class="language-XML"><code>&lt;!-- SharePreference文件内部结构 --&gt;
&lt;?xml version='1.0' encoding='utf-8' standalone='yes' ?&gt;
&lt;map&gt;
    &lt;string name=&quot;SCREEN_SIZE&quot;&gt;1024,768&lt;/string&gt;
    &lt;string name=&quot;RUN_ARGUMENTS&quot;&gt;&lt;/string&gt;
    &lt;boolean name=&quot;DEFAULT_CONTROLS_NOT_SHORTCUT&quot; value=&quot;false&quot; /&gt;
    &lt;boolean name=&quot;DEFAULT_RESOLUTION_NOT_SHORTCUT&quot; value=&quot;false&quot; /&gt;
    &lt;string name=&quot;RUN_GUIDE&quot;&gt;&lt;/string&gt;
    &lt;string name=&quot;STARTUP_ACTIONS&quot;&gt;&lt;/string&gt;
    &lt;string name=&quot;CONTROLS&quot;&gt;yuhan&lt;/string&gt;
    &lt;string name=&quot;SCREEN_COLOR_DEPTH&quot;&gt;32&lt;/string&gt;
    &lt;string name=&quot;NAME&quot;&gt;预设容器&lt;/string&gt;
    &lt;boolean name=&quot;HIDE_TASKBAR_SHORTCUT&quot; value=&quot;false&quot; /&gt;
    &lt;boolean name=&quot;RUN_GUIDE_SHOWN&quot; value=&quot;false&quot; /&gt;
&lt;/map&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="解决原理" tabindex="-1"><a class="header-anchor" href="#解决原理" aria-hidden="true">#</a> 解决原理</h2>
<ul>
<li>
<p>缺失的函数为loadDefaults()，其作用为创建SharePreference文件，记录当前容器的设置信息，在创建容器时被调用。所以有两种解决方法:</p>
<ul>
<li>在初次启动时调用创建环境的代码，创建环境，这样函数就会被执行。</li>
<li>自己写一个sharePref</li>
</ul>
</li>
<li>
<p>这里选择后者。又有两种选择：</p>
<ul>
<li>在代码中调用原生方法写入sharepref，</li>
<li>也可以提前写好xml文件放入apk，然后再代码中移动文件到对应目录。</li>
</ul>
</li>
<li>
<p><s>我这里选择前者。其实感觉后者更方便修改一点，因为有时候需要自定义按键和分辨率。</s> 已经换成后者了。想看前者的解决方案请点<a href="./detailed">这里</a>。</p>
</li>
</ul>
<ol>
<li>
<p>整体思路</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">整体思路</p><ul>
<li>编写java代码，测试通过后再转为smali，加入dex中</li>
<li>新建一个类，其包含一个静态方法用于移动sharePref文件，从apk中移动到对应目录，需要传入参数context。</li>
<li>在exagear主Activity里调用该方法，确保程序启动时即可执行。</li>
<li>为什么要在Activity中，而不是随便一个类中调用？因为要获取SharePref文件，所以需要用到context，而context需要从activity中获得。</li>
</ul>
</div></li>
<li>
<p>使用AndroidStudio编写代码，创建类ExagearPrefs。添加setSP方法，通过传入的context，获取apk内assets/containerConfig目录下的全部sharePref文件，并将其移动到应用能识别的位置/包名/shared_prefs目录下。</p>
<details class="custom-container details"><summary class="custom-container-title">点击查看代码</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSP</span><span class="token punctuation">(</span><span class="token class-name">Context</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> configs <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token string">"containerConfig"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>configs<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string">"没有环境配置文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建share_prefs文件夹</span>
        <span class="token class-name">File</span> dir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">getApplicationInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dataDir <span class="token operator">+</span> <span class="token string">"/shared_prefs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">boolean</span> b <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">assert</span> b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">;</span>
        <span class="token comment">//将文件写入到存档路径中</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> datName <span class="token operator">:</span> configs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">i</span><span class="token punctuation">(</span><span class="token string">"getAssets().list"</span><span class="token punctuation">,</span> datName<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">InputStream</span> is <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">getAssets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token string">"containerConfig/"</span> <span class="token operator">+</span> datName<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//源文件输入流</span>
            <span class="token class-name">File</span> newFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"/"</span> <span class="token operator">+</span> datName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建新文件</span>

            <span class="token comment">//如果没有，创建该文件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>newFile<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>newFile<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">//新文件输出流</span>
                <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">4096</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> is<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//Log.i("dataDirectory",getFilesDir().getAbsolutePath()); ///data/user/0/com.example.datainsert/files</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"ExagearPrefs"</span><span class="token punctuation">,</span> <span class="token string">"setSP: 现在的sp文件夹："</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Log</span><span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span><span class="token string">"Exagear"</span><span class="token punctuation">,</span> <span class="token string">"setSP: 出错："</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li>
<li>
<p>获取xml并放入apk。<br>
获取xml：从<code v-pre>/data/data/包名/shared_prefs</code>目录下获取容器设置xml。命名格式应为<code v-pre>包名.CONTAINER_CONFIG_序号.xml</code>。包名一般对应模拟器包名，序号从1开始。<br>
放入apk：路径为/apk/assets/containerConfig/xxx.xml。可以参考gif演示或<a href="/vids/exagearInitContainer/1.mp4">视频演示</a>：<br>
<img src="@source/blogs/2022/summer/exagearInitContainer/6.gif" alt="演示"></p>
</li>
</ol>
 <!-- <video src="/vids/exagearInitContainer/1.mp4" height="300" controls="controls">
 </video> -->
<ol start="4">
<li>
<p>在主Activity中调用：<code v-pre>ExagearPrefs.setSP(getApplicationContext());</code>。</p>
</li>
<li>
<p>构建项目并在虚拟机中运行，发现可以正常创建SharePref文件。<br>
<img src="@source/blogs/2022/summer/exagearInitContainer/2.png" alt="图2"></p>
</li>
<li>
<p>使用插件将java转为smali，并导入exagear的dex。<br>
ExagearPrefs类的导入：进入mt管理器的dex编辑器++，在浏览界面随便长按一个路径然后点击导入，选择smali文件导入。<br>
<img src="@source/blogs/2022/summer/exagearInitContainer/3.png" alt="图3"></p>
</li>
<li>
<p>调用ExagearPrefs代码的导入：将MainActivity也转为smali，找到调用ExgearPrefs的那一行代码。
<strong>注意这个代码不能直接用。第一行代码为获取<code v-pre>Lcom/example/datainsert/MainActivity</code>的Context，而在Exagear中应该获取它自己的某个Activity的context，所以我们现在需要将<code v-pre>Lcom/example/datainsert/MainActivity</code>修改为Exagear某个类的路径，然后放入这个类的OnCreate方法中（Activity生命周期从OnCreate开始）。要求为：必须是Activity，而且在Exagear启动时越早被调用越好。</strong></p>
<div class="language-smali ext-smali line-numbers-mode"><pre v-pre class="language-smali"><code><span class="token comment">#主Activity中调用函数的代码</span>
invoke-virtual <span class="token punctuation">{</span><span class="token register variable">p0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>example<span class="token punctuation">/</span>datainsert<span class="token punctuation">/</span></span><span class="token class-name">MainActivity</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>

move-result-object <span class="token register variable">v1</span>

invoke-static <span class="token punctuation">{</span><span class="token register variable">v1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>example<span class="token punctuation">/</span>datainsert<span class="token punctuation">/</span></span><span class="token class-name">ExagearPrefs</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">setSP</span><span class="token punctuation">(</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token builtin">V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>寻找我们需要的Activity的方法：（以暗黑直装版为例）打开mt管理器左侧栏-Activity记录，然后启动Exagear，发现第一个启动的类为EDStartupActivity，决定就是它了。所以将第一行的代码对应类名改为Lcom/eltechs/ed/activities/EDStartUpActivity，然后放入EDStartUpActivity的initialiseStartupActions()方法的结尾（恩这个类里没有OnCreate，观察它仅有的几个函数就这个最像初始化函数了）</p>
<div class="language-smali ext-smali line-numbers-mode"><pre v-pre class="language-smali"><code><span class="token comment">#放入EDStartupActivity中initialiseStartupActions()结尾的代码</span>
invoke-virtual <span class="token punctuation">{</span><span class="token register variable">p0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>eltechs<span class="token punctuation">/</span>ed<span class="token punctuation">/</span>activities<span class="token punctuation">/</span></span><span class="token class-name">EDStartupActivity</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>

move-result-object <span class="token register variable">v1</span>

invoke-static <span class="token punctuation">{</span><span class="token register variable">v1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>example<span class="token punctuation">/</span>datainsert<span class="token punctuation">/</span></span><span class="token class-name">ExagearPrefs</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">setSP</span><span class="token punctuation">(</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token builtin">V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/2022/summer/exagearInitContainer/4.png" alt="图4"></p>
</li>
<li>
<p>将xml也放入模拟器apk，重新编译dex，apk签名并重装，打开测试，发现不用点开设置也能启动内置环境了，成功。</p>
</li>
</ol>
<h2 id="解决实操" tabindex="-1"><a class="header-anchor" href="#解决实操" aria-hidden="true">#</a> 解决实操</h2>
<p>本节和 解决原理 后半部分大致相同，省略了解释原理的部分。</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">整体思路</p><ol>
<li>在apk文件的/assets/containerConfig/目录下，放入内置容器的设置文件（xml格式）。只要模拟器能读取到这个文件，初次启动就不会闪退。</li>
<li>自己写一个函数，用于将apk里的容器设置信息xml文件移动到对应位置以供模拟器识别。直接用我写好的函数即可：<a href="https://pan.baidu.com/s/1mDveJsMRVcKkRh9YlfUt8g?pwd=eppn" target="_blank" rel="noopener noreferrer">传送门<ExternalLinkIcon/></a></li>
<li>在主Activity中调用这个函数</li>
</ol>
<ul>
<li>后两条需要修改dex。</li>
</ul>
</div><ol>
<li>
<p>将xml文件放入apk</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>如果xml放入apk后没有被移动到对应位置，请仔细检查xml的名字、在apk中路径是否正确</p>
</div><ul>
<li>获取xml<br>
这里提供一份来自j改fix39的xml<a href="">传送门</a>，但是可能不通用。<br>
<strong>更好的方法</strong>是从<code v-pre>/data/data/包名/shared_prefs/</code>目录下提取一份你的模拟器版本对应的xml，此目录需要root，可借助VMOS等工具，这里不过多介绍。</li>
<li>将提取出的xml移入apk。参考gif演示或<a href="/vids/exagearInitContainer/1.mp4">视频演示</a>：<br>
<img src="@source/blogs/2022/summer/exagearInitContainer/6.gif" alt="演示"></li>
</ul>
<p>需要注意的有：</p>
<ul>
<li>在apk中存放路径：<code v-pre>apk/assets/containerConfig/xxx.xml</code>。</li>
<li>文件名<br>
不同包名的模拟器，xml文件名也不同。因此建议从<code v-pre>/data/data/包名/shared_prefs/</code>目录下直接提取现有xml，或者在dex中搜索<code v-pre>CONTAINER_CONFIG_FILE_KEY_PREFIX</code>查看对应值。</li>
<li>文件个数<br>
如果内置多个环境，那么应该创建多个xml放入containerConfig中，并且文件命名*CONFIG_2.xml、*CONFIG_3.xml...</li>
<li>文件内容<br>
不同版本的模拟器，xml中的内容可能会有不同，应以实际情况为准。</li>
</ul>
</li>
<li>
<p>打开mt管理器的dex编辑器++，在浏览界面长按任意路径，导入<a href="https://pan.baidu.com/s/1mDveJsMRVcKkRh9YlfUt8g?pwd=eppn" target="_blank" rel="noopener noreferrer">ExagearPrefs.smali<ExternalLinkIcon/></a>。该smali包含移动xml文件的函数。</p>
</li>
<li>
<p>使用mt管理器左侧栏的activity记录功能，查看Exagear启动时调用的Activity名字。以图中为例，第一个调用的为<code v-pre>com.eltechs.ed.activities.EDStartupActivity</code>，第二个调用的为<code v-pre>com.eltechs.ed.activities.EDMainActivity</code>。这里采用第一个。<br>
<img src="@source/blogs/2022/summer/exagearInitContainer/4.png" alt="图4"></p>
</li>
<li>
<p>将下面三行代码添加到刚才找到的Activity的<code v-pre>OnCreate</code>方法的末尾处。</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">注意事项</p><ul>
<li>注意第一行代码中的<code v-pre>com/eltechs/ed/activities/EDStartupActivity</code>改成刚才找到的Activity名字，点.换成斜线/。</li>
<li>尽量放在OnCreate方法的末尾，因为放中间可能会无意中篡改了v1寄存器的值。</li>
<li>我找的这个EDStartupActivity没有<code v-pre>OnCreate</code>，只有一个<code v-pre>initialiseStartupActions</code>，把它当OnCreate就行。</li>
</ul>
</div><div class="language-smali ext-smali line-numbers-mode"><pre v-pre class="language-smali"><code>invoke-virtual <span class="token punctuation">{</span><span class="token register variable">p0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>eltechs<span class="token punctuation">/</span>ed<span class="token punctuation">/</span>activities<span class="token punctuation">/</span></span><span class="token class-name">EDStartupActivity</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">getApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span>

move-result-object <span class="token register variable">v1</span>

invoke-static <span class="token punctuation">{</span><span class="token register variable">v1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token builtin">L</span><span class="token namespace">com<span class="token punctuation">/</span>example<span class="token punctuation">/</span>datainsert<span class="token punctuation">/</span></span><span class="token class-name">ExagearPrefs</span></span><span class="token punctuation">;</span><span class="token operator">-></span><span class="token function">setSP</span><span class="token punctuation">(</span><span class="token class-name"><span class="token builtin">L</span><span class="token namespace">android<span class="token punctuation">/</span>content<span class="token punctuation">/</span></span><span class="token class-name">Context</span></span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token builtin">V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编译，重装，测试。</p>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>解决办法就是手动添加SharePreference文件。</li>
<li>在测试过程中，发现只要生成sharePref文件并启动一次之后，就算把sharePref删掉也一样能启动。这说明exagear读取sharePref之后又生成了其他文件，第二次往后启动都依靠这个其他文件来启动了。</li>
</ul>
<h2 id="更新历史" tabindex="-1"><a class="header-anchor" href="#更新历史" aria-hidden="true">#</a> 更新历史</h2>
<ol>
<li>发现sharePref的文件名前半部分的包名不是固定的，需要从GuestContainerConfig那看一下</li>
<li>发现自定义的sharePref文件设置项好像不够全面，导致依旧闪退。</li>
<li>干脆重写代码，改成移动现有xml文件到对应目录下。原方法的说明移入<a href="./detailed">分支页面</a>下</li>
<li>想插入视频但是失败了，还是换回gif演示</li>
</ol>
</div></template>

<style scoped>
img{
  max-height: 300px;
}
</style>