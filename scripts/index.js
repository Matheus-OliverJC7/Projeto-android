const lines = document.querySelectorAll('.line');
const menuIcon = document.querySelector('.menu-mobile-icon');
const menu = document.querySelector('.menu-mobile');
menuIcon.addEventListener('click', activeMenu);
function activeMenu(){
    let classList = ['active-line1','active-line2','active-line3'];
    for(let i = 0;i<lines.length;i++){
      lines[i].classList.toggle(classList[i]);
    }
    menu.classList.toggle('active-menu');
    document.addEventListener('click', function(event){
      var isClickMenu = menu.contains(event.target);
      var isClickIcon = menuIcon.contains(event.target);
      if(!isClickMenu && !isClickIcon){
        for(let i = 0;i<lines.length;i++){
          lines[i].classList.toggle(classList[i]);
      }
        menu.classList.remove('active-menu');
      }
    });
}
