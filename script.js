let btn = document.querySelector('button')
let colors = ['gold', 'grey', 'coral', 'cyan', 'pink', 'orangered', 'olive', 'brown', 'springgreen']
let ranColor = colors[Math.floor(Math.random()* colors.length)]
console.log(ranColor)

let count = 1;

 btn.addEventListener('click', ()=> {
    setInterval(()=> {
     document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
        count++
        if(count >6){
            clearInterval()
            setTimeout(reset, 1000)
        }
    }, 500)   
})

function reset() {
    window.location.reload()
}