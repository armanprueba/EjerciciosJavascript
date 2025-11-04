let hola2 = document.getElementById("hola2");
let big_shot = prompt("Hola clase, ¿cómo se llama este Big Shot?");
let imagen = document.getElementById("imagen");

function cuentaEspacios(){
    espacios = 0
    for(i = 0; i <= big_shot.length; i++){
        if(big_shot[i] == " "){
        espacios++;
        }
    }
    if(big_shot.length == espacios){
        return true;
    }
    console.log(espacios);
    console.log(big_shot.length);
}


console.log(big_shot);
if(cuentaEspacios()){
    hola2.textContent = "Seguimos sin Big Shot";
    imagen.classList.remove('img_hover');
}
else {
    hola2.textContent = big_shot + " es nuestro Big Shot";
}


//APUNTES DE CLASE
//Las variables no pueden empezar por números
// Usar toFixed para sumar decimales

//*