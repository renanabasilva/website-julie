const menu = document.getElementById('menu')
const submenu = document.getElementById('submenu')
const anim = document.getElementById('animation')
const animat = document.getElementById('animat')

function clickMenu() {
    menu.classList.toggle('open');
    menu.classList.toggle('no-transition');
    submenu.classList.remove('subopen')
    anim.classList.remove('rotate')
}

function clickSubMenu() {
    if (window.innerWidth <=768) {
        submenu.classList.toggle('subopen')
        anim.classList.toggle('rotate')
    } else {
        submenu.classList.toggle('click')
        anim.classList.toggle('rotate')
        animat.classList.toggle('click')
        anim.classList.toggle('click')
    } 
}

window.onscroll = function() {
    scrollFunction();
};
  
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("gotop").style.display = "block";
    } else {
      document.getElementById("gotop").style.display = "none";
    }
}
  
function goTop() {
    document.body.scrollTop = 0; // Para navegadores que não suportam document.documentElement.scrollTop
    // document.documentElement.scrollTop = 0; // Para navegadores modernos
    window.scrollTo({top: 0, behavior:'smooth'});
}
