"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue3_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-select2-component */ "./node_modules/vue3-select2-component/src/Select2.vue");
/* harmony import */ var _Mixins_currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Mixins/currency */ "./resources/js/Mixins/currency.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Currency Convertor",
  components: {
    Select2: vue3_select2_component__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_Mixins_currency__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      currencies_selected: []
    };
  },
  setup: function setup() {
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      currencies_selected: ''
    });
    var error = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');

    function submit() {
      //also check that a currency is selected before submitting
      var MAX_CURRENCIES = 5;
      this.error = '';

      if (form.currencies_selected.length > MAX_CURRENCIES) {
        this.error = "Only a maximum of 5 currencies can be selected";
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post('/convert', form);
      }
    }

    return {
      form: form,
      submit: submit,
      error: error
    };
  },
  methods: {
    getCurrencyName: function getCurrencyName(symbol) {
      var currency = this.currencies.find(function (_ref) {
        var id = _ref.id;
        return id === symbol;
      });
      return currency.text;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Mixins_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Mixins/currency */ "./resources/js/Mixins/currency.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue3_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-select2-component */ "./node_modules/vue3-select2-component/src/Select2.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Report",
  components: {
    Select2: vue3_select2_component__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_Mixins_currency__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      currencies_selected: [],
      timeframe: ''
    };
  },
  setup: function setup() {
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_3__.reactive)({
      currencies_selected: ''
    });
    var error = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)('');

    function submit() {
      //also check that a currency is selected before submitting
      this.error = '';

      if (form.currencies_selected.length === 0) {
        this.error = "A currency must be selected";
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post('/report/store/' + (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_4__.usePage)().props.value.auth.user.id, form);
      }
    }

    return {
      form: form,
      submit: submit,
      error: error
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CurrencyConvertor_Convertor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrencyConvertor/Convertor */ "./resources/js/Pages/CurrencyConvertor/Convertor.vue");
/* harmony import */ var _CurrencyConvertor_Report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyConvertor/Report */ "./resources/js/Pages/CurrencyConvertor/Report.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  components: {
    Convertor: _CurrencyConvertor_Convertor__WEBPACK_IMPORTED_MODULE_0__["default"],
    Report: _CurrencyConvertor_Report__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-3xl"
}, "Currency Convertor", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "mt-10"
};
var _hoisted_3 = {
  "class": "border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Currencies ", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, " Select up to 5 currencies to display their price against the US Dollar ", -1
/* HOISTED */
);

var _hoisted_6 = ["textContent"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5",
  type: "submit"
}, " Display Currency Conversions ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"mt-10\"><label class=\"block mb-2 uppercase font-bold text-xs text-gray-700\"> Display of currencies </label><div class=\"flex flex-col\"><div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\"><div class=\"py-2 inline-block min-w-full sm:px-6 lg:px-8\"><div class=\"overflow-hidden\"><table class=\"min-w-full\"><thead class=\"border-b\"><tr><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Currency Code </th><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Currency Name </th><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Price </th></tr></thead><tbody><!--                            &lt;tr class=&quot;border-b&quot; v-for=&quot;(price, symbol) in $page.props.convert.rates&quot;&gt;--><tr class=\"border-b\"><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\"><!--                                    {{ symbol }}-->AUD </td><!--                                &lt;td class=&quot;text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap&quot; v-text=&quot;getCurrencyName(symbol)&quot; /&gt;--><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\">Australian Dollar</td><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\"><!--                                    {{ price}}-->0.7254 </td></tr></tbody></table></div></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    id: "currency-convertor"
  }, [_hoisted_4, _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $setup.form.currencies_selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.currencies_selected = $event;
    }),
    options: _ctx.currencies,
    settings: {
      placeholder: 'Select up to five currencies',
      width: '100%',
      multiple: true
    }
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), this.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.error),
    "class": "text-red-500 text-sm mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_7], 32
  /* HYDRATE_EVENTS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("    <div class=\"mt-10\" v-if=\"$page.props.convert !== undefined && $page.props.convert.success\">"), _hoisted_8], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Currency Convertor - Report", -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-3xl"
}, "Report", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mt-10"
};
var _hoisted_4 = {
  "class": "border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg"
};
var _hoisted_5 = {
  "class": "mb-6"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-4"
}, " Select a currency to generate a report ", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Currency ", -1
/* HOISTED */
);

var _hoisted_8 = ["textContent"];
var _hoisted_9 = {
  "class": "mb-6"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block mb-2 uppercase font-bold text-xs text-gray-700"
}, " Time Frame ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "12"
}, "Range: One Year, Interval: Monthly", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "6"
}, "Range: Six Months, Interval: Weekly", -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "1"
}, "Range: One Month, Interval: Daily", -1
/* HOISTED */
);

var _hoisted_14 = [_hoisted_11, _hoisted_12, _hoisted_13];
var _hoisted_15 = ["textContent"];

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5",
  type: "submit"
}, " Generate Report ", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div><!--    &lt;div class=&quot;mt-10&quot; v-if=&quot;$page.props.convert !== undefined &amp;&amp; $page.props.convert.success&quot;&gt;--><div class=\"mt-10\"><label class=\"block mb-2 uppercase font-bold text-xs text-gray-700\"> Display of currencies </label><div class=\"flex flex-col\"><div class=\"overflow-x-auto sm:-mx-6 lg:-mx-8\"><div class=\"py-2 inline-block min-w-full sm:px-6 lg:px-8\"><div class=\"overflow-hidden\"><table class=\"min-w-full\"><thead class=\"border-b\"><tr><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Currency Code </th><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Currency Name </th><th scope=\"col\" class=\"text-sm font-medium text-gray-900 px-6 py-4 text-left\"> Status </th><th></th></tr></thead><tbody><!--                            &lt;tr class=&quot;border-b&quot; v-for=&quot;(price, symbol) in $page.props.convert.rates&quot;&gt;--><tr class=\"border-b\"><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\"><!--                                    {{ symbol }}-->AUD </td><!--                                &lt;td class=&quot;text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap&quot; v-text=&quot;getCurrencyName(symbol)&quot; /&gt;--><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\">Australian Dollar</td><td class=\"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap\"><!--                                    {{ price}}-->Pending </td><td><a href=\"/report/show/3\">view</a></td></tr></tbody></table></div></div></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    id: "currency-convertor"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
    modelValue: $setup.form.currencies_selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.currencies_selected = $event;
    }),
    options: _ctx.currencies,
    settings: {
      placeholder: 'Select currency',
      width: '100%'
    }
  }, null, 8
  /* PROPS */
  , ["modelValue", "options"]), this.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.error),
    "class": "text-red-500 text-sm mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    name: "timeframe",
    id: "timeframe",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.timeframe = $event;
    }),
    "class": "form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  }, _hoisted_14, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.timeframe]]), this.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.error),
    "class": "text-red-500 text-sm mt-1"
  }, null, 8
  /* PROPS */
  , _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_16], 32
  /* HYDRATE_EVENTS */
  )])])]), _hoisted_17], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Currency Convertor", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "grid grid-cols-3 inline-gri gap-4"
};
var _hoisted_3 = {
  "class": "col-span-2 px-4"
};
var _hoisted_4 = {
  "class": "bg-gray-200 px-4 rounded-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Convertor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Convertor");

  var _component_Report = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Report");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Convertor)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Report)])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Mixins/currency.js":
/*!*****************************************!*\
  !*** ./resources/js/Mixins/currency.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currencies: [{
        id: 'AUD',
        text: 'Australian Dollar'
      }, {
        id: 'GBP',
        text: 'British Pound'
      }, {
        id: 'CAD',
        text: 'Canadian Dollar'
      }, {
        id: 'EUR',
        text: 'Euro'
      }, {
        id: 'JPY',
        text: 'Japanese Yen'
      }, {
        id: 'NZD',
        text: 'New Zealand Dollar'
      }, {
        id: 'CHF',
        text: 'Swiss Franc'
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Convertor.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Convertor.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Convertor_vue_vue_type_template_id_6a43ffd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Convertor.vue?vue&type=template&id=6a43ffd3 */ "./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3");
/* harmony import */ var _Convertor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Convertor.vue?vue&type=script&lang=js */ "./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Convertor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Convertor_vue_vue_type_template_id_6a43ffd3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/CurrencyConvertor/Convertor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Report.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Report.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Report_vue_vue_type_template_id_31369af2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=31369af2 */ "./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2");
/* harmony import */ var _Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js */ "./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Report_vue_vue_type_template_id_31369af2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/CurrencyConvertor/Report.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var _var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_var_www_html_currency_convertor_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Convertor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Convertor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Convertor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Convertor_vue_vue_type_template_id_6a43ffd3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Convertor_vue_vue_type_template_id_6a43ffd3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Convertor.vue?vue&type=template&id=6a43ffd3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Convertor.vue?vue&type=template&id=6a43ffd3");


/***/ }),

/***/ "./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Report_vue_vue_type_template_id_31369af2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Report_vue_vue_type_template_id_31369af2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Report.vue?vue&type=template&id=31369af2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/CurrencyConvertor/Report.vue?vue&type=template&id=31369af2");


/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_097ba13b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=097ba13b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b");


/***/ })

}]);