function newElement(tagName, className) {
    const e = document.createElement(tagName)
    e.className = className
    return e
}

function Barrier(reverse = false) {
    this.element = newElement('div', 'barrier')

    const borderBarrier = newElement('div', 'border')
    const bodyBarrier = newElement('div', 'body')
    this.element.appendChild(reverse ? bodyBarrier : borderBarrier)
    this.element.appendChild(reverse ? borderBarrier : bodyBarrier)

    this.setHeightBarrier = heightBarrier => bodyBarrier.style.height = `${heightBarrier}px`
}

const b = new Barrier(true)
b.setHeightBarrier(300)
document.querySelector('[attr-flappy]').appendChild(b.element)