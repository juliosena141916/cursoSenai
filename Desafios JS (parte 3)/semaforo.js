function trocarCor(){
    const semaforo = document.getElementById("cor").value;

    if(semaforo == 1){
        document.body.style.backgroundColor = "green";
} else if(semaforo == 2){
        document.body.style.backgroundColor = "yellow";
} else if(semaforo == 3){
        document.body.style.backgroundColor = "red";
} else {
    alert("Selecione uma cor válida!");
}
}