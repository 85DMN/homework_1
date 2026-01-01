const h = document.getElementById('clicker__counter')  
        
const img = document.getElementById('cookie')
const fric = document.getElementById('clicker__speed')

let startTime = new Date().getTime();
let firstTime = 0;
        
img.onclick = () => {
            
    if ( Number(h.textContent)%2 == 0 ) {
        img.width -= 20;
        img.height -= 20;
                
        } else {
            img.width += 20;
            img.height += 20;                
        }

        h.textContent = Number(h.textContent) + 1;  

        firstTime = new Date().getTime();
        fric.textContent = Number(1/((firstTime - startTime)/1000)).toFixed(2);
        startTime = firstTime;          
}