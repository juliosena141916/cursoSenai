let estado = 0;
function mudarLuz() {
    const luzRoxa = document.getElementById("roxa");
    const luzVermelha = document.getElementById("vermelha");
    const luzLaranja = document.getElementById("laranja");
    const luzAmarela = document.getElementById("amarela");
    const luzVerde = document.getElementById("verde");

    luzRoxa.classList.remove("roxa");
    luzVermelha.classList.remove("vermelha");
    luzLaranja.classList.remove("laranja");
    luzAmarela.classList.remove("amarela");
    luzVerde.classList.remove("verde");

    if (estado === 0) {
        luzRoxa.classList.add("roxa");
        estado = 1;
    } else if (estado === 1) {
        luzVermelha.classList.add("vermelha");
        estado = 2;
    } else if (estado === 2) {
        luzLaranja.classList.add("laranja");
        estado = 3;
    } else if (estado === 3) {
        luzAmarela.classList.add("amarela");
        estado = 4;
    } else {
        luzVerde.classList.add("verde");
        estado = 0;
    }
}