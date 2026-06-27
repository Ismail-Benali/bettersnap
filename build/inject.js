"use strict";
(() => {
  (() => {
    let script = document.createElement("script");
    script.src = chrome.runtime.getURL("build/script.js");
    document.documentElement.appendChild(script);
    script.remove();
  })();
})();