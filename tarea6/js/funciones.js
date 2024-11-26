// Genera Fibonacci hasta 1000
function generateFibonacci() {
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= 1000) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
}

// Filtrar numeros pares
function filterEven(numbers) {
    return numbers.filter(n => n % 2 === 0);
}

// Filtrar numeros impares
function filterOdd(numbers) {
    return numbers.filter(n => n % 2 !== 0);
}

// string a mayusculas
function toUpperCaseArray(array) {
    return array.map(item => item.toUpperCase());
}

// pokemones tipo fuego
function filterFirePokemon(pokemonArray) {
    return pokemonArray
        .filter(pokemon => pokemon.tipo === 'Fuego')
        .map(pokemon => pokemon.nombre);
}

// Datos
const fibonacciNumbers = generateFibonacci();
const pokemonStrings = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
const pokemonObjects = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' },
];

// Mostrar resultados en los tabs
document.getElementById('fibonacci-tab-pane').textContent = fibonacciNumbers.join(', ');
document.getElementById('pares-tab-pane').textContent = filterEven(fibonacciNumbers).join(', ');
document.getElementById('impares-tab-pane').textContent = filterOdd(fibonacciNumbers).join(', ');
document.getElementById('array-tab-pane').textContent = toUpperCaseArray(pokemonStrings).join(', ');
document.getElementById('fuego-tab-pane').textContent = filterFirePokemon(pokemonObjects).join(', ');