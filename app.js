'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('day');
    document.body.classList.toggle('night');

    const className = document.body.className;
    if(className == "day") {
        this.textContent = "Good night shark!";
    } else {
        this.textContent = "Good morning shark!";
    }
});

var dir_h='right';
var dir_v='down';
function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "500px";
document.getElementById('i1').style.top= "100px";
document.getElementById("msg").innerHTML="";
}

function disp(){
var step=2; 

var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
if(x >= 900 ){
dir_h = 'left';
}
if(x <= 400 ){
dir_h = 'right';
}
if(dir_h=='right'){x= x +step;}
else{x=x - step;}

if(y >= 500 ){
dir_v = 'up';
}
if(y <= 100 ){
dir_v = 'down';
}

if(dir_v=='down'){y= y +step;}
else{y=y - step;}

document.getElementById('i1').style.top= y + "px"; 
document.getElementById('i1').style.left= x + "px"; 

}

function timer(){
disp();
var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
my_time=setTimeout('timer()',10);
}


