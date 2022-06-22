// Taking all Buttons
let btnOne = document.getElementById("number1");
let btnTwo = document.getElementById("number2");
let btnThree = document.getElementById("number3");
let btnFour = document.getElementById("number4");
let btnFive = document.getElementById("number5");
let btnSubmit = document.getElementById("submit");
let card2 = document.querySelector('.card-2');
let card = document.querySelector(".card");
let span = document.getElementById("span");
let btnRateAgain = document.getElementById("rateAgain");
let emptySubmit = true;

//Events in all Buttons
btnOne.addEventListener("click", e =>{
    selecionaItem(e.target);
});

btnTwo.addEventListener("click", e =>{
    selecionaItem(e.target);
});

btnThree.addEventListener("click", e =>{
    selecionaItem(e.target);
});

btnFour.addEventListener("click", e =>{
    selecionaItem(e.target);
});

btnFive.addEventListener("click", e =>{
    selecionaItem(e.target);
});


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

btnRateAgain.addEventListener("click", () =>{
    card2.classList.add('hide');
    card.classList.remove('hide');
})

//General Functions:
function removeAtributes(){
    let allButtons = document.querySelectorAll(".rateForm button");
    allButtons.forEach(e =>{
        e.removeAttribute("id", "numberSelected");
        e.style.backgroundColor = "hsl(212, 17%, 20%)";
        e.style.color = "hsl(217, 12%, 63%)";
    })
}

function putAtributes(elemento){
    elemento.setAttribute("id", "numberSelected");
    elemento.style.color = "#fff";
    elemento.style.backgroundColor = "hsl(25, 97%, 53%)";
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







