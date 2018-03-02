/**
 * 显示提示信息
 * 
 * @param {any}             o 
 * @param {string}          o.word             提示的文字 
 * @param {number}          o.time             弹窗持续时间 
 * @param {function}        o.beforeStart      在显示之前的回调函数 
 * @param {string}          o.url              结束前所跳转的url 
 * @param {boolean}         o.button           是否使用确定按钮 
 * @param {string}          o.button.yes       确定按钮填充文字 
 * @param {boolean/object}  o.choose           是否使用确定/取消按钮 
 * @param {string}          o.choose.yes       确定按钮填充文字 
 * @param {string}          o.choose.no        取消按钮填充文字 
 * @param {function}        o.clickYes         点击确定的回调函数 
 * @param {function}        o.clickNo          点击取消的回调函数 
 * @param {function}        o.beforeEnd        结束之前的回调函数 
 */

$.extend({
    gzMaskLayer: function gzMaskLayer(o) {
        var $tip = $('<div class="gz-mark-layer">' +
                '<div class="gz-alert">' +
                '</div>' +
                '</div>'),
            _word = '<p>' + o.word + '</p>',
            _button,
            fadeTime = o.time ? o.time : 2000

        if (o.hasOwnProperty("button") && o.button) {
            var _yes = "确定"
            if (o.button.hasOwnProperty('yes')) {
                _yes = o.button.yes
            }
            _button = "<button type='button'>" + _yes + "</button>"
            _word += _button
        }

        if (o.hasOwnProperty("choose") && o.choose) {
            var _yes = "确定",
                _no = "取消"
            if (o.choose.hasOwnProperty('yes')) {
                _yes = o.choose.yes
            }
            if (o.choose.hasOwnProperty('no')) {
                _no = o.choose.no
            }
            _button = '<button type="button" data-choose="y">' + _yes + '</button>' +
                      '<button type="button" data-choose="n">' + _no + '</button>'
            _word += _button
        }
        if (o.hasOwnProperty("beforeStart")) {
            o.beforeStart()
        }

        /**
         * 添加DOM节点以及事件
         * 
         * @param {any} type      类型
         * @param {any} addPrevFn 添加后的回调函数
         */
        function addPreview(type, addPrevFn) {
            var $info = $('<i class="fa ' + type + '"></i>')
            switch (type) {
                case 'right':
                    $info.addClass("fa-check-circle")
                    break
                case 'false':
                    $info.addClass("fa-exclamation-circle")
                    break
                case 'question':
                    $info.addClass("fa-question-circle")
                    break
                default:
                    console.log("%cError! No Type",'color:red')
                    break
            }

            $('body').append($tip.find('.gz-alert').append($info, $(_word)).parent().fadeIn('normal', function () {
                var timer
                if (!o.button && !o.choose) {
                    timer = setTimeout((function () {
                        addPrevFn.call(this)
                    }).bind(this), fadeTime)
                }

                $tip.on('click', function (e) {
                    var e = e || event
                    if ((o.button || o.choose) && !Boolean($(e.target).hasClass("gz-mark-layer") || e.target.tagName == 'BUTTON')) {
                        return false
                    }
                    if ($(e.target).attr('data-choose') == 'y') {
                        o.clickYes()
                    } else if ($(e.target).attr('data-choose') == 'n' && o.hasOwnProperty("clickNo")) {
                        o.clickNo() 
                    }
                    addPrevFn.call(this)
                })
            }))
        }

        if (o.hasOwnProperty('form')) {
            addFormDom()
        }

        // 消失
        function disapper() {
            $(this).fadeOut('normal', function () {
                if (o.hasOwnProperty("beforeEnd")) {
                    o.beforeEnd()
                }
                $(this).remove()
            })
        }


        return {
            success: function () {
                addPreview('right', function () {
                    if (o.hasOwnProperty('url')) {
                        location.href = o.url
                    } else {
                        disapper.call(this)
                    }
                })
            },
            error: function () {
                addPreview('false', function () {
                    disapper.call(this)
                })
            },
            ask: function () {
                addPreview('question', function () {
                    disapper.call(this)
                })
            }
        }
    }

})


/**
 *  MADE BY gz
 *  github:www.github.com/zhaoweihan2015
 *  URL:www.welush.com
 * 
 *     00000000
 *    00      00 
 *    00
 *    00
 *    00   00000 
 *    00     100111111    
 *    00     100   11
 *     00000000   11
 *               11
 *              11     
 *             11    
 *            11     1
 *           111111111
 */