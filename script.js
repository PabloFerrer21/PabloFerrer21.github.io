function changeText(id){
    id.innerHTML="OK";
}
function displayDate(){
document.getElementById("demo").innerHTML=Date();
}
function mOver(obj){
    obj.innerHTML = "MUCHAS GRACIAS";
}
function mOut(obj){
    obj.innerHTML="Pon el cursor encima";
}
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}
function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Thank You";
}