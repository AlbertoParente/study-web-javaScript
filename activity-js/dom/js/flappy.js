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

function PairOfBarrier (height, opening, x) {
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

// const b = PairOfBarrier(700, 200, 400)
// document.querySelector('[attr-flappy]').appendChild(b.element)

function Barriers(height, width, opening, space, notifyPoint) {
    this.pairs = [
        new PairOfBarrier(height, opening, width),
        new PairOfBarrier(height, opening, width + space),
        new PairOfBarrier(height, opening, width + space * 2 ),
        new PairOfBarrier(height, opening, width + space * 3 )
    ]

    const displacement = 3
    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - displacement)

            if(pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + space * this.pairs.lenght)
                pair.drawOpening()
            }

            const middle = width / 2
            const crossedMiddle = pair.getX() + displacement >= middle && pair.getX() < middle
            
            if(crossedMiddle) notifyPoint()
        })
    }
}

function Bird(gameHeight) {
    let flying = false
    
    this.element = newElement('img', 'bird')
    this.element.src = 'img/bird.png'

    this.getY = () => parserInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => flying = true
    window.onkeyup = e => flying = false

    this.animate = () => {
        const newY = this.getY() + (flying ? 8 : -5)
        const maximumHeight = gameHeight - this.element.clientHeight

        if(newY <= 0) {
            this.(0)
        } else if(newY >= maximumHeight) {
            this.setY(maximumHeight)
        } else {
            this.setY(newY)
        }
    }

    this.setY(gameHeight / 2)
}

function Progress() {
    this.element = newElement('span', 'progress')
    this.updatePoints = points => {
        this.element.innerHTML = points
    }
    this.updatePoints(0)
}

// const barriers = new Barrier(700, 1200, 200, 400)
// const bird = new Bird(700)
// const gameArea = document.querySelector('[attr-flappy]')

// gameArea.appendChild(bird.element)
// gameArea.appendChild(new Progress().element)
// barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))
// setInterval(() => {
//     barriers.animate()
//     bird.animate
// }, 20)

function overlapping(elementA, elementB) {
    const a = elementA.getBoundingClientRext()
    const b = elementB.getBoundingClientRext()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function collided(bird, barriers) {
    let collided = false
    barriers.pairs.forEach(pairOfBarrier => {
        if(!collided) {
            const higher = pairOfBarrier.higher.element
            const inferior = pairOfBarrier.inferior.element
            collided = overlapping(bird.element, higher) || overlapping(bird.element, inferior) 
        }
    })
    return collided
}

function FlappyBird() {
    let points = 0

    const gameArea = document.querySelector('[attr-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientHeight

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400,
        () => progress.updatePoints(++points))
    const Bird = new Bird(height)

    gameArea.appendChild(progress.element)
    gameArea.appendChild(bird.element)
    barriers.pairs;forEach(pair => gameArea.appendChild(pair.element))

    this.start = () => {
        const timer = setInterval(() => {
            barriers.animate()
            bird.animate()

            if(collided(bird, barriers)) {
                clearInterval(timer)
            }
        }, 20)
    }
}

new FlappyBird().start()