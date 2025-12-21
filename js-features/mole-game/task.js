const d = document.getElementById('dead')
const l = document.getElementById('lost')

const one = document.getElementById('hole1')
const two = document.getElementById('hole2')
const three = document.getElementById('hole3')
const four = document.getElementById('hole4')
const five = document.getElementById('hole5')
const six = document.getElementById('hole6')
const seven = document.getElementById('hole7')
const eight = document.getElementById('hole8')
const nine = document.getElementById('hole9')

function find() {
    let z = document.querySelectorAll('[id^="hole"]')
    for (let i = 0; i < z.length; i++) {
        if (z[i].classList.value=='hole hole_has-mole'){
            return i
        }
    }
}

function vic() {d.textContent = Number(d.textContent)+1}

function prog() {l.textContent = Number(l.textContent)+1}

function end() {
    alert('Вы проиграли!'),
    d.textContent = 0,
    l.textContent = 0
} 

function analiz(m) {
    if (Number(l.textContent)<5) {
        if (m == find()) {
            vic()
        } else {prog()}
    } else {end()}
}

one.onclick = () => {analiz(0)}
two.onclick = () => {analiz(1)}
three.onclick = () => {analiz(2)}
four.onclick = () => {analiz(3)}
five.onclick = () => {analiz(4)}
six.onclick = () => {analiz(5)}
seven.onclick = () => {analiz(6)}
eight.onclick = () => {analiz(7)}
nine.onclick = () => {analiz(8)}
