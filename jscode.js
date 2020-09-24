console.log("my first java script code");
// declare varibles and pass valuse to them;
var x=10;
var y=20;

function sum(a,b){
    a+b;
}
console.log(sum(x,y));
//event functions 
function btnclicked(){
    console.log("buttone is  clicked");
}
function updateresult(){
    var input=document.getElementById("takeinput");
var output=document.getElementById("output");
output.innerHTML=input.value;
}