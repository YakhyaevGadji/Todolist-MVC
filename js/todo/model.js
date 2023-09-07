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

    forTask(id) {
        const task = this.tasks.find((task) => {
            if(task.id === Number(id)) {
                return true;
            }
        });

        return task;
    }

    statusTask(taskObj) {
        if(taskObj.done === false) {
            taskObj.done = true;
        }else {
            taskObj.done = false;
        }
        
        this.saveToLocalstorage();
    }

    removeTask(taskObj) {
        const date = this.tasks.findIndex((task) => {
            if(taskObj.id === task.id) {
                return true;
            }
        });

        this.tasks.splice(date, 1);

        this.saveToLocalstorage();
    }

    saveToLocalstorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}