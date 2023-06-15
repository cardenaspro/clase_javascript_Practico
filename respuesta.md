Respuestas al Test de JavaScript
Recuerda que estas respuestas (o al menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D

# $ Variables y operaciones $

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
  ¿Cuál operador me permite sumar o concatenar?
EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

## 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
``` js
Nombre: string
Apellido: string
Nombre de usuario en Platzi: strig (@fulanito)
Edad: number
Correo electrónico: string (lala@gmail.com)
Mayor de edad: boolean
Dinero ahorrado: number
Deudas: number
```

## 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
``` js
let nombre = 'Jerson';
let apellido = 'Cardenas Herrera';
let username = 'jscardenas';
let edad = 28;
let mail = 'jerson@agmail.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
``` 

## 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
``` js
Nombre completo (nombre y apellido)

Dinero real (dinero ahorrado menos deudas)
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
``` 

# $ Funciones $

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?

Las funciones nos permiten encapsular(guardar) bloques de codigo para reutilizarlos y ejecutarlos en el futuro.

Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida

¿Cuándo me sirve usar una función en mi código?

Cuando tenemos variables o bloques de codigo muy parecidos que podrian ser parametro y argumentos, que podemos encapsular para reutilizar mas de una vez en el futuro.

¿Cuál es la diferencia entre parámetros y argumentos de una función?
Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

## 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
``` js
let name = "Juan David";
let lastname = "Castro Gallego";
let completeName = name + lastname;
let nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function nombreCompleto(name, lastName) {
    return name + " " + lastName    
}

function saludo(name,lastname, username) {
    let completeName = nombreCompleto(name, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
}
```

# $ Condicionales $

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?

Son la forma en que ejecutamos un bloque de codigo u otro dependepiendo de alguna condicion o validacion.

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

If (else y else iff), switch
El condicional if (nos permite hacer validaciones distintas variables)
En el switch todos los casos se comparan con la misma variable.

¿Puedo combinar funciones y condicionales?

Si. Las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales.

## 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
**********************************************************************************************
if (tipoDeSuscripcion == 'free') {
    console.log("solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic') {
    console.log("puedes tomar casi todos los cursos de platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert') {
    console.log("puedes tomar casi todos los cursos de platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertPlus') {
    console.log("tu y alguien mas pueden tomar todos los cursos de platzi durante un año");
}
```
## 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


# $ Ciclos $

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
La forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

¿Qué tipos de ciclos existen en JavaScript?
while, do while y for.

¿Qué es un ciclo infinito y por qué es un problema?
Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (e.j. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

¿Puedo mezclar ciclos y condicionales?
Sí, aunque los ciclos son una especie de condionales, nada nos impide agregar más condionales dentro del ciclo.

## 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```js

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

********************************************

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
```js
let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
```


# $ Listas $

## 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
es una lista de elementos
```js
const array = [1,"jaja", true, false];
```


¿Qué es un objeto?
Es una lista de elementos
```js
const obj = {
    nombre: 'Jerson',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales']
};
```

¿Cuándo es mejor usar objetos o arrays?
Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas(la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si los array pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

## 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js
function imprimirPrimerElemento(arr) {
    console.log(arr[0])
}

imprimirPrimerElemento(["Juanita","Roberto","Natalia"])
// Juanita
```

## 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElemento(["Juanita","Roberto","Natalia"])
/*
 Juanita
 Roberto
 Natalia
 */
```

## 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
```js
function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjeto(obj)
/*
 Jerson
 3
 (2) ['Pollo frito', 'vegetales']
 */
```