/** 
 * 1.Spread: unpack the elements into Individual Elements
 * 
 * 2.Rest: pack all the elements into an array
 *  NOTE: rest will always should be at last
 * **/

//Array
let arr1 =[1,2,3,4,5]

//Copy
let arr2 = [...arr1,6,7] //[1,2,3,4,5,6,7]
console.log(arr2)

//Concatenation
let arr3 = [...arr1,...arr2] //[1,2,3,4,5,6,7]
console.log(arr3)

//Objects
let person1 = {name: "Sam", age: 10};

//Copy
let person2 = {...person1, city:"Chennai"}; //{name:"Sam", age:10, city:"Chennai"}
console.log(person2)

//Concatenation
let person3 = {...person1,...person2}; //Duplicate values not repeated
console.log(person3)

//Function
function add(a,b,c,d){
    console.log(a+b) //1+2
    console.log(a+b+c) //1+2+3
    console.log(a+b+c+d) //1+2+3+4
}
let arr = [1,2,3,4,5,6,7,8]
add(...arr) // O/P->3

function rest(a,b,...rest){ //displays rest of the elements ->
    console.log(rest) //[3,4,5,6,7,8]
}
let ar = [1,2,3,4,5,6,7,8]
rest(...ar)

//String Methods
let names = "Hello World"

//Help us determine the length
console.log(names.length)

//Helps to form an Array
console.log(names.split(" "))

//Convert all to uppercase
console.log(names.toUpperCase())

//Convert all to lowercase
console.log(names.toLowerCase())

//Trim - Remove all whitespaces
//Convert all to uppercase
console.log(names.trim())

console.log("======================")

//Array Destructuring 
let array = [1,2,3,4,5,6,7,8]
let [a,b,c,d] = [1,2,3,4,5,6,7,8]
let [e,f] = array // [1,2,3,4,5,6,7,8]
console.log(a)

//Object Destructuring
let person = {namess: "Sita", age: 22}

//1.Dot Notation - console.log(person.age)
//2.Bracket Notation- console.log(person[names])

//3.Object Destructuring [Onfly]
const {namess, age} = person;
console.log(namess,age)


