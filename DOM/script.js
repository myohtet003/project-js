//c = create 
const h1Element = document.createElement("h1");
h1Element.classList.add("container");
const textNode = document.createTextNode("Welcome to Mandalay");

h1Element.appendChild(textNode);
const tagCollection = document.getElementsByTagName("body");   //HTMLCollection[]
const bodyElement = tagCollection[0];   
bodyElement.appendChild(h1Element);

// r = read
const readH1Element = document.getElementsByTagName("h1")[0];
console.log(
    "Text inside h1 element before update: ",
    readH1Element.textContent
);

// u = update
readH1Element.textContent = "Welcome to Yangon";
console.log("Text inside h1 element after update: ", readH1Element.textContent);

const styleTestDiv = document.getElementsByClassName("styleText")[0];
console.log("styleTestDiv's width: ", getComputedStyle(styleTestDiv).width);
console.log("styleTestDiv's height: ", getComputedStyle(styleTestDiv).height);
console.log("styleTestDiv's background color: ",
getComputedStyle(styleTestDiv).backgroundColor
 );

//d = delete
//readH1Element.remove();
