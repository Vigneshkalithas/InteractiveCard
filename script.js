let card_number = document.getElementById("cardNumber");
let Number = document.getElementById("outputNumber");

function displayNumber(){
    Number.innerHTML = card_number.value;
}

let card_holder_name = document.getElementById("cardHolderName");  //input
let Name = document.getElementById("Card_Holder_Name");    //output

function displayName(){
    // var res = card_holder_name.value;
    // var pat = /[a-z]/
    // if(pat.test(res)){
    //     alert("done")
  Name.innerHTML = card_holder_name.value;
    // }else{
        // card_holder_name.style.border = "red solid 1px";
    // }
}

const CardMonth = document.getElementById("Month");
const CardYear = document.getElementById("Year");
const card_month = document.getElementById("month");
const card_year = document.getElementById("year");

function displayMonth(){
    card_month.innerHTML = CardMonth.value;
}
function displayYear(){
    card_year.innerHTML = CardYear.value;
}

const CardCvc = document.getElementById("CvC");
const card_cvc = document.getElementById("cVc");

function displayCvc(){
    card_cvc.innerHTML = CardCvc.value;
}


function confirmSubmit(){
    Number.innerHTML = card_number.value;
    Name.innerHTML = card_holder_name.value;
    card_month.innerHTML = CardMonth.value;
    card_year.innerHTML = CardYear.value;
    card_cvc.innerHTML = CardCvc.value;
}


// onkeyup="displayName()";
// onkeyup="displayNumber()";
// onkeyup="displayMonth()"
// onkeyup="displayYear()";
// onkeyup="displayCvc()"