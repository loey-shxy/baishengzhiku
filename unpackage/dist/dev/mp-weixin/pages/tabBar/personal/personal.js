"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "right",
      size: "16",
      color: "#9e9e9e"
    }),
    b: common_assets._imports_0$3,
    c: common_assets._imports_1$1,
    d: common_assets._imports_2$1,
    e: common_assets._imports_3$1,
    f: common_assets._imports_4$1,
    g: common_assets._imports_2$2,
    h: common_assets._imports_6$1,
    i: common_vendor.p({
      type: "right",
      size: "12",
      color: "#9e9e9e"
    }),
    j: common_assets._imports_7,
    k: common_vendor.p({
      type: "right",
      size: "12",
      color: "#9e9e9e"
    }),
    l: common_assets._imports_8,
    m: common_vendor.p({
      type: "right",
      size: "12",
      color: "#9e9e9e"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-baa3a296"]]);
wx.createPage(MiniProgramPage);
