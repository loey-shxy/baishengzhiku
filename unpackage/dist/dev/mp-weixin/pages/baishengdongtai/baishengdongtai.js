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
  __name: "baishengdongtai",
  setup(__props) {
    const back = () => {
      common_vendor.index.navigateBack();
    };
    common_vendor.ref("");
    const currentTab = common_vendor.ref("news");
    const tabs = common_vendor.ref([
      { key: "news", title: "新闻动态" },
      { key: "report", title: "专题报告" }
    ]);
    const handleTabChange = (key) => {
      currentTab.value = key;
    };
    const list = common_vendor.ref([]);
    const getList = async () => {
      list.value = Array(10).fill({}).map((_, index) => ({
        id: index + 1,
        title: "中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见",
        address: "四川",
        createTime: "2024-10-26 14:30",
        isNew: index <= 3
      }));
    };
    getList();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000000"
        }),
        c: common_assets._imports_0$1,
        d: common_vendor.o(_ctx.toSearch),
        e: common_vendor.p({
          inputBorder: false
        }),
        f: common_vendor.f(tabs.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab.title),
            b: currentTab.value === tab.key ? 1 : "",
            c: tab.key,
            d: common_vendor.o(($event) => handleTabChange(tab.key), tab.key)
          };
        }),
        g: currentTab.value === "news"
      }, currentTab.value === "news" ? {
        h: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.isNew
          }, item.isNew ? {} : {}, {
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.address),
            d: common_vendor.t(item.createTime),
            e: item.id
          });
        })
      } : {}, {
        i: currentTab.value === "report"
      }, currentTab.value === "report" ? {
        j: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.address),
            c: common_vendor.t(item.createTime),
            d: item.id
          };
        }),
        k: common_assets._imports_1$1
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-04db62ae"]]);
wx.createPage(MiniProgramPage);
