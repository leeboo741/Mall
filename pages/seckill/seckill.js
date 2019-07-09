// pages/seckill/seckill.js

/**
 * ******** 药秒杀 ********
 * =============================================================================================
 * 
 * ================================================================================================
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      {
        typeName: "正在疯抢", // 类型 名称
        typeId: 0, // 类型 id
      },
      {
        typeName: "即将开抢", // 类型 名称
        typeId: 1, // 类型 id
      },
      {
        typeName: "下期预告", // 类型 名称
        typeId: 2, // 类型 id
      },
    ], // 类型 列表
    currentType: {}, // 当前 类型
    bannerList: [
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
    ], // banner 数据
  },

  /** =========================================================== */
  /** ================ 页面生命周期 Start */
  /** =========================================================== */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentType: this.data.typeList[0],
    })
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
   * 点击类型
   */
  tapType: function (e) {
    console.log("点击类型： \n" + JSON.stringify(e));
    this.setData({
      currentType: this.data.typeList[e.detail.key]
    })
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