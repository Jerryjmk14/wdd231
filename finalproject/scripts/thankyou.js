
const membershipInfo = new URLSearchParams(window.location.search);

document.querySelector('#membership-info').innerHTML = `
<h2>Congratulations 👏</h2>
<p>Name: ${membershipInfo.get('fname')} ${membershipInfo.get('lname')}</p>
<p>Phone Number: ${membershipInfo.get('phone')}</p>
<p>Your email is ${membershipInfo.get('email')}</p>
`