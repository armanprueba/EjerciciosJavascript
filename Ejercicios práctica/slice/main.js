let array = [1, 2, 3, 4, 5, 6, 7];
let nueva_cadena = "";

function miSlice(arr1, pos1, pos2){
    for(let i = pos1; i<pos2; i++){
            nueva_cadena += arr1[i]; //Para añadir un elemento a una cadena es +=
    }
    return nueva_cadena;
}

console.log(miSlice(array, 2, 5));


let nuevo_array = [];

function miSlice2(arr1, pos1, pos2){
    for(let i = pos1; i<pos2; i++){
            nuevo_array.push(arr1[i]); //Para añadir un elemento a un array es push
    }
    return nuevo_array;
}

console.log(miSlice2(array, 2, 5));