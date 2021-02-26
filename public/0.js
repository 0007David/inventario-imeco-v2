(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    color: {
      type: String,
      "default": "teal"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge */ "./resources/js/modules/proyectos/etapas/components/Badge.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Badge: _Badge__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    task: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    badgeColor: function badgeColor() {
      var mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        "default": "teal"
      };
      return mappings[this.task.type] || mappings["default"];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TaskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TaskCard */ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    TaskCard: _components_TaskCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      columns: [{
        title: "Backlog",
        tasks: [{
          id: 1,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }, {
          id: 2,
          title: "Provide documentation on integrations",
          date: "Sep 12"
        }, {
          id: 3,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        }, {
          id: 4,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }, {
          id: 5,
          title: "Test checkout flow",
          date: "Sep 15",
          type: "QA"
        }]
      }, {
        title: "In Progress",
        tasks: [{
          id: 6,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        }, {
          id: 7,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }, {
          id: 8,
          title: "Provide documentation on integrations",
          date: "Sep 12",
          type: "Backend"
        }]
      }, {
        title: "Review",
        tasks: [{
          id: 9,
          title: "Provide documentation on integrations",
          date: "Sep 12"
        }, {
          id: 10,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        }, {
          id: 11,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }, {
          id: 12,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        }, {
          id: 13,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }]
      }, {
        title: "Done",
        tasks: [{
          id: 14,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }, {
          id: 15,
          title: "Design shopping cart dropdown",
          date: "Sep 9",
          type: "Design"
        }, {
          id: 16,
          title: "Add discount code to checkout page",
          date: "Sep 14",
          type: "Feature Request"
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css);", ""]);

// module
exports.push([module.i, "\n.column-width[data-v-467a9526] {\r\n    min-width: 320px;\r\n    width: 320px;\n}\r\n    /* Unfortunately @apply cannot be setup in codesandbox,\r\n    but you'd use \"@apply border opacity-50 border-blue-500 bg-gray-200\" here */\n.ghost-card[data-v-467a9526] {\r\n    opacity: 0.5;\r\n    background: #F7FAFC;\r\n    border: 1px solid #4299e1;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "px-3 h-6 rounded-full text-xs font-semibold flex items-center",
      class: "bg-" + _vm.color + "-100 text-" + _vm.color + "-700"
    },
    [
      _c("span", {
        staticClass: "w-2 h-2 rounded-full mr-1",
        class: "bg-" + _vm.color + "-400"
      }),
      _vm._v(" "),
      _c("span", [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-white shadow rounded px-3 pt-3 pb-5 border border-white"
    },
    [
      _c("div", { staticClass: "flex justify-between" }, [
        _c(
          "p",
          {
            staticClass:
              "text-gray-700 font-semibold font-sans tracking-wide text-sm"
          },
          [_vm._v(_vm._s(_vm.task.title))]
        ),
        _vm._v(" "),
        _c("img", {
          staticClass: "w-6 h-6 rounded-full ml-3",
          attrs: {
            src:
              "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png",
            alt: "Avatar"
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex mt-4 justify-between items-center" },
        [
          _c("span", { staticClass: "text-sm text-gray-600" }, [
            _vm._v(_vm._s(_vm.task.date))
          ]),
          _vm._v(" "),
          _vm.task.type
            ? _c("badge", { attrs: { color: _vm.badgeColor } }, [
                _vm._v(_vm._s(_vm.task.type))
              ])
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("div", { staticClass: "flex justify-center" }, [
      _c(
        "div",
        { staticClass: "min-h-screen flex overflow-x-scroll py-12" },
        _vm._l(_vm.columns, function(column) {
          return _c(
            "div",
            {
              key: column.title,
              staticClass:
                "bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
            },
            [
              _c(
                "p",
                {
                  staticClass:
                    "text-gray-700 font-semibold font-sans tracking-wide text-sm"
                },
                [_vm._v(_vm._s(column.title))]
              ),
              _vm._v(" "),
              _c(
                "draggable",
                {
                  attrs: {
                    list: column.tasks,
                    animation: 200,
                    "ghost-class": "ghost-card",
                    group: "tasks"
                  }
                },
                _vm._l(column.tasks, function(task) {
                  return _c("task-card", {
                    key: task.id,
                    staticClass: "mt-3 cursor-move",
                    attrs: { task: task }
                  })
                }),
                1
              )
            ],
            1
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/Badge.vue":
/*!********************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/Badge.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge.vue?vue&type=template&id=6bdf5192&scoped=true& */ "./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true&");
/* harmony import */ var _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Badge.vue?vue&type=script&lang=js& */ "./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bdf5192",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proyectos/etapas/components/Badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Badge.vue?vue&type=template&id=6bdf5192&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/Badge.vue?vue&type=template&id=6bdf5192&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_template_id_6bdf5192_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/TaskCard.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskCard.vue?vue&type=template&id=1ace1a16& */ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16&");
/* harmony import */ var _TaskCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskCard.vue?vue&type=script&lang=js& */ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proyectos/etapas/components/TaskCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaskCard.vue?vue&type=template&id=1ace1a16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/components/TaskCard.vue?vue&type=template&id=1ace1a16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskCard_vue_vue_type_template_id_1ace1a16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/views/board.vue":
/*!***************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/views/board.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.vue?vue&type=template&id=467a9526&scoped=true& */ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true&");
/* harmony import */ var _board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.vue?vue&type=script&lang=js& */ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& */ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "467a9526",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proyectos/etapas/views/board.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=style&index=0&id=467a9526&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_467a9526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./board.vue?vue&type=template&id=467a9526&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/etapas/views/board.vue?vue&type=template&id=467a9526&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_template_id_467a9526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);