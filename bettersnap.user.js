// ==UserScript==
// @name         BetterSnap (Standalone)
// @namespace    https://github.com/Ismail-Benali/bettersnap
// @version      2.0.1
// @description  Enhances Snapchat Web: media saving, screenshot prevention, stealth mode, and UI improvements. (Universal Fork)
// @author       Ismail Benali (Original concept by dclstn)
// @license      MIT (Modifications); Original code rights reserved by dclstn
// @match        https://web.snapchat.com/*
// @match        https://www.snapchat.com/web*
// @icon         https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/icons/logo128.png
// @homepageURL  https://github.com/Ismail-Benali/bettersnap
// @supportURL   https://github.com/Ismail-Benali/bettersnap/issues
// @updateURL    https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/bettersnap.user.js
// @downloadURL  https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/bettersnap.user.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// @resource     BETTERSNAP_CSS https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/build/script.css
// @run-at       document-idle
// @noframes     true
// ==/UserScript==

(function() {
    'use strict';

    function injectCSS() {
        try {
            const css = GM_getResourceText("BETTERSNAP_CSS");
            if (css) {
                GM_addStyle(css);
                return;
            }
        } catch (e) {
            console.warn("[BetterSnap] GM_getResourceText failed, falling back to fetch", e);
        }
        fetch("https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/build/script.css")
            .then(response => response.text())
            .then(css => {
                const style = document.createElement('style');
                style.textContent = css;
                document.head.appendChild(style);
            })
            .catch(err => console.error("[BetterSnap] Failed to load CSS:", err));
    }
    injectCSS();

    function injectPolyfills() {
        const polyfillCode = `
            (function() {
                if (!window.chrome) window.chrome = {};
                if (!window.chrome.runtime) {
                    window.chrome.runtime = { getURL: (path) => path };
                }
                if (!window.chrome.storage) {
                    window.chrome.storage = {
                        local: {
                            get: (keys, callback) => {
                                const result = {};
                                const keysArray = Array.isArray(keys) ? keys : (typeof keys === 'object' && keys !== null ? Object.keys(keys) : [keys]);
                                keysArray.forEach(k => {
                                    const stored = localStorage.getItem('bettersnap_' + k);
                                    result[k] = stored !== null ? JSON.parse(stored) : (typeof keys === 'object' ? keys[k] : null);
                                });
                                if (typeof callback === 'function') callback(result);
                                return Promise.resolve(result);
                            },
                            set: (items, callback) => {
                                for (const key in items) {
                                    localStorage.setItem('bettersnap_' + key, JSON.stringify(items[key]));
                                }
                                if (typeof callback === 'function') callback();
                                return Promise.resolve();
                            },
                            onChanged: { addListener: () => {} }
                        }
                    };
                }
            })();
        `;
        const script = document.createElement('script');
        script.textContent = polyfillCode;
        document.documentElement.appendChild(script);
        script.remove();
    }

    function loadMainScriptViaBlob() {
        if (document.getElementById('bettersnap-blob-script') || document.getElementById('better-snap-app')) return;
        
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/build/script.js",
            onload: function(response) {
                if (response.status === 200) {
                    const blob = new Blob([response.responseText], { type: 'application/javascript' });
                    const blobUrl = URL.createObjectURL(blob);
                    const mainScript = document.createElement('script');
                    mainScript.id = 'bettersnap-blob-script';
                    mainScript.src = blobUrl;
                    
                    mainScript.onload = () => {
                        console.log("[BetterSnap] Main script loaded successfully via Blob URL!");
                        setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
                    };
                    mainScript.onerror = (e) => console.error("[BetterSnap] Failed to execute Blob script.", e);
                    
                    document.documentElement.appendChild(mainScript);
                    loadLocalizationScript();
                } else {
                    console.error("[BetterSnap] Failed to fetch script. Status:", response.status);
                }
            },
            onerror: function(err) {
                console.error("[BetterSnap] Network error fetching script:", err);
            }
        });
    }

    function loadLocalizationScript() {
        if (document.getElementById('bettersnap-localization-script')) return;
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://raw.githubusercontent.com/Ismail-Benali/bettersnap/main/build/localization.js",
            onload: function(response) {
                if (response.status !== 200) return;
                const blobUrl = URL.createObjectURL(new Blob([response.responseText], { type: 'application/javascript' }));
                const localizationScript = document.createElement('script');
                localizationScript.id = 'bettersnap-localization-script';
                localizationScript.src = blobUrl;
                localizationScript.onload = () => setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
                document.documentElement.appendChild(localizationScript);
            }
        });
    }

    injectPolyfills();
    setTimeout(loadMainScriptViaBlob, 300);
})();
