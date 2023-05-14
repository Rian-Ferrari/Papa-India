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

function botaoLoginUsuario() {
    var dadosDoUsuario = {
        nome: input_nome.value,
        email: input_email.value,
        senha: input_senha.value
    }

    if (dadosDoUsuario.nome != "" && dadosDoUsuario.nome.length < 30) {
        div_LoginDoUsuario.innerHTML = ``;

        if (dadosDoUsuario.email.indexOf("@") && (dadosDoUsuario.email.endsWith(".com") || dadosDoUsuario.email.endsWith(".school"))) {
            div_LoginDoUsuario.innerHTML = ``;

                if  (dadosDoUsuario.senha.length > 8 && dadosDoUsuario.senha.length < 16)  {

                    fetch("/usuarios/autenticar", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            nomeServer: dadosDoUsuario.nome,
                            emailServer: dadosDoUsuario.email,
                            senhaServer: dadosDoUsuario.senha
                        })
                    }).then(function (resposta) {
                        console.log("ESTOU NO THEN DO entrar()!")
            
                        if (resposta.ok) {
                            console.log(resposta);
            
                            resposta.json().then(json => {
                                console.log(json);
                                console.log(JSON.stringify(json));
            
                                sessionStorage.EMAIL_USUARIO = json.email;
                                sessionStorage.NOME_USUARIO = json.nome;
                                sessionStorage.ID_USUARIO = json.idUsuario;
            
                                setTimeout(function () {
                                    console.log('Conectado!');
                                    window.location = "";
                                    /*Colocar página da calculadora!*/
                                }, 1000); // apenas para exibir o loading
            
                            });
            
                        } else {
                            
                            Swal.fire({
                                icon: 'error',
                                title: 'Eita...',
                                text: 'Houve um erro ao tentar realizar o login!',
                                imageUrl: './imagens/vaultBoyDeuRuim.gif'
                            })

                            console.log("Houve um erro ao tentar realizar o login!");
            
                            resposta.text().then(texto => {
                                console.error(texto);
                                finalizarAguardar(texto);
                            });
                        }
            
                    }).catch(function (erro) {
                        console.log(erro);
                    })
            
                    return false;


                }   else    {
                    div_LoginDoUsuario.innerHTML = `<b style="color:red;">SUA SENHA DEVE CONTER 8-16 CARACTERES 
                    E TER UM "#"!</b>`;
                }
        }   else    {
            div_LoginDoUsuario.innerHTML = `<b style="color:red;">E-MAIL PREENCHIDO DE FORMA INCORRETA, VERIFIQUE-SE TEM "@"
            OU ".com"!</b>`;
        }
    }   else    {
        div_LoginDoUsuario.innerHTML = `<b style="color:red;">NOME DE USUÁRIO INVÁLIDO!</b>`;
    }
}