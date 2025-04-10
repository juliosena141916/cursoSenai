function comprar(){
    let produto = window.prompt("Qual produto você está comprando?");
    let preco = parseFloat(window.prompt(`Quanto custa o/a ${produto} que você está comprando?`));
    let dinheiro = parseFloat(window.prompt(`Quanto você vai utilizar para pagar o/a ${produto}?`));
    alert('O seu troco será de R$' + (dinheiro - preco));
}