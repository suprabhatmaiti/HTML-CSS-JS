var list=document.getElementById('listContainer');
var inputTask=document.getElementById('inputText');
var completedTask=document.getElementById("completedTask");
var taskCount=document.getElementById("taskCount");

function addFunc(){
    if(inputTask.value ===''){
        alert("empty");

    }else{
        // console.log(inputTask.value);
        var li=document.createElement("li");
        var span=document.createElement("span");
        span.innerHTML=inputTask.value;
        li.appendChild(span);
        list.appendChild(li);
        let button =document.createElement("button");
        button.innerHTML="X";
        li.appendChild(button);
    }
    inputTask.value="";
    inputTask.focus();
    saveData();
}

inputTask.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        document.getElementById("addbtn").click();
    }

})

list.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();

    }else if(e.target.tagName==="SPAN"){
        e.target.classList.add("checked");
        const li=e.target.parentElement;
        // e.target.parentElement.remove();
        completedTask.appendChild(li);
       
    }
    saveData();
},false)

completedTask.addEventListener("click",function(e){
    if(e.target.tagName=="BUTTON"){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "SPAN") {
        e.stopPropagation(); 
        e.target.classList.remove("checked");
        const li=e.target.parentElement;
        list.appendChild(li);
        
    }
    saveData();
},false)

function updateCount(){
    var toDo=list.getElementsByTagName("li").length;
    var completed=completedTask.getElementsByTagName("li").length;
    document.getElementById("counter").textContent=`To-Do: ${toDo} | Completed: ${completed}`;
    
    
}

function saveData(){
    localStorage.setItem("todoList",list.innerHTML);
    localStorage.setItem("completedList",completedTask.innerHTML)
    localStorage.setItem("count",document.getElementById("counter").textContent);
    updateCount();
}
function showData(){
    list.innerHTML=localStorage.getItem("todoList");
    completedTask.innerHTML=localStorage.getItem("completedList")
    document.getElementById("counter").textContent=localStorage.getItem("count");
    updateCount();
}   
showData();

window.onload=function(){
    inputTask.focus();
}