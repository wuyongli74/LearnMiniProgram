import request from '../../utils/request'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], // 轮播图数据
    recommendList: [], // 推荐歌单
    topList: [], // 排行榜
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取轮播图数据
    let bannerListData = await request('/banner', { type: 2 })
    this.setData({
      bannerList: bannerListData.banners,
    })

    // 获取推荐歌单数据
    let recommendListData = await request('/personalized', { limit: 10 })
    this.setData({
      recommendList: recommendListData.result,
    })

    // 获取排行榜数据
    /**
     * 需求分析：
     *   1.需要根据idx的值获取对应的数据
     *   2.idx的取值范围是0-20，我妈妈需要0-4
     *   3.需要发送5次请求
     * 前++ 和 后++ 的区别
     *   1.先看到是运算符还是值
     *   2.如果先看到的是运算符就先运算再赋值
     *   3.如果先看到的值那么就先赋值再运算
     */
    let topListData = await request('/toplist/detail')
    this.setData({
      topList: topListData,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
