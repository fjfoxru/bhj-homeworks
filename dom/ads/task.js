const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
    const rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));
    rotatorCases.forEach(rotatorCase => {
        rotatorCase.style.color = rotatorCase.dataset.color;
    });
    function setCase () {
        let rotatorActiveCase = rotator.querySelector('.rotator__case_active');
        let index = rotatorCases.indexOf(rotatorActiveCase);

        if (index == rotatorCases.length - 1) {
            rotatorCases[index].classList.remove('rotator__case_active');
            index = 0;
            rotatorCases[index].classList.add('rotator__case_active');
        } else {
            rotatorCases[index].classList.remove('rotator__case_active');
            rotatorCases[index + 1].classList.add('rotator__case_active');
        }
    }
    setInterval(setCase, 1000);
});