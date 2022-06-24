// Taking all Buttons
let btnSubmit = document.getElementById("submit");
let card2 = document.querySelector('.card-2');
let card = document.querySelector(".card");
let span = document.getElementById("span");
let btnRateAgain = document.getElementById("rateAgain");
let emptySubmit = true;

// Applying Events to all buttons
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener("click", btn =>{
        selecionaItem(btn.target);
    })
})


//Main Functions
function selecionaItem(elemento){
    removeAtributes();
    putAtributes(elemento);
}

btnSubmit.addEventListener("click", () =>{
    if (emptySubmit){
        alert("Selecione um número");
        return;
    }else{
        addResult();
    }
})

//Function do Card-2
btnRateAgain.addEventListener("click", () =>{
    card2.classList.add('hide');
    card.classList.remove('hide');
})

//General Functions:
function removeAtributes(){
    let allButtons = document.querySelectorAll(".rateForm button");
    allButtons.forEach(e =>{
        e.removeAttribute("id", "numberSelected");
    })
}

function putAtributes(elemento){
    elemento.setAttribute("id", "numberSelected");
    console.log(elemento.innerText);
    emptySubmit = false;
}

function addResult(){
    let numberSelected = document.getElementById("numberSelected");
    console.log(numberSelected.innerText);
    card2.classList.remove('hide');
    card.classList.add('hide');
    span.innerText = numberSelected.innerText;
}



// function removeAtributes(){
//     let allButtons = document.querySelectorAll(".rateForm button");
//     allButtons.forEach(e =>{
//         e.removeAttribute("id", "numberSelected");
//         e.style.backgroundColor = "hsl(212, 17%, 20%)";
//         e.style.color = "hsl(217, 12%, 63%)";
//     })
// }



