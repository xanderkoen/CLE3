//voeg hier die coole code toe die alles gaat doen :)
let hamburger = false
let tree = false
let deur = false

function hamburgerchange() {


    if (hamburger === false){
        document.getElementById("deur").src = "./../media/deurdicht.png";
        document.getElementById("tree").src = "./../media/treedicht.png";
        hamburger = true;
        tree = false;
        deur = false;
        document.getElementById("hamburger").src = "../media/HamburgerGif.gif";
        setTimeout(() => { document.getElementById("hamburger").src = "./../media/hamburgeropen.png"; }, 350)

    }else{
        window.location.href = "../html/beweging.html";
    }
}

function deurchange() {


    if (deur === false){
        document.getElementById("tree").src = "./../media/treedicht.png";
        document.getElementById("hamburger").src = "./../media/hamburgerdicht.png";
        deur = true;
        hamburger = false;
        tree = false;
        document.getElementById("deur").src = "../media/DeurGif.gif";
        setTimeout(() => { document.getElementById("deur").src = "./../media/deuropen.png"; }, 900);
    }else{
        window.location.href = "../html/reizen.html";
    }
}

function treechange() {


    if (tree === false){
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
