function exibirMensagem(text, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = text;
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin(){
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if(usuario === usuarioCorreto && senha === senhaCorreta){
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "pizza.html";
}, 1000);
  }else{
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}