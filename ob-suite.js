/* OB SOLID SUITE v17.15 · ob-suite.js · Opposite Things
   v17.15 = v17.14 + phones: the home products row (FINDS) scrolls freely (no snap) and runs from page margin to page margin;
   the greyscale header copy (black: "mono") stays in step with the header's fade-in and fade-out (tapping the logo to reload made
   it flicker over the logo and menu); product pages: an accordion section tapped open is brought fully into view (accordion reveal).
   v17.14 = v17.13, tidied (Footer v17.74): the Footer's styles now live in ob-suite.css (same commit, loaded just before this
   file) and the few rules that shape the page before any script runs moved into Custom CSS v17.14, so nothing moves after the
   first paint (the phone logo used to drop 1px and the menu shift 6px when the Footer styles arrived). Taken out: the logo
   shrink (logoShrink, logoShrinkOver: Ben, 27 Nov), black "auto" / "snap" and their brightness sampling, monoPhotos, and the
   old pointer dot and shapes (cursor, cursorDot, cursorShapes, shapeStyle, cursorSize, viewer.cursor): the pointer is always
   the normal arrow with the word chip beside it over photos. black: true is now switched on by html.obBlack.
   What the site looks like is unchanged.
   v17.13 = v17.12 + phoneTileWord in OB SETTINGS ("VIEW"): the RUGS / PRINTS / OBJECTS chips show just that word on phones. The logo shrink no longer animates on load or page change (html.obLogoAnim after the first touch/wheel/key).
   v17.12 = v17.11 + black: "mono" in OB SETTINGS: the old white difference header and video words, made pure greyscale by a copy on top with mix-blend-mode: saturation (html.obMono, [data-ob-mono]); styles in the Footer. monoHero: false = header only, monoPhotos: false = words over photos stay plain white.
   v17.11 = v17.10 + black: "snap" in OB SETTINGS: logo/nav and the words over the home video go pure black or pure white depending on what's behind them (html.obSnap, .obNavLight, .obHeroLight); styles in the Footer.
   v17.10 = v17.9 + the logo shrinks gradually with the scroll (100% → logoShrink over the first logoShrinkOver px, default 260) instead of all at once.
   v17.9 = v17.8 + black logo, nav, hero words and words over photos (black: true in OB SETTINGS; "auto" = nav turns white only over dark photos / video frames, html.obNavLight; false = old look) and the logo shrinking on scroll (html.obScrolled; logoShrink in OB SETTINGS). Styles in the Footer.
   v17.8 = v17.7 + home page: each tile's words come from homeWords in OB SETTINGS (VIEW RUGS, VIEW PRINTS, VIEW OBJECTS, BROWSE FINDS, EXPLORE SLOT; hero, Bloom and Rosalia stay SHOP), on the phone chips and the computer pointer chip; on computers SHOP FINDS (now BROWSE FINDS) becomes a fixed chip where it is, like the phone chips; over the FINDS chrome letters (an image block set to fit) the chip keeps the page tint, frosted, instead of the see-through photo look (shopChips: "phone" keeps computers as before). The words view / browse / explore count as SHOP words everywhere.
   v17.7 = v17.6 + the statement's A goes up to the end of the fourth line: … / TO KEEP YOUR PLACE A / LITTLE LESS EXPECTED. (break before LITTLE instead of A).
   v17.6 = v17.5 + home page, phones: the statement under the hero (EVERY ROOM NEEDS SOMETHING SLIGHTLY OFF…) breaks on Ben's five lines: EVERY ROOM NEEDS / SOMETHING SLIGHTLY OFF. / THINGS MADE AND FOUND / TO KEEP YOUR PLACE, / A LITTLE LESS EXPECTED. The suite adds <br class="obBr"> before SOMETHING, THINGS, TO and A, only while the words are exactly these (any copy change or another language: left alone). Custom CSS hides them from 768px up and sets the size. statementLines: false in OB_CONF switches it off.
   v17.5 = v17.4 + home page, phones and tablets: the SHOP… words under the hero and tile photos become chips like the computer pointer chip, where they are now (frosted over a photo, a faint tint on the page; shopChips: false in OB_CONF switches it off).
   v17.4 = v17.3 + product pages: a frosted ‹ SHOP chip pops in under the header when you scroll back up and goes when you scroll down, like the store chips; it goes back to the store page you came from, same category and place (backChip in OB_CONF: show "both" | "phone" | "computer" | false).
   v17.3 = v17.2 + photo viewer: no flash on opening (the white background fades in from the first frame instead of popping in), the page photo steps aside while its copy flies, photos and blur only swap in once decoded, viewer made ready after the page loads.
   v17.2 = v17.1 + the Footer's own code (Footer v17.51): store page swap, perks chips, photo viewer and pointer
   chips, OTHER THINGS row. Moved here word for word from Footer v17.50; what the site does is unchanged.
   The Footer now holds: first photos early (must stay at the very top), the safety line, OB SETTINGS (OB_CONF),
   the small <style> boxes, and one <script src> line pointing here by commit ID.
   (history)
   v17.1 = v17.0 + store text swap (Footer v17.44): product names scramble in their own text (one copy on screen,
   never doubled), all in one animation loop; textSwap in OB_CONF: phone / computer "scramble" (default) or "fade"
   for the category line; names: "fade" (rise and fade in, default), "header" (same scramble as the line),
   "scramble" (calmer, left to right in 0.4s) or false.
   Served from GitHub through jsDelivr; the Squarespace Footer holds the settings block (OB_CONF) and one <script src> line.
   Pairs with Header v15.5 (stays in Squarespace), Custom CSS v17.0, ob-drawings.js v16.6 (Store page box, defer).
   v17.0 = v16.7, tidied. Under the hood only, except for keyboard users in the pop-up and the visible changes
   listed after this part:
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
   v17.0 also has these visible changes, asked for (the last three from the loading work):
     · PHOTO ZOOM UNDER TEXT (home, About hero): a photo that zooms on rollover stays zoomed while the pointer is
       on text laid over it (SHOP SLOT on INTRODUCING SLOT CHAIR); it used to zoom back out. The suite marks the
       photo .obZoomHold; Custom CSS 9.2 and 9.3 zoom it.
     · STORE FILTER, STILL LOADING: on the ALL page, if a chip's products take more than 0.4s to arrive, the chosen
       chip pulses until they show (html.obFilterSlow; Custom CSS 5.6b).
     · STORE CHIPS AT THE FOOTER: scrolling back up from the footer, the pop-out chips return once the footer's top
       edge is below the middle of the screen (CONF.chipsFooterShare); they used to wait until it had left the screen.
     · STORE CHIPS AT THE TOP: scrolling back up, the pop-out chips stay until the top of the screen is halfway up
       the first row of products (CONF.chipsTopShare) instead of leaving 20% of the way down the page; they're gone
       before the chips row in the page comes back, so the two never show together (20% stays for a page without
       that row).

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
   To change code: edit here (styles: ob-suite.css), merge into main, put the new commit ID in the Footer's two lines (stylesheet and script).
   To change words or lists: edit OB_CONF in the Footer; no release needed. */
/* ==== FOOTER PARTS (moved from the Squarespace Footer in v17.2, code unchanged) ====
   These ran as separate <script> boxes in Footer v17.50, in this order, just before the suite.
   Each sits in its own try so a fault in one can't stop the others or the suite (as separate boxes did). */
/* ---- footer: OB STORE SWAP v1 · moving between store categories by address (e.g. /store/prints to /store/rugs): the page swap skips the browser's page transition, which on iPhones could fade the old products over the new ones ---- */
try {
(function () {
  try {
    var LIST = /^\/store(\/(?!p\/)[^\/]+)?\/?$/i;
    window.addEventListener("pageswap", function (e) {
      try {
        if (!e.viewTransition || !e.activation || !e.activation.entry) return;
        var to = new URL(e.activation.entry.url);
        if (LIST.test(location.pathname) && LIST.test(to.pathname)) e.viewTransition.skipTransition();
      } catch (x) {}
    });
  } catch (e) {}
})();
} catch (e) { if (window.console) console.error("[OB STORE SWAP v1]", e); }
/* ---- footer: OB PERKS v2 · three chips under the SIZES panel on product pages, each with a small line under it (perks and perksLayout in OB SETTINGS). Styles in ob-suite.css. ---- */
try {
(function () {
  var FALLBACK = [{
    name: "prints",
    sizes: ["A0", "A1", "A2", "A3", "A4", "A5"],
    place: "panel",
    chips: [
      { label: { en: "Museum standard", it: "Qualità museale" }, sub: { en: "Archival Print", it: "Stampa d'Archivio" } },
      { label: { en: "Shipping included", it: "Spedizione inclusa" }, sub: { en: "Worldwide", it: "In Tutto il Mondo" } },
      { label: { en: "Duties paid", it: "Dazi inclusi" }, sub: { en: "UK, EU, US, AU", it: "UK, UE, USA, AU" } }
    ]
  }];
  var sets = function () {
    var o = window.OB_CONF || {};
    if (o.perks && o.perks.length) return o.perks;
    if (o.printPerks && o.printPerks.chips && o.printPerks.chips.length) return [{ sizes: FALLBACK[0].sizes, place: o.printPerks.place, chips: o.printPerks.chips }];
    return FALLBACK;
  };
  var sizesHere = function () {
    var opts = document.querySelectorAll("#main-product-variants select option, .product-variants select option"), out = [];
    for (var i = 0; i < opts.length; i++) { var v = (opts[i].value || "").trim().toUpperCase(); if (v && out.indexOf(v) < 0) out.push(v); }
    return out;
  };
  var pick = function () {
    var path = location.pathname.replace(/\/+$/, "").toLowerCase(), have = sizesHere(), list = sets();
    for (var i = 0; i < list.length; i++) {
      var s = list[i] || {};
      if (!s.chips || !s.chips.length) continue;
      if (s.paths && s.paths.length) {
        for (var p = 0; p < s.paths.length; p++) { if (path.indexOf(String(s.paths[p]).toLowerCase().replace(/\/+$/, "")) === 0) return s; }
      }
      if (s.sizes && s.sizes.length && have.length) {
        var ok = true, want = s.sizes.map(function (x) { return String(x).toUpperCase(); });
        for (var h = 0; h < have.length; h++) { if (want.indexOf(have[h]) < 0) { ok = false; break; } }
        if (ok) return s;
      }
    }
    return null;
  };
  var conf = function () { return pick() || {}; };
  var lang = function () {
    try { if (window.Weglot && Weglot.initialized && Weglot.getCurrentLang) return Weglot.getCurrentLang(); } catch (e) {}
    try { var w = localStorage.getItem("wglang"); if (w) return w.slice(0, 2).toLowerCase(); } catch (e) {}
    return (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  };
  var words = function (w) {
    if (!w) return "";
    if (typeof w === "string") return w;
    return w[lang()] || w.en || "";
  };
  var render = function (ul) {
    var c = conf(), html = "";
    if (!c.chips) return;
    for (var i = 0; i < c.chips.length && i < 3; i++) {
      var ch = c.chips[i] || {};
      var sub = words(ch.sub);
      html += "<li><b>" + words(ch.label).replace(/</g, "&lt;") + "</b>" + (sub ? "<span>" + sub.replace(/</g, "&lt;") + "</span>" : "") + "</li>";
    }
    if (ul.getAttribute("data-html") !== html) { ul.innerHTML = html; ul.setAttribute("data-html", html); }
  };
  var place = function () {
    try {
      if (!document.body.classList.contains("view-item")) return;
      var set = pick();
      var old = document.getElementById("obPerks");
      if (!set) { if (old) old.remove(); return; }
      var meta = document.querySelector(".product-meta");
      var cart = meta && meta.querySelector(".product-add-to-cart");
      if (!cart) return;
      var ul = document.getElementById("obPerks");
      if (!ul) {
        ul = document.createElement("ul");
        ul.id = "obPerks";
        ul.className = "obPerks";
        ul.setAttribute("data-wg-notranslate", "");
      }
      render(ul);
      var where = conf().place || "panel";
      var panel = document.getElementById("obDims");
      if (where === "panel" && !panel) where = "button";
      ul.classList.toggle("obPerksAtSize", where === "size");
      ul.classList.toggle("obPerksPanel", where === "panel");
      /* phones: perksLayout in OB SETTINGS, "1-2" = first chip full width with two below, "row" = three in a row */
      ul.classList.toggle("obPerks12", String((window.OB_CONF || {}).perksLayout || "1-2") !== "row");
      if (where === "panel") {
        if (ul.parentNode !== panel || ul.previousElementSibling !== panel.querySelector(".obDimsBox")) panel.appendChild(ul);
        return;
      }
      if (where === "size") {
        if (ul.nextElementSibling !== cart) cart.insertAdjacentElement("beforebegin", ul);
        return;
      }
      var lead = document.getElementById("obLeadTime");
      if (lead && lead.parentNode === meta) { if (ul.parentNode !== lead) lead.appendChild(ul); }
      else if (ul.nextElementSibling !== cart) cart.insertAdjacentElement("beforebegin", ul);
    } catch (e) {}
  };
  var tries = 0;
  var tick = function () { place(); if (++tries < 24 && !(document.getElementById("obPerks") && (conf().place !== "panel" || document.getElementById("obDims") || tries > 12))) setTimeout(tick, 250); };
  setTimeout(place, 3000);
  setTimeout(place, 6000);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tick); else tick();
  window.addEventListener("load", function () { setTimeout(place, 300); setTimeout(place, 1500); });
  var bindLang = function (n) {
    if (window.Weglot && Weglot.on) { Weglot.on("languageChanged", function () { setTimeout(place, 0); }); return; }
    if (n < 10) setTimeout(function () { bindLang(n + 1); }, 500);
  };
  bindLang(0);
})();
} catch (e) { if (window.console) console.error("[OB PERKS v2]", e); }
/* ---- OB HOME WORDS v1 (v17.8) · home page: each tile's SHOP… words get their own word from homeWords in OB SETTINGS (rugs: "VIEW RUGS", prints: "VIEW PRINTS", candles: "VIEW OBJECTS", finds: "BROWSE FINDS", slot: "EXPLORE SLOT"). A link is matched when its words or its address contain the key (SHOP CANDLES → candles, SHOP → /store/p/slot → slot). Links that match no key (the hero, Bloom, Rosalia) keep their words. The new words are used everywhere the old ones were: the phone chips, the computer pointer chip and the Finds chip. homeWords: false switches it off. Runs straight away so the old words don't flash. ---- */
(function () {
  try {
    var W = (window.OB_CONF || {}).homeWords;
    if (!W || typeof W !== "object") return;
    var CTA = /^\[?\s*(shop|view|browse|explore)\b/i;
    var esc = function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
    var pick = function (txt, href) {
      for (var k in W) {
        if (!Object.prototype.hasOwnProperty.call(W, k) || !W[k]) continue;
        var kk = esc(String(k).toLowerCase());
        if (new RegExp("\\b" + kk + "\\b", "i").test(txt) || new RegExp("(^|[\\/\\-_])" + kk + "([\\/\\-_?#.]|$)", "i").test(href)) {
          var v = W[k];
          if (typeof v === "object") { var lg = (document.documentElement.lang || "en").slice(0, 2).toLowerCase(); v = v[lg] || v.en || ""; }
          return String(v);
        }
      }
      return "";
    };
    var run = function () {
      try {
        var d = document.documentElement;
        if (!(d.classList.contains("ob-page-home") || (document.body && document.body.classList.contains("homepage")) || location.pathname === "/")) return;
        var links = document.querySelectorAll("main .sqs-html-content a[href], main .sqs-block-button a[href]");
        for (var i = 0; i < links.length; i++) {
          var L = links[i];
          if (L.getAttribute("data-ob-was-words") || L.querySelector("img")) continue;
          var txt = (L.textContent || "").replace(/\s+/g, " ").trim();
          if (!CTA.test(txt)) continue;
          var w = pick(txt, L.getAttribute("href") || "");
          if (!w) continue;
          var br = /^\[/.test(txt) && /\]$/.test(txt);
          if (br) w = "[" + w + "]";
          var tw = document.createTreeWalker(L, NodeFilter.SHOW_TEXT, null), n, nodes = [];
          while ((n = tw.nextNode())) if (/\S/.test(n.nodeValue)) nodes.push(n);
          if (!nodes.length) continue;
          L.setAttribute("data-ob-was-words", txt);
          nodes[0].nodeValue = w;
          for (var j = 1; j < nodes.length; j++) nodes[j].nodeValue = "";
        }
      } catch (e) {}
    };
    /* v17.13: phoneTileWord (OB SETTINGS, "VIEW"): the chips that sit on a tile's title line on phones (RUGS / PRINTS / OBJECTS: a block with a lone bold large title) show that word on phones (under 768px) instead of the full words; screen readers and computers keep VIEW RUGS etc. false = full words. */
    var PW = (window.OB_CONF || {}).phoneTileWord;
    var tag = function () {
      try {
        if (!PW) return;
        var cs = document.querySelectorAll("main .sqs-html-content");
        for (var i = 0; i < cs.length; i++) {
          var c = cs[i], t = null, a = null;
          for (var k = 0; k < c.children.length; k++) {
            var ch = c.children[k];
            if (!t && ch.tagName === "P" && ch.classList.contains("sqsrte-large") && ch.children.length === 1 && ch.children[0].tagName === "STRONG" && !ch.querySelector("br")) t = ch;
            if (!a && ch.tagName === "P") { var l = ch.querySelector(":scope > a[href]"); if (l && CTA.test((l.textContent || "").trim())) a = l; }
          }
          if (t && a && !a.hasAttribute("data-ob-phone-word")) { a.setAttribute("data-ob-phone-word", String(PW)); a.setAttribute("data-ob-full-words", (a.textContent || "").replace(/\s+/g, " ").trim()); }
        }
        swap();
      } catch (e) {}
    };
    /* phones: the link shows the short word, with the full words kept as its spoken name; computers get the full words back */
    var MQ = window.matchMedia ? window.matchMedia("(max-width: 767px)") : null;
    var swap = function () {
      var on = !!(MQ && MQ.matches), ls = document.querySelectorAll("a[data-ob-phone-word]");
      for (var i = 0; i < ls.length; i++) {
        var a = ls[i], w = on ? a.getAttribute("data-ob-phone-word") : a.getAttribute("data-ob-full-words");
        if (!w) continue;
        var tw = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null), n, nodes = [];
        while ((n = tw.nextNode())) if (/\S/.test(n.nodeValue)) nodes.push(n);
        if (!nodes.length) { a.appendChild(document.createTextNode(w)); } else if (nodes[0].nodeValue !== w) { nodes[0].nodeValue = w; for (var j = 1; j < nodes.length; j++) nodes[j].nodeValue = ""; }
        if (on) a.setAttribute("aria-label", a.getAttribute("data-ob-full-words")); else a.removeAttribute("aria-label");
      }
    };
    if (MQ && PW) { if (MQ.addEventListener) MQ.addEventListener("change", swap); else if (MQ.addListener) MQ.addListener(swap); }
    run(); tag();
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { run(); tag(); });
    window.OB_homeWords = function () { run(); tag(); };
  } catch (e) {}
})();
/* ---- footer: OB PHOTO VIEWER v2 · product pages: full-screen photo viewer (computers), word chip that trails the pointer over photos (ENLARGE, PREV/NEXT/CLOSE, SHOP over the home hero and tiles), cursor, home tile links and linkFix (viewer, heroShop, tiles, linkFix, cursor… in OB SETTINGS). Styles in ob-suite.css. ---- */
try {
(function () {
  try {
    if (!window.HTMLDialogElement || !document.querySelector) return;
    var WORDS = { close: { en: "Close", it: "Chiudi" }, of: { en: "of", it: "di" }, prev: { en: "Previous photo", it: "Foto precedente" }, next: { en: "Next photo", it: "Foto successiva" }, open: { en: "Open photo full screen", it: "Apri la foto a schermo intero" } };
    var lang = function () {
      try { if (window.Weglot && Weglot.initialized && Weglot.getCurrentLang) return Weglot.getCurrentLang(); } catch (e) {}
      try { var w = localStorage.getItem("wglang"); if (w) return w.slice(0, 2).toLowerCase(); } catch (e) {}
      return (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    };
    WORDS.enlarge = { en: "Enlarge", it: "Ingrandisci" };
    WORDS.nextTip = { en: "Next", it: "Avanti" };
    WORDS.prevTip = { en: "Prev", it: "Indietro" };
    WORDS.closeTip = { en: "Close", it: "Chiudi" };
    WORDS.shopTip = { en: "Shop", it: "Negozio" };
    /* in the viewer: the photo's left half goes back, its right half goes on, around the photo closes */
    var zone = function (e) {
      if (!e || !dlg || !dlg.open) return "";
      var el = document.elementFromPoint(e.clientX, e.clientY);
      var sl = el && el.closest && el.closest(".obPvSlide");
      if (!sl) return "";
      var im = sl.querySelector("img");
      if (!im || el !== im) return "close";
      /* only one photo: nowhere to go, so the photo closes too */
      if (list.length < 2) return "close";
      var r = im.getBoundingClientRect();
      return e.clientX < r.left + r.width / 2 ? "prev" : "next";
    };
    var t = function (k, own) {
      var c = (window.OB_CONF || {}).viewer || {}, w = own || c[k] || WORDS[k];
      if (typeof w === "string") return w;
      return (w && (w[lang()] || w.en)) || WORDS[k].en;
    };
    var phone = function () { return window.matchMedia("(max-width: 767px)").matches; };
    var SLIDES = ".product-gallery-slides-item";

    var dlg, track, count, live, prev, next, closeBtn, list = [], here = 0, opener = null, pushed = false, scrollT, loop = false, touching = false, anim = 0, navUntil = 0, closing = false;
    /* with more than one photo the row is: a copy of the last, the photos, a copy of the first, so a swipe past either end carries on round */
    var posOf = function (i) { return loop ? i + 1 : i; };
    var realOf = function (p) { if (!loop) return p; var n = list.length; return (p - 1 + n) % n; };

    var photos = function () {
      var out = [];
      var items = document.querySelectorAll(SLIDES);
      for (var i = 0; i < items.length; i++) {
        var im = items[i].querySelector("img");
        if (!im) continue;
        var src = im.getAttribute("data-image") || im.getAttribute("data-src") || "";
        if (!src) { src = (im.currentSrc || im.getAttribute("src") || "").split("?")[0]; }
        if (!src) continue;
        out.push({ src: src.split("?")[0], now: im.currentSrc || "", alt: im.getAttribute("alt") || "", dims: im.getAttribute("data-image-dimensions") || "", item: items[i] });
      }
      return out;
    };

    var srcset = function (p) {
      var d = /^(\d+)x/.exec(p.dims), max = d ? +d[1] : 2500, out = [];
      [750, 1000, 1500, 2500].forEach(function (w) { if (w < max) out.push(p.src + "?format=" + w + "w " + w + "w"); });
      out.push(p.src + "?format=" + (max >= 2500 ? 2500 : 1500) + "w " + Math.min(max, 2500) + "w");
      return out.join(", ");
    };

    var load = function (i) {
      if (!track || !list.length) return;
      i = (i + list.length) % list.length;
      for (var p = 0; p < track.children.length; p++) { if (realOf(p) === i) loadAt(p, i); }
    };
    var loadAt = function (p, i) {
      var im = track.children[p].querySelector("img");
      if (im && !im.getAttribute("src")) {
        /* v17.3: the small copy behind stays until the big photo is decoded and painted (onload alone can leave a blank frame: a flash on the first open) */
        im.onload = function () { var me = this, clear = function () { me.style.background = "none"; }; if (me.decode) me.decode().then(clear, clear); else clear(); };
        im.setAttribute("sizes", phone() ? "100vw" : "75vw");
        im.setAttribute("srcset", srcset(list[i]));
        im.setAttribute("src", list[i].src + "?format=1500w");
      }
    };

    var build = function () {
      dlg = document.createElement("dialog");
      dlg.className = "obPv";
      dlg.setAttribute("aria-label", "Photos");
      dlg.innerHTML = '<div class="obPvBlur"><i></i><i></i></div><div class="obPvTrack"></div>' +
        '<div class="obPvBar"><span class="obPvCount" aria-hidden="true"></span><button type="button" class="obPvClose"></button></div>' +
        '<button type="button" class="obPvNav obPvPrev">&larr;</button><button type="button" class="obPvNav obPvNext">&rarr;</button>' +
        '<div class="obPvLive" aria-live="polite"></div>';
      track = dlg.querySelector(".obPvTrack");
      count = dlg.querySelector(".obPvCount");
      live = dlg.querySelector(".obPvLive");
      prev = dlg.querySelector(".obPvPrev");
      next = dlg.querySelector(".obPvNext");
      closeBtn = dlg.querySelector(".obPvClose");
      document.body.appendChild(dlg);

      closeBtn.addEventListener("click", function () { close(); });
      prev.addEventListener("click", function () { go(here - 1); });
      next.addEventListener("click", function () { go(here + 1); });
      dlg.addEventListener("cancel", function (e) { e.preventDefault(); close(); });
      dlg.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") { e.preventDefault(); go(here + 1); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); go(here - 1); }
        else if (e.key === "Home") { e.preventDefault(); go(0, true); }
        else if (e.key === "End") { e.preventDefault(); go(list.length - 1, true); }
        else if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "PageDown" || e.key === "PageUp" || (e.key === " " && e.target === dlg)) {
          var sl = track.children[posOf(here)];
          if (!sl) return;
          e.preventDefault();
          var big = e.key === "PageDown" || e.key === "PageUp" || e.key === " ";
          sl.scrollBy({ top: (e.key === "ArrowUp" || e.key === "PageUp" ? -1 : 1) * (big ? sl.clientHeight * 0.85 : 120), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }
      });
      track.addEventListener("scroll", function () {
        clearTimeout(scrollT);
        scrollT = setTimeout(function () {
          var w = track.clientWidth || 1;
          var p = Math.round(track.scrollLeft / w);
          if (touching || anim) return;
          if (loop && (p === 0 || p === list.length + 1)) jump(p === 0 ? list.length : 1);
          else if (Math.abs(track.scrollLeft - p * w) > 1) jump(p);
          var i = realOf(p);
          if (i !== here) set(i);
        }, 80);
      }, { passive: true });
      /* while a finger is on the photos, leave the row alone */
      track.addEventListener("touchstart", function () { touching = true; }, { passive: true });
      var lift = function () { touching = false; track.dispatchEvent(new Event("scroll")); };
      track.addEventListener("touchend", lift, { passive: true });
      track.addEventListener("touchcancel", lift, { passive: true });

      /* a click on the photo: left half the one before, right half the next; around it: close */
      track.addEventListener("click", function (e) {
        var z = zone(e);
        if (z === "close") { if (Date.now() >= navUntil) close(); }
        else if (z) go(here + (z === "prev" ? -1 : 1));
      });
    };

    /* behind the photo: the same photo (the small copy already loaded), heavily blurred under a white wash; two layers cross-fade */
    var blurReady = {}, blurWant = "";
    var blurTo = function (i) {
      var lay = dlg.querySelectorAll(".obPvBlur i");
      if (lay.length < 2 || !list[i]) return;
      var url = list[i].now || (list[i].src + "?format=500w");
      var on = lay[0].classList.contains("obPvOn") ? 0 : 1, nx = 1 - on;
      if (lay[on].getAttribute("data-u") === url && lay[on].classList.contains("obPvOn")) return;
      blurWant = url;
      var show = function () {
        if (blurWant !== url || !dlg) return;
        lay[nx].style.backgroundImage = 'url("' + url.replace(/"/g, "%22") + '")';
        lay[nx].setAttribute("data-u", url);
        lay[nx].classList.add("obPvOn");
        lay[on].classList.remove("obPvOn");
      };
      /* v17.3: cross-fade only once the photo behind is decoded, so the blur never pops in half-drawn */
      if (blurReady[url]) { show(); return; }
      var pre = new Image();
      pre.src = url;
      var ok = function () { blurReady[url] = 1; show(); };
      if (pre.decode) pre.decode().then(ok, ok); else { pre.onload = pre.onerror = ok; }
    };
    var jump = function (p) {
      track.style.scrollSnapType = "none";
      track.scrollLeft = p * track.clientWidth;
      void track.offsetWidth;
      track.style.scrollSnapType = "";
    };
    var set = function (i) {
      here = i;
      for (var k = 0; k < track.children.length; k++) { var on = k === posOf(i); if (on && !track.children[k].classList.contains("obPvHere")) track.children[k].scrollTop = 0; track.children[k].classList.toggle("obPvHere", on); }
      load(i); load(i + 1); load(i - 1);
      blurTo(i);
      count.textContent = (i + 1) + " / " + list.length;
      live.textContent = (i + 1) + " " + t("of") + " " + list.length;
    };
    /* move to photo i; past the last comes the first and before the first the last */
    var go = function (i, direct) {
      var n = list.length;
      if (n < 2) return;
      var p = loop && !direct ? (i < 0 ? 0 : i >= n ? n + 1 : posOf(i)) : posOf((i + n) % n);
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      set((i + n) % n);
      navUntil = Date.now() + 520;
      if (reduce) { jump(posOf((i + n) % n)); return; }
      /* our own short slide (the browser's smooth scroll and the snapping can cancel each other) */
      cancelAnimationFrame(anim);
      var from = track.scrollLeft, to = p * track.clientWidth, t0 = 0, ms = 380;
      track.style.scrollSnapType = "none";
      var step = function (ts) {
        if (!t0) t0 = ts;
        var k = Math.min(1, (ts - t0) / ms), e = 1 - Math.pow(1 - k, 3);
        track.scrollLeft = from + (to - from) * e;
        if (k < 1) { anim = requestAnimationFrame(step); return; }
        anim = 0;
        if (loop && (p === 0 || p === n + 1)) jump(p === 0 ? n : 1); else jump(p);
        navUntil = 0;
        if (window.__obPvTipAgain) window.__obPvTipAgain();
      };
      anim = requestAnimationFrame(step);
    };

    /* the photo flies between its place on the page and its place in the viewer */
    var still = function () { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
    var FLY = 320;
    var seen = function (r) { return r && r.width > 0 && r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth; };
    var fly = function (im, from, to, back) {
      if (!im || !seen(from) || !to || !to.width) return false;
      var dx = from.left - to.left, dy = from.top - to.top, sx = from.width / to.width, sy = from.height / to.height;
      im.style.transition = "none";
      im.style.transformOrigin = "0 0";
      im.style.transform = back ? "none" : "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")";
      void im.offsetWidth;
      im.style.transition = "transform " + FLY + "ms cubic-bezier(.2,.7,.2,1)";
      im.style.transform = back ? "translate(" + dx + "px," + dy + "px) scale(" + sx + "," + sy + ")" : "none";
      return true;
    };
    var ghostEl = null, ghostT = 0;
    var ghost = function (el, ms) {
      clearTimeout(ghostT);
      if (ghostEl && ghostEl !== el) ghostEl.style.visibility = "";
      ghostEl = el;
      if (!el) return;
      el.style.visibility = "hidden";
      if (ms) ghostT = setTimeout(function () { ghost(null); }, ms);
    };
    var pageImg = function (p) { return p && p.item && p.item.querySelector("img"); };
    var viewImg = function (i) { var sl = track.children[posOf(i)]; return sl && sl.querySelector("img"); };

    var open = function (start, from) {
      list = photos();
      if (!list.length) return;
      if (!dlg) build();
      opener = from || document.activeElement;
      closeBtn.textContent = t("close");
      prev.setAttribute("aria-label", t("prev"));
      next.setAttribute("aria-label", t("next"));
      loop = list.length > 1;
      var slide = function (i, copy) {
        var d = /^(\d+)x(\d+)$/.exec(list[i].dims);
        return '<figure class="obPvSlide"' + (copy ? ' aria-hidden="true"' : ' role="group" aria-roledescription="slide" aria-label="' + (i + 1) + " " + t("of") + " " + list.length + '"') + '><img alt="' + (copy ? "" : list[i].alt.replace(/"/g, "&quot;")) + '"' + (d ? ' width="' + d[1] + '" height="' + d[2] + '"' : "") + ' decoding="async" draggable="false"' + (list[i].now ? ' style="background:url(&quot;' + list[i].now.replace(/"/g, "%22") + '&quot;) center / contain no-repeat"' : "") + '></figure>';
      };
      var html = loop ? slide(list.length - 1, true) : "";
      for (var i = 0; i < list.length; i++) html += slide(i, false);
      if (loop) html += slide(0, true);
      track.innerHTML = html;
      dlg.classList.toggle("obPvOne", list.length < 2);
      dlg.classList.toggle("obPvSolid", ((window.OB_CONF || {}).viewer || {}).blur === false);
      document.documentElement.style.overflow = "hidden";
      dlg.classList.remove("obPvOutro");
      closing = false;
      /* v17.3: the blurred background and the bar start see-through from the very first frame, then fade in (adding this after the viewer was already drawn made the white wash pop in at once: the flash) */
      var intro = !still() && !phone();
      if (intro) dlg.classList.add("obPvIntro");
      dlg.showModal();
      if (tip.classList.contains("obPvTipOn")) dlg.appendChild(tip);
      here = -1;
      jump(posOf(start));
      set(start);
      if (!still() && !phone()) {
        var src = pageImg(list[start]), im = viewImg(start);
        if (src && fly(im, src.getBoundingClientRect(), im.getBoundingClientRect(), false)) {
          /* v17.3: the page photo steps aside while its copy flies out, so there are never two of it on screen */
          ghost(src, FLY + 40);
        }
      }
      if (intro) { void dlg.offsetWidth; dlg.classList.remove("obPvIntro"); }
      /* keyboard: focus on CLOSE; mouse: no focus ring anywhere */
      openedByKey = byKey;
      if (byKey) closeBtn.focus({ preventScroll: true });
      else { dlg.setAttribute("tabindex", "-1"); dlg.focus({ preventScroll: true }); }
      try { history.pushState({ obPv: 1 }, ""); pushed = true; } catch (e) { pushed = false; }
    };

    var after = null;
    var close = function (fromHistory) {
      if (!dlg || !dlg.open || closing) return;
      var last = here;
      closing = true;
      var im = viewImg(last), dst = pageImg(list[last]);
      /* computers: bring the photo you end on into view behind the viewer first, so it flies back to it */
      if (dst && !phone()) {
        var r0 = dst.getBoundingClientRect();
        if (r0.bottom < 80 || r0.top > window.innerHeight - 80) { try { window.scrollTo({ top: Math.max(0, window.pageYOffset + r0.top - 40), behavior: "instant" }); } catch (e) { window.scrollTo(0, Math.max(0, window.pageYOffset + r0.top - 40)); } }
      }
      var flew = !still() && !phone() && dst && im && fly(im, dst.getBoundingClientRect(), im.getBoundingClientRect(), true);
      if (flew) ghost(dst, 0);
      dlg.classList.add("obPvOutro");
      setTimeout(function () { shut(fromHistory, last); }, flew || !still() ? FLY : 0);
    };
    var shut = function (fromHistory, last) {
      /* the pointer word stays put while the viewer goes, then changes over to [ENLARGE] */
      if (tip.parentNode === dlg) document.body.appendChild(tip);
      dlg.close();
      ghost(null);
      /* the browser puts focus back on the photo that opened the viewer; after a mouse open, take it off straight away so no focus box shows */
      if (!openedByKey) { try { var ae = document.activeElement; if (ae && ae !== document.body && ae.blur) ae.blur(); } catch (e) {} }
      closing = false;
      dlg.classList.remove("obPvOutro");
      var vi = viewImg(last);
      if (vi) { vi.style.transition = "none"; vi.style.transform = ""; }
      document.documentElement.style.overflow = "";
      if (window.__obPvTipAgain) window.__obPvTipAgain();
      /* back on the page: show the photo you were looking at (after the browser has finished going back) */
      var finish = function () {
        var p = list[last];
        if (p && p.item) {
          if (phone()) {
            if (!p.item.classList.contains("selected")) {
              var thumbs = document.querySelectorAll(".product-gallery-thumbnails-item");
              var dots = document.querySelectorAll("#obGalleryDots .obGalleryDot");
              if (thumbs[last]) thumbs[last].click(); else if (dots[last]) dots[last].click();
            }
          } else {
            var r = p.item.getBoundingClientRect();
            if (r.bottom < 80 || r.top > window.innerHeight - 80) window.scrollTo(0, Math.max(0, window.pageYOffset + r.top - 40));
          }
        }
        setTimeout(function () {
          mark();
          var back = phone() ? document.querySelector(SLIDES + ".selected") : (p && p.item);
          back = back || opener;
          try {
            /* opened from the keyboard: focus goes back to the photo; opened with the mouse: no focus box, even after Escape */
            if (openedByKey) { if (back && back.focus) back.focus({ preventScroll: true }); }
            else if (document.activeElement && document.activeElement.closest && document.activeElement.closest(".product-gallery")) document.activeElement.blur();
          } catch (e) {}
        }, 60);
      };
      if (pushed && !fromHistory) {
        pushed = false;
        after = finish;
        try { history.back(); } catch (e) {}
        setTimeout(function () { if (after) { var f = after; after = null; f(); } }, 500);
      } else {
        pushed = false;
        finish();
      }
    };
    window.addEventListener("popstate", function () {
      if (after) { var f = after; after = null; setTimeout(f, 30); return; }
      if (dlg && dlg.open) close(true);
    });

    /* was the last thing a key press (focus rings) or the mouse (no rings)? */
    var byKey = false, openedByKey = false;
    document.addEventListener("keydown", function () { byKey = true; }, true);
    document.addEventListener("pointerdown", function () { byKey = false; }, true);

    /* a tap, not a swipe: on phones the photos swipe sideways, so only a still touch opens */
    var down = null;
    document.addEventListener("pointerdown", function (e) { down = { x: e.clientX, y: e.clientY }; }, { capture: true, passive: true });
    var indexOf = function (item) {
      var items = document.querySelectorAll(SLIDES), n = 0;
      for (var i = 0; i < items.length; i++) { if (!items[i].querySelector("img")) continue; if (items[i] === item) return n; n++; }
      return 0;
    };
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("view-item") || phone()) return;
      var item = e.target.closest && e.target.closest(SLIDES);
      if (!item || !item.querySelector("img")) return;
      if (down && (Math.abs(e.clientX - down.x) > 10 || Math.abs(e.clientY - down.y) > 10)) return;
      e.preventDefault();
      open(indexOf(item), item);
    });

    /* computers: over a photo the pointer becomes a small square with a frosted word hanging off it, which trails it slightly */
    var tip = document.createElement("div");
    tip.className = "obPvTip";
    tip.setAttribute("aria-hidden", "true");
    tip.setAttribute("data-wg-notranslate", "");
    tip.innerHTML = "<b></b>";
    var chip = tip.firstChild;
    /* home page hero: on a computer the same pointer shows [SHOP] over the hero photo and a click anywhere on it opens the store (all products); the SHOP link laid over it is hidden there but stays for keyboard users (it shows when tabbed to) and on phones and tablets, where the hero is tappable too. heroShop in OB SETTINGS: href, word, on: false to switch it off, section: a section ID if the hero isn't the first section. */
    var HC = function () { return (window.OB_CONF || {}).heroShop || {}; };
    var heroHref = function () { return HC().href || "/store"; };
    var fine = function () { return window.matchMedia("(hover: hover) and (pointer: fine)").matches; };
    var heroSec = null, heroLink = null, heroIn = false;
    var heroFind = function () {
      if (HC().on === false || window.self !== window.top) return null;
      var d = document.documentElement;
      if (!(d.classList.contains("ob-page-home") || document.body.classList.contains("homepage") || location.pathname === "/")) return null;
      if (heroSec && document.contains(heroSec)) return heroSec;
      var id = HC().section;
      heroSec = id ? document.querySelector('main section[data-section-id="' + id + '"]') : document.querySelector("main section.page-section");
      if (!heroSec) return null;
      var links = heroSec.querySelectorAll(".sqs-html-content a[href], .sqs-block-button a[href]");
      heroLink = null;
      for (var i = 0; i < links.length; i++) { if (/^\[?\s*(shop|view|browse|explore)\b/i.test((links[i].textContent || "").trim())) { heroLink = links[i]; break; } }
      if (heroLink) {
        heroLink.classList.add("obHeroShopLink");
        heroLink.setAttribute("href", heroHref());
        var blk = heroLink.closest(".fe-block") || heroLink.closest(".sqs-block");
        var hide = blk && (blk.textContent || "").trim() === (heroLink.textContent || "").trim() ? blk : heroLink;
        hide.classList.add("obHeroShopHide");
        heroCta = [hide];
      }
      return heroSec;
    };
    /* the hero photo: the section's background photo or video, or else its image blocks */
    var heroHit = function (x, y) {
      var sec = heroFind();
      if (!sec) return false;
      var media = sec.querySelectorAll(".section-background img, .section-background video, .section-background .sqs-video-background-native");
      if (!media.length) media = sec.querySelectorAll(".sqs-block-image .fluid-image-container, .sqs-block-image img, .sqs-block-video");
      var sr = sec.getBoundingClientRect();
      for (var i = 0; i < media.length; i++) {
        var r = media[i].getBoundingClientRect();
        if (!r.width) continue;
        var l = Math.max(r.left, sr.left), tp = Math.max(r.top, sr.top), rt = Math.min(r.right, sr.right), bt = Math.min(r.bottom, sr.bottom);
        if (x >= l && x <= rt && y >= tp && y <= bt) return true;
      }
      return false;
    };
    /* words on the page (a heading, a paragraph, a product name or price) never get the shape: the normal arrow, or the hand over a link */
    var TEXT = "p, h1, h2, h3, h4, h5, h6, li, blockquote, figcaption, .product-list-item-title, .product-list-item-price, .grid-title, .grid-prices, .sqs-block-button";
    var isText = function (el) { return !!(el && el.closest && el.closest(TEXT)); };
    var heroWord = function (el, e) {
      var hit = !!(e && el && el.closest && heroHit(e.clientX, e.clientY) && heroSec.contains(el));
      if (hit) { var a = el.closest("a[href], button, input, select, textarea, label"); if (a && a !== heroLink) hit = false; }
      if (hit !== heroIn) { heroIn = hit; if (heroSec) heroSec.classList.toggle("obHeroShopIn", hit); }
      if (hit) ctaNow = heroCta;
      return hit ? t("shopTip", HC().word) : "";
    };
    var heroDown = null;
    document.addEventListener("pointerdown", function (e) { heroDown = { x: e.clientX, y: e.clientY }; }, { capture: true, passive: true });
    window.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0) return;
      var el = e.target;
      if (!el || !el.closest || !heroFind() || !heroSec.contains(el)) return;
      var a = el.closest("a[href], button, input, select, textarea, label");
      if (a && a !== heroLink) return;
      /* v17.33: words lying on the hero photo count as the photo (same hand, same word, same link) */
      if (!a && !heroHit(e.clientX, e.clientY)) return;
      if (heroDown && (Math.abs(e.clientX - heroDown.x) > 10 || Math.abs(e.clientY - heroDown.y) > 10)) return;
      e.preventDefault();
      e.stopPropagation();
      var href = heroHref();
      if (e.metaKey || e.ctrlKey) { window.open(href, "_blank", "noopener"); return; }
      if (window.obLeaveTo) window.obLeaveTo(href); else location.href = href;
    }, true);
    var heroTries = 0;
    var heroTick = function () { heroSec = null; heroFind(); if (++heroTries < 6) setTimeout(heroTick, 500); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", heroTick); else heroTick();

    /* home page tiles (v17.32): on a computer every linked photo below the hero shows the word chip (its SHOP… button's words, or Shop) and the whole photo clicks through; the SHOP… buttons under the photos are hidden (they stay for phones, tablets and keyboard users) and the names, prices and SOLD labels are not links there. A photo with no link of its own (Finds) is left alone, button and all. tiles: false in OB SETTINGS switches this off. */
    var tileTries = 0;
    var tileMark = function () {
      try {
        if (!fine() || (window.OB_CONF || {}).tiles === false || !heroFind()) return;
        var secs = document.querySelectorAll("main section.page-section");
        for (var i = 0; i < secs.length; i++) {
          var sec = secs[i];
          if (sec === heroSec) continue;
          var pics = [], picIm = [], links = sec.querySelectorAll("a[href]"), j, k;
          sec.querySelectorAll("img").forEach(function (im) {
            var box = im.closest("a[href]") || im.closest(".sqs-block-image, .sqs-block-product, .fe-block");
            /* a photo not loaded yet can have no size: use its block's outline then (v17.36) */
            var r = im.getBoundingClientRect();
            if (r.width < 40 || r.height < 40) { var bb = im.closest(".sqs-block, .fe-block"); r = bb ? bb.getBoundingClientRect() : r; if (r.width < 40 || r.height < 40) return; im = bb; }
            if (box && pics.indexOf(box) < 0) { pics.push(box); picIm.push(im); }
          });
          if (!pics.length) continue;
          for (j = 0; j < links.length; j++) {
            var L = links[j];
            if (L.querySelector("img") || L.classList.contains("obTileLink")) continue;
            var txt = (L.textContent || "").replace(/\s+/g, " ").trim();
            var lr = L.getBoundingClientRect();
            if (!lr.width) continue;
            /* the photo this text belongs to: same link, or the photo above it that overlaps it most */
            var best = null, bestS = -1;
            for (k = 0; k < pics.length; k++) {
              var P = pics[k], pr = picIm[k].getBoundingClientRect();
              var ph = P.tagName === "A" ? (P.getAttribute("href") || "").replace(/\/$/, "") : "", lh = (L.getAttribute("href") || "").replace(/\/$/, "");
              var same = !!ph && ph === lh;
              /* the same product in another colour (bloom / bloom-moss, rosalia / rosalia-lilac) counts as the same (v17.38) */
              var kin = !!ph && /\/p\//.test(ph) && lh.indexOf(ph + "-") === 0;
              var ov = Math.min(pr.right, lr.right) - Math.max(pr.left, lr.left);
              var sc = same ? 1e6 : kin ? 1e5 : (ov > 0 && pr.top <= lr.top + 4 ? ov - Math.abs(lr.top - pr.bottom) / 10 : -1);
              if (sc > bestS) { bestS = sc; best = P; }
            }
            if (!best || bestS < 0) {
              /* a SHOP… word that couldn't be matched to a photo, in a section with linked photos: still hidden on computers (v17.38) */
              if (/^\[?\s*(shop|view|browse|explore)\b/i.test(txt) && pics.some(function (x) { return x.tagName === "A"; })) { L.classList.add("obTileLink", "obHeroShopHide"); }
              continue;
            }
            /* a photo with no link of its own (Finds) keeps its button as it is (Ben, v17.35) */
            if (best.tagName !== "A") continue;
            L.classList.add("obTileLink");
            if (/^\[?\s*(shop|view|browse|explore)\b/i.test(txt)) {
              if (!best.getAttribute("data-ob-word")) best.setAttribute("data-ob-word", txt.replace(/[\[\]]/g, "").trim());
              var blk = L.closest(".fe-block") || L.closest(".sqs-block");
              var hEl = blk && (blk.textContent || "").replace(/\s+/g, " ").trim() === txt && !blk.querySelector("img") ? blk : L;
              hEl.classList.add("obHeroShopHide");
              (best.__obCta = best.__obCta || []).push(hEl);
            } else {
              L.classList.add("obInfoLink");
            }
          }
          for (k = 0; k < pics.length; k++) {
            if (pics[k].tagName === "A" || pics[k].getAttribute("data-ob-href")) pics[k].classList.add("obTilePic");
          }
        }
      } catch (e) {}
    };
    /* the tile photo under the pointer, by its outline, so words lying on top of a photo count as the photo too (v17.33) */
    var tileAt = function (el, x, y) {
      if (!el || !el.closest || typeof x !== "number") return null;
      var a = el.closest("a[href], button, input, select, textarea, label");
      if (a && !a.classList.contains("obTilePic")) return null;
      var ps = document.querySelectorAll(".obTilePic");
      for (var i = 0; i < ps.length; i++) {
        var im = ps[i].querySelector("img");
        var r = (im || ps[i]).getBoundingClientRect();
        if (r.width < 40 || r.height < 40) { var bb = ps[i].closest(".sqs-block, .fe-block"); if (bb) r = bb.getBoundingClientRect(); }
        if (r.width && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return ps[i];
      }
      return null;
    };
    var tileWord = function (el) {
      var p = lastE ? tileAt(el, lastE.clientX, lastE.clientY) : null;
      document.documentElement.classList.toggle("obTileOver", !!p && !(el.closest && el.closest(".obTilePic")));
      if (!p) return "";
      ctaNow = p.__obCta || null;
      return p.getAttribute("data-ob-word") || t("shopTip", HC().word);
    };
    window.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || !fine()) return;
      var p = tileAt(e.target, e.clientX, e.clientY);
      if (!p || (p.tagName === "A" && p.contains(e.target))) return;
      e.preventDefault();
      e.stopPropagation();
      var href = p.getAttribute("data-ob-href") || p.getAttribute("href");
      if (e.metaKey || e.ctrlKey) { window.open(href, "_blank", "noopener"); return; }
      if (window.obLeaveTo) window.obLeaveTo(href); else location.href = href;
    }, true);
    /* v17.40: a home page photo whose link is the plain product address (/store/p/bloom) while its SHOP word in the same section goes to one colour (/store/p/bloom-moss) now links where the SHOP word goes, on every device; /store/p/bloom and /store/p/rosalia don't exist. linkFix: false in OB SETTINGS switches this off. */
    var linkFix = function () {
      try {
        if ((window.OB_CONF || {}).linkFix === false || !heroFind()) return;
        document.querySelectorAll("main section.page-section").forEach(function (sec) {
          var words = [];
          sec.querySelectorAll("a[href]").forEach(function (L) {
            if (L.querySelector("img") || !/^\[?\s*(shop|view|browse|explore)\b/i.test((L.textContent || "").trim())) return;
            words.push((L.getAttribute("href") || "").replace(/\/$/, ""));
          });
          sec.querySelectorAll("a[href]").forEach(function (P) {
            if (!P.querySelector("img") && !P.classList.contains("sqs-block-image-link")) return;
            var ph = (P.getAttribute("href") || "").replace(/\/$/, "");
            if (!/\/p\/[^\/]+$/.test(ph)) return;
            var to = words.filter(function (w, i, a) { return w.indexOf(ph + "-") === 0 && a.indexOf(w) === i; });
            if (to.length !== 1) return;
            P.setAttribute("data-ob-was", ph);
            P.setAttribute("href", to[0]);
            if (P.getAttribute("data-ob-href")) P.setAttribute("data-ob-href", to[0]);
          });
        });
      } catch (e) {}
    };
    var tileTick = function () { linkFix(); tileMark(); if (++tileTries < 6) setTimeout(tileTick, 500); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tileTick); else tileTick();
    window.addEventListener("load", function () { setTimeout(tileMark, 300); });
    /* photos further down can get their size late: check again as each photo arrives and while scrolling */
    document.addEventListener("load", function (e) { if (e.target && e.target.tagName === "IMG" && !tileScrollT) tileScrollT = setTimeout(function () { tileScrollT = 0; tileMark(); }, 100); }, true);
    var tileScrollT = 0;
    window.addEventListener("scroll", function () { if (tileScrollT) return; tileScrollT = setTimeout(function () { tileScrollT = 0; tileMark(); }, 250); }, { passive: true });
    /* v17.37: the SHOP… words under each photo stay visible at rest and fade out while the pointer is on that photo, where the chip takes over (ctaRest: false in OB SETTINGS hides them all the time) */
    var heroCta, ctaNow = null, ctaOn = [];
    if ((window.OB_CONF || {}).ctaRest === false) document.documentElement.classList.add("obCtaHidden");
    var ctaSet = function (list) {
      list = list || [];
      ctaOn.forEach(function (x) { if (list.indexOf(x) < 0) x.classList.remove("obCtaAway"); });
      list.forEach(function (x) { x.classList.add("obCtaAway"); });
      ctaOn = list.slice();
    };
    var tipWord = function (el) { ctaNow = null; var w = tipWord0(el); ctaSet(ctaNow); return w; };
    var tipWord0 = function (el) {
      if (!el || !el.closest) return "";
      if (el.closest(".obPvSlide")) { var z = zone(lastE); return z ? t(z + "Tip") : ""; }
      if (!dlg || !dlg.open) { var it = el.closest(SLIDES); if (it && it.querySelector("img") && document.body.classList.contains("view-item")) return t("enlarge"); }
      if (!dlg || !dlg.open) { var ow = el.closest(".obOtDragging[data-ob-tip]") || el.closest("[data-ob-tip]"); if (ow && fine() && ow.getAttribute("data-ob-tip")) return ow.getAttribute("data-ob-tip"); return heroWord(el, lastE) || tileWord(el); }
      return "";
    };
    var mx = 0, my = 0, cx = 0, cy = 0, on = false, raf = 0, lastE = null, word = "", swapT = 0;
    /* v17.42: a new word slides in rather than jumping: the old word slides up and fades, the new one rises in, and the chip's width eases to fit it */
    var wordSpan = function (w) { var s = document.createElement("span"); s.textContent = w; return s; };
    var setWord = function (w) {
      if (w === word) return;
      var from = word;
      word = w;
      clearTimeout(swapT);
      var w0 = chip.offsetWidth;
      if (!on || still() || !from || !w || !w0) { chip.style.width = ""; chip.textContent = ""; chip.appendChild(wordSpan(w)); return; }
      for (var k = 0; k < chip.children.length; k++) chip.children[k].classList.add("obPvOut");
      var nw = wordSpan(w);
      nw.className = "obPvIn";
      chip.appendChild(nw);
      var cs = getComputedStyle(chip);
      var w1 = nw.offsetWidth + (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
      chip.style.width = w0 + "px";
      void chip.offsetWidth;
      chip.style.width = Math.ceil(w1) + "px";
      nw.classList.remove("obPvIn");
      swapT = setTimeout(function () { var olds = chip.querySelectorAll(".obPvOut"); for (var j = 0; j < olds.length; j++) chip.removeChild(olds[j]); }, 300);
    };
    var draw = function () {
      raf = 0;
      if (still()) { cx = mx; cy = my; } else { cx += (mx - cx) * 0.09; cy += (my - cy) * 0.09; }
      chip.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
      if (Math.abs(mx - cx) > 0.3 || Math.abs(my - cy) > 0.3) raf = requestAnimationFrame(draw);
    };
    var tipAt = function (e) {
      if (!e) return;
      lastE = { clientX: e.clientX, clientY: e.clientY, pointerType: e.pointerType };
      if (e.pointerType && e.pointerType !== "mouse") { tip.classList.remove("obPvTipOn"); on = false; return; }
      var home = dlg && dlg.open && !closing ? dlg : (closing ? tip.parentNode || document.body : document.body);
      if (tip.parentNode !== home) home.appendChild(tip);
      /* while the photos slide or the viewer closes, keep the word as it was */
      var w = (closing || Date.now() < navUntil) && on && word ? word : tipWord(document.elementFromPoint(e.clientX, e.clientY));
      if (!w) { tip.classList.remove("obPvTipOn"); on = false; return; }
      setWord(w);
      mx = e.clientX; my = e.clientY;
      if (!on) { cx = mx; cy = my; on = true; }
      tip.classList.add("obPvTipOn");
      if (!raf) raf = requestAnimationFrame(draw);
    };
    var tipAgain = function () { setTimeout(function () { tipAt(lastE); }, 40); };
    /* remember where the mouse was, so the next page can show the word under it straight away */
    var dotSave = function () {
      try {
        if (!lastE || (lastE.pointerType && lastE.pointerType !== "mouse")) { sessionStorage.removeItem("obPtr"); return; }
        sessionStorage.setItem("obPtr", JSON.stringify({ x: Math.round(lastE.clientX), y: Math.round(lastE.clientY) }));
      } catch (e) {}
    };
    window.addEventListener("pagehide", dotSave);
    /* arriving from another page with the mouse already over a photo: show its word without waiting for the mouse to move; checked again as the photos are laid out */
    try {
      var p0 = JSON.parse(sessionStorage.getItem("obPtr") || "null");
      if (p0 && typeof p0.x === "number" && fine()) {
        var hand = function () { if (!lastE || lastE.arrived) { tipAt({ clientX: p0.x, clientY: p0.y, pointerType: "mouse" }); if (lastE) lastE.arrived = true; } };
        if (document.body) hand(); else document.addEventListener("DOMContentLoaded", hand);
        [300, 800, 1500].forEach(function (ms) { setTimeout(hand, ms); });
        window.addEventListener("load", function () { setTimeout(hand, 50); });
      }
    } catch (e) {}
    document.addEventListener("pointerdown", dotSave, { capture: true, passive: true });
    window.__obPvTipAgain = tipAgain;
    document.addEventListener("pointermove", tipAt, { passive: true });
    document.addEventListener("pointerup", tipAgain, { passive: true });
    document.addEventListener("keyup", tipAgain, { passive: true });
    window.addEventListener("scroll", tipAgain, { passive: true });
    document.documentElement.addEventListener("pointerleave", function () { tip.classList.remove("obPvTipOn"); on = false; document.documentElement.classList.remove("obTileOver"); ctaSet(null); });
    /* the pointer went into an embedded frame (card fields, maps, videos) or off the window */
    document.addEventListener("pointerover", function (e) { if (e.target && e.target.tagName === "IFRAME") { tip.classList.remove("obPvTipOn"); on = false; } }, { passive: true });
    window.addEventListener("blur", function () { tip.classList.remove("obPvTipOn"); on = false; });

    /* keyboard: each photo on the page can be reached with Tab and opened with Enter or Space */
    var mark = function () {
      if (!document.body.classList.contains("view-item") || phone()) return;
      var items = document.querySelectorAll(SLIDES);
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        if (!it.querySelector("img")) continue;
        var visible = !phone() || it.classList.contains("selected");
        var want = visible ? "0" : "-1";
        if (it.getAttribute("tabindex") !== want) it.setAttribute("tabindex", want);
        if (it.getAttribute("role") !== "button") it.setAttribute("role", "button");
        if (!it.getAttribute("aria-label")) it.setAttribute("aria-label", t("open"));
      }
    };
    document.addEventListener("keydown", function (e) {
      if ((e.key !== "Enter" && e.key !== " ") || phone()) return;
      var item = e.target.closest && e.target.closest(SLIDES);
      if (!item || e.target !== item) return;
      e.preventDefault();
      open(indexOf(item), item);
    });
    document.addEventListener("focusin", function (e) { if (e.target.closest && e.target.closest(".product-gallery")) mark(); });
    var tries = 0;
    var tick = function () { mark(); if (++tries < 12) setTimeout(tick, 500); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tick); else tick();
    window.addEventListener("load", function () {
      setTimeout(mark, 500);
      /* v17.3: get the viewer ready (closed) and decode the photos behind it once the page has loaded, so the first open is as smooth as the next ones */
      setTimeout(function () {
        try {
          if (dlg || phone() || !document.querySelector(SLIDES)) return;
          build();
          photos().forEach(function (p) { var u = p.now || (p.src + "?format=500w"), pre = new Image(); pre.src = u; if (pre.decode) pre.decode().then(function () { blurReady[u] = 1; }, function () {}); });
        } catch (e) {}
      }, 800);
    });
  } catch (e) {}
})();
} catch (e) { if (window.console) console.error("[OB PHOTO VIEWER v2]", e); }
/* ---- footer: OB SHOP CHIPS v1 · home page, phones and tablets: the SHOP… words under the hero and tile photos become chips like the computer pointer chip (12px mono, no brackets) and stay where they are: frosted over a photo, a light tint on the page. shopChips: false in OB SETTINGS switches it off. Styles in ob-suite.css. ---- */
(function () {
  if ((window.OB_CONF || {}).shopChips === false || window.self !== window.top) return;
  var touch = function () { return !window.matchMedia("(hover: hover) and (pointer: fine)").matches; };
  var home = function () { var d = document.documentElement; return d.classList.contains("ob-page-home") || document.body.classList.contains("homepage") || location.pathname === "/"; };
  var RX = /^\[?\s*(shop|view|browse|explore)\b/i;
  var unbracket = function (L) {
    var w = document.createTreeWalker(L, NodeFilter.SHOW_TEXT, null), n, all = [];
    while ((n = w.nextNode())) all.push(n);
    all.forEach(function (x) { if (/[\[\]]/.test(x.nodeValue)) x.nodeValue = x.nodeValue.replace(/[\[\]]/g, ""); });
    if (all.length) { all[0].nodeValue = all[0].nodeValue.replace(/^\s+/, ""); var z = all[all.length - 1]; z.nodeValue = z.nodeValue.replace(/\s+$/, ""); }
  };
  /* over a photo when the middle of the words lies on one of the section's photos (its background photo or video, or an image block) */
  var onPhoto = function (L) {
    var sec = L.closest("section"), r = L.getBoundingClientRect();
    if (!sec || !r.width) return false;
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var media = sec.querySelectorAll(".section-background img, .section-background video, .sqs-block-image img, .sqs-block-video video, .fluid-image-container img");
    var art = false;
    for (var i = 0; i < media.length; i++) {
      var m = media[i].getBoundingClientRect();
      if (!(m.width && x >= m.left && x <= m.right && y >= m.top && y <= m.bottom)) continue;
      /* v17.8: an image block shown whole ("fit", not "fill") is lettering on the page (the FINDS chrome letters), not a photo: the chip keeps the page tint there, frosted over the letters */
      if (media[i].tagName === "IMG" && !media[i].closest(".section-background") && /contain|scale-down|none/.test(getComputedStyle(media[i]).objectFit || "")) { art = true; continue; }
      return true;
    }
    L.classList.toggle("obShopChipOnArt", art);
    return false;
  };
  /* words in a text block that flips its colour (difference, over the home video) can't show a frosted chip: the flip would invert it. There the chip is a stand-in laid over the same spot, outside the block; the words underneath keep their place but are hidden, and a tap on the stand-in taps them. */
  var float = function (L) {
    var blk = null, sec = L.closest("section");
    for (var e = L.parentElement; e && e !== sec; e = e.parentElement) if (getComputedStyle(e).mixBlendMode !== "normal") blk = e;
    var host = blk && blk.parentElement;
    if (!host) { if (L.__obFloat) { L.__obFloat.remove(); L.__obFloat = null; L.classList.remove("obShopChipGhost"); } return; }
    var a = L.__obFloat;
    if (!a) {
      a = L.__obFloat = document.createElement("a");
      a.className = "obShopChip obShopChipFloat";
      a.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); L.click(); });
      if (getComputedStyle(host).position === "static") host.style.position = "relative";
      host.appendChild(a);
      L.classList.add("obShopChipGhost");
      L.setAttribute("tabindex", "-1");
    }
    a.href = L.getAttribute("href") || "#";
    a.textContent = L.textContent;
    a.classList.toggle("obShopChipOnPhoto", L.classList.contains("obShopChipOnPhoto"));
    var r = L.getBoundingClientRect(), h = host.getBoundingClientRect();
    a.style.left = (r.left - h.left) + "px";
    a.style.top = (r.top - h.top) + "px";
  };
  var mark = function () {
    try {
      if (!home()) return;
      /* v17.8: computers too, but only for the words the pointer chip doesn't take over (Finds, whose photo has no link): those become a fixed chip where they are. shopChips: "phone" keeps computers as before. */
      var desk = !touch();
      if (desk && (window.OB_CONF || {}).shopChips === "phone") return;
      document.documentElement.classList.add("obShopChips");
      var links = document.querySelectorAll("main .sqs-html-content a[href], main .sqs-block-button a[href]");
      for (var i = 0; i < links.length; i++) {
        var L = links[i];
        if (L.querySelector("img")) continue;
        if (desk && (L.classList.contains("obTileLink") || L.classList.contains("obHeroShopLink") || L.closest(".obHeroShopHide"))) {
          if (L.classList.contains("obShopChip")) { L.classList.remove("obShopChip", "obShopChipOnPhoto"); if (L.__obFloat) { L.__obFloat.remove(); L.__obFloat = null; L.classList.remove("obShopChipGhost"); } }
          continue;
        }
        if (!L.classList.contains("obShopChip")) {
          if (!RX.test((L.textContent || "").replace(/\s+/g, " ").trim())) continue;
          unbracket(L);
          L.classList.add("obShopChip");
        }
        L.classList.toggle("obShopChipOnPhoto", onPhoto(L));
        float(L);
      }
    } catch (e) {}
  };
  var tries = 0;
  var tick = function () { mark(); if (++tries < 6) setTimeout(tick, 500); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tick); else tick();
  window.addEventListener("load", mark);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(mark);
  var rz; window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(mark, 200); }, { passive: true });
})();

/* ---- OB NAV TONE v2 (v17.14) · every page: how the logo, nav, BAG and the words over the home video look (black in OB SETTINGS; styles in ob-suite.css).
   "mono" = the white difference look (Custom CSS 3.3) made pure greyscale: an inert copy of the header and of the words over the video lies on top with mix-blend-mode: saturation (html.obMono, [data-ob-mono]); monoHero: false = header only.
   true = all black (html.obBlack). false = the plain white difference look (html.obNavOff).
   v17.14: "auto" / "snap" (brightness sampling), monoPhotos and the logo shrink are gone. ---- */
(function () {
  try {
    var C = window.OB_CONF || {}, d = document.documentElement;
    var B = C.black === undefined ? true : C.black;
    if (B === true) { d.classList.add("obBlack"); return; }
    d.classList.add("obNavOff");
    if (B !== "mono") return;
    d.classList.add("obMono");
    /* the copies are inert, hidden from screen readers and take no clicks; a class or style change is copied onto the same element in the copy (so the header's scroll classes keep their transitions in step); added or removed content rebuilds the copy (BAG count, Squarespace classes) */
    var monoOf = function (src) {
      var cl = null, raf = 0;
      var build = function () {
        raf = 0;
        if (!src.isConnected) return;
        var n = src.cloneNode(true);
        n.setAttribute("data-ob-mono", ""); n.setAttribute("aria-hidden", "true"); n.inert = true;
        n.querySelectorAll("video,iframe,script,noscript").forEach(function (x) { var k = document.createElement("i"); k.hidden = true; x.replaceWith(k); });
        if (cl && cl.parentNode) cl.replaceWith(n); else src.after(n);
        cl = n;
        sync();
      };
      /* v17.15: a copy made while the header is fading in or out (page arrival, tapping the logo to reload) starts its own fade from the beginning, out of step with the header: the greyscale layer then flickers over the logo and menu. Each of the copy's animations is put at the same moment as the original's. */
      var sync = function () {
        try {
          if (!cl || !src.getAnimations) return;
          var a = src.getAnimations({ subtree: true }), b = cl.getAnimations({ subtree: true });
          for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i].animationName && a[i].animationName !== b[i].animationName) continue;
            b[i].currentTime = a[i].currentTime;
          }
        } catch (e) {}
      };
      if (src.addEventListener) ["animationstart", "transitionrun"].forEach(function (ev) { src.addEventListener(ev, function () { requestAnimationFrame(sync); }); });
      var twin = function (el) {
        var path = [];
        while (el && el !== src) { var p = el.parentNode; if (!p) return null; path.unshift(Array.prototype.indexOf.call(p.children, el)); el = p; }
        if (el !== src) return null;
        var t = cl;
        for (var i = 0; t && i < path.length; i++) t = t.children[path[i]];
        return t || null;
      };
      build();
      new MutationObserver(function (list) {
        for (var i = 0; i < list.length; i++) {
          var m = list[i];
          if (m.type !== "attributes") { if (!raf) raf = requestAnimationFrame(build); return; }
          var t = cl && twin(m.target);
          if (!t) { if (!raf) raf = requestAnimationFrame(build); return; }
          var v = m.target.getAttribute(m.attributeName);
          if (v === null) t.removeAttribute(m.attributeName); else t.setAttribute(m.attributeName, v);
        }
      }).observe(src, { subtree: true, childList: true, attributes: true, characterData: true, attributeFilter: ["class", "style", "src", "srcset", "href"] });
    };
    var monoGo = function () {
      var hd = document.querySelector("#header:not([data-ob-mono])");
      if (hd) monoOf(hd);
      if (C.monoHero !== false) document.querySelectorAll("section.page-section").forEach(function (sec) {
        if (!sec.querySelector(".section-background video, .section-background .sqs-video-background-native")) return;
        sec.querySelectorAll(".fe-block").forEach(function (b) { if (b.querySelector(".sqs-html-content") && !b.hasAttribute("data-ob-mono") && !b.hasAttribute("data-ob-mono-src")) { b.setAttribute("data-ob-mono-src", ""); monoOf(b); } });
      });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", monoGo); else monoGo();
  } catch (e) {}
})();

/* ---- OB STATEMENT LINES v1 (v17.6) · home page: the statement under the hero gets line breaks before SOMETHING, THINGS, TO and LITTLE (EVERY ROOM NEEDS / SOMETHING SLIGHTLY OFF. / THINGS MADE AND FOUND / TO KEEP YOUR PLACE, A / LITTLE LESS EXPECTED.). Only while the words are exactly these, in English; commas may sit anywhere. The breaks are <br class="obBr">: Custom CSS 9.6 shows them on phones only. statementLines: false in OB SETTINGS switches it off. ---- */
(function () {
  try {
    if ((window.OB_CONF || {}).statementLines === false) return;
    var WORDS = "every room needs something slightly off things made and found to keep your place a little less expected";
    var BEFORE = { 3: 1, 6: 1, 10: 1, 15: 1 };
    var run = function () {
      try {
        var d = document.documentElement;
        if (!(d.classList.contains("ob-page-home") || location.pathname === "/")) return;
        var hs = document.querySelectorAll("main .sqs-html-content h1, main .sqs-html-content h2");
        for (var i = 0; i < hs.length; i++) {
          var h = hs[i];
          if (h.querySelector("br.obBr")) continue;
          var txt = (h.textContent || "").toLowerCase().replace(/[^a-z\s]/g, " ").replace(/\s+/g, " ").trim();
          if (txt !== WORDS) continue;
          var w = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null), n, nodes = [];
          while ((n = w.nextNode())) nodes.push(n);
          var idx = 0, inWord = false, cuts = [];
          nodes.forEach(function (t) {
            var v = t.nodeValue;
            for (var k = 0; k < v.length; k++) {
              var isW = /[A-Za-z]/.test(v.charAt(k));
              if (isW && !inWord) { if (BEFORE[idx]) cuts.push([t, k]); idx++; }
              if (/\s/.test(v.charAt(k))) inWord = false; else if (isW) inWord = true;
            }
          });
          if (cuts.length !== 4) continue;
          for (var c = cuts.length - 1; c >= 0; c--) {
            var node = cuts[c][0], at = cuts[c][1];
            var rest = node.splitText(at), br = document.createElement("br");
            br.className = "obBr";
            rest.parentNode.insertBefore(br, rest);
          }
          h.classList.add("obStatement");
        }
      } catch (e) {}
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
    window.addEventListener("load", run);
    if (window.Weglot && Weglot.on) try { Weglot.on("languageChanged", function () { setTimeout(run, 0); }); } catch (e) {}
  } catch (e) {}
})();

/* ---- footer: OB OTHER THINGS v1 · product pages, computers: OTHER THINGS as one sideways row (drag, trackpad, arrow keys), topped up from the store (otherThings in OB SETTINGS). Styles in ob-suite.css. ---- */
try {
(function () {
  try {
    if (!document.querySelector || !window.matchMedia) return;
    var C = function () { return (window.OB_CONF || {}).otherThings || {}; };
    if (C().on === false) return;
    var lang = function () {
      try { if (window.Weglot && Weglot.initialized && Weglot.getCurrentLang) return Weglot.getCurrentLang(); } catch (e) {}
      try { var w = localStorage.getItem("wglang"); if (w) return w.slice(0, 2).toLowerCase(); } catch (e) {}
      return (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    };
    var word = function (k, d) { var w = C()[k] || d; return typeof w === "string" ? w : (w[lang()] || w.en || d.en); };
    var MQ = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)");
    var still = function () { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
    var row = null, sec = null, filled = false;

    var find = function () {
      if (row && document.contains(row)) return row;
      sec = document.querySelector(".related-products-section");
      row = sec ? sec.querySelector(".product-list-container") : null;
      return row;
    };

    /* the chip words: VIEW over each product, DRAG over the row */
    var words = function () {
      if (!row) return;
      row.setAttribute("data-ob-tip", word("drag", { en: "Drag", it: "Trascina" }));
      var v = word("view", { en: "View", it: "Vedi" });
      row.querySelectorAll(".product-list-item-link").forEach(function (a) { a.setAttribute("data-ob-tip", v); });
    };

    /* topping up from the store: same kind of product first, then the rest in the store's order */
    var price = function (it, like) {
      var vs = (it.structuredContent && it.structuredContent.variants) || it.variants || [];
      var ps = vs.map(function (v) { var m = v.onSale ? v.salePriceMoney : v.priceMoney; return m ? +m.value : NaN; }).filter(function (n) { return !isNaN(n); });
      if (!ps.length) return null;
      var lo = Math.min.apply(null, ps), hi = Math.max.apply(null, ps);
      var m = /^(.*?)([€$£])/.exec(like || "");
      var cur = m ? m[2] : "€", from = m ? m[1] : "from ";
      var n = lo % 1 ? lo.toFixed(2) : String(lo);
      return { lo: lo, text: (hi > lo ? from : "") + cur + n };
    };
    var fill = function () {
      if (filled || !row) return;
      filled = true;
      var max = +C().max || 12;
      var have = row.querySelectorAll(".product-list-item");
      if (!have.length || have.length >= max) return;
      var tpl = have[0], likePrice = "";
      for (var i = 0; i < have.length && !likePrice; i++) { var pe = have[i].querySelector(".product-list-item-price"); if (pe && /^\s*\D+\s*[€$£]/.test(pe.textContent)) likePrice = pe.textContent.trim(); }
      if (!likePrice) { var p0 = tpl.querySelector(".product-list-item-price"); likePrice = p0 ? p0.textContent.trim() : ""; }
      var seen = {};
      seen[location.pathname.replace(/\/$/, "")] = 1;
      have.forEach(function (it) { var a = it.querySelector("a[href]"); if (a) seen[(a.getAttribute("href") || "").replace(/\/$/, "")] = 1; });
      (C().skip || []).forEach(function (p) { seen[String(p).replace(/\/$/, "")] = 1; });
      var use = function (items) {
        try {
          var me = null;
          items.forEach(function (it) { if ((it.fullUrl || "").replace(/\/$/, "") === location.pathname.replace(/\/$/, "")) me = it; });
          var cats = (me && me.categoryIds) || [];
          var pool = items.filter(function (it) {
            var u = (it.fullUrl || "").replace(/\/$/, "");
            if (!u || seen[u] || !it.assetUrl) return false;
            var pr = price(it, likePrice);
            if (C().skipFree !== false && (!pr || pr.lo <= 0)) return false;
            return true;
          });
          var same = function (it) { return (it.categoryIds || []).some(function (c) { return cats.indexOf(c) >= 0; }) ? 0 : 1; };
          pool = pool.map(function (it, k) { return { it: it, k: k }; }).sort(function (a, b) { return same(a.it) - same(b.it) || a.k - b.k; }).map(function (x) { return x.it; });
          pool.slice(0, max - have.length).forEach(function (it) {
            var el = tpl.cloneNode(true);
            el.classList.add("obOtExtra", "is-loaded");
            el.querySelectorAll(".grid-item-additional-image").forEach(function (x) { x.parentNode.removeChild(x); });
            var a = el.querySelector("a[href]");
            if (a) { a.setAttribute("href", it.fullUrl); a.setAttribute("aria-label", it.title || ""); }
            var im = el.querySelector("img");
            if (im) {
              var u = it.assetUrl.replace(/^http:/, "https:");
              ["data-src", "data-image", "data-image-id", "data-image-dimensions", "data-ob-alt", "data-ob-alt-was", "elementtiming", "data-loader", "width", "height"].forEach(function (k) { im.removeAttribute(k); });
              im.setAttribute("loading", "lazy");
              im.setAttribute("decoding", "async");
              im.setAttribute("alt", it.title || "");
              im.setAttribute("sizes", "(min-width: 768px) 17vw, 50vw");
              im.setAttribute("srcset", [300, 500, 750, 1000].map(function (w) { return u + "?format=" + w + "w " + w + "w"; }).join(", "));
              im.setAttribute("src", u + "?format=500w");
              var fp = it.mediaFocalPoint;
              im.style.objectPosition = fp && typeof fp.x === "number" ? (fp.x * 100) + "% " + (fp.y * 100) + "%" : "50% 50%";
              im.style.display = "block";
              im.style.opacity = "1";
            }
            var ti = el.querySelector(".product-list-item-title");
            if (ti) ti.textContent = it.title || "";
            var pe = el.querySelector(".product-list-item-price"), pr = price(it, likePrice);
            if (pe) pe.textContent = pr ? pr.text : "";
            var st = el.querySelector(".product-list-item-status");
            if (st) st.textContent = "";
            row.appendChild(el);
          });
          words();
        } catch (e) {}
      };
      var KEY = "obOtStore1";
      try {
        var c = JSON.parse(sessionStorage.getItem(KEY) || "null");
        if (c && Date.now() - c.t < 600000 && c.items) { use(c.items); return; }
      } catch (e) {}
      fetch("/store?format=json", { credentials: "same-origin" }).then(function (r) { return r.json(); }).then(function (j) {
        var items = (j.items || []).map(function (it) {
          return { fullUrl: it.fullUrl, title: it.title, assetUrl: it.assetUrl, mediaFocalPoint: it.mediaFocalPoint, categoryIds: it.categoryIds,
            structuredContent: { variants: ((it.structuredContent || {}).variants || []).map(function (v) { return { onSale: v.onSale, priceMoney: v.priceMoney, salePriceMoney: v.salePriceMoney }; }) } };
        });
        try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), items: items })); } catch (e) {}
        use(items);
      }).catch(function () {});
    };

    /* dragging with the mouse: the row follows the pointer, glides a little on release (not with reduced motion) and settles on a product's edge */
    var down = null, dragged = false, glideRaf = 0, settleT = 0;
    var snapTo = function (target) {
      var items = row.querySelectorAll(".product-list-item"), best = target, bd = Infinity, base = row.getBoundingClientRect().left - row.scrollLeft;
      for (var i = 0; i < items.length; i++) {
        if (!items[i].offsetWidth) continue;
        var x = items[i].getBoundingClientRect().left - base;
        if (Math.abs(x - target) < bd) { bd = Math.abs(x - target); best = x; }
      }
      best = Math.max(0, Math.min(best, row.scrollWidth - row.clientWidth));
      row.scrollTo({ left: best, behavior: still() ? "auto" : "smooth" });
      clearTimeout(settleT);
      settleT = setTimeout(function () { row.classList.remove("obOtDragging"); if (window.__obPvTipAgain) window.__obPvTipAgain(); }, still() ? 0 : 450);
    };
    var onDown = function (e) {
      if (!document.documentElement.classList.contains("obOtOn") || e.pointerType !== "mouse" || e.button !== 0) return;
      if (row.scrollWidth <= row.clientWidth + 2) return;
      cancelAnimationFrame(glideRaf);
      down = { x: e.clientX, s: row.scrollLeft, lx: e.clientX, lt: performance.now(), v: 0 };
      dragged = false;
    };
    var onMove = function (e) {
      if (!down) return;
      var dx = e.clientX - down.x;
      if (!dragged && Math.abs(dx) > 6) { dragged = true; clearTimeout(settleT); row.classList.add("obOtDragging"); }
      if (!dragged) return;
      var now = performance.now(), dt = Math.max(1, now - down.lt);
      down.v = 0.8 * ((e.clientX - down.lx) / dt) + 0.2 * down.v;
      down.lx = e.clientX; down.lt = now;
      row.scrollLeft = down.s - dx;
    };
    var onUp = function () {
      if (!down) return;
      var d = down; down = null;
      if (!dragged) return;
      /* a click right after a drag doesn't open the product */
      setTimeout(function () { dragged = false; }, 0);
      var v = performance.now() - d.lt > 80 ? 0 : d.v;
      var g = still() ? 0 : v * 260, cap = row.clientWidth * 0.6;
      snapTo(row.scrollLeft - Math.max(-cap, Math.min(cap, g)));
    };

    var bound = false, kbTo = 0, kbAt = 0;
    /* the row runs on to the right edge of the screen (the next product hangs off the page); at the far end the last product stops at the page margin */
    var bleed = function () {
      if (!row) return;
      row.style.marginRight = "";
      row.style.removeProperty("--obOtEnd");
      if (!document.documentElement.classList.contains("obOtOn")) return;
      var gap = parseFloat(getComputedStyle(row).columnGap) || 0;
      var b = Math.max(0, Math.round(document.documentElement.clientWidth - row.getBoundingClientRect().right));
      if (!b) return;
      row.style.marginRight = -b + "px";
      row.style.setProperty("--obOtEnd", Math.max(0, b - gap) + "px");
    };
    var bleedT = 0;
    window.addEventListener("resize", function () { clearTimeout(bleedT); bleedT = setTimeout(bleed, 150); });
    var apply = function () {
      if (!find()) return;
      var on = MQ.matches;
      document.documentElement.classList.toggle("obOtOn", on);
      row.classList.toggle("obOtRow", on);
      if (on) {
        row.style.setProperty("--obOtShow", String(+C().show || 4));
        row.style.setProperty("--obOtPeek", String(C().peek != null ? +C().peek : 0.25));
        bleed();
        var h = sec.querySelector(".product-related-products-title");
        row.setAttribute("role", "region");
        row.setAttribute("aria-label", h ? h.textContent.trim() : "Other things");
        row.setAttribute("tabindex", "0");
        words();
        fill();
        if (!bound) {
          bound = true;
          row.addEventListener("pointerdown", onDown);
          window.addEventListener("pointermove", onMove, { passive: true });
          window.addEventListener("pointerup", onUp);
          window.addEventListener("pointercancel", onUp);
          row.addEventListener("dragstart", function (e) { if (document.documentElement.classList.contains("obOtOn")) e.preventDefault(); });
          row.addEventListener("click", function (e) { if (dragged || row.classList.contains("obOtDragging")) { e.preventDefault(); e.stopPropagation(); } }, true);
          row.addEventListener("pointerenter", words);
          /* keyboard: with the row or a product in it focused, the arrow keys move one product along, Home / End go to either end */
          row.addEventListener("keydown", function (e) {
            if (!document.documentElement.classList.contains("obOtOn") || e.altKey || e.ctrlKey || e.metaKey) return;
            var it = row.querySelector(".product-list-item"), step = it ? it.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || 0) : 200;
            /* a key pressed again while the row is still moving carries on from where it was heading */
            var from = kbAt && Date.now() - kbAt < 450 ? kbTo : row.scrollLeft;
            var to = e.key === "ArrowRight" ? from + step : e.key === "ArrowLeft" ? from - step : e.key === "Home" ? 0 : e.key === "End" ? row.scrollWidth : null;
            if (to === null) return;
            e.preventDefault();
            kbTo = Math.max(0, Math.min(to, row.scrollWidth - row.clientWidth)); kbAt = Date.now();
            row.scrollTo({ left: kbTo, behavior: still() ? "auto" : "smooth" });
          });
        }
      } else {
        ["role", "aria-label", "tabindex", "data-ob-tip"].forEach(function (k) { row.removeAttribute(k); });
        bleed();
        row.querySelectorAll("[data-ob-tip]").forEach(function (a) { a.removeAttribute("data-ob-tip"); });
      }
    };
    var tries = 0;
    var tick = function () { apply(); if (!row && ++tries < 10) setTimeout(tick, 400); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", tick); else tick();
    if (MQ.addEventListener) MQ.addEventListener("change", apply); else if (MQ.addListener) MQ.addListener(apply);
  } catch (e) {}
})();
} catch (e) { if (window.console) console.error("[OB OTHER THINGS v1]", e); }
/* ---- footer: OB BACK CHIP v1 · product pages: a frosted ‹ SHOP chip under the header that pops in when you scroll back up and away when you scroll down (the store chips' rule), back to the store page you came from, same category and place (backChip in OB SETTINGS). Styles in ob-suite.css. ---- */
try {
(function () {
  try {
    var LIST = /^\/store(\/(?!p\/)[^\/]+)?\/?$/i, KEY = "obLastStore";
    var DELTA = 10, HIDE_MS = 80, GRACE_MS = 800, FOOT_SHARE = .5;
    var conf = function () { var o = window.OB_CONF || {}; return o.backChip === false ? { show: false } : (o.backChip || {}); };
    var lang = function () {
      try { if (window.Weglot && Weglot.initialized && Weglot.getCurrentLang) return Weglot.getCurrentLang(); } catch (e) {}
      try { var w = localStorage.getItem("wglang"); if (w) return w.slice(0, 2).toLowerCase(); } catch (e) {}
      return (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
    };
    var words = function (w, d) { if (!w) return d; if (typeof w === "string") return w; return w[lang()] || w.en || d; };
    /* store pages remember themselves (address and category), so the chip goes back to the same one */
    var remember = function () {
      if (!LIST.test(location.pathname)) return;
      try { sessionStorage.setItem(KEY, location.pathname + location.search); } catch (e) {}
    };
    var lastStore = function () { try { return sessionStorage.getItem(KEY) || ""; } catch (e) { return ""; } };
    var isDetail = function () { var b = document.body; return !!b && /collection-type-(products|shop)/.test(b.className) && b.classList.contains("view-item"); };
    var phone = function () { return document.documentElement.classList.contains("ob-compact") || window.matchMedia("(max-width: 767px)").matches; };
    var wanted = function () {
      var s = conf().show; if (s === undefined) s = "both";
      if (!s || !isDetail()) return false;
      if (s === "phone") return phone();
      if (s === "computer") return !phone();
      return true;
    };
    var a = null, lastY = null, hideT = 0, graceUntil = 0, raf = 0;
    var target = function () { return lastStore() || conf().href || "/store"; };
    var build = function () {
      a = document.createElement("a");
      a.className = "obBack obBackHidden";
      a.href = target();
      a.setAttribute("tabindex", "-1");
      a.setAttribute("aria-hidden", "true");
      a.innerHTML = '<b><i aria-hidden="true">\u2190</i><span></span></b>'; /* the arrow: the About page's TAKE SOMETHING HOME arrow, turned to point back */
      a.querySelector("span").textContent = words(conf().word, "Shop");
      a.setAttribute("aria-label", words(conf().label, "Back to shop"));
      /* back to the store page we came from: the browser's own Back, so the category, the place on the page and the photos already loaded all come back as they were */
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
        var last = lastStore(), ref = "";
        try { var r = new URL(document.referrer); if (r.origin === location.origin) ref = r.pathname + r.search; } catch (x) {}
        if (last && ref && ref.replace(/\/+$/, "") === last.replace(/\/+$/, "") && history.length > 1 && !(history.state && history.state.obPv)) {
          e.preventDefault();
          var here = location.href;
          history.back();
          /* if Back didn't leave the page (e.g. the history was cut), go by address instead */
          setTimeout(function () { if (location.href === here) location.href = last; }, 700);
        }
      });
      a.addEventListener("focus", function () { show(); });
      document.body.appendChild(a);
      place();
    };
    /* line the chip up with the left edge of the product (gallery), not the screen edge */
    var place = function () {
      if (!a) return;
      var g = document.querySelector(".product-detail .product-gallery, .ProductItem-gallery, .product-gallery, .product-detail");
      var x = g ? Math.round(g.getBoundingClientRect().left) : 0;
      if (x > 0 && x < window.innerWidth / 2) a.style.setProperty("--obBackX", x + "px"); else a.style.removeProperty("--obBackX");
    };
    var hidden = function () { return !a || a.classList.contains("obBackHidden"); };
    var show = function () {
      if (!a || !hidden()) return;
      a.href = target();
      a.classList.remove("obBackHidden");
      a.removeAttribute("aria-hidden");
      a.removeAttribute("tabindex");
    };
    var hide = function () {
      if (!a || hidden()) return;
      if (document.activeElement === a) return;
      a.classList.add("obBackHidden");
      a.setAttribute("aria-hidden", "true");
      a.setAttribute("tabindex", "-1");
    };
    var update = function () {
      raf = 0;
      if (!wanted()) { if (a) { a.remove(); a = null; } return; }
      if (!a) { build(); lastY = null; graceUntil = Date.now() + GRACE_MS; }
      var y = window.scrollY || window.pageYOffset || 0;
      var vh = window.innerHeight;
      var footer = document.querySelector("#footer-sections, footer.sections");
      var atFooter = !!footer && footer.getBoundingClientRect().top < vh * FOOT_SHARE;
      var menu = document.body.classList.contains("header--menu-open");
      var startY = vh * (conf().startShare != null ? +conf().startShare : .5);
      if (y < startY || atFooter || menu || Date.now() < graceUntil) { clearTimeout(hideT); hideT = 0; lastY = y; hide(); return; }
      if (lastY === null) { lastY = y; return; }
      var d = y - lastY;
      if (Math.abs(d) < DELTA) return;
      lastY = y;
      if (d > 0) {
        if (!hideT) hideT = setTimeout(function () { hideT = 0; hide(); }, HIDE_MS);
      } else {
        clearTimeout(hideT); hideT = 0;
        show();
      }
    };
    var queue = function () { if (!raf) raf = requestAnimationFrame(update); };
    var start = function () {
      remember();
      queue();
      window.addEventListener("scroll", queue, { passive: true });
      window.addEventListener("resize", function () { place(); queue(); }, { passive: true });
      window.addEventListener("pageshow", function (e) { remember(); if (e.persisted && a) { hide(); lastY = null; graceUntil = Date.now() + GRACE_MS; } queue(); });
      window.addEventListener("popstate", function () { remember(); queue(); });
      setTimeout(place, 1200);
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
  } catch (e) {}
})();
} catch (e) { if (window.console) console.error("[OB BACK CHIP v1]", e); }
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
  chipsFooterShare: .5,
  chipsTopShare: .5,
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
  const inflow = isCompact() ? qs("#" + IDS.chipsInline + " .obChipBtn") : qs("ul[data-ob-owned] a");
  const tile = qs(".product-list-item:not(.obTileOff)");
  const startY = !inflow || !inflow.offsetHeight ? (document.documentElement.scrollHeight - window.innerHeight) * .2 : tile ? tile.getBoundingClientRect().top + y + tile.offsetHeight * CONF.chipsTopShare : window.innerHeight * .6;
  const footer = qs("#footer-sections");
  const atFooter = !!footer && footer.getBoundingClientRect().top < window.innerHeight * CONF.chipsFooterShare;
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
  namesMs: 400
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
 const scrambleRun = (chars, cur, at, wait, alive, write, finish, every = 0) => {
  const n = chars.length;
  const settled = chars.map(ch => !isShuffleLetter(ch));
  let t0 = 0, last = -1e9;
  const tick = ts => {
   if (!alive()) return;
   if (!t0) t0 = ts;
   const t = ts - t0;
   const roll = t - last >= every;
   if (roll) last = t;
   let done = true;
   for (let i = 0; i < n; i++) {
    if (settled[i]) continue;
    if (t >= at[i]) {
     cur[i] = chars[i];
     settled[i] = true;
    } else {
     done = false;
     if (roll && t >= wait && Math.random() < .45) cur[i] = shuffleLetter();
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
 /* textSwap in OB SETTINGS: how the category line and product names change with the store chips.
    "fade" = the line slides up and fades out, the new one rises in; "scramble" = the letter scramble (default on both). */
 const swapStyle = () => {
  const o = (window.OB_CONF || {}).textSwap || {};
  return MQ.mobile.matches ? o.phone || "scramble" : o.computer || "scramble";
 };
 const swapFade = () => swapStyle() === "fade";
 const copyFade = (p, from, to) => {
  const token = String(now()) + Math.random();
  p.dataset.obShuffling = token;
  p.setAttribute("aria-label", to);
  const alive = () => p.dataset.obShuffling === token;
  const finish = () => {
   if (!alive()) return;
   p.__obFade?.cancel();
   p.__obFade = null;
   p.style.removeProperty("min-height");
   p.textContent = to;
   p.removeAttribute("aria-label");
   delete p.dataset.obShuffling;
  };
  if (!p.animate) {
   finish();
   return;
  }
  const run = (kf, ms, ease, next) => {
   p.__obFade?.cancel();
   const a = p.animate(kf, {
    duration: ms,
    easing: ease,
    fill: "forwards"
   });
   p.__obFade = a;
   let done = false;
   const go = () => {
    if (done || p.__obFade !== a) return;
    done = true;
    if (alive()) next();
   };
   a.onfinish = go;
   setTimeout(go, ms + 40);
  };
  const rise = () => {
   p.textContent = to;
   run([ {
    opacity: 0,
    transform: "translateY(.4em)"
   }, {
    opacity: 1,
    transform: "none"
   } ], 260, "cubic-bezier(.2,.7,.2,1)", finish);
  };
  /* the line keeps its height while it swaps, so the photos below don't jump */
  p.style.minHeight = p.offsetHeight + "px";
  if (!from) {
   rise();
  } else {
   const op = parseFloat(getComputedStyle(p).opacity);
   run([ {
    opacity: isNaN(op) ? 1 : op,
    transform: "none"
   }, {
    opacity: 0,
    transform: "translateY(-.4em)"
   } ], 150, "ease-in", rise);
  }
  setTimeout(finish, 1500);
 };
 const copyShuffle = (p, from, to) => {
  if (swapFade()) {
   copyFade(p, from, to);
   return;
  }
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
 /* v17.1: a name scrambles in its own text, so there is only ever one copy of it on screen (the old version drew
    the scramble over a hidden copy, which on phones could show both at once). All the names on screen run in one
    animation loop: positions are read once at the start, then each frame only changes text. Letters settle left to
    right; the ones not settled yet change every ~33ms. Each name takes SHUFFLE.namesMs, the next starts 25ms later
    (at most 150ms). Off-screen names are left alone. A scramble still running is put back before a new one. */
 const NAMES = {
  stepMs: 33,
  staggerMs: 25,
  staggerMax: 150
 };
 let namesRun = null;
 const nameRestore = title => {
  const st = title.__obShuf;
  if (!st) return;
  title.__obShuf = null;
  title.textContent = st.raw;
  title.removeAttribute("aria-label");
  if (!st.wg) title.removeAttribute("data-wg-notranslate");
  title.classList.remove("obNameShuf");
  title.style.removeProperty("white-space");
 };
 const nameJob = (title, wait, dur, header) => {
  nameRestore(title);
  qsa(".obNameOv", title).forEach(x => x.remove());
  if (title.children.length) return null;
  const raw = title.textContent, to = textOf(title);
  if (!to) return null;
  const st = {
   raw,
   wg: title.hasAttribute("data-wg-notranslate")
  };
  const chars = [ ...to ], n = chars.length;
  const cur = chars.map(ch => isShuffleLetter(ch) ? shuffleLetter() : ch);
  /* "header": letters settle in a loose wave like the category line; otherwise strictly left to right */
  const at = header ? chars.map((_, i) => wait + i / n * dur * .65 + dur * .35 * Math.random()) : chars.map((_, i) => wait + dur * .25 + (i + 1) / n * dur * .75);
  return {
   title,
   st,
   header: !!header,
   to,
   chars,
   cur,
   at,
   end: wait + dur,
   single: false,
   last: ""
  };
 };
 const namesStart = jobs => {
  if (namesRun) {
   namesRun.alive = false;
   namesRun.jobs.forEach(j => nameRestore(j.title));
  }
  if (!jobs.length) {
   namesRun = null;
   return;
  }
  jobs.forEach(j => {
   const t = j.title;
   t.__obShuf = j.st;
   t.setAttribute("data-wg-notranslate", "");
   t.setAttribute("aria-label", j.to);
   t.classList.add("obNameShuf");
   if (j.single) t.style.whiteSpace = "nowrap";
   j.last = j.cur.join("");
   t.textContent = j.last;
   j.text = t.firstChild;
  });
  const run = {
   alive: true,
   jobs
  };
  namesRun = run;
  const endAll = Math.max(...jobs.map(j => j.end));
  const done = () => {
   if (!run.alive) return;
   run.alive = false;
   jobs.forEach(j => {
    if (j.title.__obShuf === j.st) nameRestore(j.title);
   });
   if (namesRun === run) namesRun = null;
  };
  let t0 = 0, lastRoll = -1e9;
  const tick = ts => {
   if (!run.alive) return;
   if (!t0) t0 = ts;
   const t = ts - t0;
   const roll = t - lastRoll >= NAMES.stepMs;
   if (roll) lastRoll = t;
   for (const j of jobs) {
    if (j.title.__obShuf !== j.st) continue;
    if (t >= j.end) {
     nameRestore(j.title);
     continue;
    }
    for (let i = 0; i < j.chars.length; i++) {
     if (j.cur[i] === j.chars[i] && t >= j.at[i]) continue;
     if (t >= j.at[i] || !isShuffleLetter(j.chars[i])) j.cur[i] = j.chars[i]; else if (j.header ? Math.random() < .45 : roll) j.cur[i] = shuffleLetter();
    }
    const s = j.cur.join("");
    if (s !== j.last) {
     j.last = s;
     j.text.nodeValue = s;
    }
   }
   if (t >= endAll) {
    done();
    return;
   }
   requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  setTimeout(done, endAll + 1500);
 };
 const namesSweep = force => {
  qsa(".obNameOv").forEach(ov => ov.remove());
  qsa(".obNameShuf").forEach(t => {
   if (force || !t.__obShuf) {
    if (t.__obShuf) nameRestore(t); else t.classList.remove("obNameShuf");
   }
  });
 };
 /* textSwap.names in OB_CONF: "fade" = each name and price rise in and fade up, one after another (default), "header" = the
    same scramble as the category line, "scramble" = calmer, left to right in 0.4s, false = nothing extra */
 const namesMode = () => {
  const v = ((window.OB_CONF || {}).textSwap || {}).names;
  return v === false ? "" : v === "scramble" || v === "header" ? v : "fade";
 };
 const namesFade = (titles, base = 0) => {
  titles.forEach((title, i) => {
   if (!title.animate) return;
   title.__obNameFade?.cancel();
   const a = title.animate([ {
    opacity: 0,
    transform: "translateY(.4em)"
   }, {
    opacity: 1,
    transform: "none"
   } ], {
    duration: 320,
    delay: base + Math.min(i * NAMES.staggerMs, NAMES.staggerMax),
    easing: "cubic-bezier(.2,.7,.2,1)",
    fill: "backwards"
   });
   title.__obNameFade = a;
   const end = () => {
    if (title.__obNameFade === a) {
     a.cancel();
     title.__obNameFade = null;
    }
   };
   a.onfinish = end;
   setTimeout(end, base + 320 + NAMES.staggerMax + 400);
  });
 };
 const namesOn = () => !!namesMode();
 const namesShuffleIn = (grid, base = 0) => {
  if (!SHUFFLE.names || !namesOn() || !grid || inEditor || prefersReducedMotion()) return;
  setTimeout(namesSweep, base + NAMES.staggerMax + SHUFFLE.ms + 2600);
  const vh = window.innerHeight;
  /* read every position first, then write */
  const picks = [];
  Array.from(grid.children).forEach(tile => {
   if (!tile.classList.contains("product-list-item") || tile.classList.contains("obTileOff")) return;
   const title = tile.querySelector(".product-list-item-title");
   if (!title) return;
   const r = title.getBoundingClientRect();
   if (!r.height || r.bottom < 0 || r.top > vh) return;
   const lh = parseFloat(getComputedStyle(title).lineHeight) || r.height;
   picks.push([ title, r.height < lh * 1.5 ]);
  });
  if (namesMode() === "fade") {
   namesStart([]);
   namesFade(picks.map(p => p[0].closest(".product-list-title-price") || p[0]), base);
   return;
  }
  const jobs = [];
  picks.forEach(([title, single]) => {
   const header = namesMode() === "header";
   const j = nameJob(title, base + Math.min(jobs.length * NAMES.staggerMs, NAMES.staggerMax), header ? SHUFFLE.ms : SHUFFLE.namesMs, header);
   if (j) {
    j.single = single;
    jobs.push(j);
   }
  });
  namesStart(jobs);
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
  /* chipSwap in OB_CONF: "images" (default) = only the photos fade out and in, the names and prices switch at
     once; "all" = the whole grid fades out and in */
  const imgsOnly = String((window.OB_CONF || {}).chipSwap || "images") !== "all" && !d.classList.contains("obFilterWait") && !inEditor && !prefersReducedMotion();
  let out;
  if (imgsOnly) {
   box.__obFade?.cancel();
   box.__obFade = null;
   box.style.removeProperty("opacity");
   box.classList.remove("obSwapIn");
   box.classList.add("obSwapOut");
   out = new Promise(r => setTimeout(r, FILTER.outMs));
  } else out = d.classList.contains("obFilterWait") ? filterFade(box, 0, 0, 0) : filterFade(box, null, 0, FILTER.outMs);
  d.classList.remove("obFilterWait");
  const slowDone = filterSlow(token);
  Promise.all([ out, filterNeed(key) ]).then(([, ok]) => {
   if (token !== filterState.token) return;
   slowDone();
   if (!ok || !filterComplete(key)) {
    filterGiveUp(key);
    return;
   }
   if (imgsOnly) {
    filterToTop();
    filterShow(key);
    namesShuffleIn(filterGrid());
    void box.offsetWidth;
    requestAnimationFrame(() => {
     if (token !== filterState.token) return;
     box.classList.remove("obSwapOut");
     box.classList.add("obSwapIn");
     setTimeout(() => {
      if (token === filterState.token) box.classList.remove("obSwapIn");
     }, FILTER.inMs + 100);
    });
    return;
   }
   /* v17.1: the old products are put fully out of sight before the new ones go in, a frame apart, so the two
      can never show at once (on iPhones the fade-out could still be on screen as the new products faded in) */
   if (box) {
    box.__obFade?.cancel();
    box.__obFade = null;
    box.style.opacity = "0";
    void box.offsetWidth;
   }
   requestAnimationFrame(() => {
    if (token !== filterState.token) return;
    filterToTop();
    filterShow(key);
    namesShuffleIn(filterGrid());
    if (box) box.style.removeProperty("opacity");
    filterFade(box, 0, 1, FILTER.inMs);
   });
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
   if (t?.closest?.(".obNameOv, .obNameShuf")) return true;
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
     /* v17.15: free scrolling (no snap, Ben 27 Nov); the row runs edge to edge of the screen and its first and last cards sit on the page margins (6vw, the same edges as the photos) */
     container.style.cssText = [ "display:flex", "flex-direction:row", "flex-wrap:nowrap", "overflow-x:auto", "overflow-y:hidden", "-webkit-overflow-scrolling:touch", "overscroll-behavior-x:contain", "gap:12px", "padding-left:6vw", "padding-right:0", "scrollbar-width:none", "box-sizing:border-box", "padding-top:" + obPadTop + "px", "padding-bottom:" + obPadBottom + "px" ].join(";");
     var obBleed = function () {
      container.style.marginLeft = "0px"; container.style.marginRight = "0px"; container.style.width = "";
      var r = container.getBoundingClientRect(), vw = document.documentElement.clientWidth || window.innerWidth;
      container.style.marginLeft = (-r.left) + "px";
      container.style.marginRight = (-(vw - r.right)) + "px";
      container.style.width = vw + "px";
      container.style.maxWidth = "none";
     };
     obBleed();
     window.addEventListener("resize", obBleed, { passive: true });
     if (!document.getElementById("obSwipeStyle")) {
      var style = document.createElement("style");
      style.id = "obSwipeStyle";
      style.textContent = ".obSwipeContainer::-webkit-scrollbar{display:none!important}.obSwipeContainer::after{content:\"\";flex:0 0 calc(6vw - 12px);height:1px}";
      document.head.appendChild(style);
     }
     container.classList.add("obSwipeContainer");
     items.forEach(function(child) {
      child.style.cssText = [ "flex:0 0 70vw", "max-width:70vw", "min-width:70vw", "width:70vw", "padding-left:0", "padding-right:0" ].join(";");
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

/* ---- OB ACCORDION REVEAL v1 (v17.15) · product pages, phones: a tapped-open accordion section (DETAILS, SHIPPING…) ends fully on screen. While the sections animate, the opened one is held where it was (so one closing above it doesn't throw it upwards); once they settle, the page glides just enough to show all of it, its title kept under the header. ---- */
try {
(function () {
  var d = document.documentElement;
  if (!(d.classList.contains("ob-page-product") || /^\/store\/p\//i.test(location.pathname))) return;
  var phone = function () { return window.matchMedia("(max-width: 767px)").matches; };
  var still = function () { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; };
  var headerBottom = function () {
    var h = document.querySelector("#header:not([data-ob-mono])");
    var b = h ? Math.max(0, h.getBoundingClientRect().bottom) : 0;
    return Math.min(b, 120);
  };
  var run = 0;
  document.addEventListener("click", function (e) {
    if (!phone()) return;
    var btn = e.target.closest && e.target.closest("button.accordion-item__click-target");
    if (!btn) return;
    var item = btn.closest("li.accordion-item, .accordion-item");
    if (!item) return;
    var my = ++run, top0 = item.getBoundingClientRect().top, t0 = performance.now(), quiet = 0, lastH = -1;
    var prevAnchor = d.style.overflowAnchor;
    d.style.overflowAnchor = "none";
    var hold = function () {
      if (my !== run) return;
      if (btn.getAttribute("aria-expanded") !== "true") { d.style.overflowAnchor = prevAnchor; return; }
      var r = item.getBoundingClientRect();
      /* keep the opened section's title where it was tapped (something closing above it would move it) */
      var dy = r.top - top0;
      if (Math.abs(dy) > 0.5) window.scrollBy(0, dy);
      quiet = Math.abs(r.height - lastH) < 0.5 ? quiet + 1 : 0;
      lastH = r.height;
      if (quiet < 6 && performance.now() - t0 < 1200) { requestAnimationFrame(hold); return; }
      d.style.overflowAnchor = prevAnchor;
      /* settled: show the whole section if it runs off the bottom, never pushing its title under the header */
      r = item.getBoundingClientRect();
      var topLimit = headerBottom() + 16, bottomLimit = window.innerHeight - 24, by = 0;
      if (r.bottom > bottomLimit) by = Math.min(r.bottom - bottomLimit, r.top - topLimit);
      else if (r.top < topLimit) by = r.top - topLimit;
      if (Math.abs(by) > 2) window.scrollBy({ top: by, behavior: still() ? "auto" : "smooth" });
    };
    requestAnimationFrame(hold);
  }, false);
})();
} catch (e) { if (window.console) console.error("[OB accordion reveal v1]", e); }
