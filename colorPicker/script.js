const colorPicker=document.getElementById("colorPicker");
const colorCode=document.getElementById("colorCode");
const randomColor=document.getElementById("randomColor");
const colorList=document.getElementById("record")
let colors=[];

colorPicker.addEventListener("input",function(e){
    colorCode.innerText="Color code: "
    hexCode=e.target.value;
    const red=parseInt(hexCode.substring(1,3),16);
    const green=parseInt(hexCode.substring(3,5),16);
    const blue=parseInt(hexCode.substring(5,7),16);
    const rgbColor=[red, green, blue];

    // colors.push(hexCode);
    
    const HEXCode=document.createElement("span");
    const copyBtn=document.createElement("button");
    copyBtn.textContent="Copy HexCode";
    HEXCode.textContent=`HEX code: ${hexCode} || RGB value: ${rgbColor}`;
    colorCode.appendChild(HEXCode);
    colorCode.appendChild(copyBtn);

    renderColors();
    copyBtn.addEventListener("click",()=>{
        
        navigator?.clipboard?.writeText?.(hexCode).then(()=>{
            console.log("hex code copied");
            copyBtn.textContent="Copied!"
            setTimeout(()=>{
                copyBtn.textContent="Copy HexCode";
            },1500);
        })
        .catch((err)=>{
            console.error(err);
        })
    },false);
    savedata(hexCode);
    console.log(colors);
    renderColors();
},false)

randomColor.addEventListener("click",()=>{
    const color=Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
    colorPicker.value=`#${color}`;
    colorPicker.dispatchEvent(new Event("input"));
},false)

function savedata(hexCode){

    if(colors.length>5){
        colors.shift();
        colors.push(hexCode);
    }else{
        colors.push(hexCode);
    }
    // const reverseArray=colors.reverse();
    localStorage.setItem("colors",JSON.stringify(colors));
}
function renderColors(){
    colors=JSON.parse(localStorage.getItem("colors"))||[];
    colorList.innerText=''
    const colorOl=document.createElement('ol')
    colorOl.classList.add('custom-counter')
    colorList.appendChild(colorOl);

    for (let i = colors.length - 1; i >= 0; i--) {
        
        const colorLi=document.createElement('li')
        colorLi.textContent=colors[i];
        colorOl.appendChild(colorLi);
        
    }
    colorOl.addEventListener('click',(e)=>{
        if(e.target.tagName==="LI"){
            const val=e.target.innerText;
            navigator?.clipboard?.writeText?.(e.target.innerText).then(()=>{
                e.target.innerText="Copied!"
                setTimeout(()=>{
                     e.target.innerText=val;
                },1000)

            }).catch((err)=>{
                console.log(err);
            });
           
        }
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    renderColors();
})