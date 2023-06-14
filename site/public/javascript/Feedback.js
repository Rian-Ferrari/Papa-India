function abrirNav() {
    document.getElementById("hamburger").style.width = '100%';
}

function fecharNav() {
    document.getElementById("hamburger").style.width = '0';
}

function mudarParaInicio() {
    window.location.href="Inicial.html";
}

let slides = document.querySelectorAll('.slide-container');

let index = 0; 

function next() {
    slides[index].classList.remove('active');

    index = (index + 1) % slides.length;
     
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');

    index = (index - 1 + slides.length) % slides.length;
     
    slides[index].classList.add('active');
}

setInterval(next, 7000);

function botaoFeedbackUsuario() {
    var dadosMensagem = {
        nome: input_nome.value,
        email: input_email.value,
        mensagem: input_mensagem.value
    }

    if (dadosMensagem.nome != "" && dadosMensagem.nome.length < 30) {
        div_FeedbackDoUsuario.innerHTML = ``;

        if (dadosMensagem.email.indexOf("@") && (dadosMensagem.email.endsWith(".com") || dadosMensagem.email.endsWith(".school"))) {
            div_FeedbackDoUsuario.innerHTML = ``;

            if  (dadosMensagem.mensagem.length > 0 && dadosMensagem.mensagem.length < 300)  {
                div_FeedbackDoUsuario.innerHTML = ``;

                /*Colocar sweateralert aqui*/ 
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Mensagem enviada com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })

            }   else    {
                div_FeedbackDoUsuario.innerHTML = `<b style="color:red;">SUA MENSAGEM DEVE SER DE 0-300 CARACTERES 
                !</b>`;
            }
        }   else    {
            div_FeedbackDoUsuario.innerHTML = `<b style="color:red;">E-MAIL PREENCHIDO DE FORMA INCORRETA, VERIFIQUE-SE TEM "@"
            OU ".com"!</b>`;
        }
    }   else {
        div_FeedbackDoUsuario.innerHTML = `<b style="color:red;">NOME DE USUÁRIO INVÁLIDO!</b>`;
    }
}

function botaoFeedbackParaCadastrar() {
    window.location.href="Cadastro.html";
}