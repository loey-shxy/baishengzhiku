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
    const keywords = common_vendor.ref("");
    const search = () => {
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
    const more = () => {
    };
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
        c: common_vendor.o(search),
        d: common_vendor.o(($event) => keywords.value = $event),
        e: common_vendor.p({
          trim: "all",
          inputBorder: false,
          placeholder: "搜索文档",
          modelValue: keywords.value
        }),
        f: common_assets._imports_2,
        g: common_assets._imports_2,
        h: common_assets._imports_2,
        i: common_assets._imports_3,
        j: common_vendor.o(toDynamic),
        k: common_assets._imports_4,
        l: common_vendor.o(toService),
        m: common_assets._imports_5,
        n: common_assets._imports_6,
        o: common_vendor.o(more),
        p: common_vendor.f(list.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.address),
            c: common_vendor.t(item.createTime),
            d: item.id,
            e: common_vendor.o(($event) => _ctx.toDetail(item), item.id)
          };
        }),
        q: common_assets._imports_1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-15dac74a"]]);
wx.createPage(MiniProgramPage);
