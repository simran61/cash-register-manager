const billEntered = document.querySelector("#billAmt");   //bill amount input box
const cashEntered = document.querySelector("#cashAmt");    //cash amount input box

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
        billError.style.display = "none";
    }
    else {
        billError.style.display = "block";
    }
});

//showing table on clicking check
checkBtn.addEventListener("click", () => {
    if (Number(billEntered.value) < 1) {
        billError.style.display = "block";
        changeTable.style.display = "none"
    }
    else if (Number(cashEntered.value) > Number(billEntered.value)) {
        let billEntry = Number(billEntered.value);
        let cashEntry = Number(cashEntered.value);
        returnError.style.display = "none";
        cashError.style.display = "none";
        billError.style.display = "none";
        calculation(billEntry, cashEntry);
    }
    else if (Number(cashEntered.value) < Number(billEntered.value)) {
        cashError.style.display = "block";
        returnError.style.display = "none";
        changeTable.style.display = "none";
        billError.style.display = "none";
    }
    else {
        returnError.style.display = "block";
        cashError.style.display = "none";
        changeTable.style.display = "none";
        billError.style.display = "none";
    }
});

// funtion for calculating no. of notes    
function calculation(bill, cash) {
    let retAmt = cash - bill;
    changeTable.style.display = "block";
    for (let i = 0; i < arrayOfNotes.length; i++) {
        noOfNotes[i].innerText = " ";
        if (retAmt >= arrayOfNotes[i]) {
            let notes = Math.floor(retAmt / arrayOfNotes[i]);
            noOfNotes[i].innerText = `${notes}`;
            retAmt = retAmt % arrayOfNotes[i];
        }
    }
}


