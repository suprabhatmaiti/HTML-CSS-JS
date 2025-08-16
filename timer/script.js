const start=document.getElementById("startBtn");
const Reset = document.getElementById("resetBtn");
const timer = document.getElementById("timer");

let inputDateTime=document.getElementById("inputDate");

// inputDateTime.value=
// let inputTime=document.getElementById("inputTime");

function msToTime(time){
    const totalSec=Math.floor(time/1000);
    const days=Math.floor(totalSec/(24*3600));
    const hours=Math.floor((totalSec%(24*3600))/3600);
    const minutes= Math.floor((totalSec%3600)/60);
    const sec=Math.floor(totalSec % 60);
    // console.log(days,hours,minutes,sec);
    return [days,hours,minutes,sec];
}
let interValid;
function startFunc(){
    const check=new Date();

    if(inputDateTime.value===''){
        alert('Enter a valid Date and Time');
    }else if((new Date(inputDateTime.value))-(new Date())<0){
        alert('Please enter a valid future date and time')
    }else{
        clearInterval(interValid);
        const target = new Date(inputDateTime.value);
        
        interValid=setInterval(() => {
            const today=new Date();

            const [tdays,thours,tminutes,tsec]=msToTime(Math.abs(today-target));
            const formattedDays = String(tdays).padStart(2, '0');
            const formattedHours = String(thours).padStart(2, '0');
            const formattedMinutes = String(tminutes).padStart(2, '0');
            const formattedSeconds = String(tsec).padStart(2, '0');
            updateTimer(formattedDays, formattedHours, formattedMinutes, formattedSeconds);
            console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);

            if(Math.abs(today-target)<=0){
                clearInterval(interValid);
                timeUP();
            }
            
        }, 1000);
        
        
    }
    
}
function updateTimer(formattedDays, formattedHours, formattedMinutes, formattedSeconds){
    document.getElementById("days").innerHTML=formattedDays;
    document.getElementById("hrs").innerHTML=formattedHours;
    document.getElementById("mins").innerHTML=formattedMinutes;
    document.getElementById("secs").innerHTML=formattedSeconds;
}

function resetFunc(){
    clearInterval(interValid);
    updateTimer('00', '00', '00', '00');
    inputDateTime.value='';

}
async function timeUP(){
    alert("Time's up!");
}
