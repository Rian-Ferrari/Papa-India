function abrirNav() {
    document.getElementById("hamburger").style.width = '100%';
}

function fecharNav() {
    document.getElementById("hamburger").style.width = '0';
}

function mudarParaInicio() {
    window.location.href="Inicial.html";
}

let slides = document.querySelectorAll('.slide-container');

let index = 0; 

function next() {
    slides[index].classList.remove('active');

    index = (index + 1) % slides.length;
     
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');

    index = (index - 1 + slides.length) % slides.length;
     
    slides[index].classList.add('active');
}

setInterval(next, 7000);