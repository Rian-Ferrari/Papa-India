nome = sessionStorage.NOME_USUARIO;
email = sessionStorage.EMAIL_USUARIO;
idUsuario = sessionStorage.ID_USUARIO;

if (!nome || !email || !idUsuario) {
    window.location.href = "index.html";
}

function abrirNav() {
    document.getElementById("hamburger").style.width = '100%';
}

function fecharNav() {
    document.getElementById("hamburger").style.width = '0';
}

function mudarParaInicio() {
    sessionStorage.EMAIL_USUARIO = ""
    sessionStorage.NOME_USUARIO = "";
    sessionStorage.ID_USUARIO = "";

    window.location.href = "index.html";
    b_usuario.innerHTML = "";
}

function botaoDuvidaDoUsuario() {
    window.location.href = "#fundoDuvida";
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
            exibirAlertaDeErro.innerHTML = ``;

            var nomeDoLocal = input_nomeDoFarm.value;
            var diaDoFarm = input_dataDiaFarm.value;
            var mesDoFarm = input_dataMesFarm.value;
            var anoDoFarm = input_dataAnoFarm.value;
            var TipoDoFarm = input_tipoDoFarm.value;
            var QtdDoFarm = input_quantidadeDoFarm.value;
            var nomeDoUsuario = idUsuario;

            if (dadosDoLocal.nomeLocal == nomeDoLocal) {
                exibirAlertaDeErro.innerHTML = ``;

                if (nomeDoLocal != "" && nomeDoLocal.length < 101) {
                    exibirAlertaDeErro.innerHTML = ``;

                    if (anoDoFarm.length < 5 && (diaDoFarm < 32
                        && mesDoFarm < 13)) {
                        exibirAlertaDeErro.innerHTML = ``;

                        if (TipoDoFarm != "" && TipoDoFarm.length < 101) {
                            exibirAlertaDeErro.innerHTML = ``;

                            if (QtdDoFarm != 0) {
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

                                    })
                                }).then(function (resposta) {

                                    console.log("resposta: ", resposta);

                                    if (resposta.ok) {

                                        PegarIdLocalidade( dadosDoLocal.nomeLocal, dadosDoLocal.complementoLocal )
                                        // alerta de erro 1
                                        liberarFarm(diaDoFarm, mesDoFarm, anoDoFarm, TipoDoFarm, QtdDoFarm,
                                            nomeDoUsuario, sessionStorage.ID_LOCAL);

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



function liberarFarm(diaDoFarm, mesDoFarm, anoDoFarm, TipoDoFarm, QtdDoFarm,
    nomeDoUsuario, fkLocal) {
    fetch("/usuarios/cadastrarFarm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            diaServer: diaDoFarm,
            mesServer: mesDoFarm,
            anoServer: anoDoFarm,
            tipoServer: TipoDoFarm,
            qtdServer: QtdDoFarm,
            usuarioServer: nomeDoUsuario,
            localServer: fkLocal
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

            });
            // alerta de erro 1


        } else {

            // alerta de erro

            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}

function PegarIdLocalidade(local, complemento) {
    fetch("/usuarios/PegarIdLocalidade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            localServer: local,
            complementoServer: complemento
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.ID_LOCAL = json.idLocal;

            });
            // alerta de erro 1


        } else {

            // alerta de erro

            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;
}