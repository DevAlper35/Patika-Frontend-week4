let inputName = prompt("İsim giriniz pilis")
let myNameDOM = document.querySelector("#myName")
myNameDOM.innerHTML = inputName

let now = new Date ( ) ;
let myClockDOM = document.querySelector("#myClock")
myClockDOM.innerHTML = now