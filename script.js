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
var archivo = document.getElementById("myBtn");
if(archivo){
    archivo.addEventListener("click", function(){
        alert("Hello Wold");
    });
}

function loadImage(){
    alert("Image is loaded");
}

function hanFetClick(){
    var x = document.getElementById("boton");
    var y = document.getElementById("imagen");
    if(x){
        x.addEventListener("click" , function(){
            document.getElementById("1").innerHTML="Boton Pulsado";
        });
    }else if(y){
            y.addEventListener("click", function(){
                document.getElementById("2").innerHTML="Imagen Pulsada";
            })

        }    
}