nome = sessionStorage.NOME_USUARIO;
email = sessionStorage.EMAIL_USUARIO;
idUsuario = sessionStorage.ID_USUARIO;

if(!nome || !email|| !idUsuario) {
    window.location.href = "index.html";
}

function abrirNav() {
    document.getElementById("hamburger").style.width = '100%';
}

function fecharNav() {
    document.getElementById("hamburger").style.width = '0';
}

function mudarParaInicio() {
    window.location.href = "index.html";
    b_usuario.innerHTML = "";
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;