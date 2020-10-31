(function () {
    function navigateViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[attr-link='${hash}']`)
        if(!link) return

        const destin = document.querySelector('[attr-link-destin]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destin.innerHTML = html
            })
    }

    function configureLinks() {
        document.querySelectorAll('[attr-link]')
            .forEach(link => {
                link.href = link.attributes['attr-link'].value
            })
    }

    function initialNavigation() {
        if (location.hash) {
            navigateViaAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[attr-link]')
            navigateViaAjax(firstLink.hash)
        }
    }

    window.onhashchange = e => navigateViaAjax(location.hash)
    
    configureLinks()
    initialNavigation()
})()