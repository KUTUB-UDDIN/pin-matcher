//    pin generate handle
      
function getPin(){
    const random = Math.random()*10000;
     const pin = (random +'').split('.')[0]

    if (pin.length===4) {
        return pin;
    }

    else{
        return getPin();
    }
}


// display generate pin 

function generatePin(){
const pinInput =  document.getElementById('pin-control');
pinInput.value = getPin();
}


// handle calculator button event
const digitContainer = document.getElementById('digits-container');
digitContainer.addEventListener('click',function(event){
const digit = event.target.innerText;
if (isNaN(digit)) {
   //handle backspace
   // handle clear

   if (digit=='C') {
    const typeInput = document.getElementById('typed-digit');
     typeInput.value = " ";
   }
   if (digit=='<') {
    const typeInput = document.getElementById('typed-digit');
     typeInput.value =  typeInput.value - 1 ;
   }

}
else{
     const typeInput = document.getElementById('typed-digit');
     typeInput.value = typeInput.value + digit;
}
});

function verifyPin(){

const pin =  document.getElementById('pin-control').value;
const typePin = document.getElementById('typed-digit').value;
if (pin==typePin) {

displayResult('block','none')

}

else{

displayResult('none','block')
}
} 


function displayResult(correctStatus,incorrectStatus){

 const correctPin = document.getElementById('correct-pin');
 correctPin.style.display = correctStatus ;
 const incorrectPin = document.getElementById('incorrect-pin');
 incorrectPin.style.display = incorrectStatus;
}