let pizzas = [];
let pedidos = [];
let pizzaParaAlterar = null;

function mostrarSecao(secao){
    // Esconde todas as seções
    document.getElementById("cadastrarPizza").classList.add("hidden");
    document.getElementById("consultarPizza").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");
    document.getElementById("removerPizza").classList.add("hidden");
    document.getElementById("pedido").classList.add("hidden");
    document.getElementById("relatório").classList.add("hidden");
    
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

function consultarPizza(){
  const busca = document.getElementById("consultar").value.toLowerCase();
  const resultados = pizzas.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function excluirPizza(){
    const busca = document.getElementById("excluirPizza").value.toLowerCase();
    const index = pizzas.findIndex((pizza) =>
        pizza.nome.toLowerCase().includes(busca)
    );
    if (index !== -1) {
        pizzas.splice(index, 1);
        document.getElementById("excluirPizza").value = "";
        atualizarLista();
        alert("Pizza excluída com sucesso!");
    } else {
        alert("Pizza não encontrada.");
    }
}

function fazerPedido() {
    const nomePizza = document.getElementById('pedidoNome').value;
    const pizza = pizzas.find(pizza => pizza.nome.toLowerCase() === nomePizza.toLowerCase());

    if (pizza) {
        pedidos.push(pizza);
        alert(`Pedido feito com sucesso! Pizza: ${pizza.nome}`);
    } else {
        alert("Pizza não encontrada.");
    }

    document.getElementById('pedidoNome').value = '';
}

function gerarRelatorio() {
    const tabelaRelatorio = document.getElementById('tabelaRelatório');
    tabelaRelatorio.innerHTML = '';

    pedidos.forEach(pedido => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.nome}</td>
            <td>${pedido.ingredientes}</td>
            <td>R$ ${pedido.preco.toFixed(2)}</td>
        `;
        tabelaRelatorio.appendChild(row);
    });
}

function buscarPizzaAlterar() {
    const busca = document.getElementById("alterar").value.toLowerCase();
    pizzaParaAlterar = pizzas.find((pizza) =>
        pizza.nome.toLowerCase().includes(busca)
    );

    if (pizzaParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-nome").value = pizzaAlterar.nome;
        document.getElementById("novos-ingredientes").value = pizzaAlterar.ingredientes;
        document.getElementById("novo-preco").value = pizzaAlterar.preco;
    } else {
        alert("Pizza não encontrada.");
    }
}

function alterarPizza() {
  if (pizzaParaAlterar) {
    const novoNome = document.getElementById("novo-nome").value;
    const novosIngredientes = document.getElementById("novos-ingredientes").value;
    const novoPreco = parseInt(document.getElementById("novo-preço").value);

    if (novoNome && novosIngredientes && novoPreco) {
      pizzaAlterar.nome = novoNome;
      pizzaAlterar.ingredientes = novosIngredientes;
      pizzaAlterar.preco = novoPreco;

      atualizarLista();
      alert("Livro alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}