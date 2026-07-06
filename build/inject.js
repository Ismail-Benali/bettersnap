"use strict";
(() => {
  (() => {
    let script = document.createElement("script");
    script.src = chrome.runtime.getURL("build/script.js");
    script.async = false;
    script.onload = () => script.remove();
    script.onerror = (e) => { console.error("[BetterSnap] Failed to load script.js", e); script.remove(); };
    document.documentElement.appendChild(script);
  })();
})();