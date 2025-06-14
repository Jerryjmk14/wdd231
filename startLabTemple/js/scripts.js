import { temples } from "../data/temples.js";
// console.log(temples);

import { url } from "../data/temples.js";
// console.log(url);

// target where to display items
const showHere = document.querySelector('#showHere')
// target dialog elements
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')

myclose.addEventListener('click', () => {
    mydialog.close();
});

// loop through array of json items 
function displayItems(data){
    data.forEach(temple => {
        console.log(temple);
        const photo = document.createElement('img');
        photo.src = `${url}${temple.path}`;
        photo.alt = temple.name;
        // add event listeners to each division on the page 
        photo.addEventListener('click', () => showStuff(temple));

        showHere.appendChild(photo);
        
    });//end of loop
}

// start displaying items
displayItems(temples);

// populate dialog with information when image is clicked
function showStuff(temple){
    mytitle.innerHTML = temple.name;
    mydialog.showModal();
    myinfo.innerHTML = `Dedicated ${temple.dedicated} by ${temple.person} as temple number ${temple.number}`

}