let temperatura = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

if(temperatura >= 30) {
    console.log("Está calor!");
} else if(temperatura >= 20) {
    console.log("Está agradável!");
} else if(temperatura >= 10) {
    console.log("Está frio!");
} else {
    console.log("Está muito frio!");
}