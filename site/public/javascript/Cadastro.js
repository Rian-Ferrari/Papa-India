function botaoCadastrarUsuario() {
    var dadosDoUsuario = {
        nome: input_nome.value,
        email: input_email.value,
        confirmarEmail: input_confirmarEmail.value,
        senha: input_senha.value,
        confirmarSenha: input_confirmarSenha.value
    }

    if (dadosDoUsuario.nome != "" && dadosDoUsuario.nome.length < 30) {
        div_cadastroDoUsuario.innerHTML = ``;

        if (dadosDoUsuario.email.indexOf("@") && (dadosDoUsuario.email.endsWith(".com") || dadosDoUsuario.email.endsWith(".school"))) {
            div_cadastroDoUsuario.innerHTML = ``;

            if (dadosDoUsuario.confirmarEmail == dadosDoUsuario.email) {

                div_cadastroDoUsuario.innerHTML = ``;
                if ((dadosDoUsuario.senha.length > 8 && dadosDoUsuario.senha.length < 16) && dadosDoUsuario.senha.endsWith("#")) {

                    div_cadastroDoUsuario.innerHTML = ``;
                    if (dadosDoUsuario.confirmarSenha == dadosDoUsuario.senha) {

                        // Enviando o valor da nova input
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

                                Swal.fire({
                                    imageUrl: './imagens/vaultBoyLike.gif',
                                    title: 'Cadastro efetuado com sucesso!',
                                    showClass: {
                                      popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                      popup: 'animate__animated animate__fadeOutUp'
                                    }
                                  })

                                setTimeout(() => {
                                    window.location = "Login.html";
                                }, "3000")

                            } else {

                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Houve um erro ao tentar realizar o cadastro!',
                                    imageUrl: './imagens/vaultBoyOps.gif'
                                })

                                throw ("Houve um erro ao tentar realizar o cadastro!");
                            }
                        }).catch(function (resposta) {
                            console.log(`#ERRO: ${resposta}`);
                        
                        });

                        return false;

                        
                    } else {
                        div_cadastroDoUsuario.innerHTML = `<b style="color:red;">VERIFIQUE-SE SUA SENHA FOI
                INSERIDO CORRETAMENTE!</b>`;
                    }
                } else {
                    div_cadastroDoUsuario.innerHTML = `<b style="color:red;">SUA SENHA DEVE CONTER 8-16 CARACTERES 
                    E TER UM "#"!</b>`;
                }
            } else {
                div_cadastroDoUsuario.innerHTML = `<b style="color:red;">VERIFIQUE-SE SEU E-MAIL FOI
                INSERIDO CORRETAMENTE!</b>`;
            }
        } else {
            div_cadastroDoUsuario.innerHTML = `<b style="color:red;">E-MAIL PREENCHIDO DE FORMA INCORRETA, VERIFIQUE-SE TEM "@"
            OU ".com"!</b>`;
        }
    } else {
        div_cadastroDoUsuario.innerHTML = `<b style="color:red;">NOME DE USUÁRIO INVÁLIDO!</b>`;
    }
}

