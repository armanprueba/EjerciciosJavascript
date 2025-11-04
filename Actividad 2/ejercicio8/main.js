let datos = [5, 7, 5]
let nota_media = 0;
let nota_media_1 = 0;
let nota_media_2 = 0;


function bucleForOf(array_num){
    
    for(let numero of array_num){
         nota_media += numero;
    }

      nota_media = nota_media/array_num.length;
      return nota_media.toFixed(2); //toFixed ajusta el número de decimales.
    
}

function bucleForIn(array_num){
    
    for(let numero in array_num){
         nota_media_1 += array_num[numero];
    }
    nota_media_1 = nota_media_1/array_num.length;
      return nota_media_1.toFixed(2);
}

function bucleForCont(array_num){

    for(let i=0; i<datos.length; i++){
      nota_media_2 += array_num[i];
    }

      nota_media_2 = nota_media_2/array_num.length;
      return nota_media_2.toFixed(2);
    
}

console.log(bucleForOf(datos));
console.log(bucleForIn(datos));
console.log(bucleForCont(datos));
