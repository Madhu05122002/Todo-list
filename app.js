let button=document.getElementById('add');
let todolist=document.getElementById('todolist');
let input=document.getElementById('input');
//initially todo input box will be an empty
let todos=[];

button.addEventListener('click',()=>{
    //when the 'add' button is clicked,the input value is added to the empty array
    todos.push(input.value)
    //call the function to add the new item to the list
    addtodo(input.value)
    //after adding,clear the input field
    input.value=" "
})

function addtodo(todo){
    //create a paragraph element for each todo item
    let para=document.createElement('p')
    //set the text inside the paragraph to the todo item
    para.innerText=todo
    //append the paragraph tothe todo list container so it appears onthe page
    todolist.appendChild(para)
    //when the user clicks on an item,apply a strikethrough effects to mark it as completed
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
    })
    //when the user double clicks an item,remove it from the list
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        removeEventListener(todo)
    })
    
}
