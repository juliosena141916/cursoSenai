let pizzas = [];
let pizzaParaAlterar = null;

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

    if (pizza && ingredientes && preco) {
        const novaPizza = {
            nome: pizza,
            ingredientes: ingredientes,
            preco: preco
        };
        pizzas.push(novaPizza);
        document.getElementById("nome").value = "";
        document.getElementById("ingredientes").value = "";
        document.getElementById("preco").value = "";
        atualizarLista();
        alert("Pizza cadastrada com sucesso!");        
}else{
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarLista(lista = pizzas){
    const tabela = document.getElementById("tabelaPizzas");
    tabela.innerHTML = "";

    lista.forEach((pizza) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${pizza.nome}</td>
            <td>${pizza.ingredientes}</td>
            <td>${pizza.preco.toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
    });
}