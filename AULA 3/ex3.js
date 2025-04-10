// Condicionais com IF, ELSE e ELSE IF

//let nota = 85;
//if(nota >= 80){
  //  console.log('parabens, você foi aprovado!');
//} else if (nota < 80 && nota >= 60){
  //  console.log('você esta na nossa lista de espera');
//} else {
  //  console.log('você foi reprovado');
//}

let vacinar = 60
if(vacinar >= 60){
    console.log('Pode vacinar')
} else if(vacinar < 60 && vacinar >= 15){
    console.log('Lista de espera')
} else {
    console.log('Não pode vacinar')
}

let nota1 = 70;
if(nota1 >= 90){
    console.log('Excelente')
} else if (nota1 >= 80){
    console.log('Bom')
} else if (nota1 >= 70){
    console.log('Regular')
} else if (nota1 >= 60){
    console.log('Ruim')
} else if (nota1 >= 50){
    console.log('Por pouco')
} else {
    console.log('Estude mais')
}

// Hora do dia
let hora = 19;
if (hora < 12){
    console.log('Bom dia')
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// Dias da semana
let dia = 'segunda';
if(dia === 'domingo'){
    console.log('Eu durmo')
} else if (dia === 'segunda'){
    console.log('Eu estudo')
} else if (dia === 'terça'){
    console.log('Eu danço')
} else if (dia === 'quarta'){
    console.log('Eu corro')
} else if (dia === 'quinta'){
    console.log('Eu escalo')
} else if (dia === 'sexta'){
    console.log('Eu salto')
} else if (dia === 'sabado'){
    console.log('Eu jogo')
}