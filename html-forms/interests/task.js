const checkboxs = Array.from(document.getElementsByClassName("interest__check"));

checkboxs.forEach(checkbox => {
    checkbox.onchange = () => {
        const underList = checkbox.closest('.interest').querySelector('.interests');
        if (underList != null) {

            if (checkbox.checked == true) {
                underList.querySelectorAll('.interest__check').forEach(element => element.checked = true);
            } else {
                underList.querySelectorAll('.interest__check').forEach(element => element.checked = false);
            }
            // if (Array.from(underList.querySelectorAll('.interest__check')).every(element => element.checked == true)) {
            //     underList.closest('.interests').closest('.interest').querySelector('.interest__check').checked = true;

            // }
        }
    }
});

