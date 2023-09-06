export default class Model {
    constructor() {
        this.tasks = [];
        this.renderLocalstorage();
    }

    renderLocalstorage() {
        const date = localStorage.getItem('tasks');
        if(date) {
            this.tasks = JSON.parse(date);
        }
    }

    addTask(text) {
        const infoTask = {
            id: Date.now(),
            value: text,
            done: false
        }
        
        this.tasks.push(infoTask);
        this.saveToLocalstorage();

        return infoTask;
    }

    saveToLocalstorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}