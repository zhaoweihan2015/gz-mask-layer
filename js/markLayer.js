/**
 * 显示提示信息
 * 
 * @param {any} o 
 * @param {string} o.word     提示的文字 
 * @param {function} o.cb     在显示之前的回调函数 
 * @param {string} o.url      结束前所跳转的url 
 * @param {function} o.lastCb 结束之前的回调函数 
 * @returns 
 */
function previewInfo(o) {
    var $tip = $('<div class="gz-mark-layer">' +
            '<div class="gz-alert">' +
            '</div>' +
            '</div>'),
        $word = $('<p>' + o.word + '</p>'),
        fadeTime = 1000

    //callback
    if (o.hasOwnProperty("cb")) {
        o.cb()
    }

    if (o.hasOwnProperty('time')) {
        fadeTime = o.time
    }
    return {
        enter: function () {
            var $info = $('<i class="fa fa-check-circle-o right"></i>')
            $('body').append($tip.find('.gz-alert').append($info, $word).parent().fadeIn('normal', function () {
                var _this = $(this)
                setTimeout(function () {
                    if (o.hasOwnProperty('url')) {
                        location.href = o.url
                    } else {
                        _this.fadeOut('normal', function () {
                            if (o.hasOwnProperty("lastCb")) {
                                o.lastCb()
                            }
                            $(this).remove()
                        })
                    }
                }, fadeTime)
            }))

        },
        error: function () {
            var $info = $('<i class="fa fa-exclamation-circle false"></i>')
            $('body').append($tip.find('.gz-alert').append($info, $word).parent().fadeIn('normal', function () {
                var _this = $(this)
                setTimeout(function () {
                    _this.fadeOut('normal', function () {
                        $(this).remove()
                    })
                }, fadeTime)
            }))
        }
    }
}