// Code segment inspired by NextChapter
function updateTime() {
    let ms = new Date().getMilliseconds();
    let frame = Math.floor(ms / 40); //25 FPS
    let headpage = document.querySelector("#factdisplay");

    // 0 -> 1 -> 2 ... -> 11 -> 12 -> 11 -> ... 2 -> 1 -> 0 (25 frames in total)
    if(frame == 0) {
        headpage.style.backgroundImage = "var(--zero)";
    } else if(frame == 1) {
        headpage.style.backgroundImage = "var(--one)";
    } else if(frame == 2){
        headpage.style.backgroundImage = "var(--two)";
    } else if(frame == 3) {
        headpage.style.backgroundImage = "var(--three)";
    } else if(frame == 4) {
        headpage.style.backgroundImage = "var(--four)";
    } else if(frame == 5) {
        headpage.style.backgroundImage = "var(--five)";
    } else if(frame == 6) {
        headpage.style.backgroundImage = "var(--six)";
    } else if(frame == 7) {
        headpage.style.backgroundImage = "var(--seven)";
    } else if(frame == 8) {
        headpage.style.backgroundImage = "var(--eight)";
    } else if(frame == 9) {
        headpage.style.backgroundImage = "var(--nine)";
    } else if(frame == 10) {
        headpage.style.backgroundImage = "var(--ten)";
    } else if(frame == 11) {
        headpage.style.backgroundImage = "var(--eleven)";
    } else if(frame == 12) {
        headpage.style.backgroundImage = "var(--twelve)";
    } else if(frame == 13) {
        headpage.style.backgroundImage = "var(--twelve)";
    } else if(frame == 14) {
           headpage.style.backgroundImage = "var(--eleven)";
    } else if(frame == 15) {
           headpage.style.backgroundImage = "var(--ten)";
    } else if(frame == 16) {
        headpage.style.backgroundImage = "var(--nine)";
    } else if(frame == 17) {
        headpage.style.backgroundImage = "var(--eight)";
    } else if(frame == 18) {
        headpage.style.backgroundImage = "var(--seven)";
    } else if(frame == 19) {
        headpage.style.backgroundImage = "var(--six)";
    } else if(frame == 20) {
        headpage.style.backgroundImage = "var(--five)";
    } else if(frame == 21) {
        headpage.style.backgroundImage = "var(--four)";
    } else if(frame == 22) {
        headpage.style.backgroundImage = "var(--three)";
    } else if(frame == 23) {
        headpage.style.backgroundImage = "var(--two)";
    } else if(frame == 24) {
        headpage.style.backgroundImage = "var(--one)";
    } else { //I don't think this is reachable but let's just put it because why not
        headpage.style.backgroundImage = "var(--zero)";
    }
}

setInterval(updateTime, 25); 
