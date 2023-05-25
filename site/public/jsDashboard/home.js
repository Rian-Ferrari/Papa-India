function abrirNav() {
    document.getElementById("hamburger").style.width = '100%';
}

function fecharNav() {
    document.getElementById("hamburger").style.width = '0';
}

function mudarParaInicio() {
    window.location.href="Inicial.html";
}

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

// CADASTRAR LOCAL

function botaoAdicionarLocal() {
    var dadosDoLocal = {
        nomeLocal: input_nomeDoLocal.value,
        complementoLocal: input_complementoDoLocal.value
    }

    if  (dadosDoLocal.nomeLocal != "" && dadosDoLocal.complementoLocal != "")  {
        div_mensagemDeErro.innerHTML = ``;

        if (dadosDoLocal.nomeLocal )   {

        }
    }   else    {
        div_mensagemDeErro.innerHTML = `Campo "NOME DO LOCAL" ou 
        "COMPLEMENTO DO LOCAL" está vazio!`;
    }
}