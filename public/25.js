(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      formData: {
        id: '',
        nombre: '',
        ubicacion: ''
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axiosClient.get('/almacen/' + this.desencrypt(this.$route.params.id) + '/edit').then(function (response) {
        // console.log(response);
        var respuesta = response.data.data;

        _this.cargarData(respuesta);
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorUsuario(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    cargarData: function cargarData(data) {
      this.formData.id = this.encrypt(data.almacen.id);
      this.formData.nombre = data.almacen.nombre;
      this.formData.ubicacion = data.almacen.ubicacion;
    },
    modificar: function modificar() {
      var _this2 = this;

      if (this.validarFormulario()) {
        // console.log(this.formData);
        this.formData.id = this.desencrypt(this.formData.id);
        this.$swal.fire({
          title: 'Success',
          text: "Se ha modificado el almacen exitosamente",
          icon: 'success',
          timer: 1000
        });
        axiosClient.put('/almacen/' + this.desencrypt(this.$route.params.id), this.formData).then(function (response) {
          // console.log(response.data);
          _this2.$router.push({
            name: 'almacen-index'
          });
        });
      }
    },
    validarFormulario: function validarFormulario() {
      return true;
    },
    encrypt: function encrypt(value) {
      return btoa(value);
    },
    desencrypt: function desencrypt(value) {
      return atob(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content-wrapper py-2" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-6 offset-1" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Modificar almacen")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.errors.length
              ? _c("div", { staticClass: "alert alert-danger" }, [
                  _c("b", [_vm._v("Terdapat kesalahan dalam input data:")]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    _vm._l(_vm.errors, function(error) {
                      return _c("li", { key: error }, [_vm._v(_vm._s(error))])
                    }),
                    0
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.modificar($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { htmlFor: "nombre" } }, [
                    _vm._v(
                      "\n                                Nombre\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.nombre,
                        expression: "formData.nombre"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "nombre", required: "", type: "text" },
                    domProps: { value: _vm.formData.nombre },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "nombre", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { htmlFor: "ubicacion" } }, [
                    _vm._v(
                      "\n                                Ubicacion\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.formData.ubicacion,
                        expression: "formData.ubicacion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { required: "", id: "ubicacion", type: "text" },
                    domProps: { value: _vm.formData.ubicacion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.formData, "ubicacion", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { to: { name: "almacen-index" } }
                      },
                      [
                        _vm._v(
                          "\n                                Cancelar\n                            "
                        )
                      ]
                    ),
                    _vm._v(
                      "\n                               \n                            "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                Modificar\n                            "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/update.vue":
/*!******************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/update.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=0779d898& */ "./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventario/almacen/views/update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=template&id=0779d898& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventario/almacen/views/update.vue?vue&type=template&id=0779d898&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_0779d898___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);