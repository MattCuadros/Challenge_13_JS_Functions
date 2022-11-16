let colorElegido="none";
const boxOne=document.querySelector("#boxOne");
const boxTwo=document.querySelector("#boxTwo");
const boxThree=document.querySelector("#boxThree");
const boxFour=document.querySelector("#boxFour");
const colorSeleccionado=document.querySelector("#colorSeleccionado");

/* Evento Pulsar Tecla - Keydown event */
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyA") {
    colorElegido = "blue";
  } else if (event.code === "KeyS") {
    colorElegido = "gray";
  } else if (event.code === "KeyD") {
    colorElegido = "pink";
  }
  console.log(colorElegido);
  colorSeleccion();
});

/* Usando el Hoisting - Using Hoisting*/
function colorSeleccion(){
    colorSeleccionado.style.backgroundColor=colorElegido;    
}

/* Usando función arrow de una línea - Using oneline arrow function*/
boxOne.addEventListener("click", ()=> (boxOne.style.backgroundColor=colorElegido));
boxTwo.addEventListener("click", ()=> (boxTwo.style.backgroundColor=colorElegido));
boxThree.addEventListener("click", ()=> (boxThree.style.backgroundColor=colorElegido));
boxFour.addEventListener("click", ()=> (boxFour.style.backgroundColor=colorElegido));