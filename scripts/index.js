const lines = document.querySelectorAll('.line');
const menuIcon = document.querySelector('.menu-mobile-icon');
const menu = document.querySelector('.menu-mobile');
const navItems = document.querySelectorAll('.nav-item');
menuIcon.addEventListener('click', activeMenu);
function activeMenu(){
    let classList = ['active-line1','active-line2','active-line3'];
    for(let l = 0;l<lines.length;l++){
      lines[l].classList.toggle(classList[l]);
    }
    menu.classList.toggle('active-menu');
    document.addEventListener('click', function(event){
      let isClickMenu = menu.contains(event.target);
      let isClickIcon = menuIcon.contains(event.target);
      for(let i = 0;i<navItems.length;i++){
        let isClickItem = navItems[i].contains(event.target);
        if(!isClickMenu && !isClickIcon || isClickItem){
          for(let l = 0;l<lines.length;l++){
            lines[l].classList.remove(classList[l]);
        }
          menu.classList.remove('active-menu');
        }
      }
    });
}
