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
  __name: "search",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const keywords = common_vendor.ref("");
    const search = () => {
    };
    const histories = common_vendor.ref([
      "2024年",
      "第9期",
      "年刊",
      "月刊",
      "免费"
    ]);
    const commons = common_vendor.ref([
      "2024",
      "第11期",
      "8期"
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000000"
        }),
        c: common_assets._imports_0$1,
        d: common_vendor.o(($event) => keywords.value = $event),
        e: common_vendor.p({
          placeholder: "搜索文档",
          inputBorder: false,
          modelValue: keywords.value
        }),
        f: common_vendor.o(search),
        g: common_vendor.f(histories.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        h: common_vendor.f(commons.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
