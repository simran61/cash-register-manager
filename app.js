var billEntered = document.querySelector("#billAmt");
var cashEntered= document.querySelector("#cashAmt");

// console.log(billEntered.value);
// console.log(cashEntered.value);

var next= document.querySelector("#nextBtn");
var check= document.querySelector("checkBtn");

var cashGiven = document.querySelector(".mid2");
var changeTable= document.querySelector(".last");

var billError= document.querySelector(".mid1Error");
var cashError= document.querySelector(".mid2Error");

var noOfNotes= document.querySelector(".noteCounter");

var arrayOfNotes= [2000, 500, 100, 20, 10, 5, 1];

//showing cash given div
nextBtn.addEventListener("click", ()=>{
    if(Number(billAmt.value)>0){
        nextBtn.style.display="none";
        cashGiven.style.display = "block";
    }
    else{
        billError.style.display="block";
    }
});
 
//showing table on clicking check
checkBtn.addEventListener("click",()=>{
    if(Number(cashAmt.value)>billAmt.value){
        checkBtn.style.display="none";
        changeTable.style.display="block";
    }
    else{
        cashError.style.display="block";
    }
});
