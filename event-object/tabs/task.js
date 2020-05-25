const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));


tabs.forEach(tab => {

    tab.onclick = () => {
        tabs.forEach(tab => tab.className = 'tab');
        tabsContent.forEach(tabContent => tabContent.className = 'tab__content');
        let indexElement = tabs.indexOf(tab);
        tab.className = 'tab tab_active';
        tabsContent[indexElement].className = 'tab__content tab__content_active';

    }
});