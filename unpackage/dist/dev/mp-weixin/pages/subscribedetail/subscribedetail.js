"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "subscribedetail",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const isCollected = common_vendor.ref(false);
    const collect = () => {
      isCollected.value = !isCollected.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000"
        }),
        c: common_assets._imports_0$3,
        d: isCollected.value
      }, isCollected.value ? {
        e: common_vendor.p({
          type: "star-filled",
          color: "#FFB444",
          size: "20"
        })
      } : {
        f: common_vendor.p({
          type: "star-filled",
          color: "#666",
          size: "20"
        })
      }, {
        g: common_vendor.t(isCollected.value ? "已收藏" : "未收藏"),
        h: common_vendor.o(collect),
        i: common_assets._imports_1
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-817160a3"]]);
wx.createPage(MiniProgramPage);
