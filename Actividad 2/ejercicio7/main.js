let factorial = 1;
let numero = prompt("Dame un número para factorizar");

function calculoFactorial(n){
      /*  if(n>0){
            console.log(factorial);
            console.log(n);
            factorial *= n;
            calculoFactorial(n-1);
        }
        else{
            return factorial;
        }*/
        /*if(!isNaN(n)){
            alert("Esto no es un número");
        }*/
        if(n<0){
            return -1;
        }
        else if(n==0){
            return 1;
        }
        else{
            return (n * calculoFactorial(n -1));
        }

    
}
console.log(calculoFactorial(numero));
