//Assignment-10


/*1. What is JavaScript?
- Provide a brief explanation of what JavaScript is and its role in web development.*/

console.log("JavaScript is a programming language used to make dynamic, interactive web pages.")
console.log("===============")


/*2.Variables and Types:
-Declare a variable named userAge and assign it a numerical value representing someone's age.
-Declare another variable named userName and assign it a string value representing a person's name.
-Output both variables using console.log().*/

let UserAge = 46
let UserName = "Sam"
console.log("User Age:",UserAge)
console.log("User Name:",UserName)
console.log("===============")


/*3.Comments in JavaScript:
-Write a multi-line comment explaining the purpose of a function you create in the next step.*/


/*4.Operations:
-Create two variables, num1 and num2, and assign them numerical values.
-Perform addition, subtraction, multiplication, and division operations on these variables.
-Display the results using console.log().*/

num1 = 20
num2 = 10
console.log("Addition:",num1+num2)
console.log("Subtraction:",num1-num2)
console.log("Multiplication:",num1*num2)
console.log("Division:",num1/num2)
console.log("===============")


/*5.Data Types:
-Create variables to represent different data types: string, number, boolean, and an array.
-Provide examples and explain each data type.*/

let str = "Hello World!!" //String --> to store text
let num = 20 //Number --> to store numbers
let bool = false //Boolean --> to store true or false values
let arr = [1,2,3,4,5] //Array --> collection of a multiple values
console.log("String:",str)
console.log("Number:",num)
console.log("Boolean:",bool)
console.log("Array:",arr)
console.log("===============")


/*6.Functions in JavaScript:
- Write a function named greetUser that takes a name parameter and returns a greeting message.
- Call the function with a sample name and display the result using console.log().*/

function greetUser(name){
    console.log("Welcome " + name + "!")
}
greetUser("Soniya")
console.log("===============")


/*7.if Else in JavaScript:
- Create a variable named temperature and assign it a numerical value.
- Write an if-else statement to check if the temperature is greater than 30. Output a message accordingly.*/

temperature = 36
if(temperature > 30){
    console.log("It's a Sunny Day!!")
}
else{
    console.log("It's a Cold Day!!")
}
console.log("===============")


/*8.FOR LOOP:
- Use a for loop to print the numbers from 1 to 5 in the console.*/

for(let i=1; i<=5; i++){
    console.log(i)
}
console.log("===============")


/*9.Loose vs Strict Equality:
- Explain the difference between loose equality (==) and strict equality (===) with examples.*/

console.log(5 == "5")  //true - compares only value
console.log(5 === "5")  //false - compares value and datatype
console.log("===============")
