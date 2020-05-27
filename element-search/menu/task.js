const menuLinks = Array.from(document.getElementsByClassName('menu__link'));
const allSubMenus = Array.from(document.getElementsByClassName('menu_sub'));


menuLinks.forEach( link => {
    link.onclick = () => {   
        let subMenu = link.nextElementSibling;
        if (subMenu != null) {
                allSubMenus.forEach(allSubMenu => {
                    if (allSubMenu !== allSubMenus[allSubMenus.indexOf(subMenu)]) {
                        allSubMenu.classList.remove('menu_active');
                    }     
                });
            subMenu.classList.toggle('menu_active');
            return false;
        }
    }
});