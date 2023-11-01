// //<script>
//     var example = document.getElementById("example"),
//     ctx     = example.getContext('2d');
//     example.height = 480;
//     example.width  = 640;
var canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d');
// ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
// ctx.strokeRect(15, 15, 266, 266);
// ctx.strokeRect(18, 18, 260, 260);
// ctx.fillStyle = '#AF5200'; // меняем цвет клеток

drawCanvas();
function drawCanvas() {

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
    ctx.beginPath();
    ctx.moveTo(0, 500);
    ctx.lineTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.lineTo(0, 250);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 500);
    ctx.lineTo(250, 0);
    ctx.stroke();

    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250, 250 - 37.5);
    ctx.lineTo(250 + 37.5, 250);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(250 - 18.75, 250);
    ctx.lineTo(250 - 18.75, 250 + 37.5);
    ctx.lineTo(250, 250 + 37.5);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 18.75, -Math.PI / 2, Math.PI, true);
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



