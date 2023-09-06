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
        const taskHTML = `<li class="todo-item" id="${taskObject.id}">
            <label class="todo-item-label">
                <input class="checkbox" type="checkbox" />
                <span>${taskObject.value}</span>
                <button class="btn btn-secondary btn-sm">Удалить</button>
            </label>
        </li>`;

        this.elements.list.insertAdjacentHTML('beforeend', taskHTML);
    }
    clearInput() {
        this.elements.input.value = '';
    }
}