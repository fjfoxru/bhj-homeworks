const taskInput = document.getElementById('task__input');
const taskButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');



function addTaskToList() {
    if (taskInput.value) {
        taskList.insertAdjacentHTML('afterBegin', `
            <div class="task">
                <div class="task__title">
                    ${taskInput.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
        taskList.querySelector('.task__remove').addEventListener('click', event => {
            event.target.closest('.task').remove();
        });
        taskInput.value = null;
}

}



taskButton.addEventListener('click', event => {
    event.preventDefault();
    addTaskToList();
});

document.addEventListener('keyup', event => {
    if (event.key == 'Enter' && taskInput === document.activeElement) {
        addTaskToList();
    }
});