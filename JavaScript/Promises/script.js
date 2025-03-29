/**Promises
 * Status
 *  1.Pending (Default)
 *  2.Fulfilled
 *  3.Rejected

 * JavaScript -> Non-Blocking Synchronous Execution
 *  - Synchronous Execution [Default]
 *      - Line By Line
 *  - Asynchronous Execution
 *      - if the execution takes sometime then the execution is called Async Execution
 */

//Synchronous Execution
console.log("Hello World-1");
console.log("Hello World-2");
console.log("Hello World-3");

//Asynchronous Execution
//Make an API Call
// const response = fetch("https://dummyjson.com/products")
// console.log(response) --> Promise with pending status (Promise { <pending> })

//How do you handle promise
//  --> Older Way - then, catch
// const response = fetch("https://dummyjson.com/products")
//   .then((e) => {
//     return e.json(); //Asynchronous
//   })
//   .then((e) => {    //Status: Pending --> Fulfilled
//     console.log(e);
//   });
//   .catch((err) => { //Status if Rejected
//     console.log(err);
//   });
// console.log(response) 

//NOTE: then inside then - promise training

//  --> Newer Way - async, await(can be used only inside a function)
async function fetchData(){
    try {
        const res = await fetch("https://dummyjson.com/products")
        const ans = await res.json()
        console.log(ans)
    } catch (err) {
        console.log(err)
    }
}
fetchData();