var a = document.querySelector("button")
const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  "It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
  "Dream big and dare to fail.",
  "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
  "Start where you are. Use what you have. Do what you can.",
  "Opportunities don't happen, you create them.",
  "Work hard in silence, let your success make the noise."
];

a.addEventListener("click", () => {
  var x = Math.floor(Math.random() * 80);
  var y = Math.floor(Math.random() * 80);
  var num = Math.floor(Math.random() * quotes.length);
  var deg = Math.floor(Math.random() * 360);
  // console.log(num);


  var main = document.querySelector("body")
  var h1 = document.createElement("h1")

  h1.style.position = "absolute"
  h1.style.top = x + "%"
  h1.style.left = y + "%"
  h1.style.rotate = deg + 'deg'


  h1.innerHTML = quotes[num]
  main.appendChild(h1)
  // console.log(h1)

})