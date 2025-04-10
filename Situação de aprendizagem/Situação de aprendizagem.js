//Operdor E (&&)
let a = true;
let b = false;

console.log(a && b);// false
console.log(a && true);// true
console.log(a && false);// false
console.log(a && (b || true));// true

//Operador OU (||)
let x = false;
let y = true;

console.log(x || y);// true
console.log(x || false);// false
console.log(y || false);// true
console.log(x || (y && false));// false

//Operador NOT (!)
let z = true;

console.log(!z);// false
console.log(!false);// true
console.log(!(z && false));// true
console.log(!z || false);// false

//Combinação de operadores lógicos 
let c = true;
let d = false;
let e = true;

console.log(c && d || e);// true
console.log((c || d) && !e); // false
console.log(!(c && d) || (e && !d)); // true
console.log(c && (d || e) && !d); // true

//Operadores numéricos
let ab = 10;
let bc = 20;
let cd = 15;

console.log(ab > bc);// false
console.log(ab < bc) && (ab < cd);// true
console.log(!(ab > bc)) || (cd < bc);// true
console.log(!((ab > bc) && cd)) && ((cd < ab) || bc);// true

//DESAFIOS 
    //Algoritmo para checar se um número é par
    function par(numero){
        return numero % 2 == 0;
    }   
    
    console.log("O número é par?: " + par(5));
    console.log("O número é par?: " + par(10));

    //Algoritmo para vacinação para Covid-19 acima de 60 anos
    function vacinacao(idade, vacina){
        return idade >= 60 && vacina;
    }

    console.log(vacinacao(60, true));
    console.log(vacinacao(75, false));
    console.log(vacinacao(50, true));

    //Algoritmo para checar se um veículo é elétrico ou flex
    function veiculo(tipo){
        return tipo == "elétrico" || tipo == "flex";
    }
    
console.log(veiculo("elétrico"));
console.log(veiculo("flex"));