//Array
let arr = [1,2,3,4,5]

/**
 * 1.Map - it is like for loop
 *       - it always returns array
 */
const ans = arr.map((i)=>{
    console.log(i)
    return i
})
console.log(ans)

/**
 *2.Filter - it is like for loop with given condition
 *         - it always returns array
 */
 const res = arr.filter((i)=>{
     return i>2
})
console.log(res)

/**
 *2.Reduce - adds untill a single array is returned
    ->accumulator
    ->currentValue
 */
 const q = arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
})
console.log(q)