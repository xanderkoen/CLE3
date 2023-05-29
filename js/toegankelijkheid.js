//TODO
// ✔ ❌
//remove window onload and edit it to lesstof ✔
//click event listeners ✔
//localstorage moet stringify/parse gebruiken ✔
//favourite system dynamic maken ✔
//voeg errorhandler toe voor de fetch ✔
//uitleggen waarom ik async gebruik in mijn function ❌ to be recorded


window.addEventListener('load', init);

//global vars
 let firsttime = false;

 //listenevent button
 let item;

 //listenevent favourite
 let favourite;

 //id of active restaurant
 let buttonid;

 //total amount of restaurants
let totalrestaurants;

 //button that clears the localstorage
let resetbutton;

function init() {
    item = document.getElementById("buttonfield");

    resetbutton = document.getElementById("reset");

    item.addEventListener("click", buttonClickHandler);

    resetbutton.addEventListener("click", reset);

    //initialise base data
    getJSONData()

    //initialize favourites
    setTimeout(getFavourites,50);
}

//creating details menu and removing tutorial text
function JSONDetails(id) {

    let nop = document.getElementById("nop");

    if (firsttime === false) {
        if (nop) {
            document.getElementById("nop").remove();
            firsttime = true;
            document.getElementById("showcase").classList.remove("hidden");
            getJSONDetails(id);
        }
    } else {
        editJSONDetails(id)
    }
}

//fetches data and making buttons out of it
async function getJSONData() {
    try {
        let response = await fetch("http://localhost/prg3/PRG03-2022-2023/assignment/webservice-start/index.php");
        let Jason = await response.json();
        let rescount = 0;

        Jason.forEach((restaurant) => {
            rescount = rescount + 1;
            let button = document.createElement("button");
            let favourite = false
            button.innerText = restaurant.name;

            if (localStorage.getItem("" + restaurant.id + "") === "true") {
                button.setAttribute("class", "text-center bg-yellow-200 hover:bg-yellow-400 text-2xl p2");
            } else {
                button.setAttribute("class", "text-center bg-gray-200 hover:bg-gray-400 text-2xl p2");
            }
            button.setAttribute("id", restaurant.id);
            document.getElementById("buttonfield").appendChild(button);
        });

        //set total count
        totalrestaurants = rescount;
    } catch (error) {
        //error detected console logging it
        console.log("there was an error fetching data. ", error)
    }

    setTimeout(function() {
        //wait until favourites are set before assigning color
        if(localStorage.getItem("Favsset") === "true") {
            let favs = JSON.parse(localStorage.getItem("Favourites"));

            console.log(favs);

            //see how much restaurants we have
            let count = Object.keys(favs).length;

            //for each restaurant change the color accordingly
            for (let i = 1; i<= count; i++) {
                let button = document.getElementById(""+ i +"");
                if (favs[i] === true) {
                    button.setAttribute("class", "text-center bg-yellow-200 hover:bg-yellow-400 text-2xl p2");
                }else{
                    button.setAttribute("class", "text-center bg-gray-200 hover:bg-gray-400 text-2xl p2");
                }
            }
        }else {
            console.log("no favourites received yet lol? xD");
        }
    },100);
}

//fetching item details and making detail menu
async function getJSONDetails(id) {
    //retrieve data
    try {
        let response = await fetch("http://localhost/prg3/PRG03-2022-2023/assignment/webservice-start/index.php/?id=" + id);
        let Jason = await response.json();

        //add the showcase
        let infodiv = document.createElement("div");
        infodiv.setAttribute("class", "text-center h-fit my-auto px-4");
        document.getElementById("showcase").appendChild(infodiv);

        let flexdiv = document.createElement("div");
        flexdiv.setAttribute("class", "flex flex-row items-center justify-evenly");
        infodiv.appendChild(flexdiv);

        let flexname = document.createElement("div");
        flexname.setAttribute("class", "basis-4/5 w-max");
        flexdiv.appendChild(flexname);

        let resnaam = document.createElement("p");
        resnaam.setAttribute("class", "text-2xl font-semibold");
        resnaam.setAttribute("id", "resnaam");
        resnaam.innerHTML = Jason.resnaam;
        flexname.appendChild(resnaam);

        let flexfav = document.createElement("div");
        flexfav.setAttribute("class", "basis-1/5 w-max");
        flexdiv.appendChild(flexfav);

        let favicon = document.createElement("img");
        let obj = JSON.parse(localStorage.getItem("Favourites"));

        if (obj[buttonid] === true) {
            favicon.src = "../media/favorited.png";
        } else {
            favicon.src = "../media/favorite.png";
        }
        favicon.setAttribute("width", "25");
        favicon.setAttribute("height", "25");
        favicon.setAttribute("id", "star");
        flexfav.appendChild(favicon);

        favourite = document.getElementById("star");
        favourite.addEventListener("click", favouriteClickHandler)

        let resadres = document.createElement("p");
        resadres.setAttribute("class", "text-2xl text-normal mb-4 border-b-2");
        resadres.setAttribute("id", "resadres");
        resadres.innerHTML = Jason.resadress;
        infodiv.appendChild(resadres);

        let detaildiv = document.createElement("div");
        detaildiv.setAttribute("class", "grid grid-cols-3");
        infodiv.appendChild(detaildiv);

        let tijdendiv = document.createElement("div");
        tijdendiv.setAttribute("class", "text-center mr-2");
        detaildiv.appendChild(tijdendiv);

        let opening = document.createElement("p");
        opening.setAttribute("class", "font-medium");
        opening.innerHTML = "Openingstijden";
        tijdendiv.appendChild(opening);

        let maandag = document.createElement("p");
        maandag.setAttribute("id", "maandag");
        maandag.innerHTML = "Maandag : " + Jason.maandag;
        tijdendiv.appendChild(maandag);

        let dinsdag = document.createElement("p");
        dinsdag.setAttribute("id", "dinsdag");
        dinsdag.innerHTML = "Dinsdag : " + Jason.dinsdag;
        tijdendiv.appendChild(dinsdag);

        let woensdag = document.createElement("p");
        woensdag.setAttribute("id", "woensdag");
        woensdag.innerHTML = "Woensdag : " + Jason.woensdag;
        tijdendiv.appendChild(woensdag);

        let donderdag = document.createElement("p");
        donderdag.setAttribute("id", "donderdag");
        donderdag.innerHTML = "Donderdag : " + Jason.donderdag;
        tijdendiv.appendChild(donderdag);

        let vrijdag = document.createElement("p");
        vrijdag.setAttribute("id", "vrijdag");
        vrijdag.innerHTML = "Vrijdag : " + Jason.vrijdag;
        tijdendiv.appendChild(vrijdag);

        let zaterdag = document.createElement("p");
        zaterdag.setAttribute("id", "zaterdag");
        zaterdag.innerHTML = "Zaterdag : " + Jason.zaterdag;
        tijdendiv.appendChild(zaterdag);

        let zondag = document.createElement("p");
        zondag.setAttribute("id", "zondag");
        zondag.innerHTML = "Zondag : " + Jason.zondag;
        tijdendiv.appendChild(zondag);

        let toegangdiv = document.createElement("div");
        toegangdiv.setAttribute("class", "border-x-2");
        detaildiv.appendChild(toegangdiv);

        let toegangtitle = document.createElement("p");
        toegangtitle.innerHTML = "Toegankelijkheden";
        toegangtitle.setAttribute("class", "font-medium mb-2");
        toegangdiv.appendChild(toegangtitle)

        let toilet = document.createElement("p");
        toilet.innerHTML = "Invalide Toilet";
        toilet.setAttribute("class", "text-green-500 visible");
        toilet.setAttribute("id", "toilet");
        toegangdiv.appendChild(toilet);

        let parkeerplaats = document.createElement("p");
        parkeerplaats.innerHTML = "Invalide Parkeerplaats";
        parkeerplaats.setAttribute("class", "text-green-500");
        parkeerplaats.setAttribute("id", "parkeerplaats");
        toegangdiv.appendChild(parkeerplaats);

        let paden = document.createElement("p");
        paden.innerHTML = "Brede paden";
        paden.setAttribute("class", "text-green-500");
        paden.setAttribute("id", "paden");
        toegangdiv.appendChild(paden);

        let verhogingen = document.createElement("p");
        verhogingen.innerHTML = "Verhogingen";
        verhogingen.setAttribute("class", "text-red-500");
        verhogingen.setAttribute("id", "verhogingen");
        toegangdiv.appendChild(verhogingen);

        console.log(Jason.toilet);
        console.log(Jason.parkeerplaats);
        console.log(Jason.paden);
        console.log(Jason.verhogingen);

        //check if toegankelijkheid is true-false
        if (Jason.toilet === true) {
            toilet.classList.add("visible");
            toilet.classList.remove("invisible");
        } else {
            toilet.classList.remove("visible");
            toilet.classList.add("invisible");
        }

        if (Jason.parkeerplaats === true) {
            parkeerplaats.classList.add("visible");
            parkeerplaats.classList.remove("invisible");
        } else {
            parkeerplaats.classList.remove("visible");
            parkeerplaats.classList.add("invisible");
        }

        if (Jason.paden === true) {
            paden.classList.add("visible");
            paden.classList.remove("invisible");
        } else {
            paden.classList.remove("visible");
            paden.classList.add("invisible");
        }

        if (Jason.verhogingen === true) {
            verhogingen.classList.add("visible");
            verhogingen.classList.remove("invisible");
        } else {
            verhogingen.classList.remove("visible");
            verhogingen.classList.add("invisible");
        }

        let socialdiv = document.createElement("div");
        detaildiv.appendChild(socialdiv);

        let socialtitle = document.createElement("p");
        socialtitle.innerHTML = "Telefoon nummer";
        socialtitle.setAttribute("class", "font-medium");
        socialdiv.appendChild(socialtitle);

        let telnummer = document.createElement("p");
        telnummer.innerHTML = Jason.telnummer;
        telnummer.setAttribute("id", "monster");
        socialdiv.appendChild(telnummer);

        let bruh = document.createElement("br");
        socialdiv.appendChild(bruh);

        let awebsite = document.createElement("a");
        awebsite.setAttribute("href", Jason.website);
        awebsite.setAttribute("id", "awebsite");
        awebsite.setAttribute("target", "_blank");
        socialdiv.appendChild(awebsite);

        let website = document.createElement("button");
        website.setAttribute("class", "bg-sky-400 p-2 rounded-lg");
        website.innerText = "Bezoek de website";
        awebsite.appendChild(website);

        let mapdiv = document.createElement("div");
        mapdiv.setAttribute("class", "w-fit");
        document.getElementById("showcase").appendChild(mapdiv)

        let map = document.createElement("iframe");
        map.setAttribute("src", Jason.map);
        map.setAttribute("width", "600");
        map.setAttribute("height", "450");
        map.setAttribute("style", "border:0;");
        map.setAttribute("allowfullscreen", "");
        map.setAttribute("loading", "lazy");
        map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
        map.setAttribute("id", "map");
        mapdiv.appendChild(map);

        favourite = document.getElementById("")
    } catch(error) {
        //error detected console logging it
        console.log("there was an error fetching data. ", error)
    }
}


//edits the detail menu to clicked item (fetches and updates existing html)
async function editJSONDetails(id) {

    try {
        //retrieve data
        let response = await fetch("http://localhost/prg3/PRG03-2022-2023/assignment/webservice-start/index.php/?id=" + id);
        let Jason = await response.json();

        //update favourite icon
        let favicon = document.getElementById("star");
        let obj = JSON.parse(localStorage.getItem("Favourites"));

        if (obj[buttonid] === true) {
            favicon.src = "../media/favorited.png";
        } else {
            favicon.src = "../media/favorite.png";
        }

        //update data
        let resnaam = document.getElementById("resnaam");
        resnaam.innerHTML = Jason.resnaam;
        let resadres = document.getElementById("resadres");
        resadres.innerHTML = Jason.resadress;
        let maandag = document.getElementById("maandag");
        maandag.innerHTML = "Maandag : " + Jason.maandag;
        let dinsdag = document.getElementById("dinsdag");
        dinsdag.innerHTML = "Dinsdag : " + Jason.dinsdag;
        let woensdag = document.getElementById("woensdag");
        woensdag.innerHTML = "Woensdag : " + Jason.woensdag;
        let donderdag = document.getElementById("donderdag");
        donderdag.innerHTML = "Donderdag : " + Jason.donderdag;
        let vrijdag = document.getElementById("vrijdag");
        vrijdag.innerHTML = "Vrijdag : " + Jason.vrijdag;
        let zaterdag = document.getElementById("zaterdag");
        zaterdag.innerHTML = "Zaterdag : " + Jason.zaterdag;
        let zondag = document.getElementById("zondag");
        zondag.innerHTML = "Zondag : " + Jason.zondag;

        let toilet = document.getElementById("toilet");
        let parkeerplaats = document.getElementById("parkeerplaats");
        let paden = document.getElementById("paden");
        let verhogingen = document.getElementById("verhogingen");

        //check if toegankelijkheid is true-false
        if (Jason.toilet === true) {
            toilet.classList.add("visible");
            toilet.classList.remove("invisible");
        } else {
            toilet.classList.remove("visible");
            toilet.classList.add("invisible");
        }

        if (Jason.parkeerplaats === true) {
            parkeerplaats.classList.add("visible");
            parkeerplaats.classList.remove("invisible");
        } else {
            parkeerplaats.classList.remove("visible");
            parkeerplaats.classList.add("invisible");
        }

        if (Jason.paden === true) {
            paden.classList.add("visible");
            paden.classList.remove("invisible");
        } else {
            paden.classList.remove("visible");
            paden.classList.add("invisible");
        }

        if (Jason.verhogingen === true) {
            verhogingen.classList.add("visible");
            verhogingen.classList.remove("invisible");
        } else {
            verhogingen.classList.remove("visible");
            verhogingen.classList.add("invisible");
        }

        let telnummer = document.getElementById("monster");
        telnummer.innerHTML = Jason.telnummer;
        let website = document.getElementById("awebsite");
        website.href = Jason.website;
        let map = document.getElementById("map");
        map.src = Jason.map;

    } catch(error) {
        //error detected console logging it
        console.log("there was an error fetching data. ", error)
    }
}

function buttonClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get id from the button
    buttonid = clickedItem.id;

    //fetch details with id
    JSONDetails(buttonid);
}

function favouriteClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a image
    if (clickedItem.nodeName !== 'IMG') {
        return;
    }

    FavItem(buttonid);

}

//setting fevourites to localstorage if localstorage is empty
function getFavourites() {

    if (localStorage.getItem("Favsset") === null) {
        //no favourites yet so we make them

        //favourite object
        let favouriteObject = {};

        //for each restaurant we make a line in the object
        for(let i = 1; i <= totalrestaurants; i++) {
            favouriteObject[i] = true;
        }
        localStorage.setItem("Favourites", JSON.stringify(favouriteObject))
        localStorage.setItem("Favsset", "true");
    }
}


//favourites a clicked item
function FavItem(id) {
    let favicon = document.getElementById("star")
    let button = document.getElementById(buttonid);
    let obj = JSON.parse(localStorage.getItem("Favourites"));

    if (obj[buttonid] === true) {
        //item is favourited -> unfavourite
        favicon.src = "../media/favorite.png";
        localStorage.setItem("" + id + "", "false");
        button.classList.remove("bg-yellow-200");
        button.classList.remove("hover:bg-yellow-400");
        button.classList.add("bg-gray-200");
        button.classList.add("hover:bg-gray-400");
        obj[buttonid] = false;
    } else {
        //item is unfavourited -> favourite
        favicon.src = "../media/favorited.png";
        localStorage.setItem("" + id + "", "true");
        button.classList.remove("bg-gray-200");
        button.classList.remove("hover:bg-gray-400");
        button.classList.add("bg-yellow-200");
        button.classList.add("hover:bg-yellow-400");
        obj[buttonid] = true;
    }

    //save new changes to localhost
    localStorage.setItem("Favourites", JSON.stringify(obj))
}

function reset() {
    console.log("localstorage cleared");
    localStorage.clear();
}
// function zorba() {
//     console.log("zorba");
//     resnaam.innerHTML = "Zorba de Griek";
//     resadres.innerHTML = "Voorstraat 43, 3201 BA Spijkenisse";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "16:00 / 22:00";
//     woensdag.innerHTML = "16:00 / 22:00";
//     donderdag.innerHTML = "16:00 / 22:00";
//     vrijdag.innerHTML = "16:00 / 22:00";
//     zaterdag.innerHTML = "16:00 / 22:00";
//     zondag.innerHTML = "16:00 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "0181 611 780";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.zorba-degriek.nl/"
//     map.src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d978.0721290606965!2d4.3262561439209835!3d51.8502493275509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szorba%20de%20griek!5e0!3m2!1snl!2snl!4v1680468419113!5m2!1snl!2snl";
//     removenop();
// }
//
// function havenhuys() {
//     console.log("haven");
//     resnaam.innerHTML = "Havenhuys";
//     resadres.innerHTML = "Havenplein 5, 3201 BK Spijkenisse";
//     maandag.innerHTML = "16:30 / 22:00";
//     dinsdag.innerHTML = "16:30 / 22:00";
//     woensdag.innerHTML = "16:30 / 22:00";
//     donderdag.innerHTML = "16:30 / 22:00";
//     vrijdag.innerHTML = "16:30 / 22:00";
//     zaterdag.innerHTML = "12:00 / 22:00";
//     zondag.innerHTML = "16:30 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "0181 283 190";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "http://www.havenhuys.com/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d556.8987565967633!2d4.327089793934634!3d51.85103900630202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c449dad711865f%3A0x842f9bbfc2f00c2!2sHavenhuys!5e0!3m2!1snl!2snl!4v1680472477243!5m2!1snl!2snl";
//     removenop();
// }
//
// function heuvel() {
//     console.log("heuvel");
//     resnaam.innerHTML = "Parkheuvel";
//     resadres.innerHTML = "Heuvellaan 21, 3016 GL Rotterdam";
//     maandag.innerHTML = "12:00 /15:00 | 18:30/22:00";
//     dinsdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
//     woensdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
//     donderdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
//     vrijdag.innerHTML = "12:00 /15:00 | 18:30/22:00";
//     zaterdag.innerHTML = "18:30/22:00";
//     zondag.innerHTML = "12:30 / 16:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 436 0766";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.parkheuvel.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.6648922345607!2d4.470754566238797!3d51.90357932416509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4348320dd114b%3A0x97248b8ee4dbc9bd!2sParkheuvel!5e0!3m2!1snl!2snl!4v1680472991349!5m2!1snl!2snl";
//     removenop();
// }
//
// function fg() {
//     console.log("fg");
//     resnaam.innerHTML = "FG Restaurant";
//     resadres.innerHTML = "Katshoek 37, 3032 AE, Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "Gesloten";
//     woensdag.innerHTML = "Gesloten";
//     donderdag.innerHTML = "18:30 / 21:00";
//     vrijdag.innerHTML = "12:00 / 13:30 | 19:00 / 21:00";
//     zaterdag.innerHTML = "12:00 / 13:30 | 19:00 / 21:00";
//     zondag.innerHTML = "Gesloten";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 425 0520";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.fgrestaurant.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.3007208817991!2d4.478778799836522!3d51.92631606624252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43357f0d6d19b%3A0xe0253ef9ad91b23e!2sFG%20Food%20Labs!5e0!3m2!1snl!2snl!4v1680473447194!5m2!1snl!2snl";
//     removenop();
// }
//
// function blink() {
//     console.log("blink");
//     resnaam.innerHTML = "Bar Blink";
//     resadres.innerHTML = "Wijnhaven 59, 3011 WJ Rotterdam";
//     maandag.innerHTML = "10:00 / 23:00";
//     dinsdag.innerHTML = "10:00 / 23:00";
//     woensdag.innerHTML = "10:00 / 23:00";
//     donderdag.innerHTML = "10:00 / 23:00";
//     vrijdag.innerHTML = "10:00 / 23:00";
//     zaterdag.innerHTML = "10:00 / 23:00";
//     zondag.innerHTML = "10:00 / 23:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 333 0429";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.barblink.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d654.9405732148322!2d4.488858753356262!3d51.918407892092496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c433e371856359%3A0x5ad292a30ee6aedd!2sBar%20Blink!5e0!3m2!1snl!2snl!4v1680473582117!5m2!1snl!2snl";
//     removenop();
// }
//
// function afrika() {
//     console.log("afrika");
//     resnaam.innerHTML = "Viva Afrika";
//     resadres.innerHTML = "Nieuwe Binnenweg 153-A/B, 3014 GK Rotterdam";
//     maandag.innerHTML = "17:00 / 22:00";
//     dinsdag.innerHTML = "17:00 / 22:00";
//     woensdag.innerHTML = "17:00 / 22:00";
//     donderdag.innerHTML = "17:00 / 22:00";
//     vrijdag.innerHTML = "17:00 / 22:00";
//     zaterdag.innerHTML = "17:00 / 22:00";
//     zondag.innerHTML = "17:00 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 436 1144";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.vivaafrika.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.16124055777667!2d4.464871971880019!3d51.91435087821504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43498404505f1%3A0x749bcc90b4c7b22d!2sViva%20Afrika!5e0!3m2!1snl!2snl!4v1680473728077!5m2!1snl!2snl";
//     removenop();
// }
//
// function jack() {
//     console.log("jack");
//     resnaam.innerHTML = "JACK";
//     resadres.innerHTML = "Raampoortstraat 10, 3032 AH Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "Gesloten";
//     woensdag.innerHTML = "Gesloten";
//     donderdag.innerHTML = "17:00 / 01:00";
//     vrijdag.innerHTML = "17:00 / 02:00";
//     zaterdag.innerHTML = "15:00 / 02:00";
//     zondag.innerHTML = "15:00 / 01:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 842 2187";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://jack-rotterdam.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.50489103369546!2d4.478274632533971!3d51.92718069086963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43344413c06f7%3A0x23c03af050eebada!2sJACK!5e0!3m2!1snl!2snl!4v1680473889012!5m2!1snl!2snl";
//     removenop();
// }
//
// function ok() {
//     console.log("ok");
//     resnaam.innerHTML = "Restaurant oKay";
//     resadres.innerHTML = "Vijf Werelddelen 71, 3071 PS Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "Gesloten";
//     woensdag.innerHTML = "11:00 / 22:00";
//     donderdag.innerHTML = "11:00 / 00:00";
//     vrijdag.innerHTML = "11:00 / 00:00";
//     zaterdag.innerHTML = "11:00 / 00:00";
//     zondag.innerHTML = "11:00 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 290 0878";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.restaurant-cafe-okay.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d580.7860981187148!2d4.49770892084651!3d51.91050187970339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4336b0b570c7d%3A0x9fc46244b3833e22!2sRestaurant%20Okay!5e0!3m2!1snl!2snl!4v1680473952082!5m2!1snl!2snl";
//     removenop();
// }
//
// function china() {
//     console.log("china");
//     resnaam.innerHTML = "Sense of China";
//     resadres.innerHTML = "Middenbaan Noord 202, 3191 EL Hoogvliet Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "Gesloten";
//     woensdag.innerHTML = "16:30 / 22:00";
//     donderdag.innerHTML = "16:30 / 22:00";
//     vrijdag.innerHTML = "16:30 / 22:00";
//     zaterdag.innerHTML = "16:30 / 22:00";
//     zondag.innerHTML = "16:30 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 438 3588";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.senseofchina.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.897124837498!2d4.353624671769497!3d51.86471299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44a051b517c99%3A0x90c04779d1dbeebf!2sSense%20of%20China!5e0!3m2!1snl!2snl!4v1680474139880!5m2!1snl!2snl";
//     removenop();
// }
//
// function helai() {
//     console.log("helai");
//     resnaam.innerHTML = "Helai";
//     resadres.innerHTML = "Piet Smitkade 160, 3077 MJ Rotterdam";
//     maandag.innerHTML = "12:00 / 23:00";
//     dinsdag.innerHTML = "12:00 / 22:00";
//     woensdag.innerHTML = "12:00 / 22:00";
//     donderdag.innerHTML = "12:00 / 22:00";
//     vrijdag.innerHTML = "12:00 / 23:00";
//     zaterdag.innerHTML = "12:00 / 23:00";
//     zondag.innerHTML = "12:00 / 23:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 482 3466";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.helai.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1231.0126800485132!2d4.5270256956885175!3d51.8970013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c432fe0dccb947%3A0xd7763cd2fa66ca83!2sHelai!5e0!3m2!1snl!2snl!4v1680474269466!5m2!1snl!2snl";
//     removenop();
// }
//
// function afsana() {
//     console.log("afsana");
//     resnaam.innerHTML = "Afsana Afghaans Restaurant";
//     resadres.innerHTML = "Hillelaan 7, 3072 JA Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "Gesloten";
//     woensdag.innerHTML = "17:00 / 22:00";
//     donderdag.innerHTML = "17:00 / 22:00";
//     vrijdag.innerHTML = "17:00 / 22:00";
//     zaterdag.innerHTML = "17:00 / 22:00";
//     zondag.innerHTML = "17:00 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "06 203 951 60";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.afsana.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.621754878111!2d4.495489115672667!3d51.90436647970235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4336d714c69ef%3A0x6aaf8d844f8f2417!2sAfsana%20Afghaans%20Restaurant!5e0!3m2!1snl!2snl!4v1680474368117!5m2!1snl!2snl";
//     removenop();
// }
//
// function kostas() {
//     console.log("kostas");
//     resnaam.innerHTML = "Kostas de griek";
//     resadres.innerHTML = "Hesseplaats 51, 3069 EA Rotterdam";
//     maandag.innerHTML = "Gesloten";
//     dinsdag.innerHTML = "13:00 / 22:00";
//     woensdag.innerHTML = "13:00 / 22:00";
//     donderdag.innerHTML = "13:00 / 22:00";
//     vrijdag.innerHTML = "13:00 / 22:00";
//     zaterdag.innerHTML = "13:00 / 22:00";
//     zondag.innerHTML = "13:00 / 22:00";
//     toilet.classList.add("visible")
//     toilet.classList.remove("invisible")
//     parkeerplaats.classList.add("visible")
//     parkeerplaats.classList.remove("invisible")
//     paden.classList.add("visible")
//     paden.classList.remove("invisible")
//     verhogingen.classList.add("visible")
//     verhogingen.classList.remove("invisible")
//     monster.innerHTML = "010 420 4433";
//     website.classList.add("visible")
//     website.classList.remove("invisible")
//     link.href = "https://www.kostasdegriek.nl/"
//     map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.609372583332!2d4.552101749088977!3d51.962671574279014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd110041c5cb%3A0xb0109b0a82d8f010!2sKostas%20de%20Griek!5e0!3m2!1snl!2snl!4v1680474488312!5m2!1snl!2snl";
//     removenop();
// }
