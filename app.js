let input=document.querySelector(".inp");
let head=document.querySelector(".head")
let icon=document.querySelector("#icon");
let container=document.querySelector(".con");
let enter=document.querySelector(".enter");
let main=document.querySelector(".main");
let days=document.querySelector(".day");
let box=document.querySelector(".box");
let box1=document.querySelector("#box1");
let btn=document.querySelector(".btn");
let tempuratur=document.querySelector(".temp")
icon.addEventListener("click",function(){
   head.style.display="block";
   icon.style.display="none";
})

async function getWeatherInfo(city){
let location= await fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6071c5c3a9cb08816a0322571ed3bb53&q=${city}&format=json`).then(res=>res.json())
    console.log(location[0]);
    let latitude=location[0].lat
    let longitude=location[0].lon
    let weather= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max&timezone=Europe%2FMoscow&forecast_days=14`).then(res=>res.json())
    console.log(weather);
    document.querySelector(".area").innerHTML=location[0].display_name;
    document.querySelector("#humidity").innerHTML=weather.current.relative_humidity_2m+weather.current_units.relative_humidity_2m;
    document.querySelector("#temp").innerHTML=weather.current.temperature_2m+weather.current_units.temperature_2m;
    document.querySelector("#windy").innerHTML=weather.current.wind_speed_10m+weather.current_units.wind_speed_10m;
    // document.querySelector(".date").innerHTML=weather.current.time
    let date=new Date()
    let day= date.getDate();
    let mounth=date.getMonth();
    let year=date.getFullYear();
    function getMonthName(number){
          switch (number) {
            case 0:
            return "January";
            case 1:
            return "February" 
            case 2:
            return "March"
            case 3:
            return "April"
            case 4:
            return "May" 
            case 5:
            return "June"
            case 6:
            return "July"
            case 7:
            return "August"
            case 8:
            return "September"
            case 9:
            return "October"
            case 10:
            return "November"
            case 11:
            return "December"
          
            default:
              break;
          }
        }
    document.querySelector(".date").innerHTML= day+""+""+getMonthName(date.getMonth())+","+year
    function getDayname(number){
        switch(number){
            case 0:
                return "Sun";
            case 1:
                return "Mon"; 
            case 2:
                return "Tue"; 
            case 3:
                return "Wed"; 
            case 4:
                return "Thu"; 
            case 5:
                return "Fri"; 
            case 6:
                return "Sat";

              default:
              break;
        }
    }
    document.querySelector(".week").innerHTML=getDayname(date.getDay());
    days.innerHTML=`
    <div class="box1" id="#box1">
    <i class="fa-solid fa-wind" id="wind"></i>
    <p>${getDayname(date.getDay())}</p>
    <p class="temp">${weather.daily.temperature_2m_max[0]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
<i class="fa-solid fa-sun" id="wind"></i>
    <p>${getDayname(date.getDay()+1)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[1]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
    <i class="fa-solid fa-wind" id="wind"></i>
    <p>${getDayname(date.getDay()+2)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[2]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
<i class="fa-solid fa-sun" id="wind"></i>
    <p>${getDayname(date.getDay()+3)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[3]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
    <i class="fa-solid fa-cloud" id="wind"></i>
    <p>${getDayname(date.getDay()+4)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[4]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
    <i class="fa-solid fa-sun" id="wind"></i>
    <p>${getDayname(date.getDay()+5)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[5]+weather.current_units.temperature_2m}</p>
</div>
<div class="box">
    <i class="fa-solid fa-cloud" id="wind"></i>
    <p>${getDayname(date.getDay()+6)}</p>
    <p class="temp">${weather.daily.temperature_2m_max[6]+weather.current_units.temperature_2m}</p>
</div>
    `
}

input.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
          getWeatherInfo(input.value);
          container.style.display="none";
          enter.style.display="block";
    }
})
btn.addEventListener("click",function(){
    container.style.display="block";
    enter.style.display="none";
    input.value=""
})