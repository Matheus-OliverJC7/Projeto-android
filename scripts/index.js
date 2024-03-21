const lines = document.querySelectorAll('.line');
const menuIcon = document.querySelector('.menu-mobile-icon');
menuIcon.addEventListener('click', function(){
    let classList = ['active-line1','active-line2','active-line3'];
    for(let i = 0;i<lines.length;i++){
        lines[i].classList.toggle(classList[i]);
    }
});