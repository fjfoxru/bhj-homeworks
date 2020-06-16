const textArea = document.getElementById('editor');

textArea.addEventListener('keyup', () => {
    localStorage.text = textArea.value;
});