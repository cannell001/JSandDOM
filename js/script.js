// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// ------------------------ EASY WAY ------------------------
// let username = window.prompt("What's your username?")

// console.log(username)

// -------------------- PROFESSIONAL WAY --------------------
// let username

// document.getElementById('mySubmit').onclick = function () {
//     username = document.getElementById('myText').value
//     document.getElementById('myH1').textContent = `Hello ${username}`
// }

const mySubmit = document.getElementById('mySubmit')
const myH1 = document.getElementById('myH1')
const myText = document.getElementById('myText')

// mySubmit.addEventListener('click', function () {
//     const username = myText('myText').value
//     myH1.textContent = `Hello ${username}`
// })

mySubmit.addEventListener('click', () => {
    const username = myText.value
    myH1.textContent = `Hello ${username}`
})
