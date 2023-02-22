let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-list')
let task = document.querySelector('.tasks')

// let todos;
// !localStorage.todos ? todos = [] : todos = JSON.parse(localStorage.getItem('todos'));


//add btn disabled

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

//input limit: 69 char

input.oninput = function(){
    this.value = this.value.substr(0, 69);
}

//add new item to list

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-check"></i>
                    <i class="fa-solid fa-xmark"></i>
        `
        task.appendChild(newItem);
        input.value = '';
        // todos.push(newItem);
        // saveToStorage();
    } else {
        alert('Please enter a task')
    };
})


//delete item from list

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as complete

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }

})

// function saveToStorage() {
//     localStorage.setItem('todos', JSON.stringify(todos));
// }
