let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
const table = document.getElementById('items');


xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        document.querySelector('.loader_active').classList.remove('loader_active');
        let responseValute = (JSON.parse(xhr.responseText)).response.Valute;
        for (let valute in responseValute) {
            table.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">${responseValute[valute].CharCode}</div>
                    <div class="item__value">${responseValute[valute].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>    
            `);
        }
}
};