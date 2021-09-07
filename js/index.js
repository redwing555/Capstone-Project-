const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-desktop-container');
const body = document.querySelector('body');
//const close = document.querySelector('.close');





function openMenu() {

    

    menu.classList.add('clickme');
    menu.classList.remove('nav-desktop-container');
    body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', openMenu);
  

  
   function closeMenu() {

    menu.classList.remove('clickme');
    menu.classList.add('nav-desktop-container');
    body.style.overflow = 'scroll';


    
   }
  
   ///hamburger.addEventListener('click', closeMenu);
  
   const navList = document.querySelectorAll('.mnitem');
   for (let i = 0; i < navList.length; i += 1) {
     navList[i].addEventListener('click', closeMenu);
   }