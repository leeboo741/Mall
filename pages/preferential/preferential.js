// pages/preferential/preferential.js
/**
 * ******** 药福利 ********
 * =============================================================================================
 * 
 * ================================================================================================
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList: [
      {
        name: "全场无门槛券", // 优惠券名称
        description: "解释说明全场无门槛券", // 解释说明
        labels: [
          "无门槛",
          "全场使用",
          "不叠加",
        ], // 优惠券标签
        id: 0, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: null, // 优惠品牌
        goodsType: null, // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 32112, // 剩余数量
      },
      {
        name: "感冒药满100减10", // 优惠券名称
        description: "解释说明感冒药满100减10", // 解释说明
        labels: [
          "感冒药",
          "全场使用",
          "满100减10",
        ], // 优惠券标签
        id: 1, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: null, // 优惠品牌
        goodsType: [
          {
            name:"感冒药",
            id: 0,
          }
        ], // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 11231, // 剩余数量
      },
      {
        name: "杜蕾斯全场8折", // 优惠券名称
        description: "解释说明杜蕾斯全场8折", // 解释说明
        labels: [
          "杜蕾斯",
          "8折优惠"
        ], // 优惠券标签
        id: 2, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: [
          {
            name:"杜蕾斯",
            id: 0,
          }
        ], // 优惠品牌
        goodsType: null, // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 4423, // 剩余数量
      },
      {
        name: "全场无门槛券", // 优惠券名称
        description: "解释说明全场无门槛券", // 解释说明
        labels: [
          "无门槛",
          "全场使用",
          "不叠加",
        ], // 优惠券标签
        id: 3, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: null, // 优惠品牌
        goodsType: null, // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 32112, // 剩余数量
      },
      {
        name: "感冒药满100减10", // 优惠券名称
        description: "解释说明感冒药满100减10", // 解释说明
        labels: [
          "感冒药",
          "全场使用",
          "满100减10",
        ], // 优惠券标签
        id: 4, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: null, // 优惠品牌
        goodsType: [
          {
            name: "感冒药",
            id: 0,
          }
        ], // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 11231, // 剩余数量
      },
      {
        name: "杜蕾斯全场8折", // 优惠券名称
        description: "解释说明杜蕾斯全场8折", // 解释说明
        labels: [
          "杜蕾斯",
          "8折优惠"
        ], // 优惠券标签
        id: 5, // 优惠券id
        type: 0, // 优惠券类型
        goodsBrand: [
          {
            name: "杜蕾斯",
            id: 0,
          }
        ], // 优惠品牌
        goodsType: null, // 优惠商品
        couponImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562837204824&di=5c0372c8c9ac8334a683d0640c5f3a96&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F13%2F41%2F5781f1ff4c511_610.jpg", // 优惠券图片地址
        surplusCount: 4423, // 剩余数量
      },
    ], // 优惠券列表
  },

  /** =========================================================== */
  /** ================ 页面生命周期 Start */
  /** =========================================================== */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /** ================ 网络请求 Start */
  /** =========================================================== */

  /** =========================================================== */
  /** ================ 网络请求 End */
  /** =========================================================== */

  /** =========================================================== */
  /** ================ 页面事件 Start */
  /** =========================================================== */

  /**
   * 点击立即领取
   */
  tapReceiveCoupon: function (e) {
    console.log("药福利 => 点击立即领取: \n" + e.currentTarget.dataset.couponid);
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