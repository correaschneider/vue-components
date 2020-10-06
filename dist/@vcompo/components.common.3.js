((typeof self !== 'undefined' ? self : this)["webpackJsonp_vcompo_components"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_vcompo_components"] || []).push([[3],{

/***/ "0c1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02805dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e8f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02805dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02805dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02805dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0e8f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f7d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d92f5e4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VCompoButton/index.vue?vue&type=template&id=02805dc6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"button",class:("button__" + _vm.position),style:(_vm.buttonStyles),attrs:{"type":"button"}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VCompoButton/index.vue?vue&type=template&id=02805dc6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VCompoButton/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
var defaultStyles = {
  left: 0,
  right: 0
};
/* harmony default export */ var VCompoButtonvue_type_script_lang_js_ = ({
  props: {
    position: {
      type: String,
      default: 'top',
      validator: function validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1;
      }
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      buttonStyles: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, defaultStyles), this.styles)
    };
  }
});
// CONCATENATED MODULE: ./src/VCompoButton/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VCompoButtonvue_type_script_lang_js_ = (VCompoButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VCompoButton/index.vue?vue&type=style&index=0&id=02805dc6&scoped=true&lang=scss&
var VCompoButtonvue_type_style_index_0_id_02805dc6_scoped_true_lang_scss_ = __webpack_require__("0c1d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/VCompoButton/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_VCompoButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "02805dc6",
  null
  
)

/* harmony default export */ var VCompoButton = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=components.common.3.js.map