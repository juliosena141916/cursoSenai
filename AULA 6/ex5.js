function escondidinho() {
let preco = parseFloat(prompt("Qual o preço do produto?"));
let porc = parseInt(prompt("Qual a porcentagem de desconto?"));
let valor = preco * porc / 100;
let total = preco - valor;
let res = document.getElementById("result");
res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${porc}%, sobre ele será de R$${total.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago será de R$${total.toFixed(2)}.</p>`
}