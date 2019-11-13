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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n // loučíme se s IE\n\nvar data = {\n  dozitiM: [{\n    year: 1989,\n    value: 68.1\n  }, {\n    year: 1990,\n    value: 67.6\n  }, {\n    year: 1991,\n    value: 68.2\n  }, {\n    year: 1992,\n    value: 68.5\n  }, {\n    year: 1993,\n    value: 69.3\n  }, {\n    year: 1994,\n    value: 69.5\n  }, {\n    year: 1995,\n    value: 69.7\n  }, {\n    year: 1996,\n    value: 70.4\n  }, {\n    year: 1997,\n    value: 70.5\n  }, {\n    year: 1998,\n    value: 71.1\n  }, {\n    year: 1999,\n    value: 71.4\n  }, {\n    year: 2000,\n    value: 71.6\n  }, {\n    year: 2001,\n    value: 72.0\n  }, {\n    year: 2002,\n    value: 72.1\n  }, {\n    year: 2003,\n    value: 72.1\n  }, {\n    year: 2004,\n    value: 72.6\n  }, {\n    year: 2005,\n    value: 72.9\n  }, {\n    year: 2006,\n    value: 73.4\n  }, {\n    year: 2007,\n    value: 73.7\n  }, {\n    year: 2008,\n    value: 74.0\n  }, {\n    year: 2009,\n    value: 74.2\n  }, {\n    year: 2010,\n    value: 74.4\n  }, {\n    year: 2011,\n    value: 74.7\n  }, {\n    year: 2012,\n    value: 75.0\n  }, {\n    year: 2013,\n    value: 75.2\n  }, {\n    year: 2014,\n    value: 75.7\n  }, {\n    year: 2015,\n    value: 75.6\n  }, {\n    year: 2016,\n    value: 76.0\n  }],\n  dozitiZ: [{\n    year: 1989,\n    value: 75.5\n  }, {\n    year: 1990,\n    value: 75.4\n  }, {\n    year: 1991,\n    value: 75.8\n  }, {\n    year: 1992,\n    value: 76.2\n  }, {\n    year: 1993,\n    value: 76.5\n  }, {\n    year: 1994,\n    value: 76.7\n  }, {\n    year: 1995,\n    value: 76.7\n  }, {\n    year: 1996,\n    value: 77.4\n  }, {\n    year: 1997,\n    value: 77.5\n  }, {\n    year: 1998,\n    value: 78.0\n  }, {\n    year: 1999,\n    value: 78.1\n  }, {\n    year: 2000,\n    value: 78.4\n  }, {\n    year: 2001,\n    value: 78.5\n  }, {\n    year: 2002,\n    value: 78.7\n  }, {\n    year: 2003,\n    value: 78.6\n  }, {\n    year: 2004,\n    value: 79.2\n  }, {\n    year: 2005,\n    value: 79.3\n  }, {\n    year: 2006,\n    value: 79.9\n  }, {\n    year: 2007,\n    value: 80.1\n  }, {\n    year: 2008,\n    value: 80.3\n  }, {\n    year: 2009,\n    value: 80.3\n  }, {\n    year: 2010,\n    value: 80.6\n  }, {\n    year: 2011,\n    value: 80.8\n  }, {\n    year: 2012,\n    value: 81.0\n  }, {\n    year: 2013,\n    value: 81.2\n  }, {\n    year: 2014,\n    value: 81.7\n  }, {\n    year: 2015,\n    value: 81.5\n  }, {\n    year: 2016,\n    value: 81.8\n  }],\n  narozeni: [{\n    year: 1989,\n    value: 22.5\n  }, {\n    year: 1990,\n    value: 22.5\n  }, {\n    year: 1991,\n    value: 22.4\n  }, {\n    year: 1992,\n    value: 22.5\n  }, {\n    year: 1993,\n    value: 22.6\n  }, {\n    year: 1994,\n    value: 22.9\n  }, {\n    year: 1995,\n    value: 23.3\n  }, {\n    year: 1996,\n    value: 23.7\n  }, {\n    year: 1997,\n    value: 24.0\n  }, {\n    year: 1998,\n    value: 24.4\n  }, {\n    year: 1999,\n    value: 24.6\n  }, {\n    year: 2000,\n    value: 24.9\n  }, {\n    year: 2001,\n    value: 25.3\n  }, {\n    year: 2002,\n    value: 25.6\n  }, {\n    year: 2003,\n    value: 25.9\n  }, {\n    year: 2004,\n    value: 26.3\n  }, {\n    year: 2005,\n    value: 26.6\n  }, {\n    year: 2006,\n    value: 26.9\n  }, {\n    year: 2007,\n    value: 27.1\n  }, {\n    year: 2008,\n    value: 27.3\n  }, {\n    year: 2009,\n    value: 27.4\n  }, {\n    year: 2010,\n    value: 27.6\n  }, {\n    year: 2011,\n    value: 27.8\n  }, {\n    year: 2012,\n    value: 27.9\n  }, {\n    year: 2013,\n    value: 28.1\n  }, {\n    year: 2014,\n    value: 28.1\n  }, {\n    year: 2015,\n    value: 28.2\n  }, {\n    year: 2016,\n    value: 28.2\n  }],\n  rozvody: [{\n    year: 1989,\n    value: 37.1\n  }, {\n    year: 1990,\n    value: 38.0\n  }, {\n    year: 1991,\n    value: 34.8\n  }, {\n    year: 1992,\n    value: 33.9\n  }, {\n    year: 1993,\n    value: 36.2\n  }, {\n    year: 1994,\n    value: 37.5\n  }, {\n    year: 1995,\n    value: 38.4\n  }, {\n    year: 1996,\n    value: 41.8\n  }, {\n    year: 1997,\n    value: 42.1\n  }, {\n    year: 1998,\n    value: 43.1\n  }, {\n    year: 1999,\n    value: 32.5\n  }, {\n    year: 2000,\n    value: 41.4\n  }, {\n    year: 2001,\n    value: 44.7\n  }, {\n    year: 2002,\n    value: 45.7\n  }, {\n    year: 2003,\n    value: 48.0\n  }, {\n    year: 2004,\n    value: 49.3\n  }, {\n    year: 2005,\n    value: 47.3\n  }, {\n    year: 2006,\n    value: 48.7\n  }, {\n    year: 2007,\n    value: 48.7\n  }, {\n    year: 2008,\n    value: 49.6\n  }, {\n    year: 2009,\n    value: 46.8\n  }, {\n    year: 2010,\n    value: 50.0\n  }, {\n    year: 2011,\n    value: 46.2\n  }, {\n    year: 2012,\n    value: 44.5\n  }, {\n    year: 2013,\n    value: 47.8\n  }, {\n    year: 2014,\n    value: 46.7\n  }, {\n    year: 2015,\n    value: 46.5\n  }, {\n    year: 2016,\n    value: 45.2\n  }],\n  prirustek: [{\n    year: 1989,\n    value: 1459.0\n  }, {\n    year: 1990,\n    value: 624.0\n  }, {\n    year: 1991,\n    value: 2876.0\n  }, {\n    year: 1992,\n    value: 11781.0\n  }, {\n    year: 1993,\n    value: 5476.0\n  }, {\n    year: 1994,\n    value: 9942.0\n  }, {\n    year: 1995,\n    value: 9999.0\n  }, {\n    year: 1996,\n    value: 10129.0\n  }, {\n    year: 1997,\n    value: 12075.0\n  }, {\n    year: 1998,\n    value: 9488.0\n  }, {\n    year: 1999,\n    value: 8774.0\n  }, {\n    year: 2000,\n    value: 6539.0\n  }, {\n    year: 2001,\n    value: -8551.0\n  }, {\n    year: 2002,\n    value: 12290.0\n  }, {\n    year: 2003,\n    value: 25789.0\n  }, {\n    year: 2004,\n    value: 18635.0\n  }, {\n    year: 2005,\n    value: 36229.0\n  }, {\n    year: 2006,\n    value: 34720.0\n  }, {\n    year: 2007,\n    value: 83945.0\n  }, {\n    year: 2008,\n    value: 71790.0\n  }, {\n    year: 2009,\n    value: 28344.0\n  }, {\n    year: 2010,\n    value: 15648.0\n  }, {\n    year: 2011,\n    value: 16889.0\n  }, {\n    year: 2012,\n    value: 10293.0\n  }, {\n    year: 2013,\n    value: -1297.0\n  }, {\n    year: 2014,\n    value: 21661.0\n  }, {\n    year: 2015,\n    value: 15977.0\n  }, {\n    year: 2016,\n    value: 20064.0\n  }],\n  knihy: [{\n    year: 2000,\n    value: 11965.0\n  }, {\n    year: 2001,\n    value: 14321.0\n  }, {\n    year: 2002,\n    value: 14278.0\n  }, {\n    year: 2003,\n    value: 16451.0\n  }, {\n    year: 2004,\n    value: 15749.0\n  }, {\n    year: 2005,\n    value: 15350.0\n  }, {\n    year: 2006,\n    value: 17019.0\n  }, {\n    year: 2007,\n    value: 18029.0\n  }, {\n    year: 2008,\n    value: 18520.0\n  }, {\n    year: 2009,\n    value: 17598.0\n  }, {\n    year: 2010,\n    value: 17054.0\n  }, {\n    year: 2011,\n    value: 18985.0\n  }, {\n    year: 2012,\n    value: 17247.0\n  }, {\n    year: 2013,\n    value: 17876.0\n  }, {\n    year: 2014,\n    value: 18379.0\n  }, {\n    year: 2015,\n    value: 18282.0\n  }, {\n    year: 2016,\n    value: 17815.0\n  }]\n};\n\nvar postResult = function postResult() {\n  return false;\n};\n\ngrafokres.grafokres({\n  elem: \"#graf1\",\n  data: data.dozitiM,\n  cutoff: 1997,\n  interval: \"year\",\n  btnFn: postResult // yMin: 0,\n  // yMax: 0,\n\n});\ngrafokres.grafokres({\n  elem: \"#graf2\",\n  data: data.dozitiZ,\n  cutoff: 1997,\n  interval: \"year\",\n  btnFn: postResult\n});\ngrafokres.grafokres({\n  elem: \"#graf3\",\n  data: data.narozeni,\n  cutoff: 1997,\n  interval: \"year\",\n  btnFn: postResult\n});\ngrafokres.grafokres({\n  elem: \"#graf4\",\n  data: data.rozvody,\n  cutoff: 1997,\n  interval: \"year\",\n  btnFn: postResult,\n  yFormat: \"x + ' %'\"\n});\ngrafokres.grafokres({\n  elem: \"#graf5\",\n  data: data.prirustek,\n  cutoff: 1997,\n  interval: \"year\",\n  btnFn: postResult,\n  yMin: -100000,\n  yMax: 100000\n});\ngrafokres.grafokres({\n  elem: \"#graf6\",\n  data: data.knihy,\n  cutoff: 2005,\n  interval: \"year\",\n  btnFn: postResult,\n  yMin: -100000,\n  yMax: 100000\n});\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ });