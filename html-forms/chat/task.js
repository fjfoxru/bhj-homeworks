const chatSide = document.querySelector('.chat-widget__side');
let timeout;
chatSide.addEventListener('click', () => {
    chatSide.closest('.chat-widget').classList.add('chat-widget_active');
    timeout = setTimeout(robotSay, 30000);  
})
const messageInput = document.getElementById('chat-widget__input');
const messagesArea = document.getElementById('chat-widget__messages');
const robotMessages = ['Ответ 1', 'Ответ 2', 'Ответ 3'];
function robotSay () {
    let indexRobotMessage = Math.floor(Math.random() * (Math.floor(robotMessages.length - 1) + 1));
    messageDate = new Date;
    messagesArea.innerHTML += `
    <div class="message">
        <div class="message__time">${messageDate.getHours()}:${messageDate.getMinutes()}</div>
        <div class="message__text">
        ${robotMessages[indexRobotMessage]}
        </div>
    </div>
    `;
}
messageInput.addEventListener('focus', () => {
    clearTimeout(timeout);
    document.addEventListener('keyup', event => {
    if (event.key == 'Enter' && messageInput.value != '') {
        let messageDate = new Date;
        messagesArea.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${messageDate.getHours()}:${messageDate.getMinutes()}</div>
            <div class="message__text">
            ${messageInput.value}
            </div>
        </div>
        `;
        messageInput.value = '';
        robotSay();
    }
    });
});
messageInput.addEventListener('blur', () => {
    timeout = setTimeout(robotSay, 30000);
});