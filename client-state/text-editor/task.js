const textArea = document.getElementById('editor');

if (localStorage.text != null) {
    textArea.value = localStorage.text;
}

textArea.addEventListener('keyup', () => {
    localStorage.text = textArea.value;
});