function adivinaNumero(){
        let bucle = true;

    do{    
        let num_aleatorio = Math.floor(Math.random() * 100 + 1);
        console.log(num_aleatorio);
        let num_elegido = prompt("Adivina un número del 1 al 100");
        console.log(num_elegido);
        if(num_aleatorio == num_elegido){
            bucle = false;
        }
        else if(num_aleatorio > num_elegido){
            alert(`Te has equivocado el número era más grande`);
        }
        else if(num_aleatorio > num_elegido){
            alert(`Te has equivocado el número era más pequeño`);
        }
    }
    while(bucle)
}

adivinaNumero();