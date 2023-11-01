
document.getElementById('canvas').onclick = function(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.

    //console.log("Left? : " + x + " ; Top? : " + y + ".");

    //document.getElementById('yInput3').value = String((250-y)/37.5).substring(0, 5);
    //document.getElementById('x-value3').value = String((x-250)/37.5).substring(0, 5);
    //document.getElementById("r-value3").value = String(document.getElementById("mainForm:select").value);

    document.getElementById('InvizForm:yInput3').value = String((250-y)/37.5).substring(0, 5);
    document.getElementById('InvizForm:x-value3').value = String((x-250)/37.5).substring(0, 5);
    document.getElementById("InvizForm:r-value3").value = String(document.getElementById("mainForm:select").value);

    graphClick();

}

document.getElementById('R1').onclick = function(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - 8; //x position within the element.
    var y = e.clientY - 176.6;  //y position within the element.
    //console.log("Left? : " + x + " ; Top? : " + y + ".");
    var xValue = (x-250)/150;
    var yValue = -(y-250)/150;


    var r = Number(document.getElementById("r-value").value);

    document.getElementById('yInput3').value = String(-(y-250)/150 * r).substring(0, 5);
    document.getElementById('x-value3').value = String((x-250)/150 * r).substring(0, 5);
    document.getElementById("r-value3").value = String(document.getElementById("r-value").value);

    document.getElementById('form3').submit();

}


document.getElementById('R2').onclick = function(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - 8; //x position within the element.
    var y = e.clientY - 176.6;  //y position within the element.
    //console.log("Left? : " + x + " ; Top? : " + y + ".");
    var xValue = (x-250)/150;
    var yValue = -(y-250)/150;


    var r = Number(document.getElementById("r-value").value);

    document.getElementById('yInput3').value = String(-(y-250)/150 * r).substring(0, 5);
    document.getElementById('x-value3').value = String((x-250)/150 * r).substring(0, 5);
    document.getElementById("r-value3").value = String(document.getElementById("r-value").value);

    document.getElementById('form3').submit();

}


document.getElementById('R3').onclick = function(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - 8; //x position within the element.
    var y = e.clientY - 176.6;  //y position within the element.
    //console.log("Left? : " + x + " ; Top? : " + y + ".");
    var xValue = (x-250)/150;
    var yValue = -(y-250)/150;


    var r = Number(document.getElementById("r-value").value);

    document.getElementById('yInput3').value = String(-(y-250)/150 * r).substring(0, 5);
    document.getElementById('x-value3').value = String((x-250)/150 * r).substring(0, 5);
    document.getElementById("r-value3").value = String(document.getElementById("r-value").value);

    document.getElementById('form3').submit();

}


document.getElementById('R4').onclick = function(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - 8; //x position within the element.
    var y = e.clientY - 176.6;  //y position within the element.
    //console.log("Left? : " + x + " ; Top? : " + y + ".");
    var xValue = (x-250)/150;
    var yValue = -(y-250)/150;


    var r = Number(document.getElementById("r-value").value);

    document.getElementById('yInput3').value = String(-(y-250)/150 * r).substring(0, 5);
    document.getElementById('x-value3').value = String((x-250)/150 * r).substring(0, 5);
    document.getElementById("r-value3").value = String(document.getElementById("r-value").value);

    document.getElementById('form3').submit();

}


