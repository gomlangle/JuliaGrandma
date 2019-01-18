// pages/mytest/bbb.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

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
    var info = wx.getSystemInfoSync();
    console.log("开始打印系统信息========>")
    for(var key in info){
      console.log(key+":", info[key]);
    }
    console.log("打印系统信息结束========>")
    var wW = info.windowWidth;
    var wH = info.windowHeight;
    console.log("界面初始化时尺寸",wW,wH);

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  onResize:function(res){
    console.log("尺寸变化", res.size.windowWidth, res.size.windowHeight)
     // 新的显示区域宽度
     // 新的显示区域高度
     
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
})