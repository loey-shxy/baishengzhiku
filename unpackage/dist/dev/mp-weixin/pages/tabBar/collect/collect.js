"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "collect",
  setup(__props) {
    const STATUS = {
      0: { value: "free", label: "免费" },
      1: { value: "not-subscribed", label: "未订阅" },
      2: { value: "subscribed", label: "已订阅" }
    };
    const list = common_vendor.ref([]);
    const getList = async () => {
      list.value = Array(10).fill({}).map((_, index) => ({
        id: index + 1,
        title: `2024年第${index + 1}期`,
        content: "围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新",
        createTime: "2024-10-26 15:30",
        address: "四川",
        status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
      }));
    };
    getList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.status !== void 0
          }, item.status !== void 0 ? {
            b: common_vendor.t(STATUS[item.status].label),
            c: common_vendor.n(`type_${STATUS[item.status].value}`)
          } : {}, {
            d: common_vendor.t(item.title),
            e: item.content
          }, item.content ? {
            f: common_vendor.t(item.content)
          } : {}, {
            g: common_vendor.t(item.address),
            h: common_vendor.t(item.createTime),
            i: item.id,
            j: common_vendor.o(($event) => _ctx.toDetail(item), item.id)
          });
        }),
        b: common_assets._imports_1$2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cc20d448"]]);
wx.createPage(MiniProgramPage);
