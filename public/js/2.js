(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getMateriales();
  },
  data: function data() {
    return {
      pagina_opciones: [10, 20, 30, 50, 100],
      por_pagina: 50,
      pagina_actual: 1,
      total_filas: 1,
      // estado: true,
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [5, 10, 15, 30, 50],
      filter: null,
      // ----
      isBusy: false,
      materiales: [],
      categorias: [],
      unidadesMedidas: [],
      fields: [// A virtual column that doesn't exist in items
      {
        key: 'index',
        label: 'N°',
        "class": 'text-center',
        thStyle: {
          width: '1%'
        }
      }, {
        key: 'nro_material',
        label: 'Codigo Material',
        "class": 'text-center',
        thStyle: {
          width: '6%'
        },
        sortable: true
      }, {
        key: 'nombre',
        label: 'Nombre',
        "class": 'text-center',
        thStyle: {
          width: '25%'
        },
        sortable: true
      }, {
        key: 'precio',
        label: 'Precio',
        "class": 'text-center',
        thStyle: {
          width: '4%'
        },
        sortable: true
      }, {
        key: 'categoria',
        label: 'Categoria',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }, {
        key: 'unidad_medida',
        label: 'Unidad Medida',
        "class": 'text-center',
        thStyle: {
          width: '8%'
        },
        sortable: true
      }, {
        key: 'operaciones',
        label: 'Operaciones',
        "class": 'text-center',
        thStyle: {
          width: '6%'
        },
        sortable: true
      }]
    };
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.materiales.length;
  },
  methods: {
    getMateriales: function getMateriales() {
      var _this = this;

      this.isBusy = true;
      var params = {
        page: 1,
        per_page: this.perPage,
        filter_key: this.filter
      };
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/material', {
        params: params
      }).then(function (response) {
        console.log(response);
        var respuesta = response.data.data;
        _this.materiales = respuesta.materiales;
        _this.totalRows = respuesta.total;
        _this.isBusy = false;
      })["catch"](function (error) {
        console.log(error);
        alert(error); // this.setErrorUsuario(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    eliminarMaterial: function eliminarMaterial(index, id) {
      var _this2 = this;

      var material = this.getMaterial(id);
      this.$swal.fire({
        title: 'Esta Seguro de Eliminar',
        text:  true ? material.nombre.substring(0, 45) + '...' : undefined,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/material/' + id).then(function (response) {
            _this2.$swal.fire({
              title: 'Success!',
              text: response.data.message,
              //'Se ha eliminada el material exitosamente',
              icon: 'success',
              timer: 1000
            }); // console.log(response.data.message);


            _this2.materiales.splice(index, 1);
          });
        }
      });
    },
    categoriaName: function categoriaName(id) {
      var categoria = this.categorias.filter(function (categoria) {
        return categoria.id == id;
      });
      return categoria[0].nombre;
    },
    unidadMedidaName: function unidadMedidaName(id) {
      var unidadMedida = this.unidadesMedidas.filter(function (unidadMedida) {
        return unidadMedida.id == id;
      });
      return unidadMedida[0].nombre;
    },
    getMaterial: function getMaterial(id) {
      var material = this.materiales.filter(function (material) {
        return material.codigo == id;
      });
      return material[0];
    },
    encrypt: function encrypt(value) {
      return Object(_mixins_util__WEBPACK_IMPORTED_MODULE_1__["btoa"])(value);
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*Estilo CSS*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                      attrs: { to: { name: "material-create" } }
                    },
                    [
                      _vm._v(
                        "\n                                Nuevo\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: { name: "stock-index" } }
                    },
                    [
                      _vm._v(
                        "\n                                Stock\n                            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "dataTables_wrapper dt-bootstrap4" }, [
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
                              attrs: { type: "search", placeholder: "Buscar" },
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
                    "div",
                    { staticClass: "row" },
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
                              items: _vm.materiales,
                              filter: _vm.filter,
                              "current-page": _vm.currentPage,
                              "per-page": _vm.perPage,
                              busy: _vm.isBusy,
                              small: ""
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
                                key: "cell(operaciones)",
                                fn: function(row) {
                                  return [
                                    row.item.es_padre
                                      ? _c(
                                          "router-link",
                                          {
                                            staticClass: "btn btn-info",
                                            attrs: {
                                              title: "Add Dependencia",
                                              to:
                                                "/material/" +
                                                _vm.encrypt(row.item.codigo) +
                                                "/show",
                                              "data-toggle": "tooltip",
                                              "data-placement": "top"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-eye",
                                              staticStyle: { cursor: "pointer" }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "btn btn-warning",
                                        attrs: {
                                          to:
                                            "/material/" +
                                            _vm.encrypt(row.item.codigo) +
                                            "/edit",
                                          "data-toggle": "tooltip",
                                          "data-placement": "top",
                                          title: "Editar"
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-edit",
                                          staticStyle: { cursor: "pointer" }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminarMaterial(
                                              row.index,
                                              row.item.codigo
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
                ])
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
            _c("h1", { staticClass: "m-0" }, [_vm._v("Materiales")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Materiales")
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

/***/ "./resources/js/modules/inventario/material/views/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a82a6e5e&scoped=true& */ "./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& */ "./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a82a6e5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/material/views/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=style&index=0&id=a82a6e5e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a82a6e5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a82a6e5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/index.vue?vue&type=template&id=a82a6e5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a82a6e5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./resources/js/utils/const.js");


var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _const__WEBPACK_IMPORTED_MODULE_1__["default"] + '/api'
});
/* harmony default export */ __webpack_exports__["default"] = (axiosClient);

/***/ }),

/***/ "./resources/js/utils/const.js":
/*!*************************************!*\
  !*** ./resources/js/utils/const.js ***!
  \*************************************/
/*! exports provided: urlBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlBackend", function() { return urlBackend; });
var urlBackend = "https://imeco-srl.herokuapp.com";


/***/ })

}]);