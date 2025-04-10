function reservar(){
    const nome = document.getElementById("nome").value;
    const produto = document.getElementById("produto").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const lista = document.getElementById("lista");

    lista.innerHTML = nome + " reservou " + quantidade + " unidades de " + produto + ".";
}