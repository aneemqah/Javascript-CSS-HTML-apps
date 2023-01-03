const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// when user clicks on modal button add .OPEN-MODAL to modal-overlay
modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

// When user click on close button remove .CLOSE-MODAL from modal-overlay
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});
