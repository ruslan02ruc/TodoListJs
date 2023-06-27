import { NoteList } from "./NoteList.js"

export class ToDo {
    _currentUser = 'todo'
    _users = []
    _notes = null

    constructor(container, currentTitle = 'Список дел', currentKey = 'todo', currentDef = []) {
        this.container = container

        this.nav = document.querySelector('.nav')
        this.title = document.querySelector('.title')
        this.form = document.querySelector('#new-task-from')
        this.input = document.querySelector('#new-task-input')
        this.button = document.querySelector('#new-task-submit')
        this.list = document.getElementById('tasks')

        console.log(this.input);
        console.log(this.button);

        this.input.addEventListener('input', () => {
            this.button.disabled = false

            if(this.input.value.trim().length == 0) {
                this.button.disabled = true
            }
        })

        this.addUser(currentTitle, currentKey, currentDef)

        this.currentUser = currentKey
        

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

    set currentUser(value) {
        this._currentUser = value

        let currentUser = null

        for (const user of this._users) {
            if(user.key == value) {
                currentUser = user
                user.button.classList.add('active')
            } else {
                user.button.classList.remove('active')
            }
        }

        this.title.textContent = currentUser.title 
        
        this._notes = new NoteList(this.list, value, currentUser.def)
    }

    get currentUser() {
        return this._currentUser
    }


    addUser(title, key, def=[]) {
        let button = document.createElement('button')
        button.classList.add('nav-btn')
        button.type = 'button'
        button.textContent = title

        button.addEventListener('click', () => {
            this.currentUser = key
        })

        this._users.push({
            title,
            key,
            def,
            button
        })

        this.nav.append(button)
    }

    removeUser(key) {
        if(this._users.length <= 1) {
            console.log('user>0');
            return
        }

        for (let i = 0; i < this._users.length; i++) {
            if(this._users[i].key == key) {
                this._users[i].button.remove()
                this._users.splice(i, 1)
            }
        }

        if(this.currentUser == key) {
            this.currentUser == this._users[0].key
        }
    }

}