
const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h2>Congratulations 👏</h2>
<p>Name: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Membership Level: ${myInfo.get('membership-level')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Your email is ${myInfo.get('email')}</p>
<p>Organization: ${myInfo.get('organization')}</p>
<p>Date Registered: ${myInfo.get('date')}</p>
`