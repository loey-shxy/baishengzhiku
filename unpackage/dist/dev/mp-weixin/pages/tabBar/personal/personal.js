"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "personal",
  setup(__props) {
    var _a;
    const userInfo = common_vendor.ref(common_vendor.index.getStorageSync("userInfo"));
    const isLogin = common_vendor.ref(!!((_a = userInfo.value) == null ? void 0 : _a.id));
    const toLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLogin.value
      }, isLogin.value ? {} : {
        b: common_vendor.o(toLogin)
      }, {
        c: common_vendor.p({
          type: "right",
          size: "16",
          color: "#9e9e9e"
        }),
        d: common_assets._imports_0$2,
        e: common_assets._imports_1$3,
        f: common_assets._imports_2$1,
        g: common_assets._imports_3$1,
        h: common_assets._imports_4$1,
        i: common_assets._imports_2$2,
        j: common_assets._imports_6$1,
        k: common_vendor.p({
          type: "right",
          size: "12",
          color: "#9e9e9e"
        }),
        l: common_assets._imports_7,
        m: common_vendor.p({
          type: "right",
          size: "12",
          color: "#9e9e9e"
        }),
        n: common_assets._imports_8,
        o: common_vendor.p({
          type: "right",
          size: "12",
          color: "#9e9e9e"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-baa3a296"]]);
wx.createPage(MiniProgramPage);
