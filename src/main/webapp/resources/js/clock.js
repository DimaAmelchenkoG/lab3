const clock = document.getElementById("time_now");

function update_time(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

update_time();
setInterval(update_time, 13*1000);
