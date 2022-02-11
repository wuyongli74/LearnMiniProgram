// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "coder",
        age: 18,
        student: [{
                id: 0,
                name: "kobe",
                age: 12
            },
            {
                id: 1,
                name: "lily",
                age: 14
            }, 
            {
                id: 2,
                name: "bobo",
                age: 21
            }
        ],
        counter:0
    },
    handleBtnClick(){
        // 1.错误做法，界面不会刷新
        // this.data.counter +=1,
        // console.log( this.data.counter);
        this.setData({
            counter:this.data.counter + 1
        })
    },
    handleSubtraction(){
        this.setData({
            counter:this.data.counter - 1
        })
    }
})

// 编程范式：
// 1.命令式编程：原生操作DOM
// 2.声明式编程