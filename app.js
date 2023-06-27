import { ToDo } from "./ToDo.js"

let newList = new ToDo(document.getElementById('tasks'))



// let newList = new NoteList(document.getElementById('tasks'), 'myList', [{name: 'web 1'}, {name: 'wed 2'}])

// document.getElementById('action').addEventListener('click', () => {
//     newList.add(prompt('Название дела?'))
//     console.log(newList);
// })


/**

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-from')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    const taskSubmit = document.querySelector('#new-task-submit')
    const alert = document.querySelector('.alert')
    const removeAll = document.querySelector('#remove-all-btn')

    let listArray = []

    let localData = localStorage.getItem('list')
    
    if(localData !== null && localData !== '') {
        listArray = JSON.parse(localData)
    }

    for (const itemList of listArray) {
        createTodoItem(itemList)
    }

    input.addEventListener('input', () => {
        if(input.value.trim() !== '') {
            taskSubmit.disabled = false
        } else {
            taskSubmit.disabled = true
        }
    })

    function getNewId(arr){
        let max = 0 
        for (const item of arr) {
            if(item.id > max) {
                max = item.id
            }
        }
        return max+1
    }

    function saveList(arr){
        localStorage.setItem('list', JSON.stringify(arr))
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let newItem = {
            id: getNewId(listArray),
            name: input.value.trim(),
            done: false
        }

        let todoItem = createTodoItem(newItem)
        
        displayAlert('add', 'Добавленно')

        taskSubmit.disabled = true
        listArray.push(newItem)
        saveList(listArray)
    })

    function createTodoItem(obj) {
        const item = document.createElement('li')
        const li_input = document.createElement('input')
        li_input.type="text"
        li_input.classList.add('task-item-input')
        li_input.setAttribute('readonly', 'readonly')
        li_input.value = obj.name

        const div = document.createElement('div')
        div.classList.add('task-item-btn')

        const doneBtn = document.createElement('button')
        doneBtn.classList.add('list-done-btn')
        doneBtn.id = 'done-btn'
        doneBtn.innerText = 'Готово'

        const editBtn = document.createElement('button')
        editBtn.classList.add('list-edit-btn')
        editBtn.id = 'edit-btn'
        editBtn.innerHTML = 'Изменить'

        const removeBtn = document.createElement('button')
        removeBtn.classList.add('list-remove-btn')
        removeBtn.id = 'remove-btn'
        removeBtn.innerHTML = 'Удалить'

        list_el.appendChild(item)
        item.appendChild(li_input)
        item.appendChild(div)
        div.appendChild(doneBtn)
        div.appendChild(editBtn)
        div.appendChild(removeBtn)

        input.value = ''
        
        if(obj.done === true) {
            item.classList.toggle('done')
        }

        doneBtn.addEventListener('click' , () => {
            item.classList.toggle('done')

            for (const listItem of listArray) {
                if(listItem.id == obj.id){
                    listItem.done = !listItem.done
                }
            }
            saveList(listArray)
        })

        let listItemId = 0
        editBtn.addEventListener('click', () => {

            if (editBtn.innerHTML === 'Изменить') {  
                li_input.removeAttribute('readonly')
                li_input.focus()
                editBtn.innerHTML = 'Сохранить'

                for (let i = 0; i < listArray.length; i++) {
                    if(listArray[i].id === obj.id){
                        listItemId = listArray[i].id
                    }
                }
            }else {
                li_input.setAttribute('readonly', 'readonly')
                editBtn.innerHTML = 'Изменить'
                displayAlert('add', 'Изменено')

                for (let i = 0; i < listArray.length; i++) {
                    if(listArray[i].id === listItemId){
                        listArray[i].name = li_input.value
                    }
                }
            }
            saveList(listArray)
        })

        removeBtn.addEventListener('click' , () => {
            if(confirm('Вы уверены?')){
                item.remove()
                displayAlert('danger', 'Удаленно')

                for (let i = 0; i < listArray.length; i++) {
                    if(listArray[i].id == obj.id){
                        listArray.splice(i, 1)
                    }
                }
            }
            saveList(listArray)
        })

        return {
            item,
            li_input,
            doneBtn,
            editBtn,
            removeBtn,
        }
    }

    function displayAlert(action, text) {
        setTimeout(() => {
            alert.classList.remove(`alert-${action}`)
            alert.innerHTML = `<p>${text}</p>`
        }, 1000);
        alert.classList.add(`alert-${action}`)
        alert.innerHTML = `<p>${text}</p>`
    }

    removeAll.addEventListener('click', () => {
        if(confirm('Вы уверены?')){
            localStorage.clear('list')
            location.reload()
        }
    })
})

 */