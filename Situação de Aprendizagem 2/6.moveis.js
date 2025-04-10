let moveis = [];

function movel() {
    let tipo = prompt("Digite o tipo de movel:");
    let material = prompt("Digite o material do movel:");
    let cor = (prompt("Digite a cor do movel"));
    let preço = parseFloat(prompt("Digite o preço do movel:"));
    moveis.push({tipo, material, cor, preço});
}

function listarMoveis() {
    if (moveis.length > 0) {
        let mensagem = "Lista de moveis:\n";
        moveis.forEach((moveis) => {
            mensagem += `tipo: ${moveis.tipo}, material: ${moveis.material}, cor: ${moveis.cor}, preço: ${moveis.preço}\n`;
        });
        alert(mensagem);
    } else {
        alert("A lista de discos está vazia.");
    }
}

movel();
listarMoveis();