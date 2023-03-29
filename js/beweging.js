let drugs = false;
function swapstylesheet(sheet) {
    if (drugs === false) {
        document.getElementById('pagestyle').setAttribute('href', '../css/drugs.css');
        drugs = true
    }else{
        document.getElementById('pagestyle').setAttribute('href', '../css/output.css');
        drugs = false
    }

}