const tooltip = document.querySelector('.tooltip');
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('has-tooltip')) {
        event.preventDefault();
        event.target.getBoundingClientRect();
        tooltip.textContent = event.target.getAttribute('title');
        tooltip.style.top = event.target.getBoundingClientRect().top + event.target.getBoundingClientRect().height + 'px';
        tooltip.style.left = event.target.getBoundingClientRect().left + 'px';
        tooltip.classList.add('tooltip_active');
    } else {
        tooltip.classList.remove('tooltip_active');      
    }
});


