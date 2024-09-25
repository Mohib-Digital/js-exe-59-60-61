
// ChildNodes
const parentDiv = document.getElementById('parentDiv').childNodes;
// console.log(parentDiv);


// Children: It returns only HTML elements (tags)
const findChildren = document.getElementById('parentDiv').children;
// console.log(findChildren)






parentDiv[9].textContent = 'Hello Paaa G this is a span tag';



findChildren[5].textContent = 'This is last Paragraph'


// for (let i = 0; i < findChildren.length; i++) {
//   findChildren[i].style.color = 'red';
// }




for (let i = 0; i < parentDiv.length; i++) {
  // check the .nodeType
  if (parentDiv[i].nodeType === 1) {
    parentDiv[i].style.color = 'white';
    parentDiv[i].style.backgroundColor = 'gray';

  }
}