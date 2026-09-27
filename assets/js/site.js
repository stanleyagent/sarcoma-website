(function () {
  "use strict";

  var STORAGE_CONTRAST = "sarcoma-contrast";
  var STORAGE_TEXT = "sarcoma-text-large";

  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function applyStored() {
    try {
      if (localStorage.getItem(STORAGE_CONTRAST) === "1") {
        document.body.classList.add("contrast");
      }
      if (localStorage.getItem(STORAGE_TEXT) === "1") {
        document.body.classList.add("text-large");
      }
    } catch (e) { /* ignore */ }
    syncToggleLabels();
  }

  function syncToggleLabels() {
    var contrastBtn = $("#contrast-toggle");
    var textBtn = $("#text-zoom-toggle");
    if (contrastBtn) {
      var on = document.body.classList.contains("contrast");
      contrastBtn.setAttribute("aria-pressed", on ? "true" : "false");
      contrastBtn.textContent = on ? "Wersja standardowa" : "Wersja kontrastowa";
    }
    if (textBtn) {
      var large = document.body.classList.contains("text-large");
      textBtn.setAttribute("aria-pressed", large ? "true" : "false");
      textBtn.textContent = large ? "Standardowy tekst" : "Powiększ tekst";
    }
  }

  function initContrast() {
    var btn = $("#contrast-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      document.body.classList.toggle("contrast");
      try {
        localStorage.setItem(
          STORAGE_CONTRAST,
          document.body.classList.contains("contrast") ? "1" : "0"
        );
      } catch (e) { /* ignore */ }
      syncToggleLabels();
    });
  }

  function initTextZoom() {
    var btn = $("#text-zoom-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      document.body.classList.toggle("text-large");
      try {
        localStorage.setItem(
          STORAGE_TEXT,
          document.body.classList.contains("text-large") ? "1" : "0"
        );
      } catch (e) { /* ignore */ }
      syncToggleLabels();
    });
  }

  function initInfolinia() {
    var btn = $("#infolinia-reveal-btn");
    var panel = $("#infolinia-number");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (expanded) {
        panel.setAttribute("hidden", "");
      } else {
        panel.removeAttribute("hidden");
      }
    });
  }

  function initMobileMenu() {
    var toggle = $("#nav-toggle");
    var nav = $("#main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      nav.classList.toggle("is-open", !open);
    });
  }

  function initCopyAccount() {
    var btn = $("#copy-account");
    var el = $("#account-number");
    if (!btn || !el) return;
    btn.addEventListener("click", function () {
      var text = el.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () {
            btn.textContent = "Skopiowano";
            setTimeout(function () { btn.textContent = "Kopiuj"; }, 2000);
          },
          function () { /* ignore */ }
        );
      }
    });
  }

  function initCookieStub() {
    var btn = $("#cookie-settings");
    if (!btn) return;
    btn.addEventListener("click", function () {
      alert("Ustawienia plików cookies — makieta (integracja Cookiebot do decyzji).");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStored();
    initContrast();
    initTextZoom();
    initInfolinia();
    initMobileMenu();
    initCopyAccount();
    initCookieStub();
  });
})();
