function onClick() {
    let nav_item = document.querySelector('#nav-item');
    const hamburger_button = document.querySelector('#humb');
    if(hamburger_button.style.display == 'block') {
        nav_item.style.display = 'none';
    } else {
       nav_item.style.display = 'block';
    }
}

