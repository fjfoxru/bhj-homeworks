const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.response);
        pollTitle.textContent = response.data.title;
        for (let answer of response.data.answers) {
            pollAnswers.insertAdjacentHTML('beforeend', 
                `<button data-answerid='${response.data.answers.indexOf(answer)}'  data-id='${response.id}' class="poll__answer">${answer}</button>`
            );
        }
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
        let xhrSendResult = new XMLHttpRequest();
        xhrSendResult.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhrSendResult.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhrSendResult.send( `vote=${event.target.dataset.id}&answer=${event.target.dataset.answerid}`);

    }
});
