//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl:'../../images/1.jpg',
      // nickName:'独行喵'
    },
    menuShow: false,
    subShow: [false, false, false, false, false],
    fromLeft: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //menu 伸缩
  bindMenuShow: function (options) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    });
    if (!this.data.menuShow) {
        //显示
        animation.translateX(0).step();
        this.setData({
          fromLeft: animation.export(),
          menuShow: true
        });
    } else {
        // 隐藏
        animation.translateX("-100%").step();
        this.setData({
          fromLeft: animation.export(),
          menuShow: false
        });
    }
  },
  //二级菜单显示/隐藏
  bindsubShow: function (e) {
    let index = parseInt(e.currentTarget.dataset.nav);
    this.data.subShow = [false, false, false, false, false];
    if (!this.data.subShow[index]) {
      this.data.subShow[index] = true
    } else {
      this.data.subShow[index] = false
    }
    this.setData({
      subShow: this.data.subShow
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
