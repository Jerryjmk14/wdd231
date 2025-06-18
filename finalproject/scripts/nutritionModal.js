
// Reusable dialog 
const openButton = document.querySelector('#openButton');
const dialogBox1 = document.querySelector('#dialog');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialog div');


// 'show the dialog' button opens the dialog modally
openButton.addEventListener('click', () => {
    dialogBoxText.innerHTML = `
     <h2>Nutrition Myths: Busted!</h2>
    <p>There’s a lot of confusion out there about what’s truly healthy. From “carbs are bad” to “you must detox to stay clean,” many of these ideas are outdated or just plain wrong.</p>
    <ul>
      <li><strong>Myth:</strong> All fats are bad. <br><em>Truth:</em> Healthy fats like those in avocados and nuts are essential for your body.</li>
      <li><strong>Myth:</strong> Skipping meals helps you lose weight. <br><em>Truth:</em> It can actually slow your metabolism and lead to overeating later.</li>
      <li><strong>Myth:</strong> Juicing is better than eating whole fruits. <br><em>Truth:</em> Juicing removes fiber and can spike blood sugar—whole fruits are better.</li>
    </ul>
    `
    dialogBox1.showModal();
});

// close button closes the dialog modally
closeButton.addEventListener('click', () => {
    dialogBox1.close();
});

