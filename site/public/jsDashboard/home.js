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

idUsuario = sessionStorage.ID_USUARIO;

// CADASTRAR LOCAL E FARM


function botaoAdicionarFarmELocal() {
    var dadosDoLocal = {
        nomeLocal: input_nomeDoLocal.value,
        complementoLocal: input_complementoDoLocal.value
    }

    if (dadosDoLocal.nomeLocal != "" && dadosDoLocal.complementoLocal != "" && dadosDoLocal.complementoLocal.length < 151) {
        div_mensagemDeErro.innerHTML = ``;

        if ((dadosDoLocal.nomeLocal.length > 0 && dadosDoLocal.nomeLocal.length < 101) && dadosDoLocal.complementoLocal.length > 10 && dadosDoLocal.complementoLocal.length < 100) {

            var dadosDoFarm = {
                nomeDoLocal: input_nomeDoFarm.value,
                diaDoFarm: input_dataDiaFarm.value,
                mesDoFarm: input_dataMesFarm.value,
                anoDoFarm: input_dataAnoFarm.value,
                TipoDoFarm: input_tipoDoFarm.value,
                QtdDoFarm: input_quantidadeDoFarm.value,
                nomeDoUsuario: idUsuario
            }



            if (dadosDoLocal.nomeLocal == dadosDoFarm.nomeDoLocal) {
                exibirAlertaDeErro.innerHTML = ``;

                if (dadosDoFarm.nomeDoLocal != "" && dadosDoFarm.nomeDoLocal.length < 101) {
                    exibirAlertaDeErro.innerHTML = ``;

                    if (dadosDoFarm.anoDoFarm.length < 5 && (dadosDoFarm.diaDoFarm < 32
                        && dadosDoFarm.mesDoFarm < 13)) {
                        exibirAlertaDeErro.innerHTML = ``;

                        if (dadosDoFarm.TipoDoFarm != "" && dadosDoFarm.TipoDoFarm.length < 101) {
                            exibirAlertaDeErro.innerHTML = ``;

                            if (dadosDoFarm.QtdDoFarm != 0) {
                                exibirAlertaDeErro.innerHTML = ``;

                                fetch("/usuarios/cadastrarFarmELocal", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        // crie um atributo que recebe o valor recuperado aqui
                                        // Agora vá para o arquivo routes/usuario.js
                                        localServer: dadosDoLocal.nomeLocal,
                                        complementoServer: dadosDoLocal.complementoLocal,
                                        diaServer: dadosDoFarm.diaDoFarm,
                                        mesServer: dadosDoFarm.mesDoFarm,
                                        anoServer: dadosDoFarm.anoDoFarm,
                                        tipoServer: dadosDoFarm.TipoDoFarm,
                                        qtdServer: dadosDoFarm.QtdDoFarm,
                                        usuarioServer: dadosDoFarm.idUsuario
                                    })
                                }).then(function (resposta) {

                                    console.log("resposta: ", resposta);

                                    if (resposta.ok) {

                                        // alerta de erro 1


                                    } else {

                                        // alerta de erro

                                        throw ("Houve um erro ao tentar realizar o cadastro!");
                                    }
                                }).catch(function (resposta) {
                                    console.log(`#ERRO: ${resposta}`);

                                });

                                return false;

                            } else {
                                exibirAlertaDeErro.innerHTML = `insira um valor válido!`;
                            }
                        } else {
                            exibirAlertaDeErro.innerHTML = `Tipo do local inserido de forma incorreta
                            e no maximo ter 100 caracteres!`;
                        }
                    } else {
                        exibirAlertaDeErro.innerHTML = `dia, mês ou ano inserrido incorretamente.
                        A menos que você voltou ao tempo!`;
                    }
                } else {
                    exibirAlertaDeErro.innerHTML = `nome do farm inserido de forma incorreta
                    e no maximo 100 caracteres!`;
                }
            } else {
                exibirAlertaDeErro.innerHTML = `preencha todos os campos do 
                card "CADASTRAR LOCAL" e verifique se o nome do local está igual!`;
            }

        } else {
            div_mensagemDeErro.innerHTML = `nome do "Local" 
            deve ter no minimo 1 e no maximo 40 caracteres e 
            o complemento do local deve ter 10 e no maximo 100 
            caracteres!`;
        }
    } else {
        div_mensagemDeErro.innerHTML = `Campo "NOME DO LOCAL" ou 
        "COMPLEMENTO DO LOCAL" está vazio!`;
    }
}