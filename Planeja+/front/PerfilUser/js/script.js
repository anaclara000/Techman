
//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')
var title_menu = document.querySelector('.title_menu')


function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')

}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink),
    title_menu.classList.add('model')

)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
    title_menu.classList.toggle('model')

})
var promotores = [];
function carregar() {
    fetch("http://localhost:3000/usuarios")
        .then(resp => { return resp.json() })
        .then(lancamento => {
            promotores = lancamento;
            listarPromotor();
        });
}
const contInfos = document.querySelector(".cont-infos");
const contMsg = document.querySelector(".cont-mensagens");

function listarPromotor() {
    promotores.forEach(p => {
        var lista = contInfos.cloneNode(true)
        lista.style.display = "flex"
        lista.querySelector('.id-promotor').innerHTML = p.id_usuario
        lista.querySelector('.nome-promotor').innerHTML = p.raz
        contMsg.appendChild(lista)
    })
}
const messages = document.querySelector('#messages')
const contMessages = document.querySelector('.container')

function exibirMensagem(e) {
    var idPromotor = e.querySelector('.id-promotor').innerHTML
    var nomePromotor = e.querySelector('.nome-promotor').innerHTML
    const options = { method: 'GET' }
    console.log(idPromotor)
    fetch('http://localhost:3000/messagens', options)
        .then(resp => resp.json())
        .then(resp => {
            messages.innerHTML = ""
            resp.forEach(p => {
                if (p.destinatarioId == idPromotor) {
                    var lista = document.createElement('span')
                    lista.classList.add('conteudo')
                    lista.innerHTML = p.conteudo
                    document.querySelector('.nomePromotor').innerHTML = nomePromotor
                    messages.appendChild(lista)
                } else {
                    var lista = document.createElement('span')
                    lista.classList.add('conteudoRemetente')
                    lista.innerHTML = p.conteudo

                    messages.appendChild(lista)
                }


            })
        })

}
const ws = new WebSocket('ws://localhost:3000/chat');

ws.onopen = () => {
    console.log('Conexão estabelecida.');
};

const receivedMessages = new Set();

ws.onmessage = (event) => {
    const messagesDiv = document.getElementById('messages');
    const mensagem = JSON.parse(event.data);
    const remetenteId = mensagem.remetenteId;

    if (receivedMessages.has(mensagem.id_mensagem)) {
        return; // Ignorar a mensagem duplicada
    }

    receivedMessages.add(mensagem.id_mensagem);

    const conteudoSpan = document.createElement('span');
    conteudoSpan.textContent = mensagem.conteudo;

    if (remetenteId == 2) {
        conteudoSpan.classList.add('conteudoRemetente');
        conteudoSpan.style.display = "flex"
    } else {
        conteudoSpan.classList.add('conteudo');
        conteudoSpan.style.display = "flex"
    }

    messagesDiv.appendChild(conteudoSpan);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

ws.onclose = () => {
    console.log('Conexão encerrada.');
};

function sendMessage() {
    const input = document.getElementById('input');
    const remetenteId = 2;
    const destinatarioId = 1;
    const conteudo = input.value;
    const data = new Date().toISOString(); // Obtém a data atual em formato ISO string

    const message = {
        remetenteId,
        destinatarioId,
        conteudo,
        data, // Adiciona a propriedade 'data' com a data atual
    };

    console.log(message);
    ws.send(JSON.stringify(message));
    input.value = '';
}

// Adicionar evento de teclado para o campo de entrada
const input = document.getElementById('input');
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value != '') {
        sendMessage();
    } else {
        console.log('nada');
    }
});
