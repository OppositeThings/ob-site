/* OB SOLID SUITE v17.0 · ob-suite.js · Opposite Things
   Served from GitHub through jsDelivr; the Squarespace Footer holds the settings block (OB_CONF) and one <script src> line.
   Pairs with Header v15.5 (stays in Squarespace), Custom CSS v17.0, ob-drawings.js v16.6 (Store page box, defer).
   v17.0 = v16.7, tidied; nothing on the site looks or works differently, except for keyboard users in the pop-up
   and the photo zoom below:
     · POP-UP: while the newsletter / withdrawal / Klarna pop-up is open, the page behind it can't be reached with
       Tab (it's made inert), so keyboard and screen-reader users stay in the pop-up until CLOSE or Esc. CLOSE
       now really gets the focus as the pop-up opens (it was asked for while the pop-up was still hidden).
     · PAGE TYPE: home, store and bag pages are read from the Header's page labels (ob-page-home, ob-page-store,
       ob-page-cart, ob-page-product), so the list of pages lives in one place; the address is the backup if a
       label is missing. Worked out once per page (it can't change on a 7.1 site).
     · Taken out: the listeners for Squarespace's old page-swapping events (sqs:page-view, page:load,
       squarespace:after-render), the wrapping of history.pushState / replaceState and the extra back-button
       check. Squarespace 7.1 loads every page in full, so none of them ever ran. The re-start after the
       back button restores a page from memory, and after a phone is turned back from landscape, stays.
     · FURNITURE taken out of the backup chips and lines (OB SETTINGS hasn't had it since v16.6).
   v17.0 also has one visible change, asked for:
     · PHOTO ZOOM UNDER TEXT (home, About hero): a photo that zooms on rollover stays zoomed while the pointer is
       on text laid over it (SHOP SLOT on INTRODUCING SLOT CHAIR); it used to zoom back out. The suite marks the
       photo .obZoomHold; Custom CSS 9.2 and 9.3 zoom it.
     · STORE FILTER, STILL LOADING: on the ALL page, if a chip's products take more than 0.4s to arrive, the chosen
       chip pulses until they show (html.obFilterSlow; Custom CSS "STORE FILTER, STILL LOADING").
   v16.7 = v16.6 +
     · PHOTO DESCRIPTIONS: product photos whose description (alt text) is a file name ("All_products_test.jpg",
       "a_new (1).png (Copy)") get the product's name instead: store tiles, product galleries (with the colour),
       OTHER THINGS and home product blocks. Photos with a real description are left alone.
     · OB SETTINGS CHECK: if the settings block in the Footer has a mistake, a note in the Squarespace preview says
       what and where (visitors never see it; add ?obcheck to any address to see it outside the editor).
   v16.6 = v16.5 +
     · SETTINGS FROM THE FOOTER: window.OB_CONF in the Footer (category lines, categories, colour chips,
       SIZE GUIDE words, bag title, default print size) replaces the copies below, which stay as the backup.
       A mistake in that block can't break the site: anything missing or malformed falls back to these.
     · FINDS line: the missing space after "antique," put back (backup copy below).
     · SIZES panel: a design's drawing is also found through its colour chips (same design name), so a new
       colourway only needs adding to the colour chips; the drawing's own paths are optional.
     · The drawings are looked for when needed, not at start, so the Store box can load them with defer
       (no wait before the page shows); if they arrive late, ob-drawings.js calls window.obDimsReady.
     · Store chips are announced as links again (the list roles replaced "link" for screen readers).
     · Image-block links start whether or not the page has finished loading.
   To change code: edit here, merge into main, put the new commit ID in the Footer's last line.
   To change words or lists: edit OB_CONF in the Footer; no release needed. */
/* ---- main suite ---- */
try {
(() => {
 "use strict";
 if (window.__obSolidSuiteV7) return;
 window.__obSolidSuiteV7 = true;
 const CONF = {
  mobileMaxPx: 767,
  observeTimeoutMs: 12e3,
  evenGapPhone: 44,
  chipsGraceMs: 800,
  chipsMinDeltaPx: 10,
  chipsHideDelayMs: 80,
  galleryDotsMaxTries: 25,
  galleryDotsTryEveryMs: 250,
  axisLockDecidePx: 10,
  axisLockHorizontalRatio: 1.45,
  axisLockUnlockVerticalRatio: 1.5,
  defaultSize: "A3",
  defaultSizeFirst: true,
  newsletterPath: "/newsletter",
  withdrawPath: "/withdraw",
  chipsInPlace: true,
  klarnaPath: "/klarna",
  sizeGuide: {
   en: "SIZE GUIDE",
   it: "GUIDA ALLE MISURE"
  },
  footerGapLines: 2,
  footerEdgeLines: 2,
  colourLinks: [ {
   design: "Rosalia",
   colours: [ {
    name: "Lilac",
    path: "/store/p/rosalia-lilac",
    dot: "#b9a8d6"
   }, {
    name: "Khaki",
    path: "/store/p/rosalia-khaki",
    dot: "#a89f72"
   } ]
  }, {
   design: "Petals",
   colours: [ {
    name: "Sand",
    path: "/store/p/petals-sand",
    dot: "#d5bba8"
   }, {
    name: "Blush",
    path: "/store/p/petals-blush",
    dot: "#e5cac8"
   } ]
  }, {
   design: "Bloom",
   colours: [ {
    name: "Chocolate",
    path: "/store/p/bloom-chocolate",
    dot: "#4a342d"
   }, {
    name: "Moss",
    path: "/store/p/bloom-moss",
    dot: "#4b4d33"
   } ]
  }, {
   design: "Stretch",
   colours: [ {
    name: "Rose",
    path: "/store/p/stretch-rose",
    dot: "#e4bab8"
   }, {
    name: "Sky",
    path: "/store/p/stretch-sky",
    dot: "#b7c5d4"
   } ]
  }, {
   design: "Cartone",
   colours: [ {
    name: "Tan",
    path: "/store/p/cartone-tan",
    dot: "#84684c"
   }, {
    name: "Olive",
    path: "/store/p/cartone-olive",
    dot: "#645b44"
   } ]
  }, {
   design: "Eindhoven",
   colours: [ {
    name: "Original",
    path: "/store/p/eindhoven",
    dot: "#c9a3a6"
   }, {
    name: "Invert",
    path: "/store/p/eindhoven-invert",
    dot: "#7a6fc4"
   } ]
  }, {
   design: "Breuer and Marcel",
   label: "THE SET:",
   colours: [ {
    name: "Breuer",
    path: "/store/p/breuer"
   }, {
    name: "Marcel",
    path: "/store/p/marcel"
   } ]
  } ],
  dimensions: window.obDimensions || [],
  dimensionsWords: {
   en: {
    head: "SIZES",
    headOne: "DIMENSIONS",
    cut: "CUT-THROUGH",
    wide: "wide",
    high: "high"
   },
   it: {
    head: "MISURE",
    headOne: "DIMENSIONI",
    cut: "FORO",
    wide: "di larghezza",
    high: "di altezza"
   }
  },
  cartTitle: "BAG",
  dimensionsUnit: "cm",
  dimensionsPaper: {
   A5: [ 148, 210 ],
   A4: [ 210, 297 ],
   A3: [ 297, 420 ],
   A2: [ 420, 594 ],
   A1: [ 594, 841 ],
   A0: [ 841, 1189 ]
  },
  dimensionsLandscape: [],
  images: {
   cartThumbnailFormat: "500w"
  },
  debug: false
 };
 const SEL = {
  header: "header#header",
  shopList: "main .product-list[data-controller='ProductList'], main .product-list",
  productGalleryRoot: ".product-gallery[data-product-gallery], .product-gallery, .ProductItem-gallery, [data-product-gallery]",
  productGallerySlidesWrap: ".product-gallery-slides[data-product-gallery='slides'], .product-gallery-slides, [data-product-gallery='slides']",
  productGallerySlideItem: ".product-gallery-slides-item[data-product-gallery='slides-item'], .product-gallery-slides-item, [data-product-gallery='slides-item']",
  cartRoot: "#sqs-cart-root",
  cartImg: "[data-testid='cart-row-img'], .cart-row-img"
 };
 const IDS = {
  chipsBar: "obShopChipsBar",
  chipsScroller: "obShopChipsScroller",
  chipsInline: "obShopChipsInline",
  galleryDots: "obGalleryDots",
  leadTime: "obLeadTime",
  colourLinks: "obColourLinks"
 };
 const STATE = {
  lastInitKey: "",
  lastInitAt: 0,
  initLock: false,
  cachedPageType: null,
  viewport: {
   dirty: true,
   w: 0,
   mobile: false
  },
  raf: {
   scroll: 0,
   resize: 0,
   acc: 0,
   cartQty: 0,
   compact: 0,
   copy: 0,
   even: 0
  },
  obs: {
   main: null,
   cart: null,
   gallery: null,
   accordion: null,
   cartQty: null,
   sizeGuide: null
  },
  timers: {
   galleryTry: 0
  },
  chips: {
   lastY: null,
   graceUntil: 0,
   hideTimer: null,
   scrollLeft: null,
   compact: null
  },
  headScroll: false,
  priceQueue: new Set,
  priceFlushRaf: 0,
  galleryDots: {
   root: null,
   wrap: null,
   slides: [],
   dotsEl: null,
   active: 0,
   building: false
  },
  axis: {
   deciding: false,
   locked: false,
   startX: 0,
   startY: 0,
   root: null,
   id: null
  },
  axisEl: null,
  globalBound: false,
  cartBound: false,
  scrollY: 0
 };
 const COPY = {
  all: {
   en: "New and old, designed and found,\nmade to be mixed.",
   it: "Nuovo e vecchio, disegnato e trovato,\nfatto per essere mescolato."
  },
  prints: {
   en: "Shapes we couldn’t stop looking at.\nMinimal on paper. Less so once they’re up.",
   it: "Forme di Palermo\nche non riuscivamo a smettere di guardare.\nMinimali sulla carta.\nMeno, una volta appese."
  },
  objects: {
   en: "Small things for the house.\nUseful, mostly. Good company, always.",
   it: "Piccole cose per la casa.\nUtili, quasi sempre.\nBuona compagnia, sempre."
  },
  finds: {
   en: "Mid-century and antique, found across Sicily.\nOne of each, then gone.",
   it: "Modernariato e antiquariato,\ntrovati in giro per la Sicilia.\nPezzi unici, poi spariscono."
  },
  rugs: {
   en: "Drawn in the studio, hand-tufted in wool,\nmade to order. Shoes off.",
   it: "Disegnati in studio, taftati a mano in lana,\nrealizzati su ordinazione. Via le scarpe."
  }
 };
 const confIssues = [];
 const OVR = (() => {
  try {
   const o = window.OB_CONF;
   if (o === undefined) {
    if (Array.from(document.scripts).some(s => !s.src && /window\.OB_CONF\s*=/.test(s.textContent || ""))) confIssues.push("there's a typo in it (often a missing comma, quote or bracket), so none of it is being used");
    return {};
   }
   if (o && typeof o === "object") return o;
   confIssues.push("it isn't a group of settings in { }, so none of it is being used");
   return {};
  } catch {
   return {};
  }
 })();
 const isWords = w => !!w && typeof w === "object" && typeof w.en === "string";
 if ("colourLinks" in OVR) {
  if (Array.isArray(OVR.colourLinks)) {
   const ok = OVR.colourLinks.filter(d => d && typeof d.design === "string" && Array.isArray(d.colours));
   if (ok.length < OVR.colourLinks.length) confIssues.push(`colourLinks: ${OVR.colourLinks.length - ok.length} design(s) skipped; each needs design: "…" and colours: [ … ]`);
   CONF.colourLinks = ok;
  } else confIssues.push("colourLinks: should be a list in [ ]; using the backup colour chips");
 }
 if ("sizeGuide" in OVR) {
  if (isWords(OVR.sizeGuide)) CONF.sizeGuide = OVR.sizeGuide; else confIssues.push('sizeGuide: needs en: "…"; using the backup');
 }
 if ("cartTitle" in OVR) {
  if (typeof OVR.cartTitle === "string") CONF.cartTitle = OVR.cartTitle; else confIssues.push("cartTitle: should be words in quotes; using the backup");
 }
 if ("defaultSize" in OVR) {
  if (typeof OVR.defaultSize === "string") CONF.defaultSize = OVR.defaultSize; else confIssues.push("defaultSize: should be words in quotes; using the backup");
 }
 if ("copy" in OVR) {
  if (OVR.copy && typeof OVR.copy === "object") Object.keys(OVR.copy).forEach(k => {
   const w = OVR.copy[k];
   if (isWords(w)) COPY[k.toLowerCase()] = {
    en: w.en,
    it: typeof w.it === "string" ? w.it : w.en
   }; else confIssues.push(`copy.${k}: needs en: "…"; using the backup line`);
  }); else confIssues.push("copy: should be a group in { }; using the backup lines");
 }
 const catsFrom = list => {
  if (!Array.isArray(list)) return null;
  const out = list.filter(c => c && typeof c.key === "string" && typeof c.label === "string" && typeof c.path === "string").map(c => ({
   key: c.key.toLowerCase(),
   label: c.label,
   path: c.path,
   match: Array.isArray(c.match) && c.match.length ? c.match.map(m => String(m).toLowerCase()) : [ c.key.toLowerCase() ],
   live: c.live !== false,
   page: !!c.page
  }));
  return out.some(c => c.key === "all") ? out : null;
 };
 let catsOvr = null;
 if ("categories" in OVR) {
  catsOvr = catsFrom(OVR.categories);
  if (!catsOvr) confIssues.push("categories: the list needs an ALL chip, and each chip needs key, label and path; using the backup chips"); else if (Array.isArray(OVR.categories) && catsOvr.length < OVR.categories.length) confIssues.push(`categories: ${OVR.categories.length - catsOvr.length} chip(s) skipped; each needs key, label and path`);
 }
 const CATEGORIES = catsOvr || [ {
  key: "all",
  label: "ALL",
  path: "/store",
  match: [ "all" ],
  live: true
 }, {
  key: "rugs",
  label: "RUGS",
  path: "/store/rugs",
  match: [ "rug" ],
  live: true
 }, {
  key: "prints",
  label: "PRINTS",
  path: "/store/prints",
  match: [ "print" ],
  live: true
 }, {
  key: "finds",
  label: "FINDS",
  path: "/store/finds",
  match: [ "find" ],
  live: true
 }, {
  key: "objects",
  label: "OBJECTS",
  path: "/store/objects",
  match: [ "object", "home", "homeware", "everyday", "merch" ],
  live: true
 }, {
  key: "slot",
  label: "SLOT CHAIR",
  path: "/store/p/slot-chair",
  match: [ "slot" ],
  live: true,
  page: true
 } ];
 const LIVE_CATEGORIES = CATEGORIES.filter(c => c.live);
 const categoryKeyFromText = s => {
  s = String(s || "").toLowerCase().trim();
  for (const c of CATEGORIES) {
   if (c.key === "all" || c.page) continue;
   if (c.match.some(m => s.includes(m))) return c.key;
  }
  return "all";
 };
 const categoryKeyFromPath = () => {
  const f = filterKeyNow();
  if (f) return f;
  const path = normalisePath(location.pathname);
  if (path === "/store") return "all";
  if (path.startsWith("/store/")) {
   const seg = path.split("/")[2] || "";
   if (seg) return categoryKeyFromText(seg);
  }
  return "all";
 };
 const now = Date.now;
 const qs = (sel, root) => (root || document).querySelector(sel);
 const qsa = (sel, root) => Array.from((root || document).querySelectorAll(sel));
 const onReady = fn => {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, {
   once: true
  }); else fn();
 };
 const normalisePath = p => {
  try {
   p = (p || "/").toLowerCase();
   if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
   return p;
  } catch {
   return "/";
  }
 };
 const textOf = el => (el?.textContent || "").replace(/\s+/g, " ").trim();
 const observeUntil = (runFn, timeoutMs, rootEl) => {
  if (runFn()) return;
  const root = rootEl || document.documentElement;
  const obs = new MutationObserver(() => {
   if (runFn()) obs.disconnect();
  });
  obs.observe(root, {
   childList: true,
   subtree: true
  });
  setTimeout(() => obs.disconnect(), timeoutMs || 9e3);
 };
 const safeRun = (label, fn) => {
  try {
   return fn();
  } catch (err) {
   if (CONF.debug) console.warn(`[obSolidSuite] ${label} failed:`, err);
  }
 };
 const LANG = {
  fns: [],
  bound: false,
  waiting: false,
  tries: 0
 };
 const langBind = () => {
  if (LANG.bound) return;
  if (!window.Weglot?.on) {
   if (!LANG.waiting && LANG.tries < 10) {
    LANG.waiting = true;
    LANG.tries++;
    setTimeout(() => {
     LANG.waiting = false;
     langBind();
    }, 500);
   }
   return;
  }
  LANG.bound = true;
  const run = (init, lang) => LANG.fns.forEach(f => {
   if (!init || f.init) setTimeout(() => safeRun("lang", () => f.fn(lang)), 0);
  });
  Weglot.on("languageChanged", lang => run(false, lang));
  Weglot.on("initialized", () => run(true));
 };
 const onLang = (fn, init = true) => {
  LANG.fns.push({
   fn,
   init
  });
  langBind();
 };
 const scheduleRaf = (stateKey, fn) => {
  if (STATE.raf[stateKey]) return;
  STATE.raf[stateKey] = requestAnimationFrame(() => {
   STATE.raf[stateKey] = 0;
   fn();
  });
 };
 const MQ = {
  mobile: window.matchMedia(`(max-width: ${CONF.mobileMaxPx}px)`),
  reduce: window.matchMedia("(prefers-reduced-motion: reduce)")
 };
 const markViewportDirty = () => {
  STATE.viewport.dirty = true;
 };
 const computeViewport = () => {
  if (!STATE.viewport.dirty) return STATE.viewport;
  STATE.viewport.w = document.documentElement.clientWidth;
  STATE.viewport.mobile = MQ.mobile.matches;
  STATE.viewport.dirty = false;
  return STATE.viewport;
 };
 const isMobile = () => computeViewport().mobile;
 const isCompact = () => window.obCompactSync ? document.documentElement.classList.contains("ob-compact") : isMobile();
 const compactSync = () => {
  try {
   window.obCompactSync?.();
  } catch {}
 };
 const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
 const prefersReducedMotion = () => MQ.reduce.matches;
 const getPageType = () => {
  if (STATE.cachedPageType) return STATE.cachedPageType;
  const body = document.body;
  const cls = body?.className || "";
  const html = document.documentElement.classList;
  const labelled = Array.from(html).some(c => c.startsWith("ob-page-"));
  const path = normalisePath(location.pathname);
  const isShop = cls.includes("collection-type-products") || cls.includes("collection-type-shop");
  const type = {
   isShop,
   isDetail: isShop && cls.includes("view-item"),
   isHome: labelled ? html.contains("ob-page-home") : path === "/",
   isStorePage: labelled ? html.contains("ob-page-store") : path === "/store" || path.startsWith("/store/"),
   isCart: labelled ? html.contains("ob-page-cart") : path === "/cart"
  };
  if (body) STATE.cachedPageType = type;
  return type;
 };
 const isShopContext = () => getPageType().isShop;
 const isProductDetailPage = () => getPageType().isDetail;
 const isHome = () => getPageType().isHome;
 const isStorePage = () => getPageType().isStorePage;
 const isCartPage = () => getPageType().isCart;
 const isMenuOpen = () => !!document.body?.classList.contains("header--menu-open");
 const isSqspCdn = url => String(url || "").includes("images.squarespace-cdn.com/");
 const withFormat = (url, format) => {
  if (!isSqspCdn(url)) return url;
  try {
   const u = new URL(url, location.origin);
   u.searchParams.set("format", format);
   return u.toString();
  } catch {
   return url;
  }
 };
 const setChipsTopVar = () => {
  const header = qs(SEL.header);
  const h = header?.getBoundingClientRect().height || 72;
  const v = Math.max(56, Math.round(h)) + "px";
  if (STATE.chipsTopVar === v) return;
  STATE.chipsTopVar = v;
  document.documentElement.style.setProperty("--obChipsTop", v);
 };
 const observeHeader = () => {
  const header = qs(SEL.header);
  if (!header || header.__obObserved) return;
  header.__obObserved = true;
  setChipsTopVar();
  try {
   new ResizeObserver(setChipsTopVar).observe(header);
  } catch {
   window.addEventListener("resize", setChipsTopVar, {
    passive: true
   });
  }
 };
 const cleanPriceTextNodes = root => {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while (node = walker.nextNode()) {
   const v = node.nodeValue;
   if (v?.includes(".00")) {
    node.nodeValue = v.replace(/(\d)\.00(?!\d)/g, "$1");
   }
  }
 };
 const PRICE_SEL = ".product-list-item-price, .product-price, .product-price-value, #main-product-price, .cart-row-price, .cart-subtotal-price";
 const cleanAllPrices = (scope = document) => {
  qsa(PRICE_SEL, scope).forEach(cleanPriceTextNodes);
  if (isCartPage()) {
   cleanPriceTextNodes(qs(SEL.cartRoot));
   cartTitleSet();
  }
 };
 const cartTitleSet = () => {
  const want = String(CONF.cartTitle || "").trim();
  const h = want ? qs(SEL.cartRoot + " .cart-title") : null;
  if (!h) return;
  for (const n of h.childNodes) {
   if (n.nodeType === 3 && /^\s*shopping\s+cart\s*$/i.test(n.nodeValue)) n.nodeValue = want;
  }
  if (/^\s*shopping\s+cart\s*$/i.test(h.getAttribute("aria-label") || "")) h.setAttribute("aria-label", want);
 };
 const cartPricesWatch = () => {
  const root = isCartPage() ? qs(SEL.cartRoot) : null;
  if (!root || root.__obPricesWatched) return;
  root.__obPricesWatched = true;
  new MutationObserver(() => queuePriceClean()).observe(root, {
   childList: true,
   subtree: true,
   characterData: true,
   attributes: true,
   attributeFilter: [ "aria-label" ]
  });
  queuePriceClean();
 };
 const buttonPriceSync = () => {
  const btn = qs(".product-detail .product-add-to-cart .sqs-add-to-cart-button");
  const price = qs("#main-product-price");
  if (!btn || !price) return;
  const v = price.cloneNode(true);
  v.querySelectorAll(".original-price, del, s, .visually-hidden, .sr-only").forEach(n => n.remove());
  const t = (v.textContent || "").replace(/(\d)\.00(?!\d)/g, "$1").replace(/\s+/g, " ").trim();
  if (btn.getAttribute("data-ob-price") !== t) btn.setAttribute("data-ob-price", t);
 };
 const queuePriceClean = (root = document) => {
  STATE.priceQueue.add(root);
  if (STATE.priceFlushRaf) return;
  STATE.priceFlushRaf = requestAnimationFrame(() => {
   STATE.priceFlushRaf = 0;
   STATE.priceQueue.forEach(r => cleanAllPrices(r));
   STATE.priceQueue.clear();
  });
 };
 const inEditor = window.self !== window.top;
 const STORE_LIST_RE = /^\/store(\/(?!p\/)[^/]+)?\/?$/i;
 const isStoreListPath = p => STORE_LIST_RE.test(p || "");
 const leaveThen = (go, inStore) => {
  if (inStore) {
   try {
    sessionStorage.setItem("obNavInStore", String(now()));
   } catch {}
   saveCopyFrom();
  }
  if (inEditor || prefersReducedMotion()) {
   go();
   return;
  }
  const d = document.documentElement;
  if (d.classList.contains("obLeaving")) return;
  if (inStore) d.classList.add("obLeavingInStore");
  if (isMobile() && (window.scrollY || 0) < 150) {
   d.classList.add("obLeavingTop");
   try {
    sessionStorage.setItem("obFromTop", String(now()));
   } catch {}
  }
  d.classList.add("obLeaving");
  go();
  setTimeout(() => d.classList.remove("obLeaving", "obLeavingInStore", "obLeavingTop"), 3e3);
 };
 const CHIP_SCROLL_KEY = "obChipsScroll";
 const CHIP_SCROLL_FRESH_MS = 15e3;
 const chipsSaveScrollForNextPage = scroller => {
  try {
   sessionStorage.setItem(CHIP_SCROLL_KEY, JSON.stringify({
    x: scroller.scrollLeft,
    t: now()
   }));
  } catch {}
 };
 const chipsRestoreScroll = scroller => {
  let x = STATE.chips.scrollLeft;
  if (x === null) {
   try {
    const saved = JSON.parse(sessionStorage.getItem(CHIP_SCROLL_KEY) || "null");
    if (saved && now() - saved.t < CHIP_SCROLL_FRESH_MS) x = saved.x;
   } catch {}
  }
  if (x !== null) scroller.scrollLeft = x;
  const active = scroller.querySelector('.obChipBtn[aria-current="true"]');
  if (active) {
   const a = active.getBoundingClientRect();
   const r = scroller.getBoundingClientRect();
   if (a.left < r.left || a.right > r.right) {
    scroller.scrollLeft += a.left - r.left - (r.width - a.width) / 2;
   }
  }
  scroller.__obRestored = true;
  chipsGuardScroll(scroller);
 };
 const chipsGuardScroll = scroller => {
  const target = scroller.scrollLeft;
  if (!target) return;
  let userMoved = false;
  const stop = () => {
   userMoved = true;
  };
  scroller.__obStopGuard = stop;
  [ "touchstart", "pointerdown", "wheel" ].forEach(ev => scroller.addEventListener(ev, stop, {
   passive: true,
   once: true
  }));
  const hold = () => {
   if (userMoved || !scroller.isConnected) return;
   if (Math.abs(scroller.scrollLeft - target) > 2) scroller.scrollLeft = target;
  };
  scroller.addEventListener("scroll", hold, {
   passive: true
  });
  [ 100, 300, 700, 1200, 2e3, 3e3 ].forEach(ms => setTimeout(hold, ms));
  setTimeout(() => scroller.removeEventListener("scroll", hold), 3500);
 };
 const chipsRemove = () => {
  const sc = qs("#" + IDS.chipsScroller);
  if (sc?.__obRestored) STATE.chips.scrollLeft = sc.scrollLeft;
  qs("#" + IDS.chipsBar)?.remove();
  qs("#" + IDS.chipsInline)?.remove();
  document.documentElement.classList.remove("obChipsHidden", "obChipsReady");
  STATE.chips.lastY = null;
 };
 const chipsInlineInset = row => {
  const item = qs(".product-list-item");
  const left = item ? item.getBoundingClientRect().left - row.getBoundingClientRect().left : 0;
  if (!(left > 0)) return;
  const gap = parseFloat(getComputedStyle(row.firstElementChild).columnGap) || 0;
  row.style.setProperty("--obChipsInlineInset", Math.max(0, Math.round(left - gap)) + "px");
 };
 const chipsInlineSync = () => {
  if (!isCompact()) return;
  const sc = qs("#" + IDS.chipsScroller);
  const list = qs(SEL.shopList);
  if (!sc || !list) return;
  let row = qs("#" + IDS.chipsInline);
  if (!row) {
   row = document.createElement("div");
   row.id = IDS.chipsInline;
   row.setAttribute("role", "navigation");
   row.setAttribute("aria-label", "Shop categories");
   const isc = document.createElement("div");
   isc.className = "obChipsInlineScroller";
   row.appendChild(isc);
   list.insertBefore(row, list.firstChild);
   isc.addEventListener("click", e => {
    const chip = e.target.closest?.(".obChipBtn");
    if (!chip || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const barSc = qs("#" + IDS.chipsScroller);
    const twin = barSc && qsa(".obChipBtn", barSc)[qsa(".obChipBtn", isc).indexOf(chip)];
    if (!twin) return;
    e.preventDefault();
    qsa(".obChipBtn", isc).forEach(c => c.setAttribute("aria-current", c === chip ? "true" : "false"));
    barSc.scrollLeft = isc.scrollLeft;
    twin.click();
   });
   [ "touchstart", "pointerdown", "wheel" ].forEach(ev => isc.addEventListener(ev, () => qs("#" + IDS.chipsScroller)?.__obStopGuard?.(), {
    passive: true
   }));
  }
  const isc = row.firstElementChild;
  isc.innerHTML = sc.innerHTML;
  chipsInlineInset(row);
  isc.scrollLeft = sc.scrollLeft;
  if (!sc.__obFollow) {
   sc.__obFollow = true;
   let t = null;
   sc.addEventListener("scroll", () => {
    clearTimeout(t);
    t = setTimeout(() => {
     if (document.documentElement.classList.contains("obChipsHidden")) return;
     const i = qs("#" + IDS.chipsInline + " .obChipsInlineScroller");
     if (i && Math.abs(i.scrollLeft - sc.scrollLeft) > 1) i.scrollLeft = sc.scrollLeft;
    }, 150);
   }, {
    passive: true
   });
  }
 };
 const chipsInlineToBar = () => {
  const i = qs("#" + IDS.chipsInline + " .obChipsInlineScroller");
  const sc = qs("#" + IDS.chipsScroller);
  if (i && sc && Math.abs(sc.scrollLeft - i.scrollLeft) > 1) sc.scrollLeft = i.scrollLeft;
 };
 const chipsEnsureBar = () => {
  let bar = qs("#" + IDS.chipsBar);
  if (!bar) {
   bar = document.createElement("div");
   bar.id = IDS.chipsBar;
   bar.setAttribute("role", "navigation");
   bar.setAttribute("aria-label", "Shop categories");
   const sc = document.createElement("div");
   sc.id = IDS.chipsScroller;
   bar.appendChild(sc);
   document.body?.prepend(bar);
  }
  if (bar.__obInit) return bar;
  bar.__obInit = true;
  observeHeader();
  const scroller = bar.querySelector("#" + IDS.chipsScroller);
  if (!scroller) return bar;
  scroller.addEventListener("click", e => {
   if (e.target.closest?.(".obChipBtn")) chipsSaveScrollForNextPage(scroller);
  });
  scroller.addEventListener("click", e => {
   const a = e.target.closest?.("a.obChipBtn");
   if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
   if (filterTap(a.href)) {
    e.preventDefault();
    return;
   }
   if (a.href === location.href) return;
   e.preventDefault();
   qsa(".obChipBtn", scroller).forEach(c => c.setAttribute("aria-current", c === a ? "true" : "false"));
   const to = routeHref(a.href);
   leaveThen(() => {
    location.href = to;
   }, true);
  });
  return bar;
 };
 const pageKey = () => normalisePath(location.pathname) + "|" + location.search;
 const chipsInflowPassed = () => {
  const bar = qs("#" + IDS.chipsBar);
  const pageChip = isCompact() ? qs("#" + IDS.chipsInline + " .obChipBtn") : qs("ul[data-ob-owned] a");
  if (!bar || !pageChip || !pageChip.offsetHeight) return true;
  const barChip = qs("#" + IDS.chipsScroller + " .obChipBtn");
  const restTop = bar.offsetTop + (barChip ? barChip.offsetTop : 20);
  return pageChip.getBoundingClientRect().top <= restTop;
 };
 const chipsSyncInset = () => {
  const bar = qs("#" + IDS.chipsBar);
  const barChip = qs("#" + IDS.chipsScroller + " .obChipBtn");
  const spacer = qs("#" + IDS.chipsScroller + " .obChipSpacer");
  if (!bar || !barChip || !spacer) return;
  if (isCompact()) {
   const v = isMobile() ? "" : qs("#" + IDS.chipsInline)?.style.getPropertyValue("--obChipsInlineInset");
   if (v) bar.style.setProperty("--obChipsInset", v); else bar.style.removeProperty("--obChipsInset");
   return;
  }
  const target = qs("ul[data-ob-owned] a") || qs(".product-list-item");
  const targetLeft = target ? target.getBoundingClientRect().left : 0;
  if (!targetLeft) return;
  const diff = targetLeft - barChip.getBoundingClientRect().left;
  const next = Math.max(0, Math.round(spacer.getBoundingClientRect().width + diff));
  bar.style.setProperty("--obChipsInset", next + "px");
 };
 const chipsBarInert = v => {
  const bar = qs("#" + IDS.chipsBar);
  if (bar && bar.inert !== v) bar.inert = v;
 };
 const chipsShow = () => {
  document.documentElement.classList.remove("obChipsHidden");
  chipsBarInert(false);
 };
 const chipsHide = () => {
  document.documentElement.classList.add("obChipsHidden");
  chipsBarInert(true);
 };
 const chipsMount = () => {
  STATE.chipsBuiltKey = pageKey();
  chipsEnsureBar();
  const scroller = qs("#" + IDS.chipsScroller);
  if (!scroller) return false;
  document.documentElement.classList.add("obChipsReady");
  const activeKey = categoryKeyFromPath();
  scroller.innerHTML = "";
  const frag = document.createDocumentFragment();
  const sp1 = document.createElement("div");
  sp1.className = "obChipSpacer";
  frag.appendChild(sp1);
  LIVE_CATEGORIES.forEach(item => {
   const a = document.createElement("a");
   a.className = "obChipBtn";
   a.href = item.path;
   a.textContent = item.label;
   a.setAttribute("aria-current", item.key === activeKey ? "true" : "false");
   frag.appendChild(a);
  });
  const sp2 = document.createElement("div");
  sp2.className = "obChipSpacer";
  frag.appendChild(sp2);
  scroller.appendChild(frag);
  chipsRestoreScroll(scroller);
  chipsInlineSync();
  chipsBarInert(document.documentElement.classList.contains("obChipsHidden"));
  requestAnimationFrame(chipsSyncInset);
  return true;
 };
 const chipsMountWhenReady = () => {
  if (!isShopContext() || isProductDetailPage()) return false;
  return chipsMount();
 };
 const chipsInit = keep => {
  STATE.chips.compact = isCompact();
  if (!isShopContext() || isProductDetailPage() || !STATE.chips.compact && !isStorePage()) {
   chipsRemove();
   return;
  }
  STATE.chips.graceUntil = now() + CONF.chipsGraceMs;
  STATE.chips.lastY = null;
  clearTimeout(STATE.chips.hideTimer);
  STATE.chips.hideTimer = null;
  chipsHide();
  if (keep) return;
  observeUntil(() => chipsMountWhenReady() || now() > STATE.chips.graceUntil, CONF.observeTimeoutMs);
 };
 const chipsUpdateByScroll = () => {
  if (!isShopContext() || isProductDetailPage() || isMenuOpen()) return;
  if (now() < STATE.chips.graceUntil) return;
  if (STATE.headScroll) return;
  const y = STATE.scrollY;
  const startY = (document.documentElement.scrollHeight - window.innerHeight) * .2;
  const footer = qs("#footer-sections");
  const atFooter = !!footer && footer.getBoundingClientRect().top < window.innerHeight;
  if (y < startY || !chipsInflowPassed() || atFooter) {
   clearTimeout(STATE.chips.hideTimer);
   STATE.chips.hideTimer = null;
   STATE.chips.lastY = y;
   chipsHide();
   return;
  }
  if (STATE.chips.lastY === null) {
   STATE.chips.lastY = y;
   return;
  }
  const delta = y - STATE.chips.lastY;
  STATE.chips.lastY = y;
  if (Math.abs(delta) < CONF.chipsMinDeltaPx) return;
  if (delta > 0) {
   if (!STATE.chips.hideTimer) {
    STATE.chips.hideTimer = setTimeout(() => {
     chipsHide();
     STATE.chips.hideTimer = null;
    }, CONF.chipsHideDelayMs);
   }
  } else {
   clearTimeout(STATE.chips.hideTimer);
   STATE.chips.hideTimer = null;
   if (!isCompact()) chipsSyncInset(); else if (document.documentElement.classList.contains("obChipsHidden")) chipsInlineToBar();
   chipsShow();
  }
 };
 const chipsLayoutCheck = () => {
  compactSync();
  if (!isShopContext() || isProductDetailPage()) return false;
  if (STATE.chips.compact === null || STATE.chips.compact === isCompact()) return false;
  chipsRemove();
  safeRun("chipsInit", chipsInit);
  safeRun("desktopChipsInit", desktopChipsInit);
  onScroll();
  return true;
 };
 const optionNameOf = (select, host) => {
  const fromAttr = host.getAttribute("data-variant-option-name") || host.getAttribute("data-option-name") || select.getAttribute("aria-label") || "";
  const fromTitle = textOf(host.querySelector(".variant-option-title"));
  return (fromAttr || fromTitle).replace(/:\s*$/, "").trim();
 };
 const isColourOption = (select, host) => /colou?r/i.test(optionNameOf(select, host));
 const isSizeSelect = select => {
  const label = (select.getAttribute("aria-label") || "").toLowerCase();
  if (label.includes("size") || label.includes("frame")) return true;
  const host = select.closest(".variant-option");
  const text = (host?.textContent || "").toLowerCase();
  return text.includes("size") || text.includes("frame");
 };
 const buildChips = (select, host, kind, labelText) => {
  const prefix = kind === "size" ? "chips-size" : "chips-colour";
  host.classList.add(prefix + "-host");
  const label = document.createElement("div");
  label.className = prefix + "-label";
  label.textContent = labelText;
  const chips = document.createElement("div");
  chips.className = "chips-variants";
  Array.from(select.options).filter(o => o.value?.trim()).forEach(opt => {
   const chip = document.createElement("button");
   chip.type = "button";
   chip.className = "chip-variant" + (select.value === opt.value ? " active" : "");
   chip.textContent = opt.text.trim();
   chip.dataset.value = opt.value;
   chips.appendChild(chip);
  });
  chips.addEventListener("click", e => {
   const t = e.target;
   if (!t.classList?.contains("chip-variant")) return;
   select.__obUserPicked = true;
   select.value = t.dataset.value;
   select.dispatchEvent(new Event("change", {
    bubbles: true
   }));
   queuePriceClean(host);
   qsa(".chip-variant", chips).forEach(c => c.classList.toggle("active", c.dataset.value === select.value));
  });
  select.addEventListener("change", () => {
   queuePriceClean(host);
   qsa(".chip-variant", chips).forEach(c => c.classList.toggle("active", c.dataset.value === select.value));
  });
  host.append(label, chips);
 };
 const sizeFromAddress = () => {
  try {
   return new URLSearchParams(location.search).get("size") || "";
  } catch {
   return "";
  }
 };
 const preselectSize = select => {
  const find = want => {
   want = String(want || "").trim().toUpperCase();
   if (!want) return null;
   return Array.from(select.options).find(o => o.value?.trim() && !o.disabled && o.text.trim().toUpperCase() === want) || null;
  };
  const fromAddress = find(sizeFromAddress());
  if (!fromAddress && select.value) return;
  const first = () => Array.from(select.options).find(o => o.value?.trim() && !o.disabled) || null;
  const opt = fromAddress || find(CONF.defaultSize) || (CONF.defaultSizeFirst ? first() : null);
  if (!opt || select.value === opt.value) return;
  select.value = opt.value;
  const priceEl = qs(".product-price, .product-price-value, #main-product-price");
  const norm = t => String(t || "").replace(/\.00(?!\d)/g, "").replace(/\s+/g, " ").trim();
  const before = norm(priceEl?.textContent);
  const box = select.closest(".variant-select-wrapper");
  const up = t => String(t || "").trim().toUpperCase();
  const seen = () => {
   const v = up(box?.getAttribute("data-selected-value"));
   return !!v && (v === up(opt.value) || v === up(opt.text));
  };
  let told = 0;
  const tell = () => {
   if (select.__obUserPicked) return;
   if (select.value !== opt.value) {
    if (select.value) return;
    select.value = opt.value;
    told = 0;
   }
   if (told && (box ? seen() : priceEl && norm(priceEl.textContent) !== before)) return;
   told++;
   select.dispatchEvent(new Event("change", {
    bubbles: true
   }));
  };
  tell();
  [ 300, 800, 1500, 2500, 4e3, 6e3 ].forEach(ms => setTimeout(tell, ms));
 };
 const sizeChipsConvert = (root = document) => {
  qsa(".product-variants select", root).forEach(select => {
   if (select.dataset.chipsConverted) return;
   select.dataset.chipsConverted = "true";
   const host = select.closest(".variant-option");
   if (!host) return;
   const choices = Array.from(select.options).filter(o => o.value?.trim());
   if (isColourOption(select, host)) {
    buildChips(select, host, "colour", "SELECT COLOUR:");
    return;
   }
   if (isSizeSelect(select)) {
    const isFrame = (host.textContent || "").toLowerCase().includes("frame");
    if (!isFrame) preselectSize(select);
    buildChips(select, host, "size", isFrame ? "SELECT FRAME:" : "SELECT SIZE:");
    if (isFrame) host.querySelector(".chips-size-label")?.classList.add("obFrameLabel"); else sizeGuidePlace(host.querySelector(".chips-size-label"));
    return;
   }
   if (choices.length > 1) {
    const name = optionNameOf(select, host).toUpperCase();
    buildChips(select, host, "other", name ? `SELECT ${name}:` : "SELECT:");
    return;
   }
   if (choices[0]) {
    select.value = choices[0].value;
    select.dispatchEvent(new Event("change", {
     bubbles: true
    }));
   }
   host.classList.add("chips-auto-host");
  });
 };
 const sizeChipsInit = () => {
  if (!isProductDetailPage()) return;
  sizeChipsConvert();
 };
 const slugOf = path => normalisePath(String(path || "").split(/[?#]/)[0]).split("/").pop() || "";
 const colourDesignNow = () => {
  const here = slugOf(location.pathname);
  if (!here) return null;
  for (const design of CONF.colourLinks || []) {
   const colours = (design?.colours || []).filter(c => c && c.name && c.path);
   if (colours.length > 1 && colours.some(c => slugOf(c.path) === here)) return {
    colours,
    here,
    label: design.label,
    design: design.design
   };
  }
  return null;
 };
 const sizeChosenNow = () => {
  const select = qsa("#main-product-variants select").find(s => {
   const host = s.closest(".variant-option");
   return host && !isColourOption(s, host) && isSizeSelect(s);
  });
  const opt = select && select.selectedIndex >= 0 ? select.options[select.selectedIndex] : null;
  return opt && opt.value?.trim() && !opt.defaultSelected ? opt.text.trim() : "";
 };
 const colourHref = path => {
  const size = sizeChosenNow();
  return path + (size ? "?size=" + encodeURIComponent(size) : "");
 };
 const colourLinksSync = () => {
  qsa("#" + IDS.colourLinks + " a.obColourChip:not(.active)").forEach(a => {
   const href = colourHref(a.dataset.obPath);
   if (a.getAttribute("href") !== href) a.setAttribute("href", href);
  });
 };
 const colourDotBg = dot => {
  const c = (Array.isArray(dot) ? dot : [ dot ]).map(x => String(x || "").trim()).filter(Boolean);
  if (!c.length) return "";
  return c.length > 1 ? `linear-gradient(135deg, ${c[0]} 50%, ${c[1]} 50%)` : c[0];
 };
 const colourLinksScroll = row => {
  const on = row.querySelector(".obColourChip.active");
  if (!on || row.scrollWidth <= row.clientWidth + 1) return;
  const r = row.getBoundingClientRect();
  const a = on.getBoundingClientRect();
  const clear = r.left + r.width * .8;
  if (a.right > clear) row.scrollLeft += Math.ceil(a.right - clear);
 };
 let colourBound = false;
 const colourLinksBind = () => {
  if (colourBound) return;
  colourBound = true;
  document.addEventListener("change", e => {
   if (e.target?.matches?.("#main-product-variants select")) colourLinksSync();
  });
 };
 const colourLinksPlace = () => {
  if (!isProductDetailPage()) return false;
  const found = colourDesignNow();
  let variants = qs("#main-product-variants");
  if (found && !variants) {
   const buy = qs(".product-meta > .product-add-to-cart");
   if (buy) {
    variants = document.createElement("div");
    variants.id = "main-product-variants";
    variants.className = "product-variants obColourOnly";
    buy.parentNode.insertBefore(variants, buy);
   }
  }
  const old = qs("#" + IDS.colourLinks);
  if (!found || !variants) {
   old?.remove();
   return false;
  }
  if (old) {
   if (variants.firstElementChild !== old) variants.insertBefore(old, variants.firstElementChild);
   return true;
  }
  const host = document.createElement("div");
  host.id = IDS.colourLinks;
  host.className = "chips-colour-host obColourLinks";
  const label = document.createElement("div");
  label.className = "chips-colour-label";
  label.id = IDS.colourLinks + "Label";
  label.textContent = found.label || "SELECT COLOUR:";
  const row = document.createElement("div");
  row.className = "chips-variants";
  row.setAttribute("role", "group");
  row.setAttribute("aria-labelledby", label.id);
  found.colours.forEach(c => {
   const on = slugOf(c.path) === found.here;
   const a = document.createElement("a");
   a.className = "chip-variant obColourChip" + (on ? " active" : "");
   a.dataset.obPath = c.path;
   a.setAttribute("href", on ? c.path : colourHref(c.path));
   if (on) a.setAttribute("aria-current", "page");
   const bg = colourDotBg(c.dot);
   if (bg) {
    const dot = document.createElement("span");
    dot.className = "obColourDot";
    dot.setAttribute("aria-hidden", "true");
    dot.style.background = bg;
    a.appendChild(dot);
   }
   a.appendChild(document.createTextNode(c.name));
   row.appendChild(a);
  });
  row.addEventListener("click", e => {
   const a = e.target.closest?.("a.obColourChip");
   if (!a) return;
   if (a.classList.contains("active")) {
    e.preventDefault();
    return;
   }
   a.setAttribute("href", colourHref(a.dataset.obPath));
  });
  host.append(label, row);
  variants.insertBefore(host, variants.firstElementChild);
  colourLinksBind();
  requestAnimationFrame(() => colourLinksScroll(row));
  return true;
 };
 const DIMS = {
  off: 34,
  tick: 7,
  gap: 8,
  ms: 420,
  id: "obDims",
  unitKey: "obDimsUnit",
  svg: "http://www.w3.org/2000/svg"
 };
 const dims = {
  host: null,
  D: null,
  outline: "",
  art: "",
  sizes: [],
  cur: null,
  raf: 0,
  unit: "",
  local: "",
  ro: null,
  bound: false,
  langBound: false,
  svg: null,
  pArt: null,
  pOut: null,
  gLines: null
 };
 const dimsUp = t => String(t || "").trim().toUpperCase();
 const dimsPaper = {
  key: "",
  D: null
 };
 const dimsPaperNow = here => {
  const P = CONF.dimensionsPaper;
  if (!P) return null;
  const known = {};
  Object.keys(P).forEach(k => {
   if (Array.isArray(P[k]) && P[k][0] > 0 && P[k][1] > 0) known[dimsUp(k)] = P[k];
  });
  let names = null;
  for (const sel of qsa("#main-product-variants select")) {
   const n = Array.from(sel.options).filter(o => o.value?.trim()).map(o => dimsUp(o.text));
   if (n.length && n.every(x => known[x])) {
    names = n;
    break;
   }
  }
  if (!names) return null;
  const wide = (CONF.dimensionsLandscape || []).some(p => slugOf(p) === here);
  const key = here + "|" + names.join(",") + "|" + wide;
  if (dimsPaper.key !== key) {
   const sizes = {};
   names.forEach(n => {
    sizes[n] = wide ? [ known[n][1], known[n][0] ] : [ known[n][0], known[n][1] ];
   });
   dimsPaper.key = key;
   dimsPaper.D = {
    design: "Paper",
    w: 1,
    h: 1,
    sizes,
    outline: "M0,0H1V1H0Z"
   };
  }
  return dimsPaper.D;
 };
 const dimsList = () => Array.isArray(window.obDimensions) ? window.obDimensions : CONF.dimensions || [];
 const dimsDesignNow = () => {
  const here = slugOf(location.pathname);
  if (!here) return null;
  const list = dimsList().filter(d => d && d.outline && d.sizes);
  const byPath = list.find(d => (d.paths || []).some(p => slugOf(p) === here));
  if (byPath) return byPath;
  const cd = colourDesignNow();
  const name = cd && typeof cd.design === "string" ? cd.design.trim().toUpperCase() : "";
  return name && list.find(d => String(d.design || "").trim().toUpperCase() === name) || dimsPaperNow(here);
 };
 const dimsSelect = () => {
  const all = qsa("#main-product-variants select").filter(s => {
   const host = s.closest(".variant-option");
   return host && !isColourOption(s, host) && isSizeSelect(s);
  });
  return all.find(s => Array.from(s.options).some(o => o.value?.trim() && dims.sizes.some(z => z.name === dimsUp(o.text)))) || all[0] || null;
 };
 const dimsOption = name => {
  const select = dimsSelect();
  return select ? Array.from(select.options).find(o => o.value?.trim() && !o.disabled && dimsUp(o.text) === dimsUp(name)) || null : null;
 };
 const dimsSizeNow = () => {
  const select = dimsSelect();
  const opt = select && select.value && select.selectedIndex >= 0 ? select.options[select.selectedIndex] : null;
  const picked = opt && dims.sizes.find(s => s.name === dimsUp(opt.text));
  return picked || dims.sizes.find(s => s.name === dims.local) || dims.sizes[0];
 };
 const dimsPick = name => {
  dims.local = name;
  const select = dimsSelect();
  const opt = dimsOption(name);
  if (select && opt) {
   select.__obUserPicked = true;
   if (select.value !== opt.value) {
    select.value = opt.value;
    select.dispatchEvent(new Event("change", {
     bubbles: true
    }));
    return;
   }
  }
  dimsPaint(true);
 };
 const dimsWords = () => {
  const w = CONF.dimensionsWords || {};
  return w[obLang()] || w.en || {};
 };
 const dimsUnitNow = () => {
  if (!dims.unit) {
   let u = "";
   try {
    u = localStorage.getItem(DIMS.unitKey) || "";
   } catch {}
   dims.unit = /^(cm|mm)$/.test(u) ? u : CONF.dimensionsUnit === "mm" ? "mm" : "cm";
  }
  return dims.unit;
 };
 const dimsNum = mm => dimsUnitNow() === "mm" ? String(Math.round(mm)) : String(Math.round(mm) / 10);
 const dimsFmt = mm => dimsNum(mm) + " " + dimsUnitNow().toUpperCase();
 const dimsEl = (tag, attrs, parent) => {
  const n = document.createElementNS(DIMS.svg, tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(n);
  return n;
 };
 const dimsArrow = (g, x, y, dir) => {
  const a = 7, b = 2.6;
  const p = {
   l: [ [ x, y ], [ x + a, y - b ], [ x + a, y + b ] ],
   r: [ [ x, y ], [ x - a, y - b ], [ x - a, y + b ] ],
   u: [ [ x, y ], [ x - b, y + a ], [ x + b, y + a ] ],
   d: [ [ x, y ], [ x - b, y - a ], [ x + b, y - a ] ]
  }[dir];
  dimsEl("polygon", {
   points: p.map(q => q.join(",")).join(" "),
   fill: "currentColor",
   stroke: "none"
  }, g);
 };
 const dimsLine = (g, x1, y1, x2, y2) => dimsEl("line", {
  x1,
  y1,
  x2,
  y2
 }, g);
 const dimsAcross = (g, x1, x2, y, from, label) => {
  const past = y - DIMS.tick * Math.sign(from - y);
  dimsLine(g, x1, from, x1, past);
  dimsLine(g, x2, from, x2, past);
  dimsLine(g, x1, y, x2, y);
  dimsArrow(g, x1, y, "l");
  dimsArrow(g, x2, y, "r");
  dimsEl("text", {
   x: (x1 + x2) / 2,
   y: y - 9,
   "text-anchor": "middle"
  }, g).textContent = label;
 };
 const dimsDown = (g, y1, y2, x, from, label, right) => {
  const past = x - DIMS.tick * Math.sign(from - x);
  dimsLine(g, from, y1, past, y1);
  dimsLine(g, from, y2, past, y2);
  dimsLine(g, x, y1, x, y2);
  dimsArrow(g, x, y1, "u");
  dimsArrow(g, x, y2, "d");
  const tx = right ? x + 17 : x - 10, ty = (y1 + y2) / 2;
  dimsEl("text", {
   x: tx,
   y: ty,
   "text-anchor": "middle",
   transform: `rotate(-90 ${tx} ${ty})`
  }, g).textContent = label;
 };
 const dimsShape = (D, d) => D.smooth && d && !/[ACQSHVLTacqshvt]/.test(d) ? dimsSmooth(d) : d || "";
 const dimsSmooth = d => {
  let out = "";
  const re = /M(-?\d+),(-?\d+)l([^Mz]*)(z?)/g;
  let m;
  while (m = re.exec(String(d || ""))) {
   let x = +m[1], y = +m[2];
   const pts = [ [ x, y ] ];
   (m[3].match(/-?\d+,-?\d+/g) || []).forEach(s => {
    const p = s.split(",");
    x += +p[0];
    y += +p[1];
    pts.push([ x, y ]);
   });
   const n = pts.length, mid = (a, b) => [ (a[0] + b[0]) / 2, (a[1] + b[1]) / 2 ];
   if (n < 3) {
    out += "M" + pts.map(p => p.join(",")).join("L");
    continue;
   }
   if (m[4]) {
    const m0 = mid(pts[n - 1], pts[0]);
    out += `M${m0[0]},${m0[1]}`;
    for (let i = 0; i < n; i++) {
     const k = mid(pts[i], pts[(i + 1) % n]);
     out += `Q${pts[i][0]},${pts[i][1]} ${k[0]},${k[1]}`;
    }
    out += "Z";
   } else {
    out += `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < n - 1; i++) {
     const k = mid(pts[i], pts[i + 1]);
     out += `Q${pts[i][0]},${pts[i][1]} ${k[0]},${k[1]}`;
    }
    out += `L${pts[n - 1][0]},${pts[n - 1][1]}`;
   }
  }
  return out;
 };
 const dimsDraw = v => {
  const D = dims.D;
  const stage = dims.host?.querySelector(".obDimsStage");
  if (!D || !stage) return;
  const W = stage.clientWidth, H = stage.clientHeight;
  if (!W || !H) return;
  const padX = DIMS.off + 30, padY = DIMS.off + 26;
  const big = dims.sizes.reduce((a, s) => ({
   w: Math.max(a.w, s.w),
   h: Math.max(a.h, s.h)
  }), {
   w: 0,
   h: 0
  });
  const s = Math.min((W - padX - 8) / big.w, (H - padY - 8) / big.h);
  const rw = v.w * s, rh = v.h * s;
  const x0 = (W - rw + DIMS.off) / 2, y0 = (H - rh + DIMS.off) / 2;
  const words = dimsWords();
  let svg = dims.svg;
  if (!svg || svg.parentNode !== stage) {
   stage.textContent = "";
   svg = dims.svg = dimsEl("svg", {
    role: "img"
   }, stage);
   const shape = dimsEl("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 1.2,
    "stroke-linejoin": "round"
   }, svg);
   dims.pArt = dims.art ? dimsEl("path", {
    d: dims.art,
    "vector-effect": "non-scaling-stroke",
    "stroke-width": 1,
    opacity: .4
   }, shape) : null;
   dims.pOut = dimsEl("path", {
    d: dims.outline,
    "vector-effect": "non-scaling-stroke"
   }, shape);
   dims.gLines = dimsEl("g", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 1
   }, svg);
  }
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("aria-label", `${dimsFmt(v.w)} ${words.wide || "wide"}, ${dimsFmt(v.h)} ${words.high || "high"}`);
  const place = `translate(${x0} ${y0}) scale(${rw / D.w} ${rh / D.h})`;
  if (dims.pArt) dims.pArt.setAttribute("transform", place);
  dims.pOut.setAttribute("transform", place);
  const lines = dims.gLines;
  lines.textContent = "";
  dimsAcross(lines, x0, x0 + rw, y0 - DIMS.off, y0 - DIMS.gap, dimsFmt(v.w));
  dimsDown(lines, y0, y0 + rh, x0 - DIMS.off, x0 - DIMS.gap, dimsFmt(v.h), false);
  const c = Array.isArray(D.cut) && D.cut.length === 4 ? D.cut : null;
  if (c) {
   const kx = rw / D.w, ky = rh / D.h;
   const cx1 = x0 + c[0] * kx, cx2 = x0 + c[2] * kx, cy1 = y0 + c[1] * ky, cy2 = y0 + c[3] * ky;
   if (cx2 - cx1 >= 32) {
    dimsAcross(lines, cx1, cx2, cy1 - 22, cy1 - 6, dimsNum((c[2] - c[0]) * v.w / D.w));
    dimsDown(lines, cy1, cy2, cx2 + 22, cx2 + 6, dimsNum((c[3] - c[1]) * v.w / D.w), true);
   }
  }
 };
 const dimsRead = to => {
  const D = dims.D, c = Array.isArray(D.cut) && D.cut.length === 4 ? D.cut : null;
  const lines = [ `${to.name} ${dimsNum(to.w)} \xd7 ${dimsFmt(to.h)}` ];
  if (c) lines.push(`${dimsWords().cut || "CUT-THROUGH"} ${dimsNum((c[2] - c[0]) * to.w / D.w)} \xd7 ${dimsFmt((c[3] - c[1]) * to.w / D.w)}`);
  return lines.join("\n");
 };
 const dimsPaint = animate => {
  const host = dims.host;
  if (!host || !host.isConnected || !dims.sizes.length) return;
  const to = dimsSizeNow();
  const unit = dimsUnitNow();
  const words = dimsWords();
  host.querySelector(".obDimsHead").textContent = (dims.sizes.length > 1 ? words.head : words.headOne || words.head) || "SIZES";
  qsa(".obDimsChips .chip-variant", host).forEach(b => {
   const on = b.dataset.size === to.name;
   b.classList.toggle("active", on);
   b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  qsa(".obDimsUnits button", host).forEach(b => {
   const on = b.dataset.unit === unit;
   b.classList.toggle("active", on);
   b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  host.querySelector(".obDimsRead").textContent = dimsRead(to);
  cancelAnimationFrame(dims.raf);
  const from = dims.cur;
  if (!animate || !from || prefersReducedMotion() || from.w === to.w && from.h === to.h) {
   dims.cur = {
    w: to.w,
    h: to.h
   };
   dimsDraw(dims.cur);
   return;
  }
  const a = {
   w: from.w,
   h: from.h
  };
  let t0 = 0;
  const step = ts => {
   if (!t0) t0 = ts;
   const k = Math.min(1, (ts - t0) / DIMS.ms), e = 1 - Math.pow(1 - k, 3);
   dims.cur = {
    w: a.w + (to.w - a.w) * e,
    h: a.h + (to.h - a.h) * e
   };
   dimsDraw(dims.cur);
   if (k < 1) dims.raf = requestAnimationFrame(step);
  };
  dims.raf = requestAnimationFrame(step);
  setTimeout(() => {
   if (dims.cur && (dims.cur.w !== to.w || dims.cur.h !== to.h) && dimsSizeNow() === to) {
    cancelAnimationFrame(dims.raf);
    dims.cur = {
     w: to.w,
     h: to.h
    };
    dimsDraw(dims.cur);
   }
  }, DIMS.ms + 300);
 };
 const dimsBind = () => {
  if (!dims.bound) {
   dims.bound = true;
   document.addEventListener("change", e => {
    if (e.target?.matches?.("#main-product-variants select")) dimsPaint(true);
   });
  }
  if (!dims.langBound) {
   dims.langBound = true;
   onLang(() => dimsPaint(false));
  }
 };
 const dimsRemove = () => {
  cancelAnimationFrame(dims.raf);
  dims.ro?.disconnect();
  dims.ro = null;
  qs("#" + DIMS.id)?.remove();
  dims.host = null;
  dims.D = null;
  dims.cur = null;
  dims.svg = dims.pArt = dims.pOut = dims.gLines = null;
 };
 const dimsPlace = () => {
  const D = isProductDetailPage() && !inEditor ? dimsDesignNow() : null;
  const after = qs(".product-detail")?.closest("section.page-section");
  if (!D || !after) {
   dimsRemove();
   return false;
  }
  dimsBind();
  if (dims.host?.isConnected && dims.D === D) {
   if (after.nextElementSibling !== dims.host) after.insertAdjacentElement("afterend", dims.host);
   dimsPaint(false);
   return true;
  }
  dimsRemove();
  dims.D = D;
  dims.sizes = Object.keys(D.sizes).map(k => ({
   name: dimsUp(k),
   w: +D.sizes[k][0],
   h: +D.sizes[k][1]
  })).filter(s => s.w > 0 && s.h > 0);
  if (!dims.sizes.length) {
   dims.D = null;
   return false;
  }
  dims.outline = dimsShape(D, D.outline);
  dims.art = dimsShape(D, D.art);
  const host = document.createElement("section");
  host.id = DIMS.id;
  host.className = "obDims";
  host.setAttribute("data-wg-notranslate", "");
  host.innerHTML = '<div class="obDimsBox">' + '<div class="obDimsTop">' + '<h2 class="obDimsHead" id="obDimsHead"></h2>' + '</div>' + '<div class="obDimsStage"></div>' + '<div class="obDimsFoot">' + '<div class="chips-variants obDimsChips" role="group" aria-labelledby="obDimsHead"></div>' + '<p class="obDimsRead" aria-live="polite"></p>' + '<div class="obDimsUnits" role="group"></div>' + '</div>' + '</div>';
  host.setAttribute("aria-labelledby", "obDimsHead");
  const chips = host.querySelector(".obDimsChips");
  dims.sizes.forEach(s => {
   const b = document.createElement("button");
   b.type = "button";
   b.className = "chip-variant";
   b.dataset.size = s.name;
   b.textContent = s.name;
   chips.appendChild(b);
  });
  if (dims.sizes.length < 2) chips.hidden = true;
  chips.addEventListener("click", e => {
   const b = e.target.closest?.(".chip-variant");
   if (!b) return;
   if (e.detail > 0) b.blur();
   dimsPick(b.dataset.size);
  });
  const units = host.querySelector(".obDimsUnits");
  [ "cm", "mm" ].forEach(u => {
   const b = document.createElement("button");
   b.type = "button";
   b.dataset.unit = u;
   b.textContent = u.toUpperCase();
   units.appendChild(b);
  });
  units.addEventListener("click", e => {
   const b = e.target.closest?.("button[data-unit]");
   if (!b || b.dataset.unit === dims.unit) return;
   dims.unit = b.dataset.unit;
   try {
    localStorage.setItem(DIMS.unitKey, dims.unit);
   } catch {}
   dimsPaint(false);
  });
  after.insertAdjacentElement("afterend", host);
  dims.host = host;
  dimsPaint(false);
  if ("ResizeObserver" in window) {
   dims.ro = new ResizeObserver(() => {
    if (dims.cur) dimsDraw(dims.cur);
   });
   dims.ro.observe(host.querySelector(".obDimsStage"));
  }
  return true;
 };
 window.obDimsReady = () => {
  if (!isProductDetailPage()) return;
  safeRun("dimsPlace", dimsPlace);
  qsa("#main-product-variants .chips-size-label:not(.obFrameLabel)").forEach(l => safeRun("sizeGuidePlace", () => sizeGuidePlace(l)));
 };
 const headerBottom = () => {
  let b = 0;
  qsa("#header, #header .header-announcement-bar-wrapper").forEach(el => {
   const r = el.getBoundingClientRect();
   if (r.height > 0 && r.top <= 1 && r.bottom < window.innerHeight / 2) b = Math.max(b, r.bottom);
  });
  return b || 56;
 };
 const sizeGuideToPanel = panel => {
  const box = panel.querySelector(".obDimsBox") || panel;
  const top = box.getBoundingClientRect().top + window.scrollY - headerBottom() - 20;
  window.scrollTo({
   top: Math.max(0, top),
   behavior: prefersReducedMotion() ? "auto" : "smooth"
  });
  box.setAttribute("tabindex", "-1");
  box.focus({
   preventScroll: true
  });
 };
 const sizeGuideOpen = () => {
  const panel = qs("#" + DIMS.id);
  if (panel) sizeGuideToPanel(panel);
 };
 const sizeGuideClear = label => {
  STATE.obs.sizeGuide?.disconnect();
  STATE.obs.sizeGuide = null;
  const sub = qs(".product-meta > .product-description.hidden-up-md");
  if (!sub || !window.ResizeObserver) return;
  STATE.obs.sizeGuide = new ResizeObserver(() => {
   const s = sub.getBoundingClientRect();
   const l = label.getBoundingClientRect();
   const meets = s.width && s.top < l.bottom && s.bottom > l.top;
   const under = meets ? Math.max(0, Math.ceil(l.right - s.left)) : 0;
   label.style.setProperty("--obSubClear", under + "px");
  });
  STATE.obs.sizeGuide.observe(sub);
  STATE.obs.sizeGuide.observe(label);
 };
 const sizeGuideWords = lang => {
  const w = CONF.sizeGuide || {};
  return w[lang || obLang()] || w.en || "";
 };
 let sizeGuideLangBound = false;
 const sizeGuideBindLang = () => {
  if (sizeGuideLangBound) return;
  sizeGuideLangBound = true;
  onLang(lang => qsa(".obSizeGuide").forEach(b => {
   b.textContent = sizeGuideWords(lang);
  }));
 };
 const sizeGuidePlace = label => {
  if (!CONF.sizeGuide || !label || label.querySelector(".obSizeGuide")) return;
  if (!dimsDesignNow()) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "obSizeGuide";
  btn.setAttribute("data-wg-notranslate", "");
  btn.textContent = sizeGuideWords();
  btn.addEventListener("click", sizeGuideOpen);
  label.classList.add("obHasGuide");
  label.appendChild(btn);
  sizeGuideClear(label);
  sizeGuideBindLang();
 };
 const leadTimeTail = desc => {
  const tail = [];
  let found = false;
  qsa("p", desc).forEach(p => {
   if (found) {
    tail.push(p);
    return;
   }
   if (!textOf(p)) return;
   let seenText = false;
   Array.from(p.childNodes).forEach(n => {
    if (found) {
     tail.push(n);
     return;
    }
    if (n.nodeName === "BR") {
     if (seenText) {
      found = true;
      tail.push(n);
     }
     return;
    }
    if ((n.textContent || "").trim()) seenText = true;
   });
   found = true;
  });
  return tail;
 };
 const leadTimePlace = () => {
  const cart = qs(".product-meta .product-add-to-cart");
  if (!cart) return null;
  let line = document.getElementById(IDS.leadTime);
  qsa(".product-meta .product-description").forEach(desc => {
   const tail = leadTimeTail(desc);
   if (!tail.length) return;
   if (line || !tail.some(n => (n.textContent || "").trim())) {
    tail.forEach(n => n.remove());
    return;
   }
   line = document.createElement("div");
   line.id = IDS.leadTime;
   line.className = "obLeadTime";
   let p = null;
   tail.forEach(n => {
    if (n.nodeName === "P") {
     line.appendChild(n);
     p = null;
     return;
    }
    if (!p) {
     if (n.nodeName === "BR") {
      n.remove();
      return;
     }
     p = document.createElement("p");
     line.appendChild(p);
    }
    p.appendChild(n);
   });
   qsa("p", line).forEach(el => {
    while (el.firstChild?.nodeName === "BR") el.firstChild.remove();
    while (el.lastChild?.nodeName === "BR") el.lastChild.remove();
    if (!textOf(el)) el.remove();
   });
  });
  if (!line) return null;
  if (cart.nextElementSibling !== line) cart.insertAdjacentElement("afterend", line);
  return line;
 };
 const klarnaLinkPlace = () => {
  if (!CONF.klarnaPath) return;
  qsa(".product-meta .product-description").forEach(desc => {
   const p = qsa("p", desc).find(el => textOf(el));
   if (!p || !/klarna/i.test(textOf(p)) || p.querySelector("a")) return;
   const a = document.createElement("a");
   a.href = CONF.klarnaPath;
   a.className = "obKlarnaLink";
   while (p.firstChild) a.appendChild(p.firstChild);
   p.appendChild(a);
  });
 };
 const accMoveIntoMeta = () => {
  const line = leadTimePlace();
  klarnaLinkPlace();
  const accordion = qs(".ProductItem-additional .sqs-block-accordion, " + ".ProductItem-additional [data-block-type='accordion'], " + "section.page-section .sqs-block-accordion, " + "section.page-section [data-block-type='accordion']");
  if (!accordion) return false;
  const anchor = line || qs(".product-add-to-cart") || qs(".sqs-add-to-cart-button-wrapper") || qs("#main-product-variants");
  if (!anchor) return false;
  if (accordion.previousElementSibling === anchor) return true;
  const sourceSection = accordion.closest("section.page-section") || accordion.closest("section");
  anchor.insertAdjacentElement("afterend", accordion);
  if (sourceSection && !sourceSection.contains(anchor)) sourceSection.style.display = "none";
  return true;
 };
 const accInit = () => {
  if (!isProductDetailPage()) return;
  const inSquarespaceEditor = window.self !== window.top || document.body.classList.contains("sqs-edit-mode") || document.body.classList.contains("sqs-edit-mode-active") || document.body.classList.contains("squarespace-damask") || document.documentElement.classList.contains("squarespace-damask") || window.location.pathname.includes("/config/");
  if (inSquarespaceEditor) return;
  accMoveIntoMeta();
  STATE.obs.accordion?.disconnect();
  const inDims = m => {
   const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
   return !!t?.closest?.("#" + DIMS.id);
  };
  STATE.obs.accordion = new MutationObserver(muts => {
   if (muts.every(inDims)) return;
   scheduleRaf("acc", accMoveIntoMeta);
  });
  STATE.obs.accordion.observe(document.body, {
   childList: true,
   subtree: true
  });
 };
 const desktopChipsGetContainer = () => {
  const wrapper = qs(".category-navigation--desktop") || qs(".category-navigation") || qs(".product-list .product-list-header");
  if (!wrapper) return null;
  let ul = wrapper.querySelector("ul[data-ob-owned]");
  if (ul) return ul;
  wrapper.querySelectorAll("ul").forEach(el => {
   if (!el.hasAttribute("data-ob-owned")) el.style.display = "none";
  });
  ul = document.createElement("ul");
  ul.className = "nested-category-children";
  wrapper.appendChild(ul);
  return ul;
 };
 const desktopChipsBuild = () => {
  if (isCompact()) return false;
  if (!isShopContext() || isProductDetailPage()) return false;
  if (!isStorePage()) return false;
  const existing = qs("ul[data-ob-owned]");
  if (existing && existing.children.length > 0) {
   const wrapper = existing.parentElement;
   if (wrapper) {
    wrapper.querySelectorAll("ul:not([data-ob-owned])").forEach(el => {
     el.style.display = "none";
    });
   }
   return true;
  }
  const container = desktopChipsGetContainer();
  if (!container) return false;
  container.innerHTML = "";
  container.setAttribute("data-ob-owned", "true");
  const activeKey = categoryKeyFromPath();
  const frag = document.createDocumentFragment();
  LIVE_CATEGORIES.forEach(item => {
   const li = document.createElement("li");
   li.className = "nested-category-breadcrumb-list-item";
   const a = document.createElement("a");
   a.className = "nested-category-breadcrumb-link category-link";
   a.href = item.path;
   a.textContent = item.label;
   if (item.key === activeKey) {
    a.classList.add("active", "bold");
    a.setAttribute("aria-current", "page");
   }
   li.appendChild(a);
   frag.appendChild(li);
  });
  container.appendChild(frag);
  return true;
 };
 const desktopChipsInit = () => {
  if (isCompact()) return;
  if (!isShopContext() || isProductDetailPage()) return;
  if (!isStorePage()) return;
  observeUntil(() => desktopChipsBuild(), CONF.observeTimeoutMs);
 };
 const inspirationOpen = () => {
  if (!isProductDetailPage()) return true;
  const allItems = qsa("li.accordion-item");
  if (!allItems.length) return false;
  if (allItems.some(i => i.querySelector("button.accordion-item__click-target")?.getAttribute("aria-expanded") === "true")) return true;
  let item = allItems.find(i => {
   const title = i.querySelector(".accordion-item__title");
   return title && textOf(title).toLowerCase().includes("inspiration");
  });
  if (!item) item = allItems[0];
  const icon = item.querySelector(".accordion-icon-container");
  if (icon?.getAttribute("data-is-open") === "true") return true;
  const trigger = item.querySelector("button.accordion-item__click-target");
  if (!trigger) return false;
  if (trigger.getAttribute("aria-expanded") === "true") return true;
  trigger.click();
  return true;
 };
 const inspirationInit = () => {
  if (!isProductDetailPage()) return;
  const tryOpen = () => {
   const items = qsa("li.accordion-item");
   if (!items.length) return false;
   setTimeout(() => inspirationOpen(), 300);
   setTimeout(() => inspirationOpen(), 800);
   setTimeout(() => inspirationOpen(), 1500);
   return true;
  };
  observeUntil(tryOpen, CONF.observeTimeoutMs);
 };
 const supportsBackdrop = () => CSS.supports?.("backdrop-filter: blur(2px)") || CSS.supports?.("-webkit-backdrop-filter: blur(2px)");
 const WARP_BG = "radial-gradient(circle at 18% 78%,rgba(0,255,140,1),transparent 66%),radial-gradient(circle at 82% 18%,rgba(0,200,255,1),transparent 58%),radial-gradient(circle at 50% 50%,rgba(180,0,255,1),transparent 72%)";
 const makeWarpLayer = () => {
  const layer = document.createElement("div");
  layer.className = "obWarpLayer";
  Object.assign(layer.style, {
   position: "fixed",
   inset: "0",
   pointerEvents: "none",
   zIndex: "99998",
   mixBlendMode: "difference",
   background: WARP_BG,
   opacity: "0"
  });
  document.documentElement.appendChild(layer);
  return layer;
 };
 const makeBlurLayer = under => {
  const layer = document.createElement("div");
  layer.className = "obWarpLayer obWarpBlur";
  Object.assign(layer.style, {
   position: "fixed",
   inset: "0",
   pointerEvents: "none",
   zIndex: "99997",
   backdropFilter: "blur(0px)",
   webkitBackdropFilter: "blur(0px)"
  });
  document.documentElement.insertBefore(layer, under);
  return layer;
 };
 const pageBlurSet = (pb, px) => {
  pb.v = Math.max(0, px);
  const f = `blur(${pb.v.toFixed(2)}px)`;
  pb.el.style.backdropFilter = f;
  pb.el.style.webkitBackdropFilter = f;
 };
 const pageBlurStop = pb => {
  if (pb && pb.raf) {
   cancelAnimationFrame(pb.raf);
   pb.raf = 0;
  }
 };
 const pageBlurHold = (pb, L) => {
  const t0 = now();
  const step = () => {
   const t = now() - t0;
   if (t < L.inMs) {
    const k = t / L.inMs;
    pageBlurSet(pb, L.pageBlur * (1 - Math.pow(1 - k, 2)));
   } else {
    const c = (t - L.inMs) % L.cycleMs / L.cycleMs;
    pageBlurSet(pb, L.pageBlur + (L.pageBlurPeak - L.pageBlur) * (.5 - .5 * Math.cos(2 * Math.PI * c)));
   }
   pb.raf = requestAnimationFrame(step);
  };
  pb.raf = requestAnimationFrame(step);
 };
 const pageBlurOut = (pb, ms) => {
  pageBlurStop(pb);
  const from = pb.v, t0 = now();
  if (from <= .05) {
   pb.el.remove();
   return;
  }
  const step = () => {
   const k = Math.min(1, (now() - t0) / ms);
   pageBlurSet(pb, from * (1 - (1 - Math.pow(1 - k, 2))));
   if (k < 1) pb.raf = requestAnimationFrame(step); else {
    pb.raf = 0;
    pb.el.remove();
   }
  };
  pb.raf = requestAnimationFrame(step);
 };
 const galleryDotsRemove = () => {
  qs("#" + IDS.galleryDots)?.remove();
  STATE.galleryDots.dotsEl = null;
 };
 const galleryDotsTeardown = () => {
  STATE.obs.gallery?.disconnect();
  STATE.obs.gallery = null;
  clearTimeout(STATE.timers.galleryTry);
  galleryDotsRemove();
  Object.assign(STATE.galleryDots, {
   root: null,
   wrap: null,
   slides: [],
   active: 0,
   building: false
  });
 };
 const galleryBuildDots = () => {
  if (STATE.galleryDots.building) return;
  STATE.galleryDots.building = true;
  if (!isProductDetailPage() || !isMobile()) {
   galleryDotsTeardown();
   STATE.galleryDots.building = false;
   return;
  }
  const root = qs(SEL.productGalleryRoot);
  const wrap = root?.querySelector(SEL.productGallerySlidesWrap.split(", ")[0]) || root?.querySelector("[data-product-gallery='slides']");
  if (!root || !wrap) {
   STATE.galleryDots.building = false;
   return;
  }
  const slides = qsa(SEL.productGallerySlideItem, wrap).filter(el => {
   const im = el.querySelector("img");
   return !!im && [ "src", "data-src", "srcset", "data-srcset" ].some(a => im.getAttribute(a));
  });
  if (slides.length < 2) {
   galleryDotsRemove();
   STATE.galleryDots.building = false;
   return;
  }
  Object.assign(STATE.galleryDots, {
   root,
   wrap,
   slides
  });
  let dots = qs("#" + IDS.galleryDots);
  if (!dots) {
   dots = document.createElement("div");
   dots.id = IDS.galleryDots;
   root.insertAdjacentElement("afterend", dots);
  }
  STATE.galleryDots.dotsEl = dots;
  STATE.galleryDots.active = Math.max(0, slides.findIndex(s => s.classList.contains("selected")));
  dots.innerHTML = "";
  const frag = document.createDocumentFragment();
  slides.forEach((_, i) => {
   const btn = document.createElement("button");
   btn.type = "button";
   btn.className = "obGalleryDot";
   btn.dataset.idx = String(i);
   btn.setAttribute("aria-label", `Gallery image ${i + 1}`);
   btn.setAttribute("aria-current", i === STATE.galleryDots.active ? "true" : "false");
   frag.appendChild(btn);
  });
  dots.appendChild(frag);
  if (!dots.__obBound) {
   dots.__obBound = true;
   dots.addEventListener("click", e => {
    const t = e.target;
    if (!t.classList?.contains("obGalleryDot")) return;
    const idx = parseInt(t.dataset.idx, 10);
    if (!isFinite(idx)) return;
    STATE.galleryDots.active = idx;
    qsa(".obGalleryDot", dots).forEach((d, i) => d.setAttribute("aria-current", i === idx ? "true" : "false"));
    STATE.galleryDots.slides[idx]?.scrollIntoView({
     behavior: prefersReducedMotion() ? "auto" : "smooth",
     block: "nearest",
     inline: "center"
    });
   });
  }
  STATE.obs.gallery?.disconnect();
  STATE.obs.gallery = new MutationObserver(() => {
   if (!isMobile()) {
    galleryDotsTeardown();
    return;
   }
   const idx = STATE.galleryDots.slides.findIndex(s => s.classList.contains("selected"));
   if (idx !== -1 && idx !== STATE.galleryDots.active) {
    STATE.galleryDots.active = idx;
    qsa(".obGalleryDot", STATE.galleryDots.dotsEl).forEach((d, i) => d.setAttribute("aria-current", i === idx ? "true" : "false"));
   }
  });
  STATE.obs.gallery.observe(wrap, {
   attributes: true,
   subtree: true,
   attributeFilter: [ "class" ]
  });
  STATE.galleryDots.building = false;
 };
 const galleryDotsInit = () => {
  galleryDotsTeardown();
  if (!isProductDetailPage() || !isMobile()) return;
  let tries = 0;
  const tick = () => {
   tries++;
   galleryBuildDots();
   if (STATE.galleryDots.dotsEl || !isMobile() || tries > CONF.galleryDotsMaxTries) return;
   STATE.timers.galleryTry = setTimeout(tick, CONF.galleryDotsTryEveryMs);
  };
  tick();
 };
 const axisReset = () => Object.assign(STATE.axis, {
  deciding: false,
  locked: false,
  startX: 0,
  startY: 0,
  root: null,
  id: null
 });
 const axisStart = (x, y, target, id) => {
  if (!isTouchDevice() || !isProductDetailPage()) return;
  const wrap = target?.closest(SEL.productGallerySlidesWrap.split(", ")[0]);
  if (!wrap) return;
  Object.assign(STATE.axis, {
   deciding: true,
   locked: false,
   startX: x,
   startY: y,
   root: wrap,
   id
  });
 };
 const axisMove = (x, y, e) => {
  const A = STATE.axis;
  if (!A.deciding || !A.root) return;
  const dx = x - A.startX;
  const dy = y - A.startY;
  const ax = Math.abs(dx);
  const ay = Math.abs(dy);
  if (A.locked) {
   if (ay >= ax * CONF.axisLockUnlockVerticalRatio) {
    axisReset();
    return;
   }
   e?.cancelable && e.preventDefault();
   return;
  }
  if (ax < CONF.axisLockDecidePx && ay < CONF.axisLockDecidePx) return;
  if (ax >= ay * CONF.axisLockHorizontalRatio) {
   A.locked = true;
   e?.cancelable && e.preventDefault();
  } else if (ay >= ax * CONF.axisLockHorizontalRatio) {
   axisReset();
  }
 };
 const axisOnStart = e => {
  const t = e.touches?.[0];
  if (t) axisStart(t.clientX, t.clientY, e.target, "touch");
 };
 const axisOnMove = e => {
  const t = e.touches?.[0];
  if (t) axisMove(t.clientX, t.clientY, e);
 };
 const axisListen = (el, m) => {
  el[m]("touchstart", axisOnStart, {
   passive: true,
   capture: true
  });
  el[m]("touchmove", axisOnMove, {
   passive: false,
   capture: true
  });
  [ "touchend", "touchcancel" ].forEach(evt => el[m](evt, axisReset, {
   passive: true,
   capture: true
  }));
 };
 const axisBind = () => {
  const want = isTouchDevice() && isProductDetailPage();
  const wrap = want ? qs(SEL.productGallerySlidesWrap.split(", ")[0]) : null;
  if (wrap !== (STATE.axisEl || null)) {
   if (STATE.axisEl) axisListen(STATE.axisEl, "removeEventListener");
   STATE.axisEl = wrap;
   if (wrap) axisListen(wrap, "addEventListener");
  }
  return !want || !!wrap;
 };
 const cartUpgrade = el => {
  if (!el || el.__obUpgraded) return;
  const bg = el.style.backgroundImage;
  const match = bg?.match(/url\(["']?(.+?)["']?\)/i);
  const url = match?.[1];
  if (!url || !isSqspCdn(url)) {
   el.__obUpgraded = true;
   return;
  }
  const next = withFormat(url, CONF.images.cartThumbnailFormat);
  if (next !== url) el.style.backgroundImage = `url("${next}")`;
  el.__obUpgraded = true;
 };
 const cartBind = () => {
  if (STATE.cartBound) return true;
  const root = qs(SEL.cartRoot);
  if (!root) return false;
  STATE.cartBound = true;
  qsa(SEL.cartImg, root).forEach(cartUpgrade);
  STATE.obs.cart = new MutationObserver(muts => {
   for (const m of muts) {
    m.addedNodes?.forEach(n => {
     if (n.nodeType !== 1) return;
     if (n.matches?.(SEL.cartImg)) cartUpgrade(n);
     qsa(SEL.cartImg, n).forEach(cartUpgrade);
    });
    if (m.type === "attributes" && m.target?.matches?.(SEL.cartImg)) cartUpgrade(m.target);
   }
  });
  STATE.obs.cart.observe(root, {
   childList: true,
   subtree: true,
   attributes: true,
   attributeFilter: [ "style" ]
  });
  return true;
 };
 const cartInit = () => {
  if (cartBind()) return;
  if (!location.pathname.includes("/cart")) return;
  observeUntil(cartBind, CONF.observeTimeoutMs);
 };
 const BAR = {
  fadePx: 120,
  shadow: k => `rgba(0, 0, 0, ${(.08 * k).toFixed(3)}) 0px 0px 1px 0px, rgba(0, 0, 0, ${(.12 * k).toFixed(3)}) 0px -2px 8px 0px`
 };
 let cartBar = null;
 let cartBarDirty = true;
 let cartBarLookedAt = 0;
 let cartBarWatched = null;
 const cartBarFind = () => {
  if (cartBar && cartBar.isConnected) return cartBar;
  const root = qs("#sqs-cart-root");
  if (!root) return cartBar = null;
  if (cartBarWatched !== root) {
   cartBarWatched = root;
   cartBarDirty = true;
   new MutationObserver(() => {
    cartBarDirty = true;
   }).observe(root, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [ "class", "style" ]
   });
  }
  if (!cartBarDirty && now() - cartBarLookedAt < 1e3) return cartBar = null;
  cartBarDirty = false;
  cartBarLookedAt = now();
  cartBar = Array.from(root.querySelectorAll("div")).find(d => getComputedStyle(d).position === "sticky") || null;
  return cartBar;
 };
 const cartBarSettle = () => {
  const bar = cartBarFind();
  if (!bar || !bar.parentElement) return;
  const left = bar.parentElement.getBoundingClientRect().bottom - window.innerHeight;
  const k = Math.max(0, Math.min(1, left / BAR.fadePx));
  const v = k >= 1 ? "" : BAR.shadow(k);
  if (bar.__obShadow !== v) {
   bar.__obShadow = v;
   bar.style.boxShadow = v;
  }
  const pos = left <= 0 ? "relative" : "";
  if (bar.style.position !== pos) bar.style.position = pos;
 };
 const cartBarInit = () => {
  if (STATE.cartBarBound || normalisePath(location.pathname) !== "/cart") return;
  STATE.cartBarBound = true;
  const tick = () => scheduleRaf("cartBar", cartBarSettle);
  window.addEventListener("scroll", tick, {
   passive: true
  });
  window.addEventListener("resize", () => {
   cartBarDirty = true;
   tick();
  }, {
   passive: true
  });
  tick();
 };
 const galleryStill = () => {
  if (!isProductDetailPage() || STATE.galleryStillSet) return;
  STATE.galleryStillSet = true;
  const d = document.documentElement;
  d.classList.add("obGalleryStill");
  const evs = [ "pointerdown", "touchstart", "keydown" ];
  const go = () => {
   const items = [ ...document.querySelectorAll(".product-gallery-slides-item") ];
   const first = items.find(i => i.classList.contains("selected"));
   if (first && window.matchMedia("(max-width: 767px)").matches) {
    items.forEach(i => i.style.setProperty("animation", "none", "important"));
    const mo = new MutationObserver(() => {
     if (first.classList.contains("selected") && !items.some(i => i !== first && i.classList.contains("selected"))) return;
     items.forEach(i => i.style.removeProperty("animation"));
     mo.disconnect();
    });
    items.forEach(i => mo.observe(i, {
     attributes: true,
     attributeFilter: [ "class" ]
    }));
   }
   d.classList.remove("obGalleryStill");
   evs.forEach(t => window.removeEventListener(t, go, true));
  };
  evs.forEach(t => window.addEventListener(t, go, {
   capture: true,
   passive: true
  }));
 };
 const firstGalleryImg = () => qs(".product-gallery-slides-item.selected img") || qs(".product-gallery-slides-item img") || qs(".ProductItem-gallery-slides-item img");
 const productFirstImageBoost = () => {
  if (!isProductDetailPage()) return;
  const img = firstGalleryImg();
  if (!img) return;
  img.setAttribute("fetchpriority", "high");
  if (img.getAttribute("loading") === "lazy") img.setAttribute("loading", "eager");
 };
 const copyKeyFor = key => key === "home" ? "objects" : key;
 const getCategoryKey = () => {
  const f = filterKeyNow();
  if (f) return copyKeyFor(f);
  let url = "";
  try {
   url = decodeURIComponent(location.pathname + location.search).toLowerCase();
  } catch {
   url = (location.pathname + location.search).toLowerCase();
  }
  const after = url.replace(/^\/store\/?/, "");
  if (after) {
   const k = categoryKeyFromText(after);
   if (k !== "all") return copyKeyFor(k);
  }
  const active = qs(".category-navigation--desktop a[aria-current='page'], .nested-category-tree-wrapper a.active");
  if (active) return copyKeyFor(categoryKeyFromText(textOf(active)));
  return "all";
 };
 const obLang = () => {
  try {
   if (window.Weglot?.initialized && Weglot.getCurrentLang) return Weglot.getCurrentLang();
  } catch {}
  try {
   const w = localStorage.getItem("wglang");
   if (w) return w.slice(0, 2).toLowerCase();
  } catch {}
  return (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
 };
 let copyWeglotBound = false;
 const bindWeglotCopy = () => {
  if (copyWeglotBound) return;
  copyWeglotBound = true;
  onLang(() => applyCopy());
 };
 const copyLineEl = () => {
  const main = qs("main");
  const list = qs(".product-list");
  if (!main || !list) return null;
  for (const block of qsa(".sqs-block-html .sqs-html-content", main)) {
   if (block.compareDocumentPosition(list) & Node.DOCUMENT_POSITION_FOLLOWING) {
    const p = block.querySelector("p, .sqsrte-large");
    if (p) return p;
   }
  }
  return null;
 };
 const SHUFFLE = {
  ms: 750,
  key: "obCopyFrom",
  freshMs: 1e4,
  names: true,
  namesMs: 450
 };
 const SHUFFLE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const shuffleLetter = () => SHUFFLE_LETTERS[Math.floor(Math.random() * SHUFFLE_LETTERS.length)];
 const isShuffleLetter = ch => /\p{L}/u.test(ch);
 let copyFrom = null;
 try {
  const v = JSON.parse(sessionStorage.getItem(SHUFFLE.key) || "null");
  sessionStorage.removeItem(SHUFFLE.key);
  if (v && v.text && now() - v.t < SHUFFLE.freshMs) copyFrom = v.text;
 } catch {}
 const saveCopyFrom = () => {
  const p = copyLineEl();
  if (!p) return;
  const text = p.dataset.obShuffling ? p.getAttribute("aria-label") : textOf(p);
  if (!text) return;
  try {
   sessionStorage.setItem(SHUFFLE.key, JSON.stringify({
    t: now(),
    text
   }));
  } catch {}
 };
 const scrambleRun = (chars, cur, at, wait, alive, write, finish) => {
  const n = chars.length;
  const settled = chars.map(ch => !isShuffleLetter(ch));
  let t0 = 0;
  const tick = ts => {
   if (!alive()) return;
   if (!t0) t0 = ts;
   const t = ts - t0;
   let done = true;
   for (let i = 0; i < n; i++) {
    if (settled[i]) continue;
    if (t >= at[i]) {
     cur[i] = chars[i];
     settled[i] = true;
    } else {
     done = false;
     if (t >= wait && Math.random() < .45) cur[i] = shuffleLetter();
    }
   }
   if (done) {
    finish();
    return;
   }
   write(cur.join(""));
   requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
 };
 const copyShuffle = (p, from, to) => {
  const chars = [ ...to ], old = [ ...from ], n = chars.length, dur = SHUFFLE.ms;
  const token = String(now()) + Math.random();
  p.dataset.obShuffling = token;
  p.setAttribute("aria-label", to);
  const cur = chars.map((ch, i) => !isShuffleLetter(ch) ? ch : old[i] && isShuffleLetter(old[i]) ? old[i] : shuffleLetter());
  const box = document.createElement("span");
  box.setAttribute("aria-hidden", "true");
  box.textContent = cur.join("");
  p.textContent = "";
  p.appendChild(box);
  const text = box.firstChild;
  const at = chars.map((_, i) => i / n * dur * .65 + dur * .35 * Math.random());
  const finish = () => {
   if (p.dataset.obShuffling !== token) return;
   p.textContent = to;
   p.removeAttribute("aria-label");
   delete p.dataset.obShuffling;
  };
  scrambleRun(chars, cur, at, 0, () => p.dataset.obShuffling === token, s => {
   text.nodeValue = s;
  }, finish);
  setTimeout(finish, dur + 2e3);
 };
 const nameShuffle = (title, wait) => {
  if (title.__obShuf) return;
  qsa(".obNameOv", title).forEach(x => x.remove());
  const to = textOf(title);
  if (!to) return;
  title.__obShuf = true;
  const tcs = getComputedStyle(title);
  const ink = tcs.color;
  const ov = document.createElement("span");
  ov.className = "obNameOv";
  ov.setAttribute("aria-hidden", "true");
  ov.setAttribute("data-wg-notranslate", "");
  const slack = /center/.test(tcs.textAlign) ? "left:-3px;right:-3px;" : /right|end/.test(tcs.textAlign) ? "left:-6px;right:0;" : "left:0;right:-6px;";
  ov.style.cssText = "position:absolute;top:0;bottom:0;" + slack + "pointer-events:none;";
  ov.style.setProperty("color", ink, "important");
  const chars = [ ...to ], n = chars.length, dur = SHUFFLE.namesMs;
  const cur = chars.map(ch => isShuffleLetter(ch) ? shuffleLetter() : ch);
  ov.textContent = cur.join("");
  const text = ov.firstChild;
  title.style.position = "relative";
  title.style.setProperty("color", "transparent", "important");
  title.classList.add("obNameShuf");
  title.appendChild(ov);
  const at = chars.map((_, i) => wait + i / n * dur * .65 + dur * .35 * Math.random());
  const finish = () => {
   if (!title.__obShuf) return;
   title.__obShuf = false;
   ov.remove();
   qsa(".obNameOv", title).forEach(x => x.remove());
   title.classList.remove("obNameShuf");
   title.style.removeProperty("position");
   title.style.removeProperty("color");
  };
  scrambleRun(chars, cur, at, wait, () => !!title.__obShuf, s => {
   text.nodeValue = s;
  }, finish);
  setTimeout(finish, wait + dur + 2e3);
 };
 const namesSweep = force => {
  if (force) qsa(".obNameShuf").forEach(t => {
   t.__obShuf = false;
  });
  qsa(".obNameOv").forEach(ov => {
   if (!ov.parentElement?.__obShuf) ov.remove();
  });
  qsa(".obNameShuf").forEach(t => {
   if (t.__obShuf) return;
   t.classList.remove("obNameShuf");
   t.style.removeProperty("position");
   t.style.removeProperty("color");
  });
 };
 const namesShuffleIn = (grid, base = 0) => {
  if (!SHUFFLE.names || !grid || inEditor || prefersReducedMotion()) return;
  setTimeout(namesSweep, base + 320 + SHUFFLE.namesMs + 2600);
  const vh = window.innerHeight;
  let i = 0;
  Array.from(grid.children).forEach(tile => {
   if (!tile.classList.contains("product-list-item") || tile.classList.contains("obTileOff")) return;
   const title = tile.querySelector(".product-list-item-title");
   if (!title) return;
   const r = title.getBoundingClientRect();
   if (!r.height || r.bottom < 0 || r.top > vh) return;
   nameShuffle(title, base + Math.min(i++ * 40, 320));
  });
 };
 const cameFromStore = (() => {
  try {
   const nav = performance.getEntriesByType?.("navigation")[0];
   if (nav?.type === "reload") return false;
   if (nav?.type === "back_forward") return true;
   const ref = document.referrer ? new URL(document.referrer) : null;
   return !!ref && ref.host === location.host && /^\/store(\/|$)/i.test(ref.pathname);
  } catch {
   return false;
  }
 })();
 const arrivedInStore = !cameFromStore && STORE_LIST_RE.test(location.pathname);
 let lineArrive = arrivedInStore;
 let namesArrive = arrivedInStore;
 const afterHeroWait = fn => {
  const d = document.documentElement;
  if (!d.classList.contains("obHeroWait")) {
   fn();
   return;
  }
  const mo = new MutationObserver(() => {
   if (d.classList.contains("obHeroWait")) return;
   mo.disconnect();
   fn();
  });
  mo.observe(d, {
   attributes: true,
   attributeFilter: [ "class" ]
  });
  setTimeout(() => {
   mo.disconnect();
  }, 3e3);
 };
 const namesArriveInit = () => {
  if (!namesArrive) return;
  namesArrive = false;
  const go = tries => {
   if (document.documentElement.classList.contains("obFilterWait") && tries < 30) {
    setTimeout(() => go(tries + 1), 100);
    return;
   }
   namesShuffleIn(filterGrid(), 150);
  };
  afterHeroWait(() => go(0));
 };
 const applyCopy = () => {
  if (isProductDetailPage()) return;
  bindWeglotCopy();
  const p = copyLineEl();
  if (!p || p.dataset.obShuffling) return;
  const entry = COPY[getCategoryKey()] || COPY.all;
  const copy = obLang() === "it" ? entry.it : entry.en;
  p.setAttribute("data-wg-notranslate", "");
  const from = copyFrom;
  copyFrom = null;
  if (from && from.trim() !== copy && !inEditor && !prefersReducedMotion()) {
   copyShuffle(p, from.trim(), copy);
   return;
  }
  if (lineArrive && !inEditor && !prefersReducedMotion()) {
   lineArrive = false;
   if (p.textContent.trim() !== copy) p.textContent = copy;
   afterHeroWait(() => {
    if (p.isConnected && !p.dataset.obShuffling) copyShuffle(p, "", obLang() === "it" ? entry.it : entry.en);
   });
   return;
  }
  if (p.textContent.trim() !== copy) p.textContent = copy;
 };
 const FILTER = {
  cacheKey: "obStoreCats",
  waitMs: 3e3,
  maxAgeMs: 864e5,
  outMs: 200,
  inMs: 300,
  slowMs: 400
 };
 const filterSlow = token => {
  const d = document.documentElement;
  const t = setTimeout(() => {
   if (token === filterState.token) d.classList.add("obFilterSlow");
  }, FILTER.slowMs);
  return () => {
   clearTimeout(t);
   d.classList.remove("obFilterSlow");
  };
 };
 const filterState = {
  landed: false,
  off: false,
  key: "all",
  want: "all",
  token: 0,
  lists: {},
  fresh: {},
  pending: {},
  cache: null,
  urlBound: false,
  prefetchBound: false,
  refreshQueued: false,
  refreshed: false
 };
 const filterOn = () => CONF.chipsInPlace && !inEditor && !filterState.off && !!window.fetch;
 const isStoreAll = () => normalisePath(location.pathname) === "/store" && !/[?&]category=/i.test(location.search);
 const liveCatOf = key => LIVE_CATEGORIES.find(c => c.key === key && !c.page) || null;
 const hashKey = h => {
  try {
   h = decodeURIComponent(h || "");
  } catch {}
  h = String(h || "").replace(/^#/, "").toLowerCase().trim();
  if (!h) return "all";
  const k = categoryKeyFromText(h);
  return k !== "all" && liveCatOf(k) ? k : null;
 };
 const keyFromHashText = h => hashKey(h) || "all";
 const filterKeyNow = () => filterOn() && isStoreAll() ? keyFromHashText(location.hash) : null;
 const catKeyFromHref = href => {
  let u;
  try {
   u = new URL(href, location.href);
  } catch {
   return null;
  }
  if (u.origin !== location.origin || /[?&]category=/i.test(u.search)) return null;
  const p = normalisePath(u.pathname);
  if (p === "/store") return hashKey(u.hash);
  const c = LIVE_CATEGORIES.find(x => x.key !== "all" && !x.page && normalisePath(x.path) === p);
  return c ? c.key : null;
 };
 const routeHref = href => {
  if (!filterOn()) return href;
  let u;
  try {
   u = new URL(href, location.href);
  } catch {
   return href;
  }
  if (normalisePath(u.pathname) === "/store") return href;
  const key = catKeyFromHref(href);
  return key && key !== "all" ? location.origin + "/store#" + liveCatOf(key).label.toLowerCase() : href;
 };
 const filterCache = () => {
  if (filterState.cache) return filterState.cache;
  let c = null;
  try {
   c = JSON.parse(localStorage.getItem(FILTER.cacheKey) || "null");
  } catch {}
  if (!c || c.v !== 1 || !c.cats || typeof c.cats !== "object") c = {
   v: 1,
   seen: [],
   cats: {}
  };
  return filterState.cache = c;
 };
 const filterCacheSave = () => {
  try {
   localStorage.setItem(FILTER.cacheKey, JSON.stringify(filterCache()));
  } catch {}
 };
 const filterFetch = key => {
  if (filterState.pending[key]) return filterState.pending[key];
  const c = liveCatOf(key);
  if (!c || key === "all") return Promise.resolve(null);
  const ctrl = window.AbortController ? new AbortController : null;
  const timer = setTimeout(() => {
   if (ctrl) ctrl.abort();
  }, FILTER.waitMs);
  const p = fetch(c.path + "?format=json", {
   credentials: "same-origin",
   signal: ctrl ? ctrl.signal : undefined
  }).then(r => r.ok ? r.json() : null).then(j => {
   if (!j || !Array.isArray(j.items) || j.pagination && j.pagination.nextPage) return null;
   const ids = j.items.map(i => i && i.id).filter(Boolean);
   filterState.lists[key] = ids;
   filterState.fresh[key] = true;
   filterCache().cats[key] = {
    ids,
    t: now()
   };
   filterCacheSave();
   return ids;
  }).catch(() => null).then(ids => {
   clearTimeout(timer);
   delete filterState.pending[key];
   return ids;
  });
  filterState.pending[key] = p;
  return p;
 };
 const filterGrid = () => qs(".product-list-container .product-list-layout-container") || qs(".product-list .product-list-item")?.parentElement || null;
 const filterBox = () => qs(".product-list-container") || filterGrid();
 const filterAll = () => {
  const grid = filterGrid();
  if (!grid) return [];
  if (!grid.__obAll) grid.__obAll = qsa(".product-list-item[data-product-id]", grid);
  return grid.__obAll;
 };
 const pageIds = () => filterAll().map(t => t.dataset.productId);
 const filterSeenCovers = () => {
  const seen = new Set(filterCache().seen || []);
  return pageIds().every(id => seen.has(id));
 };
 const filterKnown = key => {
  if (filterState.fresh[key]) return filterState.lists[key];
  const e = filterCache().cats[key];
  return e && Array.isArray(e.ids) && filterSeenCovers() ? e.ids : null;
 };
 const filterNeed = key => key === "all" || filterKnown(key) ? Promise.resolve(true) : filterFetch(key).then(Boolean);
 const filterComplete = key => {
  if (key === "all") return true;
  const ids = filterKnown(key);
  if (!ids || !ids.length) return false;
  const on = new Set(pageIds());
  return ids.every(id => on.has(id));
 };
 const filterShow = key => {
  const grid = filterGrid();
  const all = filterAll();
  if (!grid || !all.length) return;
  let order = all, keep = null;
  if (key !== "all") {
   const byId = new Map(all.map(t => [ t.dataset.productId, t ]));
   const shown = (filterKnown(key) || []).map(id => byId.get(id)).filter(Boolean);
   keep = new Set(shown);
   order = shown.concat(all.filter(t => !keep.has(t)));
  }
  all.forEach(t => t.classList.toggle("obTileOff", !!keep && !keep.has(t)));
  const cur = Array.from(grid.children).filter(el => el.classList.contains("product-list-item"));
  if (order.some((t, i) => cur[i] !== t)) grid.append(...order);
  filterState.key = key;
 };
 const filterWarm = key => {
  if (key === "all" || !isStoreAll()) return;
  const byId = new Map(filterAll().map(t => [ t.dataset.productId, t ]));
  (filterKnown(key) || []).slice(0, 6).forEach(id => {
   const img = byId.get(id)?.querySelector("img.grid-item-image[loading='lazy']");
   if (img) img.loading = "eager";
  });
 };
 const filterFade = (el, from, to, ms) => {
  if (!el || !el.animate) return Promise.resolve();
  if (inEditor || prefersReducedMotion()) ms = 0;
  const start = from === null ? parseFloat(getComputedStyle(el).opacity) : from;
  const old = el.__obFade;
  const a = el.animate([ {
   opacity: isNaN(start) ? 1 : start
  }, {
   opacity: to
  } ], {
   duration: ms,
   easing: to ? "cubic-bezier(0.25, 0.1, 0.25, 1)" : "ease",
   fill: "forwards"
  });
  el.__obFade = a;
  if (old) old.cancel();
  const done = a.finished.then(() => {
   if (to === 1 && el.__obFade === a) {
    a.cancel();
    el.__obFade = null;
   }
  }, () => {});
  return Promise.race([ done, new Promise(r => setTimeout(r, ms + 100)) ]);
 };
 const chipsLight = key => {
  qsa("#" + IDS.chipsScroller + " .obChipBtn, #" + IDS.chipsInline + " .obChipBtn").forEach(a => a.setAttribute("aria-current", catKeyFromHref(a.href) === key ? "true" : "false"));
  qsa("ul[data-ob-owned] a.category-link").forEach(a => {
   const on = catKeyFromHref(a.href) === key;
   a.classList.toggle("active", on);
   a.classList.toggle("bold", on);
   if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
 };
 const copyTo = key => {
  const p = copyLineEl();
  if (!p) return;
  const entry = COPY[copyKeyFor(key)] || COPY.all;
  const to = obLang() === "it" ? entry.it : entry.en;
  const from = ((p.dataset.obShuffling ? p.getAttribute("aria-label") : textOf(p)) || "").trim();
  p.setAttribute("data-wg-notranslate", "");
  if (from === to) return;
  if (!from || inEditor || prefersReducedMotion()) {
   delete p.dataset.obShuffling;
   p.removeAttribute("aria-label");
   p.textContent = to;
   return;
  }
  copyShuffle(p, from, to);
 };
 const filterToTop = () => {
  const row = isCompact() ? qs("#" + IDS.chipsInline) : qs("ul[data-ob-owned]");
  const under = qs(SEL.header)?.getBoundingClientRect().bottom || 0;
  if (row ? row.getBoundingClientRect().top >= under : !(window.scrollY > 0)) return;
  const html = document.documentElement;
  const was = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.scrollBehavior = was;
 };
 const filterGiveUp = key => {
  filterState.off = true;
  const c = liveCatOf(key);
  location.replace(c ? c.path : "/store");
 };
 const filterGo = (key, push) => {
  const box = filterBox();
  if (!box || !liveCatOf(key)) return false;
  if (key === filterState.want) return true;
  filterState.want = key;
  const token = ++filterState.token;
  if (push) {
   const url = location.pathname + location.search + (key === "all" ? "" : "#" + liveCatOf(key).label.toLowerCase());
   try {
    history.pushState({
     obFilter: key
    }, "", url);
   } catch {}
  }
  chipsLight(key);
  copyTo(key);
  filterWarm(key);
  const d = document.documentElement;
  const out = d.classList.contains("obFilterWait") ? filterFade(box, 0, 0, 0) : filterFade(box, null, 0, FILTER.outMs);
  d.classList.remove("obFilterWait");
  const slowDone = filterSlow(token);
  Promise.all([ out, filterNeed(key) ]).then(([, ok]) => {
   if (token !== filterState.token) return;
   slowDone();
   if (!ok || !filterComplete(key)) {
    filterGiveUp(key);
    return;
   }
   filterToTop();
   filterShow(key);
   namesShuffleIn(filterGrid());
   filterFade(box, 0, 1, FILTER.inMs);
  });
  return true;
 };
 const plainLinkOf = e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const a = e.target.closest?.("a[href]");
  if (!a || a.target && a.target !== "_self" || a.hasAttribute("download")) return null;
  return a;
 };
 const filterTap = href => {
  if (!filterOn() || !isStoreAll() || !filterState.landed) return false;
  const key = catKeyFromHref(href);
  return key === null ? false : filterGo(key, true);
 };
 const filterLand = () => {
  if (filterState.landed) return;
  const d = document.documentElement;
  if (!filterOn() || !isStoreAll() || !filterGrid()) {
   d.classList.add("obFilterSet");
   return;
  }
  filterState.landed = true;
  filterAll();
  const key = keyFromHashText(location.hash);
  filterState.want = key;
  if (key !== "all" && filterComplete(key)) filterShow(key); else if (key !== "all") {
   d.classList.add("obFilterWait");
   const token = filterState.token;
   const slowDone = filterSlow(token);
   filterFetch(key).then(() => {
    if (token !== filterState.token) return;
    slowDone();
    if (!filterComplete(key)) {
     filterGiveUp(key);
     return;
    }
    filterShow(key);
    const box = filterBox();
    filterFade(box, 0, 0, 0);
    d.classList.remove("obFilterWait");
    filterFade(box, 0, 1, FILTER.inMs);
   });
  }
  d.classList.add("obFilterSet");
 };
 const filterRefresh = () => {
  if (!filterOn() || !isStoreAll() || filterState.refreshed) return;
  filterState.refreshed = true;
  const cache = filterCache();
  const force = !filterSeenCovers();
  const keys = LIVE_CATEGORIES.filter(c => c.key !== "all" && !c.page).map(c => c.key);
  let ok = true;
  const step = i => {
   if (i >= keys.length) {
    if (ok) {
     cache.seen = pageIds();
     filterCacheSave();
    }
    return;
   }
   const k = keys[i];
   const e = cache.cats[k];
   if (filterState.fresh[k] || !force && e && now() - e.t < FILTER.maxAgeMs) {
    step(i + 1);
    return;
   }
   const before = (filterKnown(k) || []).join();
   filterFetch(k).then(ids => {
    if (!ids) ok = false; else if (k === filterState.key && k === filterState.want && ids.join() !== before) filterShow(k);
    setTimeout(() => step(i + 1), 50);
   });
  };
  step(0);
 };
 const filterRefreshLater = () => {
  if (filterState.refreshQueued) return;
  filterState.refreshQueued = true;
  const go = () => window.requestIdleCallback ? requestIdleCallback(filterRefresh, {
   timeout: 3e3
  }) : setTimeout(filterRefresh, 1200);
  if (document.readyState === "complete") go(); else window.addEventListener("load", go, {
   once: true
  });
 };
 const filterInit = () => {
  filterLand();
  if (!filterOn()) return;
  if (!filterState.urlBound) {
   filterState.urlBound = true;
   const onUrl = () => {
    if (!filterOn() || !isStoreAll() || !filterState.landed) return;
    const key = hashKey(location.hash);
    if (key !== null && key !== filterState.want) filterGo(key, false);
   };
   window.addEventListener("popstate", onUrl);
   window.addEventListener("hashchange", onUrl);
  }
  if (!filterState.prefetchBound) {
   filterState.prefetchBound = true;
   const ahead = e => {
    const a = e.target.closest?.("a[href]");
    if (!a) return;
    const key = catKeyFromHref(a.href);
    if (!key || key === "all") return;
    if (filterState.landed) filterWarm(key);
    if (filterState.fresh[key] || filterState.pending[key]) return;
    const e2 = filterCache().cats[key];
    if (e2 && now() - e2.t < FILTER.maxAgeMs) return;
    filterFetch(key);
   };
   document.addEventListener("pointerover", ahead, {
    passive: true
   });
   document.addEventListener("touchstart", ahead, {
    passive: true
   });
  }
  if (filterState.landed) filterRefreshLater();
 };
 const navTypeSync = () => {
  const header = qs(SEL.header);
  const nav = qs("#header .header-nav-item:not(.header-nav-item--active) a") || qs("#header .header-nav-item a");
  if (!header || !nav) return;
  const cs = getComputedStyle(nav);
  header.style.setProperty("--obNavFontFamily", cs.fontFamily);
  header.style.setProperty("--obNavFontSize", cs.fontSize);
  header.style.setProperty("--obNavLetterSpacing", cs.letterSpacing);
 };
 const BAG = {
  key: "obBag",
  maxWaitMs: 4e3
 };
 let bagTrusted = !/(?:^|;\s*)hasCart=true/.test(document.cookie);
 let bagWatching = false;
 const bagShow = n => {
  const d = document.documentElement;
  if (n > 0) {
   d.style.setProperty("--obBag", String(n));
   d.classList.add("obBagKnown");
  } else {
   d.classList.remove("obBagKnown");
   d.style.removeProperty("--obBag");
  }
  try {
   localStorage.setItem(BAG.key, String(n));
  } catch {}
 };
 const bagWatch = () => {
  if (bagTrusted || bagWatching) return;
  bagWatching = true;
  const trust = () => {
   if (bagTrusted) return;
   bagTrusted = true;
   cartQtySync();
  };
  setTimeout(trust, BAG.maxWaitMs);
  const answered = () => {
   const qtyNow = () => (qs("#header .sqs-cart-quantity")?.textContent || "").trim();
   const was = qtyNow();
   let tries = 0;
   const check = () => {
    if (qtyNow() !== was || ++tries >= 8) trust(); else setTimeout(check, 50);
   };
   setTimeout(check, 50);
  };
  const isCart = e => /\/api\/commerce\/shopping-cart/.test(e.name);
  try {
   if (performance.getEntriesByType("resource").some(isCart)) {
    answered();
    return;
   }
   const po = new PerformanceObserver(list => {
    if (list.getEntries().some(isCart)) {
     po.disconnect();
     answered();
    }
   });
   po.observe({
    type: "resource",
    buffered: true
   });
  } catch {}
 };
 const cartQtySync = () => {
  if (!bagTrusted) return;
  let most = 0;
  qsa('#header a[href$="/cart"]').forEach(a => {
   const q = a.querySelector(".sqs-cart-quantity, [class*='quantity']");
   const n = (q && q.textContent || "").replace(/\D/g, "") || "0";
   most = Math.max(most, +n);
   if (a.getAttribute("data-ob-qty") !== n) a.setAttribute("data-ob-qty", n);
  });
  bagShow(most);
 };
 const cartLabelInit = () => {
  navTypeSync();
  bagWatch();
  cartQtySync();
  const header = qs(SEL.header);
  if (!header) return;
  STATE.obs.cartQty?.disconnect();
  STATE.obs.cartQty = new MutationObserver(() => scheduleRaf("cartQty", cartQtySync));
  STATE.obs.cartQty.observe(header, {
   childList: true,
   subtree: true,
   characterData: true
  });
 };
 const leaveLinkTarget = e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const a = e.target.closest?.("a[href]");
  if (!a) return null;
  if (a.target && a.target !== "_self") return null;
  if (a.hasAttribute("download")) return null;
  if (a.closest('[class*="language"], [class*="weglot"], [id*="language"], [data-folder-id]')) return null;
  const raw = a.getAttribute("href") || "";
  if (!raw || raw.startsWith("#") || /^(mailto|tel|sms|javascript):/i.test(raw)) return null;
  let url;
  try {
   url = new URL(a.href, location.href);
  } catch {
   return null;
  }
  if (url.origin !== location.origin) return null;
  if (url.pathname === location.pathname && url.search === location.search) return null;
  return url.href;
 };
 const chipMarkActive = a => {
  if (!a) return;
  a.closest("ul")?.querySelectorAll("a.category-link").forEach(x => {
   x.classList.remove("active", "bold");
   x.removeAttribute("aria-current");
  });
  a.classList.add("active", "bold");
  a.setAttribute("aria-current", "page");
 };
 const menuClose = () => {
  if (isMenuOpen()) qs("#header .header-burger-btn")?.click();
 };
 const isThisPage = a => {
  const raw = a.getAttribute("href") || "";
  if (!raw || raw.startsWith("#") || a.closest("[data-folder-id]")) return false;
  let u;
  try {
   u = new URL(a.href, location.href);
  } catch {
   return false;
  }
  return u.origin === location.origin && normalisePath(u.pathname) === normalisePath(location.pathname) && u.search === location.search && (!u.hash || u.hash === location.hash);
 };
 const bindLeaveFade = () => {
  if (STATE.leaveBound || inEditor) return;
  STATE.leaveBound = true;
  document.addEventListener("click", e => {
   const link = leaveLinkTarget(e);
   if (!link) {
    const a = plainLinkOf(e);
    if (a && filterTap(a.href)) {
     e.preventDefault();
     menuClose();
     return;
    }
    if (a && isMenuOpen() && isThisPage(a)) {
     e.preventDefault();
     menuClose();
    }
    return;
   }
   e.preventDefault();
   if (filterTap(link)) {
    menuClose();
    return;
   }
   const href = routeHref(link);
   const inStore = isStoreListPath(location.pathname) && isStoreListPath(new URL(href).pathname);
   if (inStore) chipMarkActive(e.target.closest?.(".product-list-header a.category-link"));
   leaveThen(() => {
    location.href = href;
   }, inStore);
  });
 };
 window.obLeaveTo = href => {
  try {
   href = new URL(href, location.href).href;
  } catch {}
  if (filterTap(href)) return;
  href = routeHref(href);
  let inStore = false;
  try {
   inStore = isStoreListPath(location.pathname) && isStoreListPath(new URL(href, location.href).pathname);
  } catch {}
  leaveThen(() => {
   location.href = href;
  }, inStore);
 };
 const IMG_BOX_SEL = "main .sqs-block-image .fluid-image-container, main .section-background .sqs-video-background-native";
 const imgCornersSet = () => {
  if (inEditor) return;
  const W = document.documentElement.clientWidth;
  const els = qsa(IMG_BOX_SEL).filter(el => el.offsetWidth > 0 && el.offsetHeight > 0);
  const rects = els.map(el => el.getBoundingClientRect());
  const slack = 1.5;
  const on = (x, y, r) => x >= r.left - slack && x <= r.right + slack && y >= r.top - slack && y <= r.bottom + slack;
  els.forEach((el, i) => {
   const r = rects[i];
   const corner = (x, y) => x <= slack || x >= W - slack || rects.some((o, j) => j !== i && on(x, y, o)) ? "0px" : "var(--obChipCorner)";
   const v = [ corner(r.left, r.top), corner(r.right, r.top), corner(r.right, r.bottom), corner(r.left, r.bottom) ].join(" ");
   if (el.style.getPropertyValue("--obImgCorners") !== v) el.style.setProperty("--obImgCorners", v);
  });
 };
 let imgCornersBound = false;
 const imgCornersInit = () => {
  imgCornersSet();
  if (imgCornersBound) return;
  imgCornersBound = true;
  if (document.readyState !== "complete") window.addEventListener("load", () => safeRun("imgCornersSet", imgCornersSet), {
   once: true
  });
 };
 const zoomHold = {
  bound: false,
  held: []
 };
 const zoomHoldInit = () => {
  if (zoomHold.bound || inEditor) return;
  if (!(isHome() || document.documentElement.classList.contains("ob-page-about"))) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  zoomHold.bound = true;
  const set = blocks => {
   zoomHold.held.forEach(b => blocks.includes(b) || b.classList.remove("obZoomHold"));
   blocks.forEach(b => b.classList.add("obZoomHold"));
   zoomHold.held = blocks;
  };
  document.addEventListener("pointerover", e => {
   const text = e.target.closest?.("main .fe-block");
   const fe = text?.parentElement;
   if (!text || !fe || !text.querySelector(".sqs-block-html")) return set([]);
   const r = text.getBoundingClientRect();
   set(qsa(":scope > .fe-block .sqs-block-image", fe).filter(b => {
    const i = b.getBoundingClientRect();
    return r.left < i.right && r.right > i.left && r.top < i.bottom && r.bottom > i.top;
   }));
  }, {
   passive: true
  });
  document.documentElement.addEventListener("pointerleave", () => set([]));
 };
 const footIsGroup = b => !!b.querySelector(".sqs-html-content p:first-child > strong:first-child") && !!b.querySelector("a[href]");
 const footPlace = b => {
  const cs = getComputedStyle(b);
  return {
   b,
   c0: parseInt(cs.gridColumnStart, 10),
   c1: parseInt(cs.gridColumnEnd, 10),
   r0: parseInt(cs.gridRowStart, 10)
  };
 };
 const footBox = b => b.querySelector(":scope > .sqs-block") || b.firstElementChild;
 const footText = b => (b.querySelector(".sqs-html-content") || b).getBoundingClientRect();
 const footLayoutGrid = grid => {
  const blocks = qsa(":scope > .fe-block", grid);
  const groups = blocks.filter(footIsGroup);
  groups.forEach(b => {
   const x = footBox(b);
   if (x) x.style.top = "";
  });
  grid.style.marginBottom = "";
  const G = groups.filter(footBox).map(footPlace).filter(g => g.r0 > 0 && g.c0 > 0 && g.c1 > g.c0);
  if (G.length < 2) return;
  G.sort((a, b) => a.r0 - b.r0 || a.c0 - b.c0);
  const pics = blocks.filter(b => !footIsGroup(b) && b.querySelector("img")).map(footPlace).filter(x => x.r0 > 0);
  const line = parseFloat(getComputedStyle(G[0].b.querySelector(".sqs-html-content p") || G[0].b).lineHeight) || 0;
  if (!line) return;
  const meets = (a, b) => a.c0 < b.c1 && b.c0 < a.c1;
  const covers = (a, x) => a.c0 <= x.c0 && x.c1 <= a.c1;
  const edge = CONF.footerEdgeLines;
  const firstTop = Math.min(...G.map(g => footText(g.b).top));
  const rules = qsa(":scope > .fe-block hr", grid).map(h => h.getBoundingClientRect().bottom).filter(y => y <= firstTop + 1);
  const ruleY = rules.length ? Math.max(...rules) : null;
  const put = (g, want) => {
   const box = footBox(g.b);
   if (getComputedStyle(box).position === "static") box.style.position = "relative";
   const d = want - footText(g.b).top;
   if (Math.abs(d) > .25) box.style.top = Math.round(d * 10) / 10 + "px";
  };
  G.forEach(g => {
   const above = G.filter(a => a !== g && a.r0 < g.r0 && meets(a, g));
   if (!above.length) {
    if (ruleY !== null && edge >= 0) put(g, ruleY + edge * line);
    return;
   }
   const clear = above.map(a => footText(a.b).bottom).concat(pics.filter(x => x.r0 < g.r0 && covers(g, x)).map(x => x.b.querySelector("img").getBoundingClientRect().bottom));
   put(g, Math.max(...clear) + CONF.footerGapLines * line);
  });
  const sec = grid.closest("section");
  if (sec && edge >= 0 && sec.querySelector(".section-divider-display")) {
   const low = Math.max(...blocks.map(b => {
    const t = b.querySelector(".sqs-html-content, img");
    return t && (t.textContent.trim() || t.tagName === "IMG") ? t.getBoundingClientRect().bottom : -Infinity;
   }));
   const shift = low + edge * line - sec.getBoundingClientRect().bottom;
   if (isFinite(shift) && Math.abs(shift) > .5) grid.style.marginBottom = Math.round(shift * 10) / 10 + "px";
  }
 };
 let footRaf = 0;
 const footLayout = () => {
  if (inEditor) return;
  cancelAnimationFrame(footRaf);
  footRaf = requestAnimationFrame(() => {
   footRaf = 0;
   qsa("#footer-sections .fluid-engine").forEach(grid => safeRun("footLayoutGrid", () => footLayoutGrid(grid)));
  });
 };
 let footWatched = null;
 const footInit = () => {
  if (inEditor || !("ResizeObserver" in window)) return;
  const root = qs("#footer-sections");
  if (!root) return;
  footLayout();
  if (footWatched === root) return;
  footWatched = root;
  const ro = new ResizeObserver(footLayout);
  qsa(".fluid-engine", root).forEach(grid => {
   ro.observe(grid);
   const sec = grid.closest("section");
   if (sec) ro.observe(sec, {
    box: "border-box"
   });
   qsa(":scope > .fe-block .sqs-html-content", grid).forEach(c => ro.observe(c));
   qsa(":scope > .fe-block img", grid).forEach(i => {
    ro.observe(i);
    i.addEventListener("load", footLayout);
   });
  });
  if (document.readyState !== "complete") window.addEventListener("load", footLayout, {
   once: true
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(footLayout);
 };
 const HEAD_SEL = '#footer-sections .sqs-block-image, #footer-sections .sqs-block[data-definition-name="website.components.imageFluid"]';
 const HOLD = {
  inMs: 300,
  cycleMs: 2400,
  minMs: 300,
  scrollMinMs: 700,
  scrollMaxMs: 1600,
  scrollMsPerPx: .35,
  outMs: 600
 };
 const WARP_FULL = {
  inMs: HOLD.inMs,
  minMs: HOLD.minMs,
  cycleMs: HOLD.cycleMs,
  outMs: HOLD.outMs,
  opacity: .62,
  opacityPeak: .74,
  scrollLift: .14,
  blur: 7,
  blurPeak: 11,
  pageBlur: 0,
  sat: 1.35,
  satPeak: 1.45,
  scrollSatLift: .25,
  loopHue: [ 35, 215, 395 ],
  turn: 360
 };
 const WARP_SOFT = {
  inMs: 400,
  minMs: 400,
  cycleMs: 3e3,
  outMs: 800,
  opacity: .48,
  opacityPeak: .57,
  scrollLift: .1,
  blur: 6,
  blurPeak: 9,
  pageBlur: 3,
  pageBlurPeak: 5,
  sat: 1.28,
  satPeak: 1.37,
  scrollSatLift: .18,
  loopHue: [ 35, 155, 35 ],
  turn: 270
 };
 const warpLook = () => isMobile() || isTouchDevice() ? WARP_SOFT : WARP_FULL;
 let hold = null;
 const holdFx = (blur, sat, hue) => supportsBackdrop() ? {
  backdropFilter: `blur(${blur}px) saturate(${sat}) hue-rotate(${hue}deg)`
 } : {
  filter: `blur(${blur * .8}px) saturate(${sat}) hue-rotate(${hue}deg)`
 };
 const headScrollUp = (layer, done, look = WARP_FULL, pb = null) => {
  const startY = window.scrollY || 0;
  if (startY < 2) {
   done();
   return;
  }
  STATE.headScroll = true;
  clearTimeout(STATE.chips.hideTimer);
  STATE.chips.hideTimer = null;
  if (isShopContext() && !isProductDetailPage()) chipsHide();
  const lite = isMobile() || isTouchDevice();
  const ms = Math.min(HOLD.scrollMaxMs, Math.max(HOLD.scrollMinMs, startY * HOLD.scrollMsPerPx));
  const html = document.documentElement;
  const was = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const prop = supportsBackdrop() ? "backdropFilter" : "filter";
  const blurNow = parseFloat((/blur\(([\d.]+)px\)/.exec(getComputedStyle(layer)[prop] || "") || [])[1]) || 7;
  const pageBlurFrom = pb ? pb.v : 0;
  let t0 = 0, stopped = false, ended = false;
  const end = () => {
   if (ended) return;
   ended = true;
   html.style.scrollBehavior = was;
   requestAnimationFrame(() => requestAnimationFrame(() => {
    STATE.chips.lastY = window.scrollY || 0;
    STATE.headScroll = false;
   }));
   setTimeout(() => {
    if (STATE.headScroll) {
     STATE.chips.lastY = window.scrollY || 0;
     STATE.headScroll = false;
    }
   }, 300);
   done();
  };
  const stop = () => {
   stopped = true;
  };
  [ "wheel", "touchstart", "keydown" ].forEach(ev => window.addEventListener(ev, stop, {
   passive: true,
   once: true
  }));
  const step = ts => {
   if (ended) return;
   if (!t0) t0 = ts;
   const p = Math.min(1, (ts - t0) / ms);
   if (stopped) {
    end();
    return;
   }
   window.scrollTo(0, Math.round(startY * (1 - ease(p))));
   const hue = 35 + look.turn * p, mid = Math.sin(Math.PI * p);
   const blur = lite ? blurNow : blurNow + 6 * mid;
   layer.style.opacity = String(look.opacity + look.scrollLift * mid);
   layer.style[prop] = `blur(${blur}px) saturate(${look.sat + look.scrollSatLift * mid}) hue-rotate(${hue}deg)`;
   if (pb) pageBlurSet(pb, pageBlurFrom * (1 - ease(p)));
   if (p < 1) requestAnimationFrame(step); else end();
  };
  requestAnimationFrame(step);
  setTimeout(() => {
   if (!t0) {
    window.scrollTo(0, 0);
    end();
   }
  }, ms + 1e3);
 };
 const headToTop = () => {
  const html = document.documentElement;
  const was = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.scrollBehavior = was;
 };
 const holdStart = block => {
  if (hold) return;
  if (prefersReducedMotion()) {
   hold = {
    reduced: true,
    block,
    releasing: false
   };
   block.classList.add("obHeadHeld");
   return;
  }
  const layer = makeWarpLayer();
  const L = warpLook();
  const h = {
   layer,
   block,
   look: L,
   t0: now(),
   loop: null,
   releasing: false
  };
  const [hueA, hueB, hueC] = L.loopHue;
  h.rampIn = layer.animate([ {
   opacity: 0,
   ...holdFx(0, 1, 0)
  }, {
   opacity: L.opacity,
   ...holdFx(L.blur, L.sat, hueA)
  } ], {
   duration: L.inMs,
   easing: "ease-out",
   fill: "forwards"
  });
  if (L.pageBlur > 0 && supportsBackdrop()) {
   h.pb = {
    el: makeBlurLayer(layer),
    v: 0,
    raf: 0
   };
   pageBlurHold(h.pb, L);
  }
  h.rampIn.onfinish = () => {
   if (h.releasing) return;
   h.loop = layer.animate([ {
    opacity: L.opacity,
    ...holdFx(L.blur, L.sat, hueA)
   }, {
    opacity: L.opacityPeak,
    ...holdFx(L.blurPeak, L.satPeak, hueB)
   }, {
    opacity: L.opacity,
    ...holdFx(L.blur, L.sat, hueC)
   } ], {
    duration: L.cycleMs,
    iterations: Infinity,
    easing: "linear"
   });
  };
  block.classList.add("obHeadHeld");
  hold = h;
 };
 const holdEnd = go => {
  const h = hold;
  if (!h || h.releasing) return;
  h.releasing = true;
  hold = null;
  h.block.classList.remove("obHeadHeld");
  if (h.reduced) {
   if (go) headToTop();
   return;
  }
  const wait = Math.max(0, h.look.minMs - (now() - h.t0));
  setTimeout(() => {
   try {
    h.rampIn.commitStyles();
    if (h.loop) h.loop.commitStyles();
   } catch {}
   h.rampIn.cancel();
   h.loop?.cancel();
   pageBlurStop(h.pb);
   const clear = () => {
    const out = h.layer.animate([ {
     opacity: 0,
     ...holdFx(0, 1, 0)
    } ], {
     duration: h.look.outMs,
     easing: "ease-out",
     fill: "forwards"
    });
    const done = () => h.layer.remove();
    out.onfinish = done;
    out.oncancel = done;
    if (h.pb) pageBlurOut(h.pb, h.look.outMs);
   };
   if (go !== true) {
    clear();
    return;
   }
   headScrollUp(h.layer, clear, h.look, h.pb);
  }, wait);
 };
 const headWarpDecorate = () => {
  qsa(HEAD_SEL).forEach(block => {
   if (block.dataset.obWarp || block.querySelector("a[href]")) return;
   block.dataset.obWarp = "true";
   block.setAttribute("role", "button");
   block.setAttribute("tabindex", "0");
   block.setAttribute("aria-label", "Back to the top");
   block.querySelector("img")?.setAttribute("draggable", "false");
  });
 };
 const bindHeadWarp = () => {
  if (STATE.headWarpBound) return;
  STATE.headWarpBound = true;
  const headOf = e => e.target.closest?.('[data-ob-warp="true"]');
  document.addEventListener("pointerdown", e => {
   if (e.button !== 0) return;
   const block = headOf(e);
   if (!block) return;
   holdStart(block);
   try {
    block.setPointerCapture(e.pointerId);
   } catch {}
  });
  document.addEventListener("pointerup", () => holdEnd(true));
  document.addEventListener("pointercancel", () => holdEnd(false));
  window.addEventListener("blur", () => holdEnd(false));
  document.addEventListener("visibilitychange", () => {
   if (document.hidden) holdEnd(false);
  });
  document.addEventListener("contextmenu", e => {
   if (headOf(e)) e.preventDefault();
  });
  document.addEventListener("dragstart", e => {
   if (headOf(e)) e.preventDefault();
  });
  document.addEventListener("keydown", e => {
   if (e.key !== "Enter" && e.key !== " ") return;
   const block = headOf(e);
   if (!block) return;
   e.preventDefault();
   if (!e.repeat) holdStart(block);
  });
  document.addEventListener("keyup", e => {
   if ((e.key === "Enter" || e.key === " ") && headOf(e)) holdEnd(true);
  });
 };
 const POPUPS = [ {
  path: CONF.newsletterPath,
  label: "Newsletter",
  title: "Newsletter sign-up",
  preload: true
 }, {
  path: CONF.withdrawPath,
  label: "Withdraw from contract",
  title: "Withdrawal form",
  preload: false
 }, {
  path: CONF.klarnaPath,
  label: "Paying with Klarna",
  title: "Paying with Klarna",
  preload: false
 } ];
 const NEWS = {
  el: null,
  panel: null,
  frames: {},
  active: null,
  lastFocus: null,
  inert: null
 };
 const inPopFrame = inEditor && /[?&]ob-popup=/.test(location.search);
 const popupOf = a => {
  try {
   const u = new URL(a.href, location.href);
   if (u.origin !== location.origin) return null;
   const p = normalisePath(u.pathname);
   if (p === normalisePath(location.pathname)) return null;
   return POPUPS.find(x => x.path && normalisePath(x.path) === p) || null;
  } catch {
   return null;
  }
 };
 const newsSetHeight = (f, h) => {
  if (!f || !h) return;
  const max = Math.round(window.innerHeight * .85) - 48;
  f.el.style.height = Math.max(160, Math.min(h, max)) + "px";
 };
 const newsReady = f => {
  if (!f) return;
  f.ready = true;
  if (f === NEWS.active) NEWS.el?.classList.add("obPopReady");
 };
 const newsShowFrame = f => {
  Object.values(NEWS.frames).forEach(x => {
   const on = x === f;
   x.el.style.position = on ? "" : "absolute";
   x.el.style.top = on ? "" : "0";
   x.el.style.left = on ? "" : "0";
   x.el.style.visibility = on ? "" : "hidden";
  });
 };
 const newsBuild = () => {
  if (NEWS.el) return;
  const el = document.createElement("div");
  el.className = "obPop";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.innerHTML = '<div class="obPopBackdrop"></div>' + '<div class="obPopPanel"></div>' + '<button type="button" class="obPopClose">CLOSE</button>';
  el.querySelector(".obPopBackdrop").addEventListener("click", newsClose);
  el.querySelector(".obPopClose").addEventListener("click", newsClose);
  NEWS.panel = el.querySelector(".obPopPanel");
  document.body.appendChild(el);
  NEWS.el = el;
 };
 const newsLoad = (href, pop) => {
  newsBuild();
  const key = normalisePath(pop.path);
  if (NEWS.frames[key]) return NEWS.frames[key];
  const el = document.createElement("iframe");
  el.className = "obPopFrameEl";
  el.title = pop.title;
  const f = {
   el,
   pop,
   ready: false
  };
  el.addEventListener("load", () => setTimeout(() => newsReady(f), 1200));
  const u = new URL(href, location.href);
  u.searchParams.set("ob-popup", "1");
  el.setAttribute("src", u.toString());
  NEWS.frames[key] = f;
  NEWS.panel.appendChild(el);
  newsShowFrame(NEWS.active);
  return f;
 };
 const newsPlaceClose = () => {
  const btn = NEWS.el?.querySelector(".obPopClose");
  const bag = qsa("#header .header-actions-action--cart a, #header .sqs-custom-cart").find(e => {
   const r = e.getBoundingClientRect();
   return r.width > 0 && r.top >= 0 && r.bottom < 120;
  });
  if (!btn || !bag) return;
  const r = bag.getBoundingClientRect();
  const bs = getComputedStyle(bag);
  btn.style.fontSize = bs.fontSize;
  btn.style.fontFamily = bs.fontFamily;
  btn.style.right = Math.round(window.innerWidth - r.right) + "px";
  btn.style.top = Math.round(r.top + r.height / 2 - btn.offsetHeight / 2) + "px";
 };
 const swipeBlock = e => {
  if (e.cancelable) e.preventDefault();
 };
 const lock = {
  on: false,
  token: 0
 };
 const popLock = () => {
  lock.token++;
  if (lock.on) return;
  lock.on = true;
  document.addEventListener("touchmove", swipeBlock, {
   passive: false
  });
 };
 const popUnlock = () => {
  if (!lock.on) return;
  lock.on = false;
  document.removeEventListener("touchmove", swipeBlock, {
   passive: false
  });
 };
 const popUnlockLater = () => {
  const t = ++lock.token;
  setTimeout(() => {
   if (t === lock.token) popUnlock();
  }, 320);
 };
 const POP_CLOSE_MS = 380;
 const popCloseByHand = () => !prefersReducedMotion() && (isMobile() || !!window.matchMedia?.("(hover: none)").matches);
 const newsFadeByHand = () => {
  const el = NEWS.el;
  const bd = el.querySelector(".obPopBackdrop");
  if (!bd) {
   el.classList.remove("obPopClosing");
   popUnlockLater();
   return;
  }
  let raf = 0, t0 = 0, done = false, tid = 0;
  const set = k => {
   const f = "blur(" + (18 * (1 - k)).toFixed(2) + "px)";
   bd.style.backdropFilter = f;
   bd.style.webkitBackdropFilter = f;
   bd.style.setProperty("--obPopTint", (.45 * (1 - k)).toFixed(3));
  };
  const clear = () => {
   bd.style.backdropFilter = "";
   bd.style.webkitBackdropFilter = "";
   bd.style.removeProperty("--obPopTint");
   bd.style.opacity = "";
   bd.style.transition = "";
   el.style.visibility = "";
  };
  const finish = () => {
   if (done) return;
   done = true;
   cancelAnimationFrame(raf);
   clearTimeout(tid);
   el.classList.remove("obPopClosing");
   const later = setTimeout(() => {
    clear();
    if (NEWS.stopClosing === stopNow) NEWS.stopClosing = null;
   }, 450);
   const stopNow = () => {
    clearTimeout(later);
    clear();
    NEWS.stopClosing = null;
   };
   NEWS.stopClosing = stopNow;
   popUnlockLater();
  };
  NEWS.stopClosing = () => {
   if (done) return;
   done = true;
   cancelAnimationFrame(raf);
   clearTimeout(tid);
   el.classList.remove("obPopClosing");
   clear();
   NEWS.stopClosing = null;
  };
  const step = ts => {
   if (done) return;
   if (!t0) t0 = ts;
   const k = Math.min(1, (ts - t0) / POP_CLOSE_MS);
   set(k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
   if (k < 1) raf = requestAnimationFrame(step); else finish();
  };
  set(0);
  raf = requestAnimationFrame(step);
  tid = setTimeout(finish, POP_CLOSE_MS + 500);
 };
 const popInert = on => {
  if (on) {
   if (NEWS.inert) return;
   NEWS.inert = Array.from(document.body.children).filter(el => el !== NEWS.el && !el.inert && el.tagName !== "SCRIPT");
   NEWS.inert.forEach(el => el.inert = true);
  } else if (NEWS.inert) {
   NEWS.inert.forEach(el => el.inert = false);
   NEWS.inert = null;
   chipsBarInert(document.documentElement.classList.contains("obChipsHidden"));
  }
 };
 const newsOpen = (href, pop) => {
  NEWS.stopClosing?.();
  const f = newsLoad(href, pop);
  NEWS.active = f;
  newsShowFrame(f);
  NEWS.el.setAttribute("aria-label", pop.label);
  NEWS.el.classList.toggle("obPopReady", f.ready);
  NEWS.lastFocus = document.activeElement;
  newsPlaceClose();
  document.documentElement.classList.add("obPopOpen");
  popInert(true);
  popLock();
  NEWS.el.getBoundingClientRect();
  requestAnimationFrame(() => {
   NEWS.el.classList.add("obPopShow");
   NEWS.el.querySelector(".obPopClose").focus({
    preventScroll: true
   });
  });
  f.el.contentWindow?.postMessage({
   obPopMeasure: 1
  }, location.origin);
 };
 const newsClose = () => {
  if (!NEWS.el?.classList.contains("obPopShow")) return;
  const byHand = popCloseByHand();
  if (byHand) NEWS.el.classList.add("obPopClosing");
  NEWS.el.classList.remove("obPopShow");
  document.documentElement.classList.remove("obPopOpen");
  popInert(false);
  if (byHand) newsFadeByHand(); else popUnlockLater();
  NEWS.lastFocus?.focus?.({
   preventScroll: true
  });
 };
 window.obNewsClose = newsClose;
 const newsForget = () => {
  if (NEWS.el?.classList.contains("obPopShow")) return;
  Object.values(NEWS.frames).forEach(f => f.el.remove());
  NEWS.frames = {};
  NEWS.active = null;
 };
 const bindNewsletter = () => {
  if (STATE.newsBound || inEditor) return;
  STATE.newsBound = true;
  const linkOf = e => {
   const a = e.target.closest?.("a[href]");
   const pop = a && popupOf(a);
   return pop ? {
    a,
    pop
   } : null;
  };
  document.addEventListener("click", e => {
   if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
   const hit = linkOf(e);
   if (!hit) return;
   e.preventDefault();
   e.stopPropagation();
   newsOpen(hit.a.href, hit.pop);
  }, true);
  [ "pointerover", "touchstart" ].forEach(t => document.addEventListener(t, e => {
   const hit = linkOf(e);
   if (hit) newsLoad(hit.a.href, hit.pop);
  }, {
   passive: true,
   capture: true
  }));
  document.addEventListener("keydown", e => {
   if (e.key === "Escape") newsClose();
  });
  window.addEventListener("message", e => {
   if (e.origin !== location.origin || !e.data) return;
   const f = Object.values(NEWS.frames).find(x => x.el.contentWindow === e.source);
   if (!f) return;
   if (e.data.obPopHeight) newsSetHeight(f, e.data.obPopHeight);
   if (e.data.obPopReady) newsReady(f);
   if (e.data.obPopClose && f === NEWS.active) newsClose();
  });
  onLang(() => newsForget(), false);
  if (!navigator.connection?.saveData && "IntersectionObserver" in window && !window.matchMedia("(hover: none)").matches) {
   const io = new IntersectionObserver(entries => {
    const hit = entries.find(en => en.isIntersecting);
    if (!hit) return;
    io.disconnect();
    const pop = popupOf(hit.target);
    const go = () => pop && newsLoad(hit.target.href, pop);
    const idle = () => window.requestIdleCallback ? requestIdleCallback(go, {
     timeout: 1500
    }) : setTimeout(go, 300);
    if (document.readyState === "complete") idle(); else window.addEventListener("load", idle, {
     once: true
    });
   }, {
    rootMargin: "0px"
   });
   onReady(() => qsa("a[href]").filter(a => popupOf(a)?.preload).forEach(a => io.observe(a)));
  }
  window.addEventListener("resize", () => NEWS.active && NEWS.el?.classList.contains("obPopShow") && NEWS.active.el.contentWindow?.postMessage({
   obPopMeasure: 1
  }, location.origin), {
   passive: true
  });
 };
 const popFrameInit = () => {
  if (!inPopFrame) return;
  const d = document.documentElement;
  d.classList.add("obPopFrame");
  d.style.overscrollBehavior = "none";
  let swipeY = 0;
  document.addEventListener("touchstart", e => {
   swipeY = e.touches[0] ? e.touches[0].clientY : 0;
  }, {
   passive: true
  });
  document.addEventListener("touchmove", e => {
   if (!e.cancelable || !e.touches[0]) return;
   const box = e.target.closest?.("textarea");
   if (box && box.scrollHeight > box.clientHeight + 1) return;
   const se = document.scrollingElement || d;
   const max = se.scrollHeight - se.clientHeight;
   const dy = e.touches[0].clientY - swipeY;
   if (max <= 1 || dy > 0 && se.scrollTop <= 0 || dy < 0 && se.scrollTop >= max - 1) e.preventDefault();
  }, {
   passive: false
  });
  const measure = () => {
   const m = qs("main") || document.body;
   if (m) window.parent.postMessage({
    obPopHeight: Math.ceil(m.getBoundingClientRect().height)
   }, location.origin);
  };
  onReady(() => {
   measure();
   try {
    new ResizeObserver(measure).observe(qs("main") || document.body);
   } catch {}
   window.addEventListener("load", measure);
   const ready = () => setTimeout(() => {
    measure();
    window.parent.postMessage({
     obPopReady: 1
    }, location.origin);
   }, 60);
   Promise.race([ document.fonts?.ready || Promise.resolve(), new Promise(r => setTimeout(r, 1500)) ]).then(ready, ready);
  });
  window.addEventListener("message", e => {
   if (e.origin === location.origin && e.data?.obPopMeasure) measure();
  });
  document.addEventListener("click", e => {
   const a = e.target.closest?.("a[href]");
   if (a && !a.target) a.target = "_top";
   if (!e.target.closest?.(".sqs-block, a, button, input, label, form, [role='dialog']")) window.parent.postMessage({
    obPopClose: 1
   }, location.origin);
  }, true);
  document.addEventListener("keydown", e => {
   if (e.key === "Escape") window.parent.postMessage({
    obPopClose: 1
   }, location.origin);
  });
 };
 popFrameInit();
 const bindCookiePrefs = () => {
  if (STATE.cookiePrefsBound) return;
  STATE.cookiePrefsBound = true;
  document.addEventListener("click", e => {
   const a = e.target.closest?.('a[href$="#cookie-preferences"]');
   if (!a) return;
   e.preventDefault();
   qs(".cookie-banner-manager .manage-bar-action")?.click();
  }, true);
 };
 const onScroll = () => scheduleRaf("scroll", () => {
  chipsUpdateByScroll();
 });
 const onResize = () => scheduleRaf("resize", () => {
  const prevW = STATE.viewport.w;
  markViewportDirty();
  if (computeViewport().w === prevW) return;
  navTypeSync();
  setChipsTopVar();
  if (!chipsLayoutCheck()) {
   if (isCompact()) {
    const row = qs("#" + IDS.chipsInline);
    if (row) chipsInlineInset(row);
   }
   chipsSyncInset();
  }
  galleryDotsInit();
  axisReset();
  safeRun("imgCornersSet", imgCornersSet);
  onScroll();
 });
 const FILE_ALT = /\.(jpe?g|png|webp|gif|heic|heif|tiff?|avif)\b|\(copy\)\s*$|^(img|dsc|dscf|pxl|screenshot)[\s_-]?\d/i;
 const ALT_ITEM = ".product-list-item, .grid-item, .product-block, .sqs-block-product, .summary-item, .list-item";
 const ALT_TITLE = ".product-list-item-title, .grid-title, .product-title, .product-block-title, .summary-title, [class*='item-title']";
 const ALT_GALLERY = ".product-gallery, .ProductItem-gallery, [data-product-gallery]";
 const ALT_SLIDE = ".product-gallery-slides-item, .product-gallery-thumbnails-item, .ProductItem-gallery-slides-item, .ProductItem-gallery-thumbnails-item";
 const altText = el => el ? Array.from(el.childNodes).filter(n => !(n.nodeType === 1 && n.classList?.contains("obNameOv"))).map(n => n.textContent).join("").replace(/\s+/g, " ").trim() : "";
 const altCase = t => /[a-z]/.test(t) || !/[A-Z]{2}/.test(t) ? t : t.toLowerCase().replace(/(^|[\s(\-\/])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/ (And|Of|The|In|On|With|For) /g, m => m.toLowerCase());
 const altBad = img => {
  if (img.dataset.obAlt) return false;
  const a = img.getAttribute("alt");
  return a === null || FILE_ALT.test(a.trim());
 };
 const altFix = () => {
  const imgs = qsa("main img").filter(altBad);
  if (!imgs.length) return;
  const detail = isProductDetailPage() ? qs(".product-detail, .ProductItem") : null;
  let detailName = "";
  if (detail) {
   detailName = altCase(altText(qs("h1.product-title, .product-meta h1, h1", detail)));
   const cd = colourDesignNow();
   const here = cd && cd.colours.find(c => slugOf(c.path) === cd.here);
   if (detailName && here && here.name && !detailName.toUpperCase().includes(String(here.name).toUpperCase())) detailName += ", " + here.name;
  }
  imgs.forEach(img => {
   let scope = null, name = "";
   const gallery = detail && detail.contains(img) ? img.closest(ALT_GALLERY) : null;
   if (gallery) {
    scope = gallery;
    name = detailName;
   } else {
    scope = img.closest(ALT_ITEM);
    name = scope ? altCase(altText(qs(ALT_TITLE, scope))) : "";
   }
   if (!name) return;
   img.dataset.obAltWas = img.getAttribute("alt") || "";
   img.dataset.obAlt = "1";
   if (img.closest(".product-image-zoom-duplicate")) {
    img.setAttribute("alt", "");
    return;
   }
   const slide = gallery ? img.closest(ALT_SLIDE) : null;
   const n = Math.max(0, slide && slide.parentElement ? Array.from(slide.parentElement.children).filter(c => c.matches(ALT_SLIDE)).indexOf(slide) : qsa("img", scope).filter(i => !i.closest(".product-image-zoom-duplicate")).indexOf(img));
   img.setAttribute("alt", n === 0 ? name : `${name}, photo ${n + 1}`);
  });
 };
 const confWarn = () => {
  if (!confIssues.length) return;
  try {
   console.warn("[OB SETTINGS] " + confIssues.join(" · "));
  } catch {}
  const preview = window.self !== window.top && !/[?&]ob-popup=/.test(location.search);
  if (!preview && !/[?&]obcheck\b/.test(location.search)) return;
  if (document.getElementById("obConfWarn") || !document.body) return;
  const box = document.createElement("div");
  box.id = "obConfWarn";
  box.setAttribute("role", "status");
  box.style.cssText = "position:fixed;left:12px;bottom:12px;z-index:2147483647;max-width:min(560px,calc(100vw - 24px));padding:12px 40px 12px 14px;background:#fff1b8;color:#111;border:1px solid #111;border-radius:5px;font:12px/1.45 ui-monospace,SFMono-Regular,Menlo,monospace;text-transform:none;letter-spacing:0;text-align:left";
  const head = document.createElement("strong");
  head.textContent = "OB SETTINGS (Footer) needs a fix";
  box.appendChild(head);
  confIssues.forEach(t => {
   const line = document.createElement("div");
   line.textContent = "· " + t;
   box.appendChild(line);
  });
  const note = document.createElement("div");
  note.textContent = "Only you see this note, in the Squarespace preview. Visitors get the backup copies inside ob-suite.js.";
  note.style.cssText = "opacity:.7;margin-top:6px";
  box.appendChild(note);
  const x = document.createElement("button");
  x.type = "button";
  x.textContent = "×";
  x.setAttribute("aria-label", "Close");
  x.style.cssText = "position:absolute;top:6px;right:8px;border:0;background:none;font:16px/1 inherit;color:#111;cursor:pointer;padding:4px";
  x.addEventListener("click", () => box.remove());
  box.appendChild(x);
  document.body.appendChild(box);
 };
 const initMainObserver = () => {
  if (STATE.obs.main) return;
  if (!(isHome() || isShopContext() || isStorePage())) return;
  const targets = [];
  const productList = qs(".product-list");
  const productDetail = qs(".product-detail, .ProductItem, [data-test='product-detail']");
  if (productList) targets.push(productList);
  if (productDetail) targets.push(productDetail);
  if (targets.length === 0 && isHome()) {
   qsa("main .sqs-block-product").forEach(b => {
    if (b.parentElement) targets.push(b.parentElement);
   });
  }
  if (targets.length === 0) targets.push(document.body || document.documentElement);
  const ownScramble = m => {
   const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
   if (t?.closest?.(".obNameOv")) return true;
   const nodes = [ ...m.addedNodes, ...m.removedNodes ];
   return nodes.length > 0 && nodes.every(n => n.nodeType === 1 && n.classList.contains("obNameOv"));
  };
  const touchesPrice = m => {
   const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
   if (t?.closest?.(PRICE_SEL)) return true;
   for (const n of m.addedNodes) {
    if (n.nodeType === 1 && (n.matches(PRICE_SEL) || n.querySelector(PRICE_SEL))) return true;
   }
   return false;
  };
  const callback = muts => {
   const real = muts.filter(m => !ownScramble(m));
   if (!real.length) return;
   if ((isHome() || isShopContext() || isProductDetailPage() || isCartPage()) && real.some(touchesPrice)) queuePriceClean();
   if (isProductDetailPage()) {
    safeRun("colourLinksPlace", colourLinksPlace);
    sizeChipsConvert();
    axisBind();
    if (real.some(touchesPrice)) buttonPriceSync();
   }
   if (isStorePage()) scheduleRaf("copy", applyCopy);
   scheduleRaf("alt", () => safeRun("altFix", altFix));
  };
  STATE.obs.main = new MutationObserver(callback);
  const opts = {
   childList: true,
   subtree: true,
   characterData: true
  };
  targets.forEach(t => STATE.obs.main.observe(t, opts));
 };
 const bindGlobal = () => {
  if (STATE.globalBound) return;
  STATE.globalBound = true;
  window.addEventListener("scroll", () => {
   STATE.scrollY = window.scrollY || 0;
   onScroll();
  }, {
   passive: true
  });
  window.addEventListener("resize", onResize, {
   passive: true
  });
  window.addEventListener("orientationchange", onResize, {
   passive: true
  });
  document.addEventListener("obcompactchange", () => scheduleRaf("compact", chipsLayoutCheck));
  bindNewsletter();
  bindCookiePrefs();
  bindLeaveFade();
  bindHeadWarp();
  window.addEventListener("load", () => {
   safeRun("altFix", altFix);
   setTimeout(() => safeRun("altFix", altFix), 2500);
  });
  if (!/[?&]ob-popup=/.test(location.search)) {
   const sideMQ = window.matchMedia("(orientation: landscape) and (max-width: 932px) and (hover: none) and (pointer: coarse)");
   let wasSide = false;
   const onSide = () => {
    const side = sideMQ.matches;
    if (wasSide && !side) {
     document.documentElement.classList.remove("obChipsHidden");
     qs("#" + IDS.chipsBar)?.remove();
     markViewportDirty();
     setTimeout(initForCurrentPage, 50);
    }
    wasSide = side;
   };
   window.addEventListener("resize", onSide);
   window.addEventListener("orientationchange", onSide);
   onSide();
  }
 };
 const teardown = keepChips => {
  STATE.obs.main?.disconnect();
  STATE.obs.cart?.disconnect();
  STATE.obs.gallery?.disconnect();
  STATE.obs.accordion?.disconnect();
  STATE.obs.cartQty?.disconnect();
  STATE.obs.sizeGuide?.disconnect();
  STATE.obs.main = STATE.obs.cart = STATE.obs.gallery = STATE.obs.accordion = STATE.obs.cartQty = STATE.obs.sizeGuide = null;
  STATE.cartBound = false;
  STATE.chips.lastY = null;
  STATE.priceQueue.clear();
  if (!keepChips) {
   document.documentElement.classList.remove("obChipsHidden", "obChipsReady");
   chipsRemove();
  }
  galleryDotsTeardown();
  axisReset();
 };
 const initForCurrentPage = () => {
  const key = normalisePath(location.pathname) + "|" + location.search;
  const t = now();
  if (STATE.initLock || STATE.lastInitKey === key && t - STATE.lastInitAt < 600) return;
  STATE.initLock = true;
  STATE.lastInitKey = key;
  STATE.lastInitAt = t;
  compactSync();
  const keepChips = isCompact() && STATE.chipsBuiltKey === pageKey() && !!qs("#" + IDS.chipsBar + " .obChipBtn");
  try {
   teardown(keepChips);
   markViewportDirty();
   bindGlobal();
   observeUntil(axisBind, CONF.observeTimeoutMs);
   safeRun("evenInit", evenInit);
   observeHeader();
   setChipsTopVar();
   initMainObserver();
   if (isHome() || isShopContext() || isProductDetailPage() || isCartPage()) queuePriceClean();
   safeRun("filterInit", filterInit);
   if (isShopContext() && !isProductDetailPage()) {
    safeRun("chipsInit", () => chipsInit(keepChips));
    safeRun("desktopChipsInit", desktopChipsInit);
    safeRun("namesArriveInit", namesArriveInit);
   }
   if (isProductDetailPage()) {
    safeRun("colourLinksPlace", colourLinksPlace);
    safeRun("sizeChipsInit", sizeChipsInit);
    safeRun("dimsPlace", dimsPlace);
    safeRun("buttonPriceSync", buttonPriceSync);
    safeRun("accInit", accInit);
    safeRun("inspirationInit", inspirationInit);
    safeRun("galleryDotsInit", galleryDotsInit);
    safeRun("productFirstImageBoost", productFirstImageBoost);
    safeRun("galleryStill", galleryStill);
   }
   if (isStorePage()) safeRun("applyCopy", applyCopy);
   safeRun("headWarpDecorate", headWarpDecorate);
   safeRun("footInit", footInit);
   safeRun("imgCornersInit", imgCornersInit);
   safeRun("zoomHoldInit", zoomHoldInit);
   safeRun("cartPricesWatch", cartPricesWatch);
   safeRun("cartInit", cartInit);
   safeRun("cartBarInit", cartBarInit);
   safeRun("cartLabelInit", cartLabelInit);
   safeRun("altFix", altFix);
   STATE.scrollY = window.scrollY || 0;
   onScroll();
  } finally {
   setTimeout(() => {
    STATE.initLock = false;
   }, 250);
  }
 };
 const earlyLangIsEnglish = () => {
  try {
   const w = localStorage.getItem("wglang");
   return !w || w === "en";
  } catch {
   return true;
  }
 };
 const boostInViewImages = () => {
  const vh = window.innerHeight;
  qsa("main img").forEach(img => {
   if (img.classList.contains("grid-image-hover")) return;
   const r = img.getBoundingClientRect();
   if (r.height === 0 || r.top >= vh || r.bottom <= 0) return;
   img.setAttribute("fetchpriority", "high");
   if (img.getAttribute("loading") === "lazy") img.setAttribute("loading", "eager");
  });
 };
 const EVEN = {
  bound: false,
  ro: null
 };
 const evenLines = () => {
  if (inEditor || !document.documentElement.classList.contains("ob-page-info")) return;
  const secs = qsa("main section.page-section").map(s => s.querySelector(".fluid-engine")).filter(Boolean);
  const read = secs.map(fe => {
   const fr = fe.getBoundingClientRect();
   let top = Infinity, bot = -Infinity;
   qsa(".fe-block", fe).forEach(b => {
    const kids = b.querySelectorAll(".sqs-html-content > *");
    const els = kids.length ? [ kids[0], kids[kids.length - 1] ] : [ b.querySelector(".sqs-block-content") || b ];
    els.forEach(e => {
     const r = e.getBoundingClientRect();
     if (r.height > 0) {
      top = Math.min(top, r.top);
      bot = Math.max(bot, r.bottom);
     }
    });
   });
   return bot > top ? {
    top: top - fr.top,
    bot: fr.bottom - bot
   } : null;
  });
  const phone = MQ.mobile.matches;
  secs.forEach((fe, i) => {
   const n = read[i], next = read[i + 1];
   let mt = "", mb = "";
   if (n) {
    const g = phone ? CONF.evenGapPhone : next ? next.top : null;
    if (phone && i > 0) mt = Math.round(g - n.top) + "px";
    if (next && g !== null) mb = Math.round(g - n.bot) + "px";
   }
   if (fe.style.marginTop !== mt) fe.style.marginTop = mt;
   if (fe.style.marginBottom !== mb) fe.style.marginBottom = mb;
  });
 };
 const evenInit = () => {
  if (inEditor || !document.documentElement.classList.contains("ob-page-info")) return;
  evenLines();
  if (EVEN.bound) return;
  EVEN.bound = true;
  const again = () => scheduleRaf("even", evenLines);
  window.addEventListener("resize", again, {
   passive: true
  });
  window.addEventListener("load", again);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(again);
  if ("ResizeObserver" in window) {
   EVEN.ro = new ResizeObserver(again);
   qsa("main section.page-section .fluid-engine").forEach(fe => EVEN.ro.observe(fe));
  }
 };
 const earlyPaint = () => {
  if (!(isHome() || isShopContext())) return;
  cleanAllPrices();
  productFirstImageBoost();
  if (isProductDetailPage()) safeRun("colourLinksPlace", colourLinksPlace);
  if (isProductDetailPage() && isMobile()) safeRun("galleryBuildDots", galleryBuildDots);
  if (isProductDetailPage() && !inEditor) {
   accMoveIntoMeta();
   galleryStill();
  }
  if (!isShopContext() || isProductDetailPage() || !isStorePage()) return;
  safeRun("filterLand", filterLand);
  compactSync();
  if (isCompact()) chipsInit(); else desktopChipsBuild();
  if (earlyLangIsEnglish()) applyCopy();
 };
 if (document.readyState === "loading") {
  safeRun("boostInViewImages", boostInViewImages);
  safeRun("earlyPaint", earlyPaint);
  safeRun("evenLines", evenLines);
 }
 onReady(initForCurrentPage);
 onReady(() => safeRun("confWarn", confWarn));
 window.addEventListener("pageshow", e => {
  document.documentElement.classList.remove("obLeaving", "obLeavingInStore", "obLeavingTop");
  if (e.persisted) {
   safeRun("namesSweep", () => namesSweep(true));
   initForCurrentPage();
  }
 }, {
  passive: true
 });
})();
} catch (e) { if (window.console) console.error("[OB main suite]", e); }

/* ---- touch flip, landscape, home swipe, links, dates, anchors ---- */
try {
(function() {
 var run = function(name, fn) {
  try {
   fn();
  } catch (e) {
   if (window.console) console.error("[OB " + name + "]", e);
  }
 };
 run("touch flip", function() {
  (() => {
   "use strict";
   if (window.__obTouchFlipHoldV1) return;
   window.__obTouchFlipHoldV1 = true;
   const touchMQ = window.matchMedia("(hover: none), (pointer: coarse)");
   const isTouchLike = () => touchMQ.matches || "ontouchstart" in window;
   const phoneMQ = window.matchMedia("(max-width: 767px)");
   const TILE_SEL = ".product-list-item";
   const HOVER_IMG_SEL = ".grid-image-wrapper img.grid-image-hover";
   const PREVIEW_DURATION = 2e3;
   let activeTiles = new Set;
   let heldTile = null;
   function loadHover(img) {
    img.decoding = "async";
    if (img.dataset.src && !img.src) img.src = img.dataset.src;
    if (img.dataset.srcset && !img.srcset) img.srcset = img.dataset.srcset;
   }
   function setActive(tile, isHeld = false) {
    if (!tile || activeTiles.has(tile)) return;
    const hover = tile.querySelector(HOVER_IMG_SEL);
    if (hover) loadHover(hover);
    activeTiles.add(tile);
    tile.classList.add("obTouchFlipActive");
    if (isHeld) {
     heldTile = tile;
    } else {
     setTimeout(() => {
      if (tile !== heldTile) {
       tile.classList.remove("obTouchFlipActive");
       activeTiles.delete(tile);
      }
     }, PREVIEW_DURATION);
    }
   }
   function releaseHeld() {
    if (heldTile) {
     const tile = heldTile;
     heldTile = null;
     setTimeout(() => {
      tile.classList.remove("obTouchFlipActive");
      activeTiles.delete(tile);
     }, PREVIEW_DURATION);
    }
   }
   function tileHasHover(tile) {
    return !!(tile && tile.querySelector(HOVER_IMG_SEL));
   }
   function getTileFromTouch(t) {
    if (!t) return null;
    const el = document.elementFromPoint(t.clientX, t.clientY);
    return el && el.closest ? el.closest(TILE_SEL) : null;
   }
   let pageHasFlip = false;
   function onTouchStart(e) {
    if (!isTouchLike()) return;
    pageHasFlip = !(phoneMQ.matches && document.body.classList.contains("view-item")) && !!document.querySelector(TILE_SEL + " " + HOVER_IMG_SEL);
    if (!pageHasFlip) return;
    const t = e.touches && e.touches[0];
    if (!t) return;
    const tile = getTileFromTouch(t);
    if (tile && tileHasHover(tile)) setActive(tile, true);
   }
   let moveRaf = 0;
   let lastPoint = null;
   function onTouchMove(e) {
    if (!pageHasFlip || !isTouchLike()) return;
    const t = e.touches && e.touches[0];
    if (!t) return;
    lastPoint = {
     clientX: t.clientX,
     clientY: t.clientY
    };
    if (moveRaf) return;
    moveRaf = requestAnimationFrame(() => {
     moveRaf = 0;
     const tile = getTileFromTouch(lastPoint);
     if (tile && tileHasHover(tile)) {
      if (heldTile && tile !== heldTile) releaseHeld();
      setActive(tile, true);
     }
    });
   }
   function onTouchEnd() {
    if (!isTouchLike()) return;
    if (moveRaf) {
     cancelAnimationFrame(moveRaf);
     moveRaf = 0;
    }
    releaseHeld();
   }
   let preloaded = false;
   function preloadHoverImages() {
    if (preloaded || !isTouchLike()) return;
    preloaded = true;
    if (navigator.connection && navigator.connection.saveData) return;
    const images = document.querySelectorAll(HOVER_IMG_SEL);
    if (!images.length) return;
    if ("IntersectionObserver" in window) {
     const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
       if (entry.isIntersecting) {
        loadHover(entry.target);
        observer.unobserve(entry.target);
       }
      });
     }, {
      rootMargin: "0px"
     });
     images.forEach(img => io.observe(img));
    } else {
     images.forEach(loadHover);
    }
   }
   document.addEventListener("touchstart", onTouchStart, {
    passive: true
   });
   document.addEventListener("touchmove", onTouchMove, {
    passive: true
   });
   document.addEventListener("touchend", onTouchEnd, {
    passive: true
   });
   document.addEventListener("touchcancel", onTouchEnd, {
    passive: true
   });
   if (document.readyState === "complete") preloadHoverImages(); else window.addEventListener("load", preloadHoverImages, {
    once: true
   });
  })();
 });
 run("landscape easter egg", function() {
  (function() {
   if (document.getElementById("landscapeEasterEgg")) return;
   if (/[?&]ob-popup=/.test(location.search)) return;
   var el = document.createElement("div");
   el.id = "landscapeEasterEgg";
   el.textContent = '\u201cIN SICILY, WOMEN ARE MORE DANGEROUS THAN SHOTGUNS.\u201d';
   document.body.appendChild(el);
  })();
 });
 run("home product swipe", function() {
  (function() {
   function isTrueMobile() {
    return window.innerWidth <= 767 && (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);
   }
   if (!isTrueMobile()) return;
   var isHomepage = document.body.classList.contains("homepage") || document.body.className.includes("homepage");
   if (!isHomepage) return;
   var hasRun = false;
   function init() {
    if (hasRun) return true;
    var blocks = document.querySelectorAll(".product-block-content, .sqs-block-product");
    if (!blocks.length) return false;
    var parentContainers = new Set;
    blocks.forEach(function(block) {
     var parent = block.parentElement;
     for (var i = 0; i < 5; i++) {
      if (parent) {
       parentContainers.add(parent);
       parent = parent.parentElement;
      }
     }
    });
    var didWork = false;
    parentContainers.forEach(function(container) {
     var items = Array.from(container.children).filter(function(child) {
      return child.querySelector(".product-block-content, .sqs-block-product");
     });
     if (items.length < 2) return;
     didWork = true;
     var obPadTop = 0, obPadBottom = 0;
     if (getComputedStyle(container).display === "grid") {
      var obFirst = Infinity, obLast = 0;
      items.forEach(function(child) {
       if (child.offsetTop < obFirst) obFirst = child.offsetTop;
       if (child.offsetTop + child.offsetHeight > obLast) obLast = child.offsetTop + child.offsetHeight;
      });
      obPadTop = Math.max(0, Math.round(obFirst));
      obPadBottom = Math.max(0, Math.round(container.offsetHeight - obLast));
     }
     container.style.cssText = [ "display:flex", "flex-direction:row", "flex-wrap:nowrap", "overflow-x:auto", "overflow-y:hidden", "-webkit-overflow-scrolling:touch", "scroll-snap-type:x mandatory", "scroll-padding-left:20px", "gap:12px", "padding-left:20px", "padding-right:30vw", "scrollbar-width:none", "padding-top:" + obPadTop + "px", "padding-bottom:" + obPadBottom + "px" ].join(";");
     if (!document.getElementById("obSwipeStyle")) {
      var style = document.createElement("style");
      style.id = "obSwipeStyle";
      style.textContent = ".obSwipeContainer::-webkit-scrollbar{display:none!important}";
      document.head.appendChild(style);
     }
     container.classList.add("obSwipeContainer");
     items.forEach(function(child) {
      child.style.cssText = [ "flex:0 0 70vw", "max-width:70vw", "min-width:70vw", "width:70vw", "scroll-snap-align:start", "padding-left:0", "padding-right:0" ].join(";");
     });
    });
    if (didWork) hasRun = true;
    return didWork;
   }
   if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
     if (!init()) {
      var obs = new MutationObserver(function() {
       if (init()) obs.disconnect();
      });
      obs.observe(document.body || document.documentElement, {
       childList: true,
       subtree: true
      });
      setTimeout(function() {
       obs.disconnect();
      }, 5e3);
     }
    });
   } else {
    if (!init()) {
     var obs = new MutationObserver(function() {
      if (init()) obs.disconnect();
     });
     obs.observe(document.body || document.documentElement, {
      childList: true,
      subtree: true
     });
     setTimeout(function() {
      obs.disconnect();
     }, 5e3);
    }
   }
  })();
 });
 run("fluid image links", function() {
  var go = function() {
   document.querySelectorAll('.sqs-block[data-definition-name="website.components.imageFluid"]').forEach(function(block) {
    var link = block.querySelector('a.sqs-block-image-link[href]');
    if (!link || block.dataset.obLinkFix) return;
    block.dataset.obLinkFix = '1';
    block.style.cursor = 'pointer';
    block.addEventListener('click', function(e) {
     if (e.target.closest('a')) return;
     var href = link.getAttribute('href');
     if (window.obLeaveTo) window.obLeaveTo(href); else window.location.href = href;
    });
   });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
 });
 run("video section link", function() {
  document.addEventListener('click', function(e) {
   if (e.defaultPrevented || e.button !== 0 || window.self !== window.top) return;
   var t = e.target;
   if (!t || !t.closest || t.closest('a, button, input, select, textarea, label')) return;
   var sec = t.closest('main section.page-section');
   if (!sec || !sec.querySelector('.section-background .sqs-video-background-native')) return;
   var links = sec.querySelectorAll('.sqs-html-content a[href]');
   if (links.length !== 1) return;
   var href = links[0].href;
   if (e.metaKey || e.ctrlKey) {
    window.open(href, '_blank', 'noopener');
    return;
   }
   if (window.obLeaveTo) window.obLeaveTo(href); else window.location.href = href;
  });
 });
 run("blog dates", function() {
  (function() {
   function reformatDates() {
    document.querySelectorAll('.blog-date, time.blog-date').forEach(function(el) {
     if (el.dataset.obDateFormatted) return;
     el.textContent = el.textContent.replace(/\//g, '.');
     el.dataset.obDateFormatted = 'true';
    });
    document.querySelectorAll('time.blog-meta-item--date[datetime]').forEach(function(el) {
     if (el.dataset.obDateFormatted) return;
     var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(el.getAttribute('datetime') || '');
     if (!m) return;
     var target = el.querySelector('span') || el;
     target.textContent = m[3] + '.' + m[2] + '.' + m[1];
     el.dataset.obDateFormatted = 'true';
    });
   }
   if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reformatDates);
   } else {
    reformatDates();
   }
   window.addEventListener('load', reformatDates);
  })();
 });
 run("anchor landing", function() {
  (function() {
   var html = document.documentElement;
   var release = function() {
    html.classList.remove("obHashLanding");
   };
   if (window.self !== window.top) {
    release();
    return;
   }
   var id = location.hash.slice(1);
   if (!id) {
    release();
    return;
   }
   try {
    id = decodeURIComponent(id);
   } catch (e) {}
   var nav = performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || {};
   var correct = nav.type !== "back_forward" && nav.type !== "reload";
   var moved = false;
   var stop = function() {
    moved = true;
   };
   [ "wheel", "touchmove", "keydown", "pointerdown" ].forEach(function(t) {
    window.addEventListener(t, stop, {
     passive: true,
     capture: true,
     once: true
    });
   });
   var land = function() {
    if (correct && !moved) {
     var el = document.getElementById(id);
     if (el) {
      var off = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
      if (Math.abs(el.getBoundingClientRect().top - off) >= 4) {
       html.classList.add("obHashLanding");
       el.scrollIntoView({
        block: "start"
       });
      }
     }
    }
    setTimeout(release, 150);
   };
   var settled = function() {
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([ fonts, new Promise(function(r) {
     setTimeout(r, 1500);
    }) ]).then(function() {
     setTimeout(land, 50);
    });
   };
   if (document.readyState === "complete") settled(); else window.addEventListener("load", settled, {
    once: true
   });
  })();
 });
})();
} catch (e) { if (window.console) console.error("[OB touch flip, landscape, home swipe, links, dates, anchors]", e); }

/* ---- meta fit ---- */
try {
(() => {
  const html = document.documentElement.classList;   // product pages only (the Header's page label; the address if the label is missing)
  if (!(html.contains("ob-page-product") || /^\/store\/p\//i.test(location.pathname))) return;
  const FLOOR = 60;     // highest the column may ride while sticking (keeps it clear of the header)
  const GAP = 24;       // space kept under the column
  const MIN_DESC = 110; // shortest an open accordion text may get; below this the column stops sticking
  const clear = d => { if (d && d.style.maxHeight) { d.style.maxHeight = ''; d.style.overflowY = ''; } };
  const fit = m => {
    const open = m.querySelector('.accordion-item__dropdown--open .accordion-item__description');
    m.querySelectorAll('.accordion-item__description').forEach(d => { if (d !== open) clear(d); });
    m.style.removeProperty('position');
    const cs = getComputedStyle(m);
    if (cs.position !== 'sticky') { m.style.removeProperty('top'); clear(open); return; }
    if (!m.style.top) m._obTop0 = parseFloat(cs.top) || m._obTop0 || 93;
    const top0 = m._obTop0, floor = Math.min(FLOOR, top0);
    let dds = 0;
    m.querySelectorAll('.accordion-item__dropdown').forEach(dd => { dds += dd.offsetHeight; });
    const base = m.offsetHeight - dds;
    if (innerHeight < base + floor + GAP + MIN_DESC) {
      m.style.setProperty('position', 'relative', 'important');
      m.style.removeProperty('top'); clear(open); return;
    }
    const natural = m.offsetHeight + (open ? open.scrollHeight - open.clientHeight : 0);
    const top = Math.max(floor, Math.min(top0, innerHeight - natural - GAP));
    if (m.style.top !== top + 'px') m.style.setProperty('top', top + 'px', 'important');
    if (!open) return;
    const over = top + natural + GAP - innerHeight;
    if (over > 0) {
      const h = Math.max(MIN_DESC, open.scrollHeight - over) + 'px';
      if (open.style.maxHeight !== h) { open.style.maxHeight = h; open.style.overflowY = 'auto'; open.style.overscrollBehavior = 'contain'; }
    } else clear(open);
  };
  const bind = () => document.querySelectorAll('.product-meta').forEach(m => {
    if (m._obFit || !window.ResizeObserver) return;
    m._obFit = 1;
    new ResizeObserver(() => fit(m)).observe(m);
    fit(m);
  });
  let queued = 0;
  new MutationObserver(() => {
    if (queued) return;
    queued = 1;
    requestAnimationFrame(() => { queued = 0; bind(); });
  }).observe(document.body, { childList: true, subtree: true });
  addEventListener('resize', () => document.querySelectorAll('.product-meta').forEach(fit));
  bind();
})();
} catch (e) { if (window.console) console.error("[OB meta fit]", e); }
