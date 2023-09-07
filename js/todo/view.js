export default class View {
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTask(task);
        });
    }

    elements = {
        list: document.querySelector('#taskList'),
        input: document.querySelector('#newTask'),
        form: document.querySelector('form')
    }

    renderTask(taskObject) {
        const completedTask = taskObject.done ? 'completed' : '';
        const checkedTask = taskObject.done ? 'checked' : '';

        const taskHTML = `<li class="todo-item" data-id="${taskObject.id}">
            <label class="todo-item-label">
                <input class="checkbox" type="checkbox" ${checkedTask}/>
                <span class="${completedTask}">${taskObject.value}</span>
                <button class="btn btn-secondary btn-sm" data-action="delete">Удалить</button>
            </label>
        </li>`;

        this.elements.list.insertAdjacentHTML('beforeend', taskHTML);
    }

    statusTask(taskObj) {
        const task = this.elements.list.querySelector(`[data-id="${taskObj.id}"]`);
        const taskSpan = task.querySelector('span');

        if(taskObj.done === true) {
            taskSpan.classList.add('completed');
        }else {
            taskSpan.classList.remove('completed');
        }
    }

    removeTask(taskObj) {
        const parentEl = this.elements.list.querySelector(`[data-id="${taskObj.id}"]`);
        parentEl.remove();
    }

    clearInput() {
        this.elements.input.value = '';
    }
}