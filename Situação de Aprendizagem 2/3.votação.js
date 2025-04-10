let idade = parseInt(prompt("Digite sua idade:"));
let nacionalidade = prompt("Você é brasileiro?");

if(idade >= 18 && nacionalidade === "sim"){
    alert("Você pode votar");
} else {
    alert("Você não pode votar");
}