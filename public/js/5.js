(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [5, 10, 15, 30, 50],
      filter: null,
      isBusy: false,
      seGuarda: false,
      selectMode: 'multi',
      selectedMateriales: [],
      formData: {
        codigo_compra: 'N0012',
        id_proveedor: '',
        fecha: '',
        montototal: 0,
        detalleNotaCompra: []
      },
      materialesStock: [],
      proveedores: [],
      fields: [// A virtual column that doesn't exist in items
      {
        key: 'selected',
        label: '☑',
        "class": 'text-center',
        thStyle: {
          width: '1%'
        }
      }, {
        key: 'nro_material',
        label: 'Codigo',
        "class": 'text-center',
        thStyle: {
          width: '2%'
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
        key: 'nombre',
        label: 'Nombre',
        "class": 'text-center',
        thStyle: {
          width: '20%'
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
        label: 'Codigo',
        "class": 'text-center',
        thStyle: {
          width: '2%'
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
        key: 'nombre',
        label: 'Nombre',
        "class": 'text-center',
        thStyle: {
          width: '20%'
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
        key: 'cantidad_min',
        label: 'Cantidad',
        "class": 'text-center',
        thStyle: {
          width: '4%'
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
        key: 'eliminar',
        label: ' ',
        "class": 'text-center',
        thStyle: {
          width: '1%'
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
    },
    proveedoresSelectOpcions: function proveedoresSelectOpcions() {
      var selectOptions = [{
        value: '',
        text: "Seleccione un Proveedor"
      }];
      this.proveedores.forEach(function (proveedor) {
        selectOptions.push({
          value: proveedor.id,
          text: proveedor.nombre
        });
      });
      return selectOptions;
    }
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.isBusy = true;
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/nota_compra/create').then(function (response) {
        var respuesta = response.data.data;
        _this.isBusy = false; // console.log(respuesta);

        _this.proveedores = respuesta.proveedores;
      })["catch"](function (error) {
        console.log(error); // alert(error);
        // this.setErrorUsuario(error);
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
      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/material', {
        params: params
      }).then(function (response) {
        var respuesta = response.data.data;
        _this2.isBusy = false; // console.log(respuesta);

        _this2.materialesStock = respuesta.materiales;
        _this2.totalRows = respuesta.total;
      })["catch"](function (error) {
        console.log(error); // alert(error);
        // this.setErrorUsuario(error);
      });
    },
    montoTotal: function montoTotal() {
      var _this3 = this;

      this.formData.montototal = 0;

      if (typeof this.selectedMateriales !== "undefined") {
        this.selectedMateriales.forEach(function (material) {
          if (_this3.isNumber(material.precio) && _this3.isNumber(material.cantidad_min)) {
            var precio = parseInt(material.precio);
            var cantidad = parseInt(material.cantidad_min);
            _this3.formData.montototal = parseInt(_this3.formData.montototal) + cantidad * precio;
          }
        });
      }

      return this.formData.montototal;
    },
    eliminarMaterial: function eliminarMaterial(index) {
      this.selectedMateriales.splice(index, 1);
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
    storeNotaCompra: function storeNotaCompra() {
      var _this4 = this;

      if (this.validarFormulario()) {
        this.cargarFormData();
        console.log(this.formData);
        this.$swal.fire({
          title: 'Success',
          text: "Se ha creado exitosamente",
          icon: 'success',
          timer: 1000
        });
        _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].post('/nota_compra', this.formData).then(function (response) {
          console.log(response.data);

          _this4.$router.push({
            name: 'nota-compra-index'
          });
        })["catch"](function (error) {
          console.log(error); // alert(error);
          // this.setErrorUsuario(error);
        });
      }
    },
    cargarFormData: function cargarFormData() {
      var _this5 = this;

      this.selectedMateriales.forEach(function (material) {
        _this5.formData.detalleNotaCompra.push({
          cod_material: material.codigo,
          precio: material.precio,
          cantidad: material.cantidad_min
        });
      });
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
    },
    isNumber: function isNumber(string) {
      return !isNaN(parseFloat(string)) && isFinite(string);
    }
  },
  watch: {
    selectedMateriales: function selectedMateriales(newValue, oldValue) {// console.log(newValue);
      // console.log(oldValue);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*Estilo CSS*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "form",
                {
                  staticClass: "card",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.storeNotaCompra($event)
                    }
                  }
                },
                [
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
                            "\n                                Agregar Detalle\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.seGuardaForm
                        ? _c(
                            "b-button",
                            { attrs: { type: "submit", variant: "success" } },
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
                          attrs: { to: { name: "nota-compra-index" } }
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
                        _c(
                          "div",
                          { staticClass: "form-group col-md-4" },
                          [
                            _c("b-row", [
                              _c("label", { attrs: { htmlFor: "codigo" } }, [
                                _vm._v(
                                  "\n                                        Codigo Nota Compra\n                                    "
                                )
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.codigo_compra,
                                    expression: "formData.codigo_compra"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "codigo",
                                  type: "text",
                                  readonly: ""
                                },
                                domProps: { value: _vm.formData.codigo_compra },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "codigo_compra",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group col-md-8" },
                          [
                            _c(
                              "label",
                              {
                                staticStyle: { display: "block" },
                                attrs: { htmlFor: "proveedor" }
                              },
                              [
                                _vm._v(
                                  "\n                                            Proveedor\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("b-form-select", {
                              staticClass: "col-md-10",
                              attrs: {
                                id: "proveedor",
                                required: "",
                                options: _vm.proveedoresSelectOpcions
                              },
                              model: {
                                value: _vm.formData.id_proveedor,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "id_proveedor", $$v)
                                },
                                expression: "formData.id_proveedor"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-primary col-md-1 ml-1",
                                attrs: {
                                  to: { name: "proveedor-create" },
                                  size: "xs"
                                }
                              },
                              [_c("i", { staticClass: "fa fa-users" })]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-row", [
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c("label", { attrs: { htmlFor: "fecha" } }, [
                            _vm._v(
                              "\n                                        Fecha\n                                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.formData.fecha,
                                expression: "formData.fecha"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "fecha", required: "", type: "date" },
                            domProps: { value: _vm.formData.fecha },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.formData,
                                  "fecha",
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
                          _c("h3", [_vm._v("Detalle nota de compra")])
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
                                "show-empty": "",
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
                                  key: "cell(precio)",
                                  fn: function(data) {
                                    return [
                                      _c("b-form-input", {
                                        nativeOn: {
                                          change: function($event) {
                                            return _vm.montoTotal($event)
                                          }
                                        },
                                        model: {
                                          value: data.item.precio,
                                          callback: function($$v) {
                                            _vm.$set(data.item, "precio", $$v)
                                          },
                                          expression: "data.item.precio"
                                        }
                                      })
                                    ]
                                  }
                                },
                                {
                                  key: "cell(cantidad_min)",
                                  fn: function(data) {
                                    return [
                                      _c("b-form-input", {
                                        nativeOn: {
                                          change: function($event) {
                                            return _vm.montoTotal($event)
                                          }
                                        },
                                        model: {
                                          value: data.item.cantidad_min,
                                          callback: function($$v) {
                                            _vm.$set(
                                              data.item,
                                              "cantidad_min",
                                              $$v
                                            )
                                          },
                                          expression: "data.item.cantidad_min"
                                        }
                                      })
                                    ]
                                  }
                                },
                                {
                                  key: "cell(eliminar)",
                                  fn: function(row) {
                                    return [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger",
                                          on: {
                                            click: function($event) {
                                              return _vm.eliminarMaterial(
                                                row.index
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
                                  key: "empty",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "text-center my-2" },
                                        [
                                          _c("strong", [
                                            _vm._v("Sin detalle...")
                                          ])
                                        ]
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
                        _vm.seGuardaForm
                          ? _c("div", { staticClass: "col-md-12" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "form-inline col-md-6 offset-6"
                                },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "m-2",
                                      attrs: { for: "monto" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Monto Total (Bs)\n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.montototal,
                                        expression: "formData.montototal"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: "monto",
                                      required: "",
                                      readonly: "",
                                      type: "text"
                                    },
                                    domProps: {
                                      value: _vm.formData.montototal
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "montototal",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    ],
                    1
                  )
                ]
              )
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
            title: "Lista Materiales"
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
                _c(
                  "div",
                  { staticClass: "col-sm-3" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mb-2",
                        attrs: { size: "sm" },
                        on: { click: _vm.clearSelected }
                      },
                      [_vm._v("DesSeleccionar Todo")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3 offset-sm-3 text-right" }, [
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
                      _c("b-table", {
                        ref: "selectableTableMaterial",
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
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h3", { staticClass: "m-0" }, [
              _vm._v(
                "\n                        Ingreso Nota Compra\n                    "
              )
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
                _vm._v("Nota Compra")
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

/***/ "./resources/js/modules/inventario/nota_compra/views/create.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/inventario/nota_compra/views/create.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=5492eca5&scoped=true& */ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& */ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5492eca5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/nota_compra/views/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=style&index=0&id=5492eca5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5492eca5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=5492eca5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/nota_compra/views/create.vue?vue&type=template&id=5492eca5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5492eca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

var axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/api'
});
/* harmony default export */ __webpack_exports__["default"] = (axiosClient);

/***/ })

}]);