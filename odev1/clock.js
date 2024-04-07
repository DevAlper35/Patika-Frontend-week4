let inputName = prompt("İsim giriniz pilis")
let myNameDOM = document.querySelector("#myName")
myNameDOM.innerHTML = inputName

function nowTime() {
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var day = now.getDay();
    
    var dayName = days[day];
    
    var myClockDOM = document.getElementById("myClock");
    myClockDOM.innerText = hour + ":" + min + ":" + sec + " " + dayName;
}

setInterval(nowTime, 1000);