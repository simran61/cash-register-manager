var billEntered = document.querySelector("#billAmt");   //bill amount input box
var cashEntered = document.querySelector("#cashAmt");    //cash amount input box

//var returnAmt = cashEntered - billEntered;          //amt on which calculation is to be performed

var next = document.querySelector("#nextBtn");     //next button
var check = document.querySelector("checkBtn");    //check button

var cashGiven = document.querySelector(".mid2");    //cash given complete div
var changeTable = document.querySelector(".last");   //return change complete div

var billError = document.querySelector(".mid1Error");    //bill amount error msg
var cashError = document.querySelector(".mid2Error");    //cash given error msg
var returnError = document.querySelector(".lastError");   //no cash should be returned (retAmt<1)

var noOfNotes = document.querySelector(".noteCounter");     //individual no. of notes block of table

var arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1];

//showing cash given div
nextBtn.addEventListener("click", () => {
    if (Number(billAmt.value) > 0) {
        nextBtn.style.display = "none";
        cashGiven.style.display = "block";
    }
    else {
        billError.style.display = "block";
    }
});

//showing table on clicking check
checkBtn.addEventListener("click", () => {
    if (Number(cashAmt.value) > Number(billAmt.value)) {
        // checkBtn.style.display="none";
        // changeTable.style.display = "block";
        calculation(billEntered, cashEntered);
    }
});

// funtion for calculating no. of notes    
function calculation(bill, cash) {
    var retAmt = cash - bill;
    if(retAmt<1){
        lastError.style.display = "block";
    }
    changeTable.style.display = "block";
    for(var i=0; i<arrayOfNotes.length; i++){
        if(retAmt>arrayOfNotes[i])
        {
            var notes= Math.floor(retAmt/arrayOfNotes[i]);
            // noOfNotes[i].innerText= '${notes}';
            noOfNotes[i].innerText= notes;
            retAmt=retAmt%arrayOfNotes[i];
        }
    }
}

        //calculating no of notes
        // function calculation() {
        //     for(var i=0; i<arrayOfNotes.length; i++)
        //     {
        //         if(returnAmt>arrayOfNotes[i]){
        //             var notes= math.floor(returnAmt/arrayOfNotes[i])
        //             //innerhtml
        //             returnAmt=returnAmt%arrayOfNotes[i];
        //         }
        //     }

