import{i as ie,Z as ce,$ as le,_ as C,m as w,h as P,l as f,P as z,o as r,c as l,b as h,N as s,Q as I,z as _,x as b,r as k,F as O,E as x,B as M,d as v,I as F,J as ue,g as ne,w as U,e as T,Y as oe,C as pe,D as de,f as j,a0 as me,j as ve,n as ae,u as ge,K as he,L as _e,a1 as fe,H as be,a2 as X,T as ke}from"./app.b00f15d8.js";import{r as ye,L as re,u as Le,C as Be}from"./index.3614d248.js";import{P as Ne,a as Ce,t as we,b as Ae}from"./Pagation.8b4eebf7.js";const Se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Pe=({docsRepo:e,docsBranch:t,docsDir:a,path:p,editLinkPattern:o})=>{const c=ye(e);let i;if(o?i=o:c!==null&&(i=Se[c]),!i)return null;const n=p.replace(/\.html$/,".md");return i.replace(/:repo/,ie(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,ce(`${le(a)}/${n}`))};function W(){const e=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87","#e15b64","#f47e60","#f8b26a","#f26d6d","#67cc86","#fb9b5f","#3498db"],t=Math.floor(Math.random()*e.length);return e[t]}let D=null,V=null;const Ie={wait:()=>D,pending:()=>{D=new Promise(e=>V=e)},resolve:()=>{V==null||V(),D=null,V=null}},$e=()=>Ie,Oe={class:"hero-content"},xe=["src"],Ue={key:1},Ee={key:2},Ve=w({__name:"Banner",setup(e){const t=P(),a=f(()=>{var c,i,n,u;return(i=(c=t.value)==null?void 0:c.banner)!=null&&i.heroImage?z((u=(n=t.value)==null?void 0:n.banner)==null?void 0:u.heroImage):null}),p=f(()=>t.value.banner.heroImageStyle||{}),o=f(()=>{var u;const{bgImageStyle:c,bgImage:i}=((u=t.value)==null?void 0:u.banner)||{},n=i?{textAlign:"center",overflow:"hidden",background:`url(${z(i)}) center/cover no-repeat`}:{};return c?{...n,...c}:n});return(c,i)=>{var n,u,m,d,g,L,B,y;return r(),l("section",{class:"banner-wrapper",style:I({...s(o)})},[h("div",Oe,[s(a)?(r(),l("img",{key:0,src:s(a),style:I({heroImageStyle:s(p)}),alt:"heroImage"},null,12,xe)):_("",!0),(u=(n=s(t))==null?void 0:n.banner)!=null&&u.heroText?(r(),l("h1",Ue,b((d=(m=s(t))==null?void 0:m.banner)==null?void 0:d.heroText),1)):_("",!0),(L=(g=s(t))==null?void 0:g.banner)!=null&&L.tagline?(r(),l("p",Ee,b((y=(B=s(t))==null?void 0:B.banner)==null?void 0:y.tagline),1)):_("",!0)])],4)}}});var Fe=C(Ve,[["__file","Banner.vue"]]);const je={class:"hero-content"},ze=["src"],Xe={class:"hero-text"},De={key:0},Ge={key:1},Me={key:2,class:"btn-group"},Te={key:3,class:"social-links"},We=w({__name:"BannerBrand",setup(e){const t=P(),a=f(()=>{var n,u,m,d;return(u=(n=t.value)==null?void 0:n.bannerBrand)!=null&&u.heroImage?z((d=(m=t.value)==null?void 0:m.bannerBrand)==null?void 0:d.heroImage):null}),p=f(()=>{var n,u;return((u=(n=t.value)==null?void 0:n.bannerBrand)==null?void 0:u.buttons)||[]}),o=f(()=>{var n,u;return(((u=(n=t.value)==null?void 0:n.bannerBrand)==null?void 0:u.socialLinks)||[]).map(m=>(m.color||(m.color=W()),m))}),c=f(()=>t.value.bannerBrand.heroImageStyle||{}),i=f(()=>{var d;const{bgImageStyle:n,bgImage:u}=((d=t.value)==null?void 0:d.bannerBrand)||{},m=u?{overflow:"hidden",background:`url(${z(u)}) center/cover no-repeat`}:{};return n?{...m,...n}:m});return(n,u)=>{var d,g,L,B,y,A,S,E;const m=k("Xicons");return r(),l("section",{class:"banner-brand-wrapper",style:I({...s(i)})},[h("div",je,[s(a)?(r(),l("img",{key:0,src:s(a),style:I({heroImageStyle:s(c)}),alt:"heroImage"},null,12,ze)):_("",!0),h("div",Xe,[(g=(d=s(t))==null?void 0:d.bannerBrand)!=null&&g.heroText?(r(),l("h1",De,b((B=(L=s(t))==null?void 0:L.bannerBrand)==null?void 0:B.heroText),1)):_("",!0),(A=(y=s(t))==null?void 0:y.bannerBrand)!=null&&A.tagline?(r(),l("p",Ge,b((E=(S=s(t))==null?void 0:S.bannerBrand)==null?void 0:E.tagline),1)):_("",!0),s(p).length>0?(r(),l("ul",Me,[(r(!0),l(O,null,x(s(p),(N,$)=>(r(),l("li",{class:M(N.type),key:$},[v(m,{icon:N.icon,text:N.text,link:N.link,"icon-size":"20","text-size":"14"},null,8,["icon","text","link"])],2))),128))])):_("",!0),s(o).length>0?(r(),l("ul",Te,[(r(!0),l(O,null,x(s(o),(N,$)=>(r(),l("li",{class:"social-item",key:$},[v(m,{icon:N.icon,link:N.link,style:I({color:N.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))])):_("",!0)])])],4)}}});var Re=C(We,[["__file","BannerBrand.vue"]]);const He=w({setup(e,t){const a=F(),p=P(),o=f(()=>{var c,i;return(((i=(c=p.value)==null?void 0:c.blog)==null?void 0:i.socialLinks)||[]).map(n=>(n.color||(n.color=W()),n))});return{themeLocal:a,socialLinks:o}}}),qe={class:"personal-info-wrapper"},Qe=["src"],Ye={key:1,class:"name"},Je={class:"social-links"},Ke=h("hr",null,null,-1);function Ze(e,t,a,p,o,c){const i=k("Xicons");return r(),l("div",qe,[e.themeLocal.authorAvatar?(r(),l("img",{key:0,class:"personal-img",src:e.$withBase(e.themeLocal.authorAvatar),alt:"author-avatar"},null,8,Qe)):_("",!0),e.themeLocal.author?(r(),l("p",Ye,b(e.themeLocal.author),1)):_("",!0),h("ul",Je,[(r(!0),l(O,null,x(e.socialLinks,(n,u)=>(r(),l("li",{class:"social-item",key:u},[v(i,{icon:n.icon,link:n.link,style:I({color:n.color}),target:"_blank"},null,8,["icon","link","style"])]))),128))]),Ke])}var et=C(He,[["render",Ze],["__file","PersonalInfo.vue"]]);const tt={class:"home-blog-content"},nt={class:"blog-list"},st={class:"info-wrapper"},ot={class:"module-title"},at={class:"category-wrapper"},rt={class:"text"},it={class:"num"},ct={class:"module-title"},lt={class:"tag-wrapper"},ut=w({__name:"Blog",setup(e){const{posts:t,classificationSummary:a}=ue(),p=ne(1),o=ne(0),c=10,i=f(()=>{var d,g;return((g=(d=a.value)==null?void 0:d.categories)==null?void 0:g.items)||[]}),n=f(()=>{var d,g;return((g=(d=a.value)==null?void 0:d.tags)==null?void 0:g.items)||[]}),u=f(()=>{const d=(p.value-1)*c,g=p.value*c;return(t.value||[]).slice(d,g)});let m=d=>{};return m=d=>{if(p.value=d,o.value===0){const g=document.querySelector(".home-blog-content");g&&(o.value=g.getBoundingClientRect().top)}setTimeout(()=>{window.scrollTo({left:0,top:-o.value,behavior:"smooth"})},100)},(d,g)=>{const L=k("Xicons"),B=k("router-link");return r(),l("section",tt,[h("section",nt,[v(Ne,{data:s(u),total:s(t).length,"page-size":10,"current-page":p.value},null,8,["data","total","current-page"]),v(Ce,{currentPage:p.value,total:s(t).length,onChange:s(m)},null,8,["currentPage","total","onChange"])]),h("section",st,[v(et),h("h4",ot,[v(L,{icon:"Folder",text:"Categories"})]),h("ul",at,[(r(!0),l(O,null,x(s(i),(y,A,S)=>(r(),l("li",{class:"category-item",key:S},[v(B,{class:"category-link",to:`/categories/${A}/1/`},{default:U(()=>[h("span",rt,b(y.label),1),h("span",it,b(y.length),1)]),_:2},1032,["to"])]))),128))]),h("h4",ct,[v(L,{icon:"Tag",text:"Tags"})]),h("ul",lt,[(r(!0),l(O,null,x(s(n),(y,A,S)=>(r(),l("li",{class:"tag-item",key:S,style:I({borderColor:s(W)()})},[v(B,{class:"tag-link",to:`/tags/${A}/1/`},{default:U(()=>[T(b(y.label),1)]),_:2},1032,["to"])],4))),128))])])])}}});var pt=C(ut,[["__file","Blog.vue"]]);const dt={},mt={class:"theme-reco-default-content"};function vt(e,t){const a=k("Content");return r(),l("section",mt,[v(a)])}var gt=C(dt,[["render",vt],["__file","MdContent.vue"]]),ht="data:image/png;base64,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";const _t=[["vuepress-theme-reco@2.0.0-beta.33","C:\\Users\\\u5954\u8DD1\u5C0F\u96F7\\Desktop\\document"]],ft="vuepress-theme-reco@2.0.0-beta.33",bt="vuepress-theme-reco@2.0.0-beta.33",kt=!1,yt="sha512-EfyDnj3cKV9y3UXBAX4jgyYOF2Q/BSuF+wAcobDmjD46LfM2+FoO57Xx+fTmA3TM7xIpgDiWJ3NaIvjSGFIRyA==",Lt="/vuepress-theme-reco",Bt={browserslist:"4.21.3","caniuse-lite":"1.0.30001390","fraction.js":"4.2.0",nanoid:"3.3.4","normalize-range":"0.1.2",picocolors:"1.0.0","postcss-value-parser":"4.2.0","source-map-js":"1.0.2"},Nt={type:"version",registry:!0,raw:"vuepress-theme-reco@2.0.0-beta.33",name:"vuepress-theme-reco",escapedName:"vuepress-theme-reco",rawSpec:"2.0.0-beta.33",saveSpec:null,fetchSpec:"2.0.0-beta.33"},Ct=["/"],wt="https://registry.npmmirror.com/vuepress-theme-reco/-/vuepress-theme-reco-2.0.0-beta.33.tgz",At="2.0.0-beta.33",St="C:\\Users\\\u5954\u8DD1\u5C0F\u96F7\\Desktop\\document",Pt={name:"reco_luan",email:"recoluan@qq.com"},It={url:"https://github.com/recoluan/vuepress-theme-reco/issues"},$t={"@vicons/fa":"^0.12.0","@vicons/tabler":"^0.12.0","@vuepress-reco/shared":"2.0.0-beta.33","@vuepress-reco/tailwindcss-config":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-bulletin-popover":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-code-copy":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-comments":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-page":"2.0.0-beta.33","@vuepress-reco/vuepress-plugin-vue-preview":"2.0.0-beta.33","@vuepress/bundler-vite":"2.0.0-beta.48","@vuepress/bundler-webpack":"2.0.0-beta.48","@vuepress/client":"2.0.0-beta.48","@vuepress/core":"2.0.0-beta.48","@vuepress/plugin-active-header-links":"2.0.0-beta.48","@vuepress/plugin-back-to-top":"^2.0.0-beta.48","@vuepress/plugin-container":"2.0.0-beta.48","@vuepress/plugin-external-link-icon":"2.0.0-beta.48","@vuepress/plugin-git":"2.0.0-beta.48","@vuepress/plugin-nprogress":"2.0.0-beta.48","@vuepress/plugin-palette":"2.0.0-beta.48","@vuepress/plugin-prismjs":"2.0.0-beta.48","@vuepress/plugin-register-components":"2.0.0-beta.48","@vuepress/plugin-search":"2.0.0-beta.48","@vuepress/plugin-theme-data":"2.0.0-beta.48","@vuepress/shared":"2.0.0-beta.48","@vuepress/utils":"2.0.0-beta.48",autoprefixer:"10.4.7",md5:"2.3.0",postcss:"8.4.14","postcss-each":"1.1.0","postcss-import":"14.0.2",tailwindcss:"3.1.6",vue:"^3.2.36","vue-router":"^4.0.16"},Ot="> TODO: description",xt={"eslint-config-vuepress":"3.2.1","eslint-config-vuepress-typescript":"2.2.1",prettier:"2.2.1","sort-package-json":"1.44.0"},Ut={lib:"lib",test:"__tests__"},Et=["lib","templates"],Vt="https://github.com/recoluan/vuepress-theme-reco#readme",Ft="MIT",jt="lib/node/index.js",zt="vuepress-theme-reco",Xt={access:"public"},Dt={type:"git",url:"git+https://github.com/recoluan/vuepress-theme-reco.git"},Gt={build:"tsc --build tsconfig.build.json","build:watch":"tsc --build -w tsconfig.build.json",clean:"rimraf lib *.tsbuildinfo",copy:'cpx "src/**/*.{d.ts,vue,scss,css,svg,png,jpg}" lib',test:'echo "Error: run tests from root" && exit 1'},Mt="lib/node/index.d.ts",Tt="2.0.0-beta.33";var Wt={_args:_t,_from:ft,_id:bt,_inBundle:kt,_integrity:yt,_location:Lt,_phantomChildren:Bt,_requested:Nt,_requiredBy:Ct,_resolved:wt,_spec:At,_where:St,author:Pt,bugs:It,dependencies:$t,description:Ot,devDependencies:xt,directories:Ut,files:Et,homepage:Vt,license:Ft,main:jt,name:zt,publishConfig:Xt,repository:Dt,scripts:Gt,types:Mt,version:Tt};const Rt={class:"footer-wrapper"},Ht={key:0},qt={key:0},Qt=T("\xA0\xA0 "),Yt={key:1},Jt={key:1,class:"cyber-security"},Kt=h("img",{src:ht,alt:""},null,-1),Zt=["href"],en={__name:"Footer",setup(e){const t=F(),a=P(),{solution:p,options:o}=oe(),{version:c}=Wt,i=f(()=>p.value!=="valine"?!1:o.value.visitor!=!1);return(n,u)=>{var L,B,y,A,S,E,N,$,R,H,q,Q;const m=k("Xicons"),d=k("ValineViews"),g=k("Comments");return r(),l("div",Rt,[h("span",null,[v(m,{icon:"Palette",link:"http://v2.vuepress-reco.recoluan.com",target:"_blank",text:`vuepress-theme-reco@${s(c)}`},null,8,["text"])]),(B=(L=s(a))==null?void 0:L.footer)!=null&&B.record?(r(),l("span",Ht,[v(m,{icon:"ShieldCheck",link:((A=(y=s(a))==null?void 0:y.footer)==null?void 0:A.recordLink)||"#",text:(E=(S=s(a))==null?void 0:S.footer)==null?void 0:E.record,target:"_blank"},null,8,["link","text"])])):_("",!0),h("span",null,[v(m,{icon:"Copyright"},{default:U(()=>{var Y,J,K,Z,ee,te;return[s(t).author?(r(),l("a",qt,b(s(t).author),1)):_("",!0),Qt,((J=(Y=s(a))==null?void 0:Y.footer)==null?void 0:J.startYear)&&((Z=(K=s(a))==null?void 0:K.footer)==null?void 0:Z.startYear)!=new Date().getFullYear()?(r(),l("a",Yt,b((te=(ee=s(a))==null?void 0:ee.footer)==null?void 0:te.startYear)+" - ",1)):_("",!0),T(" "+b(new Date().getFullYear()),1)]}),_:1})]),pe(h("span",null,[v(m,{icon:"Eye"},{default:U(()=>[v(d,{idVal:"/",numStyle:{}})]),_:1})],512),[[de,s(i)]]),($=(N=s(a))==null?void 0:N.footer)!=null&&$.cyberSecurityRecord?(r(),l("p",Jt,[Kt,h("a",{href:((H=(R=s(a))==null?void 0:R.footer)==null?void 0:H.cyberSecurityLink)||"#"},b((Q=(q=s(a))==null?void 0:q.footer)==null?void 0:Q.cyberSecurityRecord),9,Zt)])):_("",!0),v(g,{"hide-comments":!0})])}}};var tn=C(en,[["__file","Footer.vue"]]);const nn={class:"home-wrapper"},sn=w({name:"HomeWrapper",components:{Banner:Fe,BannerBrand:Re,Blog:pt,MdContent:gt,Footer:tn}}),on=w({...sn,setup(e){const t=P();return(a,p)=>(r(),l("div",nn,[(r(!0),l(O,null,x(s(t).modules||["Banner","Blog","Footer"],o=>(r(),j(me(o),{key:o}))),128))]))}});var an=C(on,[["__file","index.vue"]]);const se=e=>e===!1?null:he(e)?_e(e):fe(e)?e:!1,G=(e,t,a)=>{const p=e.findIndex(o=>o.link===t);if(p!==-1){const o=e[p+a];return o!=null&&o.link?o:null}for(const o of e)if(o.children){const c=G(o.children,t,a);if(c)return c}return null},rn=w({name:"PageNav",components:{Link:re},setup(){const e=P(),t=ve(),a=ae(),p=ge(),o=f(()=>{const n=se(e.value.prev);return n!==!1?n:G(t.value,a.path,-1)}),c=f(()=>{const n=se(e.value.next);return n!==!1?n:G(t.value,a.path,1)});return{prevNavLink:o,nextNavLink:c,go:n=>{p.push(n)}}}}),cn={key:0,class:"page-nav"};function ln(e,t,a,p,o,c){return e.prevNavLink||e.nextNavLink?(r(),l("nav",cn,[h("p",{class:M(["inner",{hasPrev:!!e.prevNavLink,hasNext:!!e.nextNavLink}])},[e.prevNavLink?(r(),l("span",{key:0,class:"page-nav-item prev",onClick:t[0]||(t[0]=i=>e.go(e.prevNavLink.link))}," \u2190 "+b(e.prevNavLink.text),1)):_("",!0),e.nextNavLink?(r(),l("span",{key:1,class:"page-nav-item next",onClick:t[1]||(t[1]=i=>e.go(e.nextNavLink.link))},b(e.nextNavLink.text)+" \u2192 ",1)):_("",!0)],2)])):_("",!0)}var un=C(rn,[["render",ln],["__file","PageNav.vue"]]);const pn=()=>{const e=F(),t=X(),a=P();return f(()=>{var d,g;if(!((g=(d=a.value.editLink)!=null?d:e.value.editLink)!=null?g:!0))return null;const{repo:o,docsRepo:c=o,docsBranch:i="main",docsDir:n="",editLinkText:u}=e.value;if(!c)return null;const m=Pe({docsRepo:c,docsBranch:i,docsDir:n,path:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return m?{text:u!=null?u:"Edit this page",link:m,icon:"Edit",hideExternalLinkIcon:!0}:null})},dn=()=>{be();const e=F(),t=X(),a=P();return f(()=>{var c,i,n,u;if(!((i=(c=a.value.lastUpdated)!=null?c:e.value.lastUpdated)!=null?i:!0)||!((n=t.value.git)!=null&&n.updatedTime))return null;const o=new Date((u=t.value.git)==null?void 0:u.updatedTime);return we(o)})},mn=w({name:"PageMeta",components:{Link:re},setup(){const e=F(),t=pn(),a=dn();return{themeLocal:e,editNavLink:t,lastUpdated:a}}}),vn={class:"page-meta"},gn={key:0,class:"meta-item edit-link"},hn={key:1,class:"meta-item last-updated"};function _n(e,t,a,p,o,c){const i=k("Xicons");return r(),l("footer",vn,[e.editNavLink?(r(),l("div",gn,[v(i,{class:"meta-item-label",icon:e.editNavLink.icon,text:e.editNavLink.text,link:e.editNavLink.link,target:"_blank","icon-size":"20","text-size":"14"},null,8,["icon","text","link"])])):_("",!0),e.lastUpdated?(r(),l("div",hn,[v(i,{class:"meta-item-label",icon:"CalendarTime",text:`${e.themeLocal.lastUpdatedText||"Last Updated"} ${e.lastUpdated}`,"icon-size":"20","text-size":"14"},null,8,["text"])])):_("",!0)])}var fn=C(mn,[["render",_n],["__file","PageMeta.vue"]]);const bn=w({name:"Page",components:{PageInfo:Ae,PageNav:un,PageMeta:fn},setup(){const e=X(),{options:t}=oe();ae();const a=f(()=>{var o,c,i;return((c=(o=e==null?void 0:e.value)==null?void 0:o.frontmatter)==null?void 0:c.title)||((i=e==null?void 0:e.value)==null?void 0:i.title)||""}),p=f(()=>{var i;const{hideComments:o}=(i=e==null?void 0:e.value)==null?void 0:i.frontmatter,{hideComments:c}=t.value;return o===!0||o!==!1&&c===!0});return{title:a,pageData:e,shouldHideComments:p}}}),kn={class:"page-container"},yn={key:0,class:"page-title"},Ln={class:"theme-reco-default-content"};function Bn(e,t,a,p,o,c){const i=k("PageInfo"),n=k("Content"),u=k("PageMeta"),m=k("PageNav"),d=k("Comments");return r(),l("main",kn,[e.title?(r(),l("h1",yn,b(e.title),1)):_("",!0),v(i,{"page-data":e.pageData},null,8,["page-data"]),h("div",Ln,[v(n)]),v(u),v(m),v(d,{"hide-comments":e.shouldHideComments},null,8,["hide-comments"])])}var Nn=C(bn,[["render",Bn],["__file","Page.vue"]]);const Cn={class:"theme-container"},wn=w({__name:"Layout",setup(e){const t=X(),a=P(),{isShowSidebar:p,isShowCatalog:o}=Le(),c=$e(),i=c.resolve,n=c.pending;return(u,m)=>(r(),l("div",Cn,[v(Be,null,{default:U(()=>[s(a).home===!0?(r(),j(an,{key:0})):(r(),j(ke,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:s(i),onBeforeLeave:s(n)},{default:U(()=>[(r(),j(Nn,{key:s(t).path,class:M({"show-series":s(p),"show-catalog":s(o)})},null,8,["class"]))]),_:1},8,["onBeforeEnter","onBeforeLeave"]))]),_:1})]))}});var In=C(wn,[["__file","Layout.vue"]]);export{In as default};