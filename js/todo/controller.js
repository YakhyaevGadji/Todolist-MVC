import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

view.elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = model.addTask(view.elements.input.value);
    view.renderTask(task);
    view.clearInput();
});
view.elements.list.addEventListener('click', (event) => {
    if(event.target.getAttribute('type')) {
        const parentId = event.target.closest('.todo-item').dataset.id;
        const task = model.forTask(parentId);
        model.statusTask(task);
        view.statusTask(task);
    }else if(event.target.dataset.action === 'delete'){
        const parentId = event.target.closest('.todo-item').dataset.id;
        const task = model.forTask(parentId);
        model.removeTask(task);
        view.removeTask(task);
    }
});