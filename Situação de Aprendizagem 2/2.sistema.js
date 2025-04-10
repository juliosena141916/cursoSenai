let usuario = "julio123";
let senha = "senha123";

let digitarUsuario = prompt("Digite o usuário:");
let digitarSenha = prompt("Digite a senha:");

if (digitarUsuario === usuario && digitarSenha === senha) {
    alert("Acesso permitido");
} else {
    alert("Usuario e/ou senha incorretos");
}