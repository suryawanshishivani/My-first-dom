//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);


//GETELEMENTBYID
//console.log(document.getElementById('header title'));
 //let headerTitle=document.getElementById('header title');
//let header=document.getElementById('main header')
  //console.log(headerTitle);
 // //headerTitle.textContent='helooo'
 // headerTitle.innerText='Item Lister'
 //header.style.borderBottom ='solid 6px #000';
 //console.log(header);
 
 //GETELEMENTSBYCLASSNAME

 
  //let Item=document.getElementsByClassName('list-group-item');
  //console.log(Item);
  //console.log(Item[1]);
 //Item[1].textContent='hello my lady'
 //console.log(Item[1].textContent);
 //Item[2].style.backgroundColor='green';

//  for(let i=0;i<=Item.length;i++){
//     Item[i].style.fontWeight='bold'
//  }

 // Item[1].style.fontWeight='bold'
 
 // //Item.style.backgroundColor='#f4f4f4';//It does not happen for that we have to put it into loop
 
// let li=document.getElementsByTagName('li')
// console.log(li)
// console.log(li);
// console.log(li[1]);
//  li[1].textContent='hello my lady'
//  console.log(li[1].textContent);
//  li[2].style.backgroundColor='green';

//QUEERYSELECTOR//

// const header = document.querySelector("#header title");
// //header.style.borderBottom ='solid 6px #000';
// console.log(header);

// let input =document.querySelector('input');
// input.value='hello shivani';

// let submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let Item=document.querySelector('.list-group-item')
// Item.style.color='red';
//  let lastItem=document.querySelector('.list-group-item:last-child');
//  lastItem.style.color='blue';

// let secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// //thirdItem.visiblity='hidden';
// thirdItem.style.display='none';
// //thirdItem.hidden='none';

// //QUEERYSELECTORALL//

// // let Items=document.querySelectorAll('.list-group-item');
// // console.log(Items);

// // let secItem=document.querySelectorAll('.list-group-item:nth-child(1)')
// // secItem.style.color='blue';

// let odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//TRAVERSING THE DOM//
 let itemList=document.querySelector('#items');
// //parentNode
//console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor ='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement

 //console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor ='##8ab4b5';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childNode
 //console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";

//Firstchild
// console.log(itemList.firstChild);

// //itemList.firstChild.style.textContent ="Hello";
// console.log(itemList.firstElementChild);

// //LASTCHILD//
// console.log(itemList.lastChild);

// //LASTELEMENTCHILD//
//  console.log(itemList.lastElementChild);
// // itemList.lastElementChild.style.backgroundColor='#f4f4f4';

// //NEXTSIBLING//
// console.log(itemList.nextSibling);

// //nexrtelementsibling
// console.log(itemList.nextElementSibling);

// //PREVIOUSSIBLING//
// console.log(itemList.previousSibling);

// //preveiousElementSibling//
// console.log(itemList.previousElementSibling);

//create Element//
//create Div
let newDiv=document.createElement('div')
newDiv.className='hello';
newDiv.idName='hello1';


//addAtrribute
newDiv.setAttribute('title','Hello newDiv');

//createtextNode
let newDivText=document.createTextNode('heLLo');

//add text to div
//newDiv.appendChild(newDivText);
console.log(newDiv.appendChild(newDivText));

let container=document.querySelector('header.container');
let h1=document.querySelector('header h1');
console.log(newDiv);
