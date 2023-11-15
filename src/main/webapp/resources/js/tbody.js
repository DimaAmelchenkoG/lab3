document.getElementById("mainForm:inputY").value = 0.0;
const observer = new MutationObserver((mutations, observer) => {
    for(let mutation of mutations) {
        if (mutation.target.classList.contains("line1")) {
            draw();
        }
    }
});

observer.observe(document, {
    subtree: true,
    childList: true
})




//const button = document.getElementById("button");


//button.addEventListener("click", (event)=>{
//    draw();
//})

function draw() {
    var table = document.getElementById('maintable');
    ctx.fillStyle = '#0000FF';
    if (table.rows[1].cells[0].innerHTML != "") {
        for (var z = 1, n = table.rows.length; z < n; z++) {
            // for (var c = 1, m = 4; c < m; c++) {
            //alert(table.rows[r].cells[c].innerHTML);
            var x = (table.rows[z].cells[0].innerHTML);
            var y = (table.rows[z].cells[1].innerHTML);
            var r = document.getElementById("mainForm:select").value;
            //var r = (table.rows[z].cells[2].innerHTML);
            //var hit = (table.rows[z].cells[3].innerHTML);
            //alert(check(x, y, r));
            hit = check(x, y, r);
            //   }
            if (hit == "Hit") {
                ctx.fillStyle = '#0000FF';
            } else {
                ctx.fillStyle = '#00FF00';
            }
            ctx.fillRect((250 + 37.5 * x), (250 - 37.5 * y), 5, 5);
        }
    }else {
        drawCanvasAfterSelect(select.value);

    }
}

function check(x, y, r){
    //alert("x = " + x + "y= " + y + "r= " + r);
    x = Number(x);
    y = Number(y);
    r = Number(r);
    //alert(x + y)
    //alert(checkTriangle(x, y, r));
    //alert(checkSquare(x, y, r));
    //alert(checkCircle(x, y, r));
    if (checkCircle(x, y, r) || checkSquare(x, y, r) || checkTriangle(x, y, r)){
        return 'Hit';
    }
    return 'No hit';
}


function checkSquare(x, y, r){
    return (x <= 0 && x >= -r/2) && (y <= 0 && y >= -r);
}

function checkTriangle(x, y, r){
    //System.out.println(x + " " + y + " " + r);
    //System.out.println( (x >= 0 & y >= 0) & ((x*x + y*y) <= r*r));
    return (x >= 0 && y >= 0) && (y <= r && x <= r) && (x + y <= r);
}

function checkCircle(x, y, r){
    //System.out.println((x <= 0 & y >= 0) & ((x*x + y*y) <= (r*r)/4));
    return (x <= 0 && y >= 0) && ((x*x + y*y) <= (r*r)/4);
}