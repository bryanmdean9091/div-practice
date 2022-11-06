let btn = document.querySelector('button')
let colors = ['gold', 'grey', 'coral', 'cyan', 'pink', 'orangered']
let ranColor = colors[Math.floor(Math.random()* colors.length)]
console.log(ranColor)
let childNum = [  '1', '2', '3', '4', '5', '6']
let ran = childNum[Math.floor(Math.random()*childNum.length)]
console.log(ran)

let count = 1;

 btn.addEventListener('click', ()=> {
    setTimeout(()=> {
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 100
    )
    setTimeout(()=> {
        count++;
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 1000
    )
    setTimeout(()=> {
        count++;
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 1500
    )
    setTimeout(()=> {
        count++;
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 1800
    )
    setTimeout(()=> {
        count++;
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 2000
    )
    setTimeout(()=> {
        count++;
        document.getElementsByClassName(`child${count}`)[0].style.backgroundColor = `${ranColor}`
    }, 2300
    )
    setTimeout(()=> {
        count++;
        window.location.reload()
    }, 4000
    )  
})