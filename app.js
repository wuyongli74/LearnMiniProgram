App({

    /**
     * 生命周期函数：在后台存活2小时
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function (options) {
        // console.log("小程序初始化完成：onLaunch");
        // 异步调用

        // 抛出错误
        // setTimeout(function () {
        //    const err = new Error() 
        //    throw err
        // },3000)
        // 发送网络请求
        // 获取用户信息
        // console.log(options);
    },

    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     * 小程序界面显示出来后会执行的生命周期函数
     */
    onShow: function (options) {
        // 1.判断小程序的进入场景
        // console.log(options);
        switch (options.scene) {
            case 1001:
                break;
            case 1005:
                // default:
                break;
        }
        // 2.获取用户信息，并且获取到用户信息后，将用户信息传递给服务器
        wx.getUserInfo({
            success: function (res) {
                // console.log(res);
            }
        })
    },

    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {
        console.log("界面被隐藏：onHide");
    },

    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {
        console.log("小程序中发生一些错误时会执行");
    }
})