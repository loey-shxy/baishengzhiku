"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/tabBar/home/home.js";
  "./pages/tabBar/collect/collect.js";
  "./pages/tabBar/personal/personal.js";
  "./pages/baishengdongtai/baishengdongtai.js";
  "./pages/baishengfuwu/baishengfuwu.js";
  "./pages/login/login.js";
  "./pages/annualssubcribe/annualssubcribe.js";
  "./pages/search/search.js";
  "./pages/dongtaixiangqing/dongtaixiangqing.js";
  "./pages/subscribedetail/subscribedetail.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
