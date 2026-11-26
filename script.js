// Code segment inspired by NextChapter
function updateTime() {
    let ms = new Date().getMilliseconds();
    let frame = Math.floor(ms / 40); //25 FPS
    let fact = document.querySelector("#factdisplay");
    let bg = document.querySelector("#background");

    // 0 -> 1 -> 2 ... -> 11 -> 12 -> 11 -> ... 2 -> 1 -> 0 (25 frames in total)
    if(frame == 0) {
        fact.style.backgroundImage = "var(--zero)";
        bg.style.backgroundImage = "var(--zero)";
    } else if(frame == 1) {
        fact.style.backgroundImage = "var(--one)";
        bg.style.backgroundImage = "var(--one)";
    } else if(frame == 2){
        fact.style.backgroundImage = "var(--two)";
        bg.style.backgroundImage = "var(--two)";
    } else if(frame == 3) {
        fact.style.backgroundImage = "var(--three)";
        bg.style.backgroundImage = "var(--three)";
    } else if(frame == 4) {
        fact.style.backgroundImage = "var(--four)";
        bg.style.backgroundImage = "var(--four)";
    } else if(frame == 5) {
        fact.style.backgroundImage = "var(--five)";
        bg.style.backgroundImage = "var(--five)";
    } else if(frame == 6) {
        fact.style.backgroundImage = "var(--six)";
        bg.style.backgroundImage = "var(--six)";
    } else if(frame == 7) {
        fact.style.backgroundImage = "var(--seven)";
        bg.style.backgroundImage = "var(--seven)";
    } else if(frame == 8) {
        fact.style.backgroundImage = "var(--eight)";
        bg.style.backgroundImage = "var(--eight)";
    } else if(frame == 9) {
        fact.style.backgroundImage = "var(--nine)";
        bg.style.backgroundImage = "var(--nine)";
    } else if(frame == 10) {
        fact.style.backgroundImage = "var(--ten)";
        bg.style.backgroundImage = "var(--ten)";
    } else if(frame == 11) {
        fact.style.backgroundImage = "var(--eleven)";
        bg.style.backgroundImage = "var(--eleven)";
    } else if(frame == 12) {
        fact.style.backgroundImage = "var(--twelve)";
        bg.style.backgroundImage = "var(--twelve)";
    } else if(frame == 13) {
        fact.style.backgroundImage = "var(--twelve)";
        bg.style.backgroundImage = "var(--twelve)";
    } else if(frame == 14) {
        fact.style.backgroundImage = "var(--eleven)";
        bg.style.backgroundImage = "var(--eleven)";
    } else if(frame == 15) {
        fact.style.backgroundImage = "var(--ten)";
        bg.style.backgroundImage = "var(--ten)";
    } else if(frame == 16) {
        fact.style.backgroundImage = "var(--nine)";
        bg.style.backgroundImage = "var(--nine)";
    } else if(frame == 17) {
        fact.style.backgroundImage = "var(--eight)";
        bg.style.backgroundImage = "var(--eight)";
    } else if(frame == 18) {
        fact.style.backgroundImage = "var(--seven)";
        bg.style.backgroundImage = "var(--seven)";
    } else if(frame == 19) {
        fact.style.backgroundImage = "var(--six)";
        bg.style.backgroundImage = "var(--six)";
    } else if(frame == 20) {
        fact.style.backgroundImage = "var(--five)";
        bg.style.backgroundImage = "var(--five)";
    } else if(frame == 21) {
        fact.style.backgroundImage = "var(--four)";
        bg.style.backgroundImage = "var(--four)";
    } else if(frame == 22) {
        fact.style.backgroundImage = "var(--three)";
        bg.style.backgroundImage = "var(--three)";
    } else if(frame == 23) {
        fact.style.backgroundImage = "var(--two)";
        bg.style.backgroundImage = "var(--two)";
    } else if(frame == 24) {
        fact.style.backgroundImage = "var(--one)";
        bg.style.backgroundImage = "var(--one)";
    } else { //I don't think this is reachable but I just put it as a preventive measure
        fact.style.backgroundImage = "var(--zero)";
        bg.style.backgroundImage = "var(--zero)";
    }
}

setInterval(updateTime, 25); 
