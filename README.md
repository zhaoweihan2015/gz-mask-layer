# gz-mask-layer
#### 自用弹出框
#### 封装一个弹出框遮罩层，依赖于jQuery和Font Awesome

# 更新日志

#### 1.0.4 `choose`与`button`的值改为true或者按钮文字内容，优化内部代码 ——2018.2.7
#### 1.0.3 修改部分配置名，优化内部代码，预计下一个版本增加弹窗表单（不过效果不好估计会放弃）
#### 1.0.2 增加确认取消按钮选项
#### 1.0.1 改为jquery插件，并优化内部代码，增加压缩版本 ——2018.1.26
#### 1.0.0 上传基本代码——2018.1.23

# 使用方法

### option
#### 1.`word` 弹窗文字内容
#### 2.`beforeStart` 在弹窗弹出之前的回调函数（必須）
#### 3.`url` 弹窗弹出之后跳转的网页（仅success方法中有效）
#### 4.`beforeEnd` 在弹窗消失之后的回调函数
#### 5.`time` 弹窗显示时间
#### 6.`button` 是否使用按钮退出（true后取消自动消失，改为点击按钮或者点击遮罩层才消失）
####   `button` 参数为true（使用默认文字），或者为一个对象
####    6.1 `button.yes` 确定按钮文字
#### 7.`choose` 是否使用T/F选择按钮（同上）
####   `choose` 参数为true（使用默认文字），或者一个对象
####    7.1 `choose.yes` 确认按钮文字
####    7.1 `choose.no` 取消按钮文字
#### 8.`clickYes` 在点击确定后的回调函数，只会在`choose`为true时有效，且与lastCb可以一起使用（如果`choose:true`,则为必須）
#### 9.`clickNo` 在点击取消后的回调函数

### type
#### 1. `success()` 成功时使用的方法
#### 2. `error()` 失败时使用的方法
#### 3. `ask()`   询问时使用的方法
```javascript 
$.gzMaskLayer({
            word:"成功文字",
            beforeStart:function(){
                console.log('在弹窗之前')
            },
            url:'https://www.baidu.com',//成功后跳转的地址
            button:true, // 使用一个按钮
            choose:{
                yes:'通过',
                no:'不通过'
            },
            clickYes:function(){
                console.lgo('点击确定按钮后')
            },
            clickNo:function(){
                console.lgo('点击取消按钮后')
            },
            beforeEnd:function(){
                console.log('在弹窗之后')
            }
        }).success()
```
