//voeg hier die coole code toe die alles gaat doen :)
let hamburger = true

function change() {


    if (hamburger === false){
        document.getElementById("placeholder").src = "media/placeholder2.png";
        hamburger = true;
    }else{
        document.getElementById("placeholder").src = "media/placeholder.jpg";
        hamburger = false;
    }
}