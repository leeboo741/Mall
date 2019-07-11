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
        bannerImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562730702177&di=df76908f37b8c5aa57db5758118e6814&imgtype=0&src=http%3A%2F%2Fjkzx8.com%2Fuploads%2F160721%2F40-160H11146103M.jpg", // 图片地址
        bannerTargetUrl: "http://huji820.oicp.net:25875/fd1ca163-c267-4e66-a059-669523202cf0.html", // 内容地址
      },
      {
        bannerImageUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1398342743,2402782757&fm=26&gp=0.jpg",
        bannerTargetUrl: "http://huji820.oicp.net:25875/3375f542-11fe-44d3-8900-0d1a94cc6f62.html",
      },
      {
        bannerImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562730817614&di=e2f390f9a6f1020b8dc44f3fe7adea49&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151211%2Fmp47894751_1449804610035_1_th.jpeg",
        bannerTargetUrl: "http://huji820.oicp.net:25875/ab98c06e-dd20-4965-90e2-5c5df7046413.html",
      },
      {
        bannerImageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562730835323&di=31af2d379250c450b38cf97ce0924f3b&imgtype=0&src=http%3A%2F%2Fs13.sinaimg.cn%2Fmw690%2F005CQsmEzy6W5vAuHxO8c%26690",
        bannerTargetUrl: "http://huji820.oicp.net:25875/4dbf6753-ea06-483c-a27a-489091dbe070.html",
      },
    ], // banner 数据
    currentSeckillStartTime: "2019-07-11 17:00:00", // 当前秒杀 开始时间
    currentSeckillEndTime: "2019-07-11 10:53:00", // 当前秒杀 结束时间
    nextSeckillStartTime: "2019-07-11 10:54:00", // 下次秒杀 开始时间
    countDownDuration: 0, // 倒计时 时间
    countDownTime: "00:00:00", // 倒计时时间
    countDownIntervalID: 0, // 倒计时计时器id
    myFormat: "hh:mm:ss", // 倒计时 时间格式
    seckillGoodsList: [
      {
        id: 0, // 商品id
        name: "三九感冒灵", // 商品名称
        factory: "三九制药厂", // 生产厂家
        unit: "盒", // 单位
        specification: "24*12", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        currentSeckillCount: 12, // 已抢数量
        seckillCount: 999, // 秒杀总数量
        originalPrice: 19.9, // 原价
        seckillPrice: 9.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563258088&di=d99e7e4a0de20063a765e901bdbb22d5&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.huatuoyf.com%2Fproduct%2F2012%2F09%2F08%2F201209081504162.jpg"
      },
      {
        id: 1, // 商品id
        name: "哈药蓝瓶", // 商品名称
        factory: "哈尔滨制药厂六厂", // 生产厂家
        unit: "盒", // 单位
        specification: "12*3", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        currentSeckillCount: 2223, // 已抢数量
        seckillCount: 10000, // 秒杀总数量
        originalPrice: 29.9, // 原价
        seckillPrice: 19.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663416115&di=f283a4aeeee2ce1e969343f61f43fd54&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fmobilecms%2Fs750x750_jfs%2Ft14011%2F5%2F1388571919%2F429104%2F399fbd72%2F5a1fd3a7Nd74b9d81.jpg%2521q80.jpg"
      },
      {
        id: 2, // 商品id
        name: "杜蕾斯", // 商品名称
        factory: "杜蕾斯生产厂家", // 生产厂家
        unit: "盒", // 单位
        specification: "6*3", // 规格
        approval: "文号XXXXXXXX", // 批准文号
        currentSeckillCount: 776, // 已抢数量
        seckillCount: 1000, // 秒杀总数量
        originalPrice: 39.9, // 原价
        seckillPrice: 9.9, // 团购价
        imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562663479241&di=73911abb3307641eee7d08320a1cfea5&imgtype=0&src=http%3A%2F%2Fp1.maiyaole.com%2Fimg%2F976%2F976435%2Forg_org.jpg%3Fv%3D1"
      },
    ], // 秒杀商品列表
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
    this.getCountDownDuration();
    this.data.seckillGoodsList = this.setPrecent(this.data.seckillGoodsList);
    this.setData({
      seckillGoodsList: this.data.seckillGoodsList
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
  /** ================ 数据处理 Start */
  /** =========================================================== */

  /**
   * 获取已抢数量百分比
   */
  setPrecent: function (datasource) {
    for (let i = 0; i < datasource.length; i++) {
      let tempGoodsObj = datasource[i];
      tempGoodsObj.seckillPercent = (tempGoodsObj.currentSeckillCount * 100 / tempGoodsObj.seckillCount).toFixed(2)
    }
    return datasource;
  },

  /**
   * 获取倒计时时间
   */
  getCountDownDuration: function () {
    let tempCountDown = null;
    
    if (this.data.currentType.typeId == 0) { // 如果是正在疯抢 计算到秒杀结束时间
      tempCountDown = new Date(this.data.currentSeckillEndTime).getTime() - new Date().getTime();
    } else if (this.data.currentType.typeId == 1) { // 如果是即将开抢 计算到秒杀开始时间
      tempCountDown = new Date(this.data.nextSeckillStartTime).getTime() - new Date().getTime();
    } 

    this.setData({
      countDownDuration: tempCountDown,
    })

    // 开始计时
    let that = this;
    // 清空之前的定时器
    clearInterval(this.data.countDownIntervalID);
    // 打开新的计时器开始计时
    this.data.countDownIntervalID = setInterval(function () {
                                            that.countDown();
                                          }, 1000);
  },

  /**
   * 倒计时
   */
  countDown: function () {
    let day = 0; // 天
    let hour = 0; // 时
    let min = 0; // 分
    let sec = 0; // 秒
    this.data.countDownDuration = this.data.countDownDuration - 1000;
    if (this.data.countDownDuration > 0) { // 如果时间大于一秒 变更页面
      let tempCountDownDuration = parseInt(this.data.countDownDuration / 1000);
      // 天数
      day = parseInt(tempCountDownDuration / (24 * 60 * 60));  
      // 小时
      hour = parseInt((tempCountDownDuration % (24 * 60 * 60)) / (60 * 60));
      // 分钟
      min = parseInt(((tempCountDownDuration % (24 * 60 * 60)) % (60 * 60)) / 60);
      // 秒数
      sec = parseInt(((tempCountDownDuration % (24 * 60 * 60)) % (60 * 60)) % 60);
      // 拼接字符串
      let tempStr = "";
      if (day > 0) {
        if (day <= 9) {
          tempStr = "0" + day + "d ";
        } else {
          tempStr = day + "d ";
        }
      }

      if (hour > 0) {
        if (hour <= 9) {
          tempStr = tempStr + "0" + hour + ":";
        } else {
          tempStr = tempStr + hour + ":";
        }
      } else {
        tempStr = tempStr + "00:";
      }

      if (min > 0) {
        if (min <= 9) {
          tempStr = tempStr + "0" + min + ":";
        } else {
          tempStr = tempStr + min + ":";
        }
      } else {
        tempStr = tempStr + "00:";
      }

      if (sec > 0) {
        if (sec <= 9) {
          tempStr = tempStr + "0" + sec;
        } else {
          tempStr = tempStr + sec;
        }
      } else {
        tempStr = tempStr + "00";
      }

      this.setData({
        countDownTime: tempStr
      })
    } else {
      if (this.currentType.typeId == 0) {
        this.setData({
          countDownTime: "本场秒杀已经结束！"
        }) 
      } else if (this.currentType.typeId == 1) {
        this.setData({
          countDownTime: "本场秒杀已经开始！"
        }) 
      }
      // 结束倒计时定时器
      clearInterval(this.data.countDownIntervalID);
      // 请求下一场秒杀数据
      this.getNextSeckillData();
    }
  },

  /**
   * 获取下一场秒杀数据
   */
  getNextSeckillData: function () {
    if (this.data.currentType.typeId == 0) {
      this.setData({
        currentSeckillEndTime: "2019-07-11 10:55:00"
      })
    } else if (this.data.currentType.typeId == 1) {
      this.setData({
        nextSeckillStartTime: "2019-07-11 10:56:00"
      })
    } 
    this.getCountDownDuration();
  },

  /** =========================================================== */
  /** ================ 数据处理 End */
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
   * 点击Banner
   */
  tapBanner: function (e) {
    console.log("药秒杀 => 点击Banner: \n" + e.currentTarget.dataset.targeturl);
  },

  /**
   * 点击秒杀商品
   */
  tapSeckillGoods: function (e) {
    console.log("药秒杀 => 秒杀 商品: \n" + e.currentTarget.dataset.goodsid);
  },

  /**
   * 点击秒杀
   */
  tapJoinSecKill: function (e) {
    console.log("药秒杀 => 秒杀 点击秒杀: \n" + e.currentTarget.dataset.goodsid);
  }, 

  /**
   * 点击类型
   */
  tapType: function (e) {
    console.log("药秒杀 => 点击类型： \n" + JSON.stringify(e));
    this.setData({
      currentType: this.data.typeList[e.detail.key]
    })
    this.getCountDownDuration();
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