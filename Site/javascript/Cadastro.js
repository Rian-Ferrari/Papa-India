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

            if  (dadosDoUsuario.confirmarEmail == dadosDoUsuario.email) {

                div_cadastroDoUsuario.innerHTML = ``;
                if  ((dadosDoUsuario.senha.length > 8 && dadosDoUsuario.senha.length) < 16 &&  dadosDoUsuario.senha.endsWith("#"))  {

                    div_cadastroDoUsuario.innerHTML = ``;
                    if  (dadosDoUsuario.confirmarSenha == dadosDoUsuario.senha)  {

                        window.location.href="";
                    }   else    {
                        div_cadastroDoUsuario.innerHTML = `<b style="color:red;">VERIFIQUE-SE SUA SENHA FOI
                INSERIDO CORRETAMENTE!</b>`;
                    }
                }   else    {
                    div_cadastroDoUsuario.innerHTML = `<b style="color:red;">SUA SENHA DEVE CONTER 8-16 CARACTERES 
                    E TER UM "#"!</b>`;
                }
            }   else    {
                div_cadastroDoUsuario.innerHTML = `<b style="color:red;">VERIFIQUE-SE SEU E-MAIL FOI
                INSERIDO CORRETAMENTE!</b>`;
            }
        }   else    {
            div_cadastroDoUsuario.innerHTML = `<b style="color:red;">E-MAIL PREENCHIDO DE FORMA INCORRETA, VERIFIQUE-SE TEM "@"
            OU ".com"!</b>`;
        }
    }   else    {
        div_cadastroDoUsuario.innerHTML = `<b style="color:red;">NOME DE USUÁRIO INVÁLIDO!</b>`;
    }
}