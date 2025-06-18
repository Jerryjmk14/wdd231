// selecting elements
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const navTitle = document.querySelector('.top-nav');
const formSelect = document.querySelector("#inquiry-type");


const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");
const date = new Date()

// Adding text content to footer elements dynamically
year.innerHTML = date.getFullYear()
lastmodified.innerHTML =`Last Modified: ${document.lastModified}`;

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navTitle.classList.toggle('show');
});


const typeOfInquiry = [
    {
      id: "1",
      name: "General Inquiry",
    },
    {
      id: "2",
      name: "Partnership",
     
    },
    {
      id: "3",
      name: "Support",
     
    },
    {
      id: "4",
      name: "Project Consultationr",
      
    },
    {
      id: "5",
      name: "Others",
      
    }
  ];




// Discover Card Section
function createFactsCardElement(card) { 
  const factsCard = document.createElement('div');    
  const myth = document.createElement('p');
  myth.innerHTML = `<strong>MYTH:</strong> ${card.myth}`;
  const truth = document.createElement('p');
  truth.innerHTML = `<strong>TRUTH:</strong> ${card.truth}`;

  factsCard.appendChild(myth);
  factsCard.appendChild(truth);
  
  return factsCard;
}

async function fetchAndDisplayFactsCards() {
const factsCardContainer = document.querySelector('.myths-facts');
  try {
     const response = await fetch("data/nutrition.json");
     
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      data.forEach(card => {
        const cardElement = createFactsCardElement(card);
        factsCardContainer.appendChild(cardElement);
        });
    } catch (error) {
    console.error('Error fetching or rendering discover cards:', error);
    // Display a user-friendly message instead of alert()
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    errorMessage.textContent = 'Failed to load discover cards. Please try again later.';
    factsCardContainer.appendChild(errorMessage);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Call the function to render cards when the DOM is fully loaded
  window.onload = fetchAndDisplayFactsCards();
});


