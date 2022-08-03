setInterval(animate, 1000);

function animate(){

let date = new Date();

const secondDiv = document.getElementById('second');    
let second = date.getSeconds() / 60;
secondDiv.style.transform = "rotate(" + (second * 360) + "deg)";

const minuteDiv = document.getElementById('minute');    
let minute = (date.getMinutes() + second) / 60;
minuteDiv.style.transform = "rotate(" + (minute * 360) + "deg)";

const hourDiv = document.getElementById('hour');    
let hour = (date.getHours() + minute) / 12;
hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";

}

animate();

timing();

function timing()
{   
  var inc = 1000;
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    const h = (hours < 10) ? "0" + hours : hours;
    const m = (minutes < 10) ? "0" + minutes : minutes;
    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".mins").innerHTML = m;
    

}

n =  new Date();
y = n.getFullYear();
m = n.getMonth();
d = n.getDate();
var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    m = monthArr[m];
document.getElementById("date").innerHTML = d+ "-" + m + "-" + y;
