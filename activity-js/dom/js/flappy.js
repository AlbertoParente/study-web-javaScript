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

// const b = new Barrier(true)
// b.setHeightBarrier(300)
// document.querySelector('[attr-flappy]').appendChild(b.element)

function pairOfBarrier (height, opening, x) {
    this.element = newElement('div', 'pair-of-barriers')

    this.higher = new Barrier(true)
    this.inferior = new Barrier(false)

    this.element.appendChild(this.higher.element)
    this.element.appendChild(this.inferior.element)

    this.drawOpening = () => {
        const topHeight = Math.random() * (height - opening)
        const lowerHeight = height - opening - topHeight
        this.higher.setHeightBarrier(topHeight)
        this.inferior.setHeightBarrier(lowerHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.drawOpening()
    this.set(x)
}

const b = pairOfBarrier(700, 200, 400)

document.querySelector('[attr-flappy]').appendChild(b.element)