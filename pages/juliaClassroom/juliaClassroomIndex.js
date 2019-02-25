// juliaClassroom/juliaClassroomIndex.js
var tool = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroyInfo:{
      title:"分类",
      arr: [
        {
          "id": 0,
          "name": "Julia精品小班课",
          "url": "url1",
          "color": "#ff0000"
        },
        {
          "id": 1,
          "name": "优选教师课",
          "url": "url2",
          "color": "#44b549"
        },
        {
          "id": 2,
          "name": "Julia公开课",
          "url": "url3",
          "color": "#4eb8fb"
        },
        {
          "id": 0,
          "name": "Julia精品\n小班课",
          "url": "url4",
          "color": "#ff0000"
        },
        {
          "id": 1,
          "name": "优选教师课",
          "url": "url5",
          "color": "#44b549"
        },
        {
          "id": 2,
          "name": "Julia公开课",
          "url": "url6",
          "color": "#4eb8fb"
        }
      ]
    },
    hot: {
      title: "热门课程", arr: [
        { name: "测试信息1", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "url1", "color": "#ff0000", startTime: 1550805237, endTime: 1550808837},
        { name: "测试信息2", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#ff0000", link: "url2", startTime: 1550805237, endTime: 1550808837},
        { name: "测试信息3", group: "优选教师", icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#4eb8fb", link: "url3", startTime: 1550805237, endTime: 1550808837},
        { name: "测试信息1", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "url1", "color": "#ff0000", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#ff0000", link: "url2", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", group: "优选教师", icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#4eb8fb", link: "url3", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息1", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_113.png", des: "这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信息这是测试信", link: "url1", "color": "#ff0000", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息2", group: "Julia精品", icon: "https://www.juliaol.cn/mainsceneMap_139.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#ff0000", link: "url2", startTime: 1550805237, endTime: 1550808837 },
        { name: "测试信息3", group: "优选教师", icon: "https://www.juliaol.cn/mainsceneMap_141.png", des: "这是测试信息这是测试信息这是测试信息", "color": "#4eb8fb", link: "url3", startTime: 1550805237, endTime: 1550808837 }
      ]
    },
    wonderfulInfo:{
      title:"精彩瞬间",
      arr:[
        {
          "id": 0,
          "name": "精彩瞬间1",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
        },
        {
          "id": 1,
          "name": "精彩瞬间2",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
        },
        {
          "id": 2,
          "name": "精彩瞬间3",
          "videoURL": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        },
        {
          "id": 0,
          "name": "精彩瞬间1",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
        },
        {
          "id": 1,
          "name": "精彩瞬间2",
          "videoURL": "url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_139.png"
        },
        {
          "id": 2,
          "name": "精彩瞬间3",
          "videoURL": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        }
      ]
    },
    leaderBoard:{
      title:"教室排名",
      arr:[
        {
          "name":"Lucy",
          "stars":43255,
          "isUp":true
        },
        {
          "name": "Julia",
          "stars": 41211,
          "isUp": false
        },
        {
          "name": "Panel",
          "stars": 33255,
          "isUp": true
        },
        {
          "name": "Jack",
          "stars": 33155,
          "isUp": true
        },
        {
          "name": "Sun",
          "stars": 23255,
          "isUp": true
        }
      ]
    },
    currentTools:{
      "title":"实用工具",
      height:0,
      arr:[
        {
          "name":"口语测评",
          "url":"url1",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_113.png"
        },
        {
          "name": "小剧场",
          "url": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        },
        {
          "name": "小剧场",
          "url": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        },
        {
          "name": "小剧场",
          "url": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        },
        {
          "name": "小剧场",
          "url": "url2",
          "imgURL": "https://www.juliaol.cn/mainsceneMap_141.png"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let arr = this.data.hot.arr;
   let self = this;
   arr.forEach((item,idx)=>{
     let strfm = self.makeLessonTime(item.startTime,item.endTime)
     item.timeStr = strfm;
   });

    let j = this.data.currentTools.arr.length;
    let currentToolsHeight = (parseInt(j / 4) + ((j % 4) > 0 ? 1 : 0)) * 220;
    this.data.currentTools.height = currentToolsHeight;
   this.setData({
     hot: this.data.hot,
     currentTools:this.data.currentTools
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

  },
  /**
   * 用户点击搜索
   */
  onSearchClick:function(){
    console.log("搜索");
  },
  onCateGroyItemClick:function(evt){
    let idx = evt.currentTarget.dataset.id;
    let info = this.data.categroyInfo[idx] || {};
    let url = info.url
    console.log(url);
  },
  makeGroupStyle:function(groupName){
    let key = groupName || "";
    let result = "display:" + (key == "" ? "none" : "block") + ";";
    return result;
  },
  onwonderfulInfoItemClick:function(evt){
    let id = evt.currentTarget.dataset.id;
    let arr = this.data.wonderfulInfo.arr;
    let j = arr.length;
    let dataInfoObj = null;
    for(var i=0;i<j;i++){
      if(arr[i].id == id){
        dataInfoObj = arr[i];
        break;
      }
    }
    if (dataInfoObj){
      let str = encodeURI(JSON.stringify(dataInfoObj))
      wx.navigateTo({
        url: '/pages/juliaClassroom/package/wonderfulVideo?arg=' + str
      })
    }
  },
  /**
   * 点击更多内容
  */
  onMoreClick:function(evt){
    let arg = evt.currentTarget.dataset.type || "";
    if(arg != ""){
      wx.navigateTo({
        url: '/pages/juliaClassroom/package/moreInfoListPage?type=' + arg
      })
    }
  },
  /*
    格式化上课时间字符串
  */
  makeLessonTime:function(st,et){
    return tool.YYYYMMDDHHMMSS(st) + "-" + tool.HHMMSS(et);
  },
  onToolItemClick:function(evt){
    let argURL = evt.currentTarget.dataset.url;
    wx.navigateTo({
      url: argURL
    })
  }
})