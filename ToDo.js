import { NoteList } from "./NoteList.js"

export class ToDo {
    _currentUser = 'todo'
    _users = []
    _notes = null

    constructor(container) {
        this.container = container

        this.form = document.querySelector('#new-task-from')
        this.input = document.querySelector('#new-task-input')
        this.button = document.querySelector('#new-task-submit')
        this.list = document.getElementById('tasks')

        console.log(this.input);
        console.log(this.button);

        this._notes = new NoteList(this.list)

        this.input.addEventListener('input', () => {
            this.button.disabled = false

            if(this.input.value.trim().length == 0) {
                this.button.disabled = true
            }
        })

        this.form.addEventListener('click', (e) => {
            e.preventDefault()

            if(!this.input.value) {
                return
            }

            if(this._notes) {
                this._notes.add(this.input.value)
            }

            this.button.disabled = true
            this.input.value = ''
        }) 
    }

    addUser(title, key, def=[]) {
        
    }
}