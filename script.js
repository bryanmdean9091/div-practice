let btn = document.querySelector('button')
let colors = ['gold', 'grey', 'coral', 'cyan', 'pink', 'orangered']
let ranColor = colors[Math.floor(Math.random()* colors.length)]
console.log(ranColor)
let childNum = [  '1', '2', '3', '4', '5', '6']
let ran = childNum[Math.floor(Math.random()*childNum.length)]
console.log(ran)

// for (let i = 0; i < 6; i++

let count = 0;



 btn.addEventListener('click', ()=> {
    count++
    document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    
    if (count > 5){
        window.location.reload()
    }
})