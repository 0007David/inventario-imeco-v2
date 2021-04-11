(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'create',
  created: function created() {
    this.getData(); //this.getData2();
  },
  data: function data() {
    return {
      materiales: [],
      categorias: [],
      formData: {
        fecha: '',
        categoria: ''
      },
      errors: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/planilla/create').then(function (response) {
        // console.log(response);
        var respuesta = response.data.data;
        _this.materiales = respuesta.materiales;
        _this.categorias = respuesta.categorias;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorAlmacen(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    getData2: function getData2() {
      var _this2 = this;

      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/planilla/create').then(function (response) {
        // console.log(response);
        var respuesta = response.data.data;
        _this2.categorias = respuesta.categorias;
      })["catch"](function (error) {
        // console.log(error);
        alert(error); // this.setErrorAlmacen(error);
      })["finally"](function () {// this.modalDestroyConfirmation = false;
        // console.log('finally request');
      });
    },
    guardar: function guardar() {
      var _this3 = this;

      if (this.validarFormulario()) {
        this.$swal.fire({
          title: 'Success',
          text: "Se ha creado la planilla exitosamente",
          icon: 'success',
          timer: 1000
        });
        _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].post('/planillas', this.formData).then(function (response) {
          // console.log(response.data);
          _this3.$router.push({
            name: 'planilla-index'
          });
        });
      }
    },
    validarFormulario: function validarFormulario() {
      return true;
    },
    encrypt: function encrypt(value) {
      return Object(_mixins_util__WEBPACK_IMPORTED_MODULE_1__["btoa"])(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*Estilo CSS*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Crear nueva planilla - detalle")
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
            _c("div", { staticClass: "container-fluid" }),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.guardar($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { htmlFor: "categoria" } }, [
                    _vm._v(
                      "\n                                Categoria \n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    { staticClass: "form-control", attrs: { id: "categoria" } },
                    _vm._l(_vm.categorias, function(categoria) {
                      return _c("option", { key: categoria.id }, [
                        _vm._v(_vm._s(categoria.nombre))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-bordered table-hover dataTable",
                      attrs: { role: "grid" }
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.materiales, function(material) {
                          return _c(
                            "tr",
                            { key: material.codigo, attrs: { role: "row" } },
                            [
                              _c("td", [_vm._v(" " + _vm._s(material.codigo))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(material.nombre) + " ")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(" " + _vm._s(material.id_unidad) + " ")
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
                                          "/planilla/" +
                                          _vm.encrypt(material.codigo) +
                                          "/editmaterial",
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
                              _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-success",
                                      attrs: {
                                        to:
                                          "/planilla/" +
                                          _vm.encrypt(material.codigo) +
                                          "/addmaterial",
                                        "data-toggle": "tooltip",
                                        "data-placement": "top",
                                        title: "Adicionar"
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-edit" })]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0" }, [_vm._v("Creando Planilla")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { attrs: { role: "row" } }, [
        _c("th", [_vm._v("Codigo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Editar dependientes")]),
        _vm._v(" "),
        _c("th", [_vm._v("Agregar")])
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

/***/ "./resources/js/modules/proyectos/planilla/views/detalle.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/detalle.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalle.vue?vue&type=template&id=6524b86f&scoped=true& */ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true&");
/* harmony import */ var _detalle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalle.vue?vue&type=script&lang=js& */ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& */ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detalle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6524b86f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proyectos/planilla/views/detalle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detalle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=style&index=0&id=6524b86f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_style_index_0_id_6524b86f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./detalle.vue?vue&type=template&id=6524b86f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/detalle.vue?vue&type=template&id=6524b86f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detalle_vue_vue_type_template_id_6524b86f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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