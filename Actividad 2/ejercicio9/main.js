let datos = [5, 11, 5]
let nota_media = 0;

function bucleForOf(array_num){
    
    for(let numero of array_num){
        if(numero>10 || numero<0){
            throw "Nota no válida";
        }  
         nota_media += numero;
    }

      nota_media = nota_media/array_num.length;
      return nota_media.toFixed(2);
    
}
try {
console.log(bucleForOf(datos));
} catch(err) {
alert(err)
}