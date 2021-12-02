
const inputEl = document.querySelector(".valor1");
const inputEl2 = document.querySelector(".valor2");
const formEl = document.querySelector(".form");
const btnSumar = document.querySelector(".sumar");
const btnRestar = document.querySelector(".restar");
const btnMultiplicar = document.querySelector(".multiplicar");
const btnDividir = document.querySelector(".dividir");
const btnReset = document.querySelector(".reset");
const textoResultado = document.querySelector(".resultado");

//preventDefault

function prevDefault(event){
    event.prevDefault;
}

formEl.addEventListener("submit", prevDefault);


//sumar
function sumar() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
    console.log(value1);
    console.log(value2);
    textoResultado.innerHTML = value1 + value2;
}


btnSumar.addEventListener("click", sumar);

//restar
function restar() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
    textoResultado.innerHTML = value1 - value2;
}

btnRestar.addEventListener("click", restar);

//multiplicar
function multiplicar() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
    textoResultado.innerHTML = value1 * value2;
}

btnMultiplicar.addEventListener("click", multiplicar);

//dividir
function dividir() {
    const value1 = parseInt(inputEl.value);
    const value2 = parseInt(inputEl2.value);
    textoResultado.innerHTML = value1 / value2;
}

btnDividir.addEventListener("click", dividir);

//reset
function reset() {
   
    inputEl.value = "";
    inputEl2.value= "";
    textoResultado.innerHTML= "";
}

btnReset.addEventListener("click", reset);

