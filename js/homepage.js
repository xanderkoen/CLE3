//voeg hier die coole code toe die alles gaat doen :)
let bobylan = true

function change() {


    if (bobylan === false){
        document.getElementById("placeholder").src = "media/placeholder2.png";
        bobylan = true;
    }else{
        document.getElementById("placeholder").src = "media/placeholder.jpg";
        bobylan = false;
    }
}