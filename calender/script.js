const currentMonth=document.getElementById('current');
const dayContainer=document.getElementById('dayContainer');
const prevMonth=document.getElementById('prev');
const nextMonth = document.getElementById('next');

const months=['January','February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September','October', 'November', 'December'
    ];
const currentDate=new Date();
const today=new Date();

document.addEventListener('DOMContentLoaded',()=>{
   

    renderCalender(currentDate);
});

const renderCalender=(date)=>{
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year,month,1).getDay();
    const lastDay= new Date(year,month+1,0).getDate();
    currentMonth.textContent=`${months[month]} ${year}`;
    dayContainer.innerText='';
    const prevMonthLastDay=new Date(year,month,0).getDate();
    for(let i=firstDay;i>0;i--){
        // console.log(prevMonthLastDay);
        const dayDiv = document.createElement('div');
        dayDiv.textContent=prevMonthLastDay-i+1;
        dayDiv.classList.add('fade')
        dayContainer.appendChild(dayDiv);
    }

    for(let i=1;i<=lastDay;i++){
        const dayDiv=document.createElement('div');
        dayDiv.textContent=i;
        if(i===today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('today');
        }
        dayContainer.appendChild(dayDiv);
    }

    const lastDayOfWeek = new Date(year, month + 1, 0).getDay(); 
    const nextMonthDays = 7 - lastDayOfWeek - 1; 

    for (let i = 1; i <= nextMonthDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.classList.add('fade');
        dayContainer.appendChild(dayDiv);
    }
};

prevMonth.addEventListener('click',()=>{
    currentDate.setMonth(currentDate.getMonth()-1);
    renderCalender(currentDate);
});
nextMonth.addEventListener('click',()=>{
    currentDate.setMonth(currentDate.getMonth()+1);
    renderCalender(currentDate);
});



