// Code segment inspired by NextChapter
function updateTime() {
    let ms = new Date().getMilliseconds();
    let oneframe = Math.floor(Date.now() / 40) % 25; //25 Frames/s /* This line is made by self based on the response for the line below */
    let fiveframe = Math.floor(Date.now() / 200) % 25; //25 Frames/5s /* This line AI assisted */
    let fact = document.querySelector("#factdisplay");
    let bg = document.querySelector("#background");
    let header = document.querySelector("#header");

    // 0 -> 1 -> 2 ... -> 11 -> 12 -> 11 -> ... 2 -> 1 -> 0 (25 frames in total)
    if(oneframe == 0) {
        fact.style.backgroundImage = "var(--zero)";
    } else if(oneframe == 1) {
        fact.style.backgroundImage = "var(--one)";
    } else if(oneframe == 2){
        fact.style.backgroundImage = "var(--two)";
    } else if(oneframe == 3) {
        fact.style.backgroundImage = "var(--three)";
    } else if(oneframe == 4) {
        fact.style.backgroundImage = "var(--four)";
    } else if(oneframe == 5) {
        fact.style.backgroundImage = "var(--five)";
    } else if(oneframe == 6) {
        fact.style.backgroundImage = "var(--six)";
    } else if(oneframe == 7) {
        fact.style.backgroundImage = "var(--seven)";
    } else if(oneframe == 8) {
        fact.style.backgroundImage = "var(--eight)";
    } else if(oneframe == 9) {
        fact.style.backgroundImage = "var(--nine)";
    } else if(oneframe == 10) {
        fact.style.backgroundImage = "var(--ten)";
    } else if(oneframe == 11) {
        fact.style.backgroundImage = "var(--eleven)";
    } else if(oneframe == 12) {
        fact.style.backgroundImage = "var(--twelve)";
    } else if(oneframe == 13) {
        fact.style.backgroundImage = "var(--twelve)";
    } else if(oneframe == 14) {
        fact.style.backgroundImage = "var(--eleven)";
    } else if(oneframe == 15) {
        fact.style.backgroundImage = "var(--ten)";
    } else if(oneframe == 16) {
        fact.style.backgroundImage = "var(--nine)";
    } else if(oneframe == 17) {
        fact.style.backgroundImage = "var(--eight)";
    } else if(oneframe == 18) {
        fact.style.backgroundImage = "var(--seven)";
    } else if(oneframe == 19) {
        fact.style.backgroundImage = "var(--six)";
    } else if(oneframe == 20) {
        fact.style.backgroundImage = "var(--five)";
    } else if(oneframe == 21) {
        fact.style.backgroundImage = "var(--four)";
    } else if(oneframe == 22) {
        fact.style.backgroundImage = "var(--three)";
    } else if(oneframe == 23) {
        fact.style.backgroundImage = "var(--two)";
    } else if(oneframe == 24) {
        fact.style.backgroundImage = "var(--one)";
    } else { //I don't think this is reachable but I just put it as a preventive measure
        fact.style.backgroundImage = "var(--zero)";
    }

    if(fiveframe == 0) {
        bg.style.backgroundImage = "var(--zero)";
        header.style.backgroundImage = "var(--zero)";
    } else if(fiveframe == 1) {
        bg.style.backgroundImage = "var(--one)";
        header.style.backgroundImage = "var(--one)";
    } else if(fiveframe == 2){
        bg.style.backgroundImage = "var(--two)";
        header.style.backgroundImage = "var(--two)";
    } else if(fiveframe == 3) {
        bg.style.backgroundImage = "var(--three)";
        header.style.backgroundImage = "var(--three)";
    } else if(fiveframe == 4) {
        bg.style.backgroundImage = "var(--four)";
        header.style.backgroundImage = "var(--four)";
    } else if(fiveframe == 5) {
        bg.style.backgroundImage = "var(--five)";
        header.style.backgroundImage = "var(--five)";
    } else if(fiveframe == 6) {
        bg.style.backgroundImage = "var(--six)";
        header.style.backgroundImage = "var(--six)";
    } else if(fiveframe == 7) {
        bg.style.backgroundImage = "var(--seven)";
        header.style.backgroundImage = "var(--seven)";
    } else if(fiveframe == 8) {
        bg.style.backgroundImage = "var(--eight)";
        header.style.backgroundImage = "var(--eight)";
    } else if(fiveframe == 9) {
        bg.style.backgroundImage = "var(--nine)";
        header.style.backgroundImage = "var(--nine)";
    } else if(fiveframe == 10) {
        bg.style.backgroundImage = "var(--ten)";
        header.style.backgroundImage = "var(--ten)";
    } else if(fiveframe == 11) {
        bg.style.backgroundImage = "var(--eleven)";
        header.style.backgroundImage = "var(--eleven)";
    } else if(fiveframe == 12) {
        bg.style.backgroundImage = "var(--twelve)";
        header.style.backgroundImage = "var(--twelve)";
    } else if(fiveframe == 13) {
        bg.style.backgroundImage = "var(--twelve)";
        header.style.backgroundImage = "var(--thirteen)";
    } else if(fiveframe == 14) {
        bg.style.backgroundImage = "var(--eleven)";
        header.style.backgroundImage = "var(--fourteen)";
    } else if(fiveframe == 15) {
        bg.style.backgroundImage = "var(--ten)";
        header.style.backgroundImage = "var(--fifteen)";
    } else if(fiveframe == 16) {
        bg.style.backgroundImage = "var(--nine)";
        header.style.backgroundImage = "var(--sixteen)";
    } else if(fiveframe == 17) {
        bg.style.backgroundImage = "var(--eight)";
        header.style.backgroundImage = "var(--seventeen)";
    } else if(fiveframe == 18) {
        bg.style.backgroundImage = "var(--seven)";
        header.style.backgroundImage = "var(--eightteen)";
    } else if(fiveframe == 19) {
        bg.style.backgroundImage = "var(--six)";
        header.style.backgroundImage = "var(--nineteen)";
    } else if(fiveframe == 20) {
        bg.style.backgroundImage = "var(--five)";
        header.style.backgroundImage = "var(--twenty)";
    } else if(fiveframe == 21) {
        bg.style.backgroundImage = "var(--four)";
        header.style.backgroundImage = "var(--twentyone)";
    } else if(fiveframe == 22) {
        bg.style.backgroundImage = "var(--three)";
        header.style.backgroundImage = "var(--twentytwo)";
    } else if(fiveframe == 23) {
        bg.style.backgroundImage = "var(--two)";
        header.style.backgroundImage = "var(--twentythree)";
    } else if(fiveframe == 24) {
        bg.style.backgroundImage = "var(--one)";
        header.style.backgroundImage = "var(--twentyfour)";
    } else { //I don't think this is reachable but I just put it as a preventive measure
        bg.style.backgroundImage = "var(--zero)";
        header.style.backgroundImage = "var(--zero)";
    }
}

setInterval(updateTime, 25); 
