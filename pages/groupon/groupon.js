// pages/groupon/groupon.js

/**
 * ******** 药团购 ********
 * =============================================================================================
 * 
 * ================================================================================================
 */

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
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
      {
        id: 3, // 商品id
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
        id: 4, // 商品id
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
        id: 5, // 商品id
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
   * 搜索框 确认
   */
  searchConfirm: function (e) {
    console.log("团购列表 => 搜索框确认: \n" + e.detail.value);
  },

  /**
   * 点击团购专区 商品
   */
  tapGrouponGoods: function (e) {
    console.log("团购列表 => 团购专区 商品: \n" + e.currentTarget.dataset.goodsid);
  },

  /**
   * 点击加入团购
   */
  tapJoinGroupon: function (e) {
    console.log("团购列表 => 团购专区 点击抢购: \n" + e.currentTarget.dataset.goodsid);
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