function mostrarSecao(secao){
    // Esconde todas as seções
    document.getElementById("cadastrarPizza").classList.add("hidden");
    document.getElementById("consultarPizza").classList.add("hidden");
    // document.getElementById("removerPizza").classList.add("hidden");
    
    // Mostra a seção
    document.getElementById(secao).classList.remove("hidden");
}

function cadastrarPizza(){
    const pizza = document.getElementById("nome").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const preco = parseFloat(document.getElementById("preco").value);
}