if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar o conteúdo');
    window.location.href = '../assets/login.html'
}

let userLogado = JSON.parse(localStorage.getItem(userLogado));

let logado = document.querySelector('#logado');
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../assets/login.html'
}
