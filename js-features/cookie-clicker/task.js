let z = new Date()

const h = document.getElementById('clicker__counter')  
        
const img = document.getElementById('cookie')
const fric = document.getElementById('clicker__speed')
        
img.onclick = () => {
            
    if (Number(h.textContent)%2 == 0) {
        img.width -= 20
        img.height -= 20
                
        } else {
            img.width += 20
            img.height += 20
                
        }
        h.textContent = Number(h.textContent) + 1;   
        let gh = new Date()
        console.log((gh-z)/1000)  
        let time = gh - z   
        fric.textContent = (Number(h.textContent)/(time/1000)).toFixed(2);   
            
}