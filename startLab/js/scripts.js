// Single dialog 
// const openButton = document.querySelector('#openButton');
// const dialogBox = document.querySelector('#dialogBox');
// const closeButton = document.querySelector('#closeButton');

// // 'show the dialog' button opens the dialog modally
// openButton.addEventListener('click', () => {
//     dialogBox.showModal();
// });

// // close button closes the dialog modally
// closeButton.addEventListener('click', () => {
//     dialogBox.close();
// });


// Reusable dialog 
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');


// 'show the dialog' button opens the dialog modally
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Apples have 98 calories!`
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Oranges have 45 calories!`
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bananas have 105 calories!`
});
// close button closes the dialog modally
closeButton.addEventListener('click', () => {
    dialogBox.close();
});