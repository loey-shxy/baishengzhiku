"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const checked = common_vendor.ref(false);
    const formData = common_vendor.reactive({
      phone: "",
      code: ""
    });
    const wechatLogin = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000000"
        }),
        c: common_assets._imports_0$4,
        d: common_vendor.o(($event) => formData.phone = $event),
        e: common_vendor.p({
          type: "text",
          placeholder: "请输入你的手机号",
          modelValue: formData.phone
        }),
        f: common_assets._imports_1$4,
        g: common_vendor.o(($event) => formData.code = $event),
        h: common_vendor.p({
          type: "text",
          placeholder: "请输入短信验证码",
          modelValue: formData.code
        }),
        i: !checked.value && !formData.code,
        j: common_vendor.o(wechatLogin),
        k: checked.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
