let btn = document.querySelector('#senha');
let confbtn = document.querySelector('#conf_senha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validanome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validausuario = false;

let senha1 = document.querySelector('#senha1');
let labelSenha1 = document.querySelector('#labelSenha1');
let validasenha = false;

let confSenha = document.querySelector('#confSenha');
let labelConfSenha = document.querySelector('#labelConfSenha');
let validaconfsenha = false;

let msgerro = document.querySelector('#erro');
let msgsucesso = document.querySelector('#sucesso')



nome.addEventListener('keyup', () => {
    if(nome.value.length < 3 ){
        labelNome.setAttribute('style', 'color: red;');
        nome.setAttribute('style', 'border-color: red;');
        labelNome.innerHTML = 'Nome *Nome deve ter no mínimo três caracteres';
        validanome = false;
    }else{
        labelNome.setAttribute('style', 'color: green;')
        nome.setAttribute('style', 'border-color: green;')
        labelNome.innerHTML = 'Nome'
        validanome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 3 ){
        labelUsuario.setAttribute('style', 'color: red;');
        usuario.setAttribute('style', 'border-color: red;');
        labelUsuario.innerHTML = 'Usuário *Usuário deve ter no mínimo três caracteres';
        validausuario = false;
    }else{
        labelUsuario.setAttribute('style', 'color: green;')
        usuario.setAttribute('style', 'border-color: green;');
        labelUsuario.innerHTML = 'Usuário'
        validausuario = true;
    }
})

senha1.addEventListener('keyup', () => {
    if(senha1.value.length < 6 ){
        labelSenha1.setAttribute('style', 'color: red;');
        senha1.setAttribute('style', 'border-color: red;');
        labelSenha1.innerHTML = 'Senha *Senha deve ter no mínimo 6 caracteres';
        validasenha = false;
    }else{
        labelSenha1.setAttribute('style', 'color: green;');
        senha1.setAttribute('style', 'border-color: green;');
        labelSenha1.innerHTML = 'Usuário';
        validasenha = true;
    }
})

confSenha.addEventListener('keyup', () => {
    if(confSenha.value != senha1.value ){
        labelConfSenha.setAttribute('style', 'color: red;')
        confSenha.setAttribute('style', 'border-color: red;')
        labelConfSenha.innerHTML = 'As senhas não conferem '
        validaconfsenha = false;
    }else{
        labelConfSenha.setAttribute('style', 'color: green;')
        confSenha.setAttribute('style', 'border-color: green;')
        labelConfSenha.innerHTML = 'Confirmar senha';
        validaconfsenha = true;
    }
})


function cadastrar() {
    if(validanome && validausuario && validasenha && validaconfsenha) {
        let listaUser =JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad : nome.value,
                userCad: usuario.value,
                senhaCad: senha1.value
            }
        )

        localStorage.setItem('listaUser',JSON.stringify(listaUser))

            setTimeout(() =>{
                window.location.href = './login.html'
            }, 2000)

        msgsucesso.setAttribute('style', 'display: block');
        msgsucesso.innerHTML = '<strong>Cadastrando usuário...</strong>';
        msgerro.setAttribute('style', 'display: none');
        msgerro.innerHTML = ' ';

    }else {
        msgerro.setAttribute('style', 'display: block');
        msgerro.innerHTML = '<strong>Preencha todos os campos corretamente para se cadastrar</strong>';
        msgsucesso.setAttribute('style', 'display: none');
        msgsucesso.innerHTML = '';
    }
}

btn.addEventListener('click', ()=>{
    let inputsenha = document.querySelector('#senha1')
    if(inputsenha.getAttribute('type') == 'password'){
        inputsenha.setAttribute('type', 'text')
    }else {
        inputsenha.setAttribute('type', 'password')
    }
})

confbtn.addEventListener('click', ()=>{
    let confinputsenha = document.querySelector('#confSenha')
    if(confinputsenha.getAttribute('type') == 'password'){
        confinputsenha.setAttribute('type', 'text')
    }else {
        confinputsenha.setAttribute('type', 'password')
    }
})
