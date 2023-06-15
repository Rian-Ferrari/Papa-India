nome = sessionStorage.NOME_USUARIO;
email = sessionStorage.EMAIL_USUARIO;
idUsuario = sessionStorage.ID_USUARIO;

if(!nome || !email|| !idUsuario) {
    window.location.href = "Login.html";
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

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

function obterDadosGrafico() {


    fetch(`/usuarios/puxarFarms/${idUsuario}`, { cache: "no-store" })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log("Dados recebidos: ", resposta);
                    resposta.reverse();

                    plotarGrafico(resposta);
                });
            } else {
                console.error("Nenhum dado encontrado ou erro na API");
            }
        })
        .catch(function (error) {
            console.error(
                `Erro na obtenção dos dados p/ gráfico: ${error.message}`
            );
        });
}
function plotarGrafico(resposta) {
    console.log('iniciando plotagem do gráfico...');

    var dados = {
        labels: [],
        datasets: [
            {
                label: 'Tipo do Farms',
                backgroundColor: '#32b9cd8f',
                data: []
            },
        ]
    };

    for(var i = 0; i < resposta.length; i++) {
        dados.labels.push(resposta[i].TipoDoFarm);
    }

    for (i = 0; i < resposta.length; i++) {
        dados.datasets[0].data.push(resposta[i].QuantidadeDoFarm);
    }

    console.log(JSON.stringify(dados));

    var ctx = document.getElementById("grafico1").getContext('2d');
    window.grafico_linha = Chart.Bar(ctx, {
        data: dados,
        options: {
            responsive: true,
            animation: { duration: 500 },
            hoverMode: 'index',
            stacked: false,
            title: {
                display: false,
                text: 'Dados capturados'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-temperatura',
                    ticks: {
                        beginAtZero: true,
                        max: 1000,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 1200,
                        min: 0
                    },

                    gridLines: {
                        drawOnChartArea: false,
                    },
                }],
            }
        }
    });
}

var listaDaCalculadora = [];
var ultimoNumeroAdicionado = 0;

function AdicionarNumero() {
    var numeroAdicionado = Number(input_numero.value);

    if  (numeroAdicionado > 0)  {
        exibir_mensagem_erro.innerHTML = ``;
        console.log("número adicionado na lista");
        listaDaCalculadora.push(numeroAdicionado);
        ultimoNumeroAdicionado = numeroAdicionado;
        exibir_mensagem_erro.innerHTML = `O número ${numeroAdicionado} foi adicionado.`
    }   else    {
        exibir_mensagem_erro.innerHTML = `Digite um valor válido!`;
    }
}

function LimparUltimoDado() {

    if  (listaDaCalculadora >= 0)  {
        exibir_mensagem_erro.innerHTML = ``;
        console.log("conteúdo removido na lista");
        listaDaCalculadora.pop();

        exibir_mensagem_erro.innerHTML = `O número ${ultimoNumeroAdicionado} foi removido.`
    }   else    {
        exibir_mensagem_erro.innerHTML = `Adicione um número se quiser remover!`;
    }
}

function CalcularNumeroAdicionado() {
    if  (listaDaCalculadora.length > 0)  {

        var maior_quantidade = listaDaCalculadora[0];
        var menor_quantidade = listaDaCalculadora[0];
        var soma = 0; 
        
        for (var i = 0; i < listaDaCalculadora.length; i++) {
            soma += listaDaCalculadora[i];
            
            if  (listaDaCalculadora[i] > maior_quantidade)  {
                maior_quantidade = listaDaCalculadora[i];
            }
            if  (listaDaCalculadora[i] < menor_quantidade)  {
                menor_quantidade = listaDaCalculadora[i];
            }
        }
        var media = soma / listaDaCalculadora.length;
        
        exibir_mensagem_erro.innerHTML = `<br> <br>Média: ${media} <br>
                                          Maior quantidade "farmada": ${maior_quantidade} <br>
                                          Menor quantidade "farmada": ${menor_quantidade} <br>
                                          Soma de tudo: ${soma}`;

        listaDaCalculadora = [];

    }   else    {
        exibir_mensagem_erro.innerHTML = `Adicione um número se quiser calcular!`;
    }
}