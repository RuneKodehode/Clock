
let slider = document.getElementById("sliderOne")
let slider2 = document.getElementById("sliderTwo")
let slider3 = document.getElementById("sliderThree")
let bodyy = document.getElementsByName("body")
scale = 0;
scale2 = 0;
function btn() {
if (!scale) {
    slider.style.animationPlayState = "running"
    slider2.style.animationPlayState = "running"
    slider3.style.animationPlayState = "running"
    scale = 1
} else {
    slider.style.animationPlayState = "paused"
    slider2.style.animationPlayState = "paused"
    slider3.style.animationPlayState = "paused"
    scale = 0;
}
}

function btn2() {
    if (!scale2) {
       document.body.style.animationPlayState = "running"
       console.log("wtf")
        scale2 = 1
    } else {
        document.body.style.animationPlayState = "paused"
       
        scale2 = 0;
    }
    }
   
