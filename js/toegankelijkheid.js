
let collumspijk = document.getElementById("colspijk");

let collumroffa = document.getElementById("colrof");

let activespijk = false

let activeroffa = false

function spijkwap() {
    let content =  document.getElementById("spijkcontent");
    let hide =  document.getElementById("roffacontent");
    if (activespijk === false){
        content.classList.add("visible");
        content.classList.remove("hidden");
        hide.classList.add("hidden");
        hide.classList.remove("visible");
        activespijk = true;
        activeroffa= false;
        console.log("visible");
    }
    else{
        content.classList.add("hidden");
        content.classList.remove("visible");
        activespijk = false;
        console.log("invis");
    }
}

function roffaswap() {
    let content =  document.getElementById("roffacontent")
    let hide =  document.getElementById("spijkcontent")
    if (activeroffa === false){
        content.classList.add("visible");
        content.classList.remove("hidden");
        hide.classList.add("hidden");
        hide.classList.remove("visible");
        activeroffa = true;
        activespijk = false;
        console.log("visible");
    }
    else{
        content.classList.add("hidden");
        content.classList.remove("visible");
        activeroffa = false;
        console.log("invis");
    }
}
