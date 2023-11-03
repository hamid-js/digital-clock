let hour =  document.getElementById("hour");
let minute =  document.getElementById("minute");
let seconds =  document.getElementById("seconds");



setInterval(function(){
    
 let num1 = new Date().getHours()
   let num2 =new Date().getMinutes()
    let num3 = new Date().getSeconds()
    hour.innerHTML = num1
        minute.innerHTML= num2
        seconds.innerHTML= num3 
    if(num1 < 10){
        hour.innerHTML= `0${num1}` 
    }
    if(num2 < 10){
        minute.innerHTML= `0${num2}` 
    }
    if(num3 < 10){
        seconds.innerHTML= `0${num3}` 
    }

},1000)
