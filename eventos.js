const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnCalcular2');
const result = document.querySelector('#result')

function btnOnclick(){
   const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
   result.innerText = "Resultado: " + sumaInputs;
}

function btnOnclick2(){
    const restaInputs = parseInt(input1.value) - parseInt(input2.value);
    result.innerText = "Resultado: " + restaInputs;
 }