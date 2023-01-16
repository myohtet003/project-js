const myButton = document.getElementById("myButton");
const img = document. getElementsByClassName("girl")[0];
const originalImageSrc = img.src;

const imgArray = [
    "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=h6Q9AyAogTJq4MZZCUCteKCFcsc7fNupnPNgdQfWUKs=",
    "https://media.istockphoto.com/id/1359499268/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=Gtx2RNqKj5I4Bsd2IY68fRINqhPdULXFcV63eD5n-DA=",
    "https://media.istockphoto.com/id/693656348/photo/waiting-for-friends.jpg?s=612x612&w=0&k=20&c=B1C72MeShOB6kgrFtexmCJOK-cUS1vCkIjOk_JPKnCQ=",
    "https://media.istockphoto.com/id/1364209752/photo/self-employed-painter-looking-at-the-camera-cheerfully.jpg?s=612x612&w=0&k=20&c=P7FpxWtg9V63WvQ-v4OqxUAjWOH31ua90VhoE-twH04=",
];
    

let counter = 0;
const myFunction = () => {
    if (counter === 5) {
        img.src = originalImageSrc;
        counter = 0;
        return;
    }
const imageLink = imgArray[counter];
img.src = imageLink;
counter += 1;
console.log("Counter value is: ", counter);
};
 
myButton.addEventListener("click", myFunction);

/*const myFunction = () => {
    console.log("We are Weird for you!")
}

myButton.addEventListener("click", myFunction);
*/