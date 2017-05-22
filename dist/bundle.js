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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
        this.q = q;
        this.r = r;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXhpYWxWZWN0b3IuanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbIkF4aWFsVmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07SUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQW9CLEVBQUUsT0FBb0I7UUFDMUQsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFvQixFQUFFLE9BQW9CO1FBQy9ELE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBbUIsRUFBRSxDQUFTO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQW9CLEVBQUUsT0FBb0I7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQVNELFlBQVksQ0FBUyxFQUFFLENBQVM7UUFDOUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSxHQUFHLENBQUMsTUFBbUI7UUFDNUIsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sUUFBUSxDQUFDLE1BQW1CO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLFFBQVEsQ0FBQyxNQUFtQixFQUFFLENBQVM7UUFDNUMsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxNQUFtQjtRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0YifQ==

/***/ }),
/* 1 */
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
        this.q = q;
        this.r = r;
        this.s = s;
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CubeVector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3ViZVZlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiQ3ViZVZlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0lBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFtQixFQUFFLE9BQW1CO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQW1CLEVBQUUsT0FBbUI7UUFDN0QsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBa0IsRUFBRSxDQUFTO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQWtCO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFtQixFQUFFLE9BQW1CO1FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBTUQsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLEdBQUcsQ0FBQyxNQUFrQjtRQUMzQixNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0sUUFBUSxDQUFDLE1BQWtCO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTSxRQUFRLENBQUMsQ0FBUztRQUN2QixNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sT0FBTyxDQUFDLE1BQWtCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0NBQ0YifQ==

/***/ }),
/* 2 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yTWF0aC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiVmVjdG9yTWF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUMsTUFBTTtJQUNHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBbUI7UUFDM0MsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFrQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBbUIsRUFBRSxPQUFtQjtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDYixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBb0IsRUFBRSxPQUFvQjtRQUNwRSxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQWtCO1FBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBbUI7UUFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQ2xCLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiJ9

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AxialVector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CubeVector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VectorMath__ = __webpack_require__(2);



// const Direction = {
//   NORTH: new Vector3(),
//   NORTH_EAST: new Vector3(),
//   EAST: new Vector3(),
//   SOUTH_EAST: new Vector3(),
//   SOUTH: new Vector3(),
//   SOUTH_WEST: new Vector3(),
//   WEST: new Vector3(),
//   NORTH_WEST: new Vector3()
// };
var GridType;
(function (GridType) {
    GridType[GridType["PARALLELOGRAM"] = 0] = "PARALLELOGRAM";
    GridType[GridType["TRIANGLE"] = 1] = "TRIANGLE";
    GridType[GridType["HEXAGON"] = 2] = "HEXAGON";
    GridType[GridType["RECTANGLE"] = 3] = "RECTANGLE";
})(GridType || (GridType = {}));
const Direction = [
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](1, 0, -1),
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](1, -1, 0),
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](0, -1, 1),
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](-1, 0, 1),
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](-1, 1, 0),
    new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](0, 1, -1)
];
const directionError = 'Wrong direction';
class Grid {
    static axialToPoint(vector, hexSize) {
        const q = hexSize * Math.sqrt(3) * (vector.q + vector.r / 2);
        const r = hexSize * 3 / 2 * vector.r;
        return new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](q, r);
    }
    static pointToAxial(point, hexSize) {
        const q = (point.q * Math.sqrt(3) / 3 - point.r / 3) / hexSize;
        const r = point.r * 2 / 3 / hexSize;
        return __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].axialRound(new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](q, r));
    }
    static hexDirection(direction) {
        if (direction < 0 || direction > 5) {
            throw new Error(directionError);
        }
        return Direction[direction];
    }
    static neighborPosition(hexagon, direction) {
        const hexDirection = Grid.hexDirection(direction);
        return hexagon.cubePosition.add(hexDirection);
    }
    static distance(hexagonA, hexagonB) {
        return hexagonA.cubePosition.subtract(hexagonB.cubePosition).roundLength;
    }
    constructor(params) {
        this.verticalDistance = params.hexagon.height * 3 / 4;
        this.horizontalDistance = params.hexagon.width;
        this.size = params.size;
        this.hexagon = params.hexagon;
        this.type = params.type;
        // this.generateGrid();
    }
    axialToPoint(vector) {
        return Grid.axialToPoint(vector, this.hexagon.size);
    }
    pointToAxial(point) {
        return Grid.pointToAxial(point, this.hexagon.size);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Grid;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiR3JpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVExQyxzQkFBc0I7QUFDdEIsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0IseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5QixLQUFLO0FBRUwsTUFBTSxDQUFOLElBQVksUUFLWDtBQUxELFdBQVksUUFBUTtJQUNsQix5REFBYSxDQUFBO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLDZDQUFPLENBQUE7SUFDUCxpREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFFBQVEsS0FBUixRQUFRLFFBS25CO0FBRUQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FBQyxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLGlCQUFp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

/***/ }),
/* 4 */
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
        params.s ?
            this.position = __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].cubeToAxial(new __WEBPACK_IMPORTED_MODULE_1__CubeVector__["a" /* CubeVector */](params.q, params.r, params.s)) :
            this.position = new __WEBPACK_IMPORTED_MODULE_0__AxialVector__["a" /* AxialVector */](params.q, params.r);
        this.size = params.size;
        this.height = this.size * 2;
        this.width = Math.sqrt(3) / 2 * this.height;
    }
    get cubePosition() {
        return __WEBPACK_IMPORTED_MODULE_2__VectorMath__["a" /* VectorMath */].axialToCube(this.position);
    }
    get axialPosition() {
        return this.position;
    }
    isEqual(hexagon) {
        return Hexagon.isEqual(this, hexagon);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hexagon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiSGV4YWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMxQyxNQUFNO0lBQ0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFpQixFQUFFLFFBQWlCO1FBQ3hELE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFRRCxZQUFZLE1BQXNCO1FBQ2hDLE1BQU0sQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQVcsWUFBWTtRQUNyQixNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQWdCO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0YifQ==

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hexagon__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Hexagon", function() { return __WEBPACK_IMPORTED_MODULE_0__Hexagon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AxialVector__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AxialVector", function() { return __WEBPACK_IMPORTED_MODULE_1__AxialVector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CubeVector__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CubeVector", function() { return __WEBPACK_IMPORTED_MODULE_2__CubeVector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Grid__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GridType", function() { return __WEBPACK_IMPORTED_MODULE_3__Grid__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_3__Grid__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__VectorMath__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VectorMath", function() { return __WEBPACK_IMPORTED_MODULE_4__VectorMath__["a"]; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsV0FBVyxDQUFDO0FBQzFCLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMsY0FBYyxDQUFDO0FBQzdCLGNBQWMsUUFBUSxDQUFDO0FBQ3ZCLGNBQWMsY0FBYyxDQUFDIn0=

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map