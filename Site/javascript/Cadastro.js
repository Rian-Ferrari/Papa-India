function botaoCadastrarUsuario() {
    var nomeDoUsuario = input_nome.value;
    var emailDoUsuario = input_email.value;
    var confirmarEmailDoUsuario = input_confirmarEmail.value;
    var senhaDoUsuario = input_senha.value;
    var confirmarSenhaDoUsuario = input_confirmarSenha.value;

    if (nomeDoUsuario != "" && nomeDoUsuario.length < 30) {
        div_cadastroDoUsuario.innerHTML = ``;

        if ((emailDoUsuario != "" && emailDoUsuario.indexOf("@")) && (emailDoUsuario.indexOf(".com") || emailDoUsuario.indexOf("school"))) {
            div_cadastroDoUsuario.innerHTML = ``;
        }   else    {
            div_cadastroDoUsuario.innerHTML = `<b style="color:red;">E-MAIL PREENCHIDO DE FORMA INCORRETA, VERIFIQUE-SE TEM "@"
            OU ".com"!</b>`;
        }
    }   else    {
        div_cadastroDoUsuario.innerHTML = `<b style="color:red;">NOME DE USUÁRIO INVÁLIDO!</b>`;
    }
}