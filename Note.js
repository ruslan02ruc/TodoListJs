import { NoteList } from "./NoteList.js"

export class Note {
    _name = ""
    _done = false

    constructor(container, name="", done = false) {
        this.item = document.createElement('li')
        this.nameInput = document.createElement('input')
        
        this.buttonGroup = document.createElement('div')
        this.doneBtn = document.createElement('button')
        this.editBtn = document.createElement('button')
        this.removeBtn = document.createElement('button')

        this.nameInput.type="text"
        this.nameInput.classList.add('task-item-input')
        this.nameInput.setAttribute('readonly', 'readonly')

        this.buttonGroup.classList.add('task-item-btn')

        this.doneBtn.classList.add('list-done-btn')
        this.doneBtn.id = 'done-btn'
        this.doneBtn.innerText = 'Готово'

        this.editBtn.classList.add('list-edit-btn')
        this.editBtn.id = 'edit-btn'
        this.editBtn.innerHTML = 'Изменить'

        this.removeBtn.classList.add('list-remove-btn')
        this.removeBtn.id = 'remove-btn'
        this.removeBtn.innerHTML = 'Удалить'

        // this.list_el.append(item)
        
        this.doneBtn.addEventListener('click', () => {
            this.done =! this.done
        })

        this.editBtn.addEventListener('click', () => {
            this.edit()
        })

        this.removeBtn.addEventListener('click', () => {
            if(confirm('Вы уверены?')){
                this.delete()
                // displayAlert('danger', 'Удаленно') 
            }
        })

        this.buttonGroup.append(this.doneBtn)
        this.buttonGroup.append(this.editBtn)
        this.buttonGroup.append(this.removeBtn)

        this.item.append(this.nameInput)
        this.item.append(this.buttonGroup)

        this.name = name
        this.done = done
        this.container = container

        if(container instanceof NoteList) {
            container.list.append(this.item)
        } else {
            container.append(this.item)
        }

    }

    set name(value) {
        this._name = value
        this.nameInput.value = value
    }

    get name() {
        return this._name
    }

    set done(value) {
        this._done = value

        if(value) {
            this.item.classList.add('done')
        } else {
            this.item.classList.remove('done')
        }

        if(this.container instanceof NoteList) {
            this.container.save()
        }
    } 

    get done() {
        return this._done
    }

    delete() {
        this.item.remove()

        if(this.container instanceof NoteList) {
            this.container.remove(this)
        }
        console.log(this.container);
    }

    edit() {
        if (this.editBtn.innerHTML === 'Изменить') {  
            this.nameInput.removeAttribute('readonly')
            this.nameInput.focus()
            this.editBtn.innerHTML = 'Сохранить'

        }else {
            this.nameInput.setAttribute('readonly', 'readonly')
            this.editBtn.innerHTML = 'Изменить'
            
            if(this.container instanceof NoteList) {
                this.container.edit(this)
            }
        }
    }
    
}