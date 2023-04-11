const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
const additems = document.querySelector('.title');
const items = document.getElementsByClassName('list-group-item');
const list = document.getElementsByTagName('li');

headerTitle.textContent= 'Jay';
headerTitle.style.color = 'black';

header.style.border = 'white dotted 3px';

additems.style.fontWeight = 'bold'
//additems.style.color = 'green';

items[2].style.background = 'green';

for (let i=0; i< items.length; i++){
    items[i].style.fontWeight = 'bold';
}

for (let i=0; i< list.length; i++){
    list[i].style.background = 'grey';
}

const firstitem = document.querySelector('.list-group-item');
const seconditem = document.querySelector('.list-group-item:nth-child(2)');
const thirditem = document.querySelector('.list-group-item:nth-child(3)');
const lastitem = document.querySelector('.list-group-item:last-child');

//seconditem.style.background = 'green';
thirditem.style.visibility = "hidden";

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');
for (let i=0; i< odd.length; i++){
    odd[i].style.background = 'green';
}
even[0].style.color='green';