window.addEventListener('load', init);

//Global variables
let suggestionItems = [];
let inputField;
let list;

/**
 * Initialize the application
 */
function init() {
    registerServiceWorker();

    //Connect variables with HTML elements
    let form = document.querySelector('#suggestion-form');
    inputField = document.querySelector('#suggestion-field');
    list = document.querySelector('#list');

    //Add event listeners for form & removal
    form.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', suggestionItemClickHandler);

    //Retrieve current items from local storage & add them to the list
    let suggestionItemsString = localStorage.getItem('suggestionItems');
    if (suggestionItemsString) { //Or: if (suggestionItemsString !== null) {
        suggestionItems = JSON.parse(suggestionItemsString);
        for (let suggestionItem of suggestionItems) {
            addSuggestionItem(suggestionItem);
        }
    }
}

/**
 * Handle the new input from the form
 *
 * @param e
 */
function formSubmitHandler(e) {
    e.preventDefault();

    //Check if the field is not empty
    let inputValue = inputField.value;
    if (inputValue !== '') {
        //Add to the HTML list & local storage
        addSuggestionItem(inputValue);
        suggestionItems.push(inputValue);
        localStorage.setItem('suggestionItems', JSON.stringify(suggestionItems));

        //Reset the field
        inputField.value = '';
        inputField.classList.remove('error');
    } else {
        //Add an error state with CSS
        inputField.classList.add('error');
    }
}

/**
 * Add a new item to the HTML
 *
 * @param suggestionText
 */
function addSuggestionItem(suggestionText) {
    let listItem = document.createElement('li');
    listItem.innerText = suggestionText;
    list.appendChild(listItem);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function suggestionItemClickHandler(e) {
    let suggestionTarget = e.target;

    //Only continue if we clicked on a list item
    if (suggestionTarget.nodeName !== 'LI') {
        return;
    }

    //Remove from local storage
    let itemIndex = suggestionItems.indexOf(suggestionTarget.innerText);
    suggestionItems.splice(itemIndex, 1);
    localStorage.setItem('suggestionItems', JSON.stringify(suggestionItems));

    //Remove from HTML
    suggestionTarget.remove();
}

/**
 * This function registers a service worker. A service worker is needed to support offline usage for
 * Progressive Web Apps (PWA). It's also needed to support the "add to homescreen" feature.
 */
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    }
}