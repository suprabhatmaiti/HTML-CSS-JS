const display=document.getElementById("display")
const buttons=document.querySelectorAll('button');


buttons.forEach(button=>{
    button.addEventListener('click',calculator,false);
});

function calculator(e){
    e.preventDefault();
    display.focus();
    if(e.target.textContent === 'DE'){
        del();
    }else if(e.target.textContent === 'AC'){
        clearDisplay()
    }else if(e.target.textContent === '='){
        calculate();
    }
    else{
        addToDisplay(e)
    }
    
}

document.addEventListener("keydown",(e)=>{
    display.focus();
    if(e.key==='Enter'){
        calculate();
    }else if(e.key === 'Backspace'){
        del();
    }else{
        addToDisplay(e);
    }

},false)

function calculate(){
    try {
            display.value=eval(display.value);
    } catch (error) {
        display.value="Error";
        setTimeout(()=>{
            display.value="";
        },1000)
        
    }
}
function del(){
    display.value=display.value.slice(0,-1);
}

function clearDisplay(){
    display.value="";
}

function addToDisplay(e){
    display.value += e.target.textContent;
}
window.addEventListener('load',()=>{
    display.focus();
})