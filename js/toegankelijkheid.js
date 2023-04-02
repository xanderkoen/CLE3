
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

//variables forshowcase page
window.onload = setrestaurant

function setrestaurant() {
    let resnaam = document.getElementById("resnaam");
    let resadres = document.getElementById("resadres");
    let maandag = document.getElementById("maandag");
    let dinsdag = document.getElementById("dinsdag");
    let woensdag = document.getElementById("woensdag");
    let donderdag = document.getElementById("donderdag");
    let vrijdag = document.getElementById("vrijdag");
    let zaterdag = document.getElementById("zaterdag");
    let zondag = document.getElementById("zondag");
    let toilet = document.getElementById("toilet");
    let parkeerplaats = document.getElementById("parkeerplaats");
    let paden = document.getElementById("paden");
    let verhogingen = document.getElementById("verhogingen");
    let monster = document.getElementById("monster");
    let website = document.getElementById("website");
    let link = document.getElementById("link");
    let map = document.getElementById("map");
    let nop = document.getElementById("nop");
}

function zorba() {
    removenop();
    console.log("zorba");
    resnaam.innerHTML = "Zorba de Griek";
    resadres.innerHTML = "Voorstraat 43, 3201 BA Spijkenisse";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "16:00 / 22:00";
    woensdag.innerHTML = "16:00 / 22:00";
    donderdag.innerHTML = "16:00 / 22:00";
    vrijdag.innerHTML = "16:00 / 22:00";
    zaterdag.innerHTML = "16:00 / 22:00";
    zondag.innerHTML = "16:00 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "0181 611 780";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.zorba-degriek.nl/"
    map.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d978.0721290606965!2d4.3262561439209835!3d51.8502493275509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szorba%20de%20griek!5e0!3m2!1snl!2snl!4v1680468419113!5m2!1snl!2snl";



}

function havenhuys() {
    removenop();
    console.log("haven");
    resnaam.innerHTML = "Havenhuys";
    resadres.innerHTML = "Havenplein 5, 3201 BK Spijkenisse";
    maandag.innerHTML = "16:30 / 22:00";
    dinsdag.innerHTML = "16:30 / 22:00";
    woensdag.innerHTML = "16:30 / 22:00";
    donderdag.innerHTML = "16:30 / 22:00";
    vrijdag.innerHTML = "16:30 / 22:00";
    zaterdag.innerHTML = "12:00 / 22:00";
    zondag.innerHTML = "16:30 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "0181 283 190";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "http://www.havenhuys.com/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d556.8987565967633!2d4.327089793934634!3d51.85103900630202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c449dad711865f%3A0x842f9bbfc2f00c2!2sHavenhuys!5e0!3m2!1snl!2snl!4v1680472477243!5m2!1snl!2snl";


}

function heuvel() {
    removenop();
    console.log("heuvel");
    resnaam.innerHTML = "Parkheuvel";
    resadres.innerHTML = "Heuvellaan 21, 3016 GL Rotterdam";
    maandag.innerHTML = "12:00 /15:00 | 18:30/22:00";
    dinsdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
    woensdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
    donderdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
    vrijdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
    zaterdag.innerHTML = "18:30/22:00";
    zondag.innerHTML = "12:30 / 16:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 436 0766";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.parkheuvel.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.6648922345607!2d4.470754566238797!3d51.90357932416509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4348320dd114b%3A0x97248b8ee4dbc9bd!2sParkheuvel!5e0!3m2!1snl!2snl!4v1680472991349!5m2!1snl!2snl";
}

function fg() {
    removenop();
    console.log("fg");
    resnaam.innerHTML = "FG Restaurant";
    resadres.innerHTML = "Katshoek 37, 3032 AE, Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "Gesloten";
    woensdag.innerHTML = "Gesloten";
    donderdag.innerHTML = "18:30 / 21:00";
    vrijdag.innerHTML = "12:00 / 13:30 | 19:00 / 21:00";
    zaterdag.innerHTML = "12:00 / 13:30 | 19:00 / 21:00";
    zondag.innerHTML = "Gesloten";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 425 0520";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.fgrestaurant.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.3007208817991!2d4.478778799836522!3d51.92631606624252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43357f0d6d19b%3A0xe0253ef9ad91b23e!2sFG%20Food%20Labs!5e0!3m2!1snl!2snl!4v1680473447194!5m2!1snl!2snl";

}

function blink() {
    removenop();
    console.log("blink");
    resnaam.innerHTML = "Bar Blink";
    resadres.innerHTML = "Wijnhaven 59, 3011 WJ Rotterdam";
    maandag.innerHTML = "10:00 / 23:00";
    dinsdag.innerHTML = "10:00 / 23:00";
    woensdag.innerHTML = "10:00 / 23:00";
    donderdag.innerHTML = "10:00 / 23:00";
    vrijdag.innerHTML = "10:00 / 23:00";
    zaterdag.innerHTML = "10:00 / 23:00";
    zondag.innerHTML = "10:00 / 23:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 333 0429";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.barblink.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.9405732148322!2d4.488858753356262!3d51.918407892092496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433e371856359%3A0x5ad292a30ee6aedd!2sBar%20Blink!5e0!3m2!1snl!2snl!4v1680473582117!5m2!1snl!2snl";

}

function afrika() {
    removenop();
    console.log("afrika");
    resnaam.innerHTML = "Viva Afrika";
    resadres.innerHTML = "Nieuwe Binnenweg 153-A/B, 3014 GK Rotterdam";
    maandag.innerHTML = "17:00 / 22:00";
    dinsdag.innerHTML = "17:00 / 22:00";
    woensdag.innerHTML = "17:00 / 22:00";
    donderdag.innerHTML = "17:00 / 22:00";
    vrijdag.innerHTML = "17:00 / 22:00";
    zaterdag.innerHTML = "17:00 / 22:00";
    zondag.innerHTML = "17:00 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 436 1144";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.vivaafrika.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.16124055777667!2d4.464871971880019!3d51.91435087821504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43498404505f1%3A0x749bcc90b4c7b22d!2sViva%20Afrika!5e0!3m2!1snl!2snl!4v1680473728077!5m2!1snl!2snl";

}

function jack() {
    removenop();
    console.log("jack");
    resnaam.innerHTML = "JACK";
    resadres.innerHTML = "Raampoortstraat 10, 3032 AH Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "Gesloten";
    woensdag.innerHTML = "Gesloten";
    donderdag.innerHTML = "17:00 / 01:00";
    vrijdag.innerHTML = "17:00 / 02:00";
    zaterdag.innerHTML = "15:00 / 02:00";
    zondag.innerHTML = "15:00 / 01:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 842 2187";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://jack-rotterdam.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.50489103369546!2d4.478274632533971!3d51.92718069086963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43344413c06f7%3A0x23c03af050eebada!2sJACK!5e0!3m2!1snl!2snl!4v1680473889012!5m2!1snl!2snl";

}

function ok() {
    removenop();
    console.log("ok");
    resnaam.innerHTML = "Restaurant oKay";
    resadres.innerHTML = "Vijf Werelddelen 71, 3071 PS Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "Gesloten";
    woensdag.innerHTML = "11:00 / 22:00";
    donderdag.innerHTML = "11:00 / 00:00";
    vrijdag.innerHTML = "11:00 / 00:00";
    zaterdag.innerHTML = "11:00 / 00:00";
    zondag.innerHTML = "11:00 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 290 0878";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.restaurant-cafe-okay.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.7860981187148!2d4.49770892084651!3d51.91050187970339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4336b0b570c7d%3A0x9fc46244b3833e22!2sRestaurant%20Okay!5e0!3m2!1snl!2snl!4v1680473952082!5m2!1snl!2snl";

}

function china() {
    removenop();
    console.log("china");
    resnaam.innerHTML = "Sense of China";
    resadres.innerHTML = "Middenbaan Noord 202, 3191 EL Hoogvliet Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "Gesloten";
    woensdag.innerHTML = "16:30 / 22:00";
    donderdag.innerHTML = "16:30 / 22:00";
    vrijdag.innerHTML = "16:30 / 22:00";
    zaterdag.innerHTML = "16:30 / 22:00";
    zondag.innerHTML = "16:30 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 438 3588";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.senseofchina.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.897124837498!2d4.353624671769497!3d51.86471299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44a051b517c99%3A0x90c04779d1dbeebf!2sSense%20of%20China!5e0!3m2!1snl!2snl!4v1680474139880!5m2!1snl!2snl";

}

function helai() {
    removenop();
    console.log("helai");
    resnaam.innerHTML = "Helai";
    resadres.innerHTML = "Piet Smitkade 160, 3077 MJ Rotterdam";
    maandag.innerHTML = "12:00 / 23:00";
    dinsdag.innerHTML = "12:00 / 22:00";
    woensdag.innerHTML = "12:00 / 22:00";
    donderdag.innerHTML = "12:00 / 22:00";
    vrijdag.innerHTML = "12:00 / 23:00";
    zaterdag.innerHTML = "12:00 / 23:00";
    zondag.innerHTML = "12:00 / 23:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 482 3466";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.helai.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.0126800485132!2d4.5270256956885175!3d51.8970013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c432fe0dccb947%3A0xd7763cd2fa66ca83!2sHelai!5e0!3m2!1snl!2snl!4v1680474269466!5m2!1snl!2snl";

}

function afsana() {
    removenop();
    console.log("afsana");
    resnaam.innerHTML = "Afsana Afghaans Restaurant";
    resadres.innerHTML = "Hillelaan 7, 3072 JA Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "Gesloten";
    woensdag.innerHTML = "17:00 / 22:00";
    donderdag.innerHTML = "17:00 / 22:00";
    vrijdag.innerHTML = "17:00 / 22:00";
    zaterdag.innerHTML = "17:00 / 22:00";
    zondag.innerHTML = "17:00 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "06 203 951 60";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.afsana.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.621754878111!2d4.495489115672667!3d51.90436647970235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4336d714c69ef%3A0x6aaf8d844f8f2417!2sAfsana%20Afghaans%20Restaurant!5e0!3m2!1snl!2snl!4v1680474368117!5m2!1snl!2snl";

}

function kostas() {
    removenop();
    console.log("kostas");
    resnaam.innerHTML = "Kostas de griek";
    resadres.innerHTML = "Hesseplaats 51, 3069 EA Rotterdam";
    maandag.innerHTML = "Gesloten";
    dinsdag.innerHTML = "13:00 / 22:00";
    woensdag.innerHTML = "13:00 / 22:00";
    donderdag.innerHTML = "13:00 / 22:00";
    vrijdag.innerHTML = "13:00 / 22:00";
    zaterdag.innerHTML = "13:00 / 22:00";
    zondag.innerHTML = "13:00 / 22:00";
    toilet.classList.add("visible")
    toilet.classList.remove("invisible")
    parkeerplaats.classList.add("visible")
    parkeerplaats.classList.remove("invisible")
    paden.classList.add("visible")
    paden.classList.remove("invisible")
    verhogingen.classList.add("visible")
    verhogingen.classList.remove("invisible")
    monster.innerHTML = "010 420 4433";
    website.classList.add("visible")
    website.classList.remove("invisible")
    link.href = "https://www.kostasdegriek.nl/"
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.609372583332!2d4.552101749088977!3d51.962671574279014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd110041c5cb%3A0xb0109b0a82d8f010!2sKostas%20de%20Griek!5e0!3m2!1snl!2snl!4v1680474488312!5m2!1snl!2snl";

}

function removenop() {
    let hunny = false;

    if (hunny === false){
        nop.remove();
        document.getElementById("showcase").classList.add("visibile");
        document.getElementById("showcase").classList.remove("hidden");
        hunny = true;
    }

}