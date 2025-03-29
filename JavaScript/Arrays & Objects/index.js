console.log("ARRAY")
//Array - An array is a collection of Datatypes which stores/holds an ordered sequence of items [number ,String, Bool, Null]
//1.How to Create Array 
let arr = [1, "Ram", true, null,[1,2,3,4],{car:"Audi",model:"A5",color:"White"}]
console.log(arr)
/*2.How do you access an element in Array
  - By index [0 , ~]
  - By console.log(arr1[1])*/
  //Index - 0    1      2    3
let arr1 = [1, "Ram", true, null]
console.log(arr1[1], arr1[4])
/*How to Count the no. of Element
    - length(it's a property, not a function)*/
 //Length - 1    2     3     4
let arr2 = [1, "Ram", true, null]
console.log(arr2.length)
//4.How do you Modify an Element in Array
let arr3 = [1, "Ram", true, null]
console.log("Before:",arr3[1])
arr3[1] = "Sam"
console.log("After:",arr3[1])
//5.How do you Add Element in Array
console.log(arr.push("Sam")) //NOTE: Always at last
console.log(arr)
//6.How do you Remove Element in Array
console.log(arr.pop()) //NOTE: Always at last
console.log(arr)

console.log("==============")

console.log("OBJECT")
/*Object - it is a collection of properties
  -Properties : { key - value }
         ==>Key : Unique
         ==>Value : Anything - String, Num, Bool, null
     - Identifiers: Set of Rules to Name a Variable
        *firstName   - ✔️
        *$firstName  - ✔️
        *_firstName  - ✔️
        *firstName12 - ✔️
        *first Name  - ❌
        *12firstName - ❌*/
//1.How to create an object
let obj ={
    number:4, //number
    names:"Cathy", //string
    Bool:false, //boolean
    object:null, //null
    hobbies: ["Chess","Football"], //array
    car:{ //object
        name:"Audi",
        model:"A5",
        color:"White",
    }
}
let person = {name:"Sam", age:54}; //shld be unique
console.log(person)
console.log(obj)

/*2.How to Access an Object
    - Dot Notation : person.name
    - Bracket Notation : person["name"]*/
//Dot Notation
console.log(person.name)
console.log(person.age)
console.log(person.gender) //undefined
console.log(obj.hobbies[1])
console.log(obj.car.name)
//Bracket Notation
console.log(person["name"])
console.log(person["age"])

/*3.How to Modify an Object
    - Dot Notation : person.name
    - Bracket Notation : person["name"]*/
person["name"] = "Ram"
person.age = 45
console.log(person)

//4.How do you Add an Element in Object
person.gender = "Male"
person["number"] = "9876543210"
console.log(person)
//5.How to Remove an Element in Object
delete person.gender
delete person["number"]
console.log(person)

/*Loose vs Strict Equality
    - Looose -> Doesn't check the type
    - Strict -> Checks the type*/
let num1 = 5
let num2 = 10
if(num1 == num2){
    console.log("True")
}else{
    console.log("False")
}

let n1 = 5
let n2 = "5"
if(n1 == n2){
    console.log("True")
}else{
    console.log("False")
}

let nm1 = 5
let nm2 = "5"
if(nm1 === nm2){
    console.log("True")
}else{
    console.log("False")
}