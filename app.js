console.log("this is javascript file");

// writing logic to get a random number from the computer

const num = Math.random() * 100
const n = num.toFixed(0)

// geting all the element by queryselector

const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const middiv = document.querySelector(".middiv");
const upperdiv = document.querySelector(".upperdiv");
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn")

// writing logic to get the input from the user and display result

let user;
const stoneinput = function () {
    user = "stone"
    if (n >= 34 && n <= 67) { result.innerHTML = ` <span class="lose">You lose </span><br> ` };
    if (n >= 68 && n <= 100) { result.innerHTML = `<span class="win">You win</span> <br> ` };
    if (n <= 33) { result.innerHTML = `<span class="draw">Match Draw</span><br> ` };
}
const refresh = function () {
    location.reload();
}
btn.addEventListener("click", refresh)
stone.addEventListener("click", stoneinput);
const paperinput = function () {
    user = "paper"
    if (n >= 34 && n <= 67) { result.innerHTML = `<span class="draw">Match Draw</span><br>` };
    if (n >= 68 && n <= 100) { result.innerHTML = ` <span class="lose">You lose </span><br>` };
    if (n <= 33) { result.innerHTML = `<span class="win">You win</span> <br>` };
    const refresh = function () {
        location.reload();
    }
    btn.addEventListener("click", refresh)
}
paper.addEventListener("click", paperinput);
const scissorinput = function () {
    user = "scissor";
    if (n >= 34 && n <= 67) { result.innerHTML = `<span class="win">You win</span> <br> ` };
    if (n >= 68 && n <= 100) { result.innerHTML = `<span class="draw">Match Draw</span><br>` };
    if (n <= 33) { result.innerHTML = ` <span class="lose">You lose </span><br>` };
    const refresh = function () {
        location.reload();
    }
    btn.addEventListener("click", refresh)
}
scissor.addEventListener("click", scissorinput);

// writing logic to display the user and computer input

const display_mid = function () {
    if (user == "stone") {
        message1.innerHTML =
            `
        <div id="message1"><h1>YOU</h1><br><img src="/stone.png" alt="stone-pic"></div> 
        `
    }
    else if (user == "paper") {
        message1.innerHTML =
            `
        <div id="message1"><h1>YOU</h1><br><img src="/paper.png" alt="paper-pic"></div> 
        `
    }
    else if (user == "scissor") {
        message1.innerHTML =
            `
        <div id="message1"><h1>YOU</h1><br><img src="/scissor.png" alt="scissor-pic"></div> 
        `
    }
    if (n <= 33) {
        message2.innerHTML =
            `
        <div id="message2"><h1>Comp</h1><br><img src="/stone.png" alt="stone-pic"></div> 
        `
    }
    if (n >= 34 && n <= 67) {
        message2.innerHTML =
            `
        <div id="message2"><h1>Comp</h1><br><img src="/paper.png" alt="stone-pic"></div> 
        `
    }
    if (n >= 68 && n <= 100) {
        message2.innerHTML =
            `
        <div id="message1"><h1>Com</h1><br><img src="/scissor.png" alt="stone-pic"></div> 
        `
    }
}
upperdiv.addEventListener("click", display_mid);

