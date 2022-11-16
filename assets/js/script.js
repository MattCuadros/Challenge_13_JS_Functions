const ele = document.getElementById("ele1");
function pintar(colorElegido = "green") {
  ele.style.backgroundColor = colorElegido;
}
pintar();

ele.addEventListener("click", pintar => {
  ele.style.backgroundColor = "yellow";
});
