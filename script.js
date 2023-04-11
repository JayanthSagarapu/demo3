// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// const additems = document.querySelector('.title');
// const items = document.getElementsByClassName('list-group-item');
// const list = document.getElementsByTagName('li');

// // headerTitle.textContent= 'Jay';
// // headerTitle.style.color = 'black';

// // header.style.border = 'white dotted 3px';

// // additems.style.fontWeight = 'bold'
// // //additems.style.color = 'green';

// // items[2].style.background = 'green';

// // for (let i=0; i< items.length; i++){
// //     items[i].style.fontWeight = 'bold';
// // }

// // for (let i=0; i< list.length; i++){
// //     list[i].style.background = 'grey';
// // }

// // const firstitem = document.querySelector('.list-group-item');
// // const seconditem = document.querySelector('.list-group-item:nth-child(2)');
// // const thirditem = document.querySelector('.list-group-item:nth-child(3)');
// // const lastitem = document.querySelector('.list-group-item:last-child');

// // //seconditem.style.background = 'green';
// // thirditem.style.visibility = "hidden";

// // const odd = document.querySelectorAll('li:nth-child(odd)');
// // const even = document.querySelectorAll('li:nth-child(even)');
// // for (let i=0; i< odd.length; i++){
// //     odd[i].style.background = 'green';
// // }
// // even[0].style.color='green'

// const itemlist = document.querySelector("#items");

// //parentElement
// itemlist.parentElement.style.background = 'grey';

// //lastchild
// console.log(itemlist.lastChild);

// //lastchildelement
// itemlist.lastElementChild.style.color ='blue'; 

// //firstchild
// console.log(itemlist.firstChild);

// //firstchildelement
// itemlist.firstElementChild.style.color ='red'; 

// //nextsibling
// const nextitem = document.querySelector('#title');
// console.log(nextitem.nextSibling);

// //nextelementsibling
// nextitem.style.background = 'black';

// //previoussibling
// console.log(itemlist.previousSibling);

// //previouselementsibling
// itemlist.previousElementSibling.style.color = 'white'

// //create element
// const newdiv = document.createElement('div');
// const newdiv1 = document.createElement('div');
// //Add class
// newdiv.className = 'HEllo'

// //setAttribute
// newdiv.setAttribute('name','hello div');

// //add textnode
// const textnode = document.createTextNode('HEllo');
// const textnode1 = document.createTextNode('HEllo');

// //append
// newdiv.appendChild(textnode)
// newdiv1.appendChild(textnode1)

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// newdiv.style.fontSize = '20px';

// container.insertBefore(newdiv,h1);

// itemlist.insertBefore(newdiv1, items[0])

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var deleteitem = document.getElementById('delete')

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//delete button
deleteitem.addEventListener('click',deletenewitem);
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newdesc = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.append(document.createTextNode(newItem)," ", document.createTextNode(newdesc));
  //li.appendChild(document.createTextNode(newdesc));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node to del button
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  //create edit button
  var editbtn = document.createElement('button');

  //add class to edit
  editbtn.classList ="btn btn-sm float-right edit";

  //Append textnode to editbtn
  editbtn.appendChild(document.createTextNode('Edit'));

  //append to li
  li.append(editbtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
}

//delete button
function deletenewitem(e){
    e.preventDefault();
    itemList.removeChild(itemList.lastChild);
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}