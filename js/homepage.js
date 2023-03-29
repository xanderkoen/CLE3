//voeg hier die coole code toe die alles gaat doen :)
let hamburger = false
let tree = false
let deur = false
let bgm = new Audio('../media/bgm.mp3');
let muted = true
bgm.loop = true
let audioplaying = false

function playaudio() {
    if (audioplaying === false){
        bgm.play()
    }
}

function audioswitch(){
    playaudio()
    if (muted === false){
        document.getElementById("muziek").src = "./../media/geluidUit.png";
        bgm.pause()
        muted = true
    }else{
        document.getElementById("muziek").src = "./../media/geluidAan.png"
        muted = false
        bgm.play()
    }
}


function hamburgerchange() {


    if (hamburger === false){
        document.getElementById("deur").src = "./../media/deurdicht.png";
        document.getElementById("tree").src = "./../media/treedicht.png";
        hamburger = true;
        tree = false;
        deur = false;
        document.getElementById("hamburger").src = "../media/HamburgerGif.gif";
        setTimeout(() => { document.getElementById("hamburger").classList.add("hidden"); }, 350)
        setTimeout(() => { document.getElementById("hamburger").classList.remove("visible"); }, 350)
        setTimeout(() => { document.getElementById("split").classList.add("visible"); }, 350)
        setTimeout(() => { document.getElementById("split").classList.remove("hidden"); }, 350)
    }
}

function deurchange() {


    if (deur === false){
        resetburger();
        document.getElementById("tree").src = "./../media/treedicht.png";
        document.getElementById("hamburger").src = "./../media/hamburgerdicht.png";
        deur = true;
        hamburger = false;
        tree = false;
        document.getElementById("deur").src = "../media/DeurGif.gif";
        setTimeout(() => { document.getElementById("deur").src = "./../media/deuropen.png"; }, 700);
    }else{
        window.location.href = "../html/reizen.html";
    }
}

function treechange() {


    if (tree === false){
        resetburger();
        document.getElementById("hamburger").src = "./../media/hamburgerdicht.png";
        document.getElementById("deur").src = "./../media/deurdicht.png";

        tree = true;
        hamburger = false;
        deur = false;
        document.getElementById("tree").src = "../media/BordGifLoop.gif";
        setTimeout(() => { document.getElementById("tree").src = "./../media/treeopen.png"; }, 500);

    }else{
        window.location.href = "../html/toegankelijkheid.html";
    }
}

function hamburgerL() {
    window.location.href = "../html/voorzieningen.html";
}

function hamburgerR() {
    window.location.href = "../html/beweging.html";
}

function resetburger() {
    document.getElementById("split").classList.add("hidden")
    document.getElementById("split").classList.remove("visible")
    document.getElementById("hamburger").classList.add("visible")
    document.getElementById("hamburger").classList.remove("hidden")
}