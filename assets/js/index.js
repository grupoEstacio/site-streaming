let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function () {
    nextImage() 
}, 5000)


function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = './assets/image/menu.png';

    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = './assets/image/fechar.png';
    }
}

function nextImage() {
    count++;
    if(count > 3){
        count = 1;
    }
    document.getElementById('radio' + count).checked= true;
}function menuShowMobile() {
    let menuMobile = document.querySelector('.mobile_menu_footer');
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open');
        document.querySelector('.icon_footer').src = './assets/image/menu.png';

    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon_footer').src = './assets/image/fechar.png';
    }
}function esconderSection() {
    let terceiraSectionMobile = document.querySelector('.terceira_section_mobile');
    let terceiraSection = document.querySelector('.terceira_section')
    if (terceiraSection)

}

