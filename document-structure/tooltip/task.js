const hasTooltips = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.querySelector('.tooltip');


hasTooltips.forEach(hasTooltip => {


   

    hasTooltip.addEventListener('click', (event) => {
        event.preventDefault();

        hasTooltip.getBoundingClientRect();

        tooltip.textContent = hasTooltip.getAttribute('title');
        tooltip.style.top = hasTooltip.getBoundingClientRect().top + hasTooltip.getBoundingClientRect().height + 'px';
        tooltip.style.left = hasTooltip.getBoundingClientRect().left + 'px';
        tooltip.classList.add('tooltip_active');

      
       

    });



});