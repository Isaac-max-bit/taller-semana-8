alert('Hola Profe, aquí está el taller.');

function ejercicio1() {
    let arreglo = [1, 2, 3, 4, 5];
    let duplicados = arreglo.map(valor => valor * 2);
    alert(duplicados);
}

function ejercicio2() {
    let grados = [0, 10, 20, 30, 40];
    let temp = grados.map(celsius => celsius * (9 / 5) + 32);
    alert(temp);
}

function ejercicio3() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numeros = num.filter(n => n % 2 !== 0);
    alert(numeros);
}

function ejercicio4() {
    let datos = [10, 25, 32, 8, 5, 42, 17];
    let mayoresQue20 = datos.filter(num => num > 20);
    alert(mayoresQue20);
}

function ejercicio5() {
    let number = [15, 25, 35, 45, 55, 65];
    let numberNuevo = number.find(num => num > 50);
    alert(numberNuevo);
}

function ejercicio6() {
    let nombre = ['ana', 'beto', 'carla'];
    let MayusNombre = nombre.map(n => n.toUpperCase());
    alert(MayusNombre);
}

function ejercicio7() {
    let colores = ['rojo', 'azul', 'verde'];
    let colorAsterisco = colores.map(color => color + '*');
    alert(colorAsterisco);
}

function ejercicio8() {
    let words = ['casa', 'arbol', 'estrella', 'sol'];
    let newWords = words.filter(word => word.length < 5);
    alert(newWords);
}

function ejercicio9() {
    let negativo = [-5, 10, -2, 4, 0, -1];
    let numerosNegativos = negativo.filter(numero => numero < 0);
    alert(numerosNegativos);
}

function ejercicio10() {
    let lista = ['luna', 'estrella', 'cometa', 'galaxia'];
    let nombreConMasDe5Letras = lista.find(nombre => nombre.length > 5);
    alert(nombreConMasDe5Letras);
}

function ejercicio11() {
    let Mul = ['1', '2', '3', '4', '5'];
    let numerosMultiplicados = Mul.map(num => parseInt(num) * 3);
    alert(numerosMultiplicados);
}

function ejercicio12() {
    let zoo = ['elefante', 'perro', 'espejo', 'gato'];
    let palabrasConE = zoo.filter(palabra => palabra.startsWith('e'));
    alert(palabrasConE);
}

function ejercicio13() {
    let codigo = ['5', '16', '20', '33', '40'];
    let DivisiblePor4 = codigo.find(num => num % 4 === 0);
    alert(DivisiblePor4);
}

function ejercicio14() {
    let redondear = [1.2, 2.5, 3.8, 4.1];
    let numerosRedondeados = redondear.map(num => Math.round(num));
    alert(numerosRedondeados);
}

function ejercicio15() {
    let mayor = ['45', '60', '30', '80', '100'];
    let numeroMayor = mayor.filter(num => parseInt(num) >= 50);
    alert(numeroMayor);
}

function ejercicio16() {
    let palabras = ['sol', 'luna', 'estrella', 'cometa'];
    let resultado = palabras.find(p => p.includes('a'));
    alert(resultado);
}

function ejercicio17() {
    let Suma = ['5', '10', '15', '20'];
    let total = Suma.map(num => Number(num) + 5);
    alert(total);
}

function ejercicio18() {
    let nombre = ['CASA', 'ARBOL', 'SOL'];
    let MayusNombre = nombre.map(n => n.toLowerCase());
    alert(MayusNombre);
}

function ejercicio19() {
    let pares = ['12', '3', '5', '7', '10', '20', '25'];
    let ParesNumber = pares.filter(num => Number(num) % 2 === 0);
    alert(ParesNumber);
}

function ejercicio20() {
    let negativo = ['5', '10', '-3', '2', '-8', '7'];
    let NumNegativo = negativo.find(num => Number(num) < 0);
    alert(NumNegativo);
}

function ejercicio21() {
    let div = ['10', '20', '30', '40'];
    let NewDiv = div.map(num => Number(num) / 2);
    alert(NewDiv);
}

function ejercicio22() {
    let letras = ['camino', 'casa', 'edificio', 'ciudad'];
    let AnswerLetras = letras.filter(palabra => palabra.length > 6);
    alert(AnswerLetras);
}

function ejercicio23() {
    let numero = ['4', '9', '13', '22', '31'];
    let ImparNumero = numero.find(num => Number(num) > 10 && Number(num) % 2 !== 0);
    alert(ImparNumero);
}

function ejercicio24() {
    let element = ['manzana', 'naranja', 'pera'];
    let NewElement = element.map(fruta => fruta + " fruta");
    alert(NewElement);
}

function ejercicio25() {
    let MAyorNumber = [10, 20, 30, 40, 50, 60];
    let promedio = MAyorNumber.reduce((acc, num) => acc + num, 0) / MAyorNumber.length;
    let mayoresQuePromedio = MAyorNumber.filter(num => num > promedio);
    alert(mayoresQuePromedio);
}

function menu() {
    while (true) {
        var opcion = parseInt(prompt("Selecciona el ejercicio que deseas ejecutar (1-25) o 0 para salir:"));

        if (opcion === 0) {
            alert("Saliendo del programa...");
            break;
        }

        if (isNaN(opcion) || opcion < 0 || opcion > 25) {
            alert('Opción no válida, por favor selecciona un número entre 0 y 25.');
            continue; // Vuelve a pedir una opción válida
        }

        switch(opcion) {
            case 1: ejercicio1(); break;
            case 2: ejercicio2(); break;
            case 3: ejercicio3(); break;
            case 4: ejercicio4(); break;
            case 5: ejercicio5(); break;
            case 6: ejercicio6(); break;
            case 7: ejercicio7(); break;    
            case 8: ejercicio8(); break;    
            case 9: ejercicio9(); break;    
            case 10: ejercicio10(); break;  
            case 11: ejercicio11(); break;   
            case 12: ejercicio12(); break;
            case 13: ejercicio13(); break;
            case 14: ejercicio14(); break;
            case 15: ejercicio15(); break;
            case 16: ejercicio16(); break;    
            case 17: ejercicio17(); break;    
            case 18: ejercicio18(); break;    
            case 19: ejercicio19(); break;    
            case 20: ejercicio20(); break;    
            case 21: ejercicio21(); break;    
            case 22: ejercicio22(); break;    
            case 23: ejercicio23(); break;    
            case 24: ejercicio24(); break;    
            case 25: ejercicio25(); break;    
            default: alert('Opción no válida, por favor selecciona un número entre 1 y 25.');
        }
    }
}

// Llama a la función menu
menu();
