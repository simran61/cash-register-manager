const billEntered = document.querySelector("#billAmt");   //bill amount input box
const cashEntered = document.querySelector("#cashAmt");    //cash amount input box

//const returnAmt = cashEntered - billEntered;          //amt on which calculation is to be performed

const next = document.querySelector("#nextBtn");     //next button
const check = document.querySelector("#checkBtn");    //check button

const cashGiven = document.querySelector(".mid2");    //cash given complete div
const changeTable = document.querySelector(".last");   //return change complete div

const billError = document.querySelector(".mid1Error");    //bill amount error msg
const cashError = document.querySelector(".mid2Error");    //cash given error msg
const returnError = document.querySelector(".lastError");   //no cash should be returned (retAmt<1)

const noOfNotes = document.querySelectorAll(".noteCounter");     //individual no. of notes block of table

const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1];

//showing cash given div
nextBtn.addEventListener("click", () => {
    if (Number(billEntered.value) > 0) {
        nextBtn.style.display = "none";
        cashGiven.style.display = "block";
    }
    else {
        billError.style.display = "block";
    }
});

//showing table on clicking check
checkBtn.addEventListener("click", () => {
    if (Number(cashEntered.value) > Number(billEntered.value)) {
        // checkBtn.style.display="none";
        // changeTable.style.display = "block";
        let billEntry = Number(billEntered.value);
        let cashEntry = Number(cashEntered.value);
        calculation(billEntry, cashEntry);
    }
    else if(Number(cashEntered.value) < Number(billEntered.value)){
        cashError.style.display="block";
    }
    else{
        returnError.style.display="block";
    }
});

// funtion for calculating no. of notes    
function calculation(bill, cash) {
    let retAmt = cash - bill;
    // if(retAmt<1){
    //     lastError.style.display = "block";
    // }
    changeTable.style.display = "block";
    for(let i=0; i<arrayOfNotes.length; i++){
        if(retAmt>=arrayOfNotes[i])
        {
            let notes= Math.floor(retAmt/arrayOfNotes[i]); 
            noOfNotes[i].innerText= `${notes}`;
            // noOfNotes[i].innerText= notes;
            retAmt=retAmt%arrayOfNotes[i];
        }
    }
}


