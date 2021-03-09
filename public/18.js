(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/axiosClient */ "./resources/js/utils/axiosClient.js");
/* harmony import */ var _mixins_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/util */ "./resources/js/mixins/util.js");
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  created: function created() {
    this.getAlmacenes();
  },
  data: function data() {
    return {
      almacenes: []
    };
  },
  methods: {
    getAlmacenes: function getAlmacenes() {
      var _this = this;

      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/almacen').then(function (response) {
        // console.log(response);
        var respuesta = response.data.data;
        _this.almacenes = respuesta.almacenes;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorAlmacen(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    eliminarAlmacen: function eliminarAlmacen(index, id) {
      var _this2 = this;

      var almacen = this.getAlmacen(id);
      this.$swal.fire({
        title: 'Esta Seguro de Eliminar',
        text: "Al almacen " + almacen.name + ".",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/almacen/' + id).then(function (response) {
            _this2.$swal.fire({
              title: 'Success!',
              text: response.data.message,
              //'Se ha eliminada el almacen exitosamente',
              icon: 'success',
              timer: 1000
            }); // console.log(response.data.message);


            _this2.almacenes.splice(index, 1);
          });
        }
      });
    },
    getAlmacen: function getAlmacen(id) {
      var almacen = this.almacenes.filter(function (almacen) {
        return almacen.id == id;
      });
      return almacen[0];
    },
    encrypt: function encrypt(value) {
      return Object(_mixins_util__WEBPACK_IMPORTED_MODULE_1__["btoa"])(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-header" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: "almacen-create" } }
                    },
                    [
                      _vm._v(
                        "\n                                Nuevo\n                            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  {
                    staticClass: "dataTables_wrapper dt-bootstrap4",
                    attrs: { id: "example2_wrapper" }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-bordered table-hover dataTable",
                            attrs: { role: "grid" }
                          },
                          [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.almacenes, function(almacen, index) {
                                return _c("tr", { attrs: { role: "row" } }, [
                                  _c("td", [_vm._v(" " + _vm._s(index + 1))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(" " + _vm._s(almacen.nombre) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " + _vm._s(almacen.ubicacion) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn btn-warning",
                                          attrs: {
                                            to:
                                              "/almacen/" +
                                              _vm.encrypt(almacen.id) +
                                              "/edit",
                                            "data-toggle": "tooltip",
                                            "data-placement": "top",
                                            title: "Editar"
                                          }
                                        },
                                        [_c("i", { staticClass: "fa fa-edit" })]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminarAlmacen(
                                              index,
                                              almacen.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-eraser",
                                          staticStyle: { cursor: "pointer" }
                                        })
                                      ]
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Almacenes")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Almacen")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 col-md-6" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { attrs: { role: "row" } }, [
        _c("th", [_vm._v("Nro")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ubicacion")]),
        _vm._v(" "),
        _c("th", [_vm._v("Editar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Eliminar")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/util.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/util.js ***!
  \*************************************/
/*! exports provided: btoa, atob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return btoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atob", function() { return atob; });
function btoa(value) {
  return window.btoa(value);
}

function atob(value) {
  return window.atob(value);
}



/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/index.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=d31bf192& */ "./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/almacen/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192&":
/*!************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=d31bf192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/index.vue?vue&type=template&id=d31bf192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_d31bf192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/axiosClient.js":
/*!*******************************************!*\
  !*** ./resources/js/utils/axiosClient.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var urlBackend = 'http://127.0.0.1:8088'; // process.env.MIX_URL_API_AFI;

console.log(urlBackend);
var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: urlBackend + '/api'
});
/* harmony default export */ __webpack_exports__["default"] = (axiosClient);

/***/ })

}]);