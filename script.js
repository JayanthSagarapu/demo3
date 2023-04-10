const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
const additems = document.querySelector('.title');
const items = document.getElementsByClassName('list-group-item');

headerTitle.textContent= 'Jay';
headerTitle.style.color = 'black';

header.style.border = 'white dotted 3px';

additems.style.fontWeight = 'bold'
additems.style.color = 'green';

items[2].style.background = 'green';

for (let i=0; i< items.length; i++){
    items[i].style.fontWeight = 'bold';
}
