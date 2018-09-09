webpackJsonp([1],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, alertCtrl, loadCtrl, _usuarioProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this._usuarioProvider = _usuarioProvider;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.slides.paginationType = 'progress';
        this.slides.lockSwipes(true);
        this.slides.freeMode = false;
    };
    LoginPage.prototype.mostrarInput = function () {
        var _this = this;
        this.alertCtrl.create({
            title: 'Ingrese el usuario',
            inputs: [{
                    name: 'username',
                    placeholder: 'username'
                }],
            buttons: [
                { text: 'Cancelar', role: 'Cancel' },
                { text: 'Ingresar',
                    handler: function (data) {
                        _this.verificarUsuario(data.username);
                    }
                }
            ]
        }).present();
    };
    LoginPage.prototype.verificarUsuario = function (clave) {
        var _this = this;
        console.log('login.ts función verificarUsuario ', clave);
        var loading = this.loadCtrl.create({
            content: 'Verificando...'
        });
        loading.present();
        this._usuarioProvider.verificaUsuario(clave)
            .then(function (existe) {
            loading.dismiss();
            if (existe) {
                _this.slides.lockSwipes(false);
                _this.slides.freeMode = true;
                _this.slides.slideNext();
                _this.slides.lockSwipes(true);
                _this.slides.freeMode = false;
            }
            else {
                _this.alertCtrl.create({
                    title: 'Usuario incorrecto',
                    subTitle: 'Hable con el administrador o pruebe de nuevo',
                    buttons: ['Aceptar']
                }).present();
            }
        });
    };
    LoginPage.prototype.ingresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\wsIonic\09-tracker\src\pages\login\login.html"*/'<ion-content padding>\n\n    <ion-slides pager>\n\n        <ion-slide>\n\n            <ion-toolbar>\n            </ion-toolbar>\n\n            <img src="assets/imgs/taxi-logo.png" class="slide-image" />\n            <h2 class="slide-title">Ingrese su código</h2>\n            <p>Debe de ingresar su código de usuario</p>\n\n            <button ion-button block (click)="mostrarInput()">\n              Ingresar\n            </button>\n\n        </ion-slide>\n\n\n        <!-- Ultimo Slide -->\n        <ion-slide>\n            <ion-toolbar>\n            </ion-toolbar>\n\n            <img src="assets/imgs/check.jpg" class="slide-image" />\n            <h2 class="slide-title">¿Listo para empezar?</h2>\n\n            <button ion-button large clear icon-right color="primary" (click)="ingresar()">\n          Continuar\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n\n        </ion-slide>\n        <!-- Fin del último slide -->\n\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"C:\wsIonic\09-tracker\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_ubicacion_ubicacion__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _ubicacionProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._ubicacionProv = _ubicacionProv;
        this.usuario = {};
        console.log('home.ts - constructor() ');
        this._ubicacionProv.inicializarChofer();
        this._ubicacionProv.iniciarGeolocalizacion();
        this._ubicacionProv.chofer.valueChanges()
            .subscribe(function (data) {
            _this.usuario = data;
            console.log('ubicacion.ts - constructor suscrito con ', JSON.stringify(_this.usuario));
        });
    }
    HomePage.prototype.salir = function () {
        console.log('home.ts - salir() cerrando sesión para ', this._ubicacionProv._usuarioProvider.clave);
        this._ubicacionProv.detenerUbicacion();
        this._ubicacionProv._usuarioProvider.borrarStorage();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\wsIonic\09-tracker\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-buttons>\n            <button ion-button (click)="salir()">\nSalir\n          </button>\n        </ion-buttons>\n        <ion-title>\n            {{usuario.nombre}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <agm-map [latitude]="usuario.lat" [longitude]="usuario.lon" [zoom]="16">\n        <agm-marker [latitude]="usuario.lat" [longitude]="usuario.lon"></agm-marker>\n    </agm-map>\n</ion-content>'/*ion-inline-end:"C:\wsIonic\09-tracker\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_ubicacion_ubicacion__["a" /* UbicacionProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
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
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		827,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbicacionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UbicacionProvider = /** @class */ (function () {
    function UbicacionProvider(_geolocation, _usuarioProvider, afDB) {
        this._geolocation = _geolocation;
        this._usuarioProvider = _usuarioProvider;
        this.afDB = afDB;
    }
    UbicacionProvider.prototype.inicializarChofer = function () {
        if (!this.chofer) {
            this.chofer = this.afDB.doc("/usuarios/" + this._usuarioProvider.clave);
        }
    };
    UbicacionProvider.prototype.iniciarGeolocalizacion = function () {
        var _this = this;
        console.log('ubicacion.ts - iniciarGeolocalizacion de ', this._usuarioProvider.clave);
        this._geolocation.getCurrentPosition().then(function (resp) {
            _this.chofer.update({
                lat: resp.coords.latitude,
                lon: resp.coords.longitude,
                clave: _this._usuarioProvider.clave
            });
            /* Una vez obtenida la posicion, estar al pendiente de los cambios */
            _this.watch = _this._geolocation.watchPosition().subscribe(function (data) {
                _this.chofer.update({
                    lat: data.coords.latitude,
                    lon: data.coords.longitude,
                    clave: _this._usuarioProvider.clave
                });
                // console.log('ubicacion.ts - iniciarGeolocalizacion (en watch) ' ,data.coords);
            });
        }).catch(function (error) {
            console.log('Error al obtener locación', error);
        });
    };
    UbicacionProvider.prototype.detenerUbicacion = function () {
        console.log('ubicacion.ts - detenerUbicacion');
        try {
            this.chofer = null;
            this.watch.unsubscribe();
        }
        catch (e) {
            console.log(JSON.stringify(e));
        }
    };
    UbicacionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UbicacionProvider);
    return UbicacionProvider;
}());

//# sourceMappingURL=ubicacion.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(437);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_firebase_config__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_geolocation__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_ubicacion_ubicacion__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* FIREBASE */



/* Storage nativo */

/* Geo */



/* Usare la llave de mi app de weather-app en consola google */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__config_firebase_config__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDHht-qr0W7TYcKM8f-trqJGSf9q8fpm8g'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_17__providers_ubicacion_ubicacion__["a" /* UbicacionProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyAL89WY8N6JXxkROfv2expBiR4Olqjyl6s",
    authDomain: "tracker-taxis-fff8c.firebaseapp.com",
    databaseURL: "https://tracker-taxis-fff8c.firebaseio.com",
    projectId: "tracker-taxis-fff8c",
    storageBucket: "tracker-taxis-fff8c.appspot.com",
    messagingSenderId: "710258329207"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(backgroundMode, platform, statusBar, splashScreen, _usuarioProvider) {
        var _this = this;
        this.backgroundMode = backgroundMode;
        this._usuarioProvider = _usuarioProvider;
        platform.ready().then(function () {
            _usuarioProvider.cargarStorage().then(function (existe) {
                statusBar.styleDefault();
                splashScreen.hide();
                if (existe) {
                    _this.backgroundMode.enable();
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\wsIonic\09-tracker\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\wsIonic\09-tracker\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuarioProvider = /** @class */ (function () {
    // user: any= {};
    function UsuarioProvider(afDB, storage, platform) {
        this.afDB = afDB;
        this.storage = storage;
        this.platform = platform;
    }
    UsuarioProvider.prototype.verificaUsuario = function (clave) {
        var _this = this;
        console.log('usuario.ts función verificaUsuario ', clave);
        clave = clave.toLowerCase();
        return new Promise(function (resolve, reject) {
            _this.doc = _this.afDB.doc("/usuarios/" + clave)
                .valueChanges()
                .subscribe(function (data) {
                if (data) {
                    _this.clave = clave;
                    // this.user = data;
                    _this.guardarStorage();
                    resolve(true);
                }
                else {
                    // incorrecto
                    resolve(false);
                }
            });
        });
    };
    UsuarioProvider.prototype.guardarStorage = function () {
        console.log('usuario.ts función guardarStorage ', this.clave);
        if (this.platform.is('cordova')) {
            // dispositivo móvil
            this.storage.set('clave', this.clave);
        }
        else {
            // escritorio 
            localStorage.setItem('clave', this.clave);
        }
    };
    UsuarioProvider.prototype.cargarStorage = function () {
        var _this = this;
        console.log('usuario.ts función cargarStorage');
        return new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                // dispositivo móvil
                _this.storage.get('clave').then(function (val) {
                    if (val) {
                        _this.clave = val;
                        console.log('(Nativo) Valor hallado en usuario.ts función cargarStorage ', _this.clave);
                        resolve(true);
                    }
                    else {
                        console.log('(Nativo) Valor de clave no hallado en usuario.ts función cargarStorage ');
                        resolve(false);
                    }
                });
            }
            else {
                // escritorio 
                if (localStorage.getItem('clave')) {
                    _this.clave = localStorage.getItem('clave');
                    console.log('Valor hallado en usuario.ts función cargarStorage ', _this.clave);
                    resolve(true);
                }
                else {
                    console.log('Valor de clave no hallado en usuario.ts función cargarStorage ');
                    resolve(false);
                }
            }
        });
    };
    UsuarioProvider.prototype.borrarStorage = function () {
        console.log('En usuario.ts función borrarStorage');
        this.clave = null;
        if (this.platform.is('cordova')) {
            // dispositivo móvil
            this.storage.remove('clave');
        }
        else {
            // escritorio 
            localStorage.removeItem('clave');
        }
        this.doc.unsubscribe();
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Platform */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[432]);
//# sourceMappingURL=main.js.map