//CRIAR UM ALGORITMO QUE IMPRIMA 11 VEZES "OLA MUNDO"
let i = 1;
for(let i = 1; i <= 11; i++){
    console.log("OLÁ MUNDO")
}

//CRIAR UMA TABUADA
let numero = 5;
for(let j = 1; j <= 10; j++){
    console.log(numero * j)
}

//SOMA DOS NÚMEROS IMPARAES DE 1 A 100
let soma = 0;
for(let k = 1; k <= 100; k++){
    if(k % 2 === 1){
        soma += k
    }
}
console.log(soma)

//PROGRAMA QUE FAÇA UMA CONTAGEM REGRESSIVA DE 10 A 1 COM A MENSSAGEM DE "FELIZ ANO NOVO"
for(let l = 10; l > 0; l--){
    console.log(l);
}
console.log('Feliz Ano Novo')

//VERIFICAÇÃO DE CATEGORIA DE IDADE
let idade = 70;
if(idade <= 10){
    console.log('criança');
} else if (idade <= 17){
    console.log('adolescente')
} else if (idade <= 64){
    console.log('adulto')
} else{
    console.log('idoso')
}

//VERIFICAÇÃO DE NOTA COM MENSAGEM
let nota1 = 8;
let nota2 = 8;
let nota = (nota1 + nota2) / 2

console.log(nota)

//VERIFICAÇÃO DE DIA DA SEMANA
let dias = 'segunda';

if (dias = 'domingo'){
    console.log('domingo é final de semana')
} else if (dias = 'segunda'){
    console.log('segunda é um dia da semana')
}else if (dias = 'terça'){
    console.log('terça é um dia da semana')
}else if (dias = 'quarta'){
    console.log('quarta é um dia da semana')
}else if (dias = 'quinta'){
    console.log('quinta é um dia da semana')
}else if (dias = 'sexta'){
    console.log('sexta é um dia da semana')
}else if (dias = 'sabado'){
    console.log('sabado é final de semana')
}
