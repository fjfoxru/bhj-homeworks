const fontSizeChangeButtons = Array.from(document.getElementsByClassName('font-size'));

fontSizeChangeButtons.forEach(fontSizeChangeButton => {

    fontSizeChangeButton.onclick = () => {
        return false;
    }
    fontSizeChangeButton.addEventListener('click', () => {
        fontSizeChangeButtons.find(button => button.classList.contains('font-size_active') ? button.classList.remove('font-size_active') : '');
        fontSizeChangeButton.classList.add('font-size_active');

        let book = fontSizeChangeButton.closest('.book');

        if (fontSizeChangeButton.dataset.size == 'small') {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
            
            
        } else if (fontSizeChangeButton.dataset.size == 'big') {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        }
    })
});


