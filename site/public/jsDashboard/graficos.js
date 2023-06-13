nome = sessionStorage.NOME_USUARIO;
email = sessionStorage.EMAIL_USUARIO;
idUsuario = sessionStorage.ID_USUARIO;

if(!nome || !email|| !idUsuario) {
    window.location.href = "index.html";
}

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

function obterDadosGrafico() {


    fetch(`/usuarios/puxarFarms`, { cache: "no-store" })
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
                label: 'Quantidade de Farms',
                backgroundColor: '#32b9cd8f',
                data: []
            },
        ]
    };

    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        if (registro.time == "tipo") {
            dados.datasets[0].data.push(registro.farm);
        } else {
            dados.datasets[0].data.push(registro.farm);
        }
        // dados.labels.data.push(registro.nome);
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
                        max: 30,
                        min: 0
                    }
                }, {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    id: 'y-umidade',
                    ticks: {
                        beginAtZero: true,
                        max: 30,
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