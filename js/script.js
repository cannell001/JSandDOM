document.getElementById('createSquare').addEventListener('click', function () {
    const square = document.createElement('div')
    square.id = 'square'
    square.style.width = '400px'
    square.style.height = '400px'
    square.style.backgroundColor = '#f0f0f0' // Initial color
    document.body.appendChild(square)

    document.getElementById('colorInput').disabled = false
    document.getElementById('colorSquare').disabled = false
})

// document.getElementById('colorSquare').addEventListener('click', function () {
//     const square = document.getElementById('square')
//     if (square) {
//         square.style.backgroundColor = 'red'
//     }

document.getElementById('colorSquare').addEventListener('click', function () {
    const color = document.getElementById('colorInput').value
    const square = document.getElementById('square')
    if (square) {
        square.style.backgroundColor = color
    }
})
