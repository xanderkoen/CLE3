let drugs = false;
function swapstylesheet(sheet) {
    let rik = document.getElementById("rick")


    if (drugs === false) {
        document.getElementById('pagestyle').setAttribute('href', '../css/drugs.css');
        drugs = true
        rik.classList.add("bg-green-400");
        rik.classList.remove("bg-gray-200");
    }else{
        document.getElementById('pagestyle').setAttribute('href', '../css/output.css');
        drugs = false
        rik.classList.add("bg-gray-200");
        rik.classList.remove("bg-green-400");
    }

}