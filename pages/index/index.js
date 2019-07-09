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
    newCustomerGoodsList:[
      {
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563258088&di=d99e7e4a0de20063a765e901bdbb22d5&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.huatuoyf.com%2Fproduct%2F2012%2F09%2F08%2F201209081504162.jpg", // 图片地址
        name: "三九感冒大礼包", // 名称
        price: 9.9, // 价格
        id: 0, // 商品 Id
      },
      {
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663416115&di=f283a4aeeee2ce1e969343f61f43fd54&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fmobilecms%2Fs750x750_jfs%2Ft14011%2F5%2F1388571919%2F429104%2F399fbd72%2F5a1fd3a7Nd74b9d81.jpg%2521q80.jpg", // 图片地址
        name: "哈药蓝瓶大礼包", // 名称
        price: 39, // 价格
        id: 1, // 商品 Id
      },
      {
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663479241&di=73911abb3307641eee7d08320a1cfea5&imgtype=0&src=http%3A%2F%2Fp1.maiyaole.com%2Fimg%2F976%2F976435%2Forg_org.jpg%3Fv%3D1", // 图片地址
        name: "计生大礼包", // 名称
        price: 19.9, // 价格
        id: 2, // 商品 Id
      },
    ], // 新人专享商品列表 
    goodsList:[
      {
        id: 0, // 商品id
        name: "三九感冒灵", // 商品名称
        factory: "三九制药厂", // 生产厂家
        unit: "盒", // 单位
        specification: "24*12", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        differCount: 1, // 相差人数
        currentCount: 979, // 已拼人数
        originalPrice: 19.9, // 原价
        grouponPrice: 9.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563258088&di=d99e7e4a0de20063a765e901bdbb22d5&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.huatuoyf.com%2Fproduct%2F2012%2F09%2F08%2F201209081504162.jpg"
      },
      {
        id: 1, // 商品id
        name: "哈药蓝瓶", // 商品名称
        factory: "哈尔滨制药厂六厂", // 生产厂家
        unit: "盒", // 单位
        specification: "12*3", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        differCount: 3, // 相差人数
        currentCount: 10002, // 已拼人数
        originalPrice: 29.9, // 原价
        grouponPrice: 19.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663416115&di=f283a4aeeee2ce1e969343f61f43fd54&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fmobilecms%2Fs750x750_jfs%2Ft14011%2F5%2F1388571919%2F429104%2F399fbd72%2F5a1fd3a7Nd74b9d81.jpg%2521q80.jpg"
      },
      {
        id: 2, // 商品id
        name: "杜蕾斯", // 商品名称
        factory: "杜蕾斯生产厂家", // 生产厂家
        unit: "盒", // 单位
        specification: "6*3", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        differCount: 9, // 相差人数
        currentCount: 100, // 已拼人数
        originalPrice: 39.9, // 原价
        grouponPrice: 9.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663479241&di=73911abb3307641eee7d08320a1cfea5&imgtype=0&src=http%3A%2F%2Fp1.maiyaole.com%2Fimg%2F976%2F976435%2Forg_org.jpg%3Fv%3D1"
      },
    ], // 团购商品列表
  },

  /** =========================================================== */
  /** ================ 页面生命周期 Start */
  /** =========================================================== */

  /**
   * 生命周期--页面载入
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /** =========================================================== */
  /** ================ 页面生命周期 End */
  /** =========================================================== */

  /** =========================================================== */
  /** ================ 页面事件 Start */
  /** =========================================================== */

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
    if (e.currentTarget.dataset.actionid == 4) {

    } else {
      wx.navigateTo({
        url: e.currentTarget.dataset.target,
      })
    }
  },

  /**
   * 点击新人专享 更多
   */
  tapNewCustomer: function () {
    console.log("新人专享 查看更多");
  },

  /**
   * 点击新人红包
   */
  tapNewCustomerPackage: function () {
    console.log("新人专享 红包");
  },

  /**
   * 点击新人专享 商品
   */
  tapNewCustomerGoods: function (e) {
    console.log("新人专享 商品: \n" + e.currentTarget.dataset.goodsid);
  },

  /**
   * 点击团购专区 更多
   */
  tapGroupon: function () {
    console.log("团购专区 查看更多");
  },

  /**
   * 点击团购专区 商品
   */
  tapGrouponGoods: function (e) {
    console.log("团购专区 商品: \n" + e.currentTarget.dataset.goodsid);
  },

  /**
   * 点击加入团购
   */
  tapJoinGroupon: function (e) {
    console.log("团购专区 点击抢购: \n" + e.currentTarget.dataset.goodsid);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

  /** =========================================================== */
  /** ================ 页面事件 End */
  /** =========================================================== */

})
