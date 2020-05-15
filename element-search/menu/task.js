const menuLinks = Array.from(document.getElementsByClassName('menu__link'));
const allSubMenus = Array.from(document.getElementsByClassName('menu_sub'));


menuLinks.forEach( link => {
    link.onclick = () => {
        allSubMenus.forEach(submenu => submenu.className = 'menu menu_sub' );
        let subMenu = link.nextElementSibling;
        if (subMenu != null) {
            subMenu.className = 'menu menu_sub menu_active';
            return false;
        }
    }
}




)