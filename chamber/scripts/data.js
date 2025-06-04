function createBusinessCardElement(card) {
            const cardDiv = document.createElement('div');
            // Generate a class name from the company name for specific styling
            const companyClassName = card.companyName
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric chars
            cardDiv.classList.add('business-card', `card-${companyClassName}`);

            // Create icon element
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('card-icon');
            iconDiv.textContent = card.icon; // Using emoji as icon for simplicity
            cardDiv.appendChild(iconDiv);

            // Create header section
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('card-header');
            const nameH3 = document.createElement('h3');
            nameH3.textContent = card.name;
            const titleP = document.createElement('p');
            titleP.textContent = card.title;
            headerDiv.appendChild(nameH3);
            headerDiv.appendChild(titleP);
            cardDiv.appendChild(headerDiv);

            // Create details section
            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('card-details');
            const addressP = document.createElement('p');
            addressP.textContent = card.address;
            const phoneP = document.createElement('p');
            phoneP.innerHTML = `<strong>Phone:</strong> ${card.phone}`;
            const membershipP = document.createElement('p');
            membershipP.innerHTML = `<strong>Membership:</strong> ${card.membership}`;
            const websiteP = document.createElement('p');
            const websiteLink = document.createElement('a');
            websiteLink.href = card.website;
            websiteLink.textContent = card.website;
            websiteLink.target = "_blank"; // Open link in new tab
            websiteP.innerHTML = `<strong>Web:</strong> `;
            websiteP.appendChild(websiteLink);

            detailsDiv.appendChild(addressP);
            detailsDiv.appendChild(phoneP);
            detailsDiv.appendChild(membershipP);
            detailsDiv.appendChild(websiteP);
            cardDiv.appendChild(detailsDiv);

            return cardDiv;
        }

        // Async function to fetch (or load) data and render cards
        async function fetchAndRenderCards() {
            const cardsContainer = document.querySelector('.cards');

            try {
                 const response = await fetch("data/members.json");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();


                data.forEach(card => {
                    const cardElement = createBusinessCardElement(card);
                    cardsContainer.appendChild(cardElement);
                });
            } catch (error) {
                console.error('Error fetching or rendering business cards:', error);
                // Display a user-friendly message instead of alert()
                const errorMessage = document.createElement('p');
                errorMessage.style.color = 'red';
                errorMessage.style.textAlign = 'center';
                errorMessage.textContent = 'Failed to load business cards. Please try again later.';
                cardsContainer.appendChild(errorMessage);
            }
        }

// Call the function to render cards when the DOM is fully loaded
window.onload = fetchAndRenderCards;

// Change view
const gridbutton = document.getElementById("grid");
const listbutton = document.getElementById("list");
const cardsWrapper = document.querySelector("#cards");

document.addEventListener('DOMContentLoaded', function() {
  // Call the function to render cards when the DOM is fully loaded
  window.onload = fetchAndRenderCards;

  // Change view
  const gridbutton = document.getElementById("grid");
  const listbutton = document.getElementById("list");
  const cardsWrapper = document.querySelector(".cards");

  // Check if gridbutton and listbutton exist before adding event listeners
  if (gridbutton) {
    gridbutton.addEventListener("click", () => {
      // example using arrow function
      cardsWrapper.classList.add("cards");
      cardsWrapper.classList.remove("list");
    });
  }


  function showList() {
      cardsWrapper.classList.add("list");
    cardsWrapper.classList.remove("cards");
  }

  if (listbutton) {
    listbutton.addEventListener("click", showList); // example using defined function
  }
});