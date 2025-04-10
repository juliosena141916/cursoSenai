let disco = [];

function discos() {
    let titulo = prompt("Digite o título do disco:");
    let artista = prompt("Digite o artista do disco:");
    let ano = parseInt(prompt("Digite o ano de publicação do disco"));
    let preço = parseFloat(prompt("Digite o preço do disco:"));
    disco.push({titulo, artista, ano, preço});
}

function listarDiscos() {
    if (disco.length > 0) {
        let mensagem = "Lista de discos:\n";
        disco.forEach((disco) => {
            mensagem += `Título: ${disco.titulo}, Artista: ${disco.artista}, Ano de publicação: ${disco.ano}, Preço: ${disco.preço}\n`;
        });
        alert(mensagem);
    } else {
        alert("A lista de discos está vazia.");
    }
}

discos();
listarDiscos();
