var list=document.getElementById('listContainer');
var inputTask=document.getElementById('inputText');
var completedTask=document.getElementById("completedTask")

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

function saveData(){
    localStorage.setItem("todo",list.innerHTML);
    localStorage.setItem("completed",completedTask.innerHTML)
}
function showData(){
    list.innerHTML=localStorage.getItem("todo");
    completedTask.innerHTML=localStorage.getItem("completed")
}
showData();

window.onload=function(){
    inputTask.focus();
}