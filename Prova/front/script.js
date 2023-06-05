var alocacao = [];
var clientes = [];
var concessionaria = [];
const contModelo = document.querySelector('.cont-modelo')
const infosContModelo = document.querySelector('.infos-cont-modelo')
function listarLocacoes(e) {
    var modalLoc = document.querySelector('.cont-modelo')
    modalLoc.classList.remove('model')

    var idArea = e.querySelector('.valorArea').innerHTML
    console.log(idArea)
    const options2 = { method: 'GET' };
    fetch("http://localhost:3000/alocacao", options2)
        .then(resp => { return resp.json() })
        .then(loc => {
            alocacao = loc;
            var fechar = document.createElement('span')
            fechar.classList.add('fechar')
            fechar.setAttribute('onClick', 'fechar()')
            // Limpar o conteúdo existente
            contModelo.innerHTML = '';
            var informacoesEncontradas = false;
            alocacao.forEach(info => {
                if (info.area == idArea) {
                    informacoesEncontradas = true;
                    var lista = infosContModelo.cloneNode(true)
                    lista.querySelector('.area').innerHTML = info.area
                    contModelo.appendChild(lista)

                    const options = { method: 'GET' };

                    fetch('http://localhost:3000/automoveis/id/' + info.automovel, options)
                        .then(response => response.json())
                        .then(response => {
                            lista.querySelector('.automovel').innerHTML = response.modelo;
                            lista.querySelector('.preco').innerHTML = response.preco;
                        })
                }
            });

            infosContModelo.appendChild(fechar)

            if (!informacoesEncontradas) {
                alert('nenhuma info');
            }
        })
}
function fecharModal() {
    var modalLoc = document.querySelector('.cont-modelo');
    modalLoc.classList.add('model');
}

function fecharModal() {
    var modalLoc = document.querySelector('.cont-modelo');
    modalLoc.classList.add('model');
}


function abrirModalVendas(e) {
    var modalVenda = document.querySelector('.cont-vendas')
    modalVenda.classList.remove('model')
    var modalLoc = document.querySelector('.cont-modelo');
    modalLoc.classList.add('model');
    var nome = e.parentNode.querySelector('.automovel').innerHTML
    const options = { method: 'GET' };

    document.querySelector('.modelo-automovel').innerHTML = nome
    fetch("http://localhost:3000/clientes", options)
        .then(resp => resp.json())
        .then(cliente => {
            clientes = cliente
            clientes.forEach(c => {
                var op = document.createElement("option")
                op.innerHTML = c.nome
                op.value = c.id
                document.querySelector("#select_cliente").appendChild(op)
            })

        });

    const options2 = { method: 'GET' };

    fetch("http://localhost:3000/concessionarias", options2)
        .then(resp => resp.json())
        .then(conce => {
            concessionaria = conce
            concessionaria.forEach(con => {
                var op = document.createElement("option")
                op.innerHTML = con.concessionaria
                op.value = con.id
                document.querySelector("#select_conce").appendChild(op)
            })

        });
}

const infosClientes = document.querySelector('.infos-vender')
const contVenda = document.querySelector('.cont-vendas')
// function vender() {
//     var select_items = document.querySelector(".select_items")
//     let seleStatus = select_items.options[select_items.selectedIndex].value;

//     let info =
//     fetch('http://localhost:3000/Manutencao', {
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json"
//         },
//         "body": info
//     })
// }


