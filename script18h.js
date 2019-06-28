setInterval(function setTime() {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    let hourRotation = hour * 30 + (minute / 2);
    let minuteRotation = minute * 6;
    let secondRotation = second * 6;
    document.getElementById('secondArr').style.transform = "rotate(" + secondRotation + "deg)"
    document.getElementById('minuteArr').style.transform = "rotate(" + minuteRotation + "deg)"
    document.getElementById('hourArr').style.transform = "rotate(" + hourRotation + "deg)"
}, 1000);