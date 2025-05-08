let pizzas = [];
let pizzaParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as seções
  document.getElementById("pizzas").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("vendas").classList.add("hidden");

  // Mostra a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}