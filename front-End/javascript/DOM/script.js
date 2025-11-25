var button = document.querySelector("button")
var box = document.querySelector("#box")

button.addEventListener('click', ()=> {
  var a = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  var c = Math.floor(Math.random() * 256)
  box.style.backgroundColor = `rgb(${a},${b},${c})`
  console.log(a)
})