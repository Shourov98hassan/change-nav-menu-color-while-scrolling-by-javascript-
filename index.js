var navbar = document.getElementById('navbar');
window.onscroll = function(){
    var scroll = window.scrollY;

    if(scroll>=100){
        navbar.classList.add('after-scroll');
    }
    else{
        navbar.classList.remove('after-scroll');
    }
}