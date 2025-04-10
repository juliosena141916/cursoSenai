const elevador = document.querySelector('.elevador');
const botoes_andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 70;

let andar_atual = 0;

botoes_andar.forEach(botao => {
  botao.addEventListener('click', () => {
    const deslocar = parseInt(botao.dataset.floor);
    moverElevador(deslocar)
  });
});

function moverElevador(andar_destino){
    const distancia = (andar_destino - andar_atual) * tamanho_piso;
    elevador.style.bottom = `${distancia + (andar_atual * tamanho_piso)}px`;
    andar_atual = andar_destino;
}