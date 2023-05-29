<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Eten op rolletjes - Toegankelijkheid</title>
    <script src="../prg/actions.php"></script>
    <script src="../js/toegankelijkheid.js"></script>
    <link rel="stylesheet" href="../css/output.css">
    <link rel="icon" type="image/x-icon" href="../media/Logo.jpg">
</head>
<body class="overflow-x-hidden">
<div class="pl-4 mb-2 sm:mb-0 flex flex-row">
    <div class="h-20 w-20 self-center mr-2">
        <a href="home.html"><img class="h-20 w-20 self-center" src="../media/Logo.jpg" alt="logo"/>
        </a>
    </div>
    <div>
        <p class="pt-6 text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">eten op
            rolletjes</p>
    </div>
</div>
<nav class="z-10 sticky top-0 bg-gray-200 text-center grid grid-cols-4 border-solid border-gray-500">
    <a href="beweging.html" class="border-2 p-5 border-gray-500 font-medium">Beweging</a>
    <a href="reizen.html" class="border-y-2 border-r-2 p-5 border-gray-500 font-medium">Reizen</a>
    <a href="toegankelijkheid.html" class="border-y-2  p-5 border-gray-500 font-medium">Toegankelijkheid</a>
    <a href="voorzieningen.html" class="border-2 p-5 border-gray-500 font-medium">Voorzieningen</a>
</nav>
<img src="../media/toegankbanner.png" alt="banner" class="w-screen">

<p class="text-3xl text-center font-semibold mb-4">Toegankelijke Restaurants</p>

<div class="grid grid-cols-2 w-screen mb-4">
    <div class="text-left h-fit my-auto px-4">
        <p class="text-2xl">Hieronder volgt een lijst met leuke toegankelijke restaurants als aanradertjes.
            De Restaurants zijn niet ge-orderd.</p>

        <p class="text-2xl">De restaurants zijn gesorteerd onder de plaatsnamen.</p>
        <p>Druk op het sterretje om het restaurant te favouriten en nog een keer om hem te unfavouriten</p>

        <button id="reset">reset localstorage</button>

    </div>
    <div class="w-fit">
        <img src="../media/image%2012.png" class="rounded-lg shadow">
    </div>
</div>

<div class="w-screen bg-gray-200">

    <section class="grid grid-cols-4" id="buttonfield">
    </section>

    <p class="text-4xl text-center" id="nop">Druk op een Restaurant.</p>

    <div class="grid grid-cols-2 w-fit mx-auto mb-4 hidden border border-2 mt-2" id="showcase">

    </div>
    <footer class="w-screen bg-gray-200 shadow dark:bg-gray-200 border border-2 border-gray-300">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm  sm:text-center ">© 2023 <a href="home.html" class="hover:underline">Eten op Rolletjes™</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
</body>
</html>