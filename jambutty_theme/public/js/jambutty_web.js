// JBERP white-label — website overrides (ERPNext -> JBERP, Frappe -> JB,
// vendor support/docs links -> totalflow.io).
(function () {
  var SHORT = "JBERP";
  var FW = "JB";
  var LOGO = "/assets/jambutty_theme/images/jambutty-logo.svg";
  var SUPPORT_URL = "https://totalflow.io";
  var VENDOR_URL = /^(https?:)?\/\/(.*\.)?(frappe\.io|discuss\.frappe\.io|docs\.erpnext\.com|erpnext\.com|github\.com)(\/|:|\?|#|$)/i;
  var SKIP_TAGS = { INPUT: 1, TEXTAREA: 1, SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, SELECT: 1, OPTION: 1 };

  function clean(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var p = n.parentElement;
      if (!p || SKIP_TAGS[p.tagName]) return;
      var t = n.nodeValue;
      if (t.indexOf("ERPNext") === -1 && t.indexOf("Frappe") === -1) return;
      var nt = t.replace(/ERPNext/g, SHORT).replace(/Frappe/g, FW);
      if (nt !== t) n.nodeValue = nt;
    });
    if (root.querySelectorAll) {
      root.querySelectorAll('meta[name="generator"]').forEach(function (m) {
        m.setAttribute("content", SHORT);
      });
      root.querySelectorAll(".footer-powered, .powered").forEach(function (el) {
        el.style.display = "none";
      });
      root.querySelectorAll("img").forEach(function (img) {
        var s = img.getAttribute("src") || "";
        if (/erpnext-|frappe-|erpnext\/|frappe-framework-logo/i.test(s) && !img.dataset.jb) {
          img.dataset.jb = "1";
          img.src = LOGO;
        }
      });
      root.querySelectorAll("a[href]").forEach(function (a) {
        var href = a.getAttribute("href") || "";
        if ((VENDOR_URL.test(href) && (href.indexOf('github.com') === -1 || href.indexOf('github.com/frappe') !== -1)) && !a.dataset.jb) {
          a.dataset.jb = "1";
          a.setAttribute("href", SUPPORT_URL);
        }
      });
    }
    if (document.title.indexOf("ERPNext") !== -1) document.title = document.title.replace(/ERPNext/g, SHORT);
    if (document.title.indexOf("Frappe") !== -1) document.title = document.title.replace(/Frappe/g, FW);
  }

  function boot() {
    clean(document);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          if (n.nodeType === 1) clean(n);
        });
      });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
