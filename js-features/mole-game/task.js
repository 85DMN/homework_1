const d = document.getElementById('dead')
const l = document.getElementById('lost')

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

var a = document.querySelectorAll('[id^="hole"]');

for (let i = 0; i < a.length; i++) {a[i].onclick = () => {analiz(i)}}