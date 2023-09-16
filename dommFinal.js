let forms=document.getElementById("addForm");
let itemList=document.getElementById("items");

//add form event
forms.addEventListener('submit',addItems)

//add remove event
itemList.addEventListener('click',removeItems)

//add items
function addItems(e){
   e.preventDefault();
   
   //add input
   let addin=document.getElementById('item').value;
   //onsole.log(addin)

   //create new li
   let li=document.createElement('li');
   //console.log(lii)

   //add class name to new lii
li.className='list-group-item';

//ad input with text node and value
li.appendChild(document.createTextNode(addin))

//create new  delbutton
let delbutton=document.createElement('button')
//add class for button
delbutton.className="btn btn-danger btn-sm float-right delete";
//textnode
delbutton.appendChild(document.createTextNode('X'));//upto this we add button but that button is inside 
//li so we have to add this new buuton to li

// //create new edit button
// let editbtn=document.createElement('button');
// //create class name to edit button
// editbtn.className="btn btn-outline-secondary btn-sm float-right";
// //text
// editbtn.appendChild(document.createTextNode('edit'))
// //appent to delete button

// li.appendChild(editbtn);
//appent button to li
li.appendChild(delbutton);
//create new edit button
let editbtn=document.createElement('button');
//create class name to edit button
editbtn.className="btn btn-outline-secondary btn-sm float-right";
//text
editbtn.appendChild(document.createTextNode('Edit'))
//appent to delete button

li.appendChild(editbtn);

//append li to list(ul)
itemList.appendChild(li)
}
function removeItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}