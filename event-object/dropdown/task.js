const dropdownButtons = Array.from(document.getElementsByClassName('dropdown__value'));
const dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));


dropdownButtons.forEach(dropdownButton => {
    dropdownButton.addEventListener('click', () => {
        dropdownButton.nextElementSibling.className = 'dropdown__list dropdown__list_active';
    });
});
dropdownLinks.forEach(dropdownLink => {

    dropdownLink.onclick = () => {
        return false;
    }

    dropdownLink.addEventListener('click', () => {
        dropdownLink.closest('.dropdown__list').className = 'dropdown__list';
        dropdownLink.closest('.dropdown__list').previousElementSibling.textContent = dropdownLink.textContent;

    });
});
