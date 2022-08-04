
const h1 = document.querySelector("h1")
const form = document.querySelector('#form')
const input1 = document.querySelector("#Calculo1")
const input2 = document.querySelector("#Calculo2")
const btn = document.querySelector("#btnCalcular")
const pResul = document.querySelector("#result")

//Escuchador de eventos
//Cada vez que pase ejecuta el código JS que 
//yo te digo. Es un metodo, tenemo que enviarle dos argumentos
//btn.addEvenListener('evento','codigo JS');
form.addEventListener('submit', SumarInputValues);

//Lo hace como una concatenación
function SumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResul.innerText = "Resultado: " + sumaInputs;
}





//El formulario interpreta que el ultimo
//button es de submit, es decir, para
//enviar el formulario. 