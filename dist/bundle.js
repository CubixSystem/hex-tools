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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_1 = __webpack_require__(3);
const Vector3_1 = __webpack_require__(1);
class Hexagon {
    static axialToCube(hex) {
        const q = hex.q;
        const r = hex.r;
        const s = -q - r;
        return new Vector3_1.Vector3(q, r, s);
    }
    static cubeToAxial(cube) {
        return new Vector2_1.Vector2(cube.q, cube.r);
    }
    static cubeDistance(a, b) {
        return Math.max(Math.abs(a.q - b.q), Math.abs(a.r - b.r), Math.abs(a.s - b.s));
    }
    static axialDistance(a, b) {
        const ac = Hexagon.axialToCube(a);
        const bc = Hexagon.axialToCube(b);
        return Hexagon.cubeDistance(ac, bc);
    }
    static cubeRound(cube) {
        let rq = Math.round(cube.q);
        let rr = Math.round(cube.r);
        let rs = Math.round(cube.s);
        const qDiff = Math.abs(rq - cube.q);
        const rDiff = Math.abs(rr - cube.r);
        const sDiff = Math.abs(rs - cube.s);
        if (qDiff > rDiff && qDiff > sDiff) {
            rq = -rr - rs;
        }
        else if (rDiff > sDiff) {
            rr = -rq - rs;
        }
        else {
            rs = -rq - rr;
        }
        return new Vector3_1.Vector3(rq, rr, rs);
    }
    static axialRound(hex) {
        return Hexagon.cubeToAxial(Hexagon.cubeRound(Hexagon.axialToCube(hex)));
    }
    static axialToPoint(hex, hexSize) {
        const q = hexSize * Math.sqrt(3) * (hex.q + hex.r / 2);
        const r = hexSize * 3 / 2 * hex.r;
        return new Vector2_1.Vector2(q, r);
    }
    static pointToHex(point, hexSize) {
        const q = (point.q * Math.sqrt(3) / 3 - point.r / 3) / hexSize;
        const r = point.r * 2 / 3 / hexSize;
        return Hexagon.axialRound(new Vector2_1.Vector2(q, r));
    }
    constructor(params) {
        params.s ?
            this.position = Hexagon.cubeToAxial(new Vector3_1.Vector3(params.q, params.r, params.s)) :
            this.position = new Vector2_1.Vector2(params.q, params.r);
    }
    get cubePosition() {
        return Hexagon.axialToCube(this.position);
    }
    get axialPosition() {
        return this.position;
    }
}
exports.Hexagon = Hexagon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiSGV4YWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFRbEM7SUFDUyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQVk7UUFDcEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBYTtRQUNyQyxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQVUsRUFBRSxDQUFVO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFVLEVBQUUsQ0FBVTtRQUNoRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xD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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector3 {
    constructor(q, r, s) {
        this.q = q;
        this.r = r;
        this.s = s;
    }
}
exports.Vector3 = Vector3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yMy5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiVmVjdG9yMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0UsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBVkQsMEJBVUMifQ==

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovQ29kZS9oZXgtdG9vbHMvc3JjL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQTBCIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(q, r) {
        this.q = q;
        this.r = r;
    }
}
exports.Vector2 = Vector2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVjdG9yMi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db2RlL2hleC10b29scy9zcmMvc3JjLyIsInNvdXJjZXMiOlsiVmVjdG9yMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBSUUsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBUkQsMEJBUUMifQ==

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map