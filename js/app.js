function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
       return getPin();
    }
}
function generatePin(){
    const  pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
         const calcOutput = document.getElementById('output');
    if(isNaN(number)){
        if(number == 'C'){
            calcOutput.value = '';
        }
    }
    else{
   
    const previousOutput = calcOutput.value;
    const newOutput = previousOutput + number;
    // calcOutput.value += number;
    calcOutput.value = newOutput;
    }
    

})

function verifyPin(){
   const pin = document.getElementById('display-pin').value;
   const calcOutput = document.getElementById('output').value;
   const pinSuccess = document.getElementById('pin-success');
   const pinFail = document.getElementById('pin-fail');

   if(pin == calcOutput){
       pinSuccess.style.display = 'block';
       pinFail.style.display = 'none';
   }
   else{
       pinFail.style.display = 'block';
       pinSuccess.style.display = 'none';
   }
    
}