let forms=document.getElementById("addForm");
let itemList=document.getElementById("items");//ul
let filter=document.getElementById('filter');

//add form event
forms.addEventListener('submit',addItems)

// //add new form event
// forms.addEventListener('submit',addItems)

//add remove event
itemList.addEventListener('click',removeItems)

//add filter event
filter.addEventListener('keyup',filterItems)

//add items
function addItems(e){
    //function addItems(e){
   e.preventDefault();
   
   //add input
   let addin=document.getElementById('item').value;
   let discription=document.getElementById('discription').value;
   //console.log(addin)

   //create new li
   let li=document.createElement('li');
   //console.log(li)

   //add class name to new li
li.className='list-group-item';

//ad input with text node and value
li.appendChild(document.createTextNode(addin));

//........................................add new input.................................//

//ad input with text node and value
let discriptionNode =document.createTextNode( " "+discription);


//...............................new delbutton........................//
//create new  delbutton
let delbutton=document.createElement('button')
//add class for button
delbutton.className="btn btn-danger btn-sm float-right delete";
//textnode
delbutton.appendChild(document.createTextNode('X'));//upto this we add button but that button is inside 
//li so we have to add this new buuton to li

li.appendChild(delbutton);
//.............................newEditButton.............................//
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
li.appendChild(discriptionNode)

//}
}
function removeItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}
function filterItems(e){
//convert to lower case
let text=e.target.value.toLowerCase();
//WE HAVE item list li
let items=itemList.getElementsByTagName('li');//it shwing all in node and newly added in html so that we have to 


//have to item list discription
let dis=itemList.getElementsByTagName('discription');
//create array
Array.from(items).forEach (function(item){
let itemName=item.firstChild.textContent;
let itemName1=item.lastChild.textContent;
//console.log(itemName);
if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display='block';
}else if(itemName1.toLowerCase().indexOf(text) != -1){
item.style.display='block';
} 
else
{
item.style.display='none';
}


});
}





