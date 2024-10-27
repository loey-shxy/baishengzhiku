"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const toSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const list = common_vendor.ref([]);
    const getList = async () => {
      list.value = Array(10).fill({}).map((_, index) => ({
        id: index + 1,
        title: "中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见",
        address: "四川",
        createTime: "2024-10-26 14:30"
      }));
    };
    common_vendor.onMounted(() => {
      getList();
    });
    const toDynamic = () => {
      common_vendor.index.navigateTo({
        url: "/pages/baishengdongtai/baishengdongtai"
      });
    };
    const toService = () => {
      common_vendor.index.navigateTo({
        url: "/pages/baishengfuwu/baishengfuwu"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_0$1,
        c: common_vendor.o(toSearch),
        d: common_vendor.p({
          placeholder: "搜索文档",
          inputBorder: false
        }),
        e: common_assets._imports_2,
        f: common_assets._imports_2,
        g: common_assets._imports_2,
        h: common_assets._imports_3,
        i: common_vendor.o(toDynamic),
        j: common_assets._imports_4,
        k: common_vendor.o(toService),
        l: common_assets._imports_1,
        m: common_assets._imports_6,
        n: common_vendor.o(toDynamic),
        o: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.address),
            c: common_vendor.t(item.createTime),
            d: item.id,
            e: common_vendor.o(($event) => _ctx.toDetail(item), item.id)
          };
        }),
        p: common_assets._imports_1$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15dac74a"]]);
wx.createPage(MiniProgramPage);
