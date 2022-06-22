const Humb = document.querySelector('#humb');
const Menu = document.querySelector('.nav-ul');

Humb.addEventListener('click', () =>{
  Humb.classList.toggle('active');
  Menu.classList.toggle('active');
});