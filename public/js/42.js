(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ver_estado',
  created: function created() {
    this.getData();
  },
  data: function data() {
    return {
      codigo: '0',
      ///planilla_numero
      codigo2: '0',
      //codigo (primary key)
      percent: 10,
      estado: 'no estado',
      fecha: '',
      errors: []
    };
  },

  /*mounted(){
    console.log('mounted component1'); console.log(this.codigo2);
      window.Echo.channel('imeco-realtime.'+this.codigo2).listen('OrderStatusChangedEvent',(planilla)=>
     {
       console.log('primera entrada');
      });
  },*/
  methods: {
    getData: function getData() {
      var _this = this;

      _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].get('/planilla/' + this.desencrypt(this.$route.params.id) + '/edit').then(function (response) {
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
      /*this.formData.codigo = data.planillas.codigo;
      this.formData.fecha = data.planillas.fecha;
      this.formData.estado = data.planillas.estado;*/
      this.codigo = data.planillas.planilla_numero;
      this.codigo2 = data.planillas.codigo;
      this.estado = data.planillas.estado;
      this.cargarPorcen(this.estado);
      this.fecha = data.planillas.fecha;
    },
    cargarPorcen: function cargarPorcen(st1) {
      switch (st1) {
        case "Espera":
          this.percent = 5;
          break;

        case "Verificado":
          this.percent = 33;
          break;

        case "Compra":
          this.percent = 33;
          break;

        case "Enviado":
          this.percent = 66;
          break;

        case "Entregado":
          this.percent = 100;
          break;
      }
    },
    modificar: function modificar() {
      var _this2 = this;

      if (this.validarFormulario()) {
        // console.log(this.formData);
        //this.formData.codigo =  this.desencrypt(this.formData.codigo);
        this.$swal.fire({
          title: 'Success',
          text: "Se ha modificado la planilla exitosamente",
          icon: 'success',
          timer: 1000
        });
        _utils_axiosClient__WEBPACK_IMPORTED_MODULE_0__["default"].put('/planilla/' + this.desencrypt(this.$route.params.id), this.formData).then(function (response) {
          // console.log(response.data);
          _this2.$router.push({
            name: 'planilla-index'
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
      return Object(_mixins_util__WEBPACK_IMPORTED_MODULE_1__["atob"])(value);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-header" }, [_vm._v("Datos planilla")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
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
              _c("order-progress", {
                attrs: {
                  id: _vm.codigo2,
                  status: _vm.estado,
                  porcen: _vm.percent
                }
              }),
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
                    _c("label", { attrs: { htmlFor: "codigo" } }, [
                      _vm._v(
                        "\n                                Codigo:\n                            "
                      )
                    ]),
                    _vm._v(
                      "\n                            " +
                        _vm._s(this.codigo) +
                        "\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { htmlFor: "fecha" } }, [
                      _vm._v(
                        "\n                                Fecha:\n                            "
                      )
                    ]),
                    _vm._v(
                      " \n                            " +
                        _vm._s(this.fecha) +
                        "\n                        "
                    )
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
                          attrs: { to: { name: "planilla-index" } }
                        },
                        [
                          _vm._v(
                            "\n                                Volver\n                            "
                          )
                        ]
                      ),
                      _vm._v(
                        "\n                               \n                        "
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/modules/proyectos/planilla/views/ver_estado.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/ver_estado.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver_estado.vue?vue&type=template&id=9530c98c& */ "./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c&");
/* harmony import */ var _ver_estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver_estado.vue?vue&type=script&lang=js& */ "./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ver_estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/proyectos/planilla/views/ver_estado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ver_estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ver_estado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ver_estado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ver_estado.vue?vue&type=template&id=9530c98c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/proyectos/planilla/views/ver_estado.vue?vue&type=template&id=9530c98c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ver_estado_vue_vue_type_template_id_9530c98c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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