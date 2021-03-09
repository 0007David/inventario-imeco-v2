(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/axiosClient */ "./resources/js/utils/axiosClient.js");
/* harmony import */ var _mixins_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../mixins/util */ "./resources/js/mixins/util.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'update',
  created: function created() {
    this.getData();
  },
  data: function data() {
    return {
      // estado: true,
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [5, 10, 15, 30, 50],
      filter: null,
      // ----
      isBusy: false,
      seGuarda: false,
      selectMode: 'multi',
      selectedMateriales: [],
      formData: {
        materialesHijos: [],
        codigoMaterialPadre: null
      },
      material: {},
      materialesDependen: [],
      fields: [// A virtual column that doesn't exist in items
      {
        key: 'selected',
        label: 'Selected ',
        "class": 'text-center',
        thStyle: {
          width: '4%'
        }
      }, {
        key: 'nro_material',
        label: 'Codigo Material',
        "class": 'text-center',
        thStyle: {
          width: '5%'
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
      }],
      fieldsSelected: [// A virtual column that doesn't exist in items
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
          width: '5%'
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
      }],
      errors: []
    };
  },
  computed: {
    seGuardaForm: function seGuardaForm() {
      console.log(_typeof(this.selectedMateriales));

      if (typeof this.selectedMateriales === "undefined") {
        this.seGuarda = false;
      } else {
        this.seGuarda = this.selectedMateriales.length > 0;
      }

      return this.seGuarda;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.isBusy = true;
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/material/' + this.desencrypt(this.$route.params.id) + '/show').then(function (response) {
        var respuesta = response.data.data; // console.log(respuesta);

        _this.material = respuesta.material;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorUsuario(error);
      });
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/depende/' + this.desencrypt(this.$route.params.id) + '/show').then(function (response) {
        var respuesta = response.data.data;
        console.log(respuesta);
        _this.selectedMateriales = respuesta.materiales;
        _this.isBusy = false;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorUsuario(error);
      });
    },
    getMateriales: function getMateriales() {
      var _this2 = this;

      this.isBusy = true;
      var params = {
        page: 1,
        per_page: this.perPage,
        filter_key: this.filter
      };
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/depende', {
        params: params
      }).then(function (response) {
        var respuesta = response.data.data;
        _this2.isBusy = false;
        console.log(respuesta);
        _this2.materialesDependen = respuesta.materiales;
        _this2.totalRows = respuesta.total;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorUsuario(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    showModalDepepende: function showModalDepepende() {
      this.getMateriales();
      this.$refs['modal-material-depende'].show();
    },
    onRowSelected: function onRowSelected(items) {
      this.selectedMateriales = items;
    },
    clearSelected: function clearSelected() {
      this.$refs.selectableTableMaterial.clearSelected();
    },
    storeMateriales: function storeMateriales() {
      var _this3 = this;

      if (this.validarFormulario()) {
        this.cargarFormData();
        console.log(this.formData);
        this.$swal.fire({
          title: 'Success',
          text: "Se ha creado exitosamente",
          icon: 'success',
          timer: 1000
        });
        _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].post('/depende', this.formData).then(function (response) {
          console.log(response.data);

          _this3.$router.push({
            name: 'material-index'
          });
        });
      }
    },
    cargarFormData: function cargarFormData() {
      var _this4 = this;

      this.selectedMateriales.forEach(function (material) {
        _this4.formData.materialesHijos.push({
          codigo: material.codigo
        });
      });
      this.formData.codigoMaterialPadre = this.desencrypt(this.$route.params.id);
    },
    validarFormulario: function validarFormulario() {
      return true;
    },
    desencrypt: function desencrypt(value) {
      return Object(_mixins_util__WEBPACK_IMPORTED_MODULE_1__["atob"])(value);
    },
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  watch: {
    selectedMateriales: function selectedMateriales(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*Estilo CSS*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-wrapper" },
    [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h3", { staticClass: "m-0" }, [
                _vm._v(
                  "\n                        Material:\n                        "
                ),
                _c("small", [_vm._v(_vm._s(_vm.material.nombre))])
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card-header" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { variant: "primary" },
                        on: { click: _vm.showModalDepepende }
                      },
                      [
                        _vm._v(
                          "\n                                Agregar Material Dependientes\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm.seGuardaForm
                      ? _c(
                          "b-button",
                          {
                            attrs: { variant: "success" },
                            on: { click: _vm.storeMateriales }
                          },
                          [
                            _vm._v(
                              "\n                                Guardar\n                            "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { to: { name: "material-index" } }
                      },
                      [
                        _vm._v(
                          "\n                                Regresar\n                            "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("b-row", [
                      _c("div", { staticClass: "form-group col-md-2" }, [
                        _c("label", { attrs: { htmlFor: "codigo" } }, [
                          _vm._v(
                            "\n                                        Codigo\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.material.nro_material,
                              expression: "material.nro_material"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "codigo", required: "", type: "text" },
                          domProps: { value: _vm.material.nro_material },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.material,
                                "nro_material",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-5" },
                        [
                          _c("label", { attrs: { htmlFor: "categoria" } }, [
                            _vm._v(
                              "\n                                        Categoria\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { id: "categoria" },
                            model: {
                              value: _vm.material.categoria,
                              callback: function($$v) {
                                _vm.$set(_vm.material, "categoria", $$v)
                              },
                              expression: "material.categoria"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-5" },
                        [
                          _c("label", { attrs: { htmlFor: "unidad" } }, [
                            _vm._v(
                              "\n                                        Unidad de Medida\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-form-input", {
                            attrs: { id: "unidad" },
                            model: {
                              value: _vm.material.unidad_medida,
                              callback: function($$v) {
                                _vm.$set(_vm.material, "unidad_medida", $$v)
                              },
                              expression: "material.unidad_medida"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("b-row", [
                      _c("div", { staticClass: "form-group col-md-10" }, [
                        _c("label", { attrs: { htmlFor: "nombre" } }, [
                          _vm._v(
                            "\n                                        Nombre\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.material.nombre,
                              expression: "material.nombre"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "nombre", required: "", type: "text" },
                          domProps: { value: _vm.material.nombre },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.material,
                                "nombre",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-2" }, [
                        _c("label", { attrs: { htmlFor: "precio" } }, [
                          _vm._v(
                            "\n                                        Precio\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.material.precio,
                              expression: "material.precio"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "precio", required: "", type: "text" },
                          domProps: { value: _vm.material.precio },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.material,
                                "precio",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-row", [
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", { attrs: { htmlFor: "descripcion" } }, [
                          _vm._v(
                            "\n                                        Descripcion\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.material.descripcion,
                              expression: "material.descripcion"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "descripcion", cols: "30", rows: "4" },
                          domProps: { value: _vm.material.descripcion },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.material,
                                "descripcion",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-row", [
                      _c("div", { staticClass: "col-sm-12 text-center" }, [
                        _c("h3", { staticClass: "text-success" }, [
                          _vm._v("Lista de Materiales Dependientes")
                        ])
                      ]),
                      _vm._v(" "),
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
                              fields: _vm.fieldsSelected,
                              items: _vm.selectedMateriales,
                              small: "",
                              responsive: "sm"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "cell(index)",
                                fn: function(row) {
                                  return [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(row.index + 1) +
                                        "\n                                        "
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
                      )
                    ])
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-material-depende",
          attrs: {
            id: "modal-material-depende",
            size: "xl",
            "hide-footer": "",
            scrollable: "",
            title: "Lista Productos Dependiente"
          }
        },
        [
          _c(
            "div",
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
                _c("div", { staticClass: "col-sm-3 offset-sm-6 text-right" }, [
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
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "div",
                    { staticClass: "col-sm-12" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { size: "sm" },
                          on: { click: _vm.clearSelected }
                        },
                        [_vm._v("DesSeleccionar Todo")]
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("b-table", {
                        ref: "selectableTableMaterial",
                        staticClass:
                          "table table-striped table-bordered table-hover",
                        attrs: {
                          fields: _vm.fields,
                          items: _vm.materialesDependen,
                          filter: _vm.filter,
                          "current-page": _vm.currentPage,
                          "per-page": _vm.perPage,
                          busy: _vm.isBusy,
                          small: "",
                          selectable: "",
                          "select-mode": _vm.selectMode,
                          responsive: "sm"
                        },
                        on: {
                          filtered: _vm.onFiltered,
                          "row-selected": _vm.onRowSelected
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "cell(selected)",
                            fn: function(ref) {
                              var rowSelected = ref.rowSelected
                              return [
                                rowSelected
                                  ? [
                                      _c(
                                        "span",
                                        { attrs: { "aria-hidden": "true" } },
                                        [_vm._v("✓")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "sr-only" }, [
                                        _vm._v("Selected")
                                      ])
                                    ]
                                  : [
                                      _c(
                                        "span",
                                        { attrs: { "aria-hidden": "true" } },
                                        [_vm._v(" ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "sr-only" }, [
                                        _vm._v("Not selected")
                                      ])
                                    ]
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
                                    staticClass: "text-center text-danger my-2"
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Admin")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Material")
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

/***/ "./resources/js/modules/inventario/material/views/show.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/show.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=4dad37ce&scoped=true& */ "./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& */ "./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4dad37ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/material/views/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=style&index=0&id=4dad37ce&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_4dad37ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=4dad37ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/material/views/show.vue?vue&type=template&id=4dad37ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4dad37ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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