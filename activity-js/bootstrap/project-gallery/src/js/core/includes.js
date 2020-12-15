import $ from 'jquery'

const loadHTMLSuccessCallbacks = []

export function onLoadHTMLSuccess(callback) {
    if(loadHTMLSuccessCallbacks.includes(callback)) {
        loadHTMLSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[attr-include]').each(function(i, e) {
        const url = $(e).attr('attr-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('attr-include')
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()