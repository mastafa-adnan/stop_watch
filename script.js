let timerdisplay=document.querySelector('.timer')

let startbtn=document.getElementById('green')
let stopbtn=document.getElementById('red')
let resetbtn=document.getElementById('blue')

let msec= 0;
let sec= 0;
let min= 0;

let timerId=null;

startbtn.addEventListener('click',function(){
    if(timerId!=null){
        clearInterval(timerId);
    }
   timerId = setInterval(startTimer,10);

   

});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId)

});

resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML="00 : 00 : 00";
    msec=sec=min=0;


})





function startTimer(){
    msec++;
    if (msec==100){
        msec=0;
        sec++;

        if(sec==60){
            sec=0;
            min++;

        }
    }


//     let msecString;
//   if (msec<10){
//     msecString =`0$(msec)`
//   }

//   else{
//     msecString=msec;
//   }


let msecString =msec<10? `0${msec}` : msec;
let secString =sec<10? `0${sec}` : sec;
let minString =min<10? `0${min}` : min;

timerdisplay.innerHTML =`${minString} : ${secString} : ${msecString}` 

}