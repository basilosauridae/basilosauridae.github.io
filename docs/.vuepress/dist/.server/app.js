"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vueRouter = require("vue-router");
var vue = require("vue");
require("@vue/devtools-api");
var core = require("@vueuse/core");
var serverRenderer = require("vue/server-renderer");
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-ed8c81f4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return introduce_html$2;
  })),
  "v-470ada5b": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return mycat_html$2;
  })),
  "v-565176d0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return standard_html$2;
  })),
  "v-ef95dc2e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return reset_html$2;
  })),
  "v-e74db2cc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return shadow_html$2;
  })),
  "v-b03da52c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return whirligig_html$2;
  })),
  "v-e04f83ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return theCore_html$2;
  })),
  "v-6abdbdea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vue3_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-ed8c81f4": () => Promise.resolve().then(function() {
    return introduce_html;
  }).then(({ data: data2 }) => data2),
  "v-470ada5b": () => Promise.resolve().then(function() {
    return mycat_html;
  }).then(({ data: data2 }) => data2),
  "v-565176d0": () => Promise.resolve().then(function() {
    return standard_html;
  }).then(({ data: data2 }) => data2),
  "v-ef95dc2e": () => Promise.resolve().then(function() {
    return reset_html;
  }).then(({ data: data2 }) => data2),
  "v-e74db2cc": () => Promise.resolve().then(function() {
    return shadow_html;
  }).then(({ data: data2 }) => data2),
  "v-b03da52c": () => Promise.resolve().then(function() {
    return whirligig_html;
  }).then(({ data: data2 }) => data2),
  "v-e04f83ea": () => Promise.resolve().then(function() {
    return theCore_html;
  }).then(({ data: data2 }) => data2),
  "v-6abdbdea": () => Promise.resolve().then(function() {
    return vue3_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const pageHeadTitleSymbol = Symbol("");
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const siteData$1 = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout$1;
  }))
};
process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = /* @__PURE__ */ new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales2, routePath) => {
  const localePaths = Object.keys(locales2).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
const resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver === null || pageDataResolver === void 0 ? void 0 : pageDataResolver());
    return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  resolvePageHeadTitle: (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale])
});
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) !== null && _a !== void 0 ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = { "/": { "openInNewWindow": "open in new window" } };
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "Badge.vue"]]);
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$u = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var CodeGroupItem = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "CodeGroupItem.vue"]]);
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", Badge);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", CodeGroupItem);
  app.component("AutoLinkExternalIcon", () => {
    const ExternalLinkIcon2 = app.component("ExternalLinkIcon");
    if (ExternalLinkIcon2) {
      return vue.h(ExternalLinkIcon2);
    }
    return null;
  });
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, () => show.value ? backToTopEl : null);
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports2) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n) {
      var started = NProgress.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress.status = n === 1 ? null : n;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n = NProgress.status;
      if (!n) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress.set(n);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress$1);
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress$1.exports.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.exports.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.exports.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-ed8c81f4", "/guide/introduce.html", { "title": "\u6211\u7684\u524D\u7AEF\u4E4B\u8DEF" }, ["/guide/introduce", "/guide/introduce.md"]],
  ["v-470ada5b", "/guide/mycat.html", { "title": "\u82B1\u82B1\u662F\u4E00\u53EA\u732B" }, ["/guide/mycat", "/guide/mycat.md"]],
  ["v-565176d0", "/guide/standard.html", { "title": "\u65E5\u5FD7\u4E66\u5199\u89C4\u8303" }, ["/guide/standard", "/guide/standard.md"]],
  ["v-ef95dc2e", "/theme/reset.html", { "title": "reset" }, ["/theme/reset", "/theme/reset.md"]],
  ["v-e74db2cc", "/theme/shadow.html", { "title": "\u5E38\u89C1\u9634\u5F71" }, ["/theme/shadow", "/theme/shadow.md"]],
  ["v-b03da52c", "/theme/whirligig.html", { "title": "\u65CB\u8F6C\u6728\u9A6C" }, ["/theme/whirligig", "/theme/whirligig.md"]],
  ["v-e04f83ea", "/vue/theCore.html", { "title": "\u8BE6\u89E3vue\u7EC4\u4EF6\u4E09\u5927\u6838\u5FC3\u6982\u5FF5" }, ["/vue/theCore", "/vue/theCore.md"]],
  ["v-6abdbdea", "/vue/vue3.html", { "title": "\u5173\u4E8Evue3.0" }, ["/vue/vue3", "/vue/vue3.md"]],
  ["v-3706649a", "/404.html", { "title": "" }, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const historyCreator = vueRouter.createMemoryHistory;
const createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
const setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const appCreator = vue.createSSRApp;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8E\u6211</p><ol><li>\u6211\u7684\u4E13\u4E1A\u662F HRM\uFF0C\u548C\u73B0\u5728\u7684\u804C\u4E1A\u76F8\u5DEE\u5341\u4E07\u516B\u5343\u91CC;<br></li><li>\u5927\u5B66\u65F6\u671F\u505A\u8FC7\u7F8E\u5DE5\u517C\u804C\uFF0C\u719F\u7EC3\u4F7F\u7528 Adobe \u5BB6\u65CF\u6876,\u613F\u671B\u662F\u6210\u4E3A UI/UX;<br></li><li>\u6BD5\u4E1A\u540E\u89C9\u5F97\u628A\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u53D8\u6210\u53EF\u4EE5\u770B\u5F97\u89C1\u7684\u89C6\u89C9\u51B2\u51FB\u4F1A\u66F4\u9177\uFF0C\u6BC5\u7136\u9009\u62E9\u524D\u7AEF\u5F00\u53D1;<br></li><li>\u6700\u5927\u7684\u4F18\u52BF\u5C31\u662F\u6C38\u8FDC\u4FDD\u6301\u597D\u5947\uFF0C\u81EA\u6211\u63A2\u7D22\u529B MAX;<br></li><li>\u672A\u6765\u5E0C\u671B\u81EA\u5DF1\u4FDD\u6301\u521D\u5FC3\uFF0C\u7480\u74A8\u7F8E\u4E3D\uFF0C\u6240\u5411\u65E0\u654C\uFF01\u{1F389}\u{1F38A}\u2728</li></ol></div><h2 id="some-of-my-projects" tabindex="-1"><a class="header-anchor" href="#some-of-my-projects" aria-hidden="true">#</a> Some of my projects</h2><p><code>\u4EE5\u4E0B\u9879\u76EE\u5747\u4E3A\u90E8\u5206\u9875\u9762\u5C55\u793A</code></p><h3 id="vue3-0-typescript-vite-\u8BBE\u5907\u7BA1\u7406\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#vue3-0-typescript-vite-\u8BBE\u5907\u7BA1\u7406\u5E73\u53F0" aria-hidden="true">#</a> vue3.0+TypeScript+Vite \u8BBE\u5907\u7BA1\u7406\u5E73\u53F0</h3><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pic2.jpg"><p>\u5C24\u5927\u5927\u5728 vue3.0 beta \u76F4\u64AD\u4E2D\u63A8\u8350\u4E86 vite \u5DE5\u5177\uFF0C\u5F3A\u8C03\u662F\u9488\u5BF9 vue \u5355\u9875\u9762\u7EC4\u4EF6\u7684\u65E0\u6253\u5305\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u5FEB\u901F\u51B7\u542F\u52A8\u670D\u52A1\u5668\u3001\u5373\u65F6\u70ED\u6A21\u5757\u66F4\u6362\uFF08HMR\uFF09 \u3001\u771F\u6B63\u7684\u6309\u9700\u7F16\u8BD1\u3002\u5F88\u65B0\u9896\uFF0C\u6211\u51B3\u5B9A\u7528\u5B83\u6765\u642D\u5EFA\u4E00\u4E2A vue3 \u9879\u76EE\u3002</p><ol><li>\u4F7F\u7528 vite \u642D\u5EFA\u9879\u76EE\uFF1B<code>npm init vite-app</code><br></li><li>\u5B89\u88C5 typescript\u3001vue-router@next\u3001axios\u3001eslint-plugin-vue\u3001sass \u7B49\u76F8\u5173\u63D2\u4EF6\uFF1B<br></li><li>\u8BE6\u60C5\u53EF\u53C2\u8003\u672C\u535A\u5BA2\u6587\u7AE0\u2014\u2014\u300A\u8BB0\u5F55 vite+ts \u5FEB\u901F\u642D\u5EFA vue3 \u9879\u76EE\u300B</li></ol><h3 id="vue2-0-elementui-webpack-\u5237\u8138\u6D4B\u6E29\u7B7E\u5230\u5927\u5C4F" tabindex="-1"><a class="header-anchor" href="#vue2-0-elementui-webpack-\u5237\u8138\u6D4B\u6E29\u7B7E\u5230\u5927\u5C4F" aria-hidden="true">#</a> vue2.0+elementUI+webpack \u5237\u8138\u6D4B\u6E29\u7B7E\u5230\u5927\u5C4F</h3><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pic1.png"><p>\u672C\u9879\u76EE\u662F\u9488\u5BF9\u75AB\u60C5\u671F\u95F4\uFF0C\u5237\u8138\u8BC6\u522B\u8BBF\u5BA2\u4F53\u6E29\u662F\u5426\u5F02\u5E38\u5C55\u793A\u7684\u6570\u636E\u5927\u5C4F\u9700\u6C42\u3002</p><p>\u4E0E\u516C\u53F8\u9879\u76EE\u7EC4\u7684\u7B97\u6CD5\u5DE5\u7A0B\u5E08\u3001\u540E\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u8054\u5408\u5F00\u53D1\uFF0C\u6211\u89C9\u5F97\u6BD4\u8F83\u6709\u610F\u601D\u7684\u5730\u65B9\u662F\u63A5\u53E3\u8054\u8C03\uFF0C\u52A0\u5165\u4E86\u7B97\u6CD5\u63A5\u53E3\uFF1B\u53E6\u5916\u5927\u5C4F\u7684\u6570\u636E\u5C55\u793A\u4E5F\u9700\u8981\u524D\u7AEF\u5F00\u53D1\u5BF9\u6D4F\u89C8\u5668\u6027\u80FD\u7684\u4F18\u5316+\u53EF\u89C6\u5316\u56FE\u5F62\u8F6C\u5316\u80FD\u529B\u3002</p><p>\u5BF9\u4E8E\u524D\u7AEF\u5DE5\u7A0B\u5E08\u6765\u8BF4\uFF0C\u6570\u636E\u53EF\u89C6\u5316\u4E5F\u662F\u975E\u5E38\u91CD\u8981\u7684\u80FD\u529B\u3002\u63A8\u8350\u300AThe Grammar of Graphics\u300B\uFF0C\u2F00\u5957\u2F64\u6765\u63CF\u8FF0\u6240\u6709\u7EDF\u8BA1\u56FE\u5F62\u6DF1\u5C42\u7279\u6027\u7684\u8BED\u6CD5\u89C4\u5219\uFF0C\u8BE5\u8BED\u6CD5\u56DE\u7B54\u4E86\u300E\u4EC0\u4E48\u662F\u7EDF \u8BA1\u56FE\u5F62\u300F\u8FD9\u2F00\u95EE\u9898\uFF0C\u4EE5\u2F83\u5E95\u5411\u4E0A\u7684\u2F45\u5F0F\u7EC4\u7EC7\u6700\u57FA\u672C\u7684\u5143\u7D20\u5F62\u6210\u66F4\u2FBC\u7EA7\u7684\u5143\u7D20\u3002</p><h3 id="web-\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#web-\u7F51\u7AD9" aria-hidden="true">#</a> web \u7F51\u7AD9</h3><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pic3.png"><p>\u6B64\u9879\u76EE\u662F\u91C7\u7528 wordpress \u524D\u540E\u7AEF\u4E00\u4F53\u7684\u65B9\u6CD5\uFF0C\u5F53\u65F6\u6709\u548C\u4EA7\u54C1\u8BA8\u8BBA\u7528 vuepress \u6280\u672F\uFF0C\u4F46\u7531\u4E8E\u9762\u5411\u6D77\u5916\u5E02\u573A\uFF0C\u540E\u671F\u65B9\u4FBF\u529F\u80FD\u6027\u7EF4\u62A4\uFF0C\u63D2\u4EF6\u66F4\u4E30\u5BCC\u7684 wordpress \u66F4\u5408\u9002\u3002 \u524D\u7AEF\u5F00\u53D1\u4F7F\u7528\u7684\u662F\u539F\u751F\u4E09\u5251\u5BA2\u2014\u2014html+css+javascript\u3002</p><h3 id="\u5B89\u5353\u5E73\u677F" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5353\u5E73\u677F" aria-hidden="true">#</a> \u5B89\u5353\u5E73\u677F</h3><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/pic4.png"><p>\u5B89\u5353\u5E73\u677F\u662F\u4E00\u4E2A app \u9879\u76EE\uFF0C\u65B0\u5947\u7684\u70B9\u5728\u4E8E\u6211\u7684\u5DE5\u4F5C\u90FD\u662F web \u5F00\u53D1\uFF0Capp \u5BF9\u6211\u6765\u8BF4\u662F\u4E00\u4E2A\u6311\u6218\u3002 \u6B64\u9879\u76EE\u4F7F\u7528\u7684\u66F4\u9002\u7528\u4E8E uni-app \u7684 HbuilderX\uFF0C\u518D\u4F7F\u7528 Android Studio \u7F16\u8F91\u6253\u5305 app \u5916\u58F3\uFF0C\u7528\u6570\u636E\u7EBF\u8FDE\u63A5\u624B\u673A\u5C31\u53EF\u4EE5\u5B89\u88C5 app \u4E86\u3002</p><h3 id="cocoscreator2d-typescript-\u5C0F\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#cocoscreator2d-typescript-\u5C0F\u6E38\u620F" aria-hidden="true">#</a> cocoscreator2D+Typescript \u5C0F\u6E38\u620F</h3><img src="https://img-blog.csdnimg.cn/2129d01e5d174897a1efcef5ca773aa5.gif"><p>\u5DE5\u4F5C\u4E4B\u5916\u7684\u5C0F\u63A2\u7D22\uFF0C\u81EA\u6211\u5B66\u4E60\u505A\u4E86\u4E00\u4E2A\u7F51\u9875\u5C0F\u6E38\u620F\uFF0C\u4E0D\u8FC7\u662F cocos creator 2D \u7248\u672C\u7684\uFF0C\u56E0\u4E3A\u79CD\u79CD\u539F\u56E0 3D \u4E00\u76F4\u6CA1\u6709\u6361\u8D77\u6765\u3002 \u5BF9\u4E8E\u524D\u7AEF\u6765\u8BF4\uFF0C\u6211\u89C9\u5F97\u66F4\u591A\u7684\u662F\u953B\u70BC\u4EE3\u7801\u7684\u903B\u8F91\u80FD\u529B\u548C\u5BF9\u6587\u6863\u7684\u7406\u89E3\u80FD\u529B\u3002\u5F88\u591A\u90FD\u662F\u65B9\u6CD5\u8BBA\uFF0C\u628A\u6B7B\u677F\u7684\u65B9\u6CD5\u653E\u5165\u751F\u52A8\u7684\u6E38\u620F\u52A8\u4F5C\u4E2D\uFF0C\u633A\u91CD\u8981\uFF1B \u8BE6\u7EC6\u5F00\u53D1\u6D41\u7A0B\u53EF\u53C2\u8003\u672C\u535A\u6587\u300Acocoscreator\u2014\u2014\u670B\u514B\u8D5B\u8F66\u6E38\u620F\u300B\u3002</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/introduce.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var introduce_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9], ["__file", "introduce.html.vue"]]);
var introduce_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": introduce_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><p>::: info</p><ol><li>\u82B1\u82B1\u662F\u4E00\u53EA\u732B\uFF0C\u6B64\u7BC7\u4EE5\u7B2C\u4E00\u4EBA\u79F0\u8BB2\u8FF0;</li><li>\u6B64\u7BC7\u535A\u6587\u5B9E\u9645\u662F\u82B1\u82B1\u53E3\u8FF0 \u7565\u61C2\u55B5\u8BED\u7684\u5F71\u5927\u5B9D\u8BB0\u5F55\u3002 :::</li></ol><h3 id="\u672C\u55B5\u51FA\u751F\u4E4B\u65F6-\u590F\u672B\u521D\u79CB\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u51FA\u751F\u4E4B\u65F6-\u590F\u672B\u521D\u79CB\u3002" aria-hidden="true">#</a> \u672C\u55B5\u51FA\u751F\u4E4B\u65F6\uFF0C\u590F\u672B\u521D\u79CB\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat1.jpeg"><br> \u6CA1\u9519\uFF0C\u5DE6\u8FB9\u90A3\u4F4D\u5C31\u662F\u672C\u55B5\u3002</p><h3 id="\u672C\u55B5\u6BD5\u4E1A\u4E4B\u65F6-\u5B66\u5BCC\u4E94\u8F66\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u6BD5\u4E1A\u4E4B\u65F6-\u5B66\u5BCC\u4E94\u8F66\u3002" aria-hidden="true">#</a> \u672C\u55B5\u6BD5\u4E1A\u4E4B\u65F6\uFF0C\u5B66\u5BCC\u4E94\u8F66\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat2.jpg"><br> \u672C\u55B5\u5584\u4E8E\u601D\u7D22\u3001\u6709\u89C1\u8BC6\u3001\u5177\u6709\u6587\u4EBA\u6C14\u8D28\u3002</p><h3 id="\u672C\u55B5\u521D\u5165\u793E\u4F1A-\u4E0D\u5E78\u88AB\u7EDD\u80B2\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u521D\u5165\u793E\u4F1A-\u4E0D\u5E78\u88AB\u7EDD\u80B2\u3002" aria-hidden="true">#</a> \u672C\u55B5\u521D\u5165\u793E\u4F1A\uFF0C\u4E0D\u5E78\u88AB\u7EDD\u80B2\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat3.jpg"><br> \u7EB5\u4F7F\u88AB\u8BF1\u60D1\u5343\u767E\u904D\uFF0C\u6211\u4F9D\u7136\u5FC3\u5982\u6B62\u6C34\u3002\u2014\u2014\u672C\u55B5\u7AA5\u89C1\u81EA\u590F\u76EE\u6F31\u77F3\u300A\u6211\u662F\u732B\u300B</p><h3 id="\u672C\u55B5\u5149\u4E34\u5F71\u820D-\u84EC\u835C\u751F\u8F89\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u5149\u4E34\u5F71\u820D-\u84EC\u835C\u751F\u8F89\u3002" aria-hidden="true">#</a> \u672C\u55B5\u5149\u4E34\u5F71\u820D\uFF0C\u84EC\u835C\u751F\u8F89\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat4.jpg"><br> \u5F71\u820D\u6307\u5F71\u5927\u5B9D\u7684\u623F\u5B50\uFF0C\u672C\u55B5\u5149\u4E34\u81F3\u6B64\uFF0C\u67F4\u95E8\u6709\u5E86\u3002</p><h3 id="\u672C\u55B5\u4E0E\u72EE\u5B50\u540C\u5C5E\u55B5\u79D1-\u5A01\u98CE\u51CC\u51CC\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u4E0E\u72EE\u5B50\u540C\u5C5E\u55B5\u79D1-\u5A01\u98CE\u51CC\u51CC\u3002" aria-hidden="true">#</a> \u672C\u55B5\u4E0E\u72EE\u5B50\u540C\u5C5E\u55B5\u79D1\uFF0C\u5A01\u98CE\u51CC\u51CC\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat5.jpg"><br> \u4EF0\u5929\u957F\u5578\u51FA\u95E8\u53BB,\u6211\u8F88\u5C82\u662F\u84EC\u84BF\u55B5\u3002</p><h3 id="\u672C\u55B5\u4E43\u5927\u6A58\u7C7B\u76EE-\u5929\u9AD8\u9A6C\u80A5-\u8001\u9955\u55B5\u738B\u3002" tabindex="-1"><a class="header-anchor" href="#\u672C\u55B5\u4E43\u5927\u6A58\u7C7B\u76EE-\u5929\u9AD8\u9A6C\u80A5-\u8001\u9955\u55B5\u738B\u3002" aria-hidden="true">#</a> \u672C\u55B5\u4E43\u5927\u6A58\u7C7B\u76EE\uFF0C\u5929\u9AD8\u9A6C\u80A5\uFF0C\u8001\u9955\u55B5\u738B\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/cat6.jpg"><br> \u672C\u55B5\u6388\u8BFE\uFF1A\u5929\u9AD8\u9A6C\u80A5\u7684\u8C1A\u8BED\u6765\u81EA\u53E4\u8BD7\u201C\u4E91\u51C0\u5996\u661F\u843D\uFF0C\u79CB\u6DF1\u8D5B\u9A6C\u80A5\u201D\u3002</p><h3 id="\u4ECA\u65E5\u672C\u55B5\u81EA\u4F20\u5C31\u5199\u5230\u8FD9\u91CC-\u6765\u65E5\u65B9\u957F\u3002" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u65E5\u672C\u55B5\u81EA\u4F20\u5C31\u5199\u5230\u8FD9\u91CC-\u6765\u65E5\u65B9\u957F\u3002" aria-hidden="true">#</a> \u4ECA\u65E5\u672C\u55B5\u81EA\u4F20\u5C31\u5199\u5230\u8FD9\u91CC\uFF0C\u6765\u65E5\u65B9\u957F\u3002</h3><p><img src="https://cetacea-1304984885.cos.ap-shanghai.myqcloud.com/cat/psc.jpg"><br></p><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/mycat.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var mycat_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8], ["__file", "mycat.html.vue"]]);
var mycat_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": mycat_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p></div><p>::: info \u8FD9\u662F\u4E00\u4E2A\u63D0\u793A :::</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E</p></details>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "FOO" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token comment"${_scopeId2}>//\u4EE3\u7801\u57571;</span>
<span class="token keyword"${_scopeId2}>const</span> foo <span class="token operator"${_scopeId2}>=</span> <span class="token string"${_scopeId2}>&#39;foo&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token comment" }, "//\u4EE3\u7801\u57571;"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "const"),
                      vue.createTextVNode(" foo "),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'foo'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "BAR" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token comment"${_scopeId2}>//\u4EE3\u7801\u57572;</span>
<span class="token keyword"${_scopeId2}>const</span> bar <span class="token operator"${_scopeId2}>=</span> <span class="token string"${_scopeId2}>&#39;bar&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token comment" }, "//\u4EE3\u7801\u57572;"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "const"),
                      vue.createTextVNode(" bar "),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'bar'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "FOO" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token comment" }, "//\u4EE3\u7801\u57571;"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "const"),
                    vue.createTextVNode(" foo "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'foo'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "BAR" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token comment" }, "//\u4EE3\u7801\u57572;"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "const"),
                    vue.createTextVNode(" bar "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'bar'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u8FD9\u662F\u4E00\u4E2A\u547D\u4EE4\u884C
<span class="token function">npm</span> run dev
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://www.bilibili.com/video/BV1As411R7e3?from=search&amp;seid=8836255303393949866" target="_blank" rel="noopener noreferrer">\u94FE\u63A5\u8BED\u6CD5`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/standard.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var standard_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$7], ["__file", "standard.html.vue"]]);
var standard_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": standard_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><blockquote><p>CSS \u6837\u5F0F reset</p></blockquote><h2 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> reset</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
menu</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">header,
footer,
section,
article,
aside,
nav,
hgroup,
address,
figure,
figcaption,
menu,
details</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
  <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">caption,
th</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html,
body,
fieldset,
img,
iframe,
abbr</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">i,
cite,
em,
var,
address,
dfn</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">[hidefocus],
summary</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">li</span> <span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6,
small</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sup,
sub</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 83%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">pre,
code,
kbd,
samp</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">q:before,
q:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">textarea</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">label,
summary</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a,
button</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6,
em,
strong,
b</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">del,
ins,
u,
s,
a,
a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body,
textarea,
input,
button,
select,
keygen,
legend</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 12px/1.14 arial<span class="token punctuation">,</span> \\5b8b\\4f53<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a,
a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div><h2 id="\u53BB\u9664-input-\u9ED8\u8BA4\u586B\u5145\u7684\u80CC\u666F\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u53BB\u9664-input-\u9ED8\u8BA4\u586B\u5145\u7684\u80CC\u666F\u989C\u8272" aria-hidden="true">#</a> \u53BB\u9664 input \u9ED8\u8BA4\u586B\u5145\u7684\u80CC\u666F\u989C\u8272</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input:-webkit-autofill</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0 0 0px 1000px white inset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6E05\u9664-input-type-number-\u7684\u9ED8\u8BA4\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664-input-type-number-\u7684\u9ED8\u8BA4\u6837\u5F0F" aria-hidden="true">#</a> \u6E05\u9664 input[type=number]\u7684\u9ED8\u8BA4\u6837\u5F0F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input[type=&#39;number&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=&#39;number&#39;]::-webkit-inner-spin-button,
input[type=&#39;number&#39;]::-webkit-outer-spin-button</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6E05\u9664\u79FB\u52A8\u7AEF-a-\u6807\u7B7E\u7B49\u70B9\u51FB\u533A\u57DF\u53D8\u8272" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u79FB\u52A8\u7AEF-a-\u6807\u7B7E\u7B49\u70B9\u51FB\u533A\u57DF\u53D8\u8272" aria-hidden="true">#</a> \u6E05\u9664\u79FB\u52A8\u7AEF a \u6807\u7B7E\u7B49\u70B9\u51FB\u533A\u57DF\u53D8\u8272</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6E05\u9664\u79FB\u52A8\u7AEF-input-\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u79FB\u52A8\u7AEF-input-\u6837\u5F0F" aria-hidden="true">#</a> \u6E05\u9664\u79FB\u52A8\u7AEF input \u6837\u5F0F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*\u89E3\u51B3ios\u4E0A\u6309\u94AE\u7684\u5706\u89D2\u95EE\u9898*/</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/*\u89E3\u51B3ios\u4E0A\u8F93\u5165\u6846\u5706\u89D2\u95EE\u9898*/</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> medium<span class="token punctuation">;</span> <span class="token comment">/*\u53BB\u6389\u9F20\u6807\u70B9\u51FB\u7684\u9ED8\u8BA4\u9EC4\u8272\u8FB9\u6846*/</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u907F\u514D-ios-\u6ED1\u52A8\u6EDA\u52A8\u6761\u5361\u987F" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D-ios-\u6ED1\u52A8\u6EDA\u52A8\u6761\u5361\u987F" aria-hidden="true">#</a> \u907F\u514D ios \u6ED1\u52A8\u6EDA\u52A8\u6761\u5361\u987F</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4E00\u6B21\u641E\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u641E\u5B9A" aria-hidden="true">#</a> \u4E00\u6B21\u641E\u5B9A</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">* </span><span class="token punctuation">{</span>
  <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
form,
fieldset,
legend,
input,
button,
textarea,
menu </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">header,
footer,
section,
article,
aside,
nav,
hgroup,
address,
figure,
figcaption,
menu,
details </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table </span><span class="token punctuation">{</span>
  <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
  <span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">caption,
th </span><span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">html,
body,
fieldset,
img,
iframe,
abbr </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">i,
cite,
em,
var,
address,
dfn </span><span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">[hidefocus],
summary </span><span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">li </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6,
small </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">sup,
sub </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 83%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">pre,
code,
kbd,
samp </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">q:before,
q:after </span><span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">textarea </span><span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">resize</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">label,
summary </span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a,
button </span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6,
em,
strong,
b </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">del,
ins,
u,
s,
a,
a:hover </span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body,
textarea,
input,
button,
select,
keygen,
legend </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 12px/1.14 arial<span class="token punctuation">,</span> \\5b8b\\4f53<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a,
a:hover </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/*\u89E3\u51B3ios\u4E0A\u6309\u94AE\u7684\u5706\u89D2\u95EE\u9898*/</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/*\u89E3\u51B3ios\u4E0A\u8F93\u5165\u6846\u5706\u89D2\u95EE\u9898*/</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> medium<span class="token punctuation">;</span> <span class="token comment">/*\u53BB\u6389\u9F20\u6807\u70B9\u51FB\u7684\u9ED8\u8BA4\u9EC4\u8272\u8FB9\u6846*/</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:-webkit-autofill </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0 0 0px 1000px white inset<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>[type=&#39;number&#39;] </span><span class="token punctuation">{</span>
    <span class="token property">-moz-appearance</span><span class="token punctuation">:</span> textfield<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>[type=&#39;number&#39;]::-webkit-inner-spin-button,
  <span class="token parent important">&amp;</span>[type=&#39;number&#39;]::-webkit-outer-spin-button </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br></div></div><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/theme/reset.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var reset_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$6], ["__file", "reset.html.vue"]]);
var reset_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": reset_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_shadow_normalShadow = vue.resolveComponent("shadow-normalShadow");
  const _component_shadow_irregularShadow = vue.resolveComponent("shadow-irregularShadow");
  _push(`<!--[--><h2 id="\u5E38\u89C1\u6295\u5F71" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u6295\u5F71" aria-hidden="true">#</a> \u5E38\u89C1\u6295\u5F71</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_shadow_normalShadow, null, null, _parent));
  _push(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u65E0\u504F\u79FB\u6295\u5F71</span>
<span class="token selector">.shadow1 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0B\u4FA7\u6295\u5F71</span>
<span class="token selector">.shadow2 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 6px 12px -4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53F3\u4FA7\u6295\u5F71</span>
<span class="token selector">.shadow3 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 6px 6px 12px -5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u53CC\u4FA7\u6295\u5F71</span>
<span class="token selector">.shadow4 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 6px 0 12px -5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">,</span> -6px 0 12px -5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u83DC\u5355\u6295\u5F71</span>
<span class="token selector">.shadow5 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 3px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6295\u5F71\u8FB9\u6846</span>
<span class="token selector">.shadow6 </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 181<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u4E0D\u89C4\u5219\u56FE\u5F62\u6295\u5F71" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u89C4\u5219\u56FE\u5F62\u6295\u5F71" aria-hidden="true">#</a> \u4E0D\u89C4\u5219\u56FE\u5F62\u6295\u5F71</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_shadow_irregularShadow, null, null, _parent));
  _push(`<div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u865A\u7EBF\u9634\u5F71</span>
<span class="token selector">.shadow-dotted </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 6px dotted #00adb5<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>2px 2px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>64<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 225<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E09\u89D2\u5F62\u9634\u5F71</span>
<span class="token selector">.shadow-triangle </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 0 50px 50px 50px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent #00adb5 transparent<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>10px 0px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>39<span class="token punctuation">,</span> 92<span class="token punctuation">,</span> 171<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53F3\u7F3A\u5706\u89D2\u9634\u5F71</span>
<span class="token selector">.circle-square </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
    circle at bottom right<span class="token punctuation">,</span>
    transparent 49px<span class="token punctuation">,</span>
    #00adb5 34px
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>2px 2px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>64<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 225<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4FE1\u606F\u7A97\u53E3</span>
<span class="token selector">.tip </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #00adb5<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0px 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>64<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 225<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::before </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 0 10px 10px 10px<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent #fff transparent<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector"><span class="token parent important">&amp;</span>::after </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 0 10px 10px 10px<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> transparent transparent #00adb5 transparent<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -11px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/theme/shadow.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var shadow_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$5], ["__file", "shadow.html.vue"]]);
var shadow_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": shadow_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_whirligig = vue.resolveComponent("whirligig");
  _push(`<!--[-->`);
  _push(serverRenderer.ssrRenderComponent(_component_whirligig, null, null, _parent));
  _push(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>whirligig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-perspective-photo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u6B64\u5904\u53EF\u4E0A\u4F20\u81EA\u5DF1\u7684\u56FE\u7247 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[0]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[1]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[2]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[3]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[4]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgSrc[5]<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>piece<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>196px<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token comment">&lt;!-- \u6B64\u5904\u4F7F\u7528div\u4EE3\u66FF --&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
        <span class="token comment">&lt;!--                    &lt;div class=&#39;example&#39; style=&quot;&quot;&gt;&lt;/div&gt;--&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.whirligig </span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token selector">.demo-perspective-photo </span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 260px<span class="token punctuation">;</span>
    <span class="token comment">/*top: 200px;*/</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">zoom</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.demo-perspective-photo #stage </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">-webkit-perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token property">-moz-perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token property">perspective</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> top 0.5s<span class="token punctuation">;</span>
    <span class="token property">-moz-transition</span><span class="token punctuation">:</span> top 0.5s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> top 0.5s<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.demo-perspective-photo #container </span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -32px<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -18px<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> -webkit-transform 1s<span class="token punctuation">;</span>
    <span class="token property">-moz-transition</span><span class="token punctuation">:</span> -moz-transform 1s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> transform 1s<span class="token punctuation">;</span>
    <span class="token property">-webkit-transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
    <span class="token property">-moz-transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
    <span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
    <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> photoRotate 18s ease-in-out infinite 2s<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> photoRotate 18s ease-in-out infinite 2s<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.demo-perspective-photo .piece </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> -webkit-transform 1s<span class="token punctuation">;</span>
    <span class="token property">-moz-transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> -moz-transform 1s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> transform 1s<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.demo-perspective-photo .example </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 1px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> -webkit-transform 1s<span class="token punctuation">;</span>
    <span class="token property">-moz-transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> -moz-transform 1s<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> opacity 1s<span class="token punctuation">,</span> transform 1s<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .demo-perspective-photo .<span class="token property">example</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>6<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>98px<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> photoRotate</span> <span class="token punctuation">{</span>
  <span class="token selector">0% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">16.7% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">33.3% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">66.7% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">83.3% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> photoRotate</span> <span class="token punctuation">{</span>
  <span class="token selector">0% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>0deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">16.7% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">33.3% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>120deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">66.7% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>240deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">83.3% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>300deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100% </span><span class="token punctuation">{</span>
    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br></div></div><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/theme/whirligig.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var whirligig_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$4], ["__file", "whirligig.html.vue"]]);
var whirligig_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": whirligig_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  _push(`<!--[--><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u5C5E\u6027\u3001\u4E8B\u4EF6\u548C\u63D2\u69FD\u8FD9\u4E09\u4E2A vue \u57FA\u7840\u6982\u5FF5\u3001\u4F7F\u7528\u65B9\u6CD5\u53CA\u5176\u5BB9\u6613\u88AB\u5FFD\u7565\u7684\u4E00\u4E9B\u91CD\u8981\u7EC6\u8282\u3002\u5982\u679C\u4F60\u9605\u8BFB\u522B\u4EBA\u5199\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u4ECE\u8FD9\u4E09\u4E2A\u90E8\u5206\u5C55\u5F00\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u4E86\u89E3\u4E00\u4E2A\u7EC4\u4EF6\u7684\u6240\u6709\u529F\u80FD\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a> \u5C5E\u6027</h2><h3 id="_1-\u81EA\u5B9A\u4E49\u5C5E\u6027-props" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u5B9A\u4E49\u5C5E\u6027-props" aria-hidden="true">#</a> 1.\u81EA\u5B9A\u4E49\u5C5E\u6027 props</h3><p>prop \u5B9A\u4E49\u4E86\u8FD9\u4E2A\u7EC4\u4EF6\u6709\u54EA\u4E9B\u53EF\u914D\u7F6E\u7684\u5C5E\u6027\uFF0C\u7EC4\u4EF6\u7684\u6838\u5FC3\u529F\u80FD\u4E5F\u90FD\u662F\u5B83\u6765\u786E\u5B9A\u7684\u3002\u5199\u901A\u7528\u7EC4\u4EF6\u65F6\uFF0Cprops \u6700\u597D\u7528\u5BF9\u8C61\u7684\u5199\u6CD5\uFF0C\u8FD9\u6837\u53EF\u4EE5\u9488\u5BF9\u6BCF\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u7C7B\u578B\u3001\u9ED8\u8BA4\u503C\u6216\u81EA\u5B9A\u4E49\u6821\u9A8C\u5C5E\u6027\u7684\u503C\uFF0C\u8FD9\u70B9\u5728\u7EC4\u4EF6\u5F00\u53D1\u4E2D\u5F88\u91CD\u8981\uFF0C\u7136\u800C\u5F88\u591A\u4EBA\u5374\u5FFD\u89C6\uFF0C\u76F4\u63A5\u4F7F\u7528 props \u7684\u6570\u7EC4\u7528\u6CD5\uFF0C\u8FD9\u6837\u7684\u7EC4\u4EF6\u5F80\u5F80\u662F\u4E0D\u4E25\u8C28\u7684\u3002</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-html ext-html line-numbers-mode"${_scopeId2}><pre class="language-html"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>props</span>
  <span class="token attr-name"${_scopeId2}>name</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>\u5C5E\u6027<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:type</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>type<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:is-visible</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>false<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:on-change</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>handlePropChange<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:list</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>[22,33,44]<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>title</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>\u5C5E\u6027Demo<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>test1<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>[<span class="token punctuation"${_scopeId2}>&#39;</span>test2<span class="token punctuation"${_scopeId2}>&#39;</span>]<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token attr-name"${_scopeId2}>:style</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>{ marginTop: <span class="token punctuation"${_scopeId2}>&#39;</span>20px<span class="token punctuation"${_scopeId2}>&#39;</span> }<span class="token punctuation"${_scopeId2}>&quot;</span></span>
  <span class="token special-attr"${_scopeId2}><span class="token attr-name"${_scopeId2}>style</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span><span class="token value css language-css"${_scopeId2}><span class="token property"${_scopeId2}>margin-top</span><span class="token punctuation"${_scopeId2}>:</span> 10px</span><span class="token punctuation"${_scopeId2}>&quot;</span></span></span>
<span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>props</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-html" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("props")
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, "name"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("\u5C5E\u6027"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":type"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("type"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":is-visible"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("false"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":on-change"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("handlePropChange"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":list"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("[22,33,44]"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, "title"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("\u5C5E\u6027Demo"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("test1"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("["),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("test2"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("]"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token attr-name" }, ":style"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("{ marginTop: "),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("20px"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(" }"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token special-attr" }, [
                          vue.createVNode("span", { class: "token attr-name" }, "style"),
                          vue.createVNode("span", { class: "token attr-value" }, [
                            vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                            vue.createVNode("span", { class: "token punctuation" }, '"'),
                            vue.createVNode("span", { class: "token value css language-css" }, [
                              vue.createVNode("span", { class: "token property" }, "margin-top"),
                              vue.createVNode("span", { class: "token punctuation" }, ":"),
                              vue.createTextVNode(" 10px")
                            ]),
                            vue.createVNode("span", { class: "token punctuation" }, '"')
                          ])
                        ]),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("props")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token literal-property property"${_scopeId2}>props</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token literal-property property"${_scopeId2}>name</span><span class="token operator"${_scopeId2}>:</span> string<span class="token punctuation"${_scopeId2}>;</span>
  <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token function-variable function"${_scopeId2}>validator</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>(</span><span class="token parameter"${_scopeId2}>value</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token operator"${_scopeId2}>=&gt;</span> <span class="token punctuation"${_scopeId2}>{</span>
      <span class="token comment"${_scopeId2}>//\u4ECE\u7236\u7EA7\u4F20\u5165\u7684 type\uFF0C\u5B83\u7684\u503C\u5FC5\u987B\u662F\u6307\u5B9A\u7684 &#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;\u4E2D\u7684\u4E00\u4E2A\uFF0C\u5982\u679C\u4F20\u5165\u8FD9\u4E09\u4E2A\u4EE5\u5916\u7684\u503C\uFF0C\u90FD\u4F1A\u629B\u51FA\u4E00\u6761\u8B66\u544A</span>
      <span class="token keyword"${_scopeId2}>return</span> <span class="token punctuation"${_scopeId2}>[</span><span class="token string"${_scopeId2}>&#39;success&#39;</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token string"${_scopeId2}>&#39;warning&#39;</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token string"${_scopeId2}>&#39;danger&#39;</span><span class="token punctuation"${_scopeId2}>]</span><span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>includes</span><span class="token punctuation"${_scopeId2}>(</span>value<span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
    <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token literal-property property"${_scopeId2}>onchange</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>{</span>
    <span class="token function-variable function"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span><span class="token keyword"${_scopeId2}>function</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token function-variable function"${_scopeId2}>default</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span><span class="token operator"${_scopeId2}>=&gt;</span><span class="token punctuation"${_scopeId2}>{</span><span class="token punctuation"${_scopeId2}>}</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token literal-property property"${_scopeId2}>isVisible</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>{</span>
    <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span>Boolean<span class="token punctuation"${_scopeId2}>,</span>
    <span class="token keyword"${_scopeId2}>default</span><span class="token operator"${_scopeId2}>:</span><span class="token boolean"${_scopeId2}>false</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token literal-property property"${_scopeId2}>list</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>{</span>
    <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span>Array<span class="token punctuation"${_scopeId2}>,</span>
    <span class="token function-variable function"${_scopeId2}>default</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span><span class="token operator"${_scopeId2}>=&gt;</span><span class="token punctuation"${_scopeId2}>[</span><span class="token punctuation"${_scopeId2}>]</span><span class="token comment"${_scopeId2}>//\u5BF9\u8C61\u6216\u6570\u7EC4\u9ED8\u8BA4\u503C\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u83B7\u53D6</span>
  <span class="token punctuation"${_scopeId2}>}</span>
<span class="token punctuation"${_scopeId2}>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}><span class="line-number"${_scopeId2}>19</span><br${_scopeId2}><span class="line-number"${_scopeId2}>20</span><br${_scopeId2}><span class="line-number"${_scopeId2}>21</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token literal-property property" }, "props"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token literal-property property" }, "name"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(" string"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token literal-property property" }, "type"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token function-variable function" }, "validator"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token parameter" }, "value"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "=>"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token comment" }, "//\u4ECE\u7236\u7EA7\u4F20\u5165\u7684 type\uFF0C\u5B83\u7684\u503C\u5FC5\u987B\u662F\u6307\u5B9A\u7684 'success', 'warning', 'danger'\u4E2D\u7684\u4E00\u4E2A\uFF0C\u5982\u679C\u4F20\u5165\u8FD9\u4E09\u4E2A\u4EE5\u5916\u7684\u503C\uFF0C\u90FD\u4F1A\u629B\u51FA\u4E00\u6761\u8B66\u544A"),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token keyword" }, "return"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "["),
                      vue.createVNode("span", { class: "token string" }, "'success'"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'warning'"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'danger'"),
                      vue.createVNode("span", { class: "token punctuation" }, "]"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "includes"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createTextVNode("value"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token literal-property property" }, "onchange"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token function-variable function" }, "type"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token keyword" }, "function"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token function-variable function" }, "default"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token operator" }, "=>"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token literal-property property" }, "isVisible"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token literal-property property" }, "type"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode("Boolean"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token keyword" }, "default"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token boolean" }, "false"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token literal-property property" }, "list"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token literal-property property" }, "type"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode("Array"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token function-variable function" }, "default"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token operator" }, "=>"),
                      vue.createVNode("span", { class: "token punctuation" }, "["),
                      vue.createVNode("span", { class: "token punctuation" }, "]"),
                      vue.createVNode("span", { class: "token comment" }, "//\u5BF9\u8C61\u6216\u6570\u7EC4\u9ED8\u8BA4\u503C\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u83B7\u53D6"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "19"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "20"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "21"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-html" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("props")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, "name"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("\u5C5E\u6027"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":type"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("type"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":is-visible"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("false"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":on-change"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("handlePropChange"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":list"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("[22,33,44]"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, "title"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("\u5C5E\u6027Demo"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("test1"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("["),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("test2"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("]"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token attr-name" }, ":style"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("{ marginTop: "),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("20px"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(" }"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token special-attr" }, [
                        vue.createVNode("span", { class: "token attr-name" }, "style"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createVNode("span", { class: "token value css language-css" }, [
                            vue.createVNode("span", { class: "token property" }, "margin-top"),
                            vue.createVNode("span", { class: "token punctuation" }, ":"),
                            vue.createTextVNode(" 10px")
                          ]),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ])
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("props")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token literal-property property" }, "props"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token literal-property property" }, "name"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(" string"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token literal-property property" }, "type"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token function-variable function" }, "validator"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token parameter" }, "value"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "=>"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token comment" }, "//\u4ECE\u7236\u7EA7\u4F20\u5165\u7684 type\uFF0C\u5B83\u7684\u503C\u5FC5\u987B\u662F\u6307\u5B9A\u7684 'success', 'warning', 'danger'\u4E2D\u7684\u4E00\u4E2A\uFF0C\u5982\u679C\u4F20\u5165\u8FD9\u4E09\u4E2A\u4EE5\u5916\u7684\u503C\uFF0C\u90FD\u4F1A\u629B\u51FA\u4E00\u6761\u8B66\u544A"),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token string" }, "'success'"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'warning'"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'danger'"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "includes"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("value"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token literal-property property" }, "onchange"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token function-variable function" }, "type"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token function-variable function" }, "default"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token operator" }, "=>"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token literal-property property" }, "isVisible"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token literal-property property" }, "type"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode("Boolean"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "default"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token boolean" }, "false"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token literal-property property" }, "list"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token literal-property property" }, "type"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode("Array"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token function-variable function" }, "default"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token operator" }, "=>"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token comment" }, "//\u5BF9\u8C61\u6216\u6570\u7EC4\u9ED8\u8BA4\u503C\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u83B7\u53D6"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "19"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "20"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "21"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u4E2D\uFF0C\u53EF\u4EE5\u5F97\u51FA props \u53EF\u4EE5\u663E\u793A\u5B9A\u4E49\u4E00\u4E2A\u6216\u4E00\u4E2A\u4EE5\u4E0A\u7684\u6570\u636E\uFF0C\u5BF9\u4E8E\u63A5\u6536\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u5404\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\u3002</p><h3 id="_2-inheritattrs" tabindex="-1"><a class="header-anchor" href="#_2-inheritattrs" aria-hidden="true">#</a> 2.inheritAttrs</h3><p>\u8FD9\u662F 2.4.0 \u65B0\u589E\u7684\u4E00\u4E2A API\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7236\u4F5C\u7528\u57DF\u7684\u4E0D\u88AB\u8BA4\u4F5C props \u7684\u7279\u6027\u7ED1\u5B9A\u5C06\u4F1A\u201C\u56DE\u9000\u201D\u4E14\u4F5C\u4E3A\u666E\u901A\u7684 HTML \u7279\u6027\u5E94\u7528\u5728\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E0A\u3002\u53EF\u901A\u8FC7\u8BBE\u7F6E inheritAttrs \u4E3A false\uFF0C\u8FD9\u4E9B\u9ED8\u8BA4\u884C\u4E3A\u5C06\u4F1A\u88AB\u53BB\u6389\u3002\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u9009\u9879\u4E0D\u5F71\u54CD class \u548C style \u7ED1\u5B9A\u3002 \u4E0A\u4E2A\u4F8B\u4E2D\uFF0Ctitle \u5C5E\u6027\u6CA1\u6709\u5728\u5B50\u7EC4\u4EF6\u4E2D props \u4E2D\u58F0\u660E\uFF0C\u5C31\u4F1A\u9ED8\u8BA4\u6302\u5728\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E0A\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><h3 id="_3-data-\u4E0E-props-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-data-\u4E0E-props-\u533A\u522B" aria-hidden="true">#</a> 3.data \u4E0E props \u533A\u522B</h3><ol><li><p>\u76F8\u540C\u70B9\uFF1A\u4E24\u8005\u9009\u9879\u91CC\u90FD\u53EF\u4EE5\u5B58\u653E\u5404\u79CD\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5F53\u884C\u4E3A\u64CD\u4F5C\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u884C\u4E3A\u64CD\u4F5C\u6240\u7528\u5230\u548C\u6A21\u677F\u6240\u6E32\u67D3\u7684\u6570\u636E\u540C\u65F6\u90FD\u4F1A\u53D1\u751F\u540C\u6B65\u53D8\u5316\u3002</p></li><li><p>\u4E0D\u540C\u70B9\uFF1A data \u88AB\u79F0\u4E4B\u4E3A\u52A8\u6001\u6570\u636E\uFF0C\u5728\u5404\u81EA\u5B9E\u4F8B\u4E2D\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u968F\u610F\u6539\u53D8\u5B83\u7684\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784\uFF0C\u4E0D\u4F1A\u88AB\u4EFB\u4F55\u73AF\u5883\u6240\u5F71\u54CD\u3002 props \u88AB\u79F0\u4E4B\u4E3A\u9759\u6001\u6570\u636E\uFF0C\u5728\u5404\u81EA\u5B9E\u4F8B\u4E2D\uFF0C\u4E00\u65E6\u5728\u521D\u59CB\u5316\u88AB\u5B9A\u4E49\u597D\u7C7B\u578B\u65F6\uFF0C\u57FA\u4E8E Vue \u662F\u5355\u5411\u6570\u636E\u6D41\uFF0C\u5728\u6570\u636E\u4F20\u9012\u65F6\u59CB\u7EC8\u4E0D\u80FD\u6539\u53D8\u5B83\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u800C\u4E14\u4E0D\u5141\u8BB8\u5728\u5B50\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u64CD\u4F5C \u4F20\u9012\u8FC7\u6765\u7684 props \u6570\u636E\uFF0C\u800C\u662F\u9700\u8981\u901A\u8FC7\u522B\u7684\u624B\u6BB5\uFF0C\u6539\u53D8\u4F20\u9012\u6E90\u4E2D\u7684\u6570\u636E\u3002</p></li></ol><h3 id="_4-\u5355\u5411\u6570\u636E\u6D41" tabindex="-1"><a class="header-anchor" href="#_4-\u5355\u5411\u6570\u636E\u6D41" aria-hidden="true">#</a> 4.\u5355\u5411\u6570\u636E\u6D41</h3><p>\u8FD9\u4E2A\u6982\u5FF5\u51FA\u73B0\u5728\u7EC4\u4EF6\u901A\u4FE1\u3002props \u7684\u6570\u636E\u90FD\u662F\u901A\u8FC7\u7236\u7EC4\u4EF6\u6216\u8005\u66F4\u9AD8\u5C42\u7EA7\u7684\u7EC4\u4EF6\u6570\u636E\u6216\u8005\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u8FDB\u884C\u4F20\u9012\u7684\uFF0C\u4E0D\u5141\u8BB8\u76F4\u63A5\u64CD\u4F5C\u6539\u53D8\u5404\u81EA\u5B9E\u4F8B\u4E2D\u7684 props \u6570\u636E\uFF0C\u800C\u662F\u9700\u8981\u901A\u8FC7\u522B\u7684\u624B\u6BB5\uFF0C\u6539\u53D8\u4F20\u9012\u6E90\u4E2D\u7684\u6570\u636E\u3002\u90A3\u5982\u679C\u6709\u65F6\u5019\u6211\u4EEC\u60F3\u4FEE\u6539\u4F20\u9012\u8FC7\u6765\u7684 prop,\u6709\u54EA\u4E9B\u529E\u6CD5\u5462?</p><ol><li><p>\u65B9\u6CD5 1 \u8FC7\u6E21\u5230 data \u9009\u9879\u4E2D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5728\u5B50\u7EC4\u4EF6\u7684 data \u4E2D\u62F7\u8D1D\u4E00\u4EFD prop\uFF0Cdata \u662F\u53EF\u4EE5\u4FEE\u6539\u7684</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currentType</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728 data \u9009\u9879\u91CC\u901A\u8FC7 currentType \u63A5\u6536 props \u4E2D type \u6570\u636E\uFF0C\u76F8\u5F53\u4E8E\u5BF9 currentType= type \u8FDB\u884C\u4E00\u4E2A\u8D4B\u503C\u64CD\u4F5C\uFF0C\u4E0D\u4EC5\u62FF\u5230\u4E86 currentType \u7684\u6570\u636E\uFF0C\u800C\u4E14\u4E5F\u53EF\u4EE5\u6539\u53D8 currentType \u6570\u636E\u3002</p></li><li><p>\u65B9\u6CD5 2\uFF1A\u5229\u7528\u8BA1\u7B97\u5C5E\u6027</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">normalizedType</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4EE5\u4E0A\u4E24\u79CD\u65B9\u6CD5\u867D\u53EF\u4EE5\u5728\u5B50\u7EC4\u4EF6\u95F4\u63A5\u4FEE\u6539 props \u7684\u503C\uFF0C\u4F46\u5982\u679C\u5B50\u7EC4\u4EF6\u60F3\u4FEE\u6539\u6570\u636E\u5E76\u4E14\u540C\u6B65\u66F4\u65B0\u5230\u7236\u7EC4\u4EF6\uFF0C\u5374\u65E0\u6D4E\u4E8E\u4E8B\u3002\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u9700\u8981\u5BF9\u4E00\u4E2A prop \u8FDB\u884C\u300E\u53CC\u5411\u7ED1\u5B9A\u300F\uFF0C\u6B64\u65F6\u5C31\u63A8\u8350\u4EE5\u4E0B\u8FD9\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><ol start="3"><li>\u65B9\u6CD5 3\uFF1A\u4F7F\u7528.sync</li></ol>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue ext-vue line-numbers-mode"${_scopeId2}><pre class="language-vue"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>hello<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u7236\u7EC4\u4EF6msg\uFF1A{{msg}}<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u7236\u7EC4\u4EF6\u6570\u7EC4\uFF1A{{arr}}<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>p</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    &lt;button@click=&quot;show = true&quot;&gt;\u6253\u5F00model\u6846<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>button</span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>br</span><span class="token punctuation"${_scopeId2}>/&gt;</span></span>
    &lt;demo:show.sync=&quot;show&quot;:msg.sync=&quot;msg&quot;:arr=&quot;arr&quot;&gt;<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>demo</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token script"${_scopeId2}><span class="token language-javascript"${_scopeId2}>
  <span class="token keyword"${_scopeId2}>export</span> <span class="token keyword"${_scopeId2}>default</span><span class="token punctuation"${_scopeId2}>{</span>
    <span class="token literal-property property"${_scopeId2}>name</span><span class="token operator"${_scopeId2}>:</span><span class="token string"${_scopeId2}>&#39;Hello&#39;</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token literal-property property"${_scopeId2}>components</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>{</span>Demo<span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token function"${_scopeId2}>data</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>{</span>
      <span class="token keyword"${_scopeId2}>return</span><span class="token punctuation"${_scopeId2}>{</span>
        <span class="token literal-property property"${_scopeId2}>show</span><span class="token operator"${_scopeId2}>:</span><span class="token boolean"${_scopeId2}>false</span><span class="token punctuation"${_scopeId2}>,</span>
        <span class="token literal-property property"${_scopeId2}>msg</span><span class="token operator"${_scopeId2}>:</span><span class="token string"${_scopeId2}>&quot;\u6A21\u62DFmodel\u6846&quot;</span><span class="token punctuation"${_scopeId2}>,</span>
        <span class="token literal-property property"${_scopeId2}>arr</span><span class="token operator"${_scopeId2}>:</span><span class="token punctuation"${_scopeId2}>[</span><span class="token number"${_scopeId2}>1</span><span class="token punctuation"${_scopeId2}>,</span><span class="token number"${_scopeId2}>2</span><span class="token punctuation"${_scopeId2}>,</span><span class="token number"${_scopeId2}>3</span><span class="token punctuation"${_scopeId2}>]</span>
      <span class="token punctuation"${_scopeId2}>}</span>
    <span class="token punctuation"${_scopeId2}>}</span>
  <span class="token punctuation"${_scopeId2}>}</span>
</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}><span class="line-number"${_scopeId2}>19</span><br${_scopeId2}><span class="line-number"${_scopeId2}>20</span><br${_scopeId2}><span class="line-number"${_scopeId2}>21</span><br${_scopeId2}><span class="line-number"${_scopeId2}>22</span><br${_scopeId2}><span class="line-number"${_scopeId2}>23</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-vue" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("hello"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u7236\u7EC4\u4EF6msg\uFF1A{{msg}}"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u7236\u7EC4\u4EF6\u6570\u7EC4\uFF1A{{arr}}"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("p")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode('\n    <button@click="show = true">\u6253\u5F00model\u6846'),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("br")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      vue.createTextVNode('\n    <demo:show.sync="show":msg.sync="msg":arr="arr">'),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("demo")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token script" }, [
                        vue.createVNode("span", { class: "token language-javascript" }, [
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token keyword" }, "export"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token keyword" }, "default"),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token literal-property property" }, "name"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createVNode("span", { class: "token string" }, "'Hello'"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token literal-property property" }, "components"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("Demo"),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token function" }, "data"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token keyword" }, "return"),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n        "),
                          vue.createVNode("span", { class: "token literal-property property" }, "show"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createVNode("span", { class: "token boolean" }, "false"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n        "),
                          vue.createVNode("span", { class: "token literal-property property" }, "msg"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createVNode("span", { class: "token string" }, '"\u6A21\u62DFmodel\u6846"'),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n        "),
                          vue.createVNode("span", { class: "token literal-property property" }, "arr"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createVNode("span", { class: "token punctuation" }, "["),
                          vue.createVNode("span", { class: "token number" }, "1"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createVNode("span", { class: "token number" }, "2"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createVNode("span", { class: "token number" }, "3"),
                          vue.createVNode("span", { class: "token punctuation" }, "]"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createTextVNode("\n")
                        ])
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "19"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "20"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "21"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "22"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "23"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue ext-vue line-numbers-mode"${_scopeId2}><pre class="language-vue"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span> <span class="token attr-name"${_scopeId2}>v-if</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>show<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>border<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u5B50\u7EC4\u4EF6msg:{{ msg }}<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u5B50\u7EC4\u4EF6\u6570\u636E:{{ arr }}<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>button</span> <span class="token attr-name"${_scopeId2}>@click</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>closeModel<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u5173\u95EDmodel\u6846<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>button</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>button</span> <span class="token attr-name"${_scopeId2}>@click</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>$emit(<span class="token punctuation"${_scopeId2}>&#39;</span>update:msg<span class="token punctuation"${_scopeId2}>&#39;</span>, <span class="token punctuation"${_scopeId2}>&#39;</span>\u6DE6<span class="token punctuation"${_scopeId2}>&#39;</span>)<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u6539\u53D8\u6587\u5B57<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>button</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>button</span> <span class="token attr-name"${_scopeId2}>@click</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>arr.push(<span class="token punctuation"${_scopeId2}>&#39;</span>\u524D\u7AEF<span class="token punctuation"${_scopeId2}>&#39;</span>)<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u6539\u53D8\u6570\u7EC4<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>button</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token script"${_scopeId2}><span class="token language-javascript"${_scopeId2}>
<span class="token keyword"${_scopeId2}>export</span> <span class="token keyword"${_scopeId2}>default</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token literal-property property"${_scopeId2}>props</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token literal-property property"${_scopeId2}>msg</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span> <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span> String <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token literal-property property"${_scopeId2}>show</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span> <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span> Boolean <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token literal-property property"${_scopeId2}>arr</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span> <span class="token literal-property property"${_scopeId2}>type</span><span class="token operator"${_scopeId2}>:</span> Array <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token literal-property property"${_scopeId2}>methods</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token function"${_scopeId2}>closeModel</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token punctuation"${_scopeId2}>{</span>
      <span class="token keyword"${_scopeId2}>this</span><span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>$emit</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;update:show&#39;</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token boolean"${_scopeId2}>false</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
    <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
<span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}><span class="line-number"${_scopeId2}>19</span><br${_scopeId2}><span class="line-number"${_scopeId2}>20</span><br${_scopeId2}><span class="line-number"${_scopeId2}>21</span><br${_scopeId2}><span class="line-number"${_scopeId2}>22</span><br${_scopeId2}><span class="line-number"${_scopeId2}>23</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-vue" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "v-if"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("show"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("border"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u5B50\u7EC4\u4EF6msg:{{ msg }}"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u5B50\u7EC4\u4EF6\u6570\u636E:{{ arr }}"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "@click"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("closeModel"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u5173\u95EDmodel\u6846"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "@click"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("$emit("),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("update:msg"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(", "),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("\u6DE6"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(")"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u6539\u53D8\u6587\u5B57"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "@click"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("arr.push("),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("\u524D\u7AEF"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(")"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u6539\u53D8\u6570\u7EC4"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token script" }, [
                        vue.createVNode("span", { class: "token language-javascript" }, [
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token keyword" }, "export"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token keyword" }, "default"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token literal-property property" }, "props"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token literal-property property" }, "msg"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token literal-property property" }, "type"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(" String "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token literal-property property" }, "show"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token literal-property property" }, "type"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(" Boolean "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token literal-property property" }, "arr"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token literal-property property" }, "type"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(" Array "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token literal-property property" }, "methods"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token function" }, "closeModel"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token keyword" }, "this"),
                          vue.createVNode("span", { class: "token punctuation" }, "."),
                          vue.createVNode("span", { class: "token function" }, "$emit"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token string" }, "'update:show'"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token boolean" }, "false"),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n")
                        ])
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "19"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "20"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "21"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "22"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "23"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-vue" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("hello"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u7236\u7EC4\u4EF6msg\uFF1A{{msg}}"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u7236\u7EC4\u4EF6\u6570\u7EC4\uFF1A{{arr}}"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("p")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode('\n    <button@click="show = true">\u6253\u5F00model\u6846'),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("br")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    vue.createTextVNode('\n    <demo:show.sync="show":msg.sync="msg":arr="arr">'),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("demo")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token script" }, [
                      vue.createVNode("span", { class: "token language-javascript" }, [
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token keyword" }, "export"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token keyword" }, "default"),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token literal-property property" }, "name"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createVNode("span", { class: "token string" }, "'Hello'"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token literal-property property" }, "components"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("Demo"),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token function" }, "data"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token keyword" }, "return"),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n        "),
                        vue.createVNode("span", { class: "token literal-property property" }, "show"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createVNode("span", { class: "token boolean" }, "false"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n        "),
                        vue.createVNode("span", { class: "token literal-property property" }, "msg"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createVNode("span", { class: "token string" }, '"\u6A21\u62DFmodel\u6846"'),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n        "),
                        vue.createVNode("span", { class: "token literal-property property" }, "arr"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createVNode("span", { class: "token punctuation" }, "["),
                        vue.createVNode("span", { class: "token number" }, "1"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createVNode("span", { class: "token number" }, "2"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createVNode("span", { class: "token number" }, "3"),
                        vue.createVNode("span", { class: "token punctuation" }, "]"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createTextVNode("\n")
                      ])
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "19"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "20"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "21"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "22"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "23"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-vue" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "v-if"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("show"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("border"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u5B50\u7EC4\u4EF6msg:{{ msg }}"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u5B50\u7EC4\u4EF6\u6570\u636E:{{ arr }}"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "@click"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("closeModel"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u5173\u95EDmodel\u6846"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "@click"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("$emit("),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("update:msg"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(", "),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("\u6DE6"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(")"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u6539\u53D8\u6587\u5B57"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "@click"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("arr.push("),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("\u524D\u7AEF"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(")"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u6539\u53D8\u6570\u7EC4"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token script" }, [
                      vue.createVNode("span", { class: "token language-javascript" }, [
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token keyword" }, "export"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token keyword" }, "default"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token literal-property property" }, "props"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token literal-property property" }, "msg"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "type"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(" String "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token literal-property property" }, "show"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "type"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(" Boolean "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token literal-property property" }, "arr"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "type"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(" Array "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token literal-property property" }, "methods"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token function" }, "closeModel"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token keyword" }, "this"),
                        vue.createVNode("span", { class: "token punctuation" }, "."),
                        vue.createVNode("span", { class: "token function" }, "$emit"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token string" }, "'update:show'"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token boolean" }, "false"),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n")
                      ])
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "19"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "20"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "21"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "22"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "23"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6 props \u91CC\u4F20\u9012\u4E86 msg \u548C show \u4E24\u4E2A\u503C\uFF0C\u90FD\u7528\u4E86.sync \u4FEE\u9970\u7B26\uFF0C\u8FDB\u884C\u53CC\u5411\u7ED1\u5B9A\u3002 \u4E0D\u8FC7.sync \u867D\u597D\uFF0C\u4F46\u4E5F\u6709\u9650\u5236\uFF0C\u6BD4\u5982\uFF1A 1\uFF09\u4E0D\u80FD\u548C\u8868\u8FBE\u5F0F\u4E00\u8D77\u4F7F\u7528<code>\u5982 v-bind:title.sync=&quot;doc.title + &#39;!&#39;&quot;\u662F\u65E0\u6548\u7684</code>\uFF1B<br> 2\uFF09\u4E0D\u80FD\u7528\u5728\u5B57\u9762\u91CF\u5BF9\u8C61\u4E0A<code>\u5982 v-bind.sync=&quot;{ title: doc.title }&quot;\u662F\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u7684</code>\u3002</p><ol start="4"><li>\u65B9\u6CD5 4\uFF1A \u5C06\u7236\u7EC4\u4EF6\u4E2D\u7684\u6570\u636E\u5305\u88C5\u6210\u5BF9\u8C61\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6 \u8FD9\u662F\u56E0\u4E3A\u5728 JavaScript \u4E2D\u5BF9\u8C61\u548C\u6570\u7EC4\u662F\u901A\u8FC7\u5F15\u7528\u4F20\u5165\u7684\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u4E00\u4E2A\u6570\u7EC4\u6216\u5BF9\u8C61\u7C7B\u578B\u7684 prop \u6765\u8BF4\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u6539\u53D8\u8FD9\u4E2A\u5BF9\u8C61\u6216\u6570\u7EC4\u672C\u8EAB\u5C06\u4F1A\u5F71\u54CD\u5230\u7236\u7EC4\u4EF6\u7684\u72B6\u6001\u3002\u6BD4\u5982\u4E0A\u4F8B\u4E2D\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u7EC4 arr,\u4ECE\u800C\u6539\u53D8\u7236\u7EC4\u4EF6\u7684\u72B6\u6001\u3002</li></ol><h3 id="_5-\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E\u65F6\u52A0\u548C\u4E0D\u52A0-v-bind" tabindex="-1"><a class="header-anchor" href="#_5-\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E\u65F6\u52A0\u548C\u4E0D\u52A0-v-bind" aria-hidden="true">#</a> 5.\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E\u65F6\u52A0\u548C\u4E0D\u52A0 v-bind\uFF1F</h3><p>\u90A3\u5982\u679C\u60F3\u901A\u8FC7\u5B57\u9762\u91CF\u8FDB\u884C\u6570\u636E\u4F20\u9012\u65F6\uFF0C\u5982\u679C\u60F3\u4F20\u9012\u975E String \u7C7B\u578B\uFF0C\u5FC5\u987B props \u540D\u524D\u8981\u52A0\u4E0A v-bind\uFF0C\u5185\u90E8\u901A\u8FC7\u5B9E\u4F8B\u5BFB\u627E\uFF0C\u5982\u679C\u5B9E\u4F8B\u65B9\u6CA1\u6709\u6B64\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>:msg <span class="token operator">=</span> <span class="token string">&#39;11111&#39;</span> //Number
:msg <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span> //Bootlean
:msg <span class="token operator">=</span><span class="token string">&#39;()=&gt;{console.log(1)}&#39;</span>//Function
:msg <span class="token operator">=</span> <span class="token string">&#39;{a:1}&#39;</span> //Object
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8B\u4EF6</h2><h3 id="_1-\u4E8B\u4EF6\u9A71\u52A8\u4E0E\u6570\u636E\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-\u4E8B\u4EF6\u9A71\u52A8\u4E0E\u6570\u636E\u9A71\u52A8" aria-hidden="true">#</a> 1.\u4E8B\u4EF6\u9A71\u52A8\u4E0E\u6570\u636E\u9A71\u52A8</h3><p>\u7528\u539F\u751F JavaScript \u4E8B\u4EF6\u9A71\u52A8\u901A\u5E38\u662F\u8FD9\u6837\u7684\u6D41\u7A0B\uFF1A</p><ol><li>\u5148\u901A\u8FC7\u7279\u5B9A\u7684\u9009\u62E9\u5668\u67E5\u627E\u5230\u9700\u8981\u64CD\u4F5C\u7684\u8282\u70B9 -&gt; \u7ED9\u8282\u70B9\u6DFB\u52A0\u76F8\u5E94\u7684\u4E8B\u4EF6\u76D1\u542C</li><li>\u7136\u540E\u7528\u6237\u6267\u884C\u67D0\u4E8B\u4EF6\uFF08\u70B9\u51FB\uFF0C\u8F93\u5165\uFF0C\u540E\u9000\u7B49\u7B49\uFF09 -&gt; \u8C03\u7528 JavaScript \u6765\u4FEE\u6539\u8282\u70B9</li></ol><p>\u8FD9\u79CD\u6A21\u5F0F\u5BF9\u4E1A\u52A1\u6765\u8BF4\u662F\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u4ECE\u5F00\u53D1\u6210\u672C\u548C\u6548\u7387\u6765\u8BF4\u4F1A\u6BD4\u8F83\u4E0D\u7406\u60F3\uFF0C\u7279\u522B\u662F\u5728\u4E1A\u52A1\u7CFB\u7EDF\u8D8A\u6765\u8D8A\u5E9E\u5927\u7684\u65F6\u5019\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u627E\u8282\u70B9\u548C\u4FEE\u6539\u8282\u70B9\u8FD9\u4EF6\u4E8B\uFF0C\u6548\u7387\u672C\u8EAB\u5C31\u5F88\u4F4E\uFF0C\u56E0\u6B64\u51FA\u73B0\u4E86\u6570\u636E\u9A71\u52A8\u6A21\u5F0F\u3002</p><p>Vue \u7684\u4E00\u4E2A\u6838\u5FC3\u601D\u60F3\u662F\u6570\u636E\u9A71\u52A8\u3002\u6240\u8C13\u6570\u636E\u9A71\u52A8\uFF0C\u662F\u6307\u89C6\u56FE\u662F\u7531\u6570\u636E\u9A71\u52A8\u751F\u6210\u7684\uFF0C\u6211\u4EEC\u5BF9\u89C6\u56FE\u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u76F4\u63A5\u64CD\u4F5C DOM\uFF0C\u800C\u662F\u901A\u8FC7\u4FEE\u6539\u6570\u636E,\u5176\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><p>\u7528\u6237\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C -&gt; \u53CD\u9988\u5230 VM \u5904\u7406\uFF08\u53EF\u4EE5\u5BFC\u81F4 Model \u53D8\u52A8\uFF09 -&gt; VM \u5C42\u6539\u53D8\uFF0C\u901A\u8FC7\u7ED1\u5B9A\u5173\u7CFB\u76F4\u63A5\u66F4\u65B0\u9875\u9762\u5BF9\u5E94\u4F4D\u7F6E\u7684\u6570\u636E</p><p>\u53EF\u4EE5\u7B80\u5355\u5730\u7406\u89E3\uFF1A\u6570\u636E\u9A71\u52A8\u4E0D\u662F\u64CD\u4F5C\u8282\u70B9\u7684\uFF0C\u800C\u662F\u901A\u8FC7\u865A\u62DF\u7684\u62BD\u8C61\u6570\u636E\u5C42\u6765\u76F4\u63A5\u66F4\u65B0\u9875\u9762\u3002\u4E3B\u8981\u5C31\u662F\u56E0\u4E3A\u8FD9\u4E00\u70B9\uFF0C\u6570\u636E\u9A71\u52A8\u6846\u67B6\u624D\u5F97\u4EE5\u6709\u8F83\u5FEB\u7684\u8FD0\u884C\u901F\u5EA6\uFF08\u56E0\u4E3A\u4E0D\u9700\u8981\u53BB\u6298\u817E\u8282\u70B9\uFF09\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5E94\u7528\u5230\u5927\u578B\u9879\u76EE\u3002</p><h3 id="_2-\u4FEE\u9970\u7B26\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u9970\u7B26\u4E8B\u4EF6" aria-hidden="true">#</a> 2.\u4FEE\u9970\u7B26\u4E8B\u4EF6</h3><p>Vue \u4E8B\u4EF6\u5206\u4E3A\u666E\u901A\u4E8B\u4EF6\u548C\u4FEE\u9970\u7B26\u4E8B\u4EF6\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E3B\u8981\u4ECB\u7ECD\u4FEE\u9970\u7B26\u4E8B\u4EF6\u3002</p><ol><li>\u8868\u5355\u4FEE\u9970\u7B26\uFF1Atrim\u3001lazy\u3001number</li><li>\u4E8B\u4EF6\u4FEE\u9970\u7B26\uFF1A</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u963B\u6B62\u5355\u51FB\u4E8B\u4EF6\u7EE7\u7EED\u4F20\u64AD --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThis<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u63D0\u4EA4\u4E8B\u4EF6\u4E0D\u518D\u91CD\u8F7D\u9875\u9762 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name"><span class="token namespace">v-on:</span>submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onSubmit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u4FEE\u9970\u7B26\u53EF\u4EE5\u4E32\u8054 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click.stop.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doThat<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u7ED9\u6B64\u6309\u94AE\u7ED1\u5B9A\u4E00\u4E2A\u539F\u751F\u7684 click \u4E8B\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toDo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><h3 id="_1-\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#_1-\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> 1.\u4F5C\u7528\u57DF\u63D2\u69FD</h3>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue ext-vue line-numbers-mode"${_scopeId2}><pre class="language-vue"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>toList<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>input</span> <span class="token attr-name"${_scopeId2}>v-model</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>info<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token attr-name"${_scopeId2}>type</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>text<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token punctuation"${_scopeId2}>/&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>button</span> <span class="token attr-name"${_scopeId2}>@click</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>addItem<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>\u6DFB\u52A0<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>button</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>ul</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>TodoItem</span> <span class="token attr-name"${_scopeId2}>v-for</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>(item, index) in listData<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token attr-name"${_scopeId2}>:key</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>index<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
        <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>template</span> <span class="token attr-name"${_scopeId2}><span class="token namespace"${_scopeId2}>v-slot:</span>item</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>itemProps<span class="token punctuation"${_scopeId2}>&quot;</span></span>
          <span class="token punctuation"${_scopeId2}>&gt;</span></span>// \u5176\u4E2DitemProps\u7684\u503C\u5C31\u662F\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u5BF9\u8C61
          <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>span</span>
            <span class="token attr-name"${_scopeId2}>:style</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>{
              fontSize: <span class="token punctuation"${_scopeId2}>&#39;</span>20px<span class="token punctuation"${_scopeId2}>&#39;</span>,
              color: itemProps.checked ? <span class="token punctuation"${_scopeId2}>&#39;</span>yellow<span class="token punctuation"${_scopeId2}>&#39;</span> : <span class="token punctuation"${_scopeId2}>&#39;</span>blue<span class="token punctuation"${_scopeId2}>&#39;</span>,
            }<span class="token punctuation"${_scopeId2}>&quot;</span></span>
          <span class="token punctuation"${_scopeId2}>&gt;</span></span>
            {{ item }}
          <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>span</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
        <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>TodoItem</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>ul</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>

<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token script"${_scopeId2}><span class="token language-javascript"${_scopeId2}>
<span class="token keyword"${_scopeId2}>import</span> TodoItem <span class="token keyword"${_scopeId2}>from</span> <span class="token string"${_scopeId2}>&#39;./TodoItem&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
<span class="token keyword"${_scopeId2}>export</span> <span class="token keyword"${_scopeId2}>default</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token literal-property property"${_scopeId2}>components</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    TodoItem<span class="token punctuation"${_scopeId2}>,</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token function"${_scopeId2}>data</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token keyword"${_scopeId2}>return</span> <span class="token punctuation"${_scopeId2}>{</span>
      <span class="token literal-property property"${_scopeId2}>info</span><span class="token operator"${_scopeId2}>:</span> <span class="token string"${_scopeId2}>&#39;&#39;</span><span class="token punctuation"${_scopeId2}>,</span>
      <span class="token literal-property property"${_scopeId2}>listData</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>[</span><span class="token punctuation"${_scopeId2}>]</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token literal-property property"${_scopeId2}>methods</span><span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token function"${_scopeId2}>addItem</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token punctuation"${_scopeId2}>{</span>
      <span class="token keyword"${_scopeId2}>this</span><span class="token punctuation"${_scopeId2}>.</span>listData<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>push</span><span class="token punctuation"${_scopeId2}>(</span><span class="token keyword"${_scopeId2}>this</span><span class="token punctuation"${_scopeId2}>.</span>info<span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
      <span class="token keyword"${_scopeId2}>this</span><span class="token punctuation"${_scopeId2}>.</span>info <span class="token operator"${_scopeId2}>=</span> <span class="token string"${_scopeId2}>&#39;&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
    <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
<span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}><span class="line-number"${_scopeId2}>19</span><br${_scopeId2}><span class="line-number"${_scopeId2}>20</span><br${_scopeId2}><span class="line-number"${_scopeId2}>21</span><br${_scopeId2}><span class="line-number"${_scopeId2}>22</span><br${_scopeId2}><span class="line-number"${_scopeId2}>23</span><br${_scopeId2}><span class="line-number"${_scopeId2}>24</span><br${_scopeId2}><span class="line-number"${_scopeId2}>25</span><br${_scopeId2}><span class="line-number"${_scopeId2}>26</span><br${_scopeId2}><span class="line-number"${_scopeId2}>27</span><br${_scopeId2}><span class="line-number"${_scopeId2}>28</span><br${_scopeId2}><span class="line-number"${_scopeId2}>29</span><br${_scopeId2}><span class="line-number"${_scopeId2}>30</span><br${_scopeId2}><span class="line-number"${_scopeId2}>31</span><br${_scopeId2}><span class="line-number"${_scopeId2}>32</span><br${_scopeId2}><span class="line-number"${_scopeId2}>33</span><br${_scopeId2}><span class="line-number"${_scopeId2}>34</span><br${_scopeId2}><span class="line-number"${_scopeId2}>35</span><br${_scopeId2}><span class="line-number"${_scopeId2}>36</span><br${_scopeId2}><span class="line-number"${_scopeId2}>37</span><br${_scopeId2}><span class="line-number"${_scopeId2}>38</span><br${_scopeId2}><span class="line-number"${_scopeId2}>39</span><br${_scopeId2}><span class="line-number"${_scopeId2}>40</span><br${_scopeId2}><span class="line-number"${_scopeId2}>41</span><br${_scopeId2}><span class="line-number"${_scopeId2}>42</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-vue" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("toList"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("input")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "v-model"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("info"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "type"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("text"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "@click"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("addItem"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\u6DFB\u52A0"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("button")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("TodoItem")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "v-for"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("(item, index) in listData"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, ":key"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("index"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n        "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, [
                          vue.createVNode("span", { class: "token namespace" }, "v-slot:"),
                          vue.createTextVNode("item")
                        ]),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("itemProps"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n          "),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("// \u5176\u4E2DitemProps\u7684\u503C\u5C31\u662F\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u5BF9\u8C61\n          "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("span")
                        ]),
                        vue.createTextVNode("\n            "),
                        vue.createVNode("span", { class: "token attr-name" }, ":style"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("{\n              fontSize: "),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("20px"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(",\n              color: itemProps.checked ? "),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("yellow"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(" : "),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode("blue"),
                          vue.createVNode("span", { class: "token punctuation" }, "'"),
                          vue.createTextVNode(",\n            }"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode("\n          "),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n            {{ item }}\n          "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("span")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n        "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("TodoItem")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("ul")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token script" }, [
                        vue.createVNode("span", { class: "token language-javascript" }, [
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token keyword" }, "import"),
                          vue.createTextVNode(" TodoItem "),
                          vue.createVNode("span", { class: "token keyword" }, "from"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token string" }, "'./TodoItem'"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token keyword" }, "export"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token keyword" }, "default"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token literal-property property" }, "components"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    TodoItem"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token function" }, "data"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token keyword" }, "return"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token literal-property property" }, "info"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token string" }, "''"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token literal-property property" }, "listData"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "["),
                          vue.createVNode("span", { class: "token punctuation" }, "]"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token literal-property property" }, "methods"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token function" }, "addItem"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token keyword" }, "this"),
                          vue.createVNode("span", { class: "token punctuation" }, "."),
                          vue.createTextVNode("listData"),
                          vue.createVNode("span", { class: "token punctuation" }, "."),
                          vue.createVNode("span", { class: "token function" }, "push"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token keyword" }, "this"),
                          vue.createVNode("span", { class: "token punctuation" }, "."),
                          vue.createTextVNode("info"),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token keyword" }, "this"),
                          vue.createVNode("span", { class: "token punctuation" }, "."),
                          vue.createTextVNode("info "),
                          vue.createVNode("span", { class: "token operator" }, "="),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token string" }, "''"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n")
                        ])
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "19"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "20"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "21"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "22"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "23"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "24"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "25"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "26"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "27"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "28"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "29"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "30"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "31"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "32"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "33"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "34"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "35"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "36"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "37"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "38"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "39"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "40"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "41"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "42"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-vue ext-vue line-numbers-mode"${_scopeId2}><pre class="language-vue"${_scopeId2}><code${_scopeId2}><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>li</span> <span class="token attr-name"${_scopeId2}>class</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>item<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>input</span> <span class="token attr-name"${_scopeId2}>v-model</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>checked<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token attr-name"${_scopeId2}>type</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>checkbox<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token punctuation"${_scopeId2}>/&gt;</span></span>
      <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>slot</span> <span class="token attr-name"${_scopeId2}>name</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>item<span class="token punctuation"${_scopeId2}>&quot;</span></span> <span class="token attr-name"${_scopeId2}>:checked</span><span class="token attr-value"${_scopeId2}><span class="token punctuation attr-equals"${_scopeId2}>=</span><span class="token punctuation"${_scopeId2}>&quot;</span>checked<span class="token punctuation"${_scopeId2}>&quot;</span></span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>slot</span><span class="token punctuation"${_scopeId2}>&gt;</span></span> //\u5C06checked\u7684\u503C\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6
    <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>li</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
  <span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>div</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>template</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>

<span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span><span class="token script"${_scopeId2}><span class="token language-javascript"${_scopeId2}>
<span class="token keyword"${_scopeId2}>export</span> <span class="token keyword"${_scopeId2}>default</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token function"${_scopeId2}>data</span><span class="token punctuation"${_scopeId2}>(</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token keyword"${_scopeId2}>return</span> <span class="token punctuation"${_scopeId2}>{</span>
      <span class="token literal-property property"${_scopeId2}>checked</span><span class="token operator"${_scopeId2}>:</span> <span class="token boolean"${_scopeId2}>false</span><span class="token punctuation"${_scopeId2}>,</span>
    <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
<span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>;</span>
</span></span><span class="token tag"${_scopeId2}><span class="token tag"${_scopeId2}><span class="token punctuation"${_scopeId2}>&lt;/</span>script</span><span class="token punctuation"${_scopeId2}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-vue" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "class"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("item"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("input")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "v-model"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("checked"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "type"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("checkbox"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "/>")
                      ]),
                      vue.createTextVNode("\n      "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("slot")
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, "name"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("item"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token attr-name" }, ":checked"),
                        vue.createVNode("span", { class: "token attr-value" }, [
                          vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                          vue.createVNode("span", { class: "token punctuation" }, '"'),
                          vue.createTextVNode("checked"),
                          vue.createVNode("span", { class: "token punctuation" }, '"')
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("slot")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode(" //\u5C06checked\u7684\u503C\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\n    "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("li")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("div")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("template")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "<"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createVNode("span", { class: "token script" }, [
                        vue.createVNode("span", { class: "token language-javascript" }, [
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token keyword" }, "export"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token keyword" }, "default"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token function" }, "data"),
                          vue.createVNode("span", { class: "token punctuation" }, "("),
                          vue.createVNode("span", { class: "token punctuation" }, ")"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token keyword" }, "return"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token punctuation" }, "{"),
                          vue.createTextVNode("\n      "),
                          vue.createVNode("span", { class: "token literal-property property" }, "checked"),
                          vue.createVNode("span", { class: "token operator" }, ":"),
                          vue.createTextVNode(),
                          vue.createVNode("span", { class: "token boolean" }, "false"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n    "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n  "),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ","),
                          vue.createTextVNode("\n"),
                          vue.createVNode("span", { class: "token punctuation" }, "}"),
                          vue.createVNode("span", { class: "token punctuation" }, ";"),
                          vue.createTextVNode("\n")
                        ])
                      ]),
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token tag" }, [
                          vue.createVNode("span", { class: "token punctuation" }, "</"),
                          vue.createTextVNode("script")
                        ]),
                        vue.createVNode("span", { class: "token punctuation" }, ">")
                      ]),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "\u7236\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-vue" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("toList"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("input")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "v-model"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("info"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "type"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("text"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "@click"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("addItem"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\u6DFB\u52A0"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("button")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("TodoItem")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "v-for"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("(item, index) in listData"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, ":key"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("index"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, [
                        vue.createVNode("span", { class: "token namespace" }, "v-slot:"),
                        vue.createTextVNode("item")
                      ]),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("itemProps"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n          "),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("// \u5176\u4E2DitemProps\u7684\u503C\u5C31\u662F\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u5BF9\u8C61\n          "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("span")
                      ]),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token attr-name" }, ":style"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("{\n              fontSize: "),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("20px"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(",\n              color: itemProps.checked ? "),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("yellow"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(" : "),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode("blue"),
                        vue.createVNode("span", { class: "token punctuation" }, "'"),
                        vue.createTextVNode(",\n            }"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode("\n          "),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n            {{ item }}\n          "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("span")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("TodoItem")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("ul")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token script" }, [
                      vue.createVNode("span", { class: "token language-javascript" }, [
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token keyword" }, "import"),
                        vue.createTextVNode(" TodoItem "),
                        vue.createVNode("span", { class: "token keyword" }, "from"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'./TodoItem'"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token keyword" }, "export"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token keyword" }, "default"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token literal-property property" }, "components"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    TodoItem"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token function" }, "data"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token keyword" }, "return"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token literal-property property" }, "info"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "''"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token literal-property property" }, "listData"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "["),
                        vue.createVNode("span", { class: "token punctuation" }, "]"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token literal-property property" }, "methods"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token function" }, "addItem"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token keyword" }, "this"),
                        vue.createVNode("span", { class: "token punctuation" }, "."),
                        vue.createTextVNode("listData"),
                        vue.createVNode("span", { class: "token punctuation" }, "."),
                        vue.createVNode("span", { class: "token function" }, "push"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token keyword" }, "this"),
                        vue.createVNode("span", { class: "token punctuation" }, "."),
                        vue.createTextVNode("info"),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token keyword" }, "this"),
                        vue.createVNode("span", { class: "token punctuation" }, "."),
                        vue.createTextVNode("info "),
                        vue.createVNode("span", { class: "token operator" }, "="),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "''"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n")
                      ])
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "19"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "20"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "21"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "22"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "23"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "24"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "25"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "26"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "27"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "28"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "29"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "30"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "31"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "32"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "33"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "34"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "35"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "36"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "37"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "38"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "39"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "40"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "41"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "42"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "\u5B50\u7EC4\u4EF6" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-vue ext-vue line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-vue" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("item"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("input")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "v-model"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("checked"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "type"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("checkbox"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "/>")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("slot")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "name"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("item"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, ":checked"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("checked"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("slot")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode(" //\u5C06checked\u7684\u503C\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("li")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token script" }, [
                      vue.createVNode("span", { class: "token language-javascript" }, [
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token keyword" }, "export"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token keyword" }, "default"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token function" }, "data"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token keyword" }, "return"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      "),
                        vue.createVNode("span", { class: "token literal-property property" }, "checked"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token boolean" }, "false"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ";"),
                        vue.createTextVNode("\n")
                      ])
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", {
                  class: "line-numbers",
                  "aria-hidden": "true"
                }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vue/theCore.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var theCore_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$3], ["__file", "theCore.html.vue"]]);
var theCore_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": theCore_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.ssrRenderAttrs(_attrs)}>second page in Vue</p>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vue/vue3.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var vue3_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$2], ["__file", "vue3.html.vue"]]);
var vue3_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vue3_html$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1], ["__file", "404.html.vue"]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html$1
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = {
  "key": "v-ed8c81f4",
  "path": "/guide/introduce.html",
  "title": "\u6211\u7684\u524D\u7AEF\u4E4B\u8DEF",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u6211\u7684\u524D\u7AEF\u4E4B\u8DEF",
    "date": "2022/05/24"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Some of my projects",
      "slug": "some-of-my-projects",
      "children": [
        {
          "level": 3,
          "title": "vue3.0+TypeScript+Vite \u8BBE\u5907\u7BA1\u7406\u5E73\u53F0",
          "slug": "vue3-0-typescript-vite-\u8BBE\u5907\u7BA1\u7406\u5E73\u53F0",
          "children": []
        },
        {
          "level": 3,
          "title": "vue2.0+elementUI+webpack \u5237\u8138\u6D4B\u6E29\u7B7E\u5230\u5927\u5C4F",
          "slug": "vue2-0-elementui-webpack-\u5237\u8138\u6D4B\u6E29\u7B7E\u5230\u5927\u5C4F",
          "children": []
        },
        {
          "level": 3,
          "title": "web \u7F51\u7AD9",
          "slug": "web-\u7F51\u7AD9",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5B89\u5353\u5E73\u677F",
          "slug": "\u5B89\u5353\u5E73\u677F",
          "children": []
        },
        {
          "level": 3,
          "title": "cocoscreator2D+Typescript \u5C0F\u6E38\u620F",
          "slug": "cocoscreator2d-typescript-\u5C0F\u6E38\u620F",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/introduce.md"
};
var introduce_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = {
  "key": "v-470ada5b",
  "path": "/guide/mycat.html",
  "title": "\u82B1\u82B1\u662F\u4E00\u53EA\u732B",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u82B1\u82B1\u662F\u4E00\u53EA\u732B",
    "date": "2022/06/08"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "\u672C\u55B5\u51FA\u751F\u4E4B\u65F6\uFF0C\u590F\u672B\u521D\u79CB\u3002",
      "slug": "\u672C\u55B5\u51FA\u751F\u4E4B\u65F6-\u590F\u672B\u521D\u79CB\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u672C\u55B5\u6BD5\u4E1A\u4E4B\u65F6\uFF0C\u5B66\u5BCC\u4E94\u8F66\u3002",
      "slug": "\u672C\u55B5\u6BD5\u4E1A\u4E4B\u65F6-\u5B66\u5BCC\u4E94\u8F66\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u672C\u55B5\u521D\u5165\u793E\u4F1A\uFF0C\u4E0D\u5E78\u88AB\u7EDD\u80B2\u3002",
      "slug": "\u672C\u55B5\u521D\u5165\u793E\u4F1A-\u4E0D\u5E78\u88AB\u7EDD\u80B2\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u672C\u55B5\u5149\u4E34\u5F71\u820D\uFF0C\u84EC\u835C\u751F\u8F89\u3002",
      "slug": "\u672C\u55B5\u5149\u4E34\u5F71\u820D-\u84EC\u835C\u751F\u8F89\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u672C\u55B5\u4E0E\u72EE\u5B50\u540C\u5C5E\u55B5\u79D1\uFF0C\u5A01\u98CE\u51CC\u51CC\u3002",
      "slug": "\u672C\u55B5\u4E0E\u72EE\u5B50\u540C\u5C5E\u55B5\u79D1-\u5A01\u98CE\u51CC\u51CC\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u672C\u55B5\u4E43\u5927\u6A58\u7C7B\u76EE\uFF0C\u5929\u9AD8\u9A6C\u80A5\uFF0C\u8001\u9955\u55B5\u738B\u3002",
      "slug": "\u672C\u55B5\u4E43\u5927\u6A58\u7C7B\u76EE-\u5929\u9AD8\u9A6C\u80A5-\u8001\u9955\u55B5\u738B\u3002",
      "children": []
    },
    {
      "level": 3,
      "title": "\u4ECA\u65E5\u672C\u55B5\u81EA\u4F20\u5C31\u5199\u5230\u8FD9\u91CC\uFF0C\u6765\u65E5\u65B9\u957F\u3002",
      "slug": "\u4ECA\u65E5\u672C\u55B5\u81EA\u4F20\u5C31\u5199\u5230\u8FD9\u91CC-\u6765\u65E5\u65B9\u957F\u3002",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/mycat.md"
};
var mycat_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = {
  "key": "v-565176d0",
  "path": "/guide/standard.html",
  "title": "\u65E5\u5FD7\u4E66\u5199\u89C4\u8303",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u65E5\u5FD7\u4E66\u5199\u89C4\u8303",
    "date": "2022/06/07"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/standard.md"
};
var standard_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = {
  "key": "v-ef95dc2e",
  "path": "/theme/reset.html",
  "title": "reset",
  "lang": "en-US",
  "frontmatter": {
    "title": "reset",
    "date": "2020-05-28T00:00:00.000Z",
    "tags": [
      "css"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "reset",
      "slug": "reset",
      "children": []
    },
    {
      "level": 2,
      "title": "\u53BB\u9664 input \u9ED8\u8BA4\u586B\u5145\u7684\u80CC\u666F\u989C\u8272",
      "slug": "\u53BB\u9664-input-\u9ED8\u8BA4\u586B\u5145\u7684\u80CC\u666F\u989C\u8272",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6E05\u9664 input[type=number]\u7684\u9ED8\u8BA4\u6837\u5F0F",
      "slug": "\u6E05\u9664-input-type-number-\u7684\u9ED8\u8BA4\u6837\u5F0F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6E05\u9664\u79FB\u52A8\u7AEF a \u6807\u7B7E\u7B49\u70B9\u51FB\u533A\u57DF\u53D8\u8272",
      "slug": "\u6E05\u9664\u79FB\u52A8\u7AEF-a-\u6807\u7B7E\u7B49\u70B9\u51FB\u533A\u57DF\u53D8\u8272",
      "children": []
    },
    {
      "level": 2,
      "title": "\u6E05\u9664\u79FB\u52A8\u7AEF input \u6837\u5F0F",
      "slug": "\u6E05\u9664\u79FB\u52A8\u7AEF-input-\u6837\u5F0F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u907F\u514D ios \u6ED1\u52A8\u6EDA\u52A8\u6761\u5361\u987F",
      "slug": "\u907F\u514D-ios-\u6ED1\u52A8\u6EDA\u52A8\u6761\u5361\u987F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E00\u6B21\u641E\u5B9A",
      "slug": "\u4E00\u6B21\u641E\u5B9A",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "theme/reset.md"
};
var reset_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = {
  "key": "v-e74db2cc",
  "path": "/theme/shadow.html",
  "title": "\u5E38\u89C1\u9634\u5F71",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u5E38\u89C1\u9634\u5F71",
    "date": "2019-06-21T00:00:00.000Z",
    "tags": [
      "css"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5E38\u89C1\u6295\u5F71",
      "slug": "\u5E38\u89C1\u6295\u5F71",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4E0D\u89C4\u5219\u56FE\u5F62\u6295\u5F71",
      "slug": "\u4E0D\u89C4\u5219\u56FE\u5F62\u6295\u5F71",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "theme/shadow.md"
};
var shadow_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = {
  "key": "v-b03da52c",
  "path": "/theme/whirligig.html",
  "title": "\u65CB\u8F6C\u6728\u9A6C",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u65CB\u8F6C\u6728\u9A6C",
    "date": "2020-12-24T00:00:00.000Z",
    "tags": [
      "css"
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "theme/whirligig.md"
};
var whirligig_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = {
  "key": "v-e04f83ea",
  "path": "/vue/theCore.html",
  "title": "\u8BE6\u89E3vue\u7EC4\u4EF6\u4E09\u5927\u6838\u5FC3\u6982\u5FF5",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u8BE6\u89E3vue\u7EC4\u4EF6\u4E09\u5927\u6838\u5FC3\u6982\u5FF5",
    "date": "2022/06/07",
    "tags": [
      "vue"
    ],
    "categories": [
      "Vue"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u524D\u8A00",
      "slug": "\u524D\u8A00",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5C5E\u6027",
      "slug": "\u5C5E\u6027",
      "children": [
        {
          "level": 3,
          "title": "1.\u81EA\u5B9A\u4E49\u5C5E\u6027 props",
          "slug": "_1-\u81EA\u5B9A\u4E49\u5C5E\u6027-props",
          "children": []
        },
        {
          "level": 3,
          "title": "2.inheritAttrs",
          "slug": "_2-inheritattrs",
          "children": []
        },
        {
          "level": 3,
          "title": "3.data \u4E0E props \u533A\u522B",
          "slug": "_3-data-\u4E0E-props-\u533A\u522B",
          "children": []
        },
        {
          "level": 3,
          "title": "4.\u5355\u5411\u6570\u636E\u6D41",
          "slug": "_4-\u5355\u5411\u6570\u636E\u6D41",
          "children": []
        },
        {
          "level": 3,
          "title": "5.\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E\u65F6\u52A0\u548C\u4E0D\u52A0 v-bind\uFF1F",
          "slug": "_5-\u5411\u5B50\u7EC4\u4EF6\u4E2D\u4F20\u9012\u6570\u636E\u65F6\u52A0\u548C\u4E0D\u52A0-v-bind",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E8B\u4EF6",
      "slug": "\u4E8B\u4EF6",
      "children": [
        {
          "level": 3,
          "title": "1.\u4E8B\u4EF6\u9A71\u52A8\u4E0E\u6570\u636E\u9A71\u52A8",
          "slug": "_1-\u4E8B\u4EF6\u9A71\u52A8\u4E0E\u6570\u636E\u9A71\u52A8",
          "children": []
        },
        {
          "level": 3,
          "title": "2.\u4FEE\u9970\u7B26\u4E8B\u4EF6",
          "slug": "_2-\u4FEE\u9970\u7B26\u4E8B\u4EF6",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u63D2\u69FD",
      "slug": "\u63D2\u69FD",
      "children": [
        {
          "level": 3,
          "title": "1.\u4F5C\u7528\u57DF\u63D2\u69FD",
          "slug": "_1-\u4F5C\u7528\u57DF\u63D2\u69FD",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue/theCore.md"
};
var theCore_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = {
  "key": "v-6abdbdea",
  "path": "/vue/vue3.html",
  "title": "\u5173\u4E8Evue3.0",
  "lang": "en-US",
  "frontmatter": {
    "title": "\u5173\u4E8Evue3.0",
    "tags": [
      "vue"
    ],
    "categories": [
      "Vue"
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1662302126e3,
    "contributors": [
      {
        "name": "huying",
        "email": "2369700690@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "vue/vue3.md"
};
var vue3_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": null
};
var _404_html = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "404.vue"]]);
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender], ["__file", "HomeContent.vue"]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var HomeFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__file", "HomeFeatures.vue"]]);
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "HomeFooter.vue"]]);
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_AutoLinkExternalIcon = vue.resolveComponent("AutoLinkExternalIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_AutoLinkExternalIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var AutoLink = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__file", "AutoLink.vue"]]);
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(AutoLink, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__file", "HomeHero.vue"]]);
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHero, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeFeatures, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "Home.vue"]]);
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var NavbarBrand = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "NavbarBrand.vue"]]);
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var DropdownTransition = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "DropdownTransition.vue"]]);
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(AutoLink, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(AutoLink, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(AutoLink, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(AutoLink, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var NavbarDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "NavbarDropdown.vue"]]);
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(NavbarDropdown, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(AutoLink, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var NavbarItems = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "NavbarItems.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var ToggleDarkModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "ToggleDarkModeButton.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var ToggleSidebarButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "ToggleSidebarButton.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(ToggleSidebarButton, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(NavbarBrand, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(ToggleDarkModeButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "Navbar.vue"]]);
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageMeta.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(AutoLink, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "PageNav.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(PageMeta, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(PageNav, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "Page.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(AutoLink, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p tabindex="0" class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(DropdownTransition, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItem.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter.useRoute();
    const sidebarItems = useSidebarItems();
    vue.watch(() => route.hash, (hash) => {
      const sidebar = document.querySelector(".sidebar");
      if (!sidebar)
        return;
      const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-item[href="${route.path}${hash}"]`);
      if (!activeSidebarItem)
        return;
      const sidebarTop = sidebar.getBoundingClientRect().top;
      const sidebarHeight = sidebar.getBoundingClientRect().height;
      const activeSidebarItemTop = activeSidebarItem.getBoundingClientRect().top;
      const activeSidebarItemHeight = activeSidebarItem.getBoundingClientRect().height;
      if (activeSidebarItemTop < sidebarTop) {
        activeSidebarItem.scrollIntoView(true);
      } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
        activeSidebarItem.scrollIntoView(false);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(SidebarItem, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "SidebarItems.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(NavbarItems, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(SidebarItems, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Sidebar.vue"]]);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(Navbar, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(Sidebar, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(Home, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(Page, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
var Layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Layout
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
