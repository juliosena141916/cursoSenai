//Checar idade com habilitação
function dirigir(idade, habilitacao){
    return idade >= 18 && habilitacao
}

console.log(dirigir(17, true)); // false
console.log(dirigir(30, true));// true

//Exercicio de fixação
let a = true;
let b = true;

console.log(a || b);
console.log(b || false);

//Exercicio de fixação
function fimdesemana(dia){
    return dia == "sábado" || dia == "domingo";
}

console.log(fimdesemana("sábado")); // true
console.log(fimdesemana("domingo")); // true

//Exercicio de fixação
function naoAdulto(idade){
    return ! (idade >= 18);
}

console.log(naoAdulto(20)); // false
console.log(naoAdulto(16)); // true