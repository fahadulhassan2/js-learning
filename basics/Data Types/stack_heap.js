// Stack (Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename; 
     myYoutubename = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

// Heap (Non-Primitive)

let userOne = {
    age : 54,
}

let usertwo = userOne;

usertwo.age = 20;

console.log(userOne.age)
console.log(usertwo.age)