const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const label1 = document.getElementById("label1")
let count = 0;

btn1.onclick = function(){
    count++;
    label1.textContent = count;
}

btn2.onclick = function(){
    count = 0;
    label1.textContent = count;
}

btn3.onclick = function(){
    count--;
    label1.textContent = count;
}


