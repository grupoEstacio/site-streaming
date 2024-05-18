let btn = document.querySelector('.olho');








btn.addEventListener('click', ()=>{
    let inputsenha = document.querySelector('#senha')
    if(inputsenha.getAttribute('type') == 'password'){
        inputsenha.setAttribute('type', 'text')
    }else {
        inputsenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario');
    let labelUsuario = document.querySelector('#labelUsuario');

    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');

    let msgErro = document.querySelector('#erro');
    let msgSucesso = document.querySelector('#sucesso');

    let listaUser = []
    let userValida = {
        nome: null,
        user:null,
        senha: null
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser?.forEach((item)=> {
        if(usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValida = {
                nome: item.nomeCade,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    });

    if(usuario.value == userValida.user && senha.value == userValida.senha){
        window.location.href = '../assets/filmes.html'

        let matRandom = Math.random().toString(16).substring(2)
        let token = matRandom + matRandom


        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValida))
        msgSucesso.innerHTML = 'Sucesso!'
        
    }else {
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '[ERROR]'
        usuario.focus()
    }
}