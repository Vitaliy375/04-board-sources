const board = document.querySelector('#board')
const colors = ['#339999', '#FF66CC', '#3366FF', '#FF9900', '#339966', '#00FFFF', '#00FFCC', '#FF0099', '#FF0000', '#0000FF', '#009933', '#FFFFFF', '#660066', '#CC00FF']
const SQUARES_NAMBER = 1000

for (let i = 0; i < SQUARES_NAMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}
function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

