let isYValid = true ;
let isXValid = false;
let isRValid = true;


const yValue = document.getElementById("mainForm:inputY");
const xValue = document.getElementById("mainForm:inputX");
const rValue = document.getElementById("mainForm:select");

ButtonOn();

yValue.addEventListener("keyup", function () {
    var str = (String(yValue.value)).replace(",", ".");
    isYValid = str < 4 && str > -4 && !isNaN(str) && (str.trim().length !==0);

    isFormReadyToSent();
})


xValue.addEventListener("keyup", function () {
    //alert(xValue.value.trim().length !==0);
    var str = (String(xValue.value)).replace(",", ".");
    isXValid = str < 5 && str > -5 && !isNaN(str) && (str.trim().length !==0);
    isFormReadyToSent();
})

rValue.addEventListener("change", function () {
   isRValid =(rValue.value == 1 || rValue.value == 2 || rValue.value == 3 || rValue.value == 4 || rValue.value == 5) && !isNaN(rValue.value) && (rValue.value.trim().length !==0);
   isRValid = true;
    isFormReadyToSent();
})

function isFormReadyToSent(){
   // const form = document.getElementById("form");
   // const formData = new FormData(form);

    if (!isYValid || !isXValid || !isRValid){
        ButtonOn();
        return;
    }

    ButtonOff();

}

function ButtonOn(){
    document.getElementById("mainForm:Enter").disabled = true;
}

function ButtonOff(){
    document.getElementById("mainForm:Enter").disabled = false;
}

