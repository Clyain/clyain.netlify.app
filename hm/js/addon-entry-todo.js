(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-todo"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/ui/side-bar/side-bar.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/addons/ui/side-bar/side-bar.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Side Bar 主容器 */\n.side-bar_addons-side-bar_2Qmf6 {\n  background-color: var(--ui-white);\n}\n/* Side Bar 内容容器 */\n.side-bar_addons-side-bar_2Qmf6 .side-bar_content-container_2J8EG {\n  flex: 1;\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: var(--ui-white);\n}\n/* 调整手柄 */\n.side-bar_addons-side-bar_2Qmf6 .side-bar_resize-handle_2HRmQ {\n  cursor: ew-resize;\n  background: transparent;\n  transition: background 0.2s;\n}\n.side-bar_addons-side-bar_2Qmf6 .side-bar_resize-handle_2HRmQ:hover {\n  background: var(--looks-secondary);\n}", ""]);

// exports
exports.locals = {
	"addons-side-bar": "side-bar_addons-side-bar_2Qmf6",
	"addonsSideBar": "side-bar_addons-side-bar_2Qmf6",
	"content-container": "side-bar_content-container_2J8EG",
	"contentContainer": "side-bar_content-container_2J8EG",
	"resize-handle": "side-bar_resize-handle_2HRmQ",
	"resizeHandle": "side-bar_resize-handle_2HRmQ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/todo/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader?{"esModule":false}!./src/addons/addons/todo/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ============================================================\n   TODO LIST\n   ============================================================ */\n.sa-todo-list {\n    flex: 1;\n    overflow-y: auto;  /* 改为 auto，内容过多时显示滚动条 */\n    overflow-x: hidden;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    min-height: 0;  /* 关键：允许 flex 子元素收缩 */\n    max-height: 100%;  /* 限制最大高度 */\n}\n\n/* ===== 滚动条样式 ===== */\n.sa-todo-list::-webkit-scrollbar {\n    width: 4px;\n}\n\n.sa-todo-list::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.sa-todo-list::-webkit-scrollbar-thumb {\n    background: var(--ui-black-transparent);\n    border-radius: 4px;\n}\n\n/* ============================================================\n   TODO LIST ITEM\n   ============================================================ */\n.sa-todo-list-ele {\n    width: 100%;\n    height: auto;\n    background: var(--ui-tertiary);\n    border-radius: 8px;\n    margin-bottom: 0;\n    padding: 12px 14px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid var(--ui-black-transparent);\n    transition: border-color 0.2s ease;\n}\n\n.sa-todo-list-ele:hover {\n    border-color: var(--looks-secondary);\n}\n\n/* ===== Group Tip ===== */\n.sa-todo-list-ele-group_tip {\n    display: flex;\n    border-radius: 8px 8px 0px 0px;\n    overflow: clip;\n    margin: -12px -14px 8px -14px;\n}\n\n.sa-todo-list-ele-group_tip-block {\n    width: 20px;\n    height: 6px;\n    flex: 1;\n}\n\n/* ===== Title Row ===== */\n.sa-todo-list-ele-titleDiv {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n}\n\n.sa-todo-list-ele-title {\n    font-weight: 600;\n    font-size: 28px;\n    text-shadow: #00000030 0 0 2px;\n    color: white;\n    border: none;\n    background-color: transparent;\n    font-family: inherit;\n    flex: 1;\n}\n\n.sa-todo-list-ele-title.done {\n    color: #ffffff50;\n    text-decoration: line-through solid white;\n}\n\n.sa-todo-list-ele-title-rmLine {\n    overflow: clip;\n    color: #0000;\n    text-shadow: none;\n    position: absolute;\n    width: var(--width);\n    text-decoration: line-through #FFF;\n    white-space: nowrap;\n    transition: width 0.3s ease;\n}\n\n.sa-todo-list-ele-titleDiv-dropdown {\n    width: 20px;\n    height: 20px;\n    padding: 1px;\n    margin-left: 5px;\n    border-radius: 5px;\n    transition: transform 0.3s ease;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.sa-todo-list-ele-titleDiv-dropdown:hover {\n    background-color: #ffffff20;\n}\n\n/* ===== Done Button ===== */\n.sa-todo-list-ele-done {\n    padding: 6px;\n    border-radius: 999px;\n    width: 28px;\n    height: 28px;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n    flex-shrink: 0;\n    border: none;\n}\n\n.sa-todo-list-ele-done:hover {\n    transform: scale(1.1);\n}\n\n/* ===== Steps ===== */\n.sa-todo-list-ele-steps {\n    grid-template-rows: 0fr;\n    transition: grid-template-rows 0.3s ease;\n    display: grid;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n}\n\n.sa-todo-list-ele-steps > li {\n    min-height: 0;\n}\n\n.sa-todo-list-ele-steps-main {\n    overflow: hidden;\n    padding: 0.3rem 0 0 0;\n}\n\n.sa-todo-list-ele-steps-li {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-bottom: 5px;\n}\n\n.sa-todo-list-ele-steps-li span {\n    opacity: 0.85;\n}\n\n.sa-todo-list-ele-steps-li span[style*=\"opacity: 0.5\"] {\n    text-decoration: line-through;\n}\n\n/* ===== Line Divider ===== */\n.sa-todo-list-ele-line {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    margin: 4px 0;\n    list-style-type: none;\n}\n\n.sa-todo-list-ele-line-line {\n    width: 100%;\n    opacity: 0.5;\n    border: none;\n    border-top: 1px solid var(--ui-black-transparent);\n    margin: 0;\n}\n\n.sa-todo-list-ele-line-text {\n    opacity: 0.5;\n    font-style: italic;\n    font-size: 0.75rem;\n    color: var(--text-primary-transparent);\n}\n\n/* ===== Empty Tip ===== */\n.sa-todo-list-empty-tip {\n    font-style: italic;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    color: var(--text-primary-transparent);\n    padding: 2rem 0;\n}\n\n/* ============================================================\n   GROUP BAR\n   ============================================================ */\n.sa-todo-group-bar {\n    display: flex;\n    gap: 8px;\n    overflow-x: auto;\n    padding: 8px 0;\n    flex-shrink: 0;\n    scrollbar-width: none;\n}\n\n.sa-todo-group-bar::-webkit-scrollbar {\n    display: none;\n}\n\n.sa-todo-group-btn {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 4px 12px;\n    border: 1px solid var(--ui-black-transparent);\n    border-radius: 12px;\n    background: var(--ui-secondary);\n    color: var(--text-primary);\n    cursor: pointer;\n    white-space: nowrap;\n    transition: 0.25s ease;\n    transition-property: background, border-color;\n    flex-shrink: 0;\n    font-size: 13px;\n    font-family: inherit;\n}\n\n.sa-todo-group-btn.active {\n    background: var(--looks-secondary);\n    color: white;\n    border-color: var(--looks-secondary);\n    text-shadow: #333 0 0 9px;\n}\n\n.sa-todo-group-remove-btn {\n    margin: 1px;\n    margin-left: 5px;\n    padding: 3px;\n    border-radius: 999px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n}\n\n.sa-todo-group-remove-btn:hover {\n    transform: scale(1.15);\n}\n\n.sa-todo-group-remove-btn-img {\n    width: 12px;\n    height: auto;\n}\n\n/* ============================================================\n   ADD BUTTON - 简化动画\n   ============================================================ */\n.sa-todo-add-todo {\n    width: 100%;\n    height: 36px;\n    background-color: var(--looks-secondary);\n    color: white;\n    border: none;\n    border-radius: 8px;\n    display: flex;\n    font-size: 16px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n    font-family: inherit;\n    margin-top: 4px;\n}\n\n.sa-todo-add-todo:hover {\n    opacity: 0.85;\n}\n\n/* ============================================================\n   MODAL\n   ============================================================ */\n\n/* ===== Modal Container ===== */\n.sa-todo-popup,\n.sa-todo-modal-popup {\n    width: 700px;\n    max-width: 92vw;\n    max-height: 90vh;\n    background: var(--ui-modal-background);\n}\n\n/* ============================================================\n   MODAL CONTENT - 确保高度限制\n   ============================================================ */\n.sa-todo-content,\n.sa-todo-modal-content {\n    background: var(--ui-modal-background);\n    padding: 1.5rem 2rem 2rem;\n    max-height: 70vh;\n    height: 70vh;\n    overflow: hidden;  /* 防止外层滚动 */\n    display: flex;\n    flex-direction: column;\n}\n\n/* ============================================================\n   TODO 容器 - 确保高度限制\n   ============================================================ */\n.sa-todo {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n    box-sizing: border-box;\n    height: 100%;  /* 确保占满父容器 */\n    min-height: 0;  /* 允许收缩 */\n    overflow: hidden;  /* 防止溢出 */\n}\n\n/* ===== Modal Inner ===== */\n.sa-todo-modal-inner {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    min-height: 0;\n}\n\n/* ===== Tab Content（可滚动区域） ===== */\n.sa-todo-tab-content {\n    flex: 1;\n    overflow-y: auto;\n    padding: 0 2px;\n    min-height: 0;\n}\n\n.sa-todo-tab-content::-webkit-scrollbar {\n    width: 4px;\n}\n\n.sa-todo-tab-content::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.sa-todo-tab-content::-webkit-scrollbar-thumb {\n    background: var(--ui-black-transparent);\n    border-radius: 4px;\n}\n\n/* ============================================================\n   SECTION HEADER - 虚线分隔线\n   ============================================================ */\n.sa-todo-section-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: var(--text-primary-transparent);\n    margin-bottom: 0.75rem;\n}\n\n.sa-todo-section-title {\n    flex-shrink: 0;\n}\n\n.sa-todo-divider {\n    flex-grow: 1;\n    height: 1px;\n    background: var(--ui-black-transparent);\n}\n\n.sa-todo-divider-dashed {\n    flex-grow: 1;\n    height: 0;\n    border-top: 1px dashed var(--ui-black-transparent);\n}\n\n/* ============================================================\n   TABS\n   ============================================================ */\n.sa-todo-mode-tab {\n    display: flex;\n    gap: 0.5rem;\n    margin-bottom: 1.25rem;\n    padding-bottom: 0.75rem;\n    border-bottom: 2px solid var(--ui-black-transparent);\n    flex-shrink: 0;\n}\n\n.sa-todo-mode-tab-btn {\n    padding: 0.5rem 1.25rem;\n    border: none;\n    border-radius: 8px;\n    background: transparent;\n    color: var(--text-primary);\n    font-weight: 600;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    font-family: inherit;\n    position: relative;\n}\n\n.sa-todo-mode-tab-btn:hover {\n    background: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n\n.sa-todo-mode-tab-btn.enable {\n    background: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n\n.sa-todo-mode-tab-btn.enable::after {\n    content: '';\n    position: absolute;\n    bottom: -0.1rem;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 60%;\n    height: 2px;\n    background: var(--looks-secondary);\n    border-radius: 2px;\n}\n\n/* ============================================================\n   FORM GRID\n   ============================================================ */\n.sa-todo-form-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.sa-todo-control-row {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    min-height: 2.2rem;\n}\n\n.sa-todo-control-row-full {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.3rem;\n}\n\n.sa-todo-control-label {\n    font-size: 0.85rem;\n    color: var(--text-primary);\n    min-width: 100px;\n    flex-shrink: 0;\n}\n\n.sa-todo-control-input {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-todo-control-input > input,\n.sa-todo-control-input > select {\n    flex: 1;\n    min-width: 0;\n}\n\n.sa-todo-control-full {\n    width: 100%;\n}\n\n/* ============================================================\n   MODAL INPUTS\n   ============================================================ */\n.sa-todo-modal-input {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px 0;\n    height: 40px;\n}\n\n.sa-todo-modal-input span {\n    font-size: 0.85rem;\n    color: var(--text-primary);\n    min-width: 80px;\n    flex-shrink: 0;\n}\n\n.sa-todo-modal-input-input {\n    width: 200px;\n    padding: 0.3rem 0.6rem;\n    border-radius: 6px;\n    border: 1px solid var(--ui-black-transparent);\n    background: var(--input-background);\n    color: var(--text-primary);\n    font-size: 0.85rem;\n    font-family: inherit;\n    transition: border-color 0.2s ease;\n}\n\n.sa-todo-modal-input-input:focus {\n    outline: none;\n    border-color: var(--looks-secondary);\n}\n\n.sa-todo-modal-input-input[type=\"color\"] {\n    background: transparent;\n    border: none;\n    padding: 0;\n    width: 40px;\n    height: 36px;\n    cursor: pointer;\n}\n\n.sa-todo-modal-input-input[type=\"datetime-local\"] {\n    width: auto;\n    min-width: 180px;\n}\n\n/* ============================================================\n   MODAL PREVIEW\n   ============================================================ */\n.sa-todo-modal-preview {\n    width: 100%;\n    height: auto;\n    background: var(--ui-tertiary);\n    border-radius: 8px;\n    margin-bottom: 5px;\n    padding: 12px 14px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid var(--ui-black-transparent);\n}\n\n.sa-todo-modal-preview:hover {\n    border-color: var(--looks-secondary);\n}\n\n.sa-todo-modal-preview-title {\n    font-weight: 600;\n    font-size: 28px;\n    text-shadow: #00000030 0 0 2px;\n    color: white;\n    border: none;\n    background-color: transparent;\n    outline: 2px solid transparent;\n    font-family: inherit;\n    transition: outline 0.2s ease, background 0.2s ease;\n    padding: 4px 8px;\n    border-radius: 4px;\n    flex: 1;\n}\n\n.sa-todo-modal-preview-title:hover,\n.sa-todo-modal-preview-title:focus {\n    outline: 2px solid;\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.sa-todo-modal-preview-date {\n    color: rgba(255, 255, 255, 0.7);\n    font-size: 0.75rem;\n    padding: 2px 6px;\n}\n\n/* ===== Preview Steps ===== */\n.sa-todo-modal-preview-steps {\n    margin: 0.5rem 0 0 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.sa-todo-modal-preview-steps-step {\n    display: flex;\n    gap: 10px;\n    margin: 5px 2px;\n    list-style-type: none;\n    padding: 0;\n    align-items: center;\n}\n\n.sa-todo-modal-preview-steps-step-input {\n    flex: 1;\n    color: white;\n    border: none;\n    background-color: transparent;\n    outline: 2px solid transparent;\n    font-family: inherit;\n    font-size: 14px;\n    padding: 4px 8px;\n    border-radius: 4px;\n    transition: outline 0.2s ease, background 0.2s ease;\n}\n\n.sa-todo-modal-preview-steps-step-input:hover,\n.sa-todo-modal-preview-steps-step-input:focus {\n    outline: 2px solid;\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.sa-todo-modal-preview-steps-step-remove {\n    border-radius: 99px;\n    border: none;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease;\n    flex-shrink: 0;\n}\n\n.sa-todo-modal-preview-steps-step-remove:hover {\n    transform: scale(1.15);\n}\n\n/* ============================================================\n   MODAL BUTTONS\n   ============================================================ */\n.sa-todo-modal-create-button {\n    background-color: var(--looks-secondary);\n    color: white;\n    padding: 0.5rem 1.25rem;\n    border: none;\n    border-radius: 6px;\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: opacity 0.2s ease;\n}\n\n.sa-todo-modal-create-button:hover {\n    opacity: 0.8;\n}\n\n.sa-todo-modal-create-button:active,\n.sa-todo-modal-create-button:focus-within {\n    box-shadow: 0 0 0 3px var(--looks-transparent);\n}\n\n/* ===== 按钮容器 ===== */\n.sa-todo-modal-button-container {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.5rem;\n    padding-top: 0.75rem;\n    margin-top: 0.5rem;\n    border-top: 1px solid var(--ui-black-transparent);\n    flex-shrink: 0;\n}\n\n.sa-todo-modal-button-container .sa-todo-modal-create-button:last-child {\n    background: var(--looks-secondary);\n    color: white;\n}\n\n/* ============================================================\n   GROUP SELECTOR\n   ============================================================ */\n.sa-todo-group-selector {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px;\n    margin: 5px 0;\n}\n\n.sa-todo-group-tag {\n    padding: 4px 10px;\n    border: 1px solid var(--ui-black-transparent);\n    border-radius: 12px;\n    color: #fff;\n    cursor: pointer;\n    white-space: nowrap;\n    transition: 0.25s ease;\n    font-size: 13px;\n    font-family: inherit;\n}\n\n.sa-todo-group-tag:hover {\n    opacity: 0.85;\n}\n\n.sa-todo-group-tag.active {\n    text-shadow: #333 0 0 9px;\n}", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/todo/_runtime_entry.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/todo/_runtime_entry.js ***!
  \**************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/todo/userscript.js");
/* harmony import */ var _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader?{"esModule":false}!./userstyle.css */ "./node_modules/css-loader/index.js?{\"esModule\":false}!./src/addons/addons/todo/userstyle.css");
/* harmony import */ var _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_esModule_false_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/todo/done.svg":
/*!*****************************************!*\
  !*** ./src/addons/addons/todo/done.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgd2lkdGg9IjIxMy41MjA5OTYwOTM3NSIgaGVpZ2h0PSIxNzEuODI0OTk2OTQ4MjQyMiIKICAgIHZpZXdCb3g9IjAgMCAyMTMuNTIwOTk2MDkzNzUgMTcxLjgyNDk5Njk0ODI0MjIiIGZpbGw9Im5vbmUiPgogICAgPHBhdGgKICAgICAgICBkPSJNMjEzLjUyMSAzMC40MDUzTDE4My4xMTUgMEw3Mi4xMTUzIDExMUwzMC40MDUzIDY5LjI5TDAgOTkuNjk1M0w0MS43MSAxNDEuNDA1TDQxLjY5NTMgMTQxLjQyTDcyLjEwMDYgMTcxLjgyNUwyMTMuNTIxIDMwLjQwNTNaIgogICAgICAgIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgo8L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/todo/dropdown-arrow.svg":
/*!***************************************************!*\
  !*** ./src/addons/addons/todo/dropdown-arrow.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/todo/edit.svg":
/*!*****************************************!*\
  !*** ./src/addons/addons/todo/edit.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI0Ij48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik03IDQyaDM2Ii8+PHBhdGggZD0iTTExIDI2LjcyVjM0aDcuMzE3TDM5IDEzLjMwOEwzMS42OTUgNnoiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/todo/remove.svg":
/*!*******************************************!*\
  !*** ./src/addons/addons/todo/remove.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNzUgM1YxLjVoNC41VjN6bS0xLjUgMFYxYTEgMSAwIDAgMSAxLTFoNS41YTEgMSAwIDAgMSAxIDF2MmgyLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0uMzY1bC0uNzQzIDkuNjUzQTIgMiAwIDAgMSAxMS4xNDggMTZINC44NTJhMiAyIDAgMCAxLTEuOTk0LTEuODQ3TDIuMTE1IDQuNUgxLjc1YS43NS43NSAwIDAgMSAwLTEuNXptLS42MyAxLjVoOC43NmwtLjczNCA5LjUzOGEuNS41IDAgMCAxLS40OTguNDYySDQuODUyYS41LjUgMCAwIDEtLjQ5OC0uNDYyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/todo/undone.svg":
/*!*******************************************!*\
  !*** ./src/addons/addons/todo/undone.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIgogICAgd2lkdGg9IjI0Ny40ODY2MDI3ODMyMDMxMiIgaGVpZ2h0PSIyNDcuNDg0OTg1MzUxNTYyNSIKICAgIHZpZXdCb3g9IjAgMCAyNDcuNDg2NjAyNzgzMjAzMTIgMjQ3LjQ4NDk4NTM1MTU2MjUiIGZpbGw9Im5vbmUiPgogICAgPHBhdGgKICAgICAgICBkPSJNMTIzLjc0NCA4OC4zODg3TDM1LjM1NSAwTDAgMzUuMzU1TDg4LjM4ODcgMTIzLjc0NEwwLjAwMjAxMDM1IDIxMi4xM0wzNS4zNTcgMjQ3LjQ4NUwxMjMuNzQ0IDE1OS4wOTlMMjEyLjEzIDI0Ny40ODVMMjQ3LjQ4NSAyMTIuMTNMMTU5LjA5OSAxMjMuNzQ0TDI0Ny40ODcgMzUuMzU1M0wyMTIuMTMyIDAuMDAwMzAxMzYxTDEyMy43NDQgODguMzg4N1oiCiAgICAgICAgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/todo/userscript.js":
/*!**********************************************!*\
  !*** ./src/addons/addons/todo/userscript.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tw_recolor_build_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/tw-recolor/build!./logo.svg */ "./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg");
/* harmony import */ var _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-arrow.svg */ "./src/addons/addons/todo/dropdown-arrow.svg");
/* harmony import */ var _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _done_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./done.svg */ "./src/addons/addons/todo/done.svg");
/* harmony import */ var _done_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_done_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _undone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./undone.svg */ "./src/addons/addons/todo/undone.svg");
/* harmony import */ var _undone_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_undone_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.svg */ "./src/addons/addons/todo/edit.svg");
/* harmony import */ var _edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_edit_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remove.svg */ "./src/addons/addons/todo/remove.svg");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_remove_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/side-bar/side-bar.js */ "./src/addons/ui/side-bar/side-bar.js");
/* harmony import */ var _tools_AddToBar_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/AddToBar/index.js */ "./src/addons/tools/AddToBar/index.js");
/* harmony import */ var _tools_AEsettings_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/AEsettings/index.js */ "./src/addons/tools/AEsettings/index.js");


;








/*
{
  groups: [
    { id: "g1", name: "工作", color: "#3b82f6"}
  ],
  tasks: [
    {
      id: "t1",
      name: "写周报",
      startTime: "123445",
      endTime: "33333",
      done: false,
      priority: 2,
      tags: ["g1"],
      color: "#0099ff",
      steps: [
        { id: "s1", text: "收集数据", done: true }
      ],
    }
  ]
}
*/

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let addon = _ref.addon,
    msg = _ref.msg;
  function getContrastColor(hexColor) {
    let r, g, b;
    if (hexColor.startsWith('#')) {
      if (hexColor.length === 4) {
        r = parseInt(hexColor[1] + hexColor[1], 16);
        g = parseInt(hexColor[2] + hexColor[2], 16);
        b = parseInt(hexColor[3] + hexColor[3], 16);
      } else {
        r = parseInt(hexColor.slice(1, 3), 16);
        g = parseInt(hexColor.slice(3, 5), 16);
        b = parseInt(hexColor.slice(5, 7), 16);
      }
    } else if (hexColor.startsWith('rgb')) {
      const match = hexColor.match(/\d+/g);
      r = parseInt(match[0]);
      g = parseInt(match[1]);
      b = parseInt(match[2]);
    } else {
      return '#000000';
    }
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  }
  function getFormattedDateRange(timestamp1, timestamp2) {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
    const pad = num => String(num).padStart(2, '0');
    const year1 = date1.getFullYear();
    const month1 = pad(date1.getMonth() + 1);
    const day1 = pad(date1.getDate());
    const hour1 = pad(date1.getHours());
    const minute1 = pad(date1.getMinutes());
    const second1 = pad(date1.getSeconds());
    const year2 = date2.getFullYear();
    const month2 = pad(date2.getMonth() + 1);
    const day2 = pad(date2.getDate());
    const hour2 = pad(date2.getHours());
    const minute2 = pad(date2.getMinutes());
    const second2 = pad(date2.getSeconds());
    const timeStr1 = "".concat(hour1, ":").concat(minute1, ":").concat(second1);
    const timeStr2 = "".concat(hour2, ":").concat(minute2, ":").concat(second2);
    const isSameDate = year1 === year2 && month1 === month2 && day1 === day2;
    if (isSameDate) {
      const dateStr = "".concat(year1, "-").concat(month1, "-").concat(day1);
      return "".concat(dateStr, " ").concat(timeStr1, " \u2192 ").concat(timeStr2);
    } else {
      const fullStr1 = "".concat(year1, "-").concat(month1, "-").concat(day1, " ").concat(timeStr1);
      const fullStr2 = "".concat(year2, "-").concat(month2, "-").concat(day2, " ").concat(timeStr2);
      return "".concat(fullStr1, " \u2192 ").concat(fullStr2);
    }
  }
  const generateId = () => {
    return "todo-".concat(Math.random().toString(36).substr(2, 9));
  };
  addon.tab.traps.vm.runtime.on("PROJECT_LOADED", () => {
    try {
      Object.values(addon.tab.traps.vm.runtime.getTargetForStage().comments).forEach(obj => {
        if (obj.id == COMMENT_ID) return;
        if (obj.text.indexOf(POINT) != -1) {
          COMMENT_ID = obj.id;
          return;
        }
      });
    } catch (e) {
      console.warn(e);
    }
  });
  let COMMENT_ID = 'todo';
  let PROJECT_NAME = '';
  const POINT = '_TODO_LIST_';
  const emptyTodo = {
    groups: [],
    tasks: []
  };
  const alpha = 'a0';
  await ReduxStore.subscribe(() => {
    PROJECT_NAME = ReduxStore.getState().scratchGui.projectTitle;
  });
  const getFormatComment = content => "\nThis comment is for the \"todo\" addon, this comment will storage your to-do list.\n\nSo don't edit, remove it. But you can move, resize and hide it, it won't affect work.\n".concat(POINT, "\n").concat(JSON.stringify(content), "\n");
  const getTextWidth = (() => {
    const el = document.createElement('span');
    el.style.cssText = 'position:fixed;visibility:hidden;white-space:nowrap;height:auto;width:auto';
    document.body.appendChild(el);
    return function () {
      let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello world';
      let fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';
      let plus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      let fontFamily = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '"Helvetica Neue", Helvetica, Arial, sans-serif';
      el.style.font = "".concat(String(fontSize).endsWith('px') ? fontSize : fontSize + 'px', " ").concat(fontFamily);
      el.textContent = text;
      return el.offsetWidth + plus + 'px';
    };
  })();

  // ===== 辅助函数 =====
  const createDividerHeader = function createDividerHeader(title) {
    let isDashed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const headerDiv = document.createElement('div');
    headerDiv.className = 'sa-todo-section-header';
    const titleElement = document.createElement('span');
    titleElement.className = 'sa-todo-section-title';
    titleElement.textContent = title;
    const divider = document.createElement('div');
    divider.className = isDashed ? 'sa-todo-divider-dashed' : 'sa-todo-divider';
    headerDiv.appendChild(titleElement);
    headerDiv.appendChild(divider);
    return headerDiv;
  };

  // ===== addModal =====
  const addModal = function addModal() {
    let editEleConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    const _addon$tab$createModa = addon.tab.createModal(editEleConfig ? msg('edit-title') : msg('create-title'), {
        isOpen: true,
        useEditorClasses: true
      }),
      backdrop = _addon$tab$createModa.backdrop,
      container = _addon$tab$createModa.container,
      contentMain = _addon$tab$createModa.content,
      closeButton = _addon$tab$createModa.closeButton,
      remove = _addon$tab$createModa.remove;
    container.classList.add('sa-todo-popup');
    contentMain.classList.add('sa-todo-content');
    let config;
    const isNew = !editEleConfig;
    if (editEleConfig) {
      config = {
        mode: editEleConfig.mode || 2,
        id: editEleConfig.id || generateId(),
        name: editEleConfig.name || msg('new-todo'),
        color: editEleConfig.color || '#0099ff',
        task: {
          startTime: editEleConfig.startTime || Date.now(),
          endTime: editEleConfig.endTime || Date.now() + 10000086,
          done: editEleConfig.done || false,
          tags: editEleConfig.groupId || [],
          priority: 1,
          steps: editEleConfig.steps || []
        }
      };
    } else {
      config = {
        mode: 2,
        id: generateId(),
        name: msg('new-todo'),
        name_group: msg('new-group'),
        color: '#0099ff',
        task: {
          startTime: Date.now(),
          endTime: Date.now() + 10000086,
          done: false,
          tags: [],
          priority: 1,
          steps: []
        }
      };
    }

    // ===== 外层容器 =====
    const modalInner = document.createElement('div');
    modalInner.className = 'sa-todo-modal-inner';

    // ===== Tab 标签 =====
    const modeTab = document.createElement('div');
    modeTab.className = 'sa-todo-mode-tab';
    const taskTabBtn = document.createElement('button');
    taskTabBtn.className = 'sa-todo-mode-tab-btn ' + (config.mode === 2 ? 'enable' : 'unable');
    taskTabBtn.textContent = msg('task');
    const groupTabBtn = document.createElement('button');
    groupTabBtn.className = 'sa-todo-mode-tab-btn ' + (config.mode === 1 ? 'enable' : 'unable');
    groupTabBtn.textContent = msg('group');
    modeTab.appendChild(taskTabBtn);
    modeTab.appendChild(groupTabBtn);

    // ===== Tab 内容（可滚动） =====
    const tabContent = document.createElement('div');
    tabContent.className = 'sa-todo-tab-content';

    // ===== 任务字段 =====
    const taskFields = document.createElement('div');
    taskFields.className = 'sa-todo-task-fields';

    // ===== 分组字段 =====
    const groupFields = document.createElement('div');
    groupFields.className = 'sa-todo-group-fields';

    // ===== 编辑标题（虚线） =====
    const taskHeader = createDividerHeader(msg('edit'), true);
    const groupHeader = createDividerHeader(msg('edit'), true);

    // ===== 预览 =====
    const preview = document.createElement('div');
    preview.className = 'sa-todo-modal-preview';

    // ===== 预览标题（虚线） =====
    const previewLabel = createDividerHeader(msg('preview'), true);
    const preview_title = document.createElement('input');
    preview_title.className = 'sa-todo-modal-preview-title';
    preview_title.style.outlineColor = config.color;
    preview_title.onchange = e => {
      config.name = e.target.value;
      refresh();
    };
    const preview_date = document.createElement('span');
    preview_date.className = 'sa-todo-modal-preview-date';

    // ===== 预览步骤列表 =====
    const preview_steps = document.createElement('ul');
    preview_steps.className = 'sa-todo-modal-preview-steps';

    // ===== 新建步骤按钮 =====
    const preview_steps_create = document.createElement('button');
    preview_steps_create.className = 'sa-todo-modal-create-button';
    preview_steps_create.textContent = msg('new-step');

    // ===== 刷新函数 =====
    const refresh = () => {
      preview_title.value = config.name;
      preview_date.textContent = getFormattedDateRange(config.task.startTime, config.task.endTime);
      preview.style.backgroundColor = config.color + alpha;
      preview_steps.innerHTML = '';
      config.task.steps.forEach((step, index) => {
        const stepItem = document.createElement('li');
        stepItem.className = 'sa-todo-modal-preview-steps-step';
        const stepInput = document.createElement('input');
        stepInput.className = 'sa-todo-modal-preview-steps-step-input';
        stepInput.style.outlineColor = config.color;
        stepInput.value = step.text;
        stepInput.onchange = e => {
          config.task.steps[index].text = e.target.value;
        };
        const stepRemove = document.createElement('button');
        stepRemove.textContent = '×';
        stepRemove.className = 'sa-todo-modal-preview-steps-step-remove';
        stepRemove.style.backgroundColor = config.color;
        stepRemove.style.color = 'white';
        stepRemove.onclick = e => {
          e.stopPropagation();
          config.task.steps.splice(index, 1);
          refresh();
        };
        stepItem.appendChild(stepRemove);
        stepItem.appendChild(stepInput);
        preview_steps.appendChild(stepItem);
      });

      // 聚焦最新的步骤
      if (config.task.steps.length > 0) {
        const lastStep = config.task.steps[config.task.steps.length - 1];
        if (lastStep.latest) {
          const inputs = preview_steps.querySelectorAll('.sa-todo-modal-preview-steps-step-input');
          if (inputs.length > 0) {
            setTimeout(() => {
              inputs[inputs.length - 1].focus();
              inputs[inputs.length - 1].select();
            }, 0);
          }
          lastStep.latest = false;
        }
      }
    };
    preview.appendChild(preview_title);
    preview.appendChild(preview_date);
    preview.appendChild(preview_steps);
    refresh();

    // ===== 组选择器 =====
    const groupSelector = document.createElement('div');
    groupSelector.className = 'sa-todo-group-selector';
    const refreshGroupSelector = () => {
      groupSelector.innerHTML = '';
      const groups = getTodoListContent().groups || [];
      if (groups.length === 0) return;
      groups.forEach(group => {
        const tag = document.createElement('button');
        tag.className = 'sa-todo-group-tag';
        tag.textContent = group.name;
        const active = (config.task.tags || []).includes(group.id);
        if (active) {
          tag.classList.add('active');
          tag.style.backgroundColor = group.color;
        } else {
          tag.style.backgroundColor = group.color + '60';
        }
        tag.onclick = () => {
          const tags = config.task.tags || [];
          const idx = tags.indexOf(group.id);
          if (idx === -1) tags.push(group.id);else tags.splice(idx, 1);
          config.task.tags = tags;
          refreshGroupSelector();
        };
        groupSelector.appendChild(tag);
      });
    };

    // ===== 输入框辅助 =====
    const input = function input(inputType, text) {
      let inputConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const inputContent = document.createElement('div');
      inputContent.className = 'sa-todo-modal-input';
      const inputText = document.createElement('span');
      inputText.textContent = text;
      const input = document.createElement('input');
      input.className = 'sa-todo-modal-input-input';
      if (inputType !== 'input') input.type = inputType;
      if (inputConfig.key2) input.value = config[inputConfig.key][inputConfig.key2];else input.value = config[inputConfig.key];
      input.oninput = e => {
        if (inputConfig.key2) config[inputConfig.key][inputConfig.key2] = e.target.value;else config[inputConfig.key] = e.target.value;
        refresh();
      };
      inputContent.appendChild(inputText);
      inputContent.appendChild(input);
      return inputContent;
    };

    // ===== 构建任务字段 =====
    taskFields.appendChild(taskHeader);
    taskFields.appendChild(input('color', msg('color'), {
      key: 'color'
    }));
    taskFields.appendChild(input('datetime-local', msg('start-time'), {
      key: 'task',
      key2: 'startTime'
    }));
    taskFields.appendChild(input('datetime-local', msg('end-time'), {
      key: 'task',
      key2: 'endTime'
    }));
    taskFields.appendChild(groupSelector);

    // ===== 构建分组字段 =====
    groupFields.appendChild(groupHeader);
    groupFields.appendChild(input('text', msg('name'), {
      key: 'name'
    }));
    groupFields.appendChild(input('color', msg('color'), {
      key: 'color'
    }));

    // ===== 初始显示状态 =====
    if (config.mode === 1) {
      taskFields.style.display = 'none';
      preview.style.display = 'none';
      previewLabel.style.display = 'none';
      preview_steps_create.style.display = 'none';
    } else {
      groupFields.style.display = 'none';
    }

    // ===== Tab 切换 =====
    taskTabBtn.onclick = () => {
      config.mode = 2;
      taskTabBtn.className = 'sa-todo-mode-tab-btn enable';
      groupTabBtn.className = 'sa-todo-mode-tab-btn unable';
      taskFields.style.display = '';
      groupFields.style.display = 'none';
      preview.style.display = '';
      previewLabel.style.display = '';
      preview_steps_create.style.display = '';
      refreshGroupSelector();
      refresh();
      tabContent.scrollTop = 0;
    };
    groupTabBtn.onclick = () => {
      config.mode = 1;
      groupTabBtn.className = 'sa-todo-mode-tab-btn enable';
      taskTabBtn.className = 'sa-todo-mode-tab-btn unable';
      taskFields.style.display = 'none';
      groupFields.style.display = '';
      preview.style.display = 'none';
      previewLabel.style.display = 'none';
      preview_steps_create.style.display = 'none';
      tabContent.scrollTop = 0;
    };

    // ===== 预览步骤创建 =====
    preview_steps_create.onclick = () => {
      config.task.steps.push({
        id: generateId(),
        text: msg('new-step'),
        latest: true,
        done: false
      });
      refresh();
    };

    // ===== 完成按钮 =====
    const done = document.createElement('button');
    done.className = 'sa-todo-modal-create-button';
    done.textContent = msg('done');
    done.onclick = () => {
      if (editEleConfig) replaceTodo(config);else addNewTodo(config);
      remove();
    };

    // ===== 按钮容器 =====
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'sa-todo-modal-button-container';
    buttonContainer.appendChild(done);

    // ===== 组装 Tab 内容 =====
    const taskFieldsRow = document.createElement('div');
    taskFieldsRow.className = 'sa-todo-control-row sa-todo-control-row-full';
    const taskFieldsFull = document.createElement('div');
    taskFieldsFull.className = 'sa-todo-control-full';
    taskFieldsFull.appendChild(taskFields);
    taskFieldsRow.appendChild(taskFieldsFull);
    tabContent.appendChild(taskFieldsRow);
    const groupFieldsRow = document.createElement('div');
    groupFieldsRow.className = 'sa-todo-control-row sa-todo-control-row-full';
    const groupFieldsFull = document.createElement('div');
    groupFieldsFull.className = 'sa-todo-control-full';
    groupFieldsFull.appendChild(groupFields);
    groupFieldsRow.appendChild(groupFieldsFull);
    tabContent.appendChild(groupFieldsRow);
    const previewRow = document.createElement('div');
    previewRow.className = 'sa-todo-control-row sa-todo-control-row-full';
    const previewFull = document.createElement('div');
    previewFull.className = 'sa-todo-control-full';
    previewFull.appendChild(previewLabel);
    previewFull.appendChild(preview);
    previewFull.appendChild(preview_steps_create);
    previewRow.appendChild(previewFull);
    tabContent.appendChild(previewRow);
    const buttonRow = document.createElement('div');
    buttonRow.className = 'sa-todo-control-row sa-todo-control-row-full';
    const buttonFull = document.createElement('div');
    buttonFull.className = 'sa-todo-control-full';
    buttonFull.appendChild(buttonContainer);
    buttonRow.appendChild(buttonFull);
    tabContent.appendChild(buttonRow);

    // ===== 组装最终结构 =====
    modalInner.appendChild(modeTab);
    modalInner.appendChild(tabContent);
    contentMain.appendChild(modalInner);
    refreshGroupSelector();
    backdrop.addEventListener("click", remove);
    closeButton.addEventListener("click", remove);
  };
  let selectedGroup = null;
  const createSideBarElements = () => {
    const isVSCL = Object(_tools_AEsettings_index_js__WEBPACK_IMPORTED_MODULE_8__["getSetting"])('EnableVSCodeLayout');
    const content = document.createElement('div');
    content.className = 'sa-todo';
    const title = document.createElement('h1');
    title.textContent = msg('title', {
      project: PROJECT_NAME.toString()
    });
    let groupBar = null;
    const refreshTodo = () => {
      if (Object(_tools_AEsettings_index_js__WEBPACK_IMPORTED_MODULE_8__["getSetting"])('EnableVSCodeLayout')) {
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_6__["default"].clearContent();
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_6__["default"].setContent(createSideBarElements());
      } else {
        const content = document.querySelector("[class*='sa-todo-modal-content']");
        content.childNodes.forEach(ele => ele.remove());
        content.appendChild(createSideBarElements());
      }
    };
    try {
      const groups = getTodoListContent().groups || [];
      if (groups.length > 0) {
        groupBar = document.createElement('div');
        groupBar.className = 'sa-todo-group-bar';
        const allBtn = document.createElement('button');
        allBtn.className = 'sa-todo-group-btn';
        allBtn.textContent = msg('all');
        if (selectedGroup === null) allBtn.classList.add('active');
        allBtn.onclick = () => {
          selectedGroup = null;
          refreshTodo();
        };
        groupBar.appendChild(allBtn);
        groups.forEach((group, index) => {
          let needRemove = false;
          const btn = document.createElement('button');
          btn.className = 'sa-todo-group-btn';
          btn.textContent = group.name;
          const btnRemoveGroup = document.createElement('div');
          btnRemoveGroup.className = 'sa-todo-group-remove-btn';
          btnRemoveGroup.style.backgroundColor = group.color;
          const btnRemoveGroupImg = document.createElement('img');
          btnRemoveGroupImg.src = _remove_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
          btnRemoveGroupImg.className = 'sa-todo-group-remove-btn-img';
          btnRemoveGroupImg.style.filter = "brightness(".concat(getContrastColor(group.color) === '#000000' ? 0 : 1);
          btnRemoveGroup.onclick = () => {
            if (selectedGroup === group.id) selectedGroup = null;
            needRemove = true;
            const currentGroup = getTodoListContent();
            const nowGroupId = currentGroup.groups[index].id;
            currentGroup.groups.splice(index, 1);
            currentGroup.tasks.forEach((task, taskIndex) => {
              const groupIndex = task.groupId.indexOf(nowGroupId);
              if (groupIndex !== -1) {
                currentGroup.tasks[taskIndex].groupId.splice(groupIndex, 1);
              }
            });
            createCommentToStage(getFormatComment(currentGroup));
          };
          if (selectedGroup === group.id) {
            btn.classList.add('active');
            btn.style.backgroundColor = group.color;
          } else {
            btn.style.backgroundColor = group.color + '60';
          }
          btn.onclick = () => {
            if (needRemove) return;
            selectedGroup = group.id;
            refreshTodo();
          };
          btnRemoveGroup.appendChild(btnRemoveGroupImg);
          btn.appendChild(btnRemoveGroup);
          groupBar.appendChild(btn);
        });
      }
    } catch (e) {
      console.warn("Can't load group menu because ".concat(e));
    }
    const todoList = document.createElement('ul');
    todoList.className = 'sa-todo-list';
    try {
      const tasks = getTodoListContent().tasks || [];
      if (tasks.length === 0) {
        const tip = document.createElement('span');
        tip.textContent = msg('no-todo');
        tip.className = 'sa-todo-list-empty-tip';
        todoList.appendChild(tip);
      } else {
        tasks.forEach((task, index) => {
          let currentTask = task;
          if (selectedGroup !== null && !(currentTask.groupId || []).includes(selectedGroup)) return;
          let isHide = true;
          const todoEle = document.createElement('li');
          todoEle.className = 'sa-todo-list-ele';
          const todoEle_groupTip = document.createElement('div');
          todoEle_groupTip.className = 'sa-todo-list-ele-group_tip';
          if (task.groupId.length > 0) todoEle.style.borderRadius = '0px 0px 5px 5px';
          task.groupId.forEach(tag => {
            const groupIndex = getTodoListContent().groups.findIndex(group => group.id === tag);
            const groupEleBlock = document.createElement('div');
            groupEleBlock.className = 'sa-todo-list-ele-group_tip-block';
            groupEleBlock.style.backgroundColor = getTodoListContent().groups[groupIndex].color;
            todoEle_groupTip.appendChild(groupEleBlock);
          });
          const todoEle_card = document.createElement('div');
          todoEle_card.className = 'sa-todo-list-ele-titleDiv';
          const todoEleName = document.createElement('span');
          todoEleName.className = 'sa-todo-list-ele-title';
          todoEleName.textContent = currentTask.name;
          const todoEleDelLine = document.createElement('div');
          todoEleDelLine.textContent = currentTask.name;
          todoEleDelLine.style.setProperty('--width', getTextWidth(currentTask.name, '30px', 15));
          if (currentTask.steps.length != 0) {
            todoEleDelLine.style.marginLeft = '75px';
          } else {
            todoEleDelLine.style.marginLeft = '40px';
          }
          todoEleDelLine.className = 'sa-todo-list-ele-title sa-todo-list-ele-title-rmLine';
          const todoEleSetDone = document.createElement('img');
          todoEleSetDone.src = getTodoListContent().tasks[index].done ? _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
          todoEleSetDone.className = 'sa-todo-list-ele-done';
          todoEleSetDone.style.backgroundColor = currentTask.color;
          const todoEleEditButton = document.createElement('img');
          todoEleEditButton.src = _edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
          todoEleEditButton.className = 'sa-todo-list-ele-done';
          todoEleEditButton.style.backgroundColor = currentTask.color;
          todoEleEditButton.onclick = () => {
            addModal(task);
          };
          const todoEleRemoveButton = document.createElement('img');
          todoEleRemoveButton.src = _remove_svg__WEBPACK_IMPORTED_MODULE_5___default.a;
          todoEleRemoveButton.className = 'sa-todo-list-ele-done';
          todoEleRemoveButton.style.backgroundColor = currentTask.color;
          todoEleRemoveButton.onclick = () => {
            const originTodo = getTodoListContent();
            originTodo.tasks.splice(index, 1);
            createCommentToStage(getFormatComment(originTodo));
          };
          const todoEleDate = document.createElement('span');
          todoEleDate.style.color = 'white';
          todoEleDate.textContent = getFormattedDateRange(currentTask.startTime, currentTask.endTime);
          const todoEleStepsContent = document.createElement('ul');
          const _spawnSteps = function spawnSteps() {
            let needGetLatest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (needGetLatest) currentTask = getTodoListContent().tasks[index];
            const todoEleStepsContentMain = document.createElement('li');
            todoEleStepsContentMain.className = 'sa-todo-list-ele-steps-main';
            todoEleStepsContent.className = 'sa-todo-list-ele-steps';
            todoEleStepsContent.id = currentTask.id;
            if (currentTask.steps.length != 0) {
              for (let needDone = 0; needDone <= 1; needDone += 1) {
                if (needDone && !!currentTask.steps.find(step => step.done)) {
                  const lineDiv = document.createElement('li');
                  lineDiv.className = 'sa-todo-list-ele-line';
                  const text = document.createElement('span');
                  text.className = 'sa-todo-list-ele-line-text';
                  text.textContent = msg('done');
                  const line = document.createElement('hr');
                  line.className = 'sa-todo-list-ele-line-line';
                  lineDiv.appendChild(text);
                  lineDiv.appendChild(line);
                  todoEleStepsContentMain.appendChild(lineDiv);
                }
                currentTask.steps.forEach((step, indexStep) => {
                  if (step.done == needDone) {
                    const todoEleStep = document.createElement('li');
                    todoEleStep.className = 'sa-todo-list-ele-steps-li';
                    const todoEleSetDoneStep = document.createElement('img');
                    todoEleSetDoneStep.src = needDone ? _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
                    todoEleSetDoneStep.className = 'sa-todo-list-ele-done';
                    todoEleSetDoneStep.style.backgroundColor = currentTask.color;
                    todoEleSetDoneStep.onclick = () => {
                      const todos = getTodoListContent();
                      todos.tasks[index].steps[indexStep].done = !todos.tasks[index].steps[indexStep].done;
                      createCommentToStage(getFormatComment(todos), false);
                      todoEleStepsContent.innerHTML = '';
                      _spawnSteps(true);
                    };
                    const todoEleStep_Text = document.createElement('span');
                    todoEleStep_Text.textContent = "".concat(indexStep + 1, ".").concat(step.text);
                    if (needDone) todoEleStep_Text.style.opacity = 0.5;
                    todoEleStep_Text.style.color = 'white';
                    todoEleStep.appendChild(todoEleSetDoneStep);
                    todoEleStep.appendChild(todoEleStep_Text);
                    todoEleStepsContentMain.appendChild(todoEleStep);
                  }
                });
              }
            }
            todoEleStepsContent.appendChild(todoEleStepsContentMain);
          };
          _spawnSteps();
          todoEle.style.backgroundColor = currentTask.color + alpha;
          const refreshTodoStyle = () => {
            const isDone = getTodoListContent().tasks[index].done;
            if (isDone) {
              todoEleDelLine.style.width = '';
              todoEleName.style.opacity = 0.5;
            } else {
              todoEleDelLine.style.width = '0px';
              todoEleName.style.opacity = 1;
            }
          };
          const todoEleDropdown = document.createElement('img');
          todoEleDropdown.src = _dropdown_arrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
          todoEleDropdown.className = 'sa-todo-list-ele-titleDiv-dropdown';
          const refreshDropdown_Steps = () => {
            todoEleDropdown.style.transform = isHide ? 'rotate(180deg)' : 'rotate(0deg)';
            todoEleStepsContent.style.gridTemplateRows = isHide ? '0fr' : '1fr';
          };
          todoEleSetDone.onclick = () => {
            const todos = getTodoListContent();
            todos.tasks[index].done = !todos.tasks[index].done;
            todoEleSetDone.src = todos.tasks[index].done ? _undone_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _done_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
            createCommentToStage(getFormatComment(todos), false);
            refreshTodoStyle();
          };
          todoEleDropdown.onclick = () => {
            isHide = !isHide;
            refreshDropdown_Steps();
          };
          todoList.appendChild(todoEle_groupTip);
          if (currentTask.steps.length != 0) todoEle_card.appendChild(todoEleDropdown);
          todoEle_card.appendChild(todoEleSetDone);
          todoEle_card.appendChild(todoEleName);
          todoEle_card.appendChild(todoEleDelLine);
          todoEle_card.appendChild(todoEleRemoveButton);
          todoEle_card.appendChild(todoEleEditButton);
          todoEle.appendChild(todoEle_card);
          todoEle.appendChild(todoEleDate);
          todoEle.appendChild(todoEleStepsContent);
          refreshDropdown_Steps();
          refreshTodoStyle();
          todoList.appendChild(todoEle);
        });
      }
    } catch (e) {
      console.warn('Todo List can\'t display: ' + e.stack);
    }
    const addButton = document.createElement('button');
    addButton.className = 'sa-todo-add-todo';
    addButton.textContent = msg('add');
    addButton.onclick = () => {
      addModal();
    };
    if (isVSCL) content.appendChild(title);
    if (groupBar) content.appendChild(groupBar);
    content.appendChild(todoList);
    content.appendChild(addButton);
    return content;
  };

  // ===== 其他函数保持不变 =====
  const createCommentToStage = function createCommentToStage(content) {
    let needRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const vm = addon.tab.traps.vm;
    try {
      delete vm.runtime.getTargetForStage().comments[COMMENT_ID];
      vm.runtime.getTargetForStage().createComment(COMMENT_ID, null, content, 50, 50, 350, 150, false);
    } catch (e) {
      console.warn("Can't remove comment, may it's doesn't exist?");
    }
    if (needRefresh) {
      if (Object(_tools_AEsettings_index_js__WEBPACK_IMPORTED_MODULE_8__["getSetting"])('EnableVSCodeLayout')) {
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_6__["default"].clearContent();
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_6__["default"].setContent(createSideBarElements());
      } else {
        const content = document.querySelector("[class*='sa-todo-modal-content']");
        if (content) {
          content.childNodes.forEach(ele => ele.remove());
          content.appendChild(createSideBarElements());
        }
      }
    }
  };
  const getTodoList = () => {
    const vm = addon.tab.traps.vm;
    return vm.runtime.getTargetForStage().comments[COMMENT_ID] || getFormatComment(emptyTodo);
  };
  const getTodoListContent = () => {
    try {
      return JSON.parse(getTodoList()['text'].split(POINT)[1]);
    } catch (e) {
      return emptyTodo;
    }
  };
  const addNewTodo = config => {
    const editTodo = getTodoListContent();
    config = JSON.parse(JSON.stringify(config).replaceAll(POINT, "Why? ".concat(POINT.split('').join(' '), " is key word, how did you found it?")));
    if (config.mode === 1) {
      editTodo.groups = [...editTodo.groups, {
        id: config.id || generateId(),
        name: config.name || msg("new-group"),
        color: config.color || '#0099ff'
      }];
    } else if (config.mode === 2) {
      editTodo.tasks = [...editTodo.tasks, {
        id: config.id || generateId(),
        name: config.name || msg("new-task"),
        startTime: config.task.startTime || Date.now(),
        endTime: config.task.endTime || Date.now() + 100000086,
        done: config.task.done || false,
        groupId: config.task.tags || [],
        color: config.color || "#0099ff",
        steps: config.task.steps || []
      }];
    }
    createCommentToStage(getFormatComment(editTodo));
  };
  const replaceTodo = config => {
    const editTodo = getTodoListContent();
    let editIndex = 0;
    config = JSON.parse(JSON.stringify(config).replaceAll(POINT, "Why? ".concat(POINT.split('').join(' '), " is key word, how did you found it?")));
    editIndex = editTodo.tasks.findIndex(task => task.id === config.id);
    editTodo.tasks[editIndex] = {
      id: config.id || generateId(),
      name: config.name || msg("New Group"),
      startTime: config.task.startTime || Date.now(),
      endTime: config.task.endTime || Date.now() + 100000086,
      done: config.task.done || false,
      groupId: config.task.tags || [],
      color: config.color || "#0099ff",
      steps: config.task.steps || []
    };
    createCommentToStage(getFormatComment(editTodo));
  };

  // ===== 在 Edit 菜单中添加 Todo 选项 =====
  while (true) {
    try {
      const editMenu = document.getElementById('edit');
      if (editMenu) {
        if (!editMenu.querySelector('.sa-todo-menu-item')) {
          const existingItems = editMenu.querySelectorAll('li');
          let lastItem = null;
          if (existingItems.length > 0) {
            lastItem = existingItems[existingItems.length - 1];
          }
          const menuItem = document.createElement('li');
          menuItem.className = 'sa-todo-menu-item';
          if (lastItem) {
            menuItem.className = lastItem.className + ' sa-todo-menu-item';
            const computedStyle = window.getComputedStyle(lastItem);
            menuItem.style.cssText = "\n                            display: ".concat(computedStyle.display, ";\n                            align-items: ").concat(computedStyle.alignItems, ";\n                            padding: ").concat(computedStyle.padding, ";\n                            cursor: pointer;\n                            font-size: ").concat(computedStyle.fontSize, ";\n                            color: ").concat(computedStyle.color, ";\n                            min-height: ").concat(computedStyle.minHeight, ";\n                            transition: background 0.1s ease;\n                        ");
          } else {
            menuItem.style.cssText = "\n                            display: flex;\n                            align-items: center;\n                            padding: 4px 16px;\n                            cursor: pointer;\n                            font-size: 0.85rem;\n                            color: #575e75;\n                            min-height: 36px;\n                            transition: background 0.1s ease;\n                        ";
          }
          const textSpan = document.createElement('span');
          textSpan.textContent = msg('todo');
          menuItem.appendChild(textSpan);
          menuItem.addEventListener('mouseenter', () => {
            menuItem.style.background = 'var(--ui-black-transparent)';
          });
          menuItem.addEventListener('mouseleave', () => {
            menuItem.style.background = '';
          });
          menuItem.addEventListener('click', e => {
            e.stopPropagation();
            try {
              if (addon && addon.tab && addon.tab.redux) {
                addon.tab.redux.dispatch({
                  type: 'scratch-gui/menus/CLOSE_MENU',
                  menu: 'editMenu'
                });
                addon.tab.redux.dispatch({
                  type: 'scratch-gui/menus/CLOSE_EDIT_MENU'
                });
              }
            } catch (err) {
              console.log('[Todo] Redux error:', err);
            }
            setTimeout(() => {
              const _addon$tab$createModa2 = addon.tab.createModal(msg('title', {
                  project: PROJECT_NAME.toString()
                }), {
                  isOpen: true,
                  useEditorClasses: true
                }),
                backdrop = _addon$tab$createModa2.backdrop,
                container = _addon$tab$createModa2.container,
                content = _addon$tab$createModa2.content,
                closeButton = _addon$tab$createModa2.closeButton,
                remove = _addon$tab$createModa2.remove;
              container.classList.add('sa-todo-modal-popup');
              content.classList.add('sa-todo-modal-content');
              content.appendChild(createSideBarElements());
              backdrop.addEventListener('click', remove);
              closeButton.addEventListener('click', remove);
            }, 100);
          });
          editMenu.appendChild(menuItem);
        }
      }
      await new Promise(resolve => setTimeout(resolve, 0));
    } catch (e) {
      console.warn(e);
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
});

/***/ }),

/***/ "./src/addons/tools/AEsettings/index.js":
/*!**********************************************!*\
  !*** ./src/addons/tools/AEsettings/index.js ***!
  \**********************************************/
/*! exports provided: getSetting, getThemeMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeMode", function() { return getThemeMode; });
const getSetting = id => {
  try {
    const settings = JSON.parse(localStorage.getItem('AESettings')) || {};
    if (!settings[id]) return false;
    return settings[id];
  } catch (e) {
    console.error('Failed to get setting:', e);
    return false;
  }
};

/**
 * @returns {'dark' | 'light'}
 */
const getThemeMode = () => {
  try {
    const tw_gui = JSON.parse(localStorage.getItem('tw:theme'));
    return tw_gui.gui || 'dark';
  } catch (e) {
    return 'dark';
  }
};

/***/ }),

/***/ "./src/addons/tools/AddToBar/index.js":
/*!********************************************!*\
  !*** ./src/addons/tools/AddToBar/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddToBar; });
/* harmony import */ var _AEsettings_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AEsettings/index.js */ "./src/addons/tools/AEsettings/index.js");
/* harmony import */ var _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/side-bar/side-bar.js */ "./src/addons/ui/side-bar/side-bar.js");


function isVSCodeLayoutEnabled() {
  return Object(_AEsettings_index_js__WEBPACK_IMPORTED_MODULE_0__["getSetting"])('EnableVSCodeLayout');
}
const TAB_BUTTON_CLASS = 'ae-tab-button';
const CONTAINER_CLASS = 'ae-addons-list';
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const el = document.createElement('style');
  el.textContent = "\n.".concat(TAB_BUTTON_CLASS, " {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  gap: 0.5rem;\n  white-space: nowrap;\n  padding: 0.2rem 0.5rem;\n  font-family: inherit;\n  font-size: 12px;\n  font-weight: bold;\n  background-color: var(--ui-white);\n  border: 1px solid var(--ui-black-transparent);\n  color: var(--text-primary);\n  border-radius: 4px;\n  height: 1.5rem;\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n.").concat(TAB_BUTTON_CLASS, ":hover {\n  border-color: var(--motion-primary);\n}\n\n/* \u2500\u2500 Base container (horizontal, for non-VSCode layout) \u2500\u2500 */\n.").concat(CONTAINER_CLASS, " {\n  display: flex;\n  align-items: center;\n  margin: auto 0;\n  gap: 5px;\n  margin-left: 1em;\n}\n\n/* \u2500\u2500 VSCode layout: container (column, fits the 41px sidebar) \u2500\u2500 */\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " {\n  flex-direction: column !important;\n  gap: 0 !important;\n  margin: 0 auto !important;\n  width: 100%;\n  flex-shrink: 0;\n}\n\n/* \u2500\u2500 VSCode layout: icon tab button \u2500\u2500 */\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, " {\n  width: 40px;\n  height: 30px;\n  font-size: 0;\n  background-color: #00000000;\n  border: 0;\n  border-radius: 0 !important;\n  margin: 0 !important;\n  padding: 20px 0 !important;\n  gap: 0;\n  flex-direction: column;\n  position: relative;\n}\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, ":hover {\n  border-color: transparent;\n}\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, " img {\n  width: 24px;\n  height: 22px;\n  margin: 0 !important;\n  filter: grayscale(100%);\n}\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, ":hover img {\n  filter: brightness(150%) grayscale(100%);\n  -webkit-filter: brightness(150%) grayscale(100%);\n}\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, ".is-selected {\n  background-color: var(--ui-white) !important;\n  box-shadow: inset 3px 0px 0px 0px var(--looks-secondary) !important;\n}\n[class*=\"tabs\"][class*=\"vscodeList\"] .").concat(CONTAINER_CLASS, " .").concat(TAB_BUTTON_CLASS, ".is-selected img {\n  filter: grayscale(0%);\n}\n");
  document.head.appendChild(el);
}

/**
 * Centralized addon button injection.
 * Automatically handles re-injection on DOM refresh (project load, layout change, etc.)
 *
 * In VSCode layout: creates an icon tab button in the tab bar with SideBar integration.
 * In non-VSCode layout: creates a text button in the specified container.
 *
 * @param {object} addon - the addon's tab API object
 * @param {object} config
 * @param {string} config.id - unique SideBar plugin ID
 * @param {string|function} config.icon - icon URL or function that returns one
 * @param {string} config.text - button label for non-VSCode layout
 * @param {boolean} [config.vscOnly] - if true, skip non-VSCode button creation (VSCode only)
 * @param {function} [config.getContent] - returns a DOM element for SideBar content (VSCode only)
 * @param {function} [config.onActivate] - called when SideBar activates this addon (VSCode only)
 * @param {function} [config.onDeactivate] - called when SideBar deactivates this addon (VSCode only)
 * @param {function} [config.onClick] - called when button is clicked in non-VSCode layout
 */
async function AddToBar(addon, config) {
  injectStyles();
  const id = config.id,
    icon = config.icon,
    text = config.text,
    vscOnly = config.vscOnly,
    getContent = config.getContent,
    _onActivate = config.onActivate,
    _onDeactivate = config.onDeactivate,
    onClick = config.onClick;
  const vscode = isVSCodeLayoutEnabled();

  // vscOnly: skip entirely when not in VSCode layout
  if (vscOnly && !vscode) return;
  const tabListSelector = '[class*="react-tabs_react-tabs__tab-list"]';
  const tabAddonListSelector = CONTAINER_CLASS;

  // Create button
  const button = vscode ? document.createElement('li') : document.createElement('button');
  button.className = addon.tab.scratchClass('menu-bar_menu-bar-button', {
    others: TAB_BUTTON_CLASS
  });
  if (vscode) {
    const img = document.createElement('img');
    img.src = typeof icon === 'function' ? icon() : icon;
    img.draggable = false;
    img.alt = text;
    button.appendChild(img);
    const enableEffect = () => {
      button.classList.add('is-selected');
      button.setAttribute('aria-selected', 'true');
    };
    const unableEffect = () => {
      button.classList.remove('is-selected');
      button.setAttribute('aria-selected', 'false');
    };
    button.onclick = () => {
      if (_ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__["default"].getActivePlugin() === id) {
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__["default"].close();
        unableEffect();
        if (_onDeactivate) _onDeactivate();
      } else {
        if (getContent) {
          _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__["default"].register(id, getContent(), {
            onActivate: () => {
              enableEffect();
              if (_onActivate) _onActivate();
            },
            onDeactivate: () => {
              unableEffect();
              if (_onDeactivate) _onDeactivate();
            }
          });
        }
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__["default"].switchTo(id);
        _ui_side_bar_side_bar_js__WEBPACK_IMPORTED_MODULE_1__["default"].open();
        enableEffect();
      }
    };
  } else {
    button.textContent = text;
    button.title = text;
    button.addEventListener('click', () => {
      if (onClick) onClick();
    });
  }
  addon.tab.displayNoneWhileDisabled(button);
  while (true) {
    const tabs = await addon.tab.waitForElement(tabListSelector, {
      markAsSeen: true,
      reduxEvents: ['scratch-gui/mode/SET_PLAYER', 'fontsLoaded/SET_FONTS_LOADED', 'scratch-gui/locales/SELECT_LOCALE'],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    let container = document.querySelector(".".concat(tabAddonListSelector));
    if (!container) {
      // VSCode 布局：容器用 <li>（与 react-tabs Tab 一致）
      // 非 VSCode：容器用 <div>
      container = vscode ? document.createElement('li') : document.createElement('div');
      container.className = tabAddonListSelector;
      container.appendChild(button);
      // 通过共享空间机制注入，order=6（位于搜索框(5)之后、README 之前）
      if (tabs) addon.tab.appendToSharedSpace({
        space: 'afterTabs',
        element: container,
        order: 6
      });
    } else {
      container.appendChild(button);
    }
  }
}

/***/ }),

/***/ "./src/addons/ui/side-bar/side-bar.css":
/*!*********************************************!*\
  !*** ./src/addons/ui/side-bar/side-bar.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/src??postcss!./side-bar.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/ui/side-bar/side-bar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/addons/ui/side-bar/side-bar.js":
/*!********************************************!*\
  !*** ./src/addons/ui/side-bar/side-bar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var _redux_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux.js */ "./src/addons/redux.js");
/* harmony import */ var _side_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar.css */ "./src/addons/ui/side-bar/side-bar.css");
/* harmony import */ var _side_bar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_side_bar_css__WEBPACK_IMPORTED_MODULE_1__);


const getSideBar = () => {
  return document.querySelectorAll("[class*=gui_tab-panel]")[0];
};

// 全局单例实例
let instance = null;

// 项目加载相关的 action 类型
const PROJECT_LOAD_ACTIONS = ['scratch-gui/project-state/DONE_CREATING_NEW', 'scratch-gui/project-state/DONE_LOADING_VM_WITH_ID', 'scratch-gui/project-state/DONE_LOADING_VM_WITHOUT_ID', 'scratch-gui/project-state/DONE_REMIXING', 'scratch-gui/project-state/START_CREATING_NEW', 'scratch-gui/project-state/START_LOADING_VM_FILE_UPLOAD'];

// 插件注册表：pluginName -> { content, callbacks }
const pluginRegistry = new Map();

// 当前活动的插件名称
let activePlugin = null;
class SideBar {
  constructor(element) {
    // 如果传入元素，使用旧 API 模式
    if (element) {
      // 确保实例存在
      if (!instance) {
        instance = new SideBarInternal();
      }
      // 直接设置内容并打开
      instance.setContent(element);
      instance.open();
      // 返回实例，以便兼容旧代码
      return instance;
    }

    // 如果没有传入元素，返回全局实例（用于静态方法调用）
    if (!instance) {
      instance = new SideBarInternal();
    }
    return instance;
  }

  /**
   * 注册插件内容和回调
   */
  static register(pluginName, content) {
    let callbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    pluginRegistry.set(pluginName, {
      content,
      callbacks: {
        onActivate: callbacks.onActivate || (() => {}),
        onDeactivate: callbacks.onDeactivate || (() => {})
      }
    });
  }

  /**
   * 切换到指定插件
   */
  static switchTo(pluginName) {
    if (!instance) {
      instance = new SideBarInternal();
    }
    const plugin = pluginRegistry.get(pluginName);
    if (!plugin) {
      console.warn("SideBar: Plugin \"".concat(pluginName, "\" not registered"));
      return;
    }

    // 如果当前有活动插件，先停用它
    if (activePlugin && activePlugin !== pluginName) {
      const currentPlugin = pluginRegistry.get(activePlugin);
      if (currentPlugin && currentPlugin.callbacks.onDeactivate) {
        currentPlugin.callbacks.onDeactivate();
      }
    }

    // 切换到新插件
    instance.setContent(plugin.content);
    instance.open();
    activePlugin = pluginName;

    // 调用新插件的激活回调
    if (plugin.callbacks.onActivate) {
      plugin.callbacks.onActivate();
    }
  }

  /**
   * 关闭侧边栏
   */
  static close() {
    if (!instance) return;

    // 停用当前活动插件
    if (activePlugin) {
      const plugin = pluginRegistry.get(activePlugin);
      if (plugin && plugin.callbacks.onDeactivate) {
        plugin.callbacks.onDeactivate();
      }
      activePlugin = null;
    }
    instance.close();
  }

  /**
   * 打开侧边栏（保持当前内容）
   */
  static open() {
    if (!instance) {
      instance = new SideBarInternal();
    }
    instance.open();
  }

  /**
   * 检查侧边栏是否打开
   */
  static isOpen() {
    return instance ? instance.isOpen() : false;
  }

  /**
   * 获取当前活动插件名称
   */
  static getActivePlugin() {
    return activePlugin;
  }

  /**
   * 设置内容（兼容旧 API）
   */
  static setContent(content) {
    if (!instance) {
      instance = new SideBarInternal();
    }
    instance.setContent(content);
  }

  /**
   * 清空内容（兼容旧 API）
   */
  static clearContent() {
    if (!instance) return;
    instance.clearContent();
  }

  /**
   * 获取内容容器（兼容旧 API）
   */
  static getContentContainer() {
    return instance ? instance.getContentContainer() : null;
  }

  /**
   * 获取宽度（兼容旧 API）
   */
  static getWidth() {
    return instance ? instance.getWidth() : 300;
  }

  /**
   * 销毁侧边栏（仅用于彻底清理）
   */
  static destroy() {
    if (!instance) return;

    // 停用所有插件
    pluginRegistry.forEach(plugin => {
      if (plugin.callbacks.onDeactivate) {
        plugin.callbacks.onDeactivate();
      }
    });
    activePlugin = null;
    instance.destroy();
    instance = null;
  }
}

/**
 * SideBar 内部实现类
 */
class SideBarInternal {
  constructor() {
    this.DEFAULT_WIDTH = 350;
    this.MIN_WIDTH = 200;
    this.MAX_WIDTH = 600;
    this.currentWidth = this.DEFAULT_WIDTH;
    this.element = document.createElement("div");
    this.element.className = "addons-side-bar";
    this.element.style.cssText = "\n            position: relative;\n            top: 0;\n            left: 0;\n            width: ".concat(this.currentWidth, "px;\n            flex: 0 0 auto;\n            background-color: var(--ui-white);\n            z-index: 489;\n            display: none;\n            flex-direction: column;\n            overflow: hidden;\n            min-height: 0;\n            height: 100%;\n        ");
    this.contentContainer = document.createElement("div");
    this.contentContainer.style.cssText = "\n            flex: 1;\n            overflow-y: auto;\n            overflow-x: hidden;\n            position: relative;\n            background: var(--ui-white);\n            min-height: 0;\n            max-height: 100%;\n            display: flex;\n        ";
    this.element.appendChild(this.contentContainer);
    this.resizeHandle = document.createElement("div");
    this.resizeHandle.style.cssText = "\n            position: absolute;\n            right: 0;\n            top: 0;\n            width: 4px;\n            height: 100%;\n            cursor: ew-resize;\n            background: transparent;\n            z-index: 10;\n        ";
    this.isResizing = false;
    this.startX = 0;
    this.startWidth = 0;

    // 绑定方法以便后续移除
    this._boundStartResize = e => this.startResize(e);
    this._boundDoResize = e => this.doResize(e);
    this._boundEndResize = () => this.endResize();
    this._boundHandleMouseEnter = () => {
      this.resizeHandle.style.background = "var(--looks-secondary)";
    };
    this._boundHandleMouseLeave = () => {
      if (!this.isResizing && !this._cornerResizing) {
        this.resizeHandle.style.background = "transparent";
      }
    };
    this.resizeHandle.addEventListener("mouseenter", this._boundHandleMouseEnter);
    this.resizeHandle.addEventListener("mouseleave", this._boundHandleMouseLeave);
    this.resizeHandle.addEventListener("mousedown", this._boundStartResize);
    document.addEventListener("mousemove", this._boundDoResize);
    document.addEventListener("mouseup", this._boundEndResize);
    this.element.appendChild(this.resizeHandle);

    // 注册到全局对象以支持角落检测
    if (!window.aeResizeHandles) {
      window.aeResizeHandles = {};
    }
    window.aeResizeHandles.sideBar = {
      instance: this,
      isOpen: () => this.isOpen(),
      resize: deltaX => {
        this.currentWidth = Math.max(this.MIN_WIDTH, Math.min(this.MAX_WIDTH, this.currentWidth + deltaX));
        this.element.style.width = "".concat(this.currentWidth, "px");
        if (this.extensionButton) {
          this.extensionButton.style.marginLeft = this.currentWidth + "px";
        }
      }
    };

    // 角落检测相关的状态
    this._inCorner = false;
    this._cornerResizing = false;
    this._cornerStartX = 0;
    this._cornerStartY = 0;
    this._cornerStartWidth = 0;
    this._cornerStartHeight = 0;

    // 监听标签页切换
    this._boundHandleTabChange = () => {
      if (this.isOpen() && this.isCostumeTabOpen()) {
        this.close();
        this.wasOpenBefore = true;
      } else if (!this.isOpen() && this.wasOpenBefore && !this.isCostumeTabOpen()) {
        this.wasOpenBefore = false;
        this.open();
      }
    };

    // 使用MutationObserver监听tab-panel的class变化
    this._tabObserver = new MutationObserver(() => {
      this._boundHandleTabChange();
    });
    setTimeout(() => {
      const tabPanel = document.querySelector("[class*=gui_tab-panel]");
      if (tabPanel) {
        this._tabObserver.observe(tabPanel, {
          attributes: true,
          attributeFilter: ['class']
        });
      }
    }, 1000);
    this.wasOpenBefore = false;
    this.extensionButton = document.querySelector("[class*=gui_extension-button-container]");
    if (getSideBar()) getSideBar().prepend(this.element);

    // 使用防抖函数处理频繁的布局更新请求
    this._debounceTimer = null;
    this._scheduleUpdate = () => {
      if (this._debounceTimer) {
        clearTimeout(this._debounceTimer);
      }
      this._debounceTimer = setTimeout(() => {
        this.updateHeight();
        this._debounceTimer = null;
      }, 100);
    };

    // 监听 Bottom Panel 的自定义事件，用于在 Bottom Panel 打开/关闭时触发布局更新
    this._boundHandleBottomPanelEvent = () => {
      this._scheduleUpdate();
    };
    window.addEventListener('bottomPanelResized', this._boundHandleBottomPanelEvent);
    window.addEventListener('bottomPanelOpened', this._boundHandleBottomPanelEvent);
    window.addEventListener('bottomPanelClosed', this._boundHandleBottomPanelEvent);

    // 监听项目加载事件，在重载或打开新作品时自动关闭侧边栏
    this._boundHandleProjectLoad = e => {
      const action = e.detail.action;
      if (PROJECT_LOAD_ACTIONS.includes(action.type) && this.isOpen()) {
        // 调用当前活动插件的 onDeactivate 回调
        if (activePlugin) {
          const plugin = pluginRegistry.get(activePlugin);
          if (plugin && plugin.callbacks.onDeactivate) {
            plugin.callbacks.onDeactivate();
          }
          activePlugin = null;
        }
        this.close();
      }
    };
    _redux_js__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('statechanged', this._boundHandleProjectLoad);

    // 全局角落检测
    this._boundGlobalMouseMove = e => {
      if (this._cornerResizing) {
        return; // 正在角落拖拽中，交给 doCornerResize 处理
      }
      if (this.isResizing) {
        return; // 正在拖拽中，不需要检测
      }
      const inCorner = this.isInCorner(e.clientX, e.clientY);
      if (inCorner && !this._inCorner) {
        this._inCorner = true;
        document.body.style.cursor = "crosshair";
      } else if (!inCorner && this._inCorner) {
        this._inCorner = false;
        document.body.style.cursor = "";
      }
    };
    this._boundGlobalMouseDown = e => {
      if (this._inCorner) {
        e.preventDefault();
        this.startCornerResize(e);
      }
    };
    this._boundGlobalMouseUp = e => {
      if (this._cornerResizing) {
        this.endCornerResize();
      }
    };
    document.addEventListener("mousemove", this._boundGlobalMouseMove);
    document.addEventListener("mousedown", this._boundGlobalMouseDown);
    document.addEventListener("mouseup", this._boundGlobalMouseUp);
  }

  /**
   * 更新侧边栏布局
   * 由于使用 height: 100%，主要确保内容容器正确处理滚动
   */
  updateHeight() {
    // 只在 Sidebar 打开时更新
    if (!this.isOpen()) return;

    // 确保内容容器的样式正确
    this.contentContainer.style.flex = '1';
    this.contentContainer.style.minHeight = '0';
    this.contentContainer.style.overflowY = 'auto';
    this.contentContainer.style.overflowX = 'hidden';

    // 触发一次重排，让浏览器重新计算布局
    void this.element.offsetHeight;
  }

  /**
   * 检测鼠标是否在角落区域
   */
  isInCorner(mouseX, mouseY) {
    var _window$aeResizeHandl, _window$aeResizeHandl2;
    if (!this.isOpen()) return false;
    const sidebarRect = this.element.getBoundingClientRect();
    const bottomPanel = (_window$aeResizeHandl = window.aeResizeHandles) === null || _window$aeResizeHandl === void 0 ? void 0 : (_window$aeResizeHandl2 = _window$aeResizeHandl.bottomPanel) === null || _window$aeResizeHandl2 === void 0 ? void 0 : _window$aeResizeHandl2.instance;
    if (!bottomPanel || !bottomPanel.isOpen()) return false;
    const bottomPanelRect = bottomPanel.buttonBar.getBoundingClientRect();

    // 检查鼠标是否在 Sidebar 的右边缘附近
    const nearSidebarRight = mouseX >= sidebarRect.right - 8 && mouseX <= sidebarRect.right + 4;

    // 检查鼠标是否在 BottomPanel 的上边缘附近（调整为 4px）
    const nearBottomPanelTop = mouseY >= bottomPanelRect.top - 6 && mouseY <= bottomPanelRect.top + 2;
    return nearSidebarRight && nearBottomPanelTop;
  }

  /**
   * 开始角落拖拽
   */
  startCornerResize(e) {
    var _window$aeResizeHandl3, _window$aeResizeHandl4;
    this._cornerResizing = true;
    this._inCorner = true; // 确保 _inCorner 状态正确
    this._cornerStartX = e.clientX;
    this._cornerStartY = e.clientY;
    this._cornerStartWidth = this.currentWidth;
    const bottomPanel = (_window$aeResizeHandl3 = window.aeResizeHandles) === null || _window$aeResizeHandl3 === void 0 ? void 0 : (_window$aeResizeHandl4 = _window$aeResizeHandl3.bottomPanel) === null || _window$aeResizeHandl4 === void 0 ? void 0 : _window$aeResizeHandl4.instance;
    if (bottomPanel) {
      this._cornerStartHeight = bottomPanel.currentHeight;
    }
    document.body.style.cursor = "crosshair";
    document.body.style.userSelect = "none";
    this.resizeHandle.style.background = "var(--looks-secondary)";
    if (bottomPanel && bottomPanel.resizeHandle) {
      bottomPanel.resizeHandle.style.background = "var(--looks-secondary)";
    }
  }

  /**
   * 执行角落拖拽
   */
  doCornerResize(e) {
    var _window$aeResizeHandl5, _window$aeResizeHandl6;
    if (!this._cornerResizing) return;
    const deltaX = e.clientX - this._cornerStartX;
    const deltaY = this._cornerStartY - e.clientY; // 注意：BottomPanel 的高度是向上拖拽增加

    // 调整 Sidebar 宽度
    this.currentWidth = Math.max(this.MIN_WIDTH, Math.min(this.MAX_WIDTH, this._cornerStartWidth + deltaX));
    this.element.style.width = "".concat(this.currentWidth, "px");
    if (this.extensionButton) {
      this.extensionButton.style.marginLeft = this.currentWidth + "px";
    }

    // 调整 BottomPanel 高度
    const bottomPanel = (_window$aeResizeHandl5 = window.aeResizeHandles) === null || _window$aeResizeHandl5 === void 0 ? void 0 : (_window$aeResizeHandl6 = _window$aeResizeHandl5.bottomPanel) === null || _window$aeResizeHandl6 === void 0 ? void 0 : _window$aeResizeHandl6.instance;
    if (bottomPanel) {
      bottomPanel.currentHeight = Math.max(bottomPanel.MIN_HEIGHT, Math.min(bottomPanel.MAX_HEIGHT, this._cornerStartHeight + deltaY));
      bottomPanel.element.style.height = "".concat(bottomPanel.currentHeight, "px");
      bottomPanel.element.style.maxHeight = "".concat(bottomPanel.currentHeight, "px");
    }
  }

  /**
   * 结束角落拖拽
   */
  endCornerResize() {
    var _window$aeResizeHandl7, _window$aeResizeHandl8;
    if (!this._cornerResizing) return;
    this._cornerResizing = false;
    this._inCorner = false; // 清理 _inCorner 状态
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    this.resizeHandle.style.background = "transparent";
    const bottomPanel = (_window$aeResizeHandl7 = window.aeResizeHandles) === null || _window$aeResizeHandl7 === void 0 ? void 0 : (_window$aeResizeHandl8 = _window$aeResizeHandl7.bottomPanel) === null || _window$aeResizeHandl8 === void 0 ? void 0 : _window$aeResizeHandl8.instance;
    if (bottomPanel && bottomPanel.resizeHandle) {
      bottomPanel.resizeHandle.style.background = "transparent";
      // 确保 BottomPanel 的 isResizing 状态也被清理
      bottomPanel.isResizing = false;
    }
    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new CustomEvent('bottomPanelResized', {
      detail: {
        height: (bottomPanel === null || bottomPanel === void 0 ? void 0 : bottomPanel.currentHeight) || 200
      }
    }));
  }

  /**
   * 检测CostumeTab是否打开
   */
  isCostumeTabOpen() {
    // 检查是否在costume标签页
    const costumeTab = document.querySelector("[class*='costume-tab']");
    if (costumeTab) {
      const style = window.getComputedStyle(costumeTab);
      if (style.display !== 'none') {
        return true;
      }
    }
    return false;
  }

  /**
   * 设置侧边栏内容
   * @param {Element} content - 要显示的内容元素
   */
  setContent(content) {
    this.clearContent();
    this.contentContainer.appendChild(content);
  }

  /**
   * 清空侧边栏内容
   */
  clearContent() {
    this.contentContainer.innerHTML = "";
  }

  /**
   * 获取内容容器
   */
  getContentContainer() {
    return this.contentContainer;
  }

  /**
   * 销毁侧边栏实例
   */
  destroy() {
    // 移除事件监听器
    this.resizeHandle.removeEventListener("mouseenter", this._boundHandleMouseEnter);
    this.resizeHandle.removeEventListener("mouseleave", this._boundHandleMouseLeave);
    this.resizeHandle.removeEventListener("mousedown", this._boundStartResize);
    document.removeEventListener("mousemove", this._boundDoResize);
    document.removeEventListener("mouseup", this._boundEndResize);

    // 移除全局角落检测监听器
    document.removeEventListener("mousemove", this._boundGlobalMouseMove);
    document.removeEventListener("mousedown", this._boundGlobalMouseDown);
    document.removeEventListener("mouseup", this._boundGlobalMouseUp);

    // 从全局对象中移除 Sidebar 的引用
    if (window.aeResizeHandles && window.aeResizeHandles.sideBar) {
      delete window.aeResizeHandles.sideBar;
    }

    // 停止 MutationObserver
    if (this._tabObserver) {
      this._tabObserver.disconnect();
      this._tabObserver = null;
    }

    // 清除防抖定时器
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }

    // 移除 bottomPanel 自定义事件监听器
    window.removeEventListener('bottomPanelResized', this._boundHandleBottomPanelEvent);
    window.removeEventListener('bottomPanelOpened', this._boundHandleBottomPanelEvent);
    window.removeEventListener('bottomPanelClosed', this._boundHandleBottomPanelEvent);
    this._boundHandleBottomPanelEvent = null;

    // 移除 Redux 事件监听器
    if (this._boundHandleProjectLoad) {
      _redux_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeEventListener('statechanged', this._boundHandleProjectLoad);
      this._boundHandleProjectLoad = null;
    }

    // 重置 extensionButton
    if (this.extensionButton) {
      this.extensionButton.style.marginLeft = "0px";
      this.extensionButton.style.left = "0px";
    }

    // 移除 DOM 元素
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
  startResize(e) {
    this.isResizing = true;
    this.startX = e.clientX;
    this.startWidth = this.currentWidth;
    this.resizeHandle.style.background = "var(--looks-secondary)";
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  }
  doResize(e) {
    // 如果正在角落拖拽，交给 cornerResize 处理
    if (this._cornerResizing) {
      this.doCornerResize(e);
      return;
    }
    if (!this.isResizing) return;
    const deltaX = e.clientX - this.startX;
    this.currentWidth = Math.max(this.MIN_WIDTH, Math.min(this.MAX_WIDTH, this.startWidth + deltaX));
    this.element.style.width = "".concat(this.currentWidth, "px");
    if (this.extensionButton) {
      this.extensionButton.style.marginLeft = this.currentWidth + "px";
    }
  }
  endResize() {
    if (this._cornerResizing) {
      this.endCornerResize();
      return;
    }
    if (this.isResizing) {
      this.isResizing = false;
      this.resizeHandle.style.background = "transparent";
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      window.dispatchEvent(new Event("resize"));
    }
  }
  open() {
    if (!document.contains(this.element)) {
      const sidebar = getSideBar();
      if (sidebar) sidebar.prepend(this.element);
      this._reobserveTabPanel();
    }
    this.element.style.display = "flex";
    if (this.extensionButton) {
      this.extensionButton.style.marginLeft = this.currentWidth + "px";
    }
    window.dispatchEvent(new Event("resize"));
  }
  _reobserveTabPanel() {
    if (this._tabObserver) {
      this._tabObserver.disconnect();
    } else {
      this._tabObserver = new MutationObserver(() => this._boundHandleTabChange());
    }
    const tabPanel = document.querySelector("[class*=gui_tab-panel]");
    if (tabPanel) {
      this._tabObserver.observe(tabPanel, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }
  close() {
    this.element.style.display = "none";
    if (this.extensionButton) {
      this.extensionButton.style.marginLeft = "0px";
    }
    window.dispatchEvent(new Event("resize"));
  }
  isOpen() {
    return this.element.style.display !== "none";
  }
  getWidth() {
    return this.currentWidth;
  }
}

/***/ }),

/***/ "./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg":
/*!***********************************************************************!*\
  !*** ./src/lib/tw-recolor/build.js!./src/addons/addons/todo/logo.svg ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    const original = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"476.7054138183594\" height=\"371.1246871948242\" viewBox=\"0 0 476.7054138183594 371.1246871948242\" fill=\"none\"><path d=\"M247.562 299.853C247.018 300.671 246.386 301.447 245.665 302.168L196.168 351.665C193.695 354.138 190.573 355.567 187.35 355.952C186.345 356.105 185.327 356.156 184.314 356.105C181.213 355.947 178.152 354.832 175.611 352.76C175.218 352.44 174.838 352.096 174.472 351.73L124.975 302.233C124.899 302.157 124.824 302.081 124.75 302.004C124.021 301.244 123.389 300.427 122.851 299.566C122.848 299.561 122.844 299.555 122.841 299.55L122.84 299.549L19.3933 196.103C13.5355 190.245 13.5355 180.747 19.3933 174.89L68.8903 125.393C74.7481 119.535 84.2454 119.535 90.1032 125.393L185.353 220.642L201.836 204.159L386.602 19.3937C390.263 15.7326 395.346 14.3596 400.073 15.2749C400.191 15.2978 400.309 15.3221 400.427 15.3478C403.134 15.9399 405.71 17.2885 407.815 19.3937L457.312 68.8907C463.17 74.7485 463.17 84.2458 457.312 90.1036L247.562 299.853Z\" stroke=\"#855CD6\" stroke-width=\"30\"    fill-rule=\"evenodd\"  fill=\"#855CD6\" fill-opacity=\"0\"></path></svg>";

    const getSRC = () => {
        const recolored = typeof Recolor === 'object' ? (
            original.replace(/#855cd6/gi, Recolor.primary)
        ) : original;
        return 'data:image/svg+xml;,' + encodeURIComponent(recolored);
    };

    /* harmony default export */ __webpack_exports__["default"] = (getSRC);


/***/ })

}]);
//# sourceMappingURL=addon-entry-todo.js.map