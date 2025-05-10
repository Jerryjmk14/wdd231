const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");
const date = new Date()

// Adding text content to footer elements dynamically
year.innerHTML = date.getFullYear()
lastmodified.innerHTML =`Last Modified: ${document.lastModified}`;