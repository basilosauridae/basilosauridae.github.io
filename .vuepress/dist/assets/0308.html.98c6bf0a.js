import{_ as a,o as s,c,a as e,b as t,d as o,e as l,r as n}from"./app.6c85ad50.js";const i={},d=e("h2",{id:"flow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flow","aria-hidden":"true"},"#"),o(" Flow")],-1),h=o("\u4E00\u79CD\u9759\u6001\u68C0\u67E5\u5DE5\u5177\uFF0C\u5DE5\u4F5C\u4E2D\u4E0D\u4F1A\u7528\u5230\uFF0C\u7C7B\u4F3C\u4E8ETypescript\u3002"),p={href:"https://flow.org/en/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"},_=o("Flow"),u=l('<p>\u4E86\u89E3\u9009\u62E9flow\u7684\u539F\u56E0\uFF0C\u4E3A\u4EC0\u4E48Vue3\u5B8C\u5168\u62E5\u62B1TypeScript?</p><h2 id="\u5982\u4F55\u9605\u8BFB\u5927\u578B\u7684\u5F00\u6E90\u9879\u76EE\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9605\u8BFB\u5927\u578B\u7684\u5F00\u6E90\u9879\u76EE\u6E90\u7801" aria-hidden="true">#</a> \u5982\u4F55\u9605\u8BFB\u5927\u578B\u7684\u5F00\u6E90\u9879\u76EE\u6E90\u7801</h2><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><ol><li>\u4E86\u89E3\u6838\u5FC3\u6D41\u7A0BAPI\uFF0C\u628A\u5E93\u7684API\u7528\u719F\uFF08\u987A\u85E4\u6478\u74DC\uFF09</li><li>\u6574\u4F53\u6267\u884C\u6D41\u7A0B\uFF0C\uFF08lodash\u3001underscore\u7B49\u5DE5\u5177\u5E93\u9664\u5916,\u65E0\u592A\u591A\u5B66\u4E60\u53C2\u8003\u610F\u4E49\uFF09\uFF0C\u5982\uFF1A</li></ol><ul><li>webpack/vite/gulp\uFF1A\u4ECE\u542F\u52A8\u5230\u6253\u5305\u8F93\u51FA\u7684\u6D41\u7A0B</li><li>Vue2\uFF1AVue2\u4ECE\u7F16\u8BD1 =&gt; \u521D\u59CB\u5316 =&gt; \u89E6\u53D1\u66F4\u65B0 =&gt; \u5378\u8F7D\u7684\u6D41\u7A0B</li></ul><ol start="3"><li>\u770Bpackage.json\uFF0C\u770B\u4F9D\u8D56\u548C\u547D\u4EE4</li></ol><h3 id="vue\u7684\u76EE\u5F55\u7ED3\u6784\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u76EE\u5F55\u7ED3\u6784\u8BBE\u8BA1" aria-hidden="true">#</a> Vue\u7684\u76EE\u5F55\u7ED3\u6784\u8BBE\u8BA1</h3><p>\u8865\u5145script\u4E0B\u6587\u4EF6\u5939\u540D\u3002</p><p>core/observer \u54CD\u5E94\u5F0F\u90E8\u5206\uFF0Cdep.ts\u4FA6\u542C\u4F9D\u8D56\u5185\u5BB9\uFF0Cscheduler.ts\u8C03\u5EA6 core/instance \u751F\u547D\u5468\u671F\u3001proxy\u3001\u521D\u59CB\u5316\u6302\u8F7D\u7B49 core/vdom \u865A\u62DFdom\u7B49</p><p>compiler \u7F16\u8BD1\u6BD4\u8F83\u590D\u6742\uFF0C\u540E\u671F\u4F1A\u5728webpack/babel\u4E2D\u603B\u7ED3parser vue2\u4E2D\u662F\u901A\u8FC7\u6B63\u5219\u65B9\u5F0F\u5B9E\u73B0\uFF0Cvue3\u66F4\u52A0\u4E25\u8C28\uFF1A\u901A\u8FC7\u72B6\u6001\u673A\u5236\u6765\u505Atokens\u7684\u89E3\u6790\uFF0C\u8BCD\u6CD5\u8BED\u6CD5\u5206\u6790\uFF1B compiler/parser\u8F6C\u6362 =&gt; compiler/directive AST\u89E3\u6790 =&gt; compiler/codergen \u751F\u6210\uFF1B \u5B8C\u6574\u7684\u7F16\u8BD1\u8FC7\u7A0B\uFF1A\u5C06\u4EE3\u7801\u8F6C\u6210 =&gt; AST =&gt; \u76EE\u6807AST =&gt; \u751F\u6210\u4EE3\u7801</p><p>platform \u591A\u7AEF\u9002\u914D\u5904\u7406\uFF0C\u975E\u91CD\u70B9</p><p>shared \u5B9A\u4E49\u751F\u547D\u5468\u671F\u7684hooks\u7B49</p><h3 id="\u6839\u636E\u6267\u884C\u8FC7\u7A0B\u5206\u6790\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u6267\u884C\u8FC7\u7A0B\u5206\u6790\u6E90\u7801" aria-hidden="true">#</a> \u6839\u636E\u6267\u884C\u8FC7\u7A0B\u5206\u6790\u6E90\u7801</h3>',13),f=o("\u4E5D\u6B65\u8865\u5145 1. "),m={href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"},g=o("AST Explorer"),b=o(" packages/compiler-sfc/src, "),x=e("code",null,"compileScript\u3001compileTemplate\u3001compileStyle",-1),k=o("\u65B9\u6CD5\u89E3\u6790");function v(w,S){const r=n("ExternalLinkIcon");return s(),c("div",null,[d,e("blockquote",null,[e("p",null,[h,e("a",p,[_,t(r)])])]),u,e("p",null,[f,e("a",m,[g,t(r)]),b,x,k])])}var V=a(i,[["render",v],["__file","0308.html.vue"]]);export{V as default};