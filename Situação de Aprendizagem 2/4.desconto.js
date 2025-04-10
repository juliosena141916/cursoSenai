let quantidade = parseInt(prompt("Digite a quantidade de produtos:"));
let VIP = prompt("Você é cliente VIP?");

if (quantidade >= 10 && VIP === "sim") {
    alert("Você tem direito a desconto!");
} else {
    alert("Você não tem direito a desconto!");
}