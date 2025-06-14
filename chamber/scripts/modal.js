
// Reusable dialog 
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');


// 'show the dialog' button opens the dialog modally
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>🟦 Non-Profit Membership</h3>
    <p>Ideal for charitable and community-based organizations.</p>
    <p>Cost: Free or minimal fee </p>
    <h4>Benefits:</h4>
    <ul>
    <li>Access to selected training and development resources </li>
    <li>Inclusion in community event listings </li>
    <li>Discounts on select events</li>
    <li>Recognition as a community supporter</li>
    </ul>
    `
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>🟫 Bronze Membership</h3>
    <p>Perfect for small businesses or individuals beginning their networking journey. </p>
    <p>Cost: Low </p>
    <h4>Benefits:</h4>
    <ul>
    <li>All Non-Profit perks</li>
    <li>Invitations to member-only special events </li>S
    <li>Basic listing in the member directory >/li>
    <li>10% discount on events and training sessions</li>
    </ul>
    `
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>🥈 Silver Membership</h3>
    <p>Designed for growing businesses looking to increase visibility.</p>
    <p>Cost: Moderate </p>
    <h4>Benefits:</h4>
    <ul>
    <li>All Bronze perks</li>
    <li>Featured placement in newsletters and directories</li>
    <li>Access to exclusive business training workshops </li>
    <li>20% discount on events /li>
    <li>Two spotlight features on the home page annually</li>
    </ul>
    `
});
openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>🥇 Gold Membership</h3>
    <p>Top-tier access for organizations committed to leadership and maximum exposure.</p>
    <p>Cost: Premium </p>
    <h4>Benefits:</h4>
    <ul>
    <li>All Silver perks</li>
    <li>Unlimited spotlight positions throughout the year</li>
    <li>VIP access to networking events </li>
    <li>Premium ad placements on the website </li>
    <li>Complimentary booths at trade or community shows </li>
    <li>Priority access to sponsor or host events</li>
    </ul>
    `
});
// close button closes the dialog modally
closeButton.addEventListener('click', () => {
    dialogBox.close();
});

