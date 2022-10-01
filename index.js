
let slider = document.getElementById("sliderOne")
let slider2 = document.getElementById("sliderTwo")
let slider3 = document.getElementById("sliderThree")
scale = 0;
scale2 = 0;
let timer = document.getElementById("timer");
let Array = [1];

// få visarane te å spinna i klokko samt sekundtelljar
function btn() {
if (!scale) {
    tids = setInterval (() => {
        timer.textContent = Array[0]++ + "0" +"ms";
    }, 10);
    slider.style.animationPlayState = "running"
    slider2.style.animationPlayState = "running"
    slider3.style.animationPlayState = "running"
    scale = 1
 return
} else {
   clearInterval(tids)
        timer.textContent = 0;
    slider.style.animationPlayState = "paused"
    slider2.style.animationPlayState = "paused"
    slider3.style.animationPlayState = "paused"
    scale = 0;
}
}

// få bodyen te å spinna i sin egen axis
let bodyy = document.getElementsByName("body")
function btn2() {
    if (!scale2) {
       document.body.style.animationPlayState = "running"
        scale2 = 1
    } else {
        document.body.style.animationPlayState = "paused"
        scale2 = 0;
    }
    }
   














