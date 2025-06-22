// Discover Card Section
function createDiscoverCardElement(card) { 
  const discoverCard = document.createElement('div');    
  const title = document.createElement('h2');
  title.textContent = card.name;
  const description = document.createElement('p');
  description.textContent = card.description;
  const address = document.createElement('address');
  address.textContent = card.address;
  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', card.image);
  cardImage.setAttribute("alt", card.name);
  cardImage.setAttribute("loading", "lazy");
  const button = document.createElement('button');
  button.textContent = "Learn More";


  discoverCard.appendChild(title);
  discoverCard.appendChild(cardImage);
  discoverCard.appendChild(description);
  discoverCard.appendChild(address);
  discoverCard.appendChild(button);
  
  return discoverCard;
}

async function fetchAndDisplayDiscoverCards() {
const discoverCardContainer = document.querySelector('.dicover-card-box');
  try {
     const response = await fetch("data/discover.json");
     
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      data.forEach(card => {
        const cardElement = createDiscoverCardElement(card);
        discoverCardContainer.appendChild(cardElement);
        });
    } catch (error) {
    console.error('Error fetching or rendering discover cards:', error);
    // Display a user-friendly message instead of alert()
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.style.textAlign = 'center';
    errorMessage.textContent = 'Failed to load discover cards. Please try again later.';
    discoverCardContainer.appendChild(errorMessage);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Call the function to render cards when the DOM is fully loaded
  window.onload = fetchAndDisplayDiscoverCards();
});
