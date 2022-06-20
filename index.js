let nav_item = document.querySelector('#nav-item');
function onClick() {
   
    const hamburger_button = document.querySelector('#humb');
    if(hamburger_button.style.display == 'block') {
        nav_item.style.display = 'none';
    } else {
       nav_item.style.display = 'block';
    }
}
function close(){
    let close_btn = document.querySelector('#close-btn');
    if(close_btn.style.display=='block'){
        nav_item.style.display = 'none';
    }
}