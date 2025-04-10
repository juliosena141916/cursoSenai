let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = parseInt(prompt("Digite o ano de publicação do livro:"));
    biblioteca.push({titulo, autor, ano});
    alert("Livro adicionado com sucesso!");
}

function listarLivros() {
    if (biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca:\n";
        biblioteca.forEach((livro) => {
            mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano de publicação: ${livro.ano}\n`;
        }); 
        alert(mensagem);
    } else {
            alert("A biblioteca está vazia.");
        }
    }

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1 - Adicionar livro\n" +
        "2 - Buscar livro\n" +
        "3 - Listar livro\n" +
        "4 - Sair\n" +
        "Escolha uma opção:"
    );
}

exibirMenu();
adicionarLivro();
listarLivros();