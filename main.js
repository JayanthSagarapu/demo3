const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('.btn');

// Listen for form submit
btn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  myobj= {
    name : nameInput.value,
    email : emailInput.value,
  }
  //localStorage.setItem(nameInput.value,emailInput.value);
  //console.log(typeof(localStorage.getItem(nameInput.value)));
  
  //STRINGIFY
  myobj_stringfy = JSON.stringify(myobj)
  localStorage.setItem('myobj1',myobj_stringfy)

  //or
  localStorage.setItem('myobj',JSON.stringify({name:nameInput.value,email:emailInput.value}) );
  console.log(localStorage)
}