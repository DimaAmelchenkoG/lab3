
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
            var r = (table.rows[z].cells[2].innerHTML);
            var hit = (table.rows[z].cells[3].innerHTML);
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
