"use strict";
(() => {
  (() => {
      const loadScript = (fileName) => new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = chrome.runtime.getURL(`build/${fileName}`);
        script.async = false;
        script.onload = () => { script.remove(); resolve(); };
        script.onerror = (e) => { console.error(`[BetterSnap] Failed to load ${fileName}`, e); script.remove(); resolve(); };
        document.documentElement.appendChild(script);
      });

      const loadWhenReady = () => {
        if (!document.body) {
          setTimeout(loadWhenReady, 250);
          return;
        }
        setTimeout(() => loadScript("script.js").then(() => loadScript("localization.js")), 1500);
      };
      loadWhenReady();
  })();
})();