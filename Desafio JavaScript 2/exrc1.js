const botoes = document.querySelectorAll('.pedido-botao');
const total = document.querySelector('.total');
let array = [];

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const pedido = parseFloat(botao.dataset.coffee);
        array.push(pedido);
        
        const somaTotal = array.reduce((acc, preco) => acc + preco, 0); 
       
        total.innerHTML = `Total: R$ ${somaTotal.toFixed(2).replace('.', ',')}`;
    });
});