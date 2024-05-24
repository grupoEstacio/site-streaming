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
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/x-circle-fill.svg";
    }
}