// git credential-manager-core erase

// if, else, else if
// truthy (verdadero), falsy (falso)
// Truthy: String, Number, True, [], {}
// Falsy: 0

const suma = 1 + 2 + 3
const resta = 3 - 2 - 1


console.log("suma es: ", suma);
console.log("resta es: ", resta);

const nombre = "Gonzalo"
const nombre2 = "Nath"

console.log('nombre es:', nombre)
console.log('nombre2 es:', nombre2)


if (suma > resta) {
    console.log('Hola, estoy dentro del bloque if')

} else if (suma == 6) {
    console.log('Hola, estoy dentro del else if'); 

} else {
    console.log('Hola, estoy dentro del else') 
}



if (suma !== 10) console.log('Negación de igualdad');

if (!!suma) console.log("Negación de variables"); // !!se usa para un booleano true    || ! negacion false

