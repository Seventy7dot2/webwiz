let welcome = document.getElementById("welcome");
welcome.addEventListener('click', prompt);
function prompt(){
    alert("Welcome!");
}
let changebg = document.getElementById("changebg");
changebg.addEventListener('click',bgchange);
function bgchange(){
    if (whole.style.backgroundColor == 'purple'){
        whole.style.backgroundColor = 'white';
    }
    else {
        whole.style.backgroundColor = 'purple';
    }
}
let changehead = document.getElementById("changehead");
changehead.addEventListener('click',hdchange);
function headchange(){
    if(document.getElementById("heading").innerHTML=="Heading Changed"){
        document.getElementById("heading").innerHTML="The Heading"}
    else{
    document.getElementById("heading").innerHTML="Heading Changed"}
}
function hdchange(){
    setTimeout(headchange, 5000);
}
function displaytime(){
    time= new Date()
    document.getElementById('time').innerHTML=time;
}
setInterval(displaytime,1000);