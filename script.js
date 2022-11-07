let btn = document.getElementById("push");
let colors = [
  "gold",
  "grey",
  "coral",
  "cyan",
  "pink",
  "orangered",
  "olive",
  "brown",
  "springgreen",
];
let ranColor = colors[Math.floor(Math.random() * colors.length)];
console.log(ranColor);
// let childNum = [  '1', '2', '3', '4', '5', '6']
// let ran = childNum[Math.floor(Math.random()*childNum.length)]
// console.log(ran)

let count = 1;

btn.addEventListener("click", () => {
  setInterval(() => {
    document.getElementsByClassName(
      `child${count}`
    )[0].style.backgroundColor = `${ranColor}`;
    count++;
    if (count > 6) {
      clearInterval();
      setTimeout(reset, 1000);
    }
  }, 500);
});

function reset() {
  document.querySelector("h1").innerHTML = "";
  let resetBtn = document
    .getElementsByClassName("reset")[0]
    .classList.remove("hide");
  btn.style.display = "none";
}

function reload() {
    window.location.reload()
}
