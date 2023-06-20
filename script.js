const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

// Para modificar el texto del h1 con innerHTML
h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')
// h1.innerText = "Patito <br> Feo" reconoce como string
h1.classList.add('rojo');
h1.classList.remove('verde');

// console.log(document.createElement('span'));     Llama un span

// Creamos elemento img:
const img = document.createElement('img');
// Pusimos los atributos a esa img:
img.setAttribute('src','https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/01/Tron.jpeg?fit=2500%2C1406&quality=50&strip=all&ssl=1')
console.log(img);
// Insertamos esa imagen dentro de un contenedor
pid.innerHTML = "";
pid.appendChild(img)