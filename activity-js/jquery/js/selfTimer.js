(function ($) {
    $.fn.selfTime = function(options) {
        const optionsFinal = $.extend({
            message: 'Coming soon!!!',
            time: '23:59:59'
        }, options)
        return this
    }
})