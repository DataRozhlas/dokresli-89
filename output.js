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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\nvar data = {\n  doziti: [{\n    \"year\": 1800,\n    \"value\": 30.46\n  }, {\n    \"year\": 1810,\n    \"value\": 30.62\n  }, {\n    \"year\": 1820,\n    \"value\": 30.81\n  }, {\n    \"year\": 1830,\n    \"value\": 30.91\n  }, {\n    \"year\": 1840,\n    \"value\": 30.98\n  }, {\n    \"year\": 1850,\n    \"value\": 31.1\n  }, {\n    \"year\": 1860,\n    \"value\": 29.91\n  }, {\n    \"year\": 1870,\n    \"value\": 31.09\n  }, {\n    \"year\": 1880,\n    \"value\": 31.59\n  }, {\n    \"year\": 1890,\n    \"value\": 32.01\n  }, {\n    \"year\": 1900,\n    \"value\": 32.04\n  }, {\n    \"year\": 1910,\n    \"value\": 34.29\n  }, {\n    \"year\": 1920,\n    \"value\": 34.46\n  }, {\n    \"year\": 1930,\n    \"value\": 38.64\n  }, {\n    \"year\": 1940,\n    \"value\": 40.74\n  }, {\n    \"year\": 1950,\n    \"value\": 47.72\n  }, {\n    \"year\": 1960,\n    \"value\": 49.92\n  }, {\n    \"year\": 1970,\n    \"value\": 59.19\n  }, {\n    \"year\": 1980,\n    \"value\": 62.55\n  }, {\n    \"year\": 1990,\n    \"value\": 65.1\n  }, {\n    \"year\": 2000,\n    \"value\": 66.82\n  }, {\n    \"year\": 2010,\n    \"value\": 70.33\n  }, {\n    \"year\": 2020,\n    \"value\": 73.34\n  }],\n  demokracie: [{\n    \"year\": 1820,\n    \"value\": 0.92\n  }, {\n    \"year\": 1830,\n    \"value\": 1.16\n  }, {\n    \"year\": 1840,\n    \"value\": 1.46\n  }, {\n    \"year\": 1850,\n    \"value\": 4.93\n  }, {\n    \"year\": 1860,\n    \"value\": 2.95\n  }, {\n    \"year\": 1870,\n    \"value\": 3.88\n  }, {\n    \"year\": 1880,\n    \"value\": 9.25\n  }, {\n    \"year\": 1890,\n    \"value\": 10.08\n  }, {\n    \"year\": 1900,\n    \"value\": 11.97\n  }, {\n    \"year\": 1910,\n    \"value\": 13.02\n  }, {\n    \"year\": 1920,\n    \"value\": 19.62\n  }, {\n    \"year\": 1930,\n    \"value\": 16.9\n  }, {\n    \"year\": 1940,\n    \"value\": 9.37\n  }, {\n    \"year\": 1950,\n    \"value\": 31.41\n  }, {\n    \"year\": 1960,\n    \"value\": 38.52\n  }, {\n    \"year\": 1970,\n    \"value\": 33.35\n  }, {\n    \"year\": 1980,\n    \"value\": 35.21\n  }, {\n    \"year\": 1990,\n    \"value\": 43.33\n  }, {\n    \"year\": 2000,\n    \"value\": 56.08\n  }, {\n    \"year\": 2010,\n    \"value\": 54.26\n  }],\n  katastrofy: [{\n    \"year\": \"1900\",\n    \"value\": 450.3313\n  }, {\n    \"year\": \"1910\",\n    \"value\": 333.7244\n  }, {\n    \"year\": \"1920\",\n    \"value\": 873.3432\n  }, {\n    \"year\": \"1930\",\n    \"value\": 970.6603\n  }, {\n    \"year\": \"1940\",\n    \"value\": 388.2758\n  }, {\n    \"year\": \"1950\",\n    \"value\": 213.81\n  }, {\n    \"year\": \"1960\",\n    \"value\": 175.6932\n  }, {\n    \"year\": \"1970\",\n    \"value\": 102.4111\n  }, {\n    \"year\": \"1980\",\n    \"value\": 85.4706\n  }, {\n    \"year\": \"1990\",\n    \"value\": 122.399\n  }, {\n    \"year\": \"2000\",\n    \"value\": 93.6641\n  }, {\n    \"year\": \"2010\",\n    \"value\": 64.978375\n  }],\n  deti: [{\n    \"year\": 1800,\n    \"value\": 43.3\n  }, {\n    \"year\": 1820,\n    \"value\": 42.7\n  }, {\n    \"year\": 1840,\n    \"value\": 40.4\n  }, {\n    \"year\": 1860,\n    \"value\": 41.4\n  }, {\n    \"year\": 1880,\n    \"value\": 38\n  }, {\n    \"year\": 1900,\n    \"value\": 36.2\n  }, {\n    \"year\": 1920,\n    \"value\": 32.1\n  }, {\n    \"year\": 1940,\n    \"value\": 23.9\n  }, {\n    \"year\": 1960,\n    \"value\": 18.5\n  }, {\n    \"year\": 1970,\n    \"value\": 14.49\n  }, {\n    \"year\": 1980,\n    \"value\": 11.64\n  }, {\n    \"year\": 1990,\n    \"value\": 9.06\n  }, {\n    \"year\": 2000,\n    \"value\": 7.59\n  }, {\n    \"year\": 2010,\n    \"value\": 5.17\n  }],\n  gramotnost: [{\n    \"year\": 1800,\n    \"value\": 12.05\n  }, {\n    \"year\": 1820,\n    \"value\": 12.05\n  }, {\n    \"year\": 1870,\n    \"value\": 18.74\n  }, {\n    \"year\": 1880,\n    \"value\": 19.63\n  }, {\n    \"year\": 1890,\n    \"value\": 20.52\n  }, {\n    \"year\": 1900,\n    \"value\": 21.4\n  }, {\n    \"year\": 1910,\n    \"value\": 26.45\n  }, {\n    \"year\": 1920,\n    \"value\": 31.62\n  }, {\n    \"year\": 1930,\n    \"value\": 32.53\n  }, {\n    \"year\": 1940,\n    \"value\": 41.88\n  }, {\n    \"year\": 1950,\n    \"value\": 35.96\n  }, {\n    \"year\": 1960,\n    \"value\": 41.62\n  }, {\n    \"year\": 1970,\n    \"value\": 55.62\n  }, {\n    \"year\": 1980,\n    \"value\": 56.05\n  }, {\n    \"year\": 1990,\n    \"value\": 68.25\n  }, {\n    \"year\": 2000,\n    \"value\": 81.88\n  }, {\n    \"year\": 2010,\n    \"value\": 85.3\n  }],\n  chudoba: [{\n    \"year\": 1820,\n    \"value\": 94.4\n  }, {\n    \"year\": 1850,\n    \"value\": 92.5\n  }, {\n    \"year\": 1870,\n    \"value\": 89.6\n  }, {\n    \"year\": 1890,\n    \"value\": 85.7\n  }, {\n    \"year\": 1910,\n    \"value\": 82.4\n  }, {\n    \"year\": 1929,\n    \"value\": 75.9\n  }, {\n    \"year\": 1950,\n    \"value\": 71.9\n  }, {\n    \"year\": 1960,\n    \"value\": 64.3\n  }, {\n    \"year\": 1970,\n    \"value\": 60.1\n  }, {\n    \"year\": 1981,\n    \"value\": 43.96\n  }, {\n    \"year\": 1984,\n    \"value\": 40.84\n  }, {\n    \"year\": 1987,\n    \"value\": 36.96\n  }, {\n    \"year\": 1990,\n    \"value\": 36.91\n  }, {\n    \"year\": 1993,\n    \"value\": 34.79\n  }, {\n    \"year\": 2000,\n    \"value\": 29.08\n  }, {\n    \"year\": 2002,\n    \"value\": 26.29\n  }, {\n    \"year\": 2005,\n    \"value\": 20.92\n  }, {\n    \"year\": 2008,\n    \"value\": 18.65\n  }, {\n    \"year\": 2010,\n    \"value\": 16.27\n  }]\n};\ngrafokres.grafokres({\n  elem: \"#graf1\",\n  data: data.doziti,\n  cutoff: 1940,\n  interval: \"decade\",\n  btnFn: postResult\n});\ngrafokres.grafokres({\n  elem: \"#graf2\",\n  data: data.demokracie,\n  cutoff: 1940,\n  interval: \"decade\",\n  btnFn: postResult,\n  yFormat: \"x + ' %'\"\n});\ngrafokres.grafokres({\n  elem: \"#graf3\",\n  data: data.katastrofy,\n  cutoff: 1950,\n  interval: \"decade\",\n  btnFn: postResult,\n  yMin: 0,\n  yMax: 1000\n});\ngrafokres.grafokres({\n  elem: \"#graf4\",\n  data: data.deti,\n  cutoff: 1940,\n  interval: \"decade\",\n  btnFn: postResult,\n  yFormat: \"x + ' %'\"\n});\ngrafokres.grafokres({\n  elem: \"#graf5\",\n  data: data.gramotnost,\n  cutoff: 1960,\n  interval: \"decade\",\n  btnFn: postResult,\n  yFormat: \"x + ' %'\"\n});\ngrafokres.grafokres({\n  elem: \"#graf6\",\n  data: data.chudoba,\n  cutoff: 1950,\n  interval: \"decade\",\n  btnFn: postResult,\n  yFormat: \"x + ' %'\"\n});\n\nvar postResult = function postResult() {\n  return console.log(\"ok!\");\n};\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });