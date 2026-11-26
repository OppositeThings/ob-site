(function(){var st=document.createElement('style');st.textContent="\nhtml.obOtOn .related-products-section .product-list-container.obOtRow{display:flex!important;grid-template-columns:none!important;gap:var(--product-list-column-spacing,1.5vw)!important;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x proximity;scrollbar-width:none;-webkit-user-select:none;user-select:none;outline:none}\nhtml.obOtOn .obOtRow::-webkit-scrollbar{display:none}\nhtml.obOtOn .obOtRow:focus-visible{outline:2px solid #111;outline-offset:6px}\nhtml.obOtOn body .related-products-section .product-list-container.obOtRow>.product-list-item:nth-child(n){display:flex!important;flex:0 0 calc((100% - var(--product-list-column-spacing,1.5vw) * var(--obOtShow,4)) / (var(--obOtShow,4) + var(--obOtPeek,.25)));min-width:0;scroll-snap-align:start}\nhtml.obOtOn .obOtRow::after{content:\"\";flex:0 0 var(--obOtEnd,0px);height:1px}\nhtml.obOtOn .obOtRow.obOtDragging{scroll-snap-type:none}\nhtml.obOtOn .obOtRow.obOtDragging a{pointer-events:none}\nhtml.obOtOn .obOtRow img{-webkit-user-drag:none}\n.obOtExtra{display:none!important}\n.obOtExtra .grid-item-image{width:100%;height:100%;object-fit:cover}\n";document.head.appendChild(st);document.querySelectorAll('.obPvTip').forEach(function(t){t.style.display='none'});})();
window.OB_CONF=window.OB_CONF||{};OB_CONF.otherThings={on:true,show:4,peek:0.25,max:6,skipFree:true,skip:[],view:{en:'View',it:'Vedi'},drag:{en:'Drag',it:'Trascina'}};

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
            el.classList.add("obOtExtra");
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
        im.onload = function () { this.style.background = "none"; };
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
    var blurTo = function (i) {
      var lay = dlg.querySelectorAll(".obPvBlur i");
      if (lay.length < 2 || !list[i]) return;
      var url = list[i].now || (list[i].src + "?format=500w");
      var on = lay[0].classList.contains("obPvOn") ? 0 : 1, nx = 1 - on;
      if (lay[on].getAttribute("data-u") === url && lay[on].classList.contains("obPvOn")) return;
      lay[nx].style.backgroundImage = 'url("' + url.replace(/"/g, "%22") + '")';
      lay[nx].setAttribute("data-u", url);
      lay[nx].classList.add("obPvOn");
      lay[on].classList.remove("obPvOn");
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
      dlg.showModal();
      if (tip.classList.contains("obPvTipOn")) dlg.appendChild(tip);
      here = -1;
      jump(posOf(start));
      set(start);
      if (!still() && !phone()) {
        var src = pageImg(list[start]), im = viewImg(start);
        if (src && fly(im, src.getBoundingClientRect(), im.getBoundingClientRect(), false)) {
          dlg.classList.add("obPvIntro");
          void dlg.offsetWidth;
          dlg.classList.remove("obPvIntro");
        }
      }
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
      dlg.classList.add("obPvOutro");
      setTimeout(function () { shut(fromHistory, last); }, flew || !still() ? FLY : 0);
    };
    var shut = function (fromHistory, last) {
      /* the pointer word stays put while the viewer goes, then changes over to [ENLARGE] */
      if (tip.parentNode === dlg) document.body.appendChild(tip);
      dlg.close();
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
    tip.innerHTML = "<i></i><b></b>";
    var sq = tip.firstChild, chip = tip.lastChild;
    /* home page hero: on a computer the same pointer shows [SHOP] over the hero photo and a click anywhere on it opens the store (all products); the SHOP link laid over it is hidden there but stays for keyboard users (it shows when tabbed to) and on phones and tablets, where the hero is tappable too. heroShop in OB SETTINGS: href, word, on: false to switch it off, section: a section ID if the hero isn't the first section. */
    var HC = function () { return (window.OB_CONF || {}).heroShop || {}; };
    var heroHref = function () { return HC().href || "/store"; };
    var fine = function () { return window.matchMedia("(hover: hover) and (pointer: fine)").matches; };
    /* computers: the arrow becomes a small circle everywhere, which grows over anything clickable. Form fields keep their normal text cursor. The arrow is only hidden once this code runs and the mouse moves. cursor: "arrow" in OB SETTINGS brings the normal arrow back. */
    var cursorSet = function () { return String((window.OB_CONF || {}).cursor || "dot"); };
    var dotMode = function () { return cursorSet() !== "arrow" && cursorSet() !== "plain" && fine(); };
    /* cursor: "plain" in OB SETTINGS: the normal arrow everywhere, no dot or shapes; over photos only the word trails beside it */
    var plain = function () { return cursorSet() === "plain"; };
    if (plain()) document.documentElement.classList.add("obPlainCursor");
    var NATIVE = 'input:not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=image]), textarea, select, [contenteditable=""], [contenteditable=true], iframe';
    var CLICK = 'a[href], button, [role=button], [role=link], [role=tab], [role=menuitem], [role=option], label, summary, input[type=submit], input[type=button], input[type=checkbox], input[type=radio], input[type=image], [onclick], .product-gallery-slides-item, .obChipBtn';
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
      for (var i = 0; i < links.length; i++) { if (/^\[?\s*shop\b/i.test((links[i].textContent || "").trim())) { heroLink = links[i]; break; } }
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
              if (/^\[?\s*shop\b/i.test(txt) && pics.some(function (x) { return x.tagName === "A"; })) { L.classList.add("obTileLink", "obHeroShopHide"); }
              continue;
            }
            /* a photo with no link of its own (Finds) keeps its button as it is (Ben, v17.35) */
            if (best.tagName !== "A") continue;
            L.classList.add("obTileLink");
            if (/^\[?\s*shop\b/i.test(txt)) {
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
            if (L.querySelector("img") || !/^\[?\s*shop\b/i.test((L.textContent || "").trim())) return;
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
    /* the rest of the site: over a photo that links somewhere (store grid, product cards, Finds, home tiles) the pointer is the same dot, with no word. cursorDot: false in OB SETTINGS switches it off. */
    var DOT = "\u00b7dot", dotEl = null;
    var dotSet = function (a) {
      if (a === dotEl) return;
      if (dotEl) dotEl.classList.remove("obDotIn");
      dotEl = a;
      if (a) a.classList.add("obDotIn");
    };
    var dotWord = function (el) {
      var a = null;
      if ((window.OB_CONF || {}).cursorDot !== false && !plain() && el && el.closest && !el.closest(".obPv, " + SLIDES)) {
        var pic = el.tagName === "IMG" || el.tagName === "VIDEO" ? el : el.closest(".grid-image, .grid-item-image, .product-list-image-wrapper, .product-list-item-image, .fluid-image-container, .image-container, .image-block-wrapper, .summary-thumbnail-container");
        if (pic && pic.closest("main, footer, #footer-sections")) {
          a = pic.closest("a[href]");
          if (!a) { var blk = pic.closest(".sqs-block-image, .sqs-block-product"); a = blk && blk.querySelector("a[href]") && pic.closest(".sqs-block-image, .sqs-block-product") ? blk : null; }
        }
      }
      dotSet(a);
      return a ? DOT : "";
    };
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
      if (!dlg || !dlg.open) { var ow = el.closest(".obOtDragging[data-ob-tip]") || el.closest("[data-ob-tip]"); if (ow && fine() && ow.getAttribute("data-ob-tip")) { dotSet(null); return ow.getAttribute("data-ob-tip"); } var hw = heroWord(el, lastE); if (hw) { dotSet(null); return hw; } var tw = tileWord(el); if (tw) { dotSet(null); return tw; } return dotWord(el); }
      return "";
    };
    var SHAPES = ["circle", "square", "triangle", "petal"], picShape = "circle", onPic = false;
    var mx = 0, my = 0, cx = 0, cy = 0, on = false, raf = 0, lastE = null, word = "", swapT = 0;
    /* a new word fades out and in rather than jumping */
    var setWord = function (w) {
      if (w === word) return;
      word = w;
      if (!on || still()) { chip.textContent = w; chip.classList.remove("obPvSwap"); return; }
      chip.classList.add("obPvSwap");
      clearTimeout(swapT);
      swapT = setTimeout(function () { chip.textContent = word; chip.classList.remove("obPvSwap"); }, 120);
    };
    var draw = function () {
      raf = 0;
      if (still()) { cx = mx; cy = my; } else { cx += (mx - cx) * 0.09; cy += (my - cy) * 0.09; }
      sq.style.transform = "translate(" + mx + "px," + my + "px)";
      chip.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
      if (Math.abs(mx - cx) > 0.3 || Math.abs(my - cy) > 0.3) raf = requestAnimationFrame(draw);
    };
    var tipAt = function (e) {
      if (!e) return;
      lastE = { clientX: e.clientX, clientY: e.clientY, pointerType: e.pointerType };
      /* the Header's early dot (shown on arrival so the arrow doesn't flash in) hands over to this one */
      if (e.pointerType === "mouse" || !e.pointerType) document.documentElement.classList.remove("obDotEarly");
      if (window.PointerEvent && e instanceof PointerEvent) document.documentElement.classList.remove("obPicEarly", "obPicDot", "obPicHold");
      if (e.pointerType && e.pointerType !== "mouse") { tip.classList.remove("obPvTipOn"); on = false; dotSet(null); document.documentElement.classList.remove("obDotCursor"); return; }
      var home = dlg && dlg.open && !closing ? dlg : (closing ? tip.parentNode || document.body : document.body);
      if (tip.parentNode !== home) home.appendChild(tip);
      /* while the photos slide or the viewer closes, keep the word as it was */
      var w = (closing || Date.now() < navUntil) && on && word ? word : tipWord(document.elementFromPoint(e.clientX, e.clientY));
      /* over a photo (a word, or a photo that links somewhere): a shape picked at random each time the pointer arrives on one, never the same twice running */
      var pic = !!w;
      if (pic && !onPic) {
        /* the first photo after arriving keeps the Header's circle, so nothing jumps */
        if (document.documentElement.classList.contains("obPicDot")) picShape = "circle";
        else { var pool = SHAPES.filter(function (x) { return x !== picShape; }); picShape = pool[Math.floor(Math.random() * pool.length)]; }
      }
      onPic = pic;
      var grow = false;
      if (dotMode()) {
        if (!document.documentElement.classList.contains("obDotCursor")) document.documentElement.classList.add("obDotCursor");
        var under = document.elementFromPoint(e.clientX, e.clientY);
        if (!under || (under.closest && under.closest(NATIVE))) { tip.classList.remove("obPvTipOn"); on = false; return; }
        if (!w || w === DOT) { grow = w === DOT || !!(under.closest && under.closest(CLICK)); w = DOT; }
      } else {
        if (document.documentElement.classList.contains("obDotCursor")) document.documentElement.classList.remove("obDotCursor");
        /* arrow mode: the dot only shows over photos that link somewhere, at its hover size */
        if (w === DOT) grow = true;
      }
      if (!w) { tip.classList.remove("obPvTipOn"); on = false; return; }
      /* a word beside the dot: the dot is at its hover size too */
      if (w !== DOT) grow = true;
      tip.classList.toggle("obPvDotOnly", w === DOT);
      tip.classList.toggle("obPvGrow", grow);
      if (w !== DOT) setWord(w); else word = "";
      var shape = pic && (window.OB_CONF || {}).cursorShapes !== false ? picShape : String(((window.OB_CONF || {}).viewer || {}).cursor || "circle");
      if (tip.getAttribute("data-shape") !== shape) tip.setAttribute("data-shape", shape);
      /* shapes over photos: solid black, or frosted glass inside a thin black line (shapeStyle in OB SETTINGS) */
      var style = pic ? String((window.OB_CONF || {}).shapeStyle || "glass") : "solid";
      if (tip.getAttribute("data-style") !== style) tip.setAttribute("data-style", style);
      /* dot sizes in px: cursorSize { normal, hover } in OB SETTINGS (hover can be smaller than normal) */
      var cs = (window.OB_CONF || {}).cursorSize || {}, d1 = (+cs.normal || 10) + "px", d2 = (+cs.hover || 16) + "px";
      if (tip.style.getPropertyValue("--obDot") !== d1) tip.style.setProperty("--obDot", d1);
      if (tip.style.getPropertyValue("--obDotHover") !== d2) tip.style.setProperty("--obDotHover", d2);
      mx = e.clientX; my = e.clientY;
      if (!on) { cx = mx; cy = my; on = true; }
      tip.classList.add("obPvTipOn");
      if (!raf) raf = requestAnimationFrame(draw);
      document.documentElement.classList.remove("obPicEarly", "obPicDot", "obPicHold");
    };
    var tipAgain = function () { setTimeout(function () { tipAt(lastE); }, 40); };
    /* remember where the mouse was, so the next page's Header can put the dot there straight away */
    var dotSave = function () {
      try {
        if (!lastE || (lastE.pointerType && lastE.pointerType !== "mouse")) { sessionStorage.removeItem("obDot"); sessionStorage.removeItem("obPtr"); return; }
        /* any mode: where the mouse was, so the next page can show the right shape and word under it at once */
        var cz = (window.OB_CONF || {}).cursorSize || {}, gl = String((window.OB_CONF || {}).shapeStyle || "glass");
        sessionStorage.setItem("obPtr", JSON.stringify({ x: Math.round(lastE.clientX), y: Math.round(lastE.clientY), st: gl, s: (+cz.hover || 16) + (gl === "glass" ? 6 : 0), pic: onPic ? 1 : 0 }));
        if (!dotMode()) { sessionStorage.removeItem("obDot"); return; }
        var cs = (window.OB_CONF || {}).cursorSize || {};
        sessionStorage.setItem("obDot", JSON.stringify({ x: Math.round(lastE.clientX), y: Math.round(lastE.clientY), s: +cs.normal || 10 }));
      } catch (e) {}
    };
    window.addEventListener("pagehide", dotSave);
    /* arriving from another page with the mouse already over something (a photo, say): show its shape and word straight away, without waiting for the mouse to move; checked again as the photos are laid out */
    try {
      var p0 = JSON.parse(sessionStorage.getItem("obPtr") || sessionStorage.getItem("obDot") || "null");
      if (p0 && typeof p0.x === "number" && fine()) {
        var hand = function () { if (!lastE || lastE.arrived) { tipAt({ clientX: p0.x, clientY: p0.y, pointerType: "mouse" }); if (lastE) lastE.arrived = true; } };
        if (document.body) hand(); else document.addEventListener("DOMContentLoaded", hand);
        [300, 800, 1500].forEach(function (ms) { setTimeout(hand, ms); });
        setTimeout(function () { if (!document.documentElement.classList.contains("obPicHold")) document.documentElement.classList.remove("obPicEarly", "obPicDot", "obPicHold"); }, 1700);
        window.addEventListener("load", function () { setTimeout(hand, 50); });
      }
    } catch (e) {}
    document.addEventListener("pointerdown", dotSave, { capture: true, passive: true });
    window.__obPvTipAgain = tipAgain;
    document.addEventListener("pointermove", tipAt, { passive: true });
    document.addEventListener("pointerup", tipAgain, { passive: true });
    document.addEventListener("keyup", tipAgain, { passive: true });
    window.addEventListener("scroll", tipAgain, { passive: true });
    document.documentElement.addEventListener("pointerleave", function () { tip.classList.remove("obPvTipOn"); on = false; dotSet(null); document.documentElement.classList.remove("obTileOver"); ctaSet(null); });
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
    window.addEventListener("load", function () { setTimeout(mark, 500); });
  } catch (e) {}
})();

