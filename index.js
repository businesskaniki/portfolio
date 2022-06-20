const menu = document.querySelector('.nav-item');
const menuItems = document.querySelector('.menu-item');
const hamburger_button = document.querySelector('#humb');
const close_button = document.querySelector('.close-btn');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon');

function onClick() {
        if (menu.classList.contains("showMenu")) {
          menu.classList.remove("showMenu");
          closeIcon.style.display = "none";
          menuIcon.style.display = "block";
        } else {
          menu.classList.add("showMenu");
          closeIcon.style.display = "block";
          menuIcon.style.display = "none";
        }
    }
      hamburger_button.addEventListener("click", onClick);
      
      menuItems.forEach( 
        function(menuItem) { 
          menuItem.addEventListener("click", onClick);
        }
      )