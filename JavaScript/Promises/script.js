//Promises

/**
 * JavaScript
 *  - Synchronous Execution [Default]
 *      - Line By Line
 *  - Asynchronous Execution
 *      - if the execution takes sometime then the execution is called Async Execution
 */

console.log("Hello World-1");
console.log("Hello World-2");
console.log("Hello World-3");

//Make an API Call
// const response = fetch("https://dummyjson.com/products")
//   .then((e) => {
//     return e.json(); //Asynchronous
//   })
//   .then((e) => {
//     console.log(e);
//   });
//   .catch((err) => {
//     console.log(err);
//   });
//   console.log(response)
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