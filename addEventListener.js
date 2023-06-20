const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnCalcular2');
const result = document.querySelector('#result')

// form.addEventListener('submit', sumarInputValues);
// // btn2.addEventListener('click', btnOnclick2)

// function sumarInputValues(event) {
//     // console.log({event});
//     // Evitar que la pagina se recargue constantemente
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     result.innerText = "Resultado: " + sumaInputs;
// }

// // function btnOnclick2() {
// //      const restaInputs = parseInt(input1.value) - parseInt(input2.value);
// //     result.innerText = "Resultado: " + restaInputs;
// // }

btn.addEventListener('click', btnOnclick)

function btnOnclick() {
    // console.log({event});
    // Evitar que la pagina se recargue constantemente
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
}

btn2.addEventListener('click', btnOnclick2)

function btnOnclick2() {
    // console.log({event});
    // Evitar que la pagina se recargue constantemente
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) - parseInt(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
}