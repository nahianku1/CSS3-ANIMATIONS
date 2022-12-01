let hourhand=document.querySelector('.hour')
let minutehand=document.querySelector('.minute')
let secondhand=document.querySelector('.second')


setInterval(function(){
    let time  = new Date();
    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hrs = time.getHours() * 30;
    secondhand.style.transform=`rotate(${secs}deg)`
    secondhand.style.transformOrigin=`bottom`
    minutehand.style.transform=`rotate(${mins}deg)`
    minutehand.style.transformOrigin=`bottom`
    hourhand.style.transform=`rotate(${hrs+(mins/12)}deg)`
    hourhand.style.transformOrigin=`bottom`
 
    
  },1000);