alert('Hola Profe, aquí está el taller.');

function menu() {
    while (true) {
        var opcion = parseInt(prompt("Selecciona el ejercicio que deseas ejecutar (1-11) o 0 para salir:"));

        if (opcion === 0) {
            console.log("Saliendo del programa...");
            break;
        }

        switch(opcion) {
            case 1:
                ejercicio1();
                break;
            case 2:
                ejercicio2();
                break;
            case 3:
                ejercicio3();
                break;
            case 4:
                ejercicio4();
                break;
            case 5:
                ejercicio5();
                break;
            case 6:
                ejercicio6();
                break;
            case 7: 
                ejercicio7();
                break;    
            case 8: 
                console.log(ejercicio8());
                break;    
            case 9: 
                console.log(ejercicio9());
                break;    
            case 10: 
                console.log(ejercicio10());
                break;  
            case 11: 
                console.log(ejercicio11());
                break;   

            case 12: 
                console.log(ejercicio12());
                break;

            case 13: 
                console.log(ejercicio13());
                break;

            case 14: 
                console.log(ejercicio14());
                break;

            case 15: 
                console.log(ejercicio15());
                break;

            
            default:
                console.log('Opción no válida, por favor selecciona un número entre 1 y 11.');
        }
    }
}

// Ejercicio 1
function ejercicio1() {
    let arreglo = [1, 2, 3, 4, 5];
    let duplicados = arreglo.map(valor => valor * 2);
    console.log(duplicados);
}

// Ejercicio 2
function ejercicio2() {
    let grados = [0, 10, 20, 30, 40];
    let temp = grados.map(celsius => celsius * (9 / 5) + 32);
    console.log(temp);
}

// Ejercicio 3
function ejercicio3() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numeros = num.filter(n => n % 2 !== 0);
    console.log(numeros);
}

// Ejercicio 4
function ejercicio4() {
    let datos = [10, 25, 32, 8, 5, 42, 17];
    let mayoresQue20 = datos.filter(num => num > 20);
    console.log(mayoresQue20);
}

// Ejercicio 5
function ejercicio5() {
    let number = [15, 25, 35, 45, 55, 65];
    let numberNuevo = number.find(num => num > 50);
    console.log(numberNuevo);
}

// Ejercicio 6
function ejercicio6() {
    let nombre = ['ana', 'beto', 'carla'];
    let MayusNombre = nombre.map(n => n.toUpperCase());
    console.log(MayusNombre);
}

// Ejercicio 7
function ejercicio7() {
    let colores = ['rojo', 'azul', 'verde'];
    let colorAsterisco = colores.map(color => color + '*');
    console.log(colorAsterisco);
}

// Ejercicio 8
function ejercicio8() {
    let words = ['casa', 'arbol', 'estrella', 'sol'];
    let newWords = words.filter(word => word.length < 5);
    return newWords;
}

// Ejercicio 9
function ejercicio9() {
    let negativo = [-5, 10, -2, 4, 0, -1];
    let numerosNegativos = negativo.filter(numero => numero < 0);
    return numerosNegativos;
}

// Ejercicio 10
function ejercicio10() {
    let lista = ['luna', 'estrella', 'cometa', 'galaxia'];
    let nombreConMasDe5Letras = lista.find(nombre => nombre.length > 5);
    return nombreConMasDe5Letras;
}

// Ejercicio 11
function ejercicio11() {
    let Mul = ['1', '2', '3', '4', '5'];
    let numerosMultiplicados = Mul.map(num => parseInt(num) * 3); // Convertir a número
    return numerosMultiplicados;
}

// Ejercicio 12

function ejercicio12(){
    let zoo = ['elefante','perro','espejo','gato']
    let palabrasConE = zoo.filter(palabra => palabra.startsWith('e'));
    
    return palabrasConE;
}

console.log(ejercicio12());


//  Ejercicio 13

function ejercicio13(){
    let codigo = ['5','16','20','33','40']

    let DivisiblePor4 = codigo.find(num => num % 4 === 0);

    return DivisiblePor4; 

}

console.log(ejercicio13()); 

// Ejercicio 14 

function ejercicio14() {
    let redondear = [1.2, 2.5, 3.8, 4.1]; // Asegúrate de que sean números

    let numerosRedondeados = redondear.map(num => Math.round(num));

    return numerosRedondeados;
}

console.log(ejercicio14()); // [1, 3, 4, 4]


// Ejercicio 15 

function ejercicio15() {
    let mayor = ['45', '60', '30', '80', '100'];

    let numeroMayor = mayor.filter(num => parseInt(num) >= 50); // Convertir a número y filtrar

    return numeroMayor;
}

console.log(ejercicio15()); // ['60', '80', '100']

// Llama a la función menu
menu();
