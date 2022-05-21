(function ($) {
    $.fn.selfTimer = function (options) {
        const optionsFinal = $.extend({
            message: 'Coming soon!!!',
            time: '23:59:59'
        }, options)

        const hourTens = $('<span class="digit">').html('0')
        const hourUnit = $('<span class="digit">').html('0')
        const minuteTens = $('<span class="digit">').html('0')
        const minuteUnit = $('<span class="digit">').html('0')
        const secondTens = $('<span class="digit">').html('0')
        const secondUnit = $('<span class="digit">').html('0')

        const separatorHour = $('<span class="separator">').html(':')
        const separatorMinute = $('<span class="separator">').html(':')

        const message = $('<span class="message">').html(optionsFinal.message)

        $(this).addClass('selfTimer')
        $(this).append(hourTens, hourUnit, separatorHour, minuteTens,
            minuteUnit, separatorMinute, secondTens, secondUnit, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const hourTarget = regex.exec(optionsFinal.time)
        // console.log(hourTarget)

        let selfTimer = setInterval(() => {
            const now = new Date()
            const target = new Date()
            target.setHours(hourTarget[1])
            target.setMinutes(hourTarget[2])
            target.setSeconds(hourTarget[3])

            const differenceInMilliseconds = target.getTime() - now.getTime()
            if (differenceInMilliseconds >= 0) {
                const difference = regex.exec(new Date(differenceInMilliseconds).toISOString())
                // console.log(difference)

                hourTens.html(difference[1][0])
                hourUnit.html(difference[1][1])
                minuteTens.html(difference[2][0])
                minuteUnit.html(difference[2][1])
                secondTens.html(difference[3][0])
                secondUnit.html(difference[3][1])
            } else {
                clearInterval(selfTimer)
            }
        }, 1000)

        return this
    }
})(jQuery)
