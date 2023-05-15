const menu = document.getElementById('menu')
const submenu = document.getElementById('submenu')
const anim = document.getElementById('animation')

function clickMenu() {
    menu.classList.toggle('open');
    submenu.classList.remove('subopen')
    anim.classList.remove('rotate')
}

function clickSubMenu() {
    submenu.classList.toggle('subopen')
    anim.classList.toggle('rotate')
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
