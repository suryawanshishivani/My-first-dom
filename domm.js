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
// let header=document.getElementById('main header')
 // console.log(headerTitle);
 // //headerTitle.textContent='helooo'
 // headerTitle.innerText='Item Lister'
 //header.style.borderBottom ='solid 6px #000';
 
 
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
 
let li=document.getElementsByTagName('li')
console.log(li)
console.log(li);
console.log(li[1]);
 li[1].textContent='hello my lady'
 console.log(li[1].textContent);
 li[2].style.backgroundColor='green';