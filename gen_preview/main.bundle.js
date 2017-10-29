webpackJsonp(["main"],{

/***/ "../../../../../src/main/angular/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/main/angular/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/main/angular/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/api.impl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceImpl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_problem__ = __webpack_require__("../../../../../src/main/angular/lib/models/problem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_submission__ = __webpack_require__("../../../../../src/main/angular/lib/models/submission.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_profile__ = __webpack_require__("../../../../../src/main/angular/lib/models/profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_jdg_api__ = __webpack_require__("../../../../../src/main/angular/lib/api/jdg.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_RxWebSocketSubject__ = __webpack_require__("../../../../../src/main/angular/lib/api/RxWebSocketSubject.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import {BehaviorSubject} from '@reactivex/rxjs';
var ApiServiceImpl = ApiServiceImpl_1 = (function () {
    function ApiServiceImpl(http) {
        var _this = this;
        this.http = http;
        this.nonceUrl = '/ws/nonce';
        this.wsUrl = 'ws://' + window.location.host + '/ws/connect';
        this.problems = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.submissions = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.profile = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */](undefined);
        this.socket = new __WEBPACK_IMPORTED_MODULE_8__api_RxWebSocketSubject__["a" /* RxWebSocketSubject */](this.wsUrl);
        this.loggedInStatus = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* BehaviorSubject */](false);
        this.setUpSocket();
        this.judgingApi = new __WEBPACK_IMPORTED_MODULE_7__api_jdg_api__["a" /* JudgingApi */](this, this.socket);
        this.socket.connectionStatus.subscribe(function (connectionStatus) {
            if (connectionStatus === true) {
                _this.http.get(_this.nonceUrl).forEach(function (response) {
                    console.log(response);
                    _this.socket.send({ who: 'login', data: response.text() });
                    _this.loggedInStatus.next(true);
                });
            }
            else {
                _this.loggedInStatus.next(false);
            }
        });
    }
    ApiServiceImpl.extractDataArray = function (res) {
        var body = res.json();
        return body || [];
    };
    ApiServiceImpl.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApiServiceImpl.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            console.error(error.text());
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(errMsg);
    };
    ApiServiceImpl.arraysEqual = function (a, b) {
        if (a === b) {
            return true;
        }
        if (a == null || b == null) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; ++i) {
            if (JSON.stringify(a[i]) !== JSON.stringify(b[i])) {
                return false;
            }
        }
        return true;
    };
    ApiServiceImpl.prototype.setUpSocket = function () {
        var _this = this;
        this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'dbg'; })
            .subscribe(function (msg) { return console.log('WS DBG:', msg.data); });
        this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'alert'; })
            .subscribe(function (msg) { return alert(msg.data); });
        this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'api' && msg.what === 'rld-submissions'; })
            .subscribe(function (msg) {
            console.log('I should reload my submissions:', msg);
            _this.getSubmissions()
                .then(function (submissions) { return _this.submissions.next(submissions); });
        });
        this.getSubmissions()
            .then(function (submissions) { return _this.submissions.next(submissions); });
        this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'api' && msg.what === 'rld-problems'; })
            .subscribe(function (msg) {
            console.log('I should reload my problems:', msg);
            _this.getProblems()
                .then(function (problems) { return _this.problems.next(problems); });
        });
        this.getProblems()
            .then(function (problems) { return _this.problems.next(problems); });
        this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'api' && msg.what === 'rld-profile'; })
            .subscribe(function (msg) {
            _this.getProfile()
                .then(function (profile) { return _this.profile.next(profile); });
        });
        this.getProfile()
            .then(function (profile) { return _this.profile.next(profile); });
    };
    ApiServiceImpl.prototype.getSubmission = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/submission/' + id, options)
            .toPromise()
            .then(ApiServiceImpl_1.extractData)
            .then(function (s) { return new __WEBPACK_IMPORTED_MODULE_5__models_submission__["a" /* Submission */](s.id, s.problem, s.team_id, new Date(s.submittedAt), s.code, s.accepted); });
        // .catch(ApiService.handleError);
    };
    ApiServiceImpl.prototype.getSubmissions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/submissions', options)
            .toPromise()
            .then(ApiServiceImpl_1.extractDataArray)
            .then(function (data) { return data.map(function (s) { return new __WEBPACK_IMPORTED_MODULE_5__models_submission__["a" /* Submission */](s.id, s.problem, s.team_id, new Date(s.submittedAt), s.code, s.accepted); }); });
        // .filter(submissions => {
        //   if (!this.arraysEqual(this.submissions.getValue(), submissions)) {
        //     console.log("New submissions!");
        //     return true;
        //   }
        //   console.log("Steady Freddie");
        //   return false;
        // })
        // .catch(ApiService.handleError);
    };
    ApiServiceImpl.prototype.getProblems = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/problems', options)
            .toPromise()
            .then(ApiServiceImpl_1.extractDataArray)
            .then(function (data) { return data.map(function (p) { return new __WEBPACK_IMPORTED_MODULE_4__models_problem__["a" /* Problem */](p.id, p.orderIndex, p.title, p.description, p.language, p.precode, p.code, p.postcode, p.answer); }); });
        // .filter(problems => {
        //   if (!this.arraysEqual(this.problems.getValue(), problems)) {
        //     console.log("New problems!");
        //     return true;
        //   }
        //   console.log("Steady Freddie");
        //   return false;
        // })
        // .catch(ApiService.handleError);
    };
    ApiServiceImpl.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/profile', options)
            .toPromise()
            .then(ApiServiceImpl_1.extractData)
            .then(function (p) { return new __WEBPACK_IMPORTED_MODULE_6__models_profile__["a" /* Profile */](p.id, p.type, p.name, p.members); });
        // .filter(profile => JSON.stringify(this.profile.getValue()) !=
        // JSON.stringify(profile)) .catch(ApiService.handleError);
    };
    ApiServiceImpl.prototype.submit = function (problem, code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        try {
            this.http.post('/api/submissions', JSON.stringify({
                problem_id: problem.id, code: code,
            }), options)
                .toPromise()
                .then(function (response) {
                console.log('Shah dud');
                return response.json();
            })
                .catch(ApiServiceImpl_1.handleError);
        }
        catch (err) {
            console.log(err);
        }
    };
    ApiServiceImpl.prototype.accept = function (submission) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        try {
            return this.http.post('/api/submission/' + submission.id + '/accept', '', options)
                .toPromise()
                .then(function (response) {
                console.log('Shah dud');
                return response.json();
            })
                .catch(ApiServiceImpl_1.handleError);
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    };
    ApiServiceImpl.prototype.reject = function (submission) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        try {
            console.log(submission);
            return this.http.post('/api/submission/' + submission.id + '/reject', '', options)
                .toPromise()
                .then(function (response) {
                console.log('Shah dud');
                return response.json();
            })
                .catch(ApiServiceImpl_1.handleError);
        }
        catch (err) {
            console.log(err);
            return undefined;
        }
    };
    return ApiServiceImpl;
}());
ApiServiceImpl = ApiServiceImpl_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiServiceImpl);

var ApiServiceImpl_1, _a;
//# sourceMappingURL=api.impl.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/api.stub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceStub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_jdg_api__ = __webpack_require__("../../../../../src/main/angular/lib/api/jdg.api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiServiceStub = (function () {
    function ApiServiceStub() {
        this.problems = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.submissions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */]([]);
        this.profile = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](undefined);
        this.loggedInStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](false);
        this.judgingApi = new __WEBPACK_IMPORTED_MODULE_3__api_jdg_api__["a" /* JudgingApi */](this, this.socket);
    }
    ApiServiceStub.prototype.getSubmission = function (id) {
        return {}[id];
    };
    ApiServiceStub.prototype.getSubmissions = function () {
        var _this = this;
        return new Promise(function () { return _this.submissions.getValue(); });
    };
    ApiServiceStub.prototype.getProblems = function () {
        var _this = this;
        return new Promise(function () { return _this.problems.getValue(); });
    };
    ApiServiceStub.prototype.getProfile = function () {
        var _this = this;
        return new Promise(function () { return _this.profile; });
    };
    ApiServiceStub.prototype.submit = function (problem, code) {
        alert('Submitted: ' + JSON.stringify(problem));
    };
    ApiServiceStub.prototype.accept = function (submission) {
        alert('Accepted: ' + JSON.stringify(submission));
    };
    ApiServiceStub.prototype.reject = function (submission) {
        alert('Reject: ' + JSON.stringify(submission));
    };
    return ApiServiceStub;
}());
ApiServiceStub = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiServiceStub);

//# sourceMappingURL=api.stub.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/api/RxWebSocketSubject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RxWebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__ = __webpack_require__("../../../../rxjs/_esm5/observable/dom/WebSocketSubject.js");
/********************************************************************
 * https://gearheart.io/blog/auto-websocket-reconnection-with-rxjs/ *
 ********************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/// we inherit from the ordinary Subject
var RxWebSocketSubject = (function (_super) {
    __extends(RxWebSocketSubject, _super);
    function RxWebSocketSubject(url, reconnectInterval, /// pause between connections
        reconnectAttempts, /// number of connection attempts
        resultSelector, serializer) {
        if (reconnectInterval === void 0) { reconnectInterval = 5000; }
        if (reconnectAttempts === void 0) { reconnectAttempts = 10; }
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.reconnectInterval = reconnectInterval;
        _this.reconnectAttempts = reconnectAttempts;
        _this.resultSelector = resultSelector;
        _this.serializer = serializer;
        /// by default, when a message is received from the server, we are trying to decode it as JSON
        /// we can override it in the constructor
        _this.defaultResultSelector = function (e) {
            return JSON.parse(e.data);
        };
        /// when sending a message, we encode it to JSON
        /// we can override it in the constructor
        _this.defaultSerializer = function (data) {
            return JSON.stringify(data);
        };
        /// connection status
        _this.connectionStatus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* BehaviorSubject */](false);
        // this.connectionStatus.subscribe((value) => this.connectionObserver.next(value));
        if (!resultSelector) {
            _this.resultSelector = _this.defaultResultSelector;
        }
        if (!_this.serializer) {
            _this.serializer = _this.defaultSerializer;
        }
        /// config for WebSocketSubject
        /// except the url, here is closeObserver and openObserver to update connection status
        _this.wsSubjectConfig = {
            url: url,
            closeObserver: {
                next: function (e) {
                    _this.socket = null;
                    _this.connectionStatus.next(false);
                }
            },
            openObserver: {
                next: function (e) {
                    _this.connectionStatus.next(true);
                }
            }
        };
        /// we connect
        _this.connect();
        /// we follow the connection status and run the reconnect while losing the connection
        _this.connectionStatus.subscribe(function (isConnected) {
            if (!_this.reconnectionObservable && typeof (isConnected) === 'boolean' && !isConnected) {
                _this.reconnect();
            }
        });
        return _this;
    }
    RxWebSocketSubject.prototype.subscribeLambda = function (argLambda) {
        _super.prototype.subscribe.call(this, { next: argLambda });
    };
    RxWebSocketSubject.prototype.connect = function () {
        var _this = this;
        this.socket = new __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_dom_WebSocketSubject__["a" /* WebSocketSubject */](this.wsSubjectConfig);
        this.socket.subscribe(function (m) {
            _this.send(m); /// when receiving a message, we just send it to our Subject
        }, function (error) {
            if (!_this.socket) {
                /// in case of an error with a loss of connection, we restore it
                _this.reconnect();
            }
        });
    };
    /// reconnection
    RxWebSocketSubject.prototype.reconnect = function () {
        var _this = this;
        this.reconnectionObservable = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].interval(this.reconnectInterval)
            .takeWhile(function (v, index) {
            return index < _this.reconnectAttempts && !_this.socket;
        });
        this.reconnectionObservable.subscribe(function () {
            _this.connect();
        }, null, function () {
            /// if the reconnection attempts are failed, then we call complete of our Subject and status
            _this.reconnectionObservable = null;
            if (!_this.socket) {
                _this.complete();
                _this.connectionStatus.complete();
            }
        });
    };
    /// sending the message
    RxWebSocketSubject.prototype.send = function (data) {
        this.socket.next(this.serializer(data));
    };
    return RxWebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["c" /* Subject */]));

//# sourceMappingURL=RxWebSocketSubject.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/api/jdg.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JudgingApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");

var JudgingApi = (function () {
    function JudgingApi(apiService, socket) {
        this.apiService = apiService;
        this.socket = socket;
        this.sessionSubscription = null;
        this.submission = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* BehaviorSubject */](undefined);
        this.statusMessage = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* BehaviorSubject */](JudgingApi.connectingMessage);
        this.connectionSubscription = null;
    }
    JudgingApi.prototype.startSession = function () {
        var _this = this;
        if (this.connectionSubscription !== null || this.sessionSubscription !== null) {
            throw new Error('Judging session already in progress!');
        }
        this.sessionSubscription = this.socket.asObservable()
            .filter(function (msg) { return msg.who === 'jdg'; })
            .subscribe(function (msg) { return _this.handleMessage(msg); });
        this.connectionSubscription = this.apiService.loggedInStatus
            .subscribe(function (connected) {
            console.log('Connection Status:', connected);
            if (connected) {
                _this.socket.send({ who: 'jdg', what: 'start' });
                _this.statusMessage.next(JudgingApi.waitingMessage);
            }
            else {
                _this.submission.next(undefined);
                _this.statusMessage.next(JudgingApi.connectingMessage);
            }
        });
    };
    JudgingApi.prototype.stopSession = function () {
        if (this.connectionSubscription) {
            this.connectionSubscription.unsubscribe();
        }
        if (this.sessionSubscription) {
            this.sessionSubscription.unsubscribe();
        }
        this.submission.next(undefined);
        this.statusMessage.next('Judging Session Ended');
        this.connectionSubscription = null;
        this.sessionSubscription = null;
        this.socket.send({ who: 'jdg', what: 'stop' });
    };
    JudgingApi.prototype.handleMessage = function (msg) {
        if (msg.what === 'kick') {
            this.submission.next(undefined);
            this.statusMessage.next(msg.data);
        }
        else if (msg.what === 'set') {
            if (msg.data == null) {
                this.submission.next(undefined);
                this.statusMessage.next(JudgingApi.waitingMessage);
            }
            else {
                this.setSubmissionById(msg.data);
            }
        }
    };
    JudgingApi.prototype.setSubmissionById = function (id) {
        var _this = this;
        this.apiService.getSubmission(id)
            .then(function (submission) { return _this.submission.next(submission); });
    };
    JudgingApi.prototype.defer = function (submission) {
        this.socket.send({ who: 'jdg', what: 'defer', data: submission.id });
    };
    JudgingApi.prototype.preferences = function (problemPreferences) {
        this.socket.send({ who: 'jdg', what: 'pref', data: problemPreferences });
    };
    return JudgingApi;
}());

JudgingApi.connectingMessage = 'Connecting...';
JudgingApi.waitingMessage = 'Waiting for submission...';
//# sourceMappingURL=jdg.api.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/codeeditor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-size: .9em;\n  font-family: \"Monospaced\",monospace;\n}\n.codepane {\n  border: inset 2px white;\n  padding: 0;\n}\ntextarea {\n  background-color: #ffffff;\n  border: none;\n  outline: none;\n  white-space: pre;\n\n  width: 100%;\n  height: auto;\n  margin: 0;\n  resize: none;\n}\n.green {\n  background-color: #99ddaa;\n}\n.red {\n  background-color: #dd9999;\n}\npre {\n  background-color: #bbb;\n  margin: 0;\n}\n\n/* https://stackoverflow.com/a/43739723/3188059 */\n.ace_text-input {\n  position: absolute!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/lib/codeeditor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"codepane\">\n  <pre>{{precode}}</pre>\n  <ace-editor #editor\n       [(text)]=\"code\"\n       [mode]=\"'plain_text'\"\n       [theme]=\"'chrome'\"\n       [options]=\"options\"\n       [readOnly]=\"readonly\"\n       [ngClass]=\"{'red':red, 'green':green}\"\n       style=\"display:block; width:100%\"></ace-editor>\n  <!--<textarea  autocomplete=\"off\"-->\n             <!--autocorrect=\"off\"-->\n             <!--autocapitalize=\"off\"-->\n             <!--spellcheck=\"false\"-->\n             <!--[readonly]=\"readonly\"-->\n             <!--[(ngModel)]=\"code\"-->\n             <!--[ngClass]=\"{'red':red, 'green':green}\"-->\n             <!--autosize></textarea>-->\n  <pre>{{postcode}}</pre>\n</div>\n"

/***/ }),

/***/ "../../../../../src/main/angular/lib/codeeditor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeEditorComponent = (function () {
    function CodeEditorComponent() {
        this.options = {
            printMargin: false,
            maxLines: 30,
            showLineNumbers: false,
            showGutter: false,
        };
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        this.editor.getEditor().setAutoScrollEditorIntoView(false);
        this.editor.getEditor().$blockScrolling = Infinity;
    };
    CodeEditorComponent.prototype.ngAfterViewInit = function () {
        this.editor.getEditor().clearSelection();
    };
    return CodeEditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('editor'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_ace_editor__["a" /* AceEditorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_ace_editor__["a" /* AceEditorComponent */]) === "function" && _a || Object)
], CodeEditorComponent.prototype, "editor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CodeEditorComponent.prototype, "precode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CodeEditorComponent.prototype, "code", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CodeEditorComponent.prototype, "postcode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CodeEditorComponent.prototype, "readonly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CodeEditorComponent.prototype, "green", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CodeEditorComponent.prototype, "red", void 0);
CodeEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-code-editor',
        template: __webpack_require__("../../../../../src/main/angular/lib/codeeditor.component.html"),
        styles: [__webpack_require__("../../../../../src/main/angular/lib/codeeditor.component.css")],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], CodeEditorComponent);

var _a;
//# sourceMappingURL=codeeditor.component.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/debugjudgematerial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebugJudgeMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DebugJudgeMaterialModule = (function () {
    function DebugJudgeMaterialModule() {
    }
    return DebugJudgeMaterialModule;
}());
DebugJudgeMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["k" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["l" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["j" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogModule */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
    })
], DebugJudgeMaterialModule);

//# sourceMappingURL=debugjudgematerial.module.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/models/problem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem; });
var Problem = (function () {
    function Problem(id, orderIndex, title, description, language, precode, code, postcode, answer) {
        this.id = id;
        this.orderIndex = orderIndex;
        this.title = title;
        this.description = description;
        this.language = language;
        this.precode = precode;
        this.code = code;
        this.postcode = postcode;
        this.answer = answer;
    }
    return Problem;
}());

//# sourceMappingURL=problem.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/models/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile(id, type, name, members) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.members = members;
    }
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/models/submission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Submission; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);

var Submission = (function () {
    function Submission(id, problem, teamId, submissionTime, code, accepted) {
        this.id = id;
        this.problem = problem;
        this.teamId = teamId;
        this.submissionTime = submissionTime;
        this.code = code;
        this.accepted = accepted;
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNull"])(accepted)) {
            this.accepted = undefined;
        }
    }
    return Submission;
}());

//# sourceMappingURL=submission.js.map

/***/ }),

/***/ "../../../../../src/main/angular/lib/scoreboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  min-width: 300px;\n  width: 1200px;\n  max-width: 100%;\n  margin: 10px auto;\n}\n\ntable {\n  background-color: white;\n  width: 100%;\n}\n\ntd {\n  border-left: dotted 1px;\n  border-bottom: dotted 1px;\n}\ntd:nth-of-type(3) {\n  border-right: dotted 1px;\n}\ntd:first-of-type {\n  border-left: none;\n}\ntbody tr:last-of-type td {\n  border-bottom: none;\n}\nthead tr td {\n  border-bottom: double 3px;\n}\n\n.green {\n  background-color: #99ddaa;\n}\n.red {\n  background-color: #dd9999;\n}\n\n.problemName {\n  font-style: italic;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/lib/scoreboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Team Standings</mat-card-title>\n\n  <mat-card-content>\n    <table *ngIf=\"problems\">\n      <thead>\n        <tr>\n          <td colspan=\"4\"></td>\n          <td colSpan=\"{{problems.length}}\">Problems (hover)</td>\n        </tr>\n        <tr>\n          <td>Place</td>\n          <td>Correct</td>\n          <td>Penalty</td>\n          <td>Team</td>\n          <td class=\"problemName\"\n              *ngFor=\"let problem of problems\"\n              [title]=\"problem.title\">\n              {{problem.orderIndex}}</td>\n        </tr>\n      </thead>\n      <tr *ngFor=\"let team of teams\">\n        <td>{{team.place}}</td>\n        <td>{{team.score.correct}}</td>\n        <td>{{team.score.penalty}}</td>\n        <td>{{team.name}}</td>\n        <td [ngClass]=\"{'green':(teamAcceptances[team.id]||{})[problem.id]}\" *ngFor=\"let problem of problems\">\n          {{(teamSubmissionCounts[team.id]||{})[problem.id] || 0}}</td>\n      </tr>\n    </table>\n\n    <span *ngIf=\"!problems\">Team standings will be visible here when the competition begins.</span>\n\n  </mat-card-content>\n\n  <md-card-actions>\n    <button md-button (click)=\"refresh();\">Refresh</button>\n  </md-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/main/angular/lib/scoreboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreboardComponent = (function () {
    function ScoreboardComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.refreshSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Observable */].interval(10000)
            .subscribe(function () { return _this.refresh(); });
    };
    ScoreboardComponent.prototype.ngOnDestroy = function () {
        this.refreshSubscription.unsubscribe();
    };
    ScoreboardComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get('/api/scoreboard').subscribe(function (res) {
            var data = res.json();
            _this.problems = data.problems;
            _this.teams = data.teams;
            _this.teamSubmissionCounts = data.teamSubmissionCounts;
            _this.teamAcceptances = data.teamAcceptances;
        });
    };
    return ScoreboardComponent;
}());
ScoreboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-scoreboard',
        template: __webpack_require__("../../../../../src/main/angular/lib/scoreboard.component.html"),
        styles: [__webpack_require__("../../../../../src/main/angular/lib/scoreboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ScoreboardComponent);

var _a, _b;
//# sourceMappingURL=scoreboard.component.js.map

/***/ }),

/***/ "../../../../../src/main/angular/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  height: 100%;\n}\n\n.menu-button {\n  margin-right: 5px;\n}\n\nnav h3 {\n  text-align: center;\n}\nnav * {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  font-size: 1.2rem;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav mode=\"over\" #sidenav>\n    <nav>\n      <h3>ACMDC</h3>\n      <hr/>\n      <button mat-button routerLink=\"/\" (click)=\"sidenav.close()\">Team View</button>\n      <button mat-button routerLink=\"/scoreboard\" (click)=\"sidenav.close()\">Scoreboard</button>\n      <hr/>\n      <a mat-button href=\"/logout\" (click)=\"sidenav.close()\">Log Out</a>\n    </nav>\n  </mat-sidenav>\n\n  <mat-toolbar color=\"primary\">\n    <button mat-button class=\"menu-button\" (click)=\"sidenav.open()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>ACM Debugging Competition</span>\n  </mat-toolbar>\n\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.isTeam = false;
        this.isJudge = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-app-root',
        template: __webpack_require__("../../../../../src/main/angular/previewapp/app.component.html"),
        providers: [],
        styles: [__webpack_require__("../../../../../src/main/angular/previewapp/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lib_debugjudgematerial_module__ = __webpack_require__("../../../../../src/main/angular/lib/debugjudgematerial.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_autosize_src_autosize_directive__ = __webpack_require__("../../../../angular2-autosize/src/autosize.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lib_codeeditor_component__ = __webpack_require__("../../../../../src/main/angular/lib/codeeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_previewapp_app_component__ = __webpack_require__("../../../../../src/main/angular/previewapp/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_teamapp_problemcard_component__ = __webpack_require__("../../../../../src/main/angular/teamapp/problemcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_previewapp_preview_component__ = __webpack_require__("../../../../../src/main/angular/previewapp/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lib_scoreboard_component__ = __webpack_require__("../../../../../src/main/angular/lib/scoreboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_api_stub__ = __webpack_require__("../../../../../src/main/angular/lib/api.stub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__preview_dialogs__ = __webpack_require__("../../../../../src/main/angular/previewapp/preview.dialogs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = AppModule_1 = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11_previewapp_preview_component__["a" /* PreviewComponent */] },
    { path: 'scoreboard', component: __WEBPACK_IMPORTED_MODULE_12_lib_scoreboard_component__["a" /* ScoreboardComponent */] },
];
AppModule = AppModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6_angular2_autosize_src_autosize_directive__["a" /* Autosize */],
            __WEBPACK_IMPORTED_MODULE_9_previewapp_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11_previewapp_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12_lib_scoreboard_component__["a" /* ScoreboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10_teamapp_problemcard_component__["a" /* ProblemCardComponent */],
            __WEBPACK_IMPORTED_MODULE_7_lib_codeeditor_component__["a" /* CodeEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__preview_dialogs__["a" /* PreviewDownloadDialog */],
            __WEBPACK_IMPORTED_MODULE_14__preview_dialogs__["b" /* PreviewUploadDialog */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8_ng2_ace_editor__["b" /* AceEditorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_lib_debugjudgematerial_module__["a" /* DebugJudgeMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(AppModule_1.appRoutes),
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__preview_dialogs__["a" /* PreviewDownloadDialog */],
            __WEBPACK_IMPORTED_MODULE_14__preview_dialogs__["b" /* PreviewUploadDialog */],
        ],
        providers: [{ provide: 'ApiService', useClass: __WEBPACK_IMPORTED_MODULE_13__lib_api_stub__["a" /* ApiServiceStub */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_previewapp_app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]],
    })
], AppModule);

var AppModule_1;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polyfills_ts__ = __webpack_require__("../../../../../src/main/angular/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_previewapp_app_module__ = __webpack_require__("../../../../../src/main/angular/previewapp/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/main/angular/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3_previewapp_app_module__["a" /* AppModule */])
    .catch(function (e) { return console.error(e); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".problemcardWrapper, .submissioncard {\n  margin: 20px;\n}\n#problemCards {\n  display: block;\n  min-width: 300px;\n  width: 800px;\n  max-width: 95%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_models_problem__ = __webpack_require__("../../../../../src/main/angular/lib/models/problem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_dialogs__ = __webpack_require__("../../../../../src/main/angular/previewapp/preview.dialogs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = (function () {
    function PreviewComponent(dialog) {
        this.dialog = dialog;
        this.problems = [];
        this.submissions = [];
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.ngOnDestroy = function () {
    };
    PreviewComponent.prototype.newProblem = function () {
        this.problems.push(new __WEBPACK_IMPORTED_MODULE_1_lib_models_problem__["a" /* Problem */](undefined, -1, 'Title Here', 'Description', 'Language', 'Unmodifiable Pre-Code', 'Modifiable Code', 'Unmoditiable Post-Code', 'Answer'));
    };
    PreviewComponent.prototype.upload = function () {
        var _this = this;
        var serialized = '';
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__preview_dialogs__["b" /* PreviewUploadDialog */], {
            width: '250px',
            data: { serialized: serialized }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.deserialize(serialized);
        });
    };
    PreviewComponent.prototype.download = function () {
        var _this = this;
        var serialized = JSON.stringify(this.problems);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__preview_dialogs__["a" /* PreviewDownloadDialog */], {
            width: '250px',
            data: { serialized: serialized }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.deserialize(serialized);
        });
    };
    PreviewComponent.prototype.deserialize = function (serialized) {
        console.log(serialized);
    };
    return PreviewComponent;
}());
PreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-preview-view',
        styles: [__webpack_require__("../../../../../src/main/angular/previewapp/preview.component.css")],
        // entryComponents: [
        //   ProblemCardComponent,
        //   PreviewDownloadDialog,
        //   PreviewUploadDialog,
        // ],
        template: "\n    <div id=\"problemCards\">\n      <mat-card>\n        <mat-card-title>DebugJudge Problem Previewer</mat-card-title>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\" (click)=\"newProblem()\">Add Problem</button>\n          <button mat-raised-button (click)=\"download()\">Download</button>\n          <button mat-raised-button (click)=\"upload()\">Upload</button>\n        </mat-card-actions>\n      </mat-card>\n      <div class=\"problemcardWrapper\" *ngFor=\"let problem of problems\">\n        <mat-card>\n          <input class=\"mat-card-title\" [(ngModel)]=\"problem.title\">\n          <input class=\"mat-card-subtitle\" [(ngModel)]=\"problem.language\">\n          <textarea [(ngModel)]=\"problem.description\"></textarea>\n          <hr/>\n          <textarea style=\"background-color:#ccc;display:block\"\n                    [(ngModel)]=\"problem.precode\"></textarea>\n          <textarea style=\"background-color:#fff;display:block\"\n                    [(ngModel)]=\"problem.code\"></textarea>\n          <textarea style=\"background-color:#ccc;display:block\"\n                    [(ngModel)]=\"problem.postcode\"></textarea>\n        </mat-card>\n        <dbgjdg-problem-card [problem]=\"problem\"></dbgjdg-problem-card>\n      </div>\n    </div>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]) === "function" && _a || Object])
], PreviewComponent);

var _a;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/main/angular/previewapp/preview.dialogs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PreviewUploadDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewDownloadDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PreviewUploadDialog = (function () {
    function PreviewUploadDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PreviewUploadDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return PreviewUploadDialog;
}());
PreviewUploadDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-preview-upload-dialog',
        template: "\n    <h1 mat-dialog-title>Upload Session:</h1>\n    <div mat-dialog-content>\n      <mat-form-field>\n        <textarea matInput tabindex=\"1\" [(ngModel)]=\"data.serialized\">\n        </textarea>\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button [mat-dialog-close]=\"data.serialized\" tabindex=\"2\">Ok</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n    </div>\n  ",
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, Object])
], PreviewUploadDialog);

var PreviewDownloadDialog = (function () {
    function PreviewDownloadDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PreviewDownloadDialog.prototype.onOkClick = function () {
        this.dialogRef.close();
    };
    return PreviewDownloadDialog;
}());
PreviewDownloadDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-preview-download-dialog',
        template: "\n    <h1 mat-dialog-title>Current Session:</h1>\n    <div mat-dialog-content>\n      <mat-form-field>\n        <textarea matInput tabindex=\"1\" [readonly]=\"true\" [(ngModel)]=\"data.serialized\">\n        </textarea>\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"onOkClick()\" tabindex=\"2\">Ok</button>\n    </div>\n  ",
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]) === "function" && _b || Object, Object])
], PreviewDownloadDialog);

var _a, _b;
//# sourceMappingURL=preview.dialogs.js.map

/***/ }),

/***/ "../../../../../src/main/angular/teamapp/problemcard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".problemcard {\n  position: relative;\n  z-index: 5;\n}\nmat-menu {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.submissionList {\n  position: relative;\n  padding: 0 20px;\n  margin-top: -24px;\n  vertical-align: bottom;\n}\n.toggle-container {\n  box-sizing:border-box;\n  overflow:hidden;\n  meme: yes;\n}\n\n.submissionListing span {\n  display: block;\n}\n\n.notify {\n  -webkit-animation: notify-animation 2s infinite;\n          animation: notify-animation 2s infinite;\n}\n\n@-webkit-keyframes notify-animation {\n  0%, 20%, 40%, 100% {\n    background-color: #ccccff;\n  }\n  10%, 30% {\n    background-color: #eeeeee;\n  }\n}\n\n@keyframes notify-animation {\n  0%, 20%, 40%, 100% {\n    background-color: #ccccff;\n  }\n  10%, 30% {\n    background-color: #eeeeee;\n  }\n}\n\n.solvedSpan {\n  color: green;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/main/angular/teamapp/problemcard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"problemcard\">\n  <mat-card-title>{{problem.title}}\n    <span *ngIf=\"problemSolved\" class=\"solvedSpan\">SOLVED</span></mat-card-title>\n  <mat-card-subtitle>Language: {{problem.language}}</mat-card-subtitle>\n\n  <mat-card-content>\n    {{problem.description}}\n  </mat-card-content>\n\n  <mat-menu></mat-menu>\n\n  <dbgjdg-code-editor #editor\n               precode=\"{{problem.precode}}\"\n               [code]=\"problem.code\"\n               [green]=\"problemSolved\"\n               [readonly]=\"problemSolved\"\n               postcode=\"{{problem.postcode}}\"></dbgjdg-code-editor>\n\n  <mat-card-actions layout=\"row\" layout-align=\"end center\">\n    <button mat-raised-button\n            [disabled]=\"problemSolved\"\n            (click)=\"submit()\">Submit</button>\n    <button mat-raised-button\n            [disabled]=\"problemSolved\"\n            (click)=\"reset()\">Reset</button>\n  </mat-card-actions>\n</mat-card>\n\n<div class=\"submissionList\">\n  <mat-card>\n    <div class=\"toggle-container\" [@openClose]=\"stateExpression\">\n      <div class=\"submissionListing\" *ngFor=\"let submission of submissions\">\n        {{submission.submissionTime.getHours()}}:{{('0'+submission.submissionTime.getMinutes()).slice(-2)}}:{{('0'+submission.submissionTime.getSeconds()).slice(-2)}}\n        <br>\n        <dbgjdg-code-editor [code]=\"submission.code\" [green]=\"submission.accepted==true\" [red]=\"submission.accepted==false\" [readonly]=\"true\"></dbgjdg-code-editor>\n      </div>\n    </div>\n    <mat-card-actions>\n      <button mat-raised-button\n              [ngClass]=\"{'notify': notify}\"\n              [disabled]=\"submissions.length == 0\"\n              (click)=\"expand()\">View Submissions</button>\n      <button mat-raised-button\n              [disabled]=\"submissions.length == 0\"\n              (click)=\"collapse()\">Hide</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/main/angular/teamapp/problemcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lib_codeeditor_component__ = __webpack_require__("../../../../../src/main/angular/lib/codeeditor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lib_models_problem__ = __webpack_require__("../../../../../src/main/angular/lib/models/problem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lib_api_service__ = __webpack_require__("../../../../../src/main/angular/lib/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lib_api_impl__ = __webpack_require__("../../../../../src/main/angular/lib/api.impl.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProblemCardComponent = (function () {
    function ProblemCardComponent(apiService) {
        this.apiService = apiService;
        this.submissions = [];
        this.collapse();
        this.notify = false;
    }
    ProblemCardComponent.prototype.expand = function () {
        this.stateExpression = 'expanded';
        this.notify = false;
    };
    ProblemCardComponent.prototype.collapse = function () { this.stateExpression = 'collapsed'; };
    ProblemCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submissionSubscription = this.apiService.submissions.asObservable()
            .filter(function (submissions) { return submissions !== undefined; })
            .map(function (submissions) { return submissions.filter(function (submission) { return submission.problem.id === _this.problem.id; }); })
            .subscribe(function (submissions) {
            if (_this.submissions && _this.submissions.length === submissions.length) {
                if (!__WEBPACK_IMPORTED_MODULE_4_lib_api_impl__["a" /* ApiServiceImpl */].arraysEqual(_this.submissions, submissions)) {
                    _this.notify = true;
                }
            }
            _this.submissions = submissions;
            _this.problemSolved = _this.submissions.some(function (submission) { return submission.accepted; });
        });
    };
    ProblemCardComponent.prototype.ngOnDestroy = function () {
        this.submissionSubscription.unsubscribe();
    };
    ProblemCardComponent.prototype.submit = function () {
        this.apiService.submit(this.problem, this.editor.code);
    };
    ProblemCardComponent.prototype.reset = function () {
        this.editor.code = this.problem.code;
    };
    return ProblemCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_lib_models_problem__["a" /* Problem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_lib_models_problem__["a" /* Problem */]) === "function" && _a || Object)
], ProblemCardComponent.prototype, "problem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_lib_codeeditor_component__["a" /* CodeEditorComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_lib_codeeditor_component__["a" /* CodeEditorComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_lib_codeeditor_component__["a" /* CodeEditorComponent */]) === "function" && _b || Object)
], ProblemCardComponent.prototype, "editor", void 0);
ProblemCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'dbgjdg-problem-card',
        template: __webpack_require__("../../../../../src/main/angular/teamapp/problemcard.component.html"),
        styles: [__webpack_require__("../../../../../src/main/angular/teamapp/problemcard.component.css")],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1_lib_codeeditor_component__["a" /* CodeEditorComponent */]],
        providers: [],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('openClose', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('collapsed, void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ height: '0px' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ height: '*' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('collapsed <=> expanded', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('300ms ease'), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('300ms ease')]),
            ]),
        ],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('ApiService')),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_lib_api_service__["ApiService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_lib_api_service__["ApiService"]) === "function" && _c || Object])
], ProblemCardComponent);

var _a, _b, _c;
//# sourceMappingURL=problemcard.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main/angular/previewapp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map