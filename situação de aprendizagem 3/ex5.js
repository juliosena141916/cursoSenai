function converter(){
    var reais = parseFloat(window.prompt("Digite o valor em reais:"));
    var dolar = reais / 5.79;
    alert(`O valor em dólar é de $${dolar.toFixed(2)}`);
}