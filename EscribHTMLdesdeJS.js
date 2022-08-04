//Manipulación del DOM desde JS
console.log("Hello, world")

//Son objetos con métodos
//Son para seleccionar los elementos que tenemos
//en el html que está ejecutando a nuesto
//código JS
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log(input.value);

//Esuchar por medio de eventos
//Cuando el elemento html esta dentro de un objeto
//nos deja ver mas propiedades, es la magia de JS
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito <br> Feo"
h1.innerText = "Patito <br> Feo"

console.log(h1.getAttribute("class"))
//h1.setAttribute para modificar la clase

h1.setAttribute("class", "rojo")

h1.classList.add("rojo");
h1.classList.remove("verde");

//h1.classList.toggle("verde");
//h1.classList.contains("verde");

//Ya escribimos por defecto, modificar HTMl
//desde JS
input.value = "456"

const img = document.createElement("img")
img.setAttribute("src", "https://cutt.ly/9ZQXUHl");
console.log(img)

pid.append(img);




