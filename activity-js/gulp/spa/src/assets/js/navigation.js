(function () {
    function markLinkAsSelected(hash) {
        const links = document.querySelectorAll(`[attr-link]`)
        links.forEach(link => link.classList.remove('selected'))

        const link = document.querySelector(`[attr-link='${hash}']`)
        link.classList.add('selected')
    }

    function navigateViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[attr-link='${hash}']`)
        const destin = document.querySelector('[attr-link-destin]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destin.innerHTML = html
                markLinkAsSelected(hash)
            })
    }

    function configureLinks() {
        document.querySelectorAll('[attr-link]')
            .forEach(link => {
                link.href = link.attributes['attr-link'].value
            })
    }

    function navigationInitial() {
        if (location.hash) {
            navigateViaAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[attr-link]')
            navigateViaAjax(firstLink.hash)
        }
    }

    window.onhashchange = e => navigateViaAjax(location.hash)
    
    configureLinks()
    navigationInitial()
})()