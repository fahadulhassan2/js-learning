// In javaScript data types categories on the basis of how data fetch and add from memory
// Stack (Primitive) copy value

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename; 
     myYoutubename = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

// Heap (Non-Primitive) reference value

let userOne = {
    age : 54,
}

let usertwo = userOne;

usertwo.age = 20;

console.log(userOne.age)
console.log(usertwo.age)