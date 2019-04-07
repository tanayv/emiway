(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n    height: 0;\n    width: 0;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTs7QUFFWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<ng-container *ngIf=\"activeMode === 0\">\n  <app-input (roomGenerated)=\"generateRoom($event)\"></app-input>\n</ng-container>\n\n<!-- Study Room Scene -->\n<div *ngIf=\"activeMode === 1\">\n  <app-vr-scene [wallColorHex]=\"color\" [recs]=\"furniture\" [room]=\"roomType\"></app-vr-scene>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _suggestions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggestions.service */ "./src/app/suggestions.service.ts");
/* harmony import */ var _wayfair_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wayfair.data */ "./src/app/wayfair.data.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(suggestionsService) {
        this.suggestionsService = suggestionsService;
        this.title = 'emiway';
        this.activeMode = 0;
        /** Parameters to be sent to GCP Backend */
        this.roomType = "";
        this.color = "#CEB180";
        this.material = "emissive:#d2ca9f;side:double";
        /** Furniture Recommendations */
        this.firstItem = {};
        this.secondItem = {};
        this.furniture = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.generateRoom = function (event) {
        var _this = this;
        var payload = JSON.parse(event);
        this.color = payload.color;
        this.roomType = payload.roomType;
        //BED LIVING STUDY R G B//
        var bed = 0;
        var living = 0;
        var study = 0;
        if (this.roomType === "living room")
            living = 1;
        else if (this.roomType === "study room")
            study = 1;
        else
            bed = 1;
        var red;
        var green;
        var blue;
        this.suggestionsService.fetchRecommendations([bed, living, study, 255, 0, 0]).subscribe(function (response) {
            console.log("Response from bishk", response.ans);
            _this.furniture = response.ans.map(function (index) { return (_wayfair_data__WEBPACK_IMPORTED_MODULE_3__["default"][index]); });
            console.log("Finalized furniture", _this.furniture);
            _this.activeMode = 1;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_suggestions_service__WEBPACK_IMPORTED_MODULE_2__["SuggestionsService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_suggestions_service__WEBPACK_IMPORTED_MODULE_2__["SuggestionsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _vr_scene_vr_scene_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vr-scene/vr-scene.component */ "./src/app/vr-scene/vr-scene.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_5__["InputComponent"],
                _vr_scene_vr_scene_component__WEBPACK_IMPORTED_MODULE_6__["VRSceneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-column {\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    height: 100%;\n    padding: 30px;\n}\n\n.right-column {\n    width: 50%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n    background-image: url('login-bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.form.center {\n    text-align: center;\n}\n\n.form {\n    width: 90%;\n    margin: 10px auto;\n    padding: 20px;\n}\n\n.form h1 {\n    font-size: 1.8rem;\n    margin: 0;\n    color: #3a3a3a;\n}\n\n.form p {\n    font-size: 1.3rem;\n    line-height: 1.8rem;\n    margin: 5px 0 20px 0;\n    color: #5c5c5c;\n}\n\n.button.room-type {\n    width: calc(100%/3 - 6px); \n    height: 100px;\n    border-radius: 5px;\n    border: 1px solid #aaaaaa;\n    color: #3a3a3a;\n    display: inline-block;\n    margin-right: 3px;\n    margin-bottom: 3px;\n    text-align: center;\n    font-size: 1.4rem;\n    line-height: 100px;\n    cursor: pointer;\n}\n\n.button.room-type:hover {\n    border: 1px solid #000;\n}\n\n.button.room-type.selected {\n    background-color: #278a91;\n    color: #fff;\n    border: 1px solid #fff;\n}\n\n.header {\n    text-align: center;\n    height: 40px;\n    background: url('logo.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: left center;\n    width: 80%;\n    margin: 30px auto;\n}\n\nselect {\n    width: 80%;\n    background: none;\n    height: 50px;\n    font-size: 1.3rem;\n    line-height: 50px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.color-display {\n    width: calc(20% - 5px);\n    margin-right: 5px;\n    height: 50px;\n    width: 50px;\n    display: inline-block;\n    vertical-align: top;\n    padding: 5px;\n}\n\n.button.submit {\n    width: 60%;\n    background-color: #673AB7;\n    color: #fff;\n    font-size: 1.2rem;\n    padding: 20px;\n    margin: 10px auto;\n    text-align: center;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.button.submit:hover {\n    background-color: #512DA8;\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHFDQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQkFBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5yaWdodC1jb2x1bW4ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luLWJnLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmZvcm0uY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3JtIGgxIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzYTNhM2E7XG59XG5cblxuLmZvcm0gcCB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICBtYXJnaW46IDVweCAwIDIwcHggMDtcbiAgICBjb2xvcjogIzVjNWM1Yztcbn1cblxuXG4uYnV0dG9uLnJvb20tdHlwZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJS8zIC0gNnB4KTsgXG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcbiAgICBjb2xvcjogIzNhM2EzYTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMTAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5idXR0b24ucm9vbS10eXBlOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4uYnV0dG9uLnJvb20tdHlwZS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3OGE5MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG5cbi5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9sb2dvLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbnNlbGVjdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNvbG9yLWRpc3BsYXkge1xuICAgIHdpZHRoOiBjYWxjKDIwJSAtIDVweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ1dHRvbi5zdWJtaXQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M0FCNztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLnN1Ym1pdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxMkRBODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-column\">\n    <div class=\"header\">\n        <div class=\"logo\"></div>\n    </div>\n    <div class=\"form\">\n        <h1>Type of Room</h1>\n        <p>This helps us identify the role that the piece of furniture we recommend has to play in your room</p>\n        <div class=\"button room-type\" (click)=\"selectRoom(0)\" [ngClass]=\"{'selected': activeRoomIndex==0}\">\n            Living Room\n        </div>\n        <div class=\"button room-type\" (click)=\"selectRoom(1)\"  [ngClass]=\"{'selected': activeRoomIndex==1}\">\n            Study Room\n        </div>\n        <div class=\"button room-type\" (click)=\"selectRoom(2)\" [ngClass]=\"{'selected': activeRoomIndex==2}\">\n            Bedroom\n        </div>\n    </div>\n    <div class=\"form\">\n        <h1>Theme</h1>\n        <p>We use this to match our furniture recommendations with the decor of your room</p>\n        <div class=\"select-container\">\n            <div class=\"color-display\" [ngStyle]=\"{'background-color': colorList[activeColorIndex].hex}\" ></div>\n            <select (change)=\"selectColor($event.target.value)\">\n                <option *ngFor=\"let color of colorList; index as i\" [value]=\"i\">{{ color.name }}</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form center\">\n        <div class=\"button submit\" (click)=\"generateRoom()\">Get Recommendations</div>\n    </div>\n</div>\n<div class=\"right-column\">\n</div>"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.activeRoomIndex = 0;
        this.roomGenerated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.roomTypeList = ["living room", "study room", "bedroom"];
        this.activeColorIndex = 0;
        this.colorList = [
            { name: "Blue", hex: "#1976D2", dark: true },
            { name: "Purple", hex: "#4527A0", dark: true },
            { name: "Green", hex: "#43A047", dark: true },
            { name: "Amber", hex: "#FFECB3", dark: true },
            { name: "Teal", hex: "#00897B", dark: true },
            { name: "Orange", hex: "#E64A19", dark: true }
        ];
    }
    InputComponent.prototype.selectRoom = function (type) {
        this.activeRoomIndex = type;
    };
    InputComponent.prototype.selectColor = function (index) {
        this.activeColorIndex = index;
    };
    InputComponent.prototype.generateRoom = function () {
        this.roomGenerated.emit(JSON.stringify({
            roomType: this.roomTypeList[this.activeRoomIndex],
            color: this.colorList[this.activeColorIndex].hex
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InputComponent.prototype, "roomGenerated", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
        })
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/suggestions.service.ts":
/*!****************************************!*\
  !*** ./src/app/suggestions.service.ts ***!
  \****************************************/
/*! exports provided: SuggestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionsService", function() { return SuggestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SuggestionsService = /** @class */ (function () {
    function SuggestionsService(http) {
        var _this = this;
        this.http = http;
        this.url = "http://dc6fb441.ngrok.io/incomes";
        this.fetchRecommendations = function (payload) {
            console.log("Payload sent to API", { "param": payload });
            return _this.http.post(_this.url, { "param": payload });
            //return [5, 44]
        };
    }
    SuggestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SuggestionsService);
    return SuggestionsService;
}());



/***/ }),

/***/ "./src/app/vr-scene/vr-scene.component.css":
/*!*************************************************!*\
  !*** ./src/app/vr-scene/vr-scene.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZyLXNjZW5lL3ZyLXNjZW5lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vr-scene/vr-scene.component.html":
/*!**************************************************!*\
  !*** ./src/app/vr-scene/vr-scene.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a-scene vr-mode-ui=\"enabled: true\">\n\n\n\n\n    <ng-container class=\"standard-before-import\" *ngIf=\"room === 'fallback'\">\n        <a-gltf-model position=\"4.59529 -0.09118 0.56989\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/36990/109/1091009.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/36990/109/1091009.glb\"></a-gltf-model>\n        <a-gltf-model position=\"5.44413 -0.04121 0.57618\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\"></a-gltf-model>\n        <a-gltf-model position=\"5.50777 0 -0.2824\" src=\"http://img.wfrcdn.com/docresources/37308/106/1068437.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/37308/106/1068437.glb\"></a-gltf-model>\n        \n        \n        \n        <a-gltf-model id='variable-furniture-1' src=\"http://img.wfrcdn.com/docresources/36990/112/1125477.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/36990/112/1125477.glb\"></a-gltf-model>\n        \n        <a-sky color=\"#ECECEC\" material=\"\" geometry=\"\"></a-sky>\n        <a-plane walls material=\"side:double\" position=\"3 0 3\" rotation=\"-90 0 0\" width=\"8\" height=\"8\" color=\"#feefd5\" id=\"floor\" geometry=\"\"></a-plane>\n        <a-plane walls position=\"2.72077 4.97819 3.92835\" material=\"emissive:#CEB180\" rotation=\"90 0 90\" width=\"8\" height=\"8\" color=\"#CEB180\" id=\"plane-roof\" geometry=\"width:10\"></a-plane>\n        <a-plane walls position=\"2.69566 -0.0338 -1.01893\" width=\"8\" height=\"10\" color=\"#fffdd0\" id=\"front\" material=\"\" geometry=\"\"></a-plane>\n        <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-1\" position=\"6.63609 -0.02469 3.84413\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n        <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-2\" position=\"-1.19497 0.0465 3.86989\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n    </ng-container>\n\n    <ng-container class=\"room-1\" *ngIf=\"room === 'study room'\">\n            <a-gltf-model position=\"4.59529 -0.09118 0.56989\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/36990/109/1091009.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/36990/109/1091009.glb\"></a-gltf-model>\n            <a-gltf-model position=\"5.44413 -0.04121 0.57618\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\"></a-gltf-model>\n            <a-gltf-model position=\"5.50777 0 -0.2824\" src=\"http://img.wfrcdn.com/docresources/37308/106/1068437.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/37308/106/1068437.glb\"></a-gltf-model>\n            <a-gltf-model id='variable-furniture-1' src=\"http://img.wfrcdn.com/docresources/36990/112/1125477.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/36990/112/1125477.glb\"></a-gltf-model>\n            \n            <a-sky color=\"#ECECEC\" material=\"\" geometry=\"\"></a-sky>\n            <a-plane walls material=\"side:double\" position=\"3 0 3\" rotation=\"-90 0 0\" width=\"8\" height=\"8\" color=\"#feefd5\" id=\"floor\" geometry=\"\"></a-plane>\n            <a-plane walls position=\"2.72077 4.97819 3.92835\" material=\"emissive:#CEB180\" rotation=\"90 0 90\" width=\"8\" height=\"8\" color=\"#CEB180\" id=\"plane-roof\" geometry=\"width:10\"></a-plane>\n            <a-plane walls position=\"2.69566 -0.0338 -1.01893\" width=\"8\" height=\"10\" color=\"#fffdd0\" id=\"front\" material=\"\" geometry=\"\"></a-plane>\n            <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-1\" position=\"6.63609 -0.02469 3.84413\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n            <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-2\" position=\"-1.19497 0.0465 3.86989\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n    </ng-container>\n\n    <ng-container *ngIf=\"room === 'living room'\">\n        <!-- table -->\n        <a-gltf-model src=\"http://img.wfrcdn.com/docresources/36984/108/1089562.glb\" rotation=\"0 90 0\" position=\"0.48016 0 3.20641\" gltf-model=\"http://img.wfrcdn.com/docresources/36984/108/1089562.glb\"></a-gltf-model>\n        \n        <!-- chairs -->\n        <a-gltf-model src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" rotation=\"0 90 0\" position=\"-0.51125 0 2.98238\" gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n        <a-gltf-model src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" rotation=\"0 90 0\" position=\"-0.49799 0 3.5656\" gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n        <a-gltf-model gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" position=\"1.45747 0 3.5656\" rotation=\"0 -90 0\" src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n        <a-gltf-model gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" position=\"1.46749 0 2.98238\" rotation=\"0 -90 0\" src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n        <a-gltf-model gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" position=\"0.48976 0 4.40099\" rotation=\"0 -180 0\" src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n        <a-gltf-model id='variable-furniture-1' gltf-model=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\" position=\"0.48976 0 2.0289\" src=\"http://img.wfrcdn.com/docresources/30973/107/1072108.glb\"></a-gltf-model>\n\n        <a-sky color=\"#ECECEC\" material=\"\" geometry=\"\"></a-sky>\n        <a-plane walls material=\"side:double\" position=\"3 0 3\" rotation=\"-90 0 0\" width=\"8\" height=\"8\" color=\"#feefd5\" id=\"floor\" geometry=\"\"></a-plane>\n        <a-plane walls position=\"2.72077 4.97819 3.92835\" material=\"emissive:#CEB180\" rotation=\"90 0 90\" width=\"8\" height=\"8\" color=\"#CEB180\" id=\"plane-roof\" geometry=\"width:10\"></a-plane>\n        <a-plane walls position=\"2.69566 -0.0338 -1.01893\" width=\"8\" height=\"10\" color=\"#fffdd0\" id=\"front\" material=\"\" geometry=\"\"></a-plane>\n        <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-1\" position=\"6.63609 -0.02469 3.84413\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n        <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-2\" position=\"-1.19497 0.0465 3.86989\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n    </ng-container>\n\n    <ng-container *ngIf=\"room === 'bedroom'\">\n            \n        <!-- bed -->\n            <a-gltf-model gltf-model=\"./../assets/models/scene.gltf\" position=\"4.93434 0.8 2.89942\" scale=\"0.004 0.004 0.004\" rotation=\"0 270 0\"></a-gltf-model>\n        \n            <!-- rug -->\n            <a-gltf-model gltf-model=\"http://img.wfrcdn.com/docresources/36989/107/1073047.glb\" position=\"2.95455 0 2.90404\" src=\"http://img.wfrcdn.com/docresources/36989/107/1073047.glb\" scale=\"0.7 0.7 0.7\"></a-gltf-model>\n        \n            <!-- bedside tables -->\n            <a-gltf-model position=\"6.0502 0 1.51053\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\"></a-gltf-model>\n            <a-gltf-model position=\"6.05019 -0.04121 4.46507\" rotation=\"0 90 0\" src=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\" gltf-model=\"http://img.wfrcdn.com/docresources/38454/109/1092868.glb\"></a-gltf-model>\n\n            <!-- planes -->\n            <a-sky color=\"#ECECEC\" material=\"\" geometry=\"\"></a-sky>\n            <a-plane material=\"side:double\" position=\"3 0 3\" rotation=\"-90 0 0\" width=\"8\" height=\"8\" color=\"#feefd5\" id=\"floor\" geometry=\"\"></a-plane>\n            <a-plane position=\"2.72077 4.97819 3.92835\" material=\"emissive:#CEB180\" rotation=\"90 0 90\" width=\"8\" height=\"8\" color=\"#CEB180\" id=\"plane-roof\" geometry=\"width:10\"></a-plane>\n            <a-plane position=\"2.69566 -0.0338 -1.01893\" width=\"8\" height=\"10\" color=\"#fffdd0\" id=\"front\" material=\"\" geometry=\"\"></a-plane>\n            <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-1\" position=\"6.63609 -0.02469 3.84413\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n            <a-plane color=\"#3F51B5\" material=\"emissive:#d2ca9f;side:double\" height=\"10\" geometry=\"\" id=\"far-wall-2\" position=\"-1.19497 0.0465 3.86989\" rotation=\"0 -90 90\" width=\"10\"></a-plane>\n    \n        \n        </ng-container>\n\n\n\n\n    <!-- environment lighting -->\n    <a-entity light=\"intensity:1.2\" position=\"0 1 1\"></a-entity>\n    \n    <a-gui-flex-container\n        flex-direction=\"column\" justify-content=\"center\" align-items=\"normal\" component-padding=\"0.1\" opacity=\"0.2\" width=\"3\" height=\"4.5\"\n        position=\"1 2 -0.8\" rotation=\"0 0 0\"\n    >\n        <a-gui-button cursor-next-item\n        width=\"2.5\" height=\"0.75\"\n        id=\"color-selector-button\" key-code=\"32\"\n        value=\"Next Item\"\n        font-family=\"Arial\"\n        margin=\"0 0 0.05 0\"\n    >\n    </a-gui-button>\n    <a-gui-button cursor-purchase\n        width=\"2.5\" height=\"0.75\"\n        id=\"color-selector-button\" key-code=\"32\"\n        value=\"Check Out\"\n        font-family=\"Arial\"\n        position=\"0 2 0\"\n    >\n    </a-gui-button>\n    </a-gui-flex-container>\n    <!-- camera position -->\n    <a-entity position=\"2 1.5 4\" camera look-controls=\"\">\n        <a-cursor></a-cursor>\n        <a-camera></a-camera>\n    </a-entity>\n</a-scene>"

/***/ }),

/***/ "./src/app/vr-scene/vr-scene.component.ts":
/*!************************************************!*\
  !*** ./src/app/vr-scene/vr-scene.component.ts ***!
  \************************************************/
/*! exports provided: VRSceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRSceneComponent", function() { return VRSceneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VRSceneComponent = /** @class */ (function () {
    function VRSceneComponent(ref) {
        this.title = 'emiway';
        this.wallColorHex = "#000";
        this.room = "fallback";
        this.recs = [];
        this.activeItemCounter = -1;
        this.activeMode = 0;
        this.elem = ref.nativeElement;
    }
    VRSceneComponent.prototype.ngOnInit = function () {
        var self = this;
        AFRAME.registerComponent('cursor-next-item', {
            init: function () {
                this.el.addEventListener('click', function (evt) {
                    console.log("Next: ", {
                        "currentCounter": self.activeItemCounter,
                        "item": self.recs[self.activeItemCounter]
                    });
                    if (self.activeItemCounter == self.recs.length - 1) {
                        self.activeItemCounter = 0;
                    }
                    else {
                        self.activeItemCounter++;
                        var variableFurniture = document.getElementById("variable-furniture-1");
                        variableFurniture.setAttribute("src", self.recs[self.activeItemCounter]["model"]["glb"]);
                        variableFurniture.setAttribute("gltf-model", self.recs[self.activeItemCounter]["model"]["glb"]);
                    }
                });
            },
            /**
             * Handle component removal.
             */
            remove: function () {
                document.getElementsByClassName("visuallyhidden")[0].remove();
            }
        });
        AFRAME.registerComponent('cursor-purchase', {
            init: function () {
                this.el.addEventListener('click', function (evt) {
                    window.location.assign(self.recs[self.activeItemCounter]["product_page_url"]);
                });
            },
            /**
             * Handle component removal.
             */
            remove: function () {
                document.getElementsByClassName("visuallyhidden")[0].remove();
            }
        });
        AFRAME.registerComponent('walls', {
            init: function () {
                console.log("Initializing walls with color", self.wallColorHex);
                var wall1 = document.getElementById('far-wall-1');
                wall1.setAttribute('color', self.wallColorHex);
                wall1.setAttribute('material', "emissive:" + self.wallColorHex + ";side:double");
                var wall2 = document.getElementById('far-wall-2');
                wall2.setAttribute('color', self.wallColorHex);
                wall2.setAttribute('material', "emissive:" + self.wallColorHex + ";side:double");
                /** Spawn Variable Furniture Part 1 */
                self.activeItemCounter = 0;
                var variableFurniture = document.getElementById("variable-furniture-1");
                variableFurniture.setAttribute("src", self.recs[self.activeItemCounter]["model"]["glb"]);
                variableFurniture.setAttribute("gltf-model", self.recs[self.activeItemCounter]["model"]["glb"]);
            },
            /**
             * Handle component removal.
             */
            remove: function () {
                document.getElementsByClassName("visuallyhidden")[0].remove();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VRSceneComponent.prototype, "wallColorHex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VRSceneComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], VRSceneComponent.prototype, "recs", void 0);
    VRSceneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vr-scene',
            template: __webpack_require__(/*! ./vr-scene.component.html */ "./src/app/vr-scene/vr-scene.component.html"),
            styles: [__webpack_require__(/*! ./vr-scene.component.css */ "./src/app/vr-scene/vr-scene.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], VRSceneComponent);
    return VRSceneComponent;
}());



/***/ }),

/***/ "./src/app/wayfair.data.ts":
/*!*********************************!*\
  !*** ./src/app/wayfair.data.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "sku": "ANDO1569",
        "product_name": "Dewitt Barrel Chair",
        "product_description": "This barrel side chair is the perfect seating addition to your home. Just add it to your living room, entertainment room, or even a children\u2019s play room for an added seat that is able to support up to 250 lbs. Child friendly, this piece is easily cleaned with soap and water. Measuring 38'' H x 46'' W x 44'' D, this rounded back chair is upholstered with a polyester blend and filled with foam. Easily assembled with detachable legs.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/andover-mills-dewitt-barrel-chair-w001504988.html",
        "class_name": "Accent Chairs",
        "sale_price": 399.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/59407815\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 46,
                "y": 44,
                "z": 38
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/30808\/118\/1180601.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30808\/118\/1185304.zip"
        }
    },
    {
        "sku": "CSTD2801",
        "product_name": "Marta Armchair",
        "product_description": "",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/corrigan-studio-marta-armchair-cstd2801.html",
        "class_name": "Accent Chairs",
        "sale_price": 369.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/36990\/33486437\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 26,
                "y": 21.9,
                "z": 32.3
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36990\/109\/1091009.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36990\/105\/1050153.zip"
        }
    },
    {
        "sku": "FV50959",
        "product_name": "Falls Armchair",
        "product_description": "Crafted of Kubu gray rattan which is coveted for its natural soft gray color, this Armchair is easy and breezy year round. With its artfully woven sculptural lines, this transitional chair is chic and comfortable in the family room or dining room.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/highland-dunes-falls-armchair-w000539672.html",
        "class_name": "Accent Chairs",
        "sale_price": 264.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/428\/12618121\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 25.64,
                "y": 25.31,
                "z": 35.35
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/428\/107\/1073540.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/428\/88\/885210.zip"
        }
    },
    {
        "sku": "GOLV5061",
        "product_name": "Bronwood Armchair",
        "product_description": "This Traditional Fabric Club Chair is a great addition to any room in your home. Featuring an extra cushioned seat and backrest along with lightly cushioned armrests, this chair is sure to be a favorite amongst the family.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/zipcode-design-bronwood-armchair-w001049553.html",
        "class_name": "Accent Chairs",
        "sale_price": 319.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/44308\/58627652\/1\/furniture%2Fpdp%2Fzipcode-design-bronwood-armchair.jpg",
        "model": {
            "dimensions_inches": {
                "x": 28.25,
                "y": 31.49,
                "z": 32.75
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/44316\/130\/1303267.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/44316\/130\/1308406.zip"
        }
    },
    {
        "sku": "LATR7704",
        "product_name": "Microscopium Swivel Barrel Chair",
        "product_description": "Pairing a swivel design with a silhouette, this distinctive barrel chair is sure to spark conversation in your favorite seating space. Its nailhead trim adds a timeless touch to your decor while its solid pattern blends effortlessly into monochromatic and vibrant palettes. Play into this piece's contemporary influence by adding it to a living room seating group comprised of a mid-century-inspired loveseat and streamlined sofa for a complementing look, then accent the arrangement with an embroidered patchwork pillow for a touch of texture. Build up the aesthetic by dotting nearby walls with beveled oval mirrors and black-and-white cityscape photographs for an eye-catching display, then pair it with hanging woven tapestry for an unexpected dash of drama. Whether you're seating guests at your next neighborhood get-together or enjoying weekend movie night, this polyester-upholstered chair is a perfect addition to your favorite aesthetic.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/latitude-run-microscopium-swivel-barrel-chair-latr7704.html",
        "class_name": "Accent Chairs",
        "sale_price": 295.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/40128\/41563048\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 26.9,
                "y": 25.73,
                "z": 27.21
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/40128\/107\/1072184.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/40128\/76\/763964.zip"
        }
    },
    {
        "sku": "LATR8439",
        "product_name": "Dorset Barrel Chair",
        "product_description": "Understated with a rounded silhouette, this barrel chair works wonderfully in both classic and contemporary ensembles. Its frame is crafted of birch wood, featuring a four-leg foundation with a dark brown finish. Its seat is topped off by a single cushion stuffed with medium-firm polyester fill, while the upholstery wraps around the rest in a versatile solid hue. Assembly is easy with only the legs needing to be attached once it arrives.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/latitude-run-dorset-barrel-chair-latr8439.html",
        "class_name": "Accent Chairs",
        "sale_price": 179.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/60043469\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 29.09,
                "y": 29.89,
                "z": 29.54
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/40128\/115\/1159971.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/40128\/117\/1175073.zip"
        }
    },
    {
        "sku": "LGLY3906",
        "product_name": "Birmingham Armchair",
        "product_description": "Whether using it during a family feast or when you\u2019re short a seat playing a hand of cards, extra chairs are always a good thing to have around the house. Take this one for example: Crafted from birch wood, it features a French-inspired aesthetic with a curved back, working well with a variety of styles. Upholstered in foam-filled polyester with button detailing for an inviting feel, this product can support up to 250 lbs. after assembly.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/langley-street-birmingham-armchair-lgly3906.html",
        "class_name": "Accent Chairs",
        "sale_price": 218.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/58360490\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 24.7,
                "y": 28.7,
                "z": 32
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/147\/1474540.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36991\/116\/1168126.zip"
        }
    },
    {
        "sku": "LRFY4876",
        "product_name": "Haywood Swivel Barrel Chair",
        "product_description": "",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/haywood-swivel-barrel-chair-lrfy4876.html",
        "class_name": "Accent Chairs",
        "sale_price": 409.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/42526\/37202443\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 32.22,
                "y": 30.44,
                "z": 31.99
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1462890.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/42526\/132\/1329393.zip"
        }
    },
    {
        "sku": "MCRW1865",
        "product_name": "PePPer Slipper Chair",
        "product_description": "Add a splash of streamlined style to your seating group with this slipper chair. Crafted with a solid birch frame, this piece is filled with foam for a medium firm feel. Its poly-blend upholstery is offered in a variety of tones to ensure it suits your color palette, while its single row of button-tufted details lend the solid-hued seat a touch of texture. Four amber-finished legs give it a bit of warmth and round out this design.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/wrought-studio-pepper-slipper-chair-w001340134.html",
        "class_name": "Accent Chairs",
        "sale_price": 209.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/58387287\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 24.89,
                "y": 31.29,
                "z": 31.46
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/33808\/119\/1195198.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/33808\/121\/1212181.zip"
        }
    },
    {
        "sku": "MCRW6355",
        "product_name": "Derrico Armchair",
        "product_description": "",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/mercury-row-derrico-armchair-mcrw6355.html",
        "class_name": "Accent Chairs",
        "sale_price": 335.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/29633\/43459213\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 22.1,
                "y": 28.44,
                "z": 34.51
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/33808\/128\/1284223.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/33808\/129\/1290414.zip"
        }
    },
    {
        "sku": "ONAW2547",
        "product_name": "Yerres Wingback Chair",
        "product_description": "This Yerres Wingback Chair is a tribute to the elegance of styles from the past gentle curves, button tufting and a hand finished frame. Add a touch of sophistication to your bedroom or living room with this chair.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/one-allium-way-yerres-wingback-chair-onaw2547.html",
        "class_name": "Accent Chairs",
        "sale_price": 429.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2418\/41010755\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 29.31,
                "y": 29.96,
                "z": 39.33
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37307\/112\/1123731.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37307\/114\/1140683.zip"
        }
    },
    {
        "sku": "RDBS1728",
        "product_name": "Yellowstone Valley Contemporary Armchair",
        "product_description": "Sleek design and superior comfort makes this piece an obvious favorite among family and friends. Sure to have guests arriving unannounced to enjoy the lux softness of this chair, your popularity just got a boost! Upholstered in a patterned fabric, the high-density foam filled cushion is conveniently removable for lasting use. Perfectly stitched, this chair is complete with padded arm rest.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/red-barrel-studio-yellowstone-valley-contemporary-armchair-rdbs1728.html",
        "class_name": "Accent Chairs",
        "sale_price": 1129.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/34591\/27298218\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 36.58,
                "y": 37.01,
                "z": 45.29
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/34591\/109\/1090515.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/34591\/101\/1016208.zip"
        }
    },
    {
        "sku": "SEHO1600",
        "product_name": "Randall Armchair",
        "product_description": "",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-randall-armchair-seho1600.html",
        "class_name": "Accent Chairs",
        "sale_price": 359.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/20186\/23142479\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 28.7,
                "y": 32.98,
                "z": 31.42
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37308\/119\/1199943.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37308\/121\/1215153.zip"
        }
    },
    {
        "sku": "VKGL1857",
        "product_name": "Potts Barrel Chair",
        "product_description": "Sit pretty or simply add high style to your space with this beautiful barrel chair. Crafted of wood, this delightful design is founded on a four leg tapered base with a dramatically curved top silhouette. Made in the USA, this piece features rounded arms, and a faux leather upholstery in a solid color, with a foam filling. Perfectly at home in modern and contemporary aesthetics, it arrives ready to use, with no assembly needed.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/wrought-studio-potts-barrel-chair-vkgl1857.html",
        "class_name": "Accent Chairs",
        "sale_price": 163.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/36987\/27237285\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 30.69,
                "y": 27.46,
                "z": 32.16
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36987\/128\/1280966.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36987\/128\/1285254.zip"
        }
    },
    {
        "sku": "WADL4889",
        "product_name": "Evanston Swivel Papasan Chair",
        "product_description": "This Papasan-inspired side chair is the perfect seating addition to your teen's modern room! Add it to their restful retreat for a stylish added seat to relax with a good book, or have at the ready when guests are over. Quintessentially contemporary and designed with clean lines in mind, this design is crafted of a stainless-steel frame with a chrome finish, and upholstered with faux leather, while filled with foam. Assembly is required.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/wade-logan-evanston-swivel-papasan-chair-wadl4889.html",
        "class_name": "Accent Chairs",
        "sale_price": 254.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/59140456\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 29.2,
                "y": 26.44,
                "z": 31.98
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36989\/129\/1293304.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36989\/129\/1296618.zip"
        }
    },
    {
        "sku": "WADL9371",
        "product_name": "Ares Armchair",
        "product_description": "An exotic beauty, you\u2019re sure to fall in love with this chair! Boasting beautiful crocodile textured faux leather and foam filled cushions for added comfort, the high back rest is equipped with a slight lean for a bit of extra relaxation, all supported upon a shiny chrome frame. Described in two words, this piece is subtle yet refined. The perfect addition to your home, this chair will quickly become a family favorite.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/wade-logan-ares-armchair-wadl9371.html",
        "class_name": "Accent Chairs",
        "sale_price": 348.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/58566361\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 29.74,
                "y": 33.43,
                "z": 33.08
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36989\/124\/1244612.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36989\/125\/1254567.zip"
        }
    },
    {
        "sku": "WDLN3255",
        "product_name": "Alfredo Swivel Lounge Chair",
        "product_description": "Rounding out your decor while providing sensible seating arrangements in small spaces, side chairs offer style and versatility to any interior design. Take this one for example: Bringing a touch of mid-century-inspired design to your abode, it showcases a rounded back and two flared arms. Crafted from metal, the base boasts a polished chrome coloring while the faux leather upholstery comes in a solid finish. Measures 39.4'' H x 28.7'' W x 24.8'' D.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/wade-logan-alfredo-swivel-lounge-chair-wdln3255.html",
        "class_name": "Accent Chairs",
        "sale_price": 313.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/55064355\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 28.7,
                "y": 24.8,
                "z": 35
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36989\/117\/1173534.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36989\/118\/1183086.zip"
        }
    },
    {
        "sku": "ZIPC4121",
        "product_name": "Liam Barrel Chair",
        "product_description": "Mooove on over to make room for your new favorite accent chair! This American-made design brings a little down-home flair to any seating arrangement, combining a cowhide pattern with a classic silhouette to create a piece that pairs well with both contemporary and rustic ensembles. Founded atop four tapered legs, its manufactured wood frame is wrapped in polyester blend fabric that\u2019s easy to keep pristine. Measuring 32'' H x 30.5'' W x 27.5'' D.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/zipcode-design-liam-barrel-chair-w000365291.html",
        "class_name": "Accent Chairs",
        "sale_price": 171.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/59803713\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 34.29,
                "y": 27.86,
                "z": 32.46
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37311\/108\/1089869.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37311\/101\/1014484.zip"
        }
    },
    {
        "sku": "ZIPC6590",
        "product_name": "Crescentia Slipper Chair",
        "product_description": "Why let your garden get all the glory? You can instantly add a little blooming beauty into your bedroom with this stunning slipper chair. Simply set it in a sunny corner for a posh spot to unwind with your latest read, or try pulling up an end table topped with a mirror and essential cosmetics to craft an impromptu vanity display. Founded atop four gently tapered legs finished in espresso, its clean-lined frame is crafted of solid wood and wrapped in floral-printed cotton upholstery. For a more lively living room look, try pulling it up beside a neutral loveseat for an instant pop of pattern. To tie it all together in your own style, just roll out a flat-woven rug on the floor below, hang up flowing sheer curtains, and set out a glossy white coffee table topped with a trio of lush succulents. Though this distinctive design is certainly striking solo, you can lend a little extra luxury by tossing a lush shag throw over the back.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/winston-porter-crescentia-slipper-chair-w001036922.html",
        "class_name": "Accent Chairs",
        "sale_price": 112.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/66214098\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 22,
                "y": 29.74,
                "z": 33
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/139\/1396770.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/0\/139\/1396771.zip"
        }
    },
    {
        "sku": "ALTL1608",
        "product_name": "Liseron Navy Indoor\/Outdoor Area Rug",
        "product_description": "Attractive enough for interior spaces with enough muscle to withstand the elements, hardworking indoor\/outdoor rugs bring the best of both worlds home. Crafted from stain-, fade-, and moisture-resistant polypropylene, this rug stands up to heavy foot traffic in entryways, patios, and beyond without shedding. Made in Turkey, this design features an intricate, floral-inspired motif with a 0.25'' high pile.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/sol-72-outdoor-liseron-navy-indooroutdoor-area-rug-altl1608.html",
        "class_name": "Area Rugs",
        "sale_price": 54.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/36985\/63564317\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 63,
                "y": 89,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36985\/107\/1072374.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36985\/75\/753376.zip"
        }
    },
    {
        "sku": "ANDO3516",
        "product_name": "Virginia Beige\/Red Area Rug",
        "product_description": "Every room needs an area rug \u2013 they help foster an inviting atmosphere by introducing pattern and color. This design depicts a bold paisley motif in hues of red and blue, making it a perfect match for modern and classic ensembles alike. Made in the USA, it\u2019s crafted from stain- and fade-resistant fibers with a 0.44'' pile height. No matter where you lay out this rug, we recommend pairing it with a rug pad for stability.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/andover-mills-virginia-beigered-area-rug-ando3516.html",
        "class_name": "Area Rugs",
        "sale_price": 39.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/30808\/34906844\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 60,
                "y": 96,
                "z": 0.44
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1462893.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30808\/76\/764264.zip"
        }
    },
    {
        "sku": "ANDO4524",
        "product_name": "Albion Beige\/Brown Leaves Area Rug",
        "product_description": "Instantly elevate your floors in understated elegance with this eye-catching rug, crafted from polypropylene. Its floral details add botanical charm to any space while its muted colors pair perfectly against a hardwood floor for a complementing look. Play up this piece's traditional influence by adding it to a entryway alongside a cherry-finished console table, topped with a trio of turned candleholders for a dash of dimension. Adorn nearby walls with equestrian canvas prints and typographic decor for an eye-catching display, then suspend a geometric pendant above the space to illuminate your room in visual appeal. With its floral motif and geometric details, this lovely rug is the perfect option for anchoring high traffic areas in the living room, or defining space in the den.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/winston-porter-albion-beigebrown-leaves-area-rug-w000172196.html",
        "class_name": "Area Rugs",
        "sale_price": 24.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/30808\/32903491\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 108,
                "y": 79,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/30808\/107\/1072499.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30808\/76\/764335.zip"
        }
    },
    {
        "sku": "ANDO4889",
        "product_name": "Smithtown Latte Brown Area Rug",
        "product_description": "No matter which room you\u2019re decorating, an area rug helps pull it all together. This design, for example, features a sprig of leaves to lend a natural touch to your ensemble. It\u2019s crafted from fade- and stain-resistant polyester with a 0.5'' pile height, so it encourages comfort underfoot while remaining easy to clean with regular vacuuming. We recommend pairing this piece with a rug pad to keep it steady on your floors.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/andover-mills-smithtown-latte-brown-area-rug-ando4889.html",
        "class_name": "Area Rugs",
        "sale_price": 33.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/56764884\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 63,
                "y": 89,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/30808\/109\/1096723.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30808\/105\/1050634.zip"
        }
    },
    {
        "sku": "BGLS4809",
        "product_name": "Indira Gray & Light Blue Area Rug",
        "product_description": "Update your teen\u2019s space from the ground up with this contemporary area rug, showcasing an abstract pattern in neutral gray and taupe tones with pops of light blue for a subtle splash of color. Power-loomed in Turkey from polypropylene with a medium 0.45\" pile height, this design is well suited to sit in high-traffic rooms inside your home. Wherever you decide to roll it out, we recommend you pair this piece with a rug pad to help it stay put.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-indira-gray-light-blue-area-rug-w000660168.html",
        "class_name": "Area Rugs",
        "sale_price": 40.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/37700\/34722173\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 96.1,
                "y": 132.02,
                "z": 0.46
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/109\/1099139.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/109\/1099140.zip"
        }
    },
    {
        "sku": "LATR7331",
        "product_name": "Myia Radiance Area Rug",
        "product_description": "Looking to add a decorative touch to your home? Don't forget about your floors! Adding an area rug like this is a great option for lending your space an eye-catching accent, while also protecting your hardwood or tile flooring. Woven in the USA from nylon and showcasing a leaf-inspired pattern, this rug is a great option for standing up to stains and high traffic. Showcasing a And with its 0.38'' pile height, it's perfect for a cushioned touch underfoot that's still easy to maintain. We recommend adding a rug pad to help keep this piece in place.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/latitude-run-myia-radiance-area-rug-latr7331.html",
        "class_name": "Area Rugs",
        "sale_price": 62.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/40128\/57066735\/1\/rugs%2Fpdp%2Flatitude-run-myia-radiance-area-rug.jpg",
        "model": {
            "dimensions_inches": {
                "x": 60.05,
                "y": 96.05,
                "z": 0.43
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/34591\/118\/1183841.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/34591\/118\/1189812.zip"
        }
    },
    {
        "sku": "MCRR7867",
        "product_name": "Marcelo Hand-Tufted Wool\/Cotton Ivory Area Rug",
        "product_description": "Set a chic, mid-century foundation for your stylish space with this ivory area rug, showcasing a concentric diamond motif. Made in India, this area rug is hand-tufted from a wool and cotton blend in a 0.5\" pile \u2013 perfect for rolling out in fashionable living rooms or digging your toes in right out of bed in the morning. Easily vacuumed or spot cleaned for effortless upkeep, this rug performs best when paired with a rug pad to prevent shifting and sliding.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mercury-row-marcelo-hand-tufted-woolcotton-ivory-area-rug-mcrr7867.html",
        "class_name": "Area Rugs",
        "sale_price": 63.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/73114909\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 90.11,
                "y": 114.14,
                "z": 0.72
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/33808\/109\/1090615.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/33808\/101\/1016867.zip"
        }
    },
    {
        "sku": "MCRW6632",
        "product_name": "Dorset Ivory\/Fuchsia Indoor Area Rug",
        "product_description": "Add a pop of pink to any ensemble in your home with this area rug. Blending vintaged charm with a touch of modern flair, it showcases a Persian-inspired motif with a medallion in the center and a matching border. Its vibrant fuchsia and ivory color palette is accented by antiqued detailing, giving this design a balanced and bright look. Machine-woven in Turkey from 100% polypropylene, it is stain- and fade-resistant, making it an ideal anchor for high-traffic spaces. We recommend you pair this piece with a rug pad for extra cushioning and traction underfoot.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mercury-row-dorset-ivoryfuchsia-indoor-area-rug-mcrw6632.html",
        "class_name": "Area Rugs",
        "sale_price": 29.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/44356\/44698702\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 22,
                "y": 72,
                "z": 0.2
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/44356\/107\/1077820.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/44356\/94\/944092.zip"
        }
    },
    {
        "sku": "MCRW7352",
        "product_name": "Mcguire Ivory\/Silver Area Rug",
        "product_description": "Taking cues from modern and minimalist designs, this understated area rug showcases a subtle striated pattern in neutral ivory and gray hues that blend easily with a variety of color palettes. Power-loomed in Turkey from 100% polypropylene with a low 0.4\" pile height. Wherever you decide to display this design, we recommend you roll out a rug pad underneath to help it stay put.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mercury-row-mcguire-ivorysilver-area-rug-mcrw7352.html",
        "class_name": "Area Rugs",
        "sale_price": 40.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/73120204\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 71.98,
                "y": 107.98,
                "z": 0.49
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1467327.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/33808\/76\/764667.zip"
        }
    },
    {
        "sku": "MTNA1015",
        "product_name": "Brandt Dark Gray Area Rug",
        "product_description": "Bare floor giving you the blues? Rolling out an area rug fixes that! This design brings boho-chic charm to any space, displaying a Persian-inspired motif with a medallion in the center and an erased-weave look for a touch of antiqued appeal. Crafted from polypropylene, this fade- and stain-resistant piece is perfect for placing in high-traffic areas such as the living room or entryway. No matter where it ends up, we recommend using a rug pad to keep it in place.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-brandt-dark-gray-area-rug-mtna1015.html",
        "class_name": "Area Rugs",
        "sale_price": 26.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/40287244\/1\/rugs%2Fpdp%2Fmistana-brandt-dark-gray-area-rug.jpg",
        "model": {
            "dimensions_inches": {
                "x": 48,
                "y": 72,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1072403.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/764251.zip"
        }
    },
    {
        "sku": "MTNA1398",
        "product_name": "Brandt Turquoise Area Rug",
        "product_description": "Not just a way to soften the step of a hardwood or tile floor, area rugs are artful accents all their own. This design showcases a damask medallion motif accented by weathered details for a look reminiscent of a triumphant flea market find. Crafted from polypropylene, it\u2019s also stain- and fade-resistant as well as easy to clean with regular vacuuming, making it a great pick for rolling out in high-traffic areas such as the entryway or living room.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-brandt-turquoise-area-rug-mtna1398.html",
        "class_name": "Area Rugs",
        "sale_price": 25.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/37055\/57120532\/1\/rugs%2Fpdp%2Fmistana-brandt-turquoise-area-rug.jpg",
        "model": {
            "dimensions_inches": {
                "x": 60,
                "y": 96,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/44356\/106\/1066102.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/44356\/86\/865335.zip"
        }
    },
    {
        "sku": "MTNA1678",
        "product_name": "Clair Dark Gray Area Rug",
        "product_description": "Proving neutral can still be noteworthy, this dynamic area rug showcases a modern geometric motif in dark gray hues to provide a pop of pattern in your teen\u2019s room. Power-loomed in Turkey from polypropylene with a medium 0.5\" pile height, it\u2019s an ideal base for a busy space since it\u2019s designed to handle heavy foot traffic. We recommend you pair this piece with a rug pad to help it stay put.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-clair-dark-gray-area-rug-mtna1678.html",
        "class_name": "Area Rugs",
        "sale_price": 27.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/64098346\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 60,
                "y": 89,
                "z": 0.25
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1072206.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/763999.zip"
        }
    },
    {
        "sku": "MTNA1789",
        "product_name": "Darchelle Pink Area Rug",
        "product_description": "Ready to stand up to high foot traffic in the entryway and take on occasional spills under the kitchen table, polypropylene rugs are ideal anchors for any mess-prone area of your abode. Take this one for example: made in Turkey, it is power-loomed from that must-have material and features an eye-catching Persian-inspired motif that rounds out modern arrangements or completes bold boho-chic ensembles. To keep this piece safely in place, we recommend using a rug pad.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-darchelle-pink-area-rug-mtna1789.html",
        "class_name": "Area Rugs",
        "sale_price": 56.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/46921865\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 48,
                "y": 72,
                "z": 0.25
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1073034.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/764922.zip"
        }
    },
    {
        "sku": "MTNA1822",
        "product_name": "Brandt Dark Gray Area Rug",
        "product_description": "A traditional design gets a trendy update in this dark gray area rug, showcasing an overdyed oriental motif. Made in Turkey, this area rug is power loomed from stain- and fade-resistant polypropylene in a low 0.25\" pile \u2013 perfect for rolling out in high-traffic living rooms and dining spaces prone to occasional spills and stains alike. Easily spot cleaned or vacuumed for fuss-free upkeep, this area rug performs best when paired with a rug pad to prevent shifting and sliding underfoot.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/mistana-brandt-dark-gray-area-rug-mtna1822.html",
        "class_name": "Area Rugs",
        "sale_price": 28.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/37055\/56367598\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 48,
                "y": 72,
                "z": 0.3
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1076305.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/764161.zip"
        }
    },
    {
        "sku": "WDLN3892",
        "product_name": "Cangelosi Gray Area Rug",
        "product_description": "A bold, contemporary pinwheel pattern defines this alluring area rug, showcasing soft hues of gray, ivory, and brown. Made in China, this rug is machine woven from a stain and fade-resistant polyester and acrylic blend in a high-low 0.5\u2019\u2019 pile\u2014perfect for laying out in the living room or digging your toes in right out of bed in the morning. Available in a selection of sizes to best suit your space, this rug works best when paired with a rug pad to prevent shifting and sliding.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/wade-logan-cangelosi-gray-area-rug-wdln3892.html",
        "class_name": "Area Rugs",
        "sale_price": 47.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/64884817\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 91.77,
                "y": 91.63,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/36989\/107\/1073047.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36989\/76\/764943.zip"
        }
    },
    {
        "sku": "WLAO3915",
        "product_name": "Aliyah Square Pink Area Rug",
        "product_description": "Bold, bright, and brimming with boho flair, this area rug is sure to make a splash in your teen\u2019s space. A Persian-inspired motif takes center stage for a pop of pattern, while pink and blue hues round out the look with even more eye-catching appeal. Power-loomed in Turkey from polypropylene with a low 0.25\" pile height, this design is well suited to sit in high-traffic rooms inside your home. We recommend you pair this piece with a rug pad to help it stay put.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/willa-arlo-interiors-aliyah-square-pink-area-rug-wlao3915.html",
        "class_name": "Area Rugs",
        "sale_price": 25.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/37700\/41017421\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 63,
                "y": 91,
                "z": 0.33
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1072415.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/764263.zip"
        }
    },
    {
        "sku": "WNST3848",
        "product_name": "Lahaina Donohoe Multicolor Indoor\/Outdoor Area Rug",
        "product_description": "With summer rainstorms rolling through, UV rays beating down, and plenty of foot traffic at pool parties and BBQs, your alfresco ensemble's foundation needs to be a polypropylene rug. Take this one, for example: Made in Turkey, it is power loomed from that must-have material with a low pile height for easy upkeep. Plus, it lends a pop of garden-inspired style with a scrolling floral motif in hues of red, green, yellow, and blue.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/sol-72-outdoor-lahaina-donohoe-multicolor-indooroutdoor-area-rug-wnst3848.html",
        "class_name": "Area Rugs",
        "sale_price": 46.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/55775329\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 63.15,
                "y": 89,
                "z": 0.36
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/139\/1392932.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/0\/141\/1413337.zip"
        }
    },
    {
        "sku": "ZPCD5905",
        "product_name": "Kistler Hand-Braided Multi Area Rug",
        "product_description": "An effortless glance-grabber in any space, this alluring area rug is sure to enliven your abode. Roll it out between a pair of crisp white loveseats for a pop of contrast in the living room, then make it shine with flickering candle lanterns atop weathered wood nightstands around the ensemble. Made in India, this ravishing rug is sure to stand out in any space. It is handcrafted of 100% cotton for a soft touch, while a braided design and a rainbow of vibrant hues make it effortlessly eye-catching. Switching up your style in the master suite? Take a solid-hued sumptuous comforter from simple to stunning in seconds by complementing it with this ravishing rug on the floor below. Though this posh piece brims with bohemian beauty all on its own, you can lend a little extra breezy appeal by dotting the walls around with a collection of curated antique prints.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/zipcode-design-kistler-hand-braided-multi-area-rug-zpcd5905.html",
        "class_name": "Area Rugs",
        "sale_price": 31.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/30593\/55591222\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 36,
                "y": 60,
                "z": 0.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37700\/107\/1071976.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37700\/76\/763780.zip"
        }
    },
    {
        "sku": "ZPCD6981",
        "product_name": "Gehl Modern Brown Arcs & Shapes Area Rug",
        "product_description": "Outfit your favorite aesthetic in versatile style with this eye-catching rug, an artful addition to any space. Its abstract geometric motif adds a pop of pattern to your decor while its muted hues blend effortlessly into both monochromatic and vibrant spaces. Lean into this piece's transitional influence by adding it to a contemporary living room alongside a streamlined sofa and tufted arm chair for a cohesive ensemble. Dot nearby walls with a rectangle mirror and landscape canvas print for an understated display, then pair it with metal typographic decor for a dash of dimension. Anchor the space with a glass-top coffee table, then use it to display charming flea market finds or a bowl of faux fruit for natural appeal. Equally at home defining high-traffic areas in the entryway, this charming rug instantly elevates your well-appointed decor ensemble.",
        "product_page_url": "https:\/\/www.wayfair.com\/rugs\/pdp\/zipcode-design-gehl-modern-brown-arcs-shapes-area-rug-zpcd6981.html",
        "class_name": "Area Rugs",
        "sale_price": 28.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/58397785\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 26.99,
                "y": 46.99,
                "z": 0.4
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/30593\/107\/1073238.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30593\/76\/765127.zip"
        }
    },
    {
        "sku": "BCHH7421",
        "product_name": "Stoneford Etagere Bookcase",
        "product_description": "A traditional silhouette gets a contemporary update in this etagere bookcase. Crafted of solid and manufactured wood in a classic painted finish, this bookcase features tasteful moldings, a slatted backing, and X-shaped panel sides. Each clean-lined shelf provides a perfect platform for displaying everything from rows of your favorite reads to framed photos and collected curios. Shipped flat-packed, this bookcase requires full assembly, and should take a team of two about 60 minutes to complete.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-stoneford-etagere-bookcase-bchh7421.html",
        "class_name": "Bookcases",
        "sale_price": 109.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/67439325\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 31.5,
                "y": 11.75,
                "z": 32.5
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/38454\/94\/942614.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/38454\/101\/1019705.zip"
        }
    },
    {
        "sku": "CLOP1021",
        "product_name": "Cubicals Cube Bookcase",
        "product_description": "",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/closetmaid-cubicals-cube-bookcase-clop1021.html",
        "class_name": "Bookcases",
        "sale_price": 69.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/36069\/16377394\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 36.07,
                "y": 11.61,
                "z": 47.64
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/147\/1475057.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36069\/76\/763066.zip"
        }
    },
    {
        "sku": "LRFY1920",
        "product_name": "Ermont Etagere Bookcase",
        "product_description": "Blending the charm of farmhouse aesthetics with modern minimalism, this understated bookcase brings on-trend style to any space in your home. Its compact 56.75\" H x 23.46\" W x 11.62\" D silhouette makes it an ideal option for smaller spaces, while its clean lines and open design ensure it won't overwhelm an existing arrangement. Crafted with a black-finished metal frame, this budget-friendly piece features five tiers made from manufactured wood in a natural finish, each with a weight capacity of 30 lbs., that are perfect for housing linens, cookbooks, or a decorative display. Assembly is required.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/ermont-etagere-bookcase-lrfy1920.html",
        "class_name": "Bookcases",
        "sale_price": 85.17,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/42526\/41294446\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 23.46,
                "y": 11.62,
                "z": 56.77
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1462330.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/42526\/76\/763897.zip"
        }
    },
    {
        "sku": "MCRF5348",
        "product_name": "Selzer Bookcase",
        "product_description": "More than just a platform to perch your collection of novels, accent pieces, and more, this bookcase offers a touch of glam style to your abode. Constructed from metal, it features a clean-lined frame awash in a warm brass finish, and strikes a rectangular silhouette. Since not all decorative displays come in the same size, it showcases six shelves at different heights and widths to accommodate tall potted plants and eye-catching decorative bowls alike.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/mercer41-selzer-bookcase-mcrf5348.html",
        "class_name": "Bookcases",
        "sale_price": 216.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/60845022\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 40.04,
                "y": 13.01,
                "z": 72.03
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1464051.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/39355\/121\/1210988.zip"
        }
    },
    {
        "sku": "MCRR3404",
        "product_name": "Chrysanthos Geometric Bookcase",
        "product_description": "Cut the clutter in your living room, office, or den with this five-tier ladder inspired bookcase. Showcase your favorite books or decorative pieces all in one place on the eight-tiered shelves of this piece. It is crafted from a combination of solid and manufactured wood with wood veneers. A tip over restraint device is included with this bookcase. Assembly is required for this contemporary piece.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/mercury-row-chrysanthos-geometric-bookcase-mcrr3404.html",
        "class_name": "Bookcases",
        "sale_price": 188.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/74052219\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 35.1,
                "y": 12,
                "z": 71
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/33808\/109\/1097492.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/33808\/75\/755655.zip"
        }
    },
    {
        "sku": "SEHO2183",
        "product_name": "Bowerbank Standard Bookcase",
        "product_description": "Bookcases aren't just for holding, well, books! Though they make ideal homes for your paperbacks, they're also perfect for staging framed family photos, keeping baskets filled with accessories, and putting your potted plants on display. Take this one for example: Made in the USA from manufactured wood, its understated frame gets a little more eye-catching with label accents. Measuring 47.5'' H x 53.13'' W x 12.13'' D, it includes 10 shelves.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-bowerbank-standard-bookcase-seho2183.html",
        "class_name": "Bookcases",
        "sale_price": 199.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/37308\/47750766\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 52.78,
                "y": 13.02,
                "z": 47.12
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37308\/106\/1068437.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37308\/75\/758937.zip"
        }
    },
    {
        "sku": "SEHO9871",
        "product_name": "Oridatown Standard Bookcase",
        "product_description": "Bookcases aren't just for holding, well, books! Though they make ideal homes for your teen\u2019s paperbacks, they're also perfect for staging framed family or friend photos, keeping baskets filled with accessories, and putting your potted plants on display. Take this one for example: Crafted from manufactured wood, it showcases x-shaped accents on its sides, and boasts a solid neutral finish for a look that won\u2019t clash with your current color palette.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-oridatown-standard-bookcase-seho9871.html",
        "class_name": "Bookcases",
        "sale_price": 195.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/51576463\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 31.73,
                "y": 12.72,
                "z": 65.98
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/150\/110\/1104004.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/150\/112\/1122853.zip"
        }
    },
    {
        "sku": "ZPCD1459",
        "product_name": "Ricardo Ladder Bookcase",
        "product_description": "Encourage your teen to make their space their own with this versatile ladder bookcase, perfect for putting framed photos, artful accents, or a collection of novels proudly on display. Crafted from manufactured wood, this budget-friendly piece features five shelves of varied depths to accommodate items of all sizes. A neutral finish outfits this design, ensuring it can complement any color palette your child dreams up. Assembly is required. The manufacturer backs this product with a one-year warranty.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/zipcode-design-ricardo-ladder-bookcase-zpcd1459.html",
        "class_name": "Bookcases",
        "sale_price": 56.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/2664\/71038051\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 22,
                "y": 14.46,
                "z": 70
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/37572\/107\/1071397.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/37572\/76\/763118.zip"
        }
    },
    {
        "sku": "ZPCD6675",
        "product_name": "Saskia Etagere Bookcase",
        "product_description": "Equally ideal for staging and storage space, this etagere style bookcase is a must-have for your abode. Keep it centered against a blank wall in the entryway to put framed family photos on display atop its five open shelves, then add in woven wicker bins to keep out-the-door accessories on hand. Taking on a stylish leaning silhouette, this distinctive design is crafted from laminate wood with a gently weathered gray finish.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/andover-mills-saskia-etagere-bookcase-w001476933.html",
        "class_name": "Bookcases",
        "sale_price": 113.84,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/2664\/47459214\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 25.15,
                "y": 18.17,
                "z": 60
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/30593\/107\/1077406.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/30593\/93\/935964.zip"
        }
    },
    {
        "sku": "BCHH7429",
        "product_name": "Stoneford Traditional Coffee Table",
        "product_description": "A breezy way to anchor your living room look, this coffee table brings both storage and style to your carefully curated ensemble. Its clean lines are emblematic of traditional styles, and x-shaped sides lend coastal flair. Made from manufactured wood, this design features a lower open shelf perfect for lining with woven wicker bins, while ample space up top makes room for coasters, fanning out magazines, and setting TV remotes.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/beachcrest-home-stoneford-traditional-coffee-table-bchh7429.html",
        "class_name": "Coffee & Cocktail Tables",
        "sale_price": 211.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/38454\/32250186\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 35.5,
                "y": 35.5,
                "z": 18
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/38454\/109\/1092868.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/38454\/76\/766575.zip"
        }
    },
    {
        "sku": "DBHC6310",
        "product_name": "Mathis Coffee Table Trunk with Lift Top",
        "product_description": "You may think of a coffee table as a simple place to rest movie night snacks and after-work snacks, but they can be much more! With both traditional style and versatile function, this lovely coffee table brings more to your ensemble. The simple silhouette and neutral oak-toned color palette give this table its classic look, while the antiqued hardware and rich oil-rubbed stain adds a touch of vintaged appeal that never goes out of style. More than just stylish, this table also features a spring-loaded rising tabletop, both front and side drawers, and castered feet. Set this lovely coffee table at the center of your living room to anchor your space in classic style, then build on the traditional appeal by rolling out a blue Persian rug and adding a brown leather Chesterfield sofa.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/darby-home-co-mathis-coffee-table-trunk-with-lift-top-dbhc6310.html",
        "class_name": "Coffee & Cocktail Tables",
        "sale_price": 397.99,
        "thumbnail_image_url": "https:\/\/secure.img.wfcdn.com\/lf\/43\/hash\/36984\/41918630\/1\/Woolwich%2BTrunk%2BCoffee%2BTable%2Bwith%2BLift-Top.jpg",
        "model": {
            "dimensions_inches": {
                "x": 46,
                "y": 26,
                "z": 20
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/0\/146\/1461839.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/36984\/76\/763358.zip"
        }
    },
    {
        "sku": "IVBX2371",
        "product_name": "Sydnor Coffee Table",
        "product_description": "Seating ensemble feeling empty? Try a coffee table! Not only do they anchor your space, but they offer room to stage a display and serve up trays of treats when you find yourself entertaining. Take this one for example: Crafted from powder-coated steel, the frame showcases clean lines and boasts a solid color for a look that blends easily with your current color palette. Plus, it features two glass tiers for keeping books, beverages, and beyond.",
        "product_page_url": "https:\/\/www.wayfair.com\/furniture\/pdp\/ivy-bronx-sydnor-coffee-table-ivbx2371.html",
        "class_name": "Coffee & Cocktail Tables",
        "sale_price": 159.99,
        "thumbnail_image_url": "https:\/\/secure.img1.wfcdn.com\/lf\/43\/hash\/1261\/45106345\/1\/custom_image.jpg",
        "model": {
            "dimensions_inches": {
                "x": 32.13,
                "y": 32.13,
                "z": 18
            },
            "glb": "http:\/\/img.wfrcdn.com\/docresources\/34591\/107\/1077850.glb",
            "obj": "http:\/\/img.wfrcdn.com\/docresources\/34591\/94\/944255.zip"
        }
    }
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tanay/Projects/emiway/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map