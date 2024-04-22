const dispaly=document.getElementById(`display`)
function appendToDisplay(input){
    dispaly.value += input;
}
function clearDisplay(){
    dispaly.value= "";
}
function calculate(){
    try{
        dispaly.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
   
}