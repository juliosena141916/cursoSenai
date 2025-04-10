function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");
    const nome = document.getElementById("nome").value;

    if(imc < 18.5){
       resultado.innerHTML = ("Abaixo do peso");
    }
    else if(imc >= 18.5 && imc < 24.9){
        resultado.innerHTML = ("Normal");
    }
    else if(imc >= 25 && imc < 29.9){
        resultado.innerHTML = ("Sobrepeso");
    }
    else{
        resultado.innerHTML = ("Obesidade");
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    resultado.innerHTML = nome + " seu IMC é: " + imc.toFixed(2);
}