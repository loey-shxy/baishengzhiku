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
    const currentRecommend = common_vendor.ref("month");
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
        content: "2023年1月-2023年12月，共12期。订阅后可免费邮寄订阅后可免费邮寄",
        status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
      }));
    };
    getList();
    const STATUS = {
      0: { value: "free", label: "免费" },
      1: { value: "not-subscribed", label: "未订阅" },
      2: { value: "subscribed", label: "已订阅" }
    };
    const monthList = common_vendor.ref([]);
    const getMonthList = async () => {
      monthList.value = Array(10).fill({}).map((_, index) => ({
        id: index + 1,
        title: `2024年第${index + 1}期`,
        content: "围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新",
        createTime: "2024-10-26 15:30",
        address: "四川",
        status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
      }));
    };
    getMonthList();
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
    const annuals = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/annualssubcribe/annualssubcribe"
      });
    };
    const subscribeDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/subscribedetail/subscribedetail"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.p({
          type: "left",
          size: "20",
          color: "#000"
        }),
        c: common_vendor.f(tabs.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(currentTab.value === item.key && "is-active"),
            c: item.key,
            d: common_vendor.o(($event) => handleTabChange(item.key), item.key)
          };
        }),
        d: currentTab.value === "neican"
      }, currentTab.value === "neican" ? common_vendor.e({
        e: currentRecommend.value === "month"
      }, currentRecommend.value === "month" ? {
        f: common_vendor.o(($event) => currentRecommend.value = "year")
      } : {}, {
        g: currentRecommend.value === "year"
      }, currentRecommend.value === "year" ? {
        h: common_vendor.o(($event) => currentRecommend.value = "month")
      } : {}, {
        i: common_vendor.p({
          type: "search",
          color: "#C53B2E",
          size: "20"
        })
      }) : {}, {
        j: currentTab.value === "neican" && currentRecommend.value === "month"
      }, currentTab.value === "neican" && currentRecommend.value === "month" ? {
        k: common_vendor.f(list.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.status !== void 0
          }, item.status !== void 0 ? {
            b: common_vendor.t(STATUS[item.status].label),
            c: common_vendor.n(`type_${STATUS[item.status].value}`)
          } : {}, {
            d: common_vendor.t(item.title),
            e: common_vendor.t(item.content),
            f: item.id,
            g: common_vendor.o(($event) => subscribeDetail(), item.id)
          });
        }),
        l: common_assets._imports_0$3
      } : {}, {
        m: currentTab.value === "neican" && currentRecommend.value === "year"
      }, currentTab.value === "neican" && currentRecommend.value === "year" ? {
        n: common_vendor.f(monthList.value, (item, k0, i0) => {
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
            j: common_vendor.o(($event) => annuals(), item.id)
          });
        }),
        o: common_assets._imports_1$2
      } : {}, {
        p: currentTab.value === "juece"
      }, currentTab.value === "juece" ? {
        q: common_vendor.f(jueceList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.title
          };
        }),
        r: common_assets._imports_2$2
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3500858b"]]);
wx.createPage(MiniProgramPage);
