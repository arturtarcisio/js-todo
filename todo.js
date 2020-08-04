var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer café da manhã',
    'Estudar Javascript',
    'Estudar react'
]

function renderTodos(){
    listElement.innerHTML = ''

    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var textLink = document.createTextNode('Excluir')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')


        linkElement.appendChild(textLink)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    }
}

renderTodos()

function addTodo(){
    var texto = inputElement.value

    todos.push(texto)
    inputElement.value = ''
    renderTodos()
}

buttonElement.onclick = addTodo

function deleteTodo(pos){
    todos.splice(pos, 1)
    renderTodos()
}