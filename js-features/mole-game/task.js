const d = document.getElementById('dead')
const l = document.getElementById('lost')

find = () => {
    let z = document.querySelectorAll('[id^="hole"]')
    for (let i = 0; i < z.length; i++) {
        if (z[i].classList.value == 'hole hole_has-mole'){
            return { first:i, second:z }
        }
    }
}

vic = () => { d.textContent = Number(d.textContent)+1 }

prog = () => { l.textContent = Number(l.textContent)+1 }

restart = () => {
    d.textContent = 0,
    l.textContent = 0
}

finVin = () => {
    alert('Вы победили!'),
    restart()
}

end = () => {
    alert('Вы проиграли!'),
    restart()
} 

analiz = (m) => {
    if (Number(l.textContent) < 4) {
        if ( m == find().first ) {
            vic()
            if (Number(d.textContent) == 10) { finVin() }
        } else { prog() }
    } else { end() }
}

let a = find().second

for ( let i = 0; i < a.length; i++ ) { a[i].onclick = () => { analiz(i) }}