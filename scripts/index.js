const lines = document.querySelectorAll('.line');
const menuIcon = document.querySelector('.menu-mobile-icon');
const menu = document.querySelector('.menu-mobile');
menuIcon.addEventListener('click', activeMenu);
function activeMenu(){
    let classList = ['active-line1','active-line2','active-line3'];
    for(let i = 0;i<lines.length;i++){
        lines[i].classList.toggle(classList[i]);
    }
    document.body.classList.toggle('body-overflow');
    menu.classList.toggle('active-menu');
}