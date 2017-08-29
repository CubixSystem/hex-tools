(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hex-tools"] = factory();
	else
		root["hex-tools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkF4aWFsVmVjdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsZUFBZSxDQUFDIn0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CubeVector__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CubeVector__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkN1YmVWZWN0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxjQUFjLENBQUMifQ==

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VectorMath__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__VectorMath__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlZlY3Rvck1hdGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxjQUFjLENBQUMifQ==

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hexagon__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Hexagon", function() { return __WEBPACK_IMPORTED_MODULE_0__Hexagon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AxialVector__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AxialVector", function() { return __WEBPACK_IMPORTED_MODULE_1__AxialVector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CubeVector__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CubeVector", function() { return __WEBPACK_IMPORTED_MODULE_2__CubeVector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HexagonGrid__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HexagonGridType", function() { return __WEBPACK_IMPORTED_MODULE_3__HexagonGrid__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HexagonGrid", function() { return __WEBPACK_IMPORTED_MODULE_3__HexagonGrid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PointyTopHexagonGrid__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PointyTopNeighborDirection", function() { return __WEBPACK_IMPORTED_MODULE_4__PointyTopHexagonGrid__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PointyTopDirectionVector", function() { return __WEBPACK_IMPORTED_MODULE_4__PointyTopHexagonGrid__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PointyTopHexagonGrid", function() { return __WEBPACK_IMPORTED_MODULE_4__PointyTopHexagonGrid__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VectorMath__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VectorMath", function() { return __WEBPACK_IMPORTED_MODULE_5__VectorMath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Point__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return __WEBPACK_IMPORTED_MODULE_6__Point__["a"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsV0FBVyxDQUFDO0FBQzFCLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMsY0FBYyxDQUFDO0FBQzdCLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMsd0JBQXdCLENBQUM7QUFDdkMsY0FBYyxjQUFjLENBQUM7QUFDN0IsY0FBYyxTQUFTLENBQUMifQ==

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hexagon__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Hexagon__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkhleGFnb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxXQUFXLENBQUMifQ==

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CubeVector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VectorMath__ = __webpack_require__(2);



class Hexagon {
    static isEqual(hexagonA, hexagonB) {
        return __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */].isEqual(hexagonA.axialPosition, hexagonB.axialPosition);
    }
    constructor(params) {
        params.position instanceof __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */] ?
            this.position = __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].cubeToAxial(new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](params.position)) :
            this.position = new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](params.position);
    }
    get cubePosition() {
        return __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].axialToCube(this.position);
    }
    set cubePosition(position) {
        this.position = __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].cubeToAxial(position);
    }
    get axialPosition() {
        return this.position;
    }
    set axialPosition(position) {
        this.position = position;
    }
    isEqual(hexagon) {
        return Hexagon.isEqual(this, hexagon);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hexagon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiSGV4YWdvbi9IZXhhZ29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTTtJQUNHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBaUIsRUFBRSxRQUFpQjtRQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBSUQsWUFBWSxNQUFzQjtRQUNoQyxNQUFNLENBQUMsUUFBUSxZQUFZLFVBQVU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsSUFBVyxZQUFZO1FBQ3JCLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBVyxZQUFZLENBQUMsUUFBb0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLFFBQXFCO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFTSxPQUFPLENBQUMsT0FBZ0I7UUFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRiJ9

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AxialVector {
    static add(vectorA, vectorB) {
        return new AxialVector(vectorA.q + vectorB.q, vectorA.r + vectorB.r);
    }
    static subtract(vectorA, vectorB) {
        return new AxialVector(vectorA.q - vectorB.q, vectorA.r - vectorB.r);
    }
    static multiply(vector, k) {
        return new AxialVector(vector.q * k, vector.r * k);
    }
    static isEqual(vectorA, vectorB) {
        return vectorA.q === vectorB.q && vectorA.r === vectorB.r;
    }
    constructor(q, r) {
        if (typeof r === "number" && typeof q === "number") {
            this.q = q;
            this.r = r;
        }
        else if (typeof q === "object") {
            this.q = q.q;
            this.r = q.r;
        }
        else {
            throw new Error("Invalid constructor params");
        }
    }
    add(vector) {
        return new AxialVector(this.q + vector.q, this.r + vector.r);
    }
    subtract(vector) {
        return new AxialVector(this.q - vector.q, this.r - vector.r);
    }
    multiply(vector, k) {
        return new AxialVector(vector.q * k, vector.r * k);
    }
    isEqual(vector) {
        return this.q === vector.q && this.r === vector.r;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AxialVector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpYWxWZWN0b3IuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkF4aWFsVmVjdG9yL0F4aWFsVmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU07SUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQW9CLEVBQUUsT0FBb0I7UUFDMUQsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFvQixFQUFFLE9BQW9CO1FBQy9ELE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBbUIsRUFBRSxDQUFTO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQW9CLEVBQUUsT0FBb0I7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNELFlBQVksQ0FBOEIsRUFBRSxDQUFVO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sR0FBRyxDQUFDLE1BQW1CO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLFFBQVEsQ0FBQyxNQUFtQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxRQUFRLENBQUMsTUFBbUIsRUFBRSxDQUFTO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxPQUFPLENBQUMsTUFBbUI7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNGIn0=

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CubeVector {
    static add(vectorA, vectorB) {
        return new CubeVector(vectorA.q + vectorB.q, vectorA.r + vectorB.r, vectorA.s + vectorB.s);
    }
    static subtract(vectorA, vectorB) {
        return new CubeVector(vectorA.q - vectorB.q, vectorA.r - vectorB.r, vectorA.s - vectorB.s);
    }
    static multiply(vector, k) {
        return new CubeVector(vector.q * k, vector.r * k, vector.s * k);
    }
    static roundLength(vector) {
        return Math.round((Math.abs(vector.q) + Math.abs(vector.r) + Math.abs(vector.s)) / 2);
    }
    static isEqual(vectorA, vectorB) {
        return vectorA.q === vectorB.q && vectorA.r === vectorB.r && vectorA.s === vectorB.s;
    }
    constructor(q, r, s) {
        if (typeof q === "number") {
            this.complementVector({ q, r, s });
        }
        else if (typeof q === "object") {
            this.complementVector(q);
        }
        else {
            throw new Error("Invalid constructor params");
        }
    }
    add(vector) {
        return new CubeVector(this.q + vector.q, this.r + vector.r, this.s + vector.s);
    }
    subtract(vector) {
        return new CubeVector(this.q - vector.q, this.r - vector.r, this.s - vector.s);
    }
    multiply(k) {
        return new CubeVector(this.q * k, this.r * k, this.s * k);
    }
    get roundLength() {
        return Math.round((Math.abs(this.q) + Math.abs(this.r) + Math.abs(this.s)) / 2);
    }
    isEqual(vector) {
        return this.q === vector.q && this.r === vector.r && this.s === vector.s;
    }
    complementVector(vector) {
        const q = vector.q;
        const r = vector.r;
        const s = vector.s;
        if (typeof q === "number" && typeof r === "number" && typeof s === "number") {
            this.q = q;
            this.r = r;
            this.s = s;
        }
        else if (typeof q === "number" && typeof r === "number" && typeof s === "undefined") {
            this.q = q;
            this.r = r;
            this.s = -q - r;
        }
        else if (typeof q === "undefined" && typeof r === "number" && typeof s === "number") {
            this.q = -r - s;
            this.r = r;
            this.s = s;
        }
        else if (typeof q === "number" && typeof r === "undefined" && typeof s === "number") {
            this.q = q;
            this.r = -q - s;
            this.s = s;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CubeVector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ViZVZlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiQ3ViZVZlY3Rvci9DdWJlVmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU07SUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQW1CLEVBQUUsT0FBbUI7UUFDeEQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBbUIsRUFBRSxPQUFtQjtRQUM3RCxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFrQixFQUFFLENBQVM7UUFDbEQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBa0I7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CubeVector__ = __webpack_require__(1);


class VectorMath {
    static axialToCube(vector) {
        const q = vector.q;
        const r = vector.r;
        const s = -q - r;
        return new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](q, r, s);
    }
    static cubeToAxial(vector) {
        return new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](vector.q, vector.r);
    }
    static cubeDistance(vectorA, vectorB) {
        return Math.max(Math.abs(vectorA.q - vectorB.q), Math.abs(vectorA.r - vectorB.r), Math.abs(vectorA.s - vectorB.s));
    }
    static axialDistance(vectorA, vectorB) {
        const ac = VectorMath.axialToCube(vectorA);
        const bc = VectorMath.axialToCube(vectorB);
        return VectorMath.cubeDistance(ac, bc);
    }
    static cubeRound(vector) {
        let rq = Math.round(vector.q);
        let rr = Math.round(vector.r);
        let rs = Math.round(vector.s);
        const qDiff = Math.abs(rq - vector.q);
        const rDiff = Math.abs(rr - vector.r);
        const sDiff = Math.abs(rs - vector.s);
        if (qDiff > rDiff && qDiff > sDiff) {
            rq = -rr - rs;
        }
        else if (rDiff > sDiff) {
            rr = -rq - rs;
        }
        else {
            rs = -rq - rr;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](rq, rr, rs);
    }
    static axialRound(vector) {
        return VectorMath.cubeToAxial(VectorMath.cubeRound(VectorMath.axialToCube(vector)));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VectorMath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yTWF0aC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiVmVjdG9yTWF0aC9WZWN0b3JNYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE1BQU07SUFDRyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQW1CO1FBQzNDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakIsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBa0I7UUFDMUMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQW1CLEVBQUUsT0FBbUI7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQW9CLEVBQUUsT0FBb0I7UUFDcEUsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFrQjtRQUN4QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQW1CO1FBQzFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUMzQixVQUFVLENBQUMsU0FBUyxDQUNsQixVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YifQ==

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HexagonGrid__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__HexagonGrid__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__HexagonGrid__["b"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkhleGFnb25HcmlkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsZUFBZSxDQUFDIn0=

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HexagonGridType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CubeVector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tools__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VectorMath__ = __webpack_require__(2);




var HexagonGridType;
(function (HexagonGridType) {
    HexagonGridType[HexagonGridType["PARALLELOGRAM"] = 0] = "PARALLELOGRAM";
    HexagonGridType[HexagonGridType["TRIANGLE"] = 1] = "TRIANGLE";
    HexagonGridType[HexagonGridType["HEXAGON"] = 2] = "HEXAGON";
    HexagonGridType[HexagonGridType["RECTANGLE"] = 3] = "RECTANGLE";
})(HexagonGridType || (HexagonGridType = {}));
class HexagonGrid {
    constructor(params) {
        this.hexagons = new Map();
        const hexagonHeight = params.hexagonSize * 2;
        const hexagonWidth = Math.sqrt(3) / 2 * hexagonHeight;
        this.hexagonSize = params.hexagonSize;
        this.verticalDistance = hexagonHeight * 3 / 4;
        this.horizontalDistance = hexagonWidth;
        this.size = params.size;
        this.type = params.type;
    }
    static distance(hexagonA, hexagonB) {
        return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
    }
    insertHexagon(hexagon, position) {
        if (position instanceof __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */]) {
            hexagon.axialPosition = position;
        }
        else {
            hexagon.axialPosition = __WEBPACK_IMPORTED_MODULE_3__VectorMath__["a" /* VectorMath */].cubeToAxial(position);
        }
        const hash = __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].combineHashes(__WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(hexagon.axialPosition.q), __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(hexagon.axialPosition.r));
        this.hexagons.set(hash, hexagon);
    }
    removeHexagon(position) {
        const hash = __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].combineHashes(__WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(position.q), __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(position.r));
        this.hexagons.delete(hash);
    }
    replaceHexagon(hexagon, position) {
        this.removeHexagon(position);
        this.insertHexagon(hexagon, position);
    }
    getHexagon(position) {
        const hash = __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].combineHashes(__WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(position.q), __WEBPACK_IMPORTED_MODULE_2__Tools__["a" /* Tools */].calculateHash(position.r));
        return this.hexagons.get(hash);
    }
    getHexagonNeighbors(position) {
        const neighbors = [];
        const neighborPositions = this.getHexagonNeighborPositions(position);
        neighborPositions.forEach((neighborPosition) => {
            const hexagon = this.getHexagon(neighborPosition);
            if (hexagon) {
                neighbors.push(hexagon);
            }
        });
        return neighbors;
    }
    generateGrid(factoryFunction) {
        switch (this.type) {
            case HexagonGridType.TRIANGLE:
                this.generateTriangleGrid(factoryFunction);
                break;
            case HexagonGridType.PARALLELOGRAM:
                this.generateParallelogramGrid(factoryFunction);
                break;
            case HexagonGridType.HEXAGON:
                this.generateHexagonGrid(factoryFunction);
                break;
            case HexagonGridType.RECTANGLE:
                this.generateRectangleGrid(factoryFunction);
                break;
        }
    }
    generateTriangleGrid(factoryFunction) {
        const size = this.size.width;
        for (let q = 0; q <= size; q++) {
            for (let r = 0; r < size - q; r++) {
                this.insertHexagon(factoryFunction.call(this), new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](q, r));
            }
        }
        // for (let q = 0; q <= size; q++) {
        //   for (let r = size - q; r < size; r++) {
        //     this.insertHexagon(factoryFunction.call(this), new AxialVector(q, r));
        //   }
        // }
    }
    generateParallelogramGrid(factoryFunction) {
        for (let j = 0; j <= this.size.width; j++) {
            for (let i = 0; i <= this.size.height; i++) {
                this.insertHexagon(factoryFunction.call(this), new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */]({ q: j, r: i }));
                // this.insertHexagon(factoryFunction.call(this), new CubeVector({ s: j, q: i }));
                // this.insertHexagon(factoryFunction.call(this), new CubeVector({ r: j, s: i }));
            }
        }
    }
    generateHexagonGrid(factoryFunction) {
        const mapRadius = this.size.width;
        for (let q = -mapRadius; q <= mapRadius; q++) {
            const r1 = Math.max(-mapRadius, -q - mapRadius);
            const r2 = Math.min(mapRadius, -q + mapRadius);
            for (let r = r1; r <= r2; r++) {
                this.insertHexagon(factoryFunction.call(this), new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](q, r));
            }
        }
    }
    generateRectangleGrid(factoryFunction) {
        for (let i = 0; i < this.size.height; i++) {
            const offset = Math.floor(i / 2);
            for (let j = -offset; j < this.size.width - offset; j++) {
                this.insertHexagon(factoryFunction.call(this), new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */]({ q: j, r: i }));
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HexagonGrid;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbkdyaWQuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkhleGFnb25HcmlkL0hleGFnb25HcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWEzQyxNQUFNLENBQU4sSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLHVFQUFhLENBQUE7SUFDYiw2REFBUSxDQUFBO0lBQ1IsMkRBQU8sQ0FBQTtJQUNQLCtEQUFTLENBQUE7QUFDWCxDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFFRCxNQUFNO0lBWUosWUFBWSxNQUEwQjtRQUgvQixhQUFRLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFJaEQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBRXRELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFwQk0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFpQixFQUFFLFFBQWlCO1FBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQzNFLENBQUM7SUF3Qk0sYUFBYSxDQUFDLE9BQWdCLEVBQUUsUUFBb0M7UUFDekUsRUFBRSxDQUFDLENBQUMsUUFBUSxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUM5QixLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxhQUFhLENBQUMsUUFBb0M7UUFDdkQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FDOUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQWdCLEVBQUUsUUFBb0M7UUFDMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sVUFBVSxDQUFDLFFBQW9DO1FBQ3BELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQzlCLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxRQUFvQztRQUM3RCxNQUFNLFNBQVMsR0FBYyxFQUFFLENBQUM7UUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCO1lBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sWUFBWSxDQUFDLGVBQThCO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssZUFBZSxDQUFDLFFBQVE7Z0JBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDM0MsS0FBSyxDQUFDO1lBQ1IsS0FBSyxlQUFlLENBQUMsYUFBYTtnQkFDaEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDUixLQUFLLGVBQWUsQ0FBQyxPQUFPO2dCQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzFDLEtBQUssQ0FBQztZQUNSLEtBQUssZUFBZSxDQUFDLFNBQVM7Z0JBQzVCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFUyxvQkFBb0IsQ0FBQyxlQUE4QjtRQUMzRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQztRQUNILENBQUM7UUFFRCxvQ0FBb0M7UUFDcEMsNENBQTRDO1FBQzVDLDZFQUE2RTtRQUM3RSxNQUFNO1FBQ04sSUFBSTtJQUNOLENBQUM7SUFFUyx5QkFBeUIsQ0FBQyxlQUE4QjtRQUNoRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLGtGQUFrRjtnQkFDbEYsa0ZBQWtGO1lBQ3BGLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVTLG1CQUFtQixDQUFDLGVBQThCO1FBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxlQUE4QjtRQUM1RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0NBQ0YifQ==

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PointyTopHexagonGrid__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PointyTopHexagonGrid__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__PointyTopHexagonGrid__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__PointyTopHexagonGrid__["c"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlBvaW50eVRvcEhleGFnb25HcmlkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsd0JBQXdCLENBQUMifQ==

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PointyTopNeighborDirection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CubeVector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HexagonGrid__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Point__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VectorMath__ = __webpack_require__(2);





var PointyTopNeighborDirection;
(function (PointyTopNeighborDirection) {
    PointyTopNeighborDirection[PointyTopNeighborDirection["EAST"] = 0] = "EAST";
    PointyTopNeighborDirection[PointyTopNeighborDirection["NORTH_EAST"] = 1] = "NORTH_EAST";
    PointyTopNeighborDirection[PointyTopNeighborDirection["NORTH_WEST"] = 2] = "NORTH_WEST";
    PointyTopNeighborDirection[PointyTopNeighborDirection["SOUTH_EAST"] = 3] = "SOUTH_EAST";
    PointyTopNeighborDirection[PointyTopNeighborDirection["SOUTH_WEST"] = 4] = "SOUTH_WEST";
    PointyTopNeighborDirection[PointyTopNeighborDirection["WEST"] = 5] = "WEST";
})(PointyTopNeighborDirection || (PointyTopNeighborDirection = {}));
const PointyTopDirectionVector = new Map([
    [PointyTopNeighborDirection.EAST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](-1, 0, 1)],
    [PointyTopNeighborDirection.NORTH_EAST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](-1, 1, 0)],
    [PointyTopNeighborDirection.NORTH_WEST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](0, 1, -1)],
    [PointyTopNeighborDirection.SOUTH_EAST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](0, -1, 1)],
    [PointyTopNeighborDirection.SOUTH_WEST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](1, -1, 0)],
    [PointyTopNeighborDirection.WEST, new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](1, 0, -1)],
]);
/* harmony export (immutable) */ __webpack_exports__["a"] = PointyTopDirectionVector;

class PointyTopHexagonGrid extends __WEBPACK_IMPORTED_MODULE_2__HexagonGrid__["a" /* HexagonGrid */] {
    static axialToPoint(vector, hexSize) {
        const q = vector.q;
        const r = vector.r;
        const x = hexSize * Math.sqrt(3) * (q + r / 2);
        const y = hexSize * 3 / 2 * r;
        return new __WEBPACK_IMPORTED_MODULE_3__Point__["a" /* Point */](x, y);
    }
    static pointToAxial(point, hexSize) {
        const q = (point.x * Math.sqrt(3) / 3 - point.y / 3) / hexSize;
        const r = point.y * 2 / 3 / hexSize;
        return __WEBPACK_IMPORTED_MODULE_4__VectorMath__["a" /* VectorMath */].axialRound(new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](q, r));
    }
    axialToPoint(vector) {
        return PointyTopHexagonGrid.axialToPoint(vector, this.hexagonSize);
    }
    pointToAxial(point) {
        return PointyTopHexagonGrid.pointToAxial(point, this.hexagonSize);
    }
    getHexagonNeighborPositions(position) {
        const neighborPositions = [];
        const hexagon = this.getHexagon(position);
        if (hexagon) {
            PointyTopDirectionVector.forEach((vector) => {
                neighborPositions.push(hexagon.cubePosition.add(vector));
            });
        }
        return neighborPositions;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = PointyTopHexagonGrid;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9pbnR5VG9wSGV4YWdvbkdyaWQuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlBvaW50eVRvcEhleGFnb25HcmlkL1BvaW50eVRvcEhleGFnb25HcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsTUFBTSxDQUFOLElBQVksMEJBT1g7QUFQRCxXQUFZLDBCQUEwQjtJQUNwQywyRUFBSSxDQUFBO0lBQ0osdUZBQVUsQ0FBQTtJQUNWLHVGQUFVLENBQUE7SUFDVix1RkFBVSxDQUFBO0lBQ1YsdUZBQVUsQ0FBQTtJQUNWLDJFQUFJLENBQUE7QUFDTixDQUFDLEVBUFcsMEJBQTBCLEtBQTFCLDBCQUEwQixRQU9yQztBQUVELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLElBQUksR0FBRyxDQUFDO0lBQzlDLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDLDBCQUEwQixDQUFDLFVBQVUsRUFBRSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsMEJBQTBCLENBQUMsVUFBVSxF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

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Point__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlBvaW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsU0FBUyxDQUFDIn0=

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
    static add(pointA, pointB) {
        return new Point(pointA.x + pointB.x, pointA.y + pointB.y);
    }
    static subtract(pointA, pointB) {
        return new Point(pointA.x - pointB.x, pointA.y - pointB.y);
    }
    static multiply(point, k) {
        return new Point(point.x * k, point.y * k);
    }
    static isEqual(pointA, pointB) {
        return pointA.x === pointB.x && pointA.y === pointB.y;
    }
    constructor(q, r) {
        this.x = q;
        this.y = r;
    }
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    subtract(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
    multiply(point, k) {
        return new Point(point.x * k, point.y * k);
    }
    isEqual(point) {
        return this.x === point.x && this.y === point.y;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Point;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9pbnQuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlBvaW50L1BvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07SUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQWEsRUFBRSxNQUFhO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBYSxFQUFFLE1BQWE7UUFDakQsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFZLEVBQUUsQ0FBUztRQUM1QyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFhLEVBQUUsTUFBYTtRQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBS0QsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLEdBQUcsQ0FBQyxLQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFZO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFZLEVBQUUsQ0FBUztRQUNyQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQVk7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGIn0=

/***/ }),
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Code\\hex-tools\\node_modules\\charenc\\charenc.js'");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tools__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Tools__["a"]; });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlRvb2xzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsU0FBUyxDQUFDIn0=

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_md5__);

class Tools {
    static combineHashes(hashA, hashB) {
        return __WEBPACK_IMPORTED_MODULE_0_md5__(`${hashA}:${hashB}`);
    }
    static calculateHash(numberA) {
        return __WEBPACK_IMPORTED_MODULE_0_md5__(numberA.toString());
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tools;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHMuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIlRvb2xzL1Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBRTNCLE1BQU07SUFDRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFlO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGIn0=

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(19),
      utf8 = __webpack_require__(15).utf8,
      isBuffer = __webpack_require__(20),
      bin = __webpack_require__(15).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Code\\hex-tools\\node_modules\\crypt\\crypt.js'");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map