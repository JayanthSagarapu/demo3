const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('.btn');

// Listen for form submit
btn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  localStorage.setItem(nameInput.value,emailInput.value);
  console.log(typeof(localStorage.getItem(nameInput.value)));
  
}