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
function keyDown(){
    alert("Le has dado a una tecla");
}
function search(){
    var x = document.getElementById("myInput");
    document.getElementById("demo1").innerHTML = "Estas buscando: " + x.value;
}

document.getElementById("myBtn").addEventListener("click", function() {
	alert("HOLA MI QUERIDO MUNDO");
})


function loadImage(){
    alert("Image is loaded");
}

function hanFetClick(){
    document.getElementById("boton").addEventListener("click",function(){
    alert("BOTON");
    });
    document.getElementById("imagen").addEventListener("click",function(){
    alert("IMAGEN");
    })
}
function añadir() {
    document.getElementById("prueba").innerHTML="CORRER";
    }
function timeour(){
    document.getElementById("timeout").innerHTML = "MUY BUENAS"
}

const myTimeout = setTimeout(timeour, 5000);
function timeour(){
document.getElementById("timeout").innerHTML = "MUY BUENAS"
}
function myStopFunction(){
clearTimeout(myTimeout)
}

const element = document.getElementById("interval");
setInterval(function() { element.innerHTML +="NO PARO "}, 1000);