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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/Cinemahall.js":
/*!***********************************!*\
  !*** ./application/Cinemahall.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Cinemahall {\r\n    constructor({rows, seats}, price, observable) {\r\n        this.rows = rows;\r\n        this.seats = seats;\r\n        this.price = price;\r\n        this.observable = observable;\r\n        this.clickHandler = this.clickHandler.bind(this);\r\n    }\r\n    deleteSelectedItem({row,seat}){\r\n        document.querySelector('.seat[data-row=\"'+row+'\"][data-seat=\"'+seat+'\"]').classList.remove('selected')\r\n    }\r\n    clickHandler(e){\r\n        if(e.target.classList.contains('selected')){\r\n            alert('yge zanyato!');\r\n        }else{\r\n            e.target.classList.add('selected');\r\n            let data={\r\n                row: e.target.dataset.row,\r\n                seat:e.target.dataset.seat,\r\n                price: e.target.dataset.price\r\n            }\r\n            this.observable.sendMessage('addToCard', data)\r\n        }\r\n    }\r\n    render() {\r\n        const app = document.getElementById('app');\r\n        let hall = document.createElement('div');\r\n        let screen = '<div class = \"screen\"> </div>'\r\n        hall.className = 'hall_wrap';\r\n        hall.innerHTML = screen;\r\n        for (let i = 0; i < this.rows; i++) {\r\n            let rowItem = document.createElement('div');\r\n            rowItem.className = 'row';\r\n            for (let j = 0; j < this.seats; j++) {\r\n                let seatItem = document.createElement('div');\r\n                seatItem.className = 'seat';\r\n                seatItem.dataset.row = i + 1;\r\n                seatItem.dataset.seat = j + 1;\r\n                seatItem.innerText = j + 1;\r\n                if (i <= 8) {\r\n                    seatItem.classList.add('low');\r\n                    seatItem.dataset.price = this.price.low;\r\n                } else {\r\n                    seatItem.classList.add('high');\r\n                    seatItem.dataset.price = this.price.high;\r\n                }\r\n                seatItem.onclick = this.clickHandler;\r\n                rowItem.append(seatItem);\r\n            }\r\n            hall.append(rowItem);\r\n        }\r\n        app.append(hall)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cinemahall);\n\n//# sourceURL=webpack:///./application/Cinemahall.js?");

/***/ }),

/***/ "./application/Observer.js":
/*!*********************************!*\
  !*** ./application/Observer.js ***!
  \*********************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable(){\n  // Создаем список подписаных обьектов\n  const observers = [];\n  // Оповещение всех подписчиков о сообщении\n  this.sendMessage = function(type,  msg ){\n    observers.filter( item => item.type === type).map( obs => {\n      obs.notify(msg);\n    });\n  };\n  // Добавим наблюдателя\n  this.addObserver = function( observer ){\n    observers.push( observer );\n  };\n}\n\n// Сам наблюдатель:\nfunction Observer(type, behavior ){\n  this.type = type;\n  // Делаем функцию, что бы через callback можно\n  // было использовать различные функции внутри\n  this.notify = function( msg ){\n    behavior( msg );\n  };\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./application/Observer.js?");

/***/ }),

/***/ "./application/TicketCard.js":
/*!***********************************!*\
  !*** ./application/TicketCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Card {\r\n    constructor(observable) {\r\n        this.tickets = [];\r\n        this.observable = observable;\r\n        this.deleteTicket = this.deleteTicket.bind(this);\r\n        this.addTicket = this.addTicket.bind(this);\r\n    }\r\n\r\n    deleteTicket(row, seat) {\r\n        let data = {\r\n            row: row,\r\n            seat: seat\r\n        };\r\n        this.tickets = this.tickets.filter(ticket => {\r\n            return (ticket.row == row && ticket.seat == seat) ? false : ticket;\r\n        });\r\n        this.calculateTotalPrice();\r\n        document.querySelector('.card_item[data-row=\"' + row + '\"][data-seat=\"' + seat + '\"]').remove();\r\n        this.observable.sendMessage('deleteTicket', data)\r\n    }\r\n\r\n    addTicket(data) {\r\n        this.tickets.push({...data})\r\n        let card = document.querySelector('.card_wrap');\r\n        let itemwrap = document.querySelector('.card_item_wrap');\r\n        let item = document.createElement('div');\r\n        item.className = 'card_item';\r\n        item.dataset.row = data.row;\r\n        item.dataset.seat = data.seat;\r\n        item.innerHTML =\r\n            `<div>row: ${data.row}</div>\r\n             <div>seat: ${data.seat}</div>\r\n             <div>price: ${data.price}</div>\r\n             <div class=\"delete\">x</div>\r\n             `;\r\n        item.querySelector('.delete').onclick = () => {\r\n            this.deleteTicket(data.row, data.seat);\r\n        };\r\n        itemwrap.prepend(item);\r\n        card.prepend(itemwrap);\r\n        this.calculateTotalPrice();\r\n        setTimeout(()=>this.deleteTicket(data.row,data.seat), 60000);\r\n    }\r\n\r\n\r\n    calculateTotalPrice() {\r\n        let totalItem = document.querySelector('.total');\r\n        totalItem.innerText = null;\r\n        totalItem.innerText = this.tickets.reduce((sum, cur) => sum + Number(cur.price), 0);\r\n    }\r\n    addToStorage(){\r\n        if (this.tickets.length>0){\r\n            let boughtTickets = JSON.parse(localStorage.getItem('cinemaTickets'));\r\n            this.tickets.forEach(item=>boughtTickets.push(item))\r\n            localStorage.setItem('cinemaTickets', JSON.stringify(boughtTickets));\r\n        }else{\r\n            alert('vi ni4ego ne vibrali')\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const app = document.getElementById('app');\r\n        let totalPrice = `<div class=\"total_wrap\"><div> VSEGO: <b class=\"total\">0</b></div> <div class=\"buy\">КУПИТЬ</div></div>`;\r\n        let card = document.createElement('div');\r\n        let itemwrap = document.createElement('div');\r\n        card.className = 'card_wrap';\r\n        itemwrap.className = 'card_item_wrap';\r\n        card.innerHTML = totalPrice;\r\n\r\n        app.appendChild(itemwrap);\r\n        app.appendChild(card);\r\n        app.querySelector('.buy').onclick = ()=>{\r\n            this.addToStorage();\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./application/TicketCard.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/Observer.js\");\n/* harmony import */ var _Cinemahall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cinemahall */ \"./application/Cinemahall.js\");\n/* harmony import */ var _TicketCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketCard */ \"./application/TicketCard.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    let hallConfig = {\n        rows: 10,\n        seats: 14\n    };\n    let priceConfig = {\n        low: 70,\n        high: 160\n    }\n\n    class Cinema {\n        constructor(hallConfig, priceConfig, card) {\n            this.hallConfig = hallConfig;\n            this.priceConfig = priceConfig;\n            this.card = card;\n            this.observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n            this.cinemahall = new _Cinemahall__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.hallConfig, this.priceConfig,this.observable);\n            this.card = new _TicketCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.observable);\n        }\n        initObserver(){\n            let addTicketToCard = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]('addToCard', (msg)=> this.card.addTicket(msg));\n            this.observable.addObserver(addTicketToCard);\n            let deleteTicketFromHall = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]('deleteTicket',(msg)=> this.cinemahall.deleteSelectedItem(msg));\n            this.observable.addObserver(deleteTicketFromHall)\n        }\n        init() {\n            let boughtTickets = JSON.parse(localStorage.getItem('cinemaTickets'));\n            this.cinemahall.render();\n            this.card.render();\n            if (boughtTickets) boughtTickets.forEach(item=>{\n                // this.card.addTicket(item);\n                document.querySelector('.seat[data-row=\"'+item.row+'\"][data-seat=\"'+item.seat+'\"]').classList.add('selected')\n            });\n            this.initObserver();\n        }\n    }\n    let cinema=new Cinema(hallConfig,priceConfig, _TicketCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    cinema.init();\n})\n\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });