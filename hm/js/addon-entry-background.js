(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-background"],{

/***/ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/background/style.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader?{"esModule":false}!./src/addons/addons/background/style.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ============================================================\n   ROOT VARIABLES\n   ============================================================ */\n:root {\n    --enable-workspace-background: transparent;\n    --enable-modal-background: transparent;\n}\n\n/* ============================================================\n   MODAL CONTAINER\n   ============================================================ */\n.sa-background-popup {\n    width: 820px;\n    max-width: 92vw;\n    max-height: 90vh;\n}\n\n.sa-background-content {\n    background: var(--ui-modal-background);\n    padding: 1.5rem 2rem 2rem;\n}\n\n/* ============================================================\n   TABS\n   ============================================================ */\n.sa-background-tabs-container {\n    display: flex;\n    gap: 0.5rem;\n    margin-bottom: 1.25rem;\n    padding-bottom: 0.75rem;\n    border-bottom: 2px solid var(--ui-black-transparent);\n}\n\n.sa-background-tab-button {\n    padding: 0.5rem 1.25rem;\n    border: none;\n    border-radius: 8px;\n    background: transparent;\n    color: var(--text-primary);\n    font-weight: 600;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-family: inherit;\n    position: relative;\n}\n\n.sa-background-tab-button:hover {\n    background: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n\n.sa-background-tab-active {\n    background: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n\n.sa-background-tab-active::after {\n    content: '';\n    position: absolute;\n    bottom: -0.1rem;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 60%;\n    height: 2px;\n    background: var(--looks-secondary);\n    border-radius: 2px;\n}\n\n/* ============================================================\n   TAB CONTENT\n   ============================================================ */\n.sa-background-tab-content {\n    min-height: 300px;\n    max-height: 65vh;\n    overflow-y: auto;\n    padding: 5px;\n}\n\n.sa-background-tab-content::-webkit-scrollbar {\n    width: 4px;\n}\n\n.sa-background-tab-content::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.sa-background-tab-content::-webkit-scrollbar-thumb {\n    background: var(--ui-black-transparent);\n    border-radius: 4px;\n}\n\n/* ============================================================\n   PANELS（纵向排列）\n   ============================================================ */\n.sa-background-panel {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin-bottom: 0.5rem;\n}\n\n.sa-background-panel:last-child {\n    margin-bottom: 0;\n}\n\n/* ============================================================\n   SECTION\n   ============================================================ */\n.sa-background-section {\n    margin-top: 1rem;\n}\n\n.sa-background-section:first-child {\n    margin-top: 0;\n}\n\n.sa-background-section-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: var(--text-primary-transparent);\n    margin-bottom: 0.5rem;\n}\n\n.sa-background-section-title {\n    flex-shrink: 0;\n}\n\n.sa-background-divider {\n    flex-grow: 1;\n    height: 1px;\n    background: var(--ui-black-transparent);\n}\n\n/* ============================================================\n   PREVIEW\n   ============================================================ */\n.sa-background-preview-wrapper {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n\n.sa-background-preview {\n    width: 100%;\n    height: 280px;\n    max-width: 500px;\n    border-radius: 8px;\n    overflow: hidden;\n    background: var(--ui-secondary);\n    position: relative;\n    border: 1px solid var(--ui-black-transparent);\n}\n\n.sa-background-preview-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n\n.sa-background-preview-image[hidden] {\n    display: none !important;\n}\n\n.sa-background-preview-empty {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--text-primary-transparent);\n    font-size: 0.85rem;\n    pointer-events: none;\n    text-align: center;\n}\n\n.sa-background-preview-empty[hidden] {\n    display: none !important;\n}\n\n/* ============================================================\n   FORM GRID\n   ============================================================ */\n.sa-background-form-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n/* ============================================================\n   CONTROL ROW\n   ============================================================ */\n.sa-background-control-row {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    min-height: 2.2rem;\n}\n\n.sa-background-control-label {\n    font-size: 0.85rem;\n    color: var(--text-primary);\n    min-width: 100px;\n    flex-shrink: 0;\n}\n\n.sa-background-control-input {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-background-control-input > input,\n.sa-background-control-input > select {\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-background-control-full {\n    width: 100%;\n}\n\n/* ============================================================\n   RANGE CONTROL (Slider with value display)\n   ============================================================ */\n.sa-background-range-control {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-background-range-control input[type=\"range\"] {\n    flex: 1;\n    min-width: 60px;\n    accent-color: var(--looks-secondary);\n    cursor: pointer;\n    height: 4px;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 2px;\n    background: var(--ui-black-transparent);\n}\n\n.sa-background-range-control input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: var(--looks-secondary);\n    cursor: pointer;\n    border: 2px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.sa-background-range-value {\n    min-width: 40px;\n    font-size: 0.8rem;\n    color: var(--text-primary);\n    text-align: right;\n    font-variant-numeric: tabular-nums;\n    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;\n}\n\n/* ============================================================\n   SELECT\n   ============================================================ */\n.sa-background-layout {\n    padding: 0.3rem 0.6rem;\n    border-radius: 6px;\n    border: 1px solid var(--ui-black-transparent);\n    background: var(--input-background);\n    color: var(--text-primary);\n    font-size: 0.85rem;\n    font-family: inherit;\n    cursor: pointer;\n    transition: border-color 0.2s ease;\n}\n\n.sa-background-layout:focus {\n    outline: none;\n    border-color: var(--looks-secondary);\n}\n\n/* ============================================================\n   INPUT (Number)\n   ============================================================ */\n.sa-background-offset,\n.sa-background-size,\n.sa-background-rotation-interval {\n    padding: 0.3rem 0.5rem;\n    border-radius: 6px;\n    border: 1px solid var(--ui-black-transparent);\n    background: var(--input-background);\n    color: var(--text-primary);\n    font-size: 0.85rem;\n    width: 80px;\n    font-family: inherit;\n    transition: border-color 0.2s ease;\n}\n\n.sa-background-offset:focus,\n.sa-background-size:focus,\n.sa-background-rotation-interval:focus {\n    outline: none;\n    border-color: var(--looks-secondary);\n}\n\n/* ============================================================\n   ACTIONS (Buttons)\n   ============================================================ */\n.sa-background-actions {\n    display: flex;\n    gap: 0.5rem;\n}\n\n.sa-background-add {\n    font-family: inherit;\n    font-size: 0.85rem;\n    background: var(--looks-secondary);\n    color: white;\n    border: none;\n    padding: 0.4rem 1.25rem;\n    border-radius: 6px;\n    cursor: pointer;\n    font-weight: 600;\n    transition: opacity 0.2s ease;\n}\n\n.sa-background-add:hover {\n    opacity: 0.8;\n}\n\n.sa-background-add:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n.sa-background-add[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n/* ============================================================\n   ROTATION\n   ============================================================ */\n.sa-background-rotation-label {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    color: var(--text-primary);\n    font-size: 0.85rem;\n    cursor: pointer;\n    user-select: none;\n}\n\n.sa-background-rotation-label input[type=\"checkbox\"] {\n    width: 16px;\n    height: 16px;\n    accent-color: var(--looks-secondary);\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.sa-background-rotation-all {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding-left: 1.5rem;\n    border-left: 2px solid var(--ui-black-transparent);\n}\n\n/* ============================================================\n   WALLPAPER LIST\n   ============================================================ */\n.sa-background-wallpaper-list {\n    padding: 0.5rem;\n    min-height: 120px;\n    max-height: 400px;\n    overflow-y: auto;\n    border: 1px dashed var(--ui-black-transparent);\n    border-radius: 6px;\n    background: var(--input-background);\n}\n\n.sa-background-wallpaper-list::-webkit-scrollbar {\n    width: 4px;\n}\n\n.sa-background-wallpaper-list::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.sa-background-wallpaper-list::-webkit-scrollbar-thumb {\n    background: var(--ui-black-transparent);\n    border-radius: 4px;\n}\n\n.sa-background-list-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.3rem 0.6rem;\n    border-radius: 4px;\n    background: var(--ui-secondary);\n    border: 1px solid var(--ui-black-transparent);\n    margin-bottom: 2px;\n    gap: 0.5rem;\n    transition: background 0.15s ease;\n}\n\n.sa-background-list-content:last-child {\n    margin-bottom: 0;\n}\n\n.sa-background-list-content:hover {\n    background: var(--ui-hover);\n}\n\n.sa-background-list-content-current {\n    background-color: var(--looks-transparent);\n    border-left: 3px solid var(--looks-secondary);\n}\n\n/* ============================================================\n   WALLPAPER ITEM\n   ============================================================ */\n.sa-background-left {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-background-wallpaper-title {\n    font-size: 0.85rem;\n    color: var(--text-primary);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex: 1;\n}\n\n.sa-background-wallpaper-title.disabled {\n    opacity: 0.4;\n    text-decoration: line-through;\n}\n\n.sa-background-wallpaper-current {\n    font-weight: 600;\n    color: var(--looks-secondary);\n}\n\n.sa-background-wallpaper-selectable {\n    cursor: pointer;\n}\n\n.sa-background-wallpaper-selectable:hover .sa-background-wallpaper-title {\n    color: var(--looks-secondary);\n}\n\n.sa-background-wallpaper-item {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n}\n\n.sa-background-wallpaper-enabled-label {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.sa-background-wallpaper-enabled-label input[type=\"checkbox\"] {\n    width: 14px;\n    height: 14px;\n    accent-color: var(--looks-secondary);\n    cursor: pointer;\n}\n\n.sa-background-delete {\n    padding: 0 0.5rem;\n    border-radius: 4px;\n    border: 1px solid transparent;\n    background: transparent;\n    color: var(--text-primary-transparent);\n    font-size: 1rem;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    line-height: 1.6;\n}\n\n.sa-background-delete:hover {\n    background: var(--error-transparent);\n    color: var(--error-primary);\n    border-color: var(--error-transparent);\n}\n\n/* ============================================================\n   WORKSPACE BACKGROUND\n   ============================================================ */\n.blocklySvg {\n    background-color: var(--enable-workspace-background) !important;\n}\n\n.injectionDiv {\n    border-left: 1px solid var(--ui-secondary) !important;\n}\n\n/* ============================================================\n   MODAL BACKGROUND\n   ============================================================ */\n.sa-modal-background-enabled {\n    position: relative;\n    background-color: transparent !important;\n}\n\n.sa-modal-background-enabled::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    pointer-events: none;\n    border-radius: inherit;\n    transform-origin: top left;\n    transform: scale(var(--sa-modal-bg-modalsize, 1));\n    background-image: var(--sa-modal-bg-image);\n    background-size: var(--sa-modal-bg-size, cover);\n    background-position: var(--sa-modal-bg-position, 0 0);\n    background-repeat: no-repeat;\n    filter: blur(var(--sa-modal-bg-blur, 0px)) opacity(var(--sa-modal-bg-opacity, 0.35));\n}\n\n.sa-modal-background-enabled::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    z-index: -2;\n    pointer-events: none;\n    background-color: var(--ui-modal-background);\n}\n\n.sa-modal-background-enabled.sa-modal-background-fullscreen::before,\n.sa-modal-background-enabled.sa-modal-background-fullscreen::after {\n    transform: none;\n}\n\n.sa-modal-background-enabled[class*=\"_body\"],\n.sa-modal-background-enabled > [class*=\"_body\"] {\n    background-color: transparent !important;\n}\n\n.sa-modal-background-enabled > [class*=\"_workspace\"] {\n    background-color: transparent !important;\n}\n\n.sa-modal-background-enabled .blocklySvg {\n    background-color: transparent !important;\n}\n\n/* ============================================================\n   BACKGROUND CLIP\n   ============================================================ */\n.sa-background-clip {\n    position: absolute;\n    inset: 0;\n    overflow: hidden;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.sa-background-image {\n    position: absolute;\n    pointer-events: none;\n    user-select: none;\n    -webkit-user-select: none;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: none;\n}\n\n/* ============================================================\n   RESPONSIVE\n   ============================================================ */\n@media (max-width: 640px) {\n    .sa-background-popup {\n        width: 95vw;\n    }\n\n    .sa-background-content {\n        padding: 1rem 1rem 1.5rem;\n    }\n\n    .sa-background-tab-button {\n        padding: 0.4rem 0.8rem;\n        font-size: 0.8rem;\n    }\n\n    .sa-background-control-row {\n        flex-wrap: wrap;\n        gap: 0.3rem;\n    }\n\n    .sa-background-control-label {\n        min-width: 80px;\n        font-size: 0.8rem;\n    }\n\n    .sa-background-preview {\n        height: 100px;\n    }\n\n    .sa-background-offset,\n    .sa-background-size,\n    .sa-background-rotation-interval {\n        width: 60px;\n        font-size: 0.75rem;\n    }\n\n    .sa-background-add {\n        font-size: 0.75rem;\n        padding: 0.3rem 0.8rem;\n    }\n\n    .sa-background-wallpaper-list {\n        min-height: 80px;\n        max-height: 150px;\n    }\n\n    .sa-background-rotation-all {\n        padding-left: 0.5rem;\n    }\n}\n\n/* ============================================================\n   DARK MODE\n   ============================================================ */\n@media (prefers-color-scheme: dark) {\n    .sa-background-layout {\n        background: var(--input-background);\n        color: var(--text-primary);\n    }\n\n    .sa-background-offset,\n    .sa-background-size,\n    .sa-background-rotation-interval {\n        background: var(--input-background);\n        color: var(--text-primary);\n    }\n\n    .sa-background-preview {\n        background: var(--ui-secondary);\n    }\n\n    .sa-background-wallpaper-list {\n        background: var(--input-background);\n    }\n\n    .sa-background-list-content {\n        background: var(--ui-secondary);\n    }\n\n    .sa-background-list-content:hover {\n        background: var(--ui-hover);\n    }\n}\n\n/* ============================================================\n   ACCESSIBILITY\n   ============================================================ */\n@media (prefers-reduced-motion: reduce) {\n    .sa-background-add {\n        transition: none;\n    }\n\n    .sa-background-add:hover {\n        opacity: 0.8;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/background/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/background/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/background/userscript.js");
/* harmony import */ var _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader?{"esModule":false}!./style.css */ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/background/style.css");
/* harmony import */ var _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1__);


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_esModule_false_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/background/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/background/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * IndexedDB by AI （嘿嘿）
 */
class BackgroundDB {
  constructor() {
    let dbName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sa-background';
    let version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    this.dbName = dbName;
    this.version = version;
    this.db = null;
    this.settingsStore = 'settings_store';
    this.wallpapersStore = 'wallpapers_store';
  }
  open() {
    return new Promise((resolve, reject) => {
      const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      const request = indexedDB.open(this.dbName, this.version);
      request.onsuccess = event => {
        this.db = event.target.result;
        resolve(this.db);
      };
      request.onerror = event => {
        console.log('Cannot open indexedDB:', event);
        reject(event);
      };
      request.onupgradeneeded = event => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.settingsStore)) {
          db.createObjectStore(this.settingsStore, {
            keyPath: 'key'
          });
        }
        if (!db.objectStoreNames.contains(this.wallpapersStore)) {
          db.createObjectStore(this.wallpapersStore, {
            keyPath: 'id'
          });
        }
        if (db.objectStoreNames.contains('background_store')) {
          const transaction = event.target.transaction;
          const oldStore = transaction.objectStore('background_store');
          const newStore = transaction.objectStore(this.wallpapersStore);
          oldStore.openCursor().onsuccess = cursorEvent => {
            const cursor = cursorEvent.target.result;
            if (!cursor) return;
            const record = cursor.value;
            const wallpaper = {
              id: cursor.key,
              name: 'Workspace Background',
              link: typeof record === 'object' && record.link ? record.link : record,
              enabled: true,
              addedAt: new Date().toISOString()
            };
            newStore.put(wallpaper);
            cursor.continue();
          };
        }
      };
    });
  }
  saveSetting(key, value) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.settingsStore], 'readwrite');
      const store = transaction.objectStore(this.settingsStore);
      const request = store.put({
        key,
        value
      });
      request.onsuccess = () => resolve();
      request.onerror = e => {
        console.log('IndexedDB saveSetting failed', e);
        reject(e);
      };
    });
  }
  getSetting(key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.settingsStore], 'readonly');
      const store = transaction.objectStore(this.settingsStore);
      const request = store.get(key);
      request.onsuccess = e => {
        const record = e.target.result;
        resolve(record ? record.value : null);
      };
      request.onerror = e => {
        console.log('IndexedDB getSetting failed', e);
        reject(e);
      };
    });
  }
  saveWallpaper(wallpaper) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readwrite');
      const store = transaction.objectStore(this.wallpapersStore);
      const wallpaperRecord = Object.assign({
        id: wallpaper.id || (window.crypto && crypto.randomUUID ? crypto.randomUUID() : "".concat(Date.now())),
        name: wallpaper.name || 'Wallpaper',
        link: wallpaper.link || null,
        enabled: typeof wallpaper.enabled === 'boolean' ? wallpaper.enabled : true,
        addedAt: wallpaper.addedAt || new Date().toISOString()
      }, wallpaper);
      const request = store.put(wallpaperRecord);
      request.onsuccess = () => resolve(wallpaperRecord);
      request.onerror = e => {
        console.log('IndexedDB saveWallpaper failed', e);
        reject(e);
      };
    });
  }
  getWallpaper(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readonly');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.get(id);
      request.onsuccess = e => {
        resolve(e.target.result || null);
      };
      request.onerror = e => {
        console.log('IndexedDB getWallpaper failed', e);
        reject(e);
      };
    });
  }
  listWallpapers() {
    let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$enabledOnly = _ref.enabledOnly,
      enabledOnly = _ref$enabledOnly === void 0 ? false : _ref$enabledOnly;
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readonly');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.getAll();
      request.onsuccess = e => {
        let records = e.target.result || [];
        if (enabledOnly) {
          records = records.filter(item => item.enabled !== false);
        }
        resolve(records);
      };
      request.onerror = e => {
        console.log('IndexedDB listWallpapers failed', e);
        reject(e);
      };
    });
  }
  deleteWallpaper(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.wallpapersStore], 'readwrite');
      const store = transaction.objectStore(this.wallpapersStore);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = e => reject(e);
    });
  }
}
let bgDB;
let isRefreshingBG = false;
let wallpaperTransitionTimeout = null;
let wallpaperRefreshToken = 0;
let cachedModalBackgroundConfig = null;
let modalBackgroundConfigPromise = null;
let modalBackgroundUpdateScheduled = false;
const modalBackgroundCacheKeys = new Set(['EnableModalBG', 'ModalBGLink', 'ModalBGLayout', 'ModalBGBlur', 'ModalBGOpacity', 'ModalBGOffsetX', 'ModalBGOffsetY', 'ModalBGSize', 'ModalBGAlignX', 'ModalBGAlignY']);
function invalidateModalBackgroundConfigCache() {
  cachedModalBackgroundConfig = null;
  modalBackgroundConfigPromise = null;
}
function scheduleModalBackgroundUpdate() {
  if (modalBackgroundUpdateScheduled) return;
  modalBackgroundUpdateScheduled = true;
  window.requestAnimationFrame(async () => {
    modalBackgroundUpdateScheduled = false;
    await addModalBackground();
  });
}
async function applySettings(id, value) {
  try {
    const nowSettings = (await bgDB.getSetting('settings')) || {};
    nowSettings[id] = value;
    await bgDB.saveSetting('settings', nowSettings);
    if (modalBackgroundCacheKeys.has(id)) {
      invalidateModalBackgroundConfigCache();
    }
  } catch (e) {
    throw new Error(e);
  }
}
async function getSetting(id) {
  try {
    const nowSettings = (await bgDB.getSetting('settings')) || {};
    return nowSettings[id];
  } catch (e) {
    throw new Error(e);
  }
}
function applyBackgroundLayout(_ref2) {
  let image = _ref2.image,
    containerWidth = _ref2.containerWidth,
    containerHeight = _ref2.containerHeight,
    _ref2$mode = _ref2.mode,
    mode = _ref2$mode === void 0 ? 'stretch' : _ref2$mode,
    _ref2$offsetX = _ref2.offsetX,
    offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX,
    _ref2$offsetY = _ref2.offsetY,
    offsetY = _ref2$offsetY === void 0 ? 0 : _ref2$offsetY;
  if (!image || !containerWidth || !containerHeight) return;
  image.style.objectFit = 'none';
  image.style.width = 'auto';
  image.style.height = 'auto';
  image.style.left = '0';
  image.style.top = '0';
  image.style.transform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px)");
  switch (mode) {
    case 'stretch':
      image.style.width = "".concat(containerWidth, "px");
      image.style.height = "".concat(containerHeight, "px");
      image.style.objectFit = 'fill';
      break;
    case 'height-priority':
      image.style.height = "".concat(containerHeight, "px");
      break;
    case 'width-priority':
      image.style.width = "".concat(containerWidth, "px");
      break;
    case 'fit':
      image.style.width = "".concat(containerWidth, "px");
      image.style.height = "".concat(containerHeight, "px");
      image.style.objectFit = 'cover';
      break;
  }
}
async function getModalBackgroundConfig() {
  if (cachedModalBackgroundConfig !== null) {
    return cachedModalBackgroundConfig;
  }
  if (modalBackgroundConfigPromise) {
    return modalBackgroundConfigPromise;
  }
  modalBackgroundConfigPromise = (async () => {
    const settings = (await bgDB.getSetting('settings')) || {};
    if (settings.EnableModalBG === false || !settings.ModalBGLink) {
      return null;
    }
    return {
      link: settings.ModalBGLink,
      layout: settings.ModalBGLayout || 'fit',
      blur: Number(settings.ModalBGBlur) || 2,
      opacity: typeof settings.ModalBGOpacity === 'number' ? settings.ModalBGOpacity : 0.20,
      offsetX: Number(settings.ModalBGOffsetX) || 0,
      offsetY: Number(settings.ModalBGOffsetY) || 0,
      modalSize: Number.isFinite(Number(settings.ModalBGSize)) ? Number(settings.ModalBGSize) : 100,
      alignX: settings.ModalBGAlignX || 'center',
      alignY: settings.ModalBGAlignY || 'center'
    };
  })();
  try {
    cachedModalBackgroundConfig = await modalBackgroundConfigPromise;
    return cachedModalBackgroundConfig;
  } finally {
    modalBackgroundConfigPromise = null;
  }
}
let wallpaperRotationTimer = null;
function getWallpaperRotationInterval() {
  let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const intervalMinutes = Number(settings.WallpaperRotationIntervalMinutes);
  return intervalMinutes > 0 ? intervalMinutes * 60 * 1000 : 5 * 60 * 1000;
}
async function getWallpaperRotationList() {
  let settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const resolvedSettings = settings || (await bgDB.getSetting('settings')) || {};
  const savedList = Array.isArray(resolvedSettings.WallpaperRotationList) ? resolvedSettings.WallpaperRotationList : null;
  if (savedList && savedList.length) {
    const validIds = [];
    const seenIds = new Set();
    for (const wallpaperId of savedList) {
      if (seenIds.has(wallpaperId)) continue;
      seenIds.add(wallpaperId);
      const wallpaper = await bgDB.getWallpaper(wallpaperId);
      if (wallpaper && wallpaper.enabled !== false) {
        validIds.push(wallpaperId);
      }
    }
    if (validIds.length > 0) {
      return validIds;
    }
  }
  const wallpapers = await bgDB.listWallpapers({
    enabledOnly: true
  });
  return wallpapers.map(item => item.id);
}
async function syncWallpaperSelection() {
  let _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$preferredId = _ref3.preferredId,
    preferredId = _ref3$preferredId === void 0 ? null : _ref3$preferredId,
    _ref3$settings = _ref3.settings,
    settings = _ref3$settings === void 0 ? null : _ref3$settings;
  const resolvedSettings = settings || (await bgDB.getSetting('settings')) || {};
  const list = await getWallpaperRotationList(resolvedSettings);
  if (!list.length) {
    await applySettings('WallpaperRotationIndex', 0);
    await applySettings('currentWallpaperId', null);
    return null;
  }
  let selectedId = preferredId;
  if (!selectedId || !list.includes(selectedId)) {
    const savedCurrentWallpaperId = resolvedSettings.currentWallpaperId;
    if (savedCurrentWallpaperId && list.includes(savedCurrentWallpaperId)) {
      selectedId = savedCurrentWallpaperId;
    }
  }
  if (!selectedId || !list.includes(selectedId)) {
    const savedIndex = Number(resolvedSettings.WallpaperRotationIndex);
    if (Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < list.length) {
      selectedId = list[savedIndex];
    }
  }
  if (!selectedId || !list.includes(selectedId)) {
    selectedId = list[0];
  }
  const selectedIndex = list.indexOf(selectedId);
  await applySettings('WallpaperRotationIndex', selectedIndex);
  await applySettings('currentWallpaperId', selectedId);
  return {
    list,
    wallpaperId: selectedId,
    index: selectedIndex
  };
}
async function advanceWallpaperRotationIndex() {
  const settings = (await bgDB.getSetting('settings')) || {};
  const syncedSelection = await syncWallpaperSelection({
    settings
  });
  if (!syncedSelection) return null;
  const list = syncedSelection.list,
    currentIndex = syncedSelection.index;
  const nextIndex = (currentIndex + 1) % list.length;
  await applySettings('WallpaperRotationIndex', nextIndex);
  await applySettings('currentWallpaperId', list[nextIndex]);
  return list[nextIndex];
}
async function stopWallpaperRotationTimer() {
  if (wallpaperRotationTimer !== null) {
    window.clearTimeout(wallpaperRotationTimer);
    wallpaperRotationTimer = null;
  }
}
async function scheduleWallpaperRotationTimer() {
  await stopWallpaperRotationTimer();
  const settings = (await bgDB.getSetting('settings')) || {};
  if (!settings.WallpaperRotationEnabled) return;
  const interval = getWallpaperRotationInterval(settings);
  wallpaperRotationTimer = window.setTimeout(async () => {
    try {
      await advanceWallpaperRotationIndex();
      await refreshWorkSpaceBackground();
    } catch (e) {
      console.warn('Wallpaper rotation timer error:', e);
    } finally {
      await scheduleWallpaperRotationTimer();
    }
  }, interval);
}
async function initializeWallpaperRotation() {
  const enabled = await getSetting('WallpaperRotationEnabled');
  if (enabled) {
    await scheduleWallpaperRotationTimer();
  } else {
    await stopWallpaperRotationTimer();
  }
}
function clearWallpaperTransitionTimeout() {
  if (wallpaperTransitionTimeout !== null) {
    window.clearTimeout(wallpaperTransitionTimeout);
    wallpaperTransitionTimeout = null;
  }
}
async function setCurrentWallpaperId(id) {
  await applySettings('currentWallpaperId', id);
  await applySettings('EnableWorkSpaceBG', true);
  await syncWallpaperSelection({
    preferredId: id
  });
  document.documentElement.style.setProperty('--enable-workspace-background', 'transparent');
  await refreshWorkSpaceBackground();
}
async function updateWallpaperEnabled(id, enabled) {
  const wallpaper = await bgDB.getWallpaper(id);
  if (!wallpaper) return;
  wallpaper.enabled = enabled;
  await bgDB.saveWallpaper(wallpaper);
  await syncWallpaperSelection();
  await refreshWorkSpaceBackground();
}
async function deleteWallpaperAndRefresh(id) {
  await bgDB.deleteWallpaper(id);
  const currentId = await getSetting('currentWallpaperId');
  if (currentId === id) {
    await applySettings('currentWallpaperId', null);
  }
  await syncWallpaperSelection();
  await refreshWorkSpaceBackground();
}
async function getActiveWorkspaceWallpaper() {
  const settings = (await bgDB.getSetting('settings')) || {};
  if (settings.EnableWorkSpaceBG === false) return null;
  if (settings.WallpaperRotationEnabled) {
    const syncedSelection = await syncWallpaperSelection({
      settings
    });
    if (!syncedSelection) return null;
    return await bgDB.getWallpaper(syncedSelection.wallpaperId);
  }
  if (settings.currentWallpaperId) {
    const wallpaper = await bgDB.getWallpaper(settings.currentWallpaperId);
    if (wallpaper) return wallpaper;
  }
  const syncedSelection = await syncWallpaperSelection({
    settings
  });
  if (!syncedSelection) return null;
  return await bgDB.getWallpaper(syncedSelection.wallpaperId);
}
function showBgModal(addon, msg) {
  const _addon$tab$createModa = addon.tab.createModal(msg('background-title'), {
      isOpen: true,
      useEditorClasses: true
    }),
    backdrop = _addon$tab$createModa.backdrop,
    container = _addon$tab$createModa.container,
    content = _addon$tab$createModa.content,
    closeButton = _addon$tab$createModa.closeButton,
    remove = _addon$tab$createModa.remove;
  container.classList.add('sa-background-popup');
  content.classList.add('sa-background-content');
  addContext(content, addon, msg).then(() => {
    addModalBackground();
  });
  backdrop.addEventListener("click", remove);
  closeButton.addEventListener("click", remove);
}

// ===== export default =====
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref4) {
  let addon = _ref4.addon,
    msg = _ref4.msg;
  let bgButton;

  // 初始化数据库并加载保存的背景
  bgDB = new BackgroundDB();
  await bgDB.open();

  // 加载保存的背景
  await refreshWorkSpaceBackground();
  await initializeWallpaperRotation();
  const addObserver = async () => {
    try {
      const observer = new MutationObserver(async () => {
        if (isRefreshingBG) return;
        const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
        const bg = document.querySelector('.sa-background-image');
        if (workspace && !bg) {
          await refreshWorkSpaceBackground();
        }
      });
      observer.observe(document, {
        childList: true,
        subtree: true
      });
    } catch (e) {
      console.warn('Warning: Failed to add Observer:', e);
    }
  };
  addObserver();
  window.addEventListener('resize', () => {
    resizeWorkspaceBackground();
    scheduleModalBackgroundUpdate();
  });
  window.addEventListener('modal-opened', () => {
    scheduleModalBackgroundUpdate();
  });

  // ===== 在 Settings 菜单中添加 Background 选项 =====
  while (true) {
    try {
      // 每次都重新查找 id="settings" 的 ul
      const settingsMenu = document.getElementById('settings');
      if (settingsMenu) {
        // 检查是否已经添加了背景选项
        if (!settingsMenu.querySelector('.sa-background-menu-item')) {
          // 获取所有 li 作为参考
          const existingItems = settingsMenu.querySelectorAll('li');
          let lastItem = null;
          let insertBeforeItem = null; // 要插入在哪个元素之前

          if (existingItems.length > 0) {
            lastItem = existingItems[existingItems.length - 1];

            // 检查最后一项是否是 "twdesktopsettings"
            const lastItemId = lastItem.id;
            if (lastItemId === 'twdesktopsettings') {
              // 如果最后一项是 twdesktopsettings，则插入到它前面（倒数第二项）
              insertBeforeItem = lastItem;
              // 使用倒数第二项作为样式参考
              if (existingItems.length > 1) {
                lastItem = existingItems[existingItems.length - 2];
              }
            }
          }

          // 创建背景菜单项 (li)
          const menuItem = document.createElement('li');
          menuItem.className = 'sa-background-menu-item';

          // 复制现有菜单项的样式
          if (lastItem) {
            menuItem.className = lastItem.className + ' sa-background-menu-item';
            const computedStyle = window.getComputedStyle(lastItem);
            menuItem.style.cssText = "\n                        display: ".concat(computedStyle.display, ";\n                        align-items: ").concat(computedStyle.alignItems, ";\n                        padding: ").concat(computedStyle.padding, ";\n                        cursor: pointer;\n                        font-size: ").concat(computedStyle.fontSize, ";\n                        color: ").concat(computedStyle.color, ";\n                        min-height: ").concat(computedStyle.minHeight, ";\n                        transition: background 0.1s ease;\n                    ");
          } else {
            menuItem.style.cssText = "\n                        display: flex;\n                        align-items: center;\n                        padding: 4px 16px;\n                        cursor: pointer;\n                        font-size: 0.85rem;\n                        color: #575e75;\n                        min-height: 36px;\n                        transition: background 0.1s ease;\n                    ";
          }

          // 创建内部 div
          const innerDiv = document.createElement('div');
          innerDiv.className = 'settings-menu_option_addons-background';
          innerDiv.style.cssText = "\n                    display: flex;\n                    align-items: center;\n                    gap: 0.5rem;\n                    width: 100%;\n                ";

          // 添加图标
          const iconImg = document.createElement('img');
          iconImg.src = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMy44ODE4IiBoZWlnaHQ9IjEyLjE5NDA2IiB2aWV3Qm94PSIwLDAsMTMuODgxOCwxMi4xOTQwNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy4wNzExNCwtMTczLjkwNDQ3KSI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iIiBmaWxsPSIjZmZmZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjxnPjxwYXRoIGQ9Ik0yNDYuMjAyOTQsMTgyLjc4MDYydjAuNTY3OTFjMCwxLjEwNDU3IC0wLjg5NTQzLDIgLTIsMmgtOC44MTAzMmMtMC44NTE5NywwIC0xLjU0MjYyLC0wLjY5MDY1IC0xLjU0MjYyLC0xLjU0MjYydjBsMi4yMjQ3LC0xLjg2OTY1YzAuNDA5ODIsLTAuMzYxODYgMS4xMTIzNSwtMC4zMDE1NiAxLjQ2MzYyLDAuMTgwOTNsMC4yOTI3MiwwLjM2MTg3YzAuMzUxMjcsMC40ODI0OSAwLjk5NTI2LDAuNTQyOCAxLjQ2MzYyLDAuMTgwOTRsMy4wNDQzMywtMi40NzI3NmMwLjQwOTgyLC0wLjM2MTg2IDAuOTk1MjYsLTAuMzAxNTYgMS4zNDY1MywwLjA2MDMxbDIuNDU4ODgsMi41MzMwN3oiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzNS4zMjExNCwxODUuMzQ1NTNjLTAuODI4NDMsMCAtMS41LC0wLjY3MTU3IC0xLjUsLTEuNXYtNy42OTEwNmMwLC0wLjgyODQzIDAuNjcxNTcsLTEuNSAxLjUsLTEuNWg5LjM1NzcyYzAuODI4NDMsMCAxLjUsMC42NzE1NyAxLjUsMS41djcuNjkxMDZjMCwwLjgyODQzIC0wLjY3MTU3LDEuNSAtMS41LDEuNXoiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6Ni45Mjg4NjE3ODg2MTc5Nzk6Ni4wOTU1Mjg0NTUyODQ1NTEtLT4=';
          iconImg.draggable = false;
          iconImg.width = 24;
          iconImg.style.cssText = "\n                    width: 24px;\n                ";

          // 添加文本
          const textSpan = document.createElement('span');
          textSpan.className = 'settings-menu_submenu-label_addons-background';
          textSpan.textContent = msg('background');

          // 组装
          innerDiv.appendChild(iconImg);
          innerDiv.appendChild(textSpan);
          menuItem.appendChild(innerDiv);

          // 悬停效果
          menuItem.addEventListener('mouseenter', () => {
            menuItem.style.background = 'var(--ui-black-transparent)';
            menuItem.style.color = 'white';
          });
          menuItem.addEventListener('mouseleave', () => {
            menuItem.style.background = '';
            menuItem.style.color = '';
          });

          // 点击事件
          menuItem.addEventListener('click', e => {
            e.stopPropagation();

            // ===== 通过 Redux 关闭 =====
            try {
              if (addon && addon.tab && addon.tab.redux) {
                addon.tab.redux.dispatch({
                  type: 'scratch-gui/menus/CLOSE_MENU',
                  menu: 'settingsMenu'
                });
                addon.tab.redux.dispatch({
                  type: 'scratch-gui/menus/CLOSE_SETTINGS_MENU'
                });
              }
            } catch (err) {
              console.error('[Background Addon] Redux Error:', err);
            }

            // 打开背景弹窗
            setTimeout(() => {
              showBgModal(addon, msg);
            }, 150);
          });

          // 添加到 Settings 菜单的 ul
          if (insertBeforeItem) {
            // 如果存在 twdesktopsettings，插入到它前面（倒数第二项）
            settingsMenu.insertBefore(menuItem, insertBeforeItem);
            console.log('[Background Addon] 背景菜单项已添加到 Settings 菜单 (倒数第二项)');
          } else {
            // 否则添加到末尾
            settingsMenu.appendChild(menuItem);
            console.log('[Background Addon] 背景菜单项已添加到 Settings 菜单 (末尾)');
          }
        }
      }

      // 等待一段时间再检查
      await new Promise(resolve => setTimeout(resolve, 0));
    } catch (e) {
      console.warn('[Background Addon] Add background menu error:', e);
      await new Promise(resolve => setTimeout(resolve, 30));
    }
  }
});
async function addContext(modal, addon, msg) {
  const modalConfig = await getModalBackgroundConfig();
  const modalSettings = {
    enabled: modalConfig !== null,
    link: modalConfig ? modalConfig.link : null,
    layout: modalConfig ? modalConfig.layout : 'fit',
    blur: modalConfig ? modalConfig.blur : 0,
    opacity: modalConfig ? modalConfig.opacity : 0.35,
    offsetX: modalConfig ? modalConfig.offsetX : 0,
    offsetY: modalConfig ? modalConfig.offsetY : 0,
    modalSize: modalConfig ? modalConfig.modalSize : 100,
    alignX: modalConfig ? modalConfig.alignX : 'center',
    alignY: modalConfig ? modalConfig.alignY : 'center'
  };

  // ===== 辅助函数 =====
  const createHeader = title => {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'sa-background-section-header';
    const titleElement = document.createElement('span');
    titleElement.className = 'sa-background-section-title';
    titleElement.textContent = title;
    const divider = document.createElement('div');
    divider.className = 'sa-background-divider';
    headerDiv.appendChild(titleElement);
    headerDiv.appendChild(divider);
    return headerDiv;
  };
  const createControlLabel = labelNode => {
    const label = document.createElement('div');
    label.className = 'sa-background-control-label';
    if (typeof labelNode === 'string') {
      label.textContent = labelNode;
    } else if (labelNode) {
      label.appendChild(labelNode);
    }
    return label;
  };
  const createControlInput = function createControlInput() {
    const input = document.createElement('div');
    input.className = 'sa-background-control-input';
    for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }
    for (const node of nodes) {
      if (node) input.appendChild(node);
    }
    return input;
  };
  const createControlRow = function createControlRow(labelNode) {
    const row = document.createElement('div');
    row.className = 'sa-background-control-row';
    row.appendChild(createControlLabel(labelNode));
    for (var _len2 = arguments.length, controlNodes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      controlNodes[_key2 - 1] = arguments[_key2];
    }
    row.appendChild(createControlInput(...controlNodes));
    return row;
  };
  const createFullRow = function createFullRow() {
    const row = document.createElement('div');
    row.className = 'sa-background-control-row sa-background-control-row-full';
    const content = document.createElement('div');
    content.className = 'sa-background-control-full';
    for (var _len3 = arguments.length, nodes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      nodes[_key3] = arguments[_key3];
    }
    for (const node of nodes) {
      if (node) content.appendChild(node);
    }
    row.appendChild(content);
    return row;
  };
  const createRangeControl = function createRangeControl(input) {
    let formatValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => String(value);
    const wrapper = document.createElement('div');
    wrapper.className = 'sa-background-range-control';
    const value = document.createElement('span');
    value.className = 'sa-background-range-value';
    const sync = () => {
      value.textContent = formatValue(input.value);
    };
    input.addEventListener('input', sync);
    sync();
    wrapper.appendChild(input);
    wrapper.appendChild(value);
    return {
      element: wrapper,
      sync
    };
  };
  const createPreview = emptyText => {
    const wrapper = document.createElement('div');
    wrapper.className = 'sa-background-preview';
    const image = document.createElement('img');
    image.className = 'sa-background-preview-image';
    image.alt = '';
    image.draggable = false;
    const empty = document.createElement('span');
    empty.className = 'sa-background-preview-empty';
    empty.textContent = emptyText;
    wrapper.appendChild(image);
    wrapper.appendChild(empty);
    return {
      wrapper,
      image,
      empty
    };
  };
  const setPreviewSource = function setPreviewSource(preview, source) {
    let altText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    const hasSource = Boolean(source);
    preview.image.hidden = !hasSource;
    preview.empty.hidden = hasSource;
    preview.image.src = hasSource ? source : '';
    preview.image.alt = altText;
  };
  const setPreviewAppearance = function setPreviewAppearance(preview) {
    let _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref5$blur = _ref5.blur,
      blur = _ref5$blur === void 0 ? 0 : _ref5$blur,
      _ref5$opacity = _ref5.opacity,
      opacity = _ref5$opacity === void 0 ? 1 : _ref5$opacity;
    preview.image.style.filter = "blur(".concat(blur, "px)");
    preview.image.style.opacity = "".concat(opacity);
  };

  // ===== Workspace 部分 =====
  const workspaceAddButton = document.createElement("button");
  workspaceAddButton.className = "sa-background-add";
  workspaceAddButton.textContent = (await getSetting('WallpaperRotationEnabled')) ? msg("add") : msg("replace");
  workspaceAddButton.addEventListener('click', () => {
    workspaceAddPicInput.click();
    document.documentElement.style.setProperty('--enable-workspace-background', 'transparent');
    applySettings('EnableWorkSpaceBG', true);
  });
  const workspaceClearButton = document.createElement("button");
  workspaceClearButton.className = "sa-background-add";
  workspaceClearButton.innerHTML = msg('disable');
  workspaceClearButton.addEventListener('click', async () => {
    await applySettings('EnableWorkSpaceBG', false);
    document.documentElement.style.setProperty('--enable-workspace-background', 'var(--ui-secondary)');
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  const workspaceAddPicInput = document.createElement("input");
  workspaceAddPicInput.type = "file";
  workspaceAddPicInput.accept = ".png, .bmp, .jpg, .jpeg";
  workspaceAddPicInput.multiple = true;
  workspaceAddPicInput.addEventListener('change', async e => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const isRotationEnabled = await getSetting('WallpaperRotationEnabled');
    const currentId = isRotationEnabled ? null : await getSetting('currentWallpaperId');
    const savedIds = await Promise.all(files.map((file, index) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async loadEvent => {
        try {
          const wallpaperId = isRotationEnabled ? "WorkSpaceBG-".concat(Date.now(), "-").concat(index) : currentId || "WorkSpaceBG-".concat(Date.now(), "-").concat(index);
          await bgDB.saveWallpaper({
            id: wallpaperId,
            name: file.name,
            link: loadEvent.target.result,
            enabled: true
          });
          resolve(wallpaperId);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    })));
    await applySettings('EnableWorkSpaceBG', true);
    if (savedIds.length) {
      await applySettings('currentWallpaperId', savedIds[0]);
    }
    await syncWallpaperSelection({
      preferredId: savedIds[0] || null
    });
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
    workspaceAddPicInput.value = '';
  });

  // ===== 创建布局 =====
  const workspaceTitle = createHeader(msg('background-workspace'));
  const rotateTitle = createHeader(msg('background-rotate'));
  const modalTitle = createHeader(msg('background-modal'));

  // Layout
  const workspaceImageLayout = document.createElement('select');
  const workspaceImageLayoutValue = (await getSetting('WorkSpaceBGLayout')) || 'fit';
  workspaceImageLayout.className = 'sa-background-layout';
  [{
    name: msg('background-layout-stretch'),
    value: 'stretch'
  }, {
    name: msg('background-layout-height-priority'),
    value: 'height-priority'
  }, {
    name: msg('background-layout-width-priority'),
    value: 'width-priority'
  }, {
    name: msg('background-layout-fit'),
    value: 'fit'
  }].forEach(layout => {
    const option = document.createElement('option');
    option.value = layout.value;
    option.textContent = layout.name;
    workspaceImageLayout.appendChild(option);
  });
  workspaceImageLayout.value = workspaceImageLayoutValue;
  workspaceImageLayout.addEventListener('change', async e => {
    await applySettings('WorkSpaceBGLayout', e.target.value);
    resizeWorkspaceBackground();
  });

  // Blur
  const workspaceBlur = document.createElement('input');
  workspaceBlur.type = 'range';
  workspaceBlur.min = 0;
  workspaceBlur.max = 20;
  workspaceBlur.value = (await getSetting('WorkSpaceBGBlur')) || 2;
  workspaceBlur.className = 'sa-background-blur';
  workspaceBlur.addEventListener('input', async () => {
    applySettings('WorkSpaceBGBlur', workspaceBlur.value);
    await refreshWorkSpaceBackground();
    await refreshPreviews();
  });
  const workspaceOpacity = document.createElement('input');
  workspaceOpacity.type = 'range';
  workspaceOpacity.min = 0;
  workspaceOpacity.max = 100;
  workspaceOpacity.value = (await getSetting('WorkSpaceBGOpacity')) * 100 || 20;
  workspaceOpacity.className = 'sa-background-opacity';
  workspaceOpacity.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOpacity', workspaceOpacity.value / 100);
    await refreshWorkSpaceBackground();
    await refreshPreviews();
  });
  const workspaceBlurControl = createRangeControl(workspaceBlur, value => "".concat(value, "px"));
  const workspaceOpacityControl = createRangeControl(workspaceOpacity, value => "".concat(value, "%"));

  // Offset X
  const workspaceOffsetX = document.createElement('input');
  workspaceOffsetX.type = 'number';
  workspaceOffsetX.min = '-500';
  workspaceOffsetX.max = '500';
  workspaceOffsetX.step = '1';
  workspaceOffsetX.value = (await getSetting('WorkSpaceBGOffsetX')) || 0;
  workspaceOffsetX.className = 'sa-background-offset';
  workspaceOffsetX.classList.add(addon.tab.scratchClass("input_input-form"));
  workspaceOffsetX.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOffsetX', Number(workspaceOffsetX.value));
    await refreshWorkSpaceBackground();
  });
  const workspaceOffsetY = document.createElement('input');
  workspaceOffsetY.type = 'number';
  workspaceOffsetY.min = '-500';
  workspaceOffsetY.max = '500';
  workspaceOffsetY.step = '1';
  workspaceOffsetY.value = (await getSetting('WorkSpaceBGOffsetY')) || 0;
  workspaceOffsetY.className = 'sa-background-offset';
  workspaceOffsetY.classList.add(addon.tab.scratchClass("input_input-form"));
  workspaceOffsetY.addEventListener('input', async () => {
    applySettings('WorkSpaceBGOffsetY', Number(workspaceOffsetY.value));
    await refreshWorkSpaceBackground();
  });

  // ===== Modal 部分 =====
  const modalAddButton = document.createElement("button");
  modalAddButton.className = "sa-background-add";
  modalAddButton.textContent = msg("add");
  const modalClearButton = document.createElement("button");
  modalClearButton.className = "sa-background-add";
  modalClearButton.textContent = msg("clear");
  const modalAddPicInput = document.createElement("input");
  modalAddPicInput.type = "file";
  modalAddPicInput.accept = ".png, .bmp, .jpg, .jpeg";
  modalAddPicInput.addEventListener('change', async e => {
    const _Array$from = Array.from(e.target.files || []),
      _Array$from2 = _slicedToArray(_Array$from, 1),
      file = _Array$from2[0];
    if (!file) return;
    await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async loadEvent => {
        try {
          modalSettings.link = loadEvent.target.result;
          modalSettings.enabled = true;
          await applySettings('ModalBGLink', modalSettings.link);
          await applySettings('ModalBGName', file.name);
          await applySettings('EnableModalBG', modalSettings.enabled);
          await addModalBackground();
          await refreshPreviews();
          resolve();
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    });
    modalAddPicInput.value = '';
  });
  modalAddButton.addEventListener('click', () => {
    modalAddPicInput.click();
  });
  modalClearButton.addEventListener('click', async () => {
    modalSettings.enabled = false;
    modalSettings.link = null;
    document.documentElement.style.setProperty('--enable-modal-background', 'var(--ui-modal-background)');
    await applySettings('EnableModalBG', modalSettings.enabled);
    await applySettings('ModalBGLink', null);
    await applySettings('ModalBGName', null);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalImageLayout = document.createElement('select');
  const modalImageLayoutValue = modalSettings.layout;
  modalImageLayout.className = 'sa-background-layout';
  [{
    name: msg('background-layout-stretch'),
    value: 'stretch'
  }, {
    name: msg('background-layout-height-priority'),
    value: 'height-priority'
  }, {
    name: msg('background-layout-width-priority'),
    value: 'width-priority'
  }, {
    name: msg('background-layout-fit'),
    value: 'fit'
  }, {
    name: msg('background-layout-fixed'),
    value: 'fixed'
  }].forEach(layout => {
    const option = document.createElement('option');
    option.value = layout.value;
    option.textContent = layout.name;
    modalImageLayout.appendChild(option);
  });
  modalImageLayout.value = modalImageLayoutValue;
  modalImageLayout.addEventListener('change', async e => {
    modalSettings.layout = e.target.value;
    await applySettings('ModalBGLayout', modalSettings.layout);
    await addModalBackground();
  });
  const modalBlur = document.createElement('input');
  modalBlur.type = 'range';
  modalBlur.min = 0;
  modalBlur.max = 20;
  modalBlur.value = modalSettings.blur;
  modalBlur.className = 'sa-background-blur';
  modalBlur.addEventListener('input', async () => {
    modalSettings.blur = Number(modalBlur.value);
    await applySettings('ModalBGBlur', modalSettings.blur);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalOpacity = document.createElement('input');
  modalOpacity.type = 'range';
  modalOpacity.min = 0;
  modalOpacity.max = 100;
  modalOpacity.value = modalSettings.opacity * 100;
  modalOpacity.className = 'sa-background-opacity';
  modalOpacity.addEventListener('input', async () => {
    modalSettings.opacity = Number(modalOpacity.value) / 100;
    await applySettings('ModalBGOpacity', modalSettings.opacity);
    await addModalBackground();
    await refreshPreviews();
  });
  const modalBlurControl = createRangeControl(modalBlur, value => "".concat(value, "px"));
  const modalOpacityControl = createRangeControl(modalOpacity, value => "".concat(value, "%"));
  const modalOffsetX = document.createElement('input');
  modalOffsetX.type = 'number';
  modalOffsetX.min = '-500';
  modalOffsetX.max = '500';
  modalOffsetX.step = '1';
  modalOffsetX.value = modalSettings.offsetX;
  modalOffsetX.className = 'sa-background-offset';
  modalOffsetX.classList.add(addon.tab.scratchClass("input_input-form"));
  modalOffsetX.addEventListener('input', async () => {
    modalSettings.offsetX = Number(modalOffsetX.value) || 0;
    await applySettings('ModalBGOffsetX', modalSettings.offsetX);
    await addModalBackground();
  });
  const modalOffsetY = document.createElement('input');
  modalOffsetY.type = 'number';
  modalOffsetY.min = '-500';
  modalOffsetY.max = '500';
  modalOffsetY.step = '1';
  modalOffsetY.value = modalSettings.offsetY;
  modalOffsetY.className = 'sa-background-offset';
  modalOffsetY.classList.add(addon.tab.scratchClass("input_input-form"));
  modalOffsetY.addEventListener('input', async () => {
    modalSettings.offsetY = Number(modalOffsetY.value) || 0;
    await applySettings('ModalBGOffsetY', modalSettings.offsetY);
    await addModalBackground();
  });
  const modalSize = document.createElement('input');
  modalSize.type = 'number';
  modalSize.min = '0';
  modalSize.max = '500';
  modalSize.step = '1';
  modalSize.value = modalSettings.modalSize;
  modalSize.className = 'sa-background-size';
  modalSize.classList.add(addon.tab.scratchClass("input_input-form"));
  modalSize.addEventListener('input', async () => {
    const value = Number(modalSize.value);
    modalSettings.modalSize = Number.isFinite(value) ? value : 100;
    await applySettings('ModalBGSize', modalSettings.modalSize);
    await addModalBackground();
  });
  const modalAlignX = document.createElement('select');
  const modalAlignXValue = modalSettings.alignX;
  modalAlignX.className = 'sa-background-layout';
  [{
    name: msg('background-align-left'),
    value: 'left'
  }, {
    name: msg('background-align-center'),
    value: 'center'
  }, {
    name: msg('background-align-right'),
    value: 'right'
  }].forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.name;
    modalAlignX.appendChild(option);
  });
  modalAlignX.value = modalAlignXValue;
  modalAlignX.addEventListener('change', async e => {
    modalSettings.alignX = e.target.value;
    await applySettings('ModalBGAlignX', modalSettings.alignX);
    await addModalBackground();
  });
  const modalAlignY = document.createElement('select');
  const modalAlignYValue = modalSettings.alignY;
  modalAlignY.className = 'sa-background-layout';
  [{
    name: msg('background-align-top'),
    value: 'top'
  }, {
    name: msg('background-align-center'),
    value: 'center'
  }, {
    name: msg('background-align-bottom'),
    value: 'bottom'
  }].forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.textContent = optionData.name;
    modalAlignY.appendChild(option);
  });
  modalAlignY.value = modalAlignYValue;
  modalAlignY.addEventListener('change', async e => {
    modalSettings.alignY = e.target.value;
    await applySettings('ModalBGAlignY', modalSettings.alignY);
    await addModalBackground();
  });

  // Animation Duration
  const animationDuration = document.createElement('input');
  animationDuration.type = 'range';
  animationDuration.min = 0;
  animationDuration.max = 2000;
  animationDuration.step = 100;
  animationDuration.value = (await getSetting('WorkSpaceBGAnimationDuration')) || 500;
  animationDuration.className = 'sa-background-animation-duration';
  animationDuration.addEventListener('input', async () => {
    applySettings('WorkSpaceBGAnimationDuration', Number(animationDuration.value));
  });
  const animationDurationControl = createRangeControl(animationDuration, value => "".concat(value, "ms"));

  // ===== Rotation UI =====
  const rotationToggleLabel = document.createElement('label');
  rotationToggleLabel.className = 'sa-background-rotation-label';
  const rotationToggle = document.createElement('input');
  rotationToggle.type = 'checkbox';
  rotationToggle.checked = (await getSetting('WallpaperRotationEnabled')) || false;
  rotationToggle.addEventListener('change', async () => {
    document.querySelector('.sa-background-rotation-all').style.display = rotationToggle.checked ? '' : 'none';
    workspaceAddButton.textContent = rotationToggle.checked ? msg("add") : msg("replace");
    await applySettings('WallpaperRotationEnabled', rotationToggle.checked);
    await syncWallpaperSelection();
    await initializeWallpaperRotation();
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  rotationToggleLabel.appendChild(rotationToggle);
  rotationToggleLabel.appendChild(document.createTextNode(' ' + msg('rotation-enable')));
  const intervalInput = document.createElement('input');
  intervalInput.type = 'number';
  intervalInput.min = '1';
  intervalInput.value = (await getSetting('WallpaperRotationIntervalMinutes')) || 5;
  intervalInput.className = 'sa-background-rotation-interval';
  intervalInput.classList.add(addon.tab.scratchClass("input_input-form"));
  intervalInput.addEventListener('change', async () => {
    await applySettings('WallpaperRotationIntervalMinutes', Number(intervalInput.value) || 5);
    await initializeWallpaperRotation();
  });
  const rotateNowButton = document.createElement('button');
  rotateNowButton.className = 'sa-background-add';
  rotateNowButton.textContent = msg('rotate-now');
  rotateNowButton.addEventListener('click', async () => {
    await advanceWallpaperRotationIndex();
    await refreshWorkSpaceBackground();
    await refreshWallpaperList();
  });
  const wallpaperListContainer = document.createElement('div');
  wallpaperListContainer.className = 'sa-background-wallpaper-list';

  // ===== Preview =====
  const previewEmptyText = msg('background-preview-empty');
  const workspacePreview = createPreview(previewEmptyText);
  const modalPreview = createPreview(previewEmptyText);

  // ===== Refresh functions =====
  async function refreshPreviews() {
    const activeWallpaper = await getActiveWorkspaceWallpaper();
    setPreviewSource(workspacePreview, activeWallpaper && activeWallpaper.link ? activeWallpaper.link : null, activeWallpaper && activeWallpaper.name ? activeWallpaper.name : msg('background-workspace'));
    setPreviewAppearance(workspacePreview, {
      blur: Number(workspaceBlur.value) || 0,
      opacity: (Number(workspaceOpacity.value) || 0) / 100
    });
    setPreviewSource(modalPreview, modalSettings.enabled && modalSettings.link ? modalSettings.link : null, msg('background-modal'));
    setPreviewAppearance(modalPreview, {
      blur: Number(modalBlur.value) || 0,
      opacity: (Number(modalOpacity.value) || 0) / 100
    });
  }
  async function refreshWallpaperList() {
    const settings = (await bgDB.getSetting('settings')) || {};
    const isBackgroundVisible = settings.EnableWorkSpaceBG !== false;
    const activeWallpaper = await getActiveWorkspaceWallpaper();
    const currentWallpaperId = activeWallpaper ? activeWallpaper.id : await getSetting('currentWallpaperId');
    const wallpapers = await bgDB.listWallpapers();
    wallpaperListContainer.innerHTML = '';
    wallpapers.forEach((wallpaper, index) => {
      const isCurrent = wallpaper.id === currentWallpaperId;
      const right = document.createElement('div');
      right.className = 'sa-background-wallpaper-item';
      const title = document.createElement('span');
      title.textContent = wallpaper.name || wallpaper.id;
      title.className = wallpaper.enabled ? 'sa-background-wallpaper-title' : 'sa-background-wallpaper-title disabled';
      const enabledLabel = document.createElement('label');
      enabledLabel.className = 'sa-background-wallpaper-enabled-label';
      const enabledInput = document.createElement('input');
      enabledInput.type = 'checkbox';
      enabledInput.checked = wallpaper.enabled !== false;
      enabledInput.addEventListener('change', async () => {
        await updateWallpaperEnabled(wallpaper.id, enabledInput.checked);
        await refreshWallpaperList();
      });
      enabledLabel.appendChild(enabledInput);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '×';
      deleteButton.className = 'sa-background-delete';
      deleteButton.addEventListener('click', async () => {
        await deleteWallpaperAndRefresh(wallpaper.id);
        await refreshWallpaperList();
      });
      const left = document.createElement('div');
      left.className = 'sa-background-left';
      if (isCurrent) {
        left.classList.add('sa-background-wallpaper-current');
      }
      if (!(isCurrent && isBackgroundVisible)) {
        left.classList.add('sa-background-wallpaper-selectable');
        left.addEventListener('click', async () => {
          await setCurrentWallpaperId(wallpaper.id);
          await refreshWallpaperList();
        });
      }
      left.appendChild(enabledLabel);
      left.appendChild(title);
      right.appendChild(deleteButton);
      const content = document.createElement('div');
      content.className = 'sa-background-list-content';
      if (isCurrent) {
        content.classList.add('sa-background-list-content-current');
      }
      content.style.animationDelay = "".concat(index * 100, "ms");
      content.style.opacity = 1;
      content.appendChild(left);
      content.appendChild(right);
      wallpaperListContainer.appendChild(content);
    });
    await refreshPreviews();
  }

  // 创建标签容器
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'sa-background-tabs-container';

  // 创建标签按钮
  const tabWorkspace = document.createElement('button');
  tabWorkspace.className = 'sa-background-tab-button sa-background-tab-active';
  tabWorkspace.textContent = msg('background-workspace');
  tabWorkspace.dataset.tab = 'workspace';
  const tabModal = document.createElement('button');
  tabModal.className = 'sa-background-tab-button';
  tabModal.textContent = msg('background-modal');
  tabModal.dataset.tab = 'modal';
  tabsContainer.appendChild(tabWorkspace);
  tabsContainer.appendChild(tabModal);

  // ===== 工作区内容 =====
  // 操作按钮放在最上面
  const workspaceAddClearWrapper = document.createElement('div');
  workspaceAddClearWrapper.className = 'sa-background-actions';
  workspaceAddClearWrapper.appendChild(workspaceAddButton);
  workspaceAddClearWrapper.appendChild(workspaceClearButton);
  const workspaceActionsRow = document.createElement('div');
  workspaceActionsRow.className = 'sa-background-control-row sa-background-control-row-full';
  const workspaceActionsFull = document.createElement('div');
  workspaceActionsFull.className = 'sa-background-control-full';
  workspaceActionsFull.appendChild(workspaceAddClearWrapper);
  workspaceActionsRow.appendChild(workspaceActionsFull);

  // 工作区表单
  const workspaceForm = document.createElement('div');
  workspaceForm.className = 'sa-background-form-grid';
  workspaceForm.appendChild(createControlRow(msg('background-layout'), workspaceImageLayout));
  workspaceForm.appendChild(createControlRow(msg('background-blur'), workspaceBlurControl.element));
  workspaceForm.appendChild(createControlRow(msg('background-opacity'), workspaceOpacityControl.element));
  workspaceForm.appendChild(createControlRow(msg('background-offset-x'), workspaceOffsetX));
  workspaceForm.appendChild(createControlRow(msg('background-offset-y'), workspaceOffsetY));

  // 工作区预览
  const workspacePreviewWrapper = document.createElement('div');
  workspacePreviewWrapper.className = 'sa-background-preview-wrapper';
  workspacePreviewWrapper.appendChild(workspacePreview.wrapper);

  // 轮换部分
  const rotationForm = document.createElement('div');
  rotationForm.className = 'sa-background-form-grid';
  rotationForm.appendChild(createFullRow(rotationToggleLabel));
  const rotationAllDiv = document.createElement('div');
  rotationAllDiv.className = 'sa-background-rotation-all';
  rotationAllDiv.style.display = rotationToggle.checked ? '' : 'none';
  rotationAllDiv.appendChild(createControlRow(msg('animation-duration'), animationDurationControl.element));
  rotationAllDiv.appendChild(createControlRow(msg('rotation-interval'), intervalInput));
  rotationAllDiv.appendChild(createFullRow(rotateNowButton));
  const rotationListShell = document.createElement('div');
  rotationListShell.className = 'sa-background-list-shell';
  rotationListShell.appendChild(wallpaperListContainer);
  rotationAllDiv.appendChild(createFullRow(rotationListShell));
  rotationForm.appendChild(rotationAllDiv);

  // 组装工作区面板
  const workspacePanel = document.createElement('div');
  workspacePanel.className = 'sa-background-panel sa-background-panel-workspace';
  workspacePanel.dataset.panel = 'workspace';
  workspacePanel.appendChild(workspacePreviewWrapper);
  workspacePanel.appendChild(workspaceActionsRow);
  workspacePanel.appendChild(workspaceForm);
  workspacePanel.appendChild(rotationForm);

  // ===== 弹窗内容 =====
  const modalActions = document.createElement('div');
  modalActions.className = 'sa-background-actions';
  modalActions.appendChild(modalAddButton);
  modalActions.appendChild(modalClearButton);
  const modalActionsRow = document.createElement('div');
  modalActionsRow.className = 'sa-background-control-row sa-background-control-row-full';
  const modalActionsFull = document.createElement('div');
  modalActionsFull.className = 'sa-background-control-full';
  modalActionsFull.appendChild(modalActions);
  modalActionsRow.appendChild(modalActionsFull);
  const modalForm = document.createElement('div');
  modalForm.className = 'sa-background-form-grid';
  modalForm.appendChild(createControlRow(msg('background-layout'), modalImageLayout));
  modalForm.appendChild(createControlRow(msg('background-blur'), modalBlurControl.element));
  modalForm.appendChild(createControlRow(msg('background-opacity'), modalOpacityControl.element));
  modalForm.appendChild(createControlRow(msg('background-size'), modalSize));
  modalForm.appendChild(createControlRow(msg('background-align-horizontal'), modalAlignX));
  modalForm.appendChild(createControlRow(msg('background-align-vertical'), modalAlignY));
  modalForm.appendChild(createControlRow(msg('background-offset-x'), modalOffsetX));
  modalForm.appendChild(createControlRow(msg('background-offset-y'), modalOffsetY));

  // 弹窗预览
  const modalPreviewWrapper = document.createElement('div');
  modalPreviewWrapper.className = 'sa-background-preview-wrapper';
  modalPreviewWrapper.appendChild(modalPreview.wrapper);

  // 组装弹窗面板
  const modalPanel = document.createElement('div');
  modalPanel.className = 'sa-background-panel sa-background-panel-modal';
  modalPanel.dataset.panel = 'modal';
  modalPanel.appendChild(modalPreviewWrapper);
  modalPanel.appendChild(modalActionsRow);
  modalPanel.appendChild(modalForm);

  // ===== 组装主内容 =====
  // 1. 创建 tabContent 容器（滚动条在这里）
  const tabContent = document.createElement('div');
  tabContent.className = 'sa-background-tab-content';

  // 2. 将面板放入 tabContent
  tabContent.appendChild(workspacePanel);
  tabContent.appendChild(modalPanel);

  // 3. 包装器
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'sa-background-content-wrapper';
  contentWrapper.appendChild(tabsContainer);
  contentWrapper.appendChild(tabContent);

  // 4. 添加到 modal
  modal.appendChild(contentWrapper);

  // ===== 标签切换逻辑 =====
  const tabButtons = [tabWorkspace, tabModal];
  const panels = [workspacePanel, modalPanel];

  // 设置初始显示状态
  workspacePanel.style.display = '';
  modalPanel.style.display = 'none';
  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // 切换标签样式
      tabButtons.forEach(btn => btn.classList.remove('sa-background-tab-active'));
      tab.classList.add('sa-background-tab-active');

      // 切换面板显示
      panels.forEach((panel, i) => {
        panel.style.display = i === index ? '' : 'none';
      });

      // 切换标签后滚动到顶部
      tabContent.scrollTop = 0;
    });
  });

  // ===== 初始化 =====
  await refreshWallpaperList();
  await refreshPreviews();
}
function getModalBackgroundPosition(alignX, alignY, offsetX, offsetY) {
  const normalize = (align, offset, axis) => {
    if (align === 'center') {
      return "calc(50% + ".concat(offset, "px)");
    }
    if (align === (axis === 'x' ? 'right' : 'bottom')) {
      return "calc(100% + ".concat(offset, "px)");
    }
    return "calc(0% + ".concat(offset, "px)");
  };
  return "".concat(normalize(alignX, offsetX, 'x'), " ").concat(normalize(alignY, offsetY, 'y'));
}
async function addModalBackground() {
  try {
    const config = await getModalBackgroundConfig();
    const modalContents = Array.from(document.querySelectorAll('[class*=\"modal_content\"]'));
    if (!modalContents.length) return;
    const modalBackgrounds = Array.from(new Set(modalContents.map(content => {
      const fullscreenShell = content.closest('.sa-modal-shell-fullscreen');
      return fullscreenShell || content;
    })));
    const resetModalBackground = target => {
      if (!target) return;
      target.classList.remove('sa-modal-background-enabled');
      target.classList.remove('sa-modal-background-fullscreen');
      target.style.removeProperty('--sa-modal-bg-image');
      target.style.removeProperty('--sa-modal-bg-size');
      target.style.removeProperty('--sa-modal-bg-position');
      target.style.removeProperty('--sa-modal-bg-blur');
      target.style.removeProperty('--sa-modal-bg-opacity');
      target.style.removeProperty('--sa-modal-bg-modalsize');
    };
    document.querySelectorAll('[class*="library_library-scroll-grid"]').forEach(ele => ele.style.background = 'transparent');
    if (!config) {
      document.documentElement.style.setProperty('--enable-modal-background', 'var(--ui-modal-background)');
      modalBackgrounds.forEach(resetModalBackground);
      return;
    }
    document.documentElement.style.setProperty('--enable-modal-background', 'transparent');
    const modalSizeValue = Number.isFinite(config.modalSize) ? config.modalSize : 100;
    const isNoFit = modalSizeValue === 0;
    let modalSizeFactor = isNoFit ? 1 : Math.max(modalSizeValue, 10) / 100;
    let backgroundSize;
    if (config.layout === 'fixed') {
      backgroundSize = "".concat(modalSizeValue, "px");
      modalSizeFactor = 1;
    } else {
      let backgroundLayout = 'cover';
      switch (config.layout) {
        case 'stretch':
          backgroundLayout = '100% 100%';
          break;
        case 'height-priority':
          backgroundLayout = 'auto 100%';
          break;
        case 'width-priority':
          backgroundLayout = '100% auto';
          break;
        case 'fit':
          backgroundLayout = 'cover';
          break;
      }
      backgroundSize = isNoFit ? 'auto' : backgroundLayout;
    }
    const backgroundPosition = getModalBackgroundPosition(config.alignX, config.alignY, config.offsetX, config.offsetY);
    modalBackgrounds.forEach(bg => {
      resetModalBackground(bg);
      bg.classList.add('sa-modal-background-enabled');
      bg.classList.toggle('sa-modal-background-fullscreen', Boolean(bg.closest('.sa-modal-shell-fullscreen')));
      bg.style.setProperty('--sa-modal-bg-image', "url(\"".concat(config.link, "\")"));
      bg.style.setProperty('--sa-modal-bg-size', backgroundSize);
      bg.style.setProperty('--sa-modal-bg-position', backgroundPosition);
      bg.style.setProperty('--sa-modal-bg-blur', "".concat(config.blur, "px"));
      bg.style.setProperty('--sa-modal-bg-opacity', "".concat(config.opacity));
      bg.style.setProperty('--sa-modal-bg-modalsize', "".concat(modalSizeFactor));
    });
  } catch (e) {
    console.warn('Failed to add modal background settings:', e);
  }
}
async function resizeWorkspaceBackground() {
  try {
    const mode = (await getSetting('WorkSpaceBGLayout')) || 'stretch';
    const offsetX = (await getSetting('WorkSpaceBGOffsetX')) || 0;
    const offsetY = (await getSetting('WorkSpaceBGOffsetY')) || 0;
    const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
    const bgImage = document.querySelector('.sa-background-image');
    if (bgImage && workspace) {
      applyBackgroundLayout({
        image: bgImage,
        containerWidth: workspace.clientWidth,
        containerHeight: workspace.clientHeight,
        mode,
        offsetX,
        offsetY
      });
    } else {
      console.warn('Cannot find background image element, try to spawn again');
      await refreshWorkSpaceBackground();
    }
  } catch (e) {
    console.warn('Failed to resize background image:', e);
  }
}
async function refreshWorkSpaceBackground() {
  if (isRefreshingBG) return;
  isRefreshingBG = true;
  const refreshToken = ++wallpaperRefreshToken;
  try {
    const animationDuration = (await getSetting('WorkSpaceBGAnimationDuration')) || 500;
    const isWorkspaceBackgroundEnabled = await getSetting('EnableWorkSpaceBG');
    document.documentElement.style.setProperty('--enable-workspace-background', isWorkspaceBackgroundEnabled === false ? 'var(--ui-secondary)' : 'transparent');
    clearWallpaperTransitionTimeout();
    const wallpaper = await getActiveWorkspaceWallpaper();
    const existingClips = Array.from(document.querySelectorAll('.sa-background-clip'));
    const existingBg = existingClips[0] ? existingClips[0].querySelector('.sa-background-image') : null;
    existingClips.slice(1).forEach(clip => clip.remove());
    if (!wallpaper || !wallpaper.link) {
      if (existingBg) {
        existingBg.style.transition = "opacity ".concat(animationDuration, "ms ease-out");
        existingBg.style.opacity = '0';
        wallpaperTransitionTimeout = window.setTimeout(() => {
          if (refreshToken !== wallpaperRefreshToken) return;
          existingBg.closest('.sa-background-clip').remove();
          wallpaperTransitionTimeout = null;
          isRefreshingBG = false;
        }, animationDuration);
      } else {
        isRefreshingBG = false;
      }
      return;
    }
    const workspace = document.querySelector('[class*=gui_blocks-wrapper]');
    if (!workspace) {
      isRefreshingBG = false;
      return;
    }
    if (existingBg && existingBg.dataset.wallpaperId === wallpaper.id) {
      existingBg.src = wallpaper.link;
      existingBg.style.filter = "blur(".concat((await getSetting('WorkSpaceBGBlur')) || 0, "px)");
      existingBg.style.opacity = "".concat((await getSetting('WorkSpaceBGOpacity')) || 0.5);
      await resizeWorkspaceBackground();
      isRefreshingBG = false;
      return;
    }
    if (existingBg) {
      existingBg.style.transition = "opacity ".concat(animationDuration, "ms ease-out");
      existingBg.style.opacity = '0';
      wallpaperTransitionTimeout = window.setTimeout(async () => {
        if (refreshToken !== wallpaperRefreshToken) return;
        existingBg.closest('.sa-background-clip').remove();
        await createNewBackground(wallpaper, workspace, animationDuration);
        wallpaperTransitionTimeout = null;
        isRefreshingBG = false;
      }, animationDuration);
    } else {
      await createNewBackground(wallpaper, workspace, animationDuration);
      isRefreshingBG = false;
    }
  } catch (e) {
    console.log(e);
    isRefreshingBG = false;
  }
}
async function createNewBackground(wallpaper, workspace, animationDuration) {
  clearWallpaperTransitionTimeout();
  workspace.querySelectorAll('.sa-background-clip').forEach(clip => clip.remove());
  const clip = document.createElement('div');
  clip.className = 'sa-background-clip';
  const background = document.createElement('img');
  background.className = 'sa-background-image';
  background.dataset.wallpaperId = wallpaper.id || '';
  background.src = wallpaper.link;
  background.style.filter = "blur(".concat((await getSetting('WorkSpaceBGBlur')) || 0, "px)");
  background.style.opacity = '0';
  background.draggable = false;
  background.style.transition = "opacity ".concat(animationDuration, "ms ease-in");
  clip.appendChild(background);
  workspace.prepend(clip);
  await resizeWorkspaceBackground();
  requestAnimationFrame(async () => {
    background.style.opacity = "".concat((await getSetting('WorkSpaceBGOpacity')) || 0.5);
  });
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-background.js.map