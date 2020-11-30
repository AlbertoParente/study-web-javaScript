import $ from 'jquery'

const duration = 600

function filterByCity(city) {
    $('[attr-city').each(function(i, e) {
        const isTarget = $(this).attr('attr-city') === city || city === null
        if(isTarget) $(this).fadeIn(duration)
        else $(this).fadeOut(duration)
        
    })
}

const cityButtons = $('[attr-city-buttons]')
const cities = new Set 
$('[attr-city]').each(function(i, e) {
    cities.add($(e).attr('attr-city'))
})

const btns = Array.from(cities).map(city => {
    const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
    return btn
})

const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('All')
btnAll.click(e => filterByCity(null))
btns.push(btnAll)

const btnGroup = $('<div>').addClass(['btn-group'])
btnGroup.append(btns)

cityButtons.html(btnGroup)