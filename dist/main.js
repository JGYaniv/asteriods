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

/***/ "./src/asteriod.js":
/*!*************************!*\
  !*** ./src/asteriod.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst curelean = \"#2a52be\"\nconst lebowskiPantone = [\"#e6b080\", \"#a68200\", \"43351F\", \"#e36b4d\", \"#4d263b\", \"#2a52be\"]\nconst radii = [4,4,4,5,5,5,5,5,10,10,10,15,20,30]\nfunction Asteriod(options) {\n    this.COLOR = Util.pickRandom(lebowskiPantone);\n    this.RADIUS = Util.pickRandom(radii);\n\n    MovingObject.call(this, {\n        color: this.COLOR,\n        radius: this.RADIUS,\n        pos: options.pos,\n        vel: options.vel\n    });\n}\n\nUtil.inherits(Asteriod, MovingObject);\n\nmodule.exports = Asteriod;\n\n//# sourceURL=webpack:///./src/asteriod.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteriod = __webpack_require__(/*! ./asteriod.js */ \"./src/asteriod.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Game(){\n    this.DIM_X = 1000;\n    this.DIM_Y = 500;\n    this.NUM_ASTERIODS = 100;\n    this.asteriods = [];\n}\n\n\nGame.prototype.addAsteriods = function(ctx){\n    // debugger\n    this.draw(ctx);\n\n    for (let i=0; i<this.NUM_ASTERIODS; i++){\n        const asteriod = new Asteriod({\n            pos: this.randomPosition(),\n            vel: Util.randomVec(10)\n        });\n\n        this.asteriods.push(asteriod);\n        console.log(asteriod);\n        asteriod.move(this)\n        asteriod.draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function (ctx) {\n    this.draw(ctx);\n    console.log(\"moving\")\n    this.asteriods.forEach((asteriod) => {\n        asteriod.move(this);\n    })\n\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.asteriods.forEach(function(asteriod) {\n        asteriod.draw(ctx);\n    })\n};\n\nGame.prototype.randomPosition = function(){\n    return [Math.floor(Math.random() * this.DIM_X), Math.floor(Math.random() * this.DIM_Y)]\n};\n\nGame.prototype.wrap = function(pos){\n    // console.log([pos[0] % this.DIM_X, pos[1] % this.DIM_Y])\n    return [Math.abs(pos[0] % this.DIM_X), Math.abs(pos[1] % this.DIM_Y)]\n}\n\nGame.prototype.checkCollisions = function(){\n    for(let i=0; i<this.asteriods.length; i++){\n        for(let j=i+1; j<this.asteriods.length; j++){\n            // debugger\n            let ast1 = this.asteriods[i];\n            let ast2 = this.asteriods[j];\n            if (ast1.isCollidedWith(ast2)){\n                let newVel1 = [ast1.vel[0] * -1, ast1.vel[1] * -1];\n                let newVel2 = [ast2.vel[0] * -1, ast2.vel[1] * -1];\n                ast1.vel = newVel1\n                ast2.vel = newVel2\n            }\n        }\n    }\n}\n\nGame.prototype.step = function(ctx){\n    this.moveObjects(ctx);\n    this.checkCollisions();\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n};\n\nGameView.prototype.start = function () {\n    this.game.addAsteriods(this.ctx);\n    setInterval(() => {\n        this.game.step(this.ctx)\n    }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    canvas.height = 500;\n    canvas.width = 1000;\n    const ctx = canvas.getContext(\"2d\");\n    const gameView = new GameView(ctx);\n    gameView.start();\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(...this.pos, this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(game){\n   let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n   this.pos = game.wrap(newPos)\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    const sideX = this.pos[0] - otherObject.pos[0];\n    const sideY = this.pos[1] - otherObject.pos[1];\n    let distance = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));\n    if ((this.radius + otherObject.radius) > distance){\n        return true;\n    } else {\n        return false;\n    }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nconst Util = {\n  pickRandom(array){\n    return array[Math.floor(Math.random() * array.length)]\n  },\n  inherits(childClass, parentClass) {\n    function Surrogate(){}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });