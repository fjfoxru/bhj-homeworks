const tooltips = Array.from(document.getElementsByClassName('has-tooltip'));

tooltips.forEach(tooltip => {


    const textTooltip = tooltip.getAttribute('title');
    tooltip.insertAdjacentHTML('afterEnd', `<div class="tooltip">${textTooltip}</div>`);
    const allTooltips = Array.from(document.getElementsByClassName('tooltip'));

    tooltip.addEventListener('click', (event) => {
        event.preventDefault();





        allTooltips.forEach(tooltipy => {
            if(tooltipy.classList.contains('tooltip_active')) {
                tooltipy.classList.remove('tooltip_active');
            }
        });
        


        const tooltipActive = tooltip.nextElementSibling;
        if (tooltipActive.classList.contains('tooltip')) {
            tooltipActive.classList.add('tooltip_active');
        }

       

    });



});