(function ($) {
    $.fn.selfTime = function(options) {
        const optionsFinal = $.extend({
            message: 'Coming soon!!!',
            time: '23:59:59'
        }, options)

        const timeTens = $('<apan class="digit">').html('0')
        const hourUnit = $('<apan class="digit">').html('0')
        const minuteTens = $('<apan class="digit">').html('0')
        const minuteUnit = $('<apan class="digit">').html('0')
        const secondTens = $('<apan class="digit">').html('0')
        const secondUnit = $('<apan class="digit">').html('0')

        const separatorHour = $('<apan class="separator">').html(':')
        const separatorUnit = $('<apan class="digit">').html(':')

        const menssage = $('<apan class="menssage">').html(options.menssage)

        $(this).addClass('selfTimer')
        return this
    }
})(jQuery)