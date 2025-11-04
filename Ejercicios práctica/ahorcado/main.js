let form = document.getElementById("firstForm");
let secondForm = document.getElementById("secondForm");

let word = document.getElementById("word").value;
let lifes = document.getElementById("lifes");
let count_lives = 6;   


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(word.length);
    console.log(typeof(word));

    if (word.length > 10 || typeof(word) != "string") {
            alert("Palabra no valida");
    }
    else{
        form.classList.toggle("hiddenForm");
        secondForm.classList.toggle("hiddenForm");
    }
});


secondForm.addEventListener("submit", (event) => {
    event.preventDefault();
let letter = document.getElementById("letter").value;

    console.log(letter.length);
    console.log(typeof(letter));
    console.log(word.includes(letter));

    if (letter.length != 1 || typeof(letter) != "string" || !word.includes(letter)) {
        lifes.textContent = `Te quedan ${--count_lives} vidas`;
        console.log(count_lives);
    }
    else{
        alert("Has ganado");
        location.reload();

    }
    if(count_lives == 0){
        alert("Has perdido");
        location.reload();
    }
    
});



