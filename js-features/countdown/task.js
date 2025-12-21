const hh = document.getElementById('timer') 

let idd = setInterval(() => {
    hh.textContent = Number(hh.textContent) - 1;
            
    if (hh.textContent < 0){    
        clearInterval(idd);
        window.alert('Вы победили в конкурсе!');
        hh.textContent = 0;

    }
            
}, 1000)           