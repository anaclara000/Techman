var uriCard_Locacoes = 'http://localhost:3000/locacoes'
var uriCard_Eventos = 'http://localhost:3000/eventos'

var locacoes = []
var convidado = []
var eventos = []

var listaLocacoes = []
var listaEventos = []

const options = { method: 'GET' };

fetch(uriCard_Locacoes, options)
    .then(res => res.json())
    .then(res => {
        listaLocacoes = res;
    }
    )
    .catch(err => console.error(err));

fetch(uriCard_Eventos, options)
    .then(res => res.json())
    .then(res => {
        listaEventos = res;
    }
    )
    .catch(err => console.error(err));




function SectionInformacao() {

    document.querySelector('.informacao').style.display = "block"
    document.querySelector('.locacao').style.display = "none"
    document.querySelector('.convidados').style.display = "none"


}

function SectionLocacao() {

    document.querySelector('.informacao').style.display = "none"
    document.querySelector('.locacao').style.display = "block"
    document.querySelector('.convidados').style.display = "none"


}

function SectionConvidado() {

    document.querySelector('.informacao').style.display = "none"
    document.querySelector('.locacao').style.display = "none"
    document.querySelector('.convidados').style.display = "block"


}

function Conferir() {

    document.querySelector('.modal_Eventos').style.display = "none";

    var erro = 0

    //VARIAVEIS DOS ERROS 
    var erroNomeEvento = document.querySelector('.erro_nome_evento')
    var erroDescEvento = document.querySelector('.erro_descricao_evento')
    var erroEnderecEvento = document.querySelector('.erro_endereco_evento')
    var erroDataInicioEvento = document.querySelector('.erro_dataHoraInicio_evento')
    var erroDataFimEvento = document.querySelector('.erro_dataHoraFim_evento')

    erroNomeEvento.classList.add('model')
    erroDescEvento.classList.add('model')
    erroEnderecEvento.classList.add('model')
    erroDataInicioEvento.classList.add('model')
    erroDataFimEvento.classList.add('model')

    // var erroNomeFornecedor = document.querySelector('.')
    // var erroDescFornecedor = document.querySelector('.')
    // var erroTipoFornecedor = document.querySelector('.')
    // var erroTelefoneFornecedor = document.querySelector('.')
    // var erroValorFornecedor = document.querySelector('.')


    // VARIAVEIS DA SESSÃO INFORMAÇÃO // 

    var nomeEvento = document.querySelector('.nomeEvento').value
    var descEvento = document.querySelector('.descricaoEvento').value
    var enderecoEvento = document.querySelector('.enderecoEvento').value
    var dateTime_inicio = document.querySelector('.dateTime_inicio').value
    var dateTime_fim = document.querySelector('.dateTime_fim').value

    // VARIAVEIS DA SESSÃO FORNECEDOR // 

    // var nomeFornecedor = document.querySelector('.nomeFornecedor').value
    // var descricaoFornecedor = document.querySelector('.descricaoFornecedor').value
    // var tipoFornecedor = document.querySelector('.tipoFornecedor').value
    // var telefoneFornecedor = document.querySelector('.telefoneFornecedor').value
    // var valorFornecedor = document.querySelector('.valorFornecedor').value

    // VARIAVEIS DA SESSÃO LOCAÇÃO // 

    // var nomeFornecedor = document.querySelector('.nomeFornecedor').value
    // var descriLocacao = document.querySelector('.descriLocacao').value

    // VARIAVEIS DA SESSÃO CONVIDADOS // 

    // var nomeConvidado = document.querySelector('.nomeConvidado').value
    // var telConvidado = document.querySelector('.telConvidado').value

    console.log(dateTime_inicio, dateTime_fim);

    if (nomeEvento.trim() == "") { erro += 1; erroNomeEvento.classList.remove("model"), erroNomeEvento.innerHTML = "Nome Evento Vazio" }
    if (descEvento.trim() == "") { erro += 1; erroDescEvento.classList.remove("model"), erroDescEvento.innerHTML = "Descrição do Evento Vazia" }
    if (enderecoEvento.trim() == "") { erro += 1; erroEnderecEvento.classList.remove("model"), erroEnderecEvento.innerHTML = "Endereço do Evento Vazio" }
    if (dateTime_inicio.trim() == "") { erro += 1; erroDataInicioEvento.classList.remove("model"), erroDataInicioEvento.innerHTML = "Escolha uma Data/Hora para o inicio do Evento" }
    if (dateTime_fim.trim() == "") { erro += 1; erroDataFimEvento.classList.remove("model"), erroDataFimEvento.innerHTML = "Escolha uma Data/Hora para o fim do Evento" }



    if (erro == 0) {

        document.querySelector('.modal_Eventos').style.display = "block";

        document.querySelector('.nome_evento').innerHTML = nomeEvento
        document.querySelector('.descricao_evento').innerHTML = descEvento
        document.querySelector('.endereco_evento').innerHTML = enderecoEvento


        var dataHora = new Date(dateTime_inicio);

        var dia = dataHora.getDate().toString().padStart(2, "0");
        var mes = (dataHora.getMonth() + 1).toString().padStart(2, "0");
        var ano = dataHora.getFullYear().toString();

        var hora = dataHora.getHours().toString().padStart(2, "0");
        var minutos = dataHora.getMinutes().toString().padStart(2, "0");
        var segundos = dataHora.getSeconds().toString().padStart(2, "0");

        var dataHoraFormatada_inicio = dia + "/" + mes + "/" + ano + " [" + hora + ":" + minutos + "]";
        // dataHoraFormatada_inicio = dataHoraFormatada_inicio.replace("[", " ").replace("]", " ");

        var dataHora = new Date(dateTime_fim);

        var dia = dataHora.getDate().toString().padStart(2, "0");
        var mes = (dataHora.getMonth() + 1).toString().padStart(2, "0");
        var ano = dataHora.getFullYear().toString();

        var hora = dataHora.getHours().toString().padStart(2, "0");
        var minutos = dataHora.getMinutes().toString().padStart(2, "0");
        var segundos = dataHora.getSeconds().toString().padStart(2, "0");

        var dataHoraFormatada_fim = dia + "/" + mes + "/" + ano + " [" + hora + ":" + minutos + "]";
        // dataHoraFormatada_fim = dataHoraFormatada_fim.replace("[", " ").replace("]", " ");

        document.querySelector('.data_inicio').innerHTML = dataHoraFormatada_inicio
        document.querySelector('.data_fim').innerHTML = dataHoraFormatada_fim
        // document.querySelector('.tipo_locacao').innerHTML = tipoLocacao
    }


}

var cardLocacao = document.querySelector('.cont_card_locacao')

function AdicionarLocacao() {

    var tipoLocacao = document.querySelector('.nomeLocacao').value
    var descLocacao = document.querySelector('.telaLocacao').value

    var novoCardLocacao = cardLocacao.cloneNode(true)

    novoCardLocacao.classList.remove('model')

    novoCardLocacao.querySelector('.tipo_locacao').innerHTML = tipoLocacao
    novoCardLocacao.querySelector('.descricao_locacao').innerHTML = descLocacao

    document.querySelector('.cont_locacao').appendChild(novoCardLocacao)

    var novo_locacoes = {
        "tipo": tipoLocacao,
        "descricao": descLocacao
    }

    locacoes.push(novo_locacoes)

    document.querySelector('.nomeLocacao').value = ""
    document.querySelector('.telaLocacao').value = ""

}

function RemoverLocacao(e) {
    var tipo_locacao = e.parentNode.querySelector('.tipo_locacao').innerHTML

    var posicao_locacao = locacoes.findIndex(l => l.tipo == tipo_locacao)

    if (posicao_locacao !== -1) {
        locacoes.splice(posicao_locacao, 1)

        var div = document.querySelector('.cont_locacao')
        var filho = div.children[posicao_locacao]

        if (filho !== null) {
            div.removeChild(filho)
        }
    }
}

var cardConvidado = document.querySelector('.cont_card_convidados')


function AdicionarConvidados() {


    var nomeConvidado = document.querySelector('.nomeConvidado').value
    var telefone = document.querySelector('.telConvidado').value

    var novoCardConvidado = cardConvidado.cloneNode(true)


    novoCardConvidado.classList.remove('model')

    novoCardConvidado.querySelector('.nome_convidado').innerHTML = nomeConvidado
    novoCardConvidado.querySelector('.telefone_convidado').innerHTML = telefone


    document.querySelector('.cont_convidados').appendChild(novoCardConvidado)

    var novo_convivado = {
        "nome": nomeConvidado,
        "telefone": telefone
    }

    convidado.push(novo_convivado)

    document.querySelector('.nomeConvidado').value = ""
    document.querySelector('.telConvidado').value = ""

}

function RemoverConvidado(e) {
    var tel_convidado = e.parentNode.querySelector('.telefone_convidado').innerHTML

    var posicao_convidado = convidado.findIndex(c => c.telefone == tel_convidado)

    if (posicao_convidado !== -1) {
        locacoes.splice(posicao_convidado, 1)

        var div = document.querySelector('.cont_convidados')
        var filho = div.children[posicao_convidado]

        if (filho !== null) {
            div.removeChild(filho)
        }
    }
}

function BtnCriarEvento() {

    var nomeEvento = document.querySelector('.nomeEvento').value
    var descEvento = document.querySelector('.descricaoEvento').value
    var enderecoEvento = document.querySelector('.enderecoEvento').value
    var dateTime_inicio = document.querySelector('.dateTime_inicio').value
    var dateTime_fim = document.querySelector('.dateTime_fim').value


    let options = JSON.stringify({
        "idUsuario": 1,
        "cnpjProdutor": "12313131",
        "tipo_evento": "",
        "descricao": descEvento,
        "nome_evento": nomeEvento,
        "endereco_evento": enderecoEvento,
        "data_hora_inicio": dateTime_inicio,
        "data_hora_fim": dateTime_fim,
        "status": "Aberto"
    })

    console.log(options);

    fetch("http://localhost:3000/eventos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": options
    })
        .then(res => {
            if (res.status == 200) {

            }
        })

    if (locacoes != null) {

        var ultimoEvento = 0;
        listaEventos.forEach(le => {

            ultimoEvento = le.id_eventos

        })

        console.log('Último Evento' + ultimoEvento);
        locacoes.forEach(l => {

            let options = JSON.stringify({
                "tipo": l.tipo,
                "nome": "",
                "endereco": "",
                "descricao": l.descricao,
                "telefone": "",
                "email": "",
                "valor": 0.0,
                "idEvento": ultimoEvento
            })

            console.log(options);

            fetch("http://localhost:3000/locacoes", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": options
            })
                .then(res => {
                    if (res.status == 200) {


                    }
                })

        })



    }

    if (convidado != null) {

        var ultimoEvento = 0;
        listaEventos.forEach(le => {

            ultimoEvento = le.id_eventos

        })

        convidado.forEach(c => {

            let options = JSON.stringify({
                "nome": c.nome,
                "telefone": c.telefone,
                "idEvento": ultimoEvento
            })

            console.log(options);

            fetch("http://localhost:3000/convidados", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": options
            })
                .then(res => {
                    if (res.status == 200) {


                    }
                })

        })
    }

     window.location.reload()



}


function CadastrandoLocacoes() {



}