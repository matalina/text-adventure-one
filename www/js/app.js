webpackJsonp([1],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
module.exports = __webpack_require__(295);


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_events__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_game__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(289);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_events___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["default"]);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
    components: {
        Game: __WEBPACK_IMPORTED_MODULE_4__components_game___default.a
    }
});

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(225)
}
var normalizeComponent = __webpack_require__(229)
/* script */
var __vue_script__ = __webpack_require__(230)
/* template */
var __vue_template__ = __webpack_require__(288)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/game.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-579900c4", Component.options)
  } else {
    hotAPI.reload("data-v-579900c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(227)("73e24b0a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-579900c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./game.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-579900c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./game.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  height: 100%;\n  background: url(http://www.aliciawilkerson.com/images/metalwall.jpg) #000 no-repeat center center fixed;\n  background-size: cover;\n}\n.title {\n  font-size: 5rem;\n  font-weight: normal;\n  margin: 0;\n  padding: 0;\n  color: #EC5800;\n  display: block;\n  text-shadow: 0 0 5px #EC5800, 0 0 6px #EC5800, 0 0 7px #EC5800, 0 0 15px #EC5800;\n  position: relative;\n}\n.tag-line {\n  font-size: 2rem;\n  margin: 0;\n  padding: 0 20px 0 0;\n  display: block;\n  color: #EC5800;\n}\n.f1 {\n  font-family: 'Advent Pro', sans-serif;\n  line-height: 1.9rem;\n}\n.f2 {\n  font-family: 'Share Tech', sans-serif;\n}\n.f9 {\n  font-family: 'Megrim', cursive;\n}\n.coming-soon {\n  background: url(http://aliciawilkerson.com/images/cyberpunk.png) no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  text-align: center;\n}\n.blurb {\n  max-width: 800px;\n  background: #fff;\n  padding: 20px;\n  font-size: 18pt;\n  margin: auto;\n  margin-top: 20px;\n}\n.border1 {\n  border: 15px solid transparent;\n  -webkit-border-image: url(\"http://aliciawilkerson.com/images/orangecircuit.png\") 20 20 round;\n  margin-bottom: 100px;\n}\n#command-line {\n  background: rgba(0, 0, 0, 0.5);\n  color: #EC5800;\n  border: 1px solid transparent;\n  border-bottom: 1px solid #EC5800;\n}\n", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(228)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 228:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_chapters__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_character_verbs__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(30);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var MarkdownIt = __webpack_require__(86),
    md = new MarkdownIt();

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'display',
    data: function data() {
        return {
            command: null,
            chapters: __WEBPACK_IMPORTED_MODULE_0__game_chapters__["a" /* default */]
        };
    },
    computed: _extends({
        display: function display() {
            return this.story.reverse();
        },
        verbs: function verbs() {
            return _extends({}, __WEBPACK_IMPORTED_MODULE_1__game_character_verbs__["a" /* default */], this.character.verbs, this.character.profession.verbs, this.character.mutation.verbs);
        },
        start: function start() {
            return this.chapters[0];
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapState"])(['story', 'progress', 'character'])),
    methods: {
        markdown: function markdown(output) {
            return md.render(output);
        },
        execute: function execute() {
            this.parseCommand();
        },
        parseCommand: function parseCommand() {
            var words = this.command.split(' '),
                verb = words[0],
                remainder = words.splice(1);

            if (this.validateVerb(verb)) {
                this.verb = verb;
            } else {}
        },
        validateVerb: function validateVerb(verb) {
            return typeof this.verbs[verb] === 'function';
        },


        // state saving
        saveStory: function saveStory(object) {
            this.$store.commit('story-add', object);
        },
        saveProgress: function saveProgress(chapter_number) {
            this.$store.commit('progress-update', chapter_number);
        }
    }
});

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chapters_000__ = __webpack_require__(85);


/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__chapters_000__["a" /* default */]]);

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    look: function look(object) {
        return object.description;
    },
    l: this.look
});

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "game" } }, [
    _c("main", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "pb-5", attrs: { id: "display" } },
        _vm._l(_vm.display, function(d) {
          return _c("div", [
            _c("div", {
              class: d.type,
              domProps: {
                innerHTML: _vm._s(_vm.markdown(d.object.description))
              }
            })
          ])
        })
      )
    ]),
    _vm._v(" "),
    _c(
      "nav",
      { staticClass: "navbar fixed-bottom navbar-expand navbar-dark bg-dark" },
      [
        _c("div", { staticClass: "nav-item form-group my-2 w-100" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.command,
                expression: "command"
              }
            ],
            staticClass: "form-control",
            attrs: {
              id: "command-line",
              type: "text",
              placeholder: "What do you want to do?"
            },
            domProps: { value: _vm.command },
            on: {
              change: function($event) {
                _vm.execute()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.command = $event.target.value
              }
            }
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-579900c4", module.exports)
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_character_character__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__ = __webpack_require__(85);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    plugins: [Object(__WEBPACK_IMPORTED_MODULE_2_vuex_persistedstate__["default"])()],
    state: {
        story: [{
            type: 'chapter',
            object: __WEBPACK_IMPORTED_MODULE_4__game_chapters_000__["a" /* default */]
        }],
        character: __WEBPACK_IMPORTED_MODULE_3__game_character_character__["a" /* default */],
        progress: 0
    },
    mutations: {
        'story-add': function storyAdd(state, object) {
            state.story.push(object);
        },
        'progress-update': function progressUpdate(state, progress) {
            state.progress = progress;
        }
    }
}));

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hunter__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aphen__ = __webpack_require__(294);



var character = {
    name: 'Phoenix',
    nicknames: ['Nix'],
    tag: 'nix',
    age: 21,
    prestige: 31,
    id: '6-M1U6Q5R-V2C986L-PH03N1X',
    credits: 1500370,
    basic: {
        hair: 'You have been told your hair is the color brown.',
        eyes: 'You were born without eyes.',
        height: 'You are six feet tall.',
        tattoo: 'Your ID number is tattooed on your right collar bone as a barcode for easy scanning.  The same number is laser-etched microscopically on the collar bone underneath the visible tattoo',
        clothes: 'You tend to wear all black, since color is not something you see.  You always wear a long leather coat with large pockets that hangs to just above your ankles and is rarely buttoned.  You wear a comfortable t-shirt and a pair of tough leather pants tucked inside a pair of thigh-high leather boots that zip with a large gun-metal zipper handle on the outside of each leg. Your ID card hangs from a gun-metal chain around your neck.'
    },
    profession: __WEBPACK_IMPORTED_MODULE_0__hunter__["a" /* default */],
    history: [
        // cover the 10 prestige points
    ],
    pocket: ['mouse', 'id'], // 5 small things
    mutation: __WEBPACK_IMPORTED_MODULE_1__aphen__["a" /* default */],
    cybernetics: [{
        location: 'above right eye',
        type: 'camera',
        description: 'Above your right eyes is a camera that picks up anything you look at and wirelessly transmits the data to your little black box.'
    }, {
        location: 'inner ear',
        type: 'audio',
        description: 'Attached to the bones inside your right ear and jaw is a microphone and speaker that relay information to you wirelessly from your little black box.'
    }],
    verbs: {
        mouse: function mouse(do_something) {}
    }
};

/* harmony default export */ __webpack_exports__["a"] = (character);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Bounty Hunter',
    tag: 'hunter',
    description: '',
    verbs: {}
});

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Apophenism',
    tag: 'aphen',
    description: 'Apophenism is a mutation that allows a person to see the elemental make up of their surroundings at it\'s most basic level.  This particular mutation can render a person dysfunctional if they do not learn how to control the visual stimuli the mutation causes.  It is rare that a person with apophenism survives with both eyes intact.  Most of the time they remove their own eyes to save their sanity.  Most aphens have the ability to create things from nothing.',
    verbs: {
        create: function create(something) {}
    }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    title: 'the search for x',
    description: '\n# The Search for X\n\nIt is the 3121 and Earth is overpopulated.  78 billion people and growing live on the dead rock that is now Earth.  The ice caps have melted and the water that remains is polluted.  Only a giant city remains across the planet.  The governments of the twenty-first century have fallen replaced by six mega-corporations that control all aspects of life including births and deaths.  \n\nLives begin and end at prestige rating of zero. Every year up to your 25th birthday you receive one prestige rating just for living.  After the age of 25 your lose two prestige. A person who does nothing with their lives will be terminated at age 37, but it is possible to earn prestige through your profession or buy it if you are rich enough.  But in the same manner it is also possible to lose prestige through your failures.\n\nA recent leak from Allied Corporation, the oldest and strongest of the megacorps, reveals they are searching for something called \'X\'.  You are one of the first few to learn of this development.  Do you wish to undertake this mission? \n        ',
    exit: 'yes'
});

/***/ })

},[107]);