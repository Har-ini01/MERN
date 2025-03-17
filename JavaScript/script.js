console.log("Hello World")

// Variable declaration
//let name = "Ram"
//var val = 10 
//const pi = 3.14 --> for storing constant value, cant be changed like other two
var a = 20 //Global scope
{
    let b = 10 //Local scope
    console.log(b)
}
console.log(a)


//Operators
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
console.log("==================")
let x = 20
let y =  30 
//let z = x++ --> Post increment
let z = ++x //--> Pre increment
console.log("x:",x)
console.log("z:",z)

//Datatypes
//1.Number
let num = 12
//2.String
let s = "String"
//3.Boolean
let bool = true
//4.Null
let n = null

console.log(num, s, bool, n)
console.log(typeof(num), typeof(s), typeof(bool), typeof(n))

//Function
//1.Declarative function

//Example 1
function add(a,b)//Parameters
{
    console.log(a+b)
}
add(5,10) //Arguments
add(12,4)
add(8,6)

//Example 2
function area(l,b)//Parameters
{
    console.log(l*b)
}
area(10,20) //Arguments

//if-else loop
//Example 1
let q = 20
if(q>=20){
    console.log("True")
}
else{
    console.log("False")
}

//For loop
for(let i=0; i<=10; i+=2){
    console.log(i)
}