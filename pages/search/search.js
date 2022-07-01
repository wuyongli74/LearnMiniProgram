// pages/search/search.js
import request from '../../utils/request'
let isSend = false // 函数节流使用
Page({
  /**
   * 页面的初始数据
   */
  data: {
    placeholderContent: '', // placeholder的内容
    hotList: [], // 热搜榜数据
    searchContent: '', // 用户输入的表单项数据
    searchList: [], // 模糊匹配的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInitData()
  },

  // 获取初始化的数据
  async getInitData() {
    let placeholderData = await request('/search/default')
    let hotListData = await request('/search/hot/detail')
    this.setData({
      placeholderContent: placeholderData.data.showKeyword,
      hotList: hotListData.data,
    })
  },

  // 表单项内容发生改变的回调
  handleInputChange(event) {
    // 更新searchContent的状态数据
    this.setData({
      searchContent: event.detail.value.trim(),
    })
    if (isSend) {
      return
    }
    isSend = true

    // 发请求获取关键字模糊匹配数据
    this.getSearchList()

    // 函数节流
    setTimeout(() => {
      isSend = false
    }, 3000)
  },

  // 获取搜索数据的功能函数
  async getSearchList() {
    if (!this.data.searchContent) {
      // this.setData({
      //   searchList: [],
      // })
      return
    }
    // 发请求获取关键字模糊匹配数据
    let searchListData = await request('/search', {
      keywords: this.data.searchContent,
      limit: 10,
    })
    this.setData({
      searchList: searchListData.result.songs,
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
