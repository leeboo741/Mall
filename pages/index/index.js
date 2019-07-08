 //index.js

/**
 * ******** 首页 ********
 * =============================================================================================
 * 
 * ================================================================================================
 */

const app = getApp()

Page({
  data: {
    goodsTypeList:[
      {
        name: "热门", // 类型名称
        type: 0, // 类型id
      },
      {
        name: "慢性病",
        type: 1,
      },
      {
        name: "心脑血管",
        type: 2,
      },
      {
        name: "食品/保健品",
        type: 3,
      },
    ], // 商品分类列表
    bannerList:[
      {
        bannerImageUrl: "http://huji820.oicp.net:25875/349325f9d43aeabee95f17fc18ebe0f03493/349325f9d43aeabee95f17fc18ebe0f0.jpg", // 图片地址
        bannerTargetUrl: "http://huji820.oicp.net:25875/fd1ca163-c267-4e66-a059-669523202cf0.html", // 内容地址
      },
      {
        bannerImageUrl: "http://huji820.oicp.net:25875/4ebd322f86c1893b56e23c241a7f2c824ebd/4ebd322f86c1893b56e23c241a7f2c82.jpg",
        bannerTargetUrl: "http://huji820.oicp.net:25875/3375f542-11fe-44d3-8900-0d1a94cc6f62.html",
      },
      {
        bannerImageUrl: "http://huji820.oicp.net:25875/24955c9a7e970b811b5bf8535dcbcd1e2495/24955c9a7e970b811b5bf8535dcbcd1e.jpg",
        bannerTargetUrl: "http://huji820.oicp.net:25875/ab98c06e-dd20-4965-90e2-5c5df7046413.html",
      },
      {
        bannerImageUrl: "http://huji820.oicp.net:25875/828f7237aac6d5c3ab65ad738cb8f31a828f/828f7237aac6d5c3ab65ad738cb8f31a.jpg",
        bannerTargetUrl: "http://huji820.oicp.net:25875/4dbf6753-ea06-483c-a27a-489091dbe070.html",
      },
    ], // banner数据列表
    actionList:[
      {
        name: "药秒杀", // 操作 名称
        target: "../seckill/seckill", // 操作 目标页面地址
        id: 0, // 操作id
      },
      {
        name: "药开团", // 操作 名称
        target: "../groupon/groupon", // 操作 目标页面地址
        id: 1, // 操作id
      },
      {
        name: "药大牌", // 操作 名称
        target: "../brand/brand", // 操作 目标页面地址
        id: 2, // 操作id
      },
      {
        name: "药福利", // 操作 名称
        target: "../preferential/preferential", // 操作 目标页面地址
        id: 3, // 操作id
      },
      {
        name: "签到", // 操作 名称
        target: null, // 操作 目标页面地址
        id: 4, // 操作id
      },
    ], // 操作 列表
  },

  /** =================== 页面生命周期 Start==================== */

  onLoad: function () {
    
  },

  /** =================== 页面生命周期 End==================== */

  /** =================== 页面事件 Start==================== */

  /**
   * 点击商品分类
   */
  tapGoodsType: function (e) {
    console.log("点击商品分类: \n" + e.currentTarget.dataset.type);
  },

  /**
   * 点击Banner
   */
  tapBanner: function (e) {
    console.log("点击Banner: \n" + e.currentTarget.dataset.targeturl);
  },

  /**
   * 点击操作按钮
   */
  tapAction: function (e) {
    console.log("点击操作: \n" + e.currentTarget.dataset.actionid);
  },

  /** =================== 页面事件 End==================== */

})
