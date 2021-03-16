(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/axiosClient */ "./resources/js/utils/axiosClient.js");
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
    this.getStocks();
  },
  data: function data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [5, 10, 15, 30, 50],
      filter: null,
      isBusy: false,
      cantStockable: 0,
      fields: [// A virtual column that doesn't exist in items ☑
      {
        key: 'index',
        label: 'N°',
        "class": 'text-center',
        thStyle: {
          width: '1%'
        }
      }, {
        key: 'almacen',
        label: 'Alamcen',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }, {
        key: 'nro_material',
        label: 'Codigo',
        "class": 'text-center',
        thStyle: {
          width: '2%'
        },
        sortable: true
      }, {
        key: 'nombre',
        label: 'Nombre',
        "class": 'text-center',
        thStyle: {
          width: '20%'
        },
        sortable: true
      }, {
        key: 'cantidad_max',
        label: 'Cantidad Max.',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }, {
        key: 'stock_disponible',
        label: 'Stock',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }, {
        key: 'fecha_vencimiento',
        label: 'Fecha Venc.',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }],
      materialesStock: [],
      errors: []
    };
  },
  methods: {
    getStocks: function getStocks() {
      var _this = this;

      this.isBusy = true;
      var params = {
        page: 1,
        per_page: this.perPage,
        filter_key: this.filter
      };
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/stock', {
        params: params
      }).then(function (response) {
        var respuesta = response.data.data;
        _this.isBusy = false;
        console.log(respuesta);
        _this.materialesStock = respuesta.materiales;
        _this.totalRows = respuesta.total;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorUsuario(error);
      });
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    esExistencia: function esExistencia(cantidadMax, cantidadStock) {
      var success = 75; // %

      var warning = 45; // %

      var danger = 20; // %

      var result = cantidadStock * 100 / cantidadMax; // console.log('max', cantidadMax, 'stock', cantidadStock, 'result', result);

      return result >= success ? 0 : result >= warning ? 1 : 2;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Hoja de Estilo */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true& ***!
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
                      attrs: { to: { name: "material-index" } }
                    },
                    [
                      _vm._v(
                        "\n                                Materiales\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: "stock-create" } }
                    },
                    [
                      _vm._v(
                        "\n                                Materiales Para Ingresar Stock\n                                "
                      ),
                      _c("b-badge", { attrs: { variant: "success" } }, [
                        _vm._v(" +" + _vm._s(_vm.cantStockable) + " "),
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("unread messages")
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-badge", { attrs: { variant: "success" } }, [
                    _vm._v("Abastecido")
                  ]),
                  _vm._v(" "),
                  _c("b-badge", { attrs: { variant: "warning" } }, [
                    _vm._v("Proximo a pedir")
                  ]),
                  _vm._v(" "),
                  _c("b-badge", { attrs: { variant: "danger" } }, [
                    _vm._v("Hacer Pedido")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "dataTables_wrapper dt-bootstrap4" },
                  [
                    _c("div", { staticClass: "row mb-1" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c("span", { staticClass: "pt-2 mr-1" }, [
                              _vm._v("Mostrar ")
                            ]),
                            _vm._v(" "),
                            _c("b-form-select", {
                              attrs: {
                                id: "per-page-select",
                                options: _vm.pageOptions,
                                size: "sm"
                              },
                              model: {
                                value: _vm.perPage,
                                callback: function($$v) {
                                  _vm.perPage = $$v
                                },
                                expression: "perPage"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "pt-2 ml-1" }, [
                              _vm._v(" Registros")
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-3 offset-sm-6 text-right" },
                        [
                          _c("div", { staticClass: "form-group row" }, [
                            _c("div", { staticClass: "col-sm-4" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-8" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.filter,
                                    expression: "filter"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "search",
                                  placeholder: "Buscar"
                                },
                                domProps: { value: _vm.filter },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.filter = $event.target.value
                                  }
                                }
                              })
                            ])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-row",
                      [
                        _c(
                          "div",
                          {
                            staticClass: "col-sm-12",
                            staticStyle: { display: "block", width: "100%" }
                          },
                          [
                            _c("b-table", {
                              staticClass:
                                "table table-striped table-bordered table-hover",
                              attrs: {
                                fields: _vm.fields,
                                items: _vm.materialesStock,
                                filter: _vm.filter,
                                "current-page": _vm.currentPage,
                                "per-page": _vm.perPage,
                                busy: _vm.isBusy,
                                small: "",
                                responsive: "sm"
                              },
                              on: { filtered: _vm.onFiltered },
                              scopedSlots: _vm._u([
                                {
                                  key: "cell(index)",
                                  fn: function(row) {
                                    return [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(row.index + 1) +
                                          "\n                                            "
                                      )
                                    ]
                                  }
                                },
                                {
                                  key: "cell(stock_disponible)",
                                  fn: function(row) {
                                    return [
                                      _vm.esExistencia(
                                        row.item.cantidad_max,
                                        row.item.stock_disponible
                                      ) == 0
                                        ? _c(
                                            "b-td",
                                            { attrs: { variant: "success" } },
                                            [
                                              _c(
                                                "b-badge",
                                                {
                                                  attrs: { variant: "success" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(
                                                        row.item
                                                          .stock_disponible
                                                      ) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm.esExistencia(
                                            row.item.cantidad_max,
                                            row.item.stock_disponible
                                          ) == 1
                                        ? _c(
                                            "b-td",
                                            { attrs: { variant: "warning" } },
                                            [
                                              _c(
                                                "b-badge",
                                                {
                                                  attrs: { variant: "warning" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                        " +
                                                      _vm._s(
                                                        row.item
                                                          .stock_disponible
                                                      ) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _c(
                                            "b-td",
                                            { attrs: { variant: "danger" } },
                                            [
                                              _c(
                                                "b-badge",
                                                {
                                                  attrs: { variant: "danger" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                                    " +
                                                      _vm._s(
                                                        row.item
                                                          .stock_disponible
                                                      ) +
                                                      "\n                                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                    ]
                                  }
                                },
                                {
                                  key: "table-busy",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-center text-danger my-2"
                                        },
                                        [
                                          _c("b-spinner", {
                                            staticClass: "align-middle"
                                          }),
                                          _vm._v(" "),
                                          _c("strong", [_vm._v("Loading...")])
                                        ],
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-row", [
                          _c("div", { staticClass: "col-sm-8" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-4" },
                            [
                              _c("b-pagination", {
                                staticClass: "my-0",
                                attrs: {
                                  "total-rows": _vm.totalRows,
                                  "per-page": _vm.perPage,
                                  align: "fill",
                                  size: "sm"
                                },
                                model: {
                                  value: _vm.currentPage,
                                  callback: function($$v) {
                                    _vm.currentPage = $$v
                                  },
                                  expression: "currentPage"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
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
            _c("h1", { staticClass: "m-0" }, [
              _vm._v("Existencia de Materiales")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Stock")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventario/stock/views/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/modules/inventario/stock/views/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=27c4ef60&scoped=true& */ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& */ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27c4ef60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/stock/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=style&index=0&id=27c4ef60&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_27c4ef60_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=27c4ef60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/stock/views/index.vue?vue&type=template&id=27c4ef60&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_27c4ef60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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