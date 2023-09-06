import Model from "./model.js";
import View from "./view.js";

const model = new Model();
const view = new View(model.tasks);

view.elements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = model.addTask(view.elements.input.value);
    
    view.renderTask(task);
});