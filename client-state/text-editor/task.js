const textArea = document.getElementById('editor');

localStorage.setItem('text', '');
textArea.addEventListener('keyup', () => {
    localStorage.text = textArea.value;
});