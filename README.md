# mask-layer
#### 自用弹出框
#### 封装一个弹出框遮罩层，依赖于jQuery和Font Awesome

# 使用方法

### option
#### 1.`word` 弹窗文字内容
#### 2.`cb` 在弹窗弹出之前的回调函数
#### 3.`url` 弹窗弹出之后跳转的网页（error中没有此方法）
#### 4.`lastCb` 在弹窗消失之后的回调函数

### type
#### 1. `enter()` 成功时使用的方法
#### 2. `error()` 失败时使用的方法
```javascript 
previewInfo({
            word:"成功文字",
            cb:function(){
                console.log('在弹窗之前')
            },
            //url:'https://www.baidu.com',//成功后跳转的地址
            lastCb:function(){
                console.log('在弹窗之后')
            }
        }).enter()
```
