
const select = document.getElementById("mainForm:select");
select.addEventListener("change", (event) => {
    drawCanvasAfterSelect(select.value);
    draw();

})

var canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d');


//drawCanvas();
function drawCanvasAfterSelect(r) {

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(500, 500);
    ctx.lineTo(500, 0);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, 500);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#000000';

    //каркас
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.stroke();



    //Линия
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.lineTo(0, 250);
    ctx.stroke();

    //Линия
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.lineTo(250, 0);
    ctx.stroke();


    //треугольник
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 250 - 37.5 * r);
    ctx.lineTo(250 + 37.5 * r, 250);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.stroke();

    //прямоугольник
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250 - 18.75 * r, 250);
    ctx.lineTo(250 - 18.75 * r, 250 + 37.5 * r);
    ctx.lineTo(250, 250 + 37.5 * r);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.stroke();


    //круг
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 18.75 * r, -Math.PI / 2, Math.PI, true);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250-37.5);
    ctx.lineTo(250-10, 250-37.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250-37.5 * 3);
    ctx.lineTo(250-10, 250-37.5 * 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250+37.5 );
    ctx.lineTo(250-10, 250+37.5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250+37.5 * 3);
    ctx.lineTo(250-10, 250+37.5 * 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250 - 37.5*4);
    ctx.lineTo(250-10, 250 - 37.5*4);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(250+10, 250 - 37.5*2);
    ctx.lineTo(250-10, 250 - 37.5*2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250 - 37.5*5);
    ctx.lineTo(250-10, 250 - 37.5*5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 250 + 37.5*5);
    ctx.lineTo(250-10, 250 + 37.5*5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 325);
    ctx.lineTo(250-10, 325);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250+10, 400);
    ctx.lineTo(250-10, 400);
    ctx.stroke();



    ctx.beginPath();
    ctx.moveTo(250 + 37.5 * 4, 250+10);
    ctx.lineTo(250 + 37.5 * 4, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 + 37.5 * 5, 250+10);
    ctx.lineTo(250 + 37.5 * 5, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 + 37.5 * 3, 250+10);
    ctx.lineTo(250 + 37.5 * 3, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 + 37.5 * 2, 250+10);
    ctx.lineTo(250 + 37.5 * 2, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 + 37.5 * 1, 250+10);
    ctx.lineTo(250 + 37.5 * 1, 250-10);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(250 - 37.5 * 4, 250+10);
    ctx.lineTo(250 - 37.5 * 4, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 - 37.5 * 5, 250+10);
    ctx.lineTo(250 - 37.5 * 5, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 - 37.5 * 3, 250+10);
    ctx.lineTo(250 - 37.5 * 3, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 - 37.5 * 2, 250+10);
    ctx.lineTo(250 - 37.5 * 2, 250-10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250 - 37.5 * 1, 250+10);
    ctx.lineTo(250 - 37.5 * 1, 250-10);
    ctx.stroke();
}



