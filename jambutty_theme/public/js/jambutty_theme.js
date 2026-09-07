// JBERP white-label — desk chrome overrides (ERPNext -> JBERP, Frappe -> JB,
// vendor support/docs links -> totalflow.io).
(function () {
  var SHORT = "JBERP";
  var FW = "JB";
  var FULL = "Jambutty ERP";
  var LOGO = "/assets/jambutty_theme/images/jambutty-logo.svg";
  var SUPPORT_URL = "https://totalflow.io";
  var VENDOR_IMG = /erpnext-logo|frappe-logo|erpnext\.png|frappe\.png|erpnext-favicon|frappe-favicon|frappe-framework-logo/i;
  var VENDOR_URL = /^(https?:)?\/\/(.*\.)?(frappe\.io|discuss\.frappe\.io|docs\.erpnext\.com|erpnext\.com|github\.com)(\/|:|\?|#|$)/i;

  var SKIP_TAGS = { INPUT: 1, TEXTAREA: 1, SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, SELECT: 1, OPTION: 1 };
  var ATTR_NAMES = ["title", "aria-label", "placeholder", "alt", "data-label", "data-original-title"];

  function swap_text(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var p = n.parentElement;
      if (!p || SKIP_TAGS[p.tagName]) continue;
      if (p.closest && p.closest('[contenteditable="true"], .ace_editor, .CodeMirror, .ql-editor, .modal-body .ace')) continue;
      var t = n.nodeValue;
      if (t.indexOf("ERPNext") === -1 && t.indexOf("Frappe") === -1) continue;
      var nt = t.replace(/ERPNext/g, SHORT).replace(/Frappe/g, FW);
      if (nt !== t) n.nodeValue = nt;
    }
  }

  function swap_attrs(root) {
    if (!root.querySelectorAll) return;
    var els = root.querySelectorAll("[" + ATTR_NAMES.join("],[") + "]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      for (var j = 0; j < ATTR_NAMES.length; j++) {
        var a = ATTR_NAMES[j];
        var v = el.getAttribute(a);
        if (!v) continue;
        if (v.indexOf("ERPNext") === -1 && v.indexOf("Frappe") === -1 && v.indexOf("erpnext") === -1 && v.indexOf("frappe") === -1) continue;
        el.setAttribute(a, v.replace(/ERPNext/g, SHORT).replace(/erpnext/gi, SHORT).replace(/Frappe/g, FW).replace(/frappe/gi, FW));
      }
    }
    if (root.nodeType === 1) {
      for (var k = 0; k < ATTR_NAMES.length; k++) {
        var an = ATTR_NAMES[k];
        var vv = root.getAttribute && root.getAttribute(an);
        if (vv && (vv.indexOf("ERPNext") !== -1 || vv.indexOf("Frappe") !== -1)) {
          root.setAttribute(an, vv.replace(/ERPNext/g, SHORT).replace(/Frappe/g, FW));
        }
      }
    }
  }

  function swap_links(root) {
    if (!root.querySelectorAll) return;
    var as = root.querySelectorAll("a[href]");
    for (var i = 0; i < as.length; i++) {
      var a = as[i];
      var h = a.getAttribute("href") || "";
      if ((VENDOR_URL.test(h) && (h.indexOf('github.com') === -1 || h.indexOf('github.com/frappe') !== -1)) && !a.dataset.jb) {
        a.dataset.jb = "1";
        a.setAttribute("href", SUPPORT_URL);
      }
    }
  }

  function swap_imgs(root) {
    if (!root.querySelectorAll) return;
    var imgs = root.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var s = img.getAttribute("src") || "";
      if (s.indexOf("/assets/erpnext/icons/desktop_icons/solid/") === 0) {
        img.setAttribute("src", s.replace("/assets/erpnext/icons/desktop_icons/solid/", "/assets/jambutty_theme/icons/solid/"));
      } else
      if (VENDOR_IMG.test(s) && !img.dataset.jb) {
        img.dataset.jb = "1";
        img.src = LOGO;
      }
    }
  }

  function swap(root) {
    if (root.nodeType === 3) {
      var t = root.nodeValue;
      if (t.indexOf("ERPNext") !== -1 || t.indexOf("Frappe") !== -1) {
        root.nodeValue = t.replace(/ERPNext/g, SHORT).replace(/Frappe/g, FW);
      }
      return;
    }
    if (root.nodeType !== 1) return;
    swap_text(root);
    swap_attrs(root);
    swap_links(root);
    swap_imgs(root);
  }

  function patch_window_open() {
    if (window.__jb_open_patched) return;
    window.__jb_open_patched = true;
    var raw = window.open;
    window.open = function (url) {
      if (typeof url === "string" && (VENDOR_URL.test(url) && (url.indexOf('github.com') === -1 || url.indexOf('github.com/frappe') !== -1))) {
        arguments[0] = SUPPORT_URL;
      }
      return raw.apply(this, arguments);
    };
  }

  function rebrand_title() {
    if (document.title.indexOf("ERPNext") !== -1) document.title = document.title.replace(/ERPNext/g, SHORT);
    if (document.title.indexOf("Frappe") !== -1) document.title = document.title.replace(/Frappe/g, FW);
  }

  function rebrand_navbar() {
    var blogo = document.querySelector("#brand-logo");
    if (blogo && !blogo.dataset.jb) {
      var bs = blogo.getAttribute("src") || "";
      if (VENDOR_IMG.test(bs) || bs === "" || bs.indexOf("jambutty") === -1) {
        blogo.dataset.jb = "1";
        blogo.setAttribute("src", LOGO);
        blogo.setAttribute("alt", SHORT);
      }
    }
    var brand = document.querySelector(".navbar .navbar-brand");
    if (brand && !brand.dataset.jbbrand) {
      brand.dataset.jbbrand = "1";
      brand.innerHTML = "";
      var img = document.createElement("img");
      img.src = LOGO;
      img.alt = SHORT;
      var span = document.createElement("span");
      span.textContent = SHORT;
      span.style.marginLeft = "8px";
      brand.appendChild(img);
      brand.appendChild(span);
    }
  }

  function patch_about() {
    if (!window.frappe || !frappe.ui || !frappe.ui.toolbar) return false;
    frappe.ui.toolbar.show_about = function () {
      var d = new frappe.ui.Dialog({
        title: __("About"),
        fields: [
          {
            fieldtype: "HTML",
            fieldname: "about",
            options:
              "<div style='display:flex;gap:12px;align-items:center'>" +
              "<img src='" + LOGO + "' style='width:40px;height:40px'>" +
              "<div><h4 style='margin:0'>" + SHORT + "</h4>" +
              "<p class='text-muted' style='margin:4px 0 0'>" + FULL + " · Enterprise business platform.</p>" +
              "<p class='text-muted' style='margin:4px 0 0'>Support: <a href='" + SUPPORT_URL + "' target='_blank'>" + SUPPORT_URL.replace("https://", "") + "</a></p></div></div>",
          },
        ],
      });
      d.show();
    };
    return true;
  }

  var scheduled = false;
  var pending = [];
  function schedule(root) {
    pending.push(root);
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () {
      scheduled = false;
      var batch = pending;
      pending = [];
      for (var i = 0; i < batch.length; i++) {
        try {
          swap(batch[i]);
        } catch (e) {}
      }
      rebrand_title();
      rebrand_navbar();
    });
  }

  function boot() {
    patch_window_open();
    swap(document.body || document.documentElement);
    rebrand_title();
    rebrand_navbar();
    if (!patch_about()) {
      var tries = 0;
      var timer = setInterval(function () {
        tries++;
        if (patch_about() || tries > 40) clearInterval(timer);
      }, 250);
    }
    new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        for (var j = 0; j < m.addedNodes.length; j++) schedule(m.addedNodes[j]);
        if (m.type === "characterData" && m.target) schedule(m.target);
      }
      rebrand_title();
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
