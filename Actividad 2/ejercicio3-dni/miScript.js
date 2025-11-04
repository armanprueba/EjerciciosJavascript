const letras = [
    "T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T",
];
function comprobarDNI() {

    do {
        let dni = prompt("Dame tu DNI");
        let numeros = parseInt(dni.substring(0, 8)); // Hay que poner 8 para que coja hasta el 7
        let letra_dni = dni[8].toUpperCase();
        if (dni.length != 9 || !Number.isInteger(numeros) || !letras.includes(letra_dni)) {
            alert("DNI incorrecto, vuelve a introducirlo");
        }
        else {
            let resto = numeros % 23;

            console.log(numeros);
            console.log(letras[resto]);
            console.log(letra_dni);
            console.log(resto);
            if (letras[resto] == letra_dni) {

                alert("DNI correcto");
                break;
            }

        }
    }
    while (true) 

}


comprobarDNI();



//charAt(0);//