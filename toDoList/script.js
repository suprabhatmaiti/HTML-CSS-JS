let list=document.getElementById('listContainer');
let inputBox=document.getElementById('inputText');
let completedTask=document.getElementById("completedTask");
let taskCount=document.getElementById("taskCount");

const todoCount={
    toDo:0,
    completed:0
}
let toDoList=[];
let completedList=[];

function addFunc(){
    if(inputBox.value ===''){
        alert("empty");

    }else{
        toDoList.push(inputBox.value);

        let li=document.createElement("li");
        let span=document.createElement("span");
        span.innerHTML=inputBox.value;
        li.appendChild(span);
        list.appendChild(li);
        let button =document.createElement("button");
        button.innerHTML="X";
        li.appendChild(button);
    }
    inputBox.value="";
    inputBox.focus();
    saveData();
}

function addItem(item){
    let li=document.createElement("li");
    let span=document.createElement("span");
    span.innerHTML=item;
    li.appendChild(span);
    list.appendChild(li);
    let button =document.createElement("button");
    button.innerHTML="X";
    li.appendChild(button);
}
function addCompletedItem(item){
    let li=document.createElement("li");
    let span=document.createElement("span");
    span.innerHTML=item;
    span.classList.add("checked");
    li.appendChild(span);
    completedTask.appendChild(li);
    let button =document.createElement("button");
    button.innerHTML="X";
    li.appendChild(button);
}

inputBox.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        document.getElementById("addbtn").click();
    }
})

list.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        // console.log(e.target.previousElementSibling.innerHTML);
        const itemText = e.target.previousElementSibling.innerHTML;
        toDoList = toDoList.filter(item => item !== itemText);
        console.log(toDoList);
    }else if(e.target.tagName==="SPAN" ){
        e.target.classList.add("checked");
        completedList.push(e.target.innerText);
        toDoList = toDoList.filter(item => item !== e.target.innerText);
    }
    saveData();
    showData();
},false)

completedTask.addEventListener("click",function(e){
    e.stopPropagation();
    e.preventDefault();
   if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
        const itemText = e.target.previousElementSibling.innerHTML;
        completedList = completedList.filter(item => item !== itemText);
        console.log(completedList);
    }else if(e.target.tagName==="SPAN" ){
        e.target.classList.remove("checked");
        toDoList.push(e.target.innerText);
        completedList = completedList.filter(item => item !== e.target.innerText);
    }
    
    saveData();
    showData();
},false)

function saveData(){
    localStorage.setItem("todoList",JSON.stringify(toDoList));
    localStorage.setItem("completedList",JSON.stringify(completedList));
    localStorage.setItem("count",JSON.stringify(todoCount));
    updateCount();
}


function showData(){
    toDoList=JSON.parse(localStorage.getItem("todoList")) || [];
    completedList=JSON.parse(localStorage.getItem("completedList")) || [];
    
    list.innerHTML="";
    completedTask.innerHTML="";
    todoCount.toDo=0;
    todoCount.completed=0;
    updateCount();
    toDoList.forEach(element => {
        addItem(element);
    });
    completedList.forEach(element => {
        addCompletedItem(element);
    });
}  
showData();

function updateCount(){
    let toDo=JSON.parse(localStorage.getItem("todoList") || []).length;
    let completed=JSON.parse(localStorage.getItem("completedList") || []).length;
    todoCount.toDo=toDo;
    todoCount.completed=completed;   
    document.getElementById("counter").textContent=`To-Do: ${todoCount.toDo} | Completed: ${todoCount.completed || 0}`;
    
}

window.onload=function(){
    inputBox.focus();
}

changeTheme = () => {
    const body = document.body;
    const darkThemeButton = document.querySelector('.dark-Light-Theme');
    
    if (body.classList.contains('DarkTheme')) {
        body.classList.remove('DarkTheme');
        darkThemeButton.textContent = 'Dark Theme';
        document.querySelectorAll('button').forEach(button => {
            button.classList.remove('darkThemeButton');
        })

    } else {
        body.classList.add('DarkTheme');
        darkThemeButton.textContent = 'Light Theme';
                
        document.querySelectorAll('button').forEach(button => {
            button.classList.add('darkThemeButton');
        })

        
    }
}


