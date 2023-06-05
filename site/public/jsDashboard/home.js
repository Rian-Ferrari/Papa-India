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

        if ((dadosDoLocal.nomeLocal.length > 0 && dadosDoLocal.nomeLocal.length < 40) && dadosDoLocal.complementoLocal.length >10 && dadosDoLocal.complementoLocal.length < 100)   {

            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    nomeServer: dadosDoUsuario.nome,
                    emailServer: dadosDoUsuario.confirmarEmail,
                    senhaServer: dadosDoUsuario.confirmarSenha
                })
            }).then(function (resposta) {

                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    // alerta de erro 1

                    setTimeout(() => {
                        window.location = "index.html";
                    }, "3000")

                } else {

                    // alerta de erro

                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            
            });

            return false;

        }   else    {
            div_mensagemDeErro.innerHTML = `nome do "Local" 
            deve ter no minimo 1 e no maximo 40 caracteres e 
            o complemento do local deve ter 10 e no maximo 100 
            caracteres!`;
        }
    }   else    {
        div_mensagemDeErro.innerHTML = `Campo "NOME DO LOCAL" ou 
        "COMPLEMENTO DO LOCAL" está vazio!`;
    }
}

function botaoAdicionarFarm() {
    var dadosDoFarm = {
        nomeDoFarm: input_nomeDoFarm.value,
        diaDoFarm: input_dataDiaFarm.value,
        mesDoFarm: input_dataMesFarm.value,
        anoDoFarm: input_dataAnoFarm.value,
        TipoDoFarm: input_tipoDoFarm.value,
        QtdDoFarm: input_quantidadeDoFarm.value
    }
}