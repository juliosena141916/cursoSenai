let cem = [100, 200, 300, 400, 500];
let filmes = ["ação", "comédia", "drama", "terror", "romance"];
let impares = [1, 3, 5, 7, 9];

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1 - Cem\n" +
        "2 - Filmes\n" +
        "3 - Números ímpares\n" +
        "Escolha uma opção:"
    );
}

if(exibirMenu == 1){
    alert(cem);
} else if(exibirMenu == 2){
    alert(filmes);
} else if(exibirMenu == 3){
    alert(impares);
}

exibirMenu();