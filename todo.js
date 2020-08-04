var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer café da manhã',
    'Estudar Javascript',
    'Acessar comunidade Rocketseat'
]

function renderTodos(){
    listElement.innerHTML = ''

    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
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