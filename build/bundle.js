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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = "fetch_current_user";
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/current_user");

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_RECIPES = exports.FETCH_RECIPES = "fetch_recipes";
var fetchRecipes = exports.fetchRecipes = function fetchRecipes() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get("/recipes");

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_RECIPES,
                payload: res
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Resources = __webpack_require__(15);

var _Resources2 = _interopRequireDefault(_Resources);

var _NotFoundPage = __webpack_require__(16);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _RecipesPage = __webpack_require__(17);

var _RecipesPage2 = _interopRequireDefault(_RecipesPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: "/",
    exact: true
  }), _extends({}, _RecipesPage2.default, {
    path: "/recipes"
  }), _extends({}, _Resources2.default, {
    path: "/resources"
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(3);

var _expressHttpProxy = __webpack_require__(11);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(19);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

var _compression = __webpack_require__(29);

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _compression2.default)());
app.use(_express2.default.static("public"));

app.use("/api", (0, _expressHttpProxy2.default)("http://secure-brushlands-32363.herokuapp.com/", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";
    // "pacific-dawn-60366.herokuapp.com";
    return opts;
  }
}));
app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(13);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var location = _ref.location,
      route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, { location: location.pathname }),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};
exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchCurrentUser)());
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var location = _ref.location,
      auth = _ref.auth;

  var resolveAuth = auth ? _react2.default.createElement(
    "a",
    { href: "/api/logout" },
    " ",
    _react2.default.createElement("i", { className: "fal fa-sign-out" }),
    " Logout"
  ) : "";

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var page = location === "/" ? "Sweet treats" : capitalizeFirstLetter(location.slice(1));

  var meta = function meta() {
    return _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        page
      ),
      _react2.default.createElement("meta", { property: "og:title", content: page })
    );
  };

  var resolvePath = location === "/recipes" ? _react2.default.createElement(
    _reactRouterDom.Link,
    { to: "/resources" },
    _react2.default.createElement("i", { className: "fal fa-code" }),
    " Resources"
  ) : _react2.default.createElement(
    _reactRouterDom.Link,
    { to: "/recipes" },
    _react2.default.createElement("i", { className: "fal fa-cookie-bite" }),
    " Recipes"
  );

  return _react2.default.createElement(
    "nav",
    null,
    meta(),
    _react2.default.createElement(
      "ul",
      {
        className: "nav-bar",
        style: { display: "" + (location !== "/" ? "grid" : "none") }
      },
      _react2.default.createElement(
        "li",
        null,
        resolvePath
      ),
      _react2.default.createElement(
        "li",
        {
          style: {
            fontFamily: "'Rock Salt', cursive",
            color: "rgb(255, 213, 0)"
          }
        },
        "ST"
      ),
      _react2.default.createElement(
        "li",
        null,
        resolveAuth
      )
    )
  );
};

function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'ui-card gold-border' },
    _react2.default.createElement(
      'div',
      { className: 'inner-ui-card' },
      _react2.default.createElement(
        'h2',
        null,
        'Welcome to'
      ),
      _react2.default.createElement(
        'h1',
        null,
        'SWEET TREATS'
      ),
      _react2.default.createElement(
        'p',
        { className: 'login-text' },
        'Log in to get amazing cooking recipes.'
      ),
      _react2.default.createElement(
        'a',
        { className: 'login-btn', href: '/api/auth/google' },
        _react2.default.createElement('i', { className: 'fab fa-google' }),
        ' Login'
      )
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resources = function (_Component) {
  _inherits(Resources, _Component);

  function Resources() {
    _classCallCheck(this, Resources);

    return _possibleConstructorReturn(this, (Resources.__proto__ || Object.getPrototypeOf(Resources)).apply(this, arguments));
  }

  _createClass(Resources, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'recipe-container gold-border' },
        _react2.default.createElement(
          'div',
          { className: 'resources inner-ui-card' },
          _react2.default.createElement(
            'h1',
            null,
            'Resources'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'ABOUT'
          ),
          _react2.default.createElement(
            'p',
            { className: 'info-text' },
            'This Website is part of a series of studies on computer science. It has for scope the use of Server-Side Rendering with isomorphic JavaScript on React Applications. And more specifically how to serve authenticated content from a remote API that was built specifically for this context.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'info-text' },
            'The authentication is done via Google OAuth and the data is then rendered by a second server that works as a proxy-server (sending the users request to the API) and as a renderer (displaying the data to the user).'
          ),
          _react2.default.createElement(
            'p',
            { className: 'info-text' },
            'After the authentication the user has access to developing resources for the setup of this application and, as a sweet treat, a few amazing cooking recipes collected over the years by the author during his previous career as a Chef.'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'CODE'
          ),
          _react2.default.createElement(
            'p',
            { className: 'info-text' },
            'The code for both applications is available on Github. To learn more about each step of the project check the following links.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'code' },
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/PhillipeAlves/recipes_api' },
              _react2.default.createElement('i', { className: 'fab fa-github' }),
              ' API'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/PhillipeAlves/sweet_treats_rendering' },
              _react2.default.createElement('i', { className: 'fab fa-github' }),
              ' SSR'
            )
          )
        )
      );
    }
  }]);

  return Resources;
}(_react.Component);

exports.default = {
  component: Resources
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Oooops, route not found."
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _requireAuth = __webpack_require__(18);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipesPage = function (_Component) {
  _inherits(RecipesPage, _Component);

  function RecipesPage() {
    _classCallCheck(this, RecipesPage);

    return _possibleConstructorReturn(this, (RecipesPage.__proto__ || Object.getPrototypeOf(RecipesPage)).apply(this, arguments));
  }

  _createClass(RecipesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchRecipes();
    }
  }, {
    key: "renderRecipes",
    value: function renderRecipes() {
      return this.props.recipes.map(function (recipe, id) {
        return _react2.default.createElement(
          "div",
          { key: id, className: "recipe-container gold-border" },
          _react2.default.createElement(
            "div",
            { className: "ui-card inner-ui-card recipe-lg" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "h1",
                null,
                recipe.name
              ),
              _react2.default.createElement(
                "h2",
                null,
                "INGREDIENTS"
              ),
              _react2.default.createElement(
                "div",
                null,
                recipe.ingredients.split("&").map(function (ingredient, id) {
                  if (ingredient == "WET INGREDIENTS" || ingredient == "DRY INGREDIENTS") {
                    return _react2.default.createElement(
                      "h3",
                      { key: id },
                      ingredient
                    );
                  } else {
                    return _react2.default.createElement(
                      "p",
                      { key: id },
                      ingredient
                    );
                  }
                })
              )
            ),
            _react2.default.createElement("div", { className: "bar" }),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "h2",
                null,
                "INSTRUCTIONS"
              ),
              _react2.default.createElement(
                "div",
                { className: "info-text" },
                recipe.instructions.split("&").map(function (ingredient, id) {
                  return _react2.default.createElement(
                    "p",
                    { key: id },
                    ingredient
                  );
                })
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          this.renderRecipes()
        )
      );
    }
  }]);

  return RecipesPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var recipes = _ref.recipes,
      auth = _ref.auth;

  return { recipes: recipes, auth: auth };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchRecipes: _actions.fetchRecipes })((0, _requireAuth2.default)(RecipesPage)),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchRecipes)());
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: "render",
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
          case null:
            return _react2.default.createElement(
              "div",
              null,
              "Loading..."
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(21);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(6);

var _Routes = __webpack_require__(5);

var _Routes2 = _interopRequireDefault(_Routes);

var _Styles = __webpack_require__(22);

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return "\n    <html>\n    <head>\n    " + helmet.title.toString() + "\n    " + helmet.meta.toString() + "\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://pro.fontawesome.com/releases/v5.10.0/css/all.css\" integrity=\"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p\" crossorigin=\"anonymous\"/>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap\" rel=\"stylesheet\">\n    <style>\n    " + _Styles2.default + "\n    </style>\n    </head>\n    <body>\n      <div id=\"root\">" + content + "</div>\n      <script>\n        window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n      </script>\n      <script src=\"bundle.js\"></script>\n    </body> \n    </html>\n    ";
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = "\n@media screen and (min-width: 320px) {\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n    body {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: 'Roboto', sans-serif;\n      background:  linear-gradient(\n        rgba(0, 0, 0, 0.666),\n        rgba(255, 255, 255, 0.306)\n      ), url(\"https://iili.io/2kJZox.md.jpg\");\n      background-size: 400px;\n      background-repeat: repeat;\n      background-attachment: fixed;\n      color: white;\n      text-align: center;\n    }\n    h2,\n    h3 {\n      margin: 3rem;\n    }\n    h1 {\n      font-family: 'Rock Salt', cursive;\n    }\n    a {\n      text-decoration: none;\n      color: rgba(255, 255, 255, 0.9);\n    }\n    li:hover,\n    a:hover,\n    a:hover .fa-google {\n      color: rgba(255, 213, 0, 0.8);\n    }\n    .fa-google {\n      color: rgba(0, 0, 0, 0.7);\n    }\n    .nav-bar {\n      background: rgba(0, 0, 0, 0.8);\n      padding: 1rem;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      grid-template-columns: 2fr 1fr 2fr;\n      justify-content: space-between;\n      align-items: center;\n      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);\n    }\n    .nav-bar a {\n      font-size: 1.2rem;\n    }\n    li {\n      list-style: none;\n    }\n    .ui-card {\n      width: 90vw;\n      display: grid;\n      align-items: center;\n      justify-content: center;\n      font-size: 1.2rem;\n      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);\n    }\n    .login-text {\n      margin: 2rem 0 5rem 0;\n    }\n    .treats-link {\n      padding: 5rem 3rem;\n      font-size: 4rem;\n      font-family: 'Rock Salt', cursive;\n    }\n    .inner-ui-card {\n      background: linear-gradient(\n        rgba(0, 0, 0, 0.8),\n        rgba(0, 0, 0, 0.8)\n        ), url(\"https://iili.io/2kJZox.md.jpg\");\n        background-size: 400px;\n        background-repeat: repeat;\n        background-attachment: fixed;\n        width: 100%;\n        height: auto;\n        padding: 2rem 0;\n    }\n    .gold-border {\n      background: rgba(255, 213, 0, 0.347);\n      padding: 2.5rem 1rem;\n    }\n    .login-btn {\n      background: white;\n      color: black;\n      padding: 1rem;\n      display: inline-block;\n      vertical-align: middle;\n      -webkit-transform: perspective(1px) translateZ(0);\n      transform: perspective(1px) translateZ(0);\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n      position: relative;\n      -webkit-transition-property: color;\n      transition-property: color;\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n    }\n    .login-btn:before {\n      content: \"\";\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: black;\n      -webkit-transform: scaleX(0);\n      transform: scaleX(0);\n      -webkit-transform-origin: 50%;\n      transform-origin: 50%;\n      -webkit-transition-property: transform;\n      transition-property: transform;\n      -webkit-transition-duration: 0.3s;\n      transition-duration: 0.3s;\n      -webkit-transition-timing-function: ease-out;\n      transition-timing-function: ease-out;\n    }\n    .login-btn:hover, .login-btn:focus, .login-btn:active {\n      color: white;\n    }\n    .login-btn:hover:before, .login-btn:focus:before, .login-btn:active:before {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n    .recipe-container {\n      font-size: 1.2rem;\n      margin: 10vh auto;\n      width: 90%;\n      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);\n      border-radius: 2px;\n    }\n    .info-text {\n      width: 90%;\n      margin: 0 auto;\n      text-align: left;\n    }\n    .info-text p {\n      margin: 1rem 0;\n    }\n    p.info-text {\n      margin: 1rem auto;\n    }\n    .code {\n      font-size: 1.2rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-around;\n      text-align: left;\n      margin: 2rem 0;\n    }\n    .code a {\n      background: white;\n      color: black;\n      padding: 1rem;\n      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .4);\n    }\n    .code a:hover {\n      background: black;\n      color: white;\n    }\n    a:hover,\n    a:hover .fa-github {\n      color: rgb(255, 213, 0);\n    }\n    .bar {\n      display: none;\n    }\n  }\n  @media screen and (min-width: 700px) {\n    body {\n      background-size: 500px;\n      letter-spacing: 1.2px;\n    }\n    p {\n      margin: .8rem;\n    }\n    h1 {\n      font-size: 4rem;\n    }\n    .gold-border {\n      padding: 5rem 2rem;\n    }\n    .inner-ui-card {\n      padding: 6rem 2rem;\n      background-size: 500px;\n    }\n    .nav-bar a {\n      font-size: 1.5rem;\n    }\n    .fa-code,\n    .fa-sign-out,\n    .fa-cookie-bite  {\n      margin-right: 1rem;\n    }\n    .code {\n      max-width: 40vw;\n      margin: 0 auto;\n      font-size: 1.5rem;\n    }\n  }\n  @media screen and (min-width: 1200px) {\n    .ui-card {\n      width: unset;\n      min-width: 500px;\n    }\n    .recipe-lg {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      position: relative;\n    }\n    .bar {\n      display: block;\n      position: absolute;\n      background: linear-gradient(\n        rgba(255, 213, 0, 0.347),\n        rgba(255, 213, 0, 0.347)\n        ), url(\"https://iili.io/2kJZox.md.jpg\");\n      background-size: 500px;\n      background-repeat: repeat;\n      background-attachment: fixed;\n      height: 25vh;\n      width: .5rem;\n      left: 0; \n      right: 0; \n      margin: 0 auto; \n    }\n    .code {\n      max-width: 20vw;\n    }\n  }\n  @media screen and (min-width: 1600px) {\n    .ui-card {\n      max-width: 80vw;\n    }\n  }\n  }\n  ";

exports.default = styles;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(25);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "http://secure-brushlands-32363.herokuapp.com",
    headers: { cookie: req.get("cookie") || "" }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _authReducer = __webpack_require__(27);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _recipesReducer = __webpack_require__(28);

var _recipesReducer2 = _interopRequireDefault(_recipesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  recipes: _recipesReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _actions = __webpack_require__(2);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_RECIPES:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ })
/******/ ]);