"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "baishengfuwu",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    const currentTab = common_vendor.ref("neican");
    const tabs = common_vendor.ref([
      { key: "neican", title: "内参订阅" },
      { key: "juece", title: "决策咨询" }
    ]);
    const handleTabChange = (key) => {
      currentTab.value = key;
    };
    const list = common_vendor.ref([]);
    const getList = async () => {
      list.value = Array(10).fill({}).map((_, index) => ({
        id: index + 1,
        title: "《百生决策参考》2023年刊 共12期",
        content: "2023年1月-2023年12月，共12期。订阅后可免费邮寄订阅后可免费邮寄"
      }));
    };
    getList();
    const jueceList = common_vendor.ref([
      {
        title: "智库内参",
        icon: new URL("../../static/juece/zhiku.png", typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("pages/baishengfuwu/baishengfuwu.js", document.baseURI).href).href
      },
      {
        title: "规划咨询",
        icon: new URL("../../static/juece/guihua.png", typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("pages/baishengfuwu/baishengfuwu.js", document.baseURI).href).href
      },
      {
        title: "课题研究",
        icon: new URL("../../static/juece/keti.png", typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("pages/baishengfuwu/baishengfuwu.js", document.baseURI).href).href
      },
      {
        title: "数据服务",
        icon: new URL("../../static/juece/shuju.png", typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("pages/baishengfuwu/baishengfuwu.js", document.baseURI).href).href
      },
      {
        title: "普查调查",
        icon: new URL("../../static/juece/pucha.png", typeof document === "undefined" ? require("url").pathToFileURL(__filename).href : _documentCurrentScript && _documentCurrentScript.src || new URL("pages/baishengfuwu/baishengfuwu.js", document.baseURI).href).href
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000000"
        }),
        c: common_vendor.f(tabs.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentTab.value === item.key && "is-active"),
            c: item.key,
            d: common_vendor.o(($event) => handleTabChange(item.key), item.key)
          };
        }),
        d: common_assets._imports_0$1,
        e: currentTab.value === "neican"
      }, currentTab.value === "neican" ? {
        f: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.content),
            c: item.id
          };
        }),
        g: common_assets._imports_1$2
      } : {}, {
        h: currentTab.value === "juece"
      }, currentTab.value === "juece" ? {
        i: common_vendor.f(jueceList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.title
          };
        }),
        j: common_assets._imports_2$2
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3500858b"]]);
wx.createPage(MiniProgramPage);
