let idade = parseInt(prompt("Digite a idade:"));
let habilitacao = prompt("Possui habilitação?:");

if (idade >= 18 && habilitacao === "sim") {
    alert("Pode dirigir");
} else {
    alert("Não pode dirigir");
}