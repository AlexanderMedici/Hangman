let words = ["axiom", "keyhole", "lucky", "disavow", "glyph", "vixen", "haikou"];


// global var
let selectedWord

let answer = document.getElementById("answer");
let hint = document.getElementById("hint")
let reset = document.getElementById("reset")





let btn00 = document.getElementById("A")
let btn01 = document.getElementById("B")
let btn02 = document.getElementById("C")
let btn03 = document.getElementById("D")
let btn04 = document.getElementById("E")
let btn05 = document.getElementById("F")
let btn06 = document.getElementById("G")
let btn07 = document.getElementById("H")
let btn08 = document.getElementById("I")
let btn09 = document.getElementById("J")
let btn10 = document.getElementById("K")
let btn11 = document.getElementById("L")
let btn12 = document.getElementById("M")
let btn13 = document.getElementById("N")
let btn14 = document.getElementById("O")
let btn15 = document.getElementById("P")
let btn16 = document.getElementById("Q")
let btn17 = document.getElementById("R")
let btn18 = document.getElementById("S")
let btn19 = document.getElementById("T")
let btn20 = document.getElementById("U")
let btn21 = document.getElementById("V")
let btn22 = document.getElementById("W")
let btn23 = document.getElementById("X")
let btn24 = document.getElementById("Y")
let btn25 = document.getElementById("Z")







btn00.addEventListener("click", clicked)
btn01.addEventListener("click", clicked)
btn02.addEventListener("click", clicked)
btn03.addEventListener("click", clicked)
btn04.addEventListener("click", clicked)
btn05.addEventListener("click", clicked)
btn06.addEventListener("click", clicked)
btn07.addEventListener("click", clicked)
btn08.addEventListener("click", clicked)
btn09.addEventListener("click", clicked)
btn10.addEventListener("click", clicked)
btn11.addEventListener("click", clicked)
btn12.addEventListener("click", clicked)
btn13.addEventListener("click", clicked)
btn14.addEventListener("click", clicked)
btn15.addEventListener("click", clicked)
btn16.addEventListener("click", clicked)
btn17.addEventListener("click", clicked)
btn18.addEventListener("click", clicked)
btn19.addEventListener("click", clicked)
btn20.addEventListener("click", clicked)
btn21.addEventListener("click", clicked)
btn22.addEventListener("click", clicked)
btn23.addEventListener("click", clicked)
btn24.addEventListener("click", clicked)
btn25.addEventListener("click", clicked)

// extra listerners
reset.addEventListener("click", clickedR)



let getRandomWord = function() {
    return words[Math.floor(Math.random() * words.length)];

};

let init = function() {
    let counter = '';
    selectedWord = getRandomWord()
    console.log(selectedWord)
    for (let i = 0; i < selectedWord.length; i++) {
        console.log("index of secectedWord " + i)
            //this genrates dashes
        counter += "<span id=" + i + " > _ </span>"
        console.log("zero indexed dashes " + counter)


    }
    answer.innerHTML = counter;
}


init();



function clicked(evt) {

    let letter = evt.target.innerHTML
    console.log(selectedWord.toUpperCase().includes(letter))
    console.log(letter)
    if (selectedWord.toUpperCase().includes(letter)) {
        selectedWord.indexOf(letter)
        let letterIndex = (selectedWord.toUpperCase().indexOf(letter))
            // converts letterIndex form 1 to "1"
        letterIndex = letterIndex + "";
        console.log("this is letter index " + letterIndex)
        document.getElementById(letterIndex).innerHTML = letter
        console.log(letterIndex)




    } else {

        return console.log("Your guess is wrong " + letter) += response

    }
};

















// let getRandomWord = function() {
//     return words[Math.floor(Math.random() * words.length)];

// };

// let init = function() {
//     let counter = '';
//     selectedWord = getRandomWord()
//     console.log(selectedWord);
//     for (let i = 0; i < selectedWord.length; i++) {
//         counter += ' _ '

//     }
//     answer.innerHTML = counter
// }


// init();