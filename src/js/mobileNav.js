const nav = {
  mobileNav: function(){
    const mobileNav = document.querySelector('.mobile-nav-trigger');
    mobileNav.addEventListener('click', () => {
     let navUl = document.querySelector('nav ul');
     if(navUl.classList == 'visible'){
        navUl.classList.remove('visible');
      }
      else {
        navUl.classList.add('visible');
      }
    });
  }
};


