
var servicos = []

function carregar() {
    const options = { method: 'GET' };
    fetch('http://localhost:3000/usuarios', options)
        .then(response => response.json())
        .then(resp => {
            produtor = resp;
            listarProdutor();
        });

    fetch('http://localhost:3000/servicos', options)
        .then(response => response.json())
        .then(resp => {
            servicos = resp;
        });

}

const container = document.querySelector(".cont_cards");
const cards = document.querySelector(".cards");

var produtor = []

var model = document.querySelector('.cont_contato')

var card_servicos = document.querySelector('.servicos')


function listarProdutor() {

    produtor.forEach(info => {

        if (info.tipo == "Produtor") {

            var lista = cards.cloneNode(true);

            lista.style.display = "flex"
            lista.querySelector(".title_produtor").innerHTML = info.nomeFantasia;
            lista.querySelector(".id_produtor").innerHTML = info.id_usuario;
            // lista.querySelector(".tipo_produtor").innerHTML = info.;


            container.appendChild(lista)
        }

    })
}

function verProdutor() {
    alert('a')
}

var modelVerProduto = document.querySelector('.paginaProdutor')

function ModalVerProdutor(e) {
    modelVerProduto.classList.remove('model')

    var id = e.querySelector('.id').innerHTML
    var nome = e.querySelector('.titulo').innerHTML

    document.querySelector('.nome_produtor').innerHTML = nome
    document.querySelector('#id').innerHTML = id
    console.log(nome);
}

function ModalFecharProdutor() {
    modelVerProduto.classList.add('model')

}

var modelInfos = document.querySelector('.informacoes_contato')

function modelInfo(e) {
    modelInfos.classList.remove('model')
    var id = e.parentNode.parentNode.parentNode.querySelector('#id').innerHTML
    console.log(id)
}

var modelInfosServicos = document.querySelector('.servicos_prestados')
var informacoesContato = document.querySelector('.informacoes_contato')
var horario = document.querySelector('.horario')

function fecharModalServico() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.remove('model')
    horario.classList.add('model')
}
function fecharModalContato() {
    informacoesContato.classList.remove('model')
    modelInfosServicos.classList.add('model')
    horario.classList.add('model')
}
function fecharModalHorario() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.add('model')
    horario.classList.remove('model')
}

function fecharmodais() {
    informacoesContato.classList.add('model')
    modelInfosServicos.classList.add('model')
    horario.classList.add('model')
}

function ConferirProdutor(e) {

    var div = e.parentNode.parentNode.querySelector('.detais_produtor')

    var id = e.parentNode.parentNode.querySelector('.id_produtor').innerHTML

    document.querySelector('.paginaProdutor').classList.remove('model')

    console.log(id);
    produtor.forEach(p => {
        if (id == p.id_usuario) {

            document.querySelector('.title_produtor').innerHTML = p.nomeFantasia

            var telefone = p.telefone

            document.querySelector('#contact').innerHTML = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')
            document.querySelector('#email').innerHTML = p.email
            document.querySelector('#cnpj').innerHTML = p.cnpj

        }

    })

}

function mostrarModalUser() {

    document.querySelector('.modal_user').classList.toggle('model')

}

function ModalProdutor(e) {

    document.querySelector('.modal_produtor').classList.toggle('model')

    var id = e.querySelector('.id_produtor').innerHTML

    console.log(id);
    produtor.forEach(u => {

        if (id == u.id_usuario) {

            document.querySelector('.nome_produtor').innerHTML = u.nomeFantasia
            document.querySelector('.contato').innerHTML = u.telefone
            document.querySelector('.email').innerHTML = u.email
            document.querySelector('.cnpj').innerHTML = u.cnpj

            servicos.forEach((s, i) => {


                if (s.id_servicos == id) {

                    var novo_card_servicos = card_servicos.cloneNode(true)

                    novo_card_servicos.classList.remove('model')

                    novo_card_servicos.innerHTML = s.nome

                    console.log(novo_card_servicos);
                    document.querySelector('.cont_servicos').appendChild(novo_card_servicos)

                }
            })

        }

    })
}

var search_btn = document.querySelector('#button_src')
const INPUT_BUSCA = document.querySelector('.busca')
const TABELA_CLIENTES = document.querySelector('.cont_cards')

console.log(search_btn);

search_btn.addEventListener('click', () => {

    let expressao = INPUT_BUSCA.value


    let linhas = TABELA_CLIENTES.getElementsByClassName('cards')


    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue
        }

        let conteudoDaLinha = linhas[posicao].innerHTML



        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = ''
        } else {
            linhas[posicao].style.display = 'none'

        }

    }

})

function FecharProdutor() {

    document.querySelector('.modal_produtor').classList.toggle('model')

}

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

function enviarArquivos(event) {
    event.preventDefault();
    const input = document.querySelector('#img');
    const formData = new FormData();

    for (let i = 0; i < input.files.length; i++) {
        formData.append('img', input.files[i]);
        console.log("for")
    }

    fetch(`http://localhost:3000/enviar/${idUsuario.innerHTML}`, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}

const input = document.querySelector('#img');
const previewContainer = document.querySelector('#preview-container');

input.addEventListener('change', () => {
    mostrarPreview(input);
    mostrarBotao()
});

function mostrarBotao() {
    var btnConfirmar = document.querySelector(".btnConfirmarImg")
    var btnConfirmarClose = document.querySelector(".btnConfirmarImgClose")
    btnConfirmar.classList.remove("model")
    btnConfirmarClose.classList.remove("model")
}
function mostrarPreview() {
    previewContainer.innerHTML = ''; // Limpa o conteúdo da div

    const files = input.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith('image/')) { // Verifica se o arquivo é uma imagem
            continue;
        }

        const img = document.createElement('img');
        img.classList.add('preview');
        previewContainer.appendChild(img);

        const reader = new FileReader();
        reader.onload = (event) => {
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}


const idUsuario = document.querySelector(".idLogin");
var userinfo = JSON.parse(localStorage.getItem("info"));

idUsuario.innerHTML = userinfo.id_user;
