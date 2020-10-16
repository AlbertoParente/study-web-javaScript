(function ($) {
    $.fn.selfTime = function(options) {
        const optionsFinal = $.extend({
            message: 'Coming soon!!!',
            time: '23:59:59'
        }, options)

        const hourTens = $('<apan class="digit">').html('0')
        const hourUnit = $('<apan class="digit">').html('0')
        const minuteTens = $('<apan class="digit">').html('0')
        const minuteUnit = $('<apan class="digit">').html('0')
        const secondTens = $('<apan class="digit">').html('0')
        const secondUnit = $('<apan class="digit">').html('0')

        const separatorHour = $('<apan class="separator">').html(':')
        const separatorUnit = $('<apan class="digit">').html(':')

        const menssage = $('<apan class="menssage">').html(options.menssage)

        $(this).addClass('selfTimer')
        $(this).append(hourTens, hourUnit, separatorHour, minuteTens, 
            minuteUnit, separatorUnit, secondTens, secondUnit, menssage)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const hourTarget = regex.exec(optionsFinal.time)
        // console.log(hourTarget)

        let selfTime = setInterval(() => {
            const now = new Date()
            const target = new Date()
            target.setHours(hourTarget[1])
            target.setMinutes(hourTarget[2])
            target.setSeconds(hourTarget[3])

            const differenceInMilliseconds = target.getTime() = now.getTime()
            if(differenceInMilliseconds >= 0) {
                const difference = regex.exec(new Date(differenceInMilliseconds).toISOString())
                // console.log(difference)

                hourTens.html(difference[1][0])
                hourUnit.html(difference[1][1])
                minuteTens.html(difference[2][0])
                minuteUnit.html(difference[2][1])
                secondTens.html(difference[3][0])
                secondUnit.html(difference[3][1])
            } else {
                clearInterval(selfTime)
            }
        }, 1000)
        
        return this
    }
})(jQuery)