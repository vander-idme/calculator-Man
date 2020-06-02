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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Calculator.js":
/*!***************************!*\
  !*** ./src/Calculator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Calculator(config) {\n  this.pantalla = config.pantalla;\n  this.btns = config.buttons; // console.log(this.btns)\n\n  this._listerner();\n}\n\nCalculator.prototype._listerner = function () {\n  this.btns.forEach(button => {\n    this.clickButtons(button);\n  });\n};\n\nCalculator.prototype.print = function (num) {\n  this.pantalla.value = this.pantalla.value + num;\n};\n\nCalculator.prototype.clear = function () {\n  this.pantalla.value = null;\n};\n\nCalculator.prototype.equal = function () {\n  let exp = this.pantalla.value;\n\n  if (exp) {\n    this.pantalla.value = eval(exp);\n  }\n};\n\nCalculator.prototype.backSpace = function () {\n  let exp = this.pantalla.value;\n  let erase = \"\"; // let caracter = erase.charAt(erase.length - 1)\n\n  for (let i = 0; i < exp.length - 1; i++) {\n    erase = erase + exp[i];\n  }\n\n  this.pantalla.value = erase;\n};\n\nCalculator.prototype.clickButtons = function (button) {\n  // console.log(button.value)\n  if (button.value >= 0 && button.value <= 9) {\n    button.onclick = () => {\n      this.print(button.value);\n    };\n  }\n\n  if (button.value === 'C') {\n    button.onclick = () => {\n      this.clear();\n    };\n  }\n\n  if (button.value === '+') {\n    button.onclick = () => {\n      this.print(button.value);\n    };\n  }\n\n  if (button.value === '-') {\n    button.onclick = () => {\n      this.print(button.value);\n    };\n  }\n\n  if (button.value === '*') {\n    button.onclick = () => {\n      this.print(button.value);\n    };\n  }\n\n  if (button.value === '/') {\n    button.onclick = () => {\n      this.print(button.value);\n    };\n  }\n\n  if (button.value === '=') {\n    button.onclick = () => {\n      this.equal();\n    };\n  }\n\n  if (button.value === '<') {\n    button.onclick = () => {\n      this.backSpace();\n    };\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\n\n//# sourceURL=webpack:///./src/Calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.js */ \"./src/Calculator.js\");\n\nconst pantalla = document.querySelector(\"#pantalla\");\nconst buttonZero = document.querySelector(\"#numberZero\");\nconst buttonOne = document.querySelector(\"#numberOne\");\nconst buttonTwo = document.querySelector(\"#numberTwo\");\nconst buttonThree = document.querySelector(\"#numberThree\");\nconst buttonFour = document.querySelector(\"#numberFour\");\nconst buttonFive = document.querySelector(\"#numberFive\");\nconst buttonSix = document.querySelector(\"#numberSix\");\nconst buttonSeven = document.querySelector(\"#numberSeven\");\nconst buttonEight = document.querySelector(\"#numberEight\");\nconst buttonNine = document.querySelector(\"#numberNine\");\nconst minus = document.querySelector(\"#minus\");\nconst plus = document.querySelector(\"#plus\");\nconst division = document.querySelector(\"#division\");\nconst multiplication = document.querySelector(\"#multiplication\");\nconst equal = document.querySelector(\"#equal\");\nconst backSpace = document.querySelector(\"#backSpace\");\nconst clear = document.querySelector(\"#clear\");\nconst calc = new _Calculator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pantalla: pantalla,\n  buttons: [buttonZero, buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine, minus, plus, division, multiplication, equal, backSpace, clear]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });