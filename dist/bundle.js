/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xhr_js__ = __webpack_require__(2);
console.log("[app]: Loading all modules...");


var r = new __WEBPACK_IMPORTED_MODULE_0__xhr_js__["a" /* default */]('GET', 'https://httpbin.org/get')
r.setParams("Hello World");
r.send()
.then((response) => {
    console.log("[app]: Success")
    document.getElementById("element").innerHTML = response.params
})
.catch((error) => {
    console.log("[app]: Error")
    document.getElementById("element").innerHTML = error       
})





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Request {
    constructor(method, url){
        this.xhr = new XMLHttpRequest()
        this.xhr.open(method, url)
    }    

    setParams(params){
         this.params = params
    }
    getParams(){
         return this.params
    }

    setRequestHeader(header, value){
        this.xhr.setRequestHeader(header, value)
    }
    getRequestHeader(){
        return this.xhr.requestHeader
    }

    set responseType(type){
        this.xhr.responseType = type
    }
    get responseType(){
        return this.xhr.responseType
    }

    get allResponseHeaders(){
        return this.xhr.getAllResponseHeaders();
    }
    getResponseHeader(header){
        return this.xhr.getResponseHeader(header)
    }

    send(){
        if(this.params != null){
            console.log("[Request]: Params in request. Sending... ")
            return new Promise((resolve, reject) => {
                this.xhr.onreadystatechange = () => {
                    if(this.xhr.status == 200 && this.xhr.readyState == 4){
                        console.log("[Request]: Response received")
                        resolve(this);
                    }
                }
                this.xhr.send(this.params)
            })
        } else {
            console.log("[Request]: No params in request. Sending... ")
            return new Promise((resolve, reject) => {
                this.xhr.onreadystatechange = () => {
                    if(this.xhr.status == 200 && this.xhr.readyState == 4){
                        console.log("[Request]: Response received")
                        resolve(this.xhr)
                    }
                }
                this.xhr.send()
            })   
        }
    }   
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Request;


/***/ })
/******/ ]);