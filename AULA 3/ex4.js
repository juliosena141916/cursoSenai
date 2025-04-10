// Desafio 1
// Criar um algoritmo para separar valores pares e impares

let num = 2;
if(num % 2 == 0){
    console.log('O número é par')
} else {
    console.log('O número é impar')
}

// Desafio 2
// Criar um algoritmo para calcular valores com as expressões soma, subtração, multiplicação e divisão

let switch1 = 4;
let num1 = 10;
let num2 = 2;

if(switch1 == 1){
    console.log('O resultado da soma é: ' + (num1 + num2)) 
} else if (switch1 == 2){
    console.log('O resultado da subtração é: ' + (num1 - num2)) 
} else if (switch1 == 3){
    console.log('O resultado da multiplicação é: ' + (num1 * num2)) 
} else if (switch1 == 4){
    console.log('O resultado da divisão é: ' + (num1 / num2)) 
}

let edu1 = 10;
let edu2 = 20;
let soma = edu1 + edu2;

let equacao = 'soma';
if(equacao == 'soma'){
    console.log('A soma foi ' + soma)
}

let a = 10;
let b = 5;

let haysoma = a + b;
let haysub = a - b;
let haymult = a * b;
let haydiv = a / b;

console.log('Resultado soma ' + haysoma)
console.log('Resultado subtração ' + haysub)
console.log('Resultado multiplicação ' + haymult)
console.log('Resultado divisão ' + haydiv)