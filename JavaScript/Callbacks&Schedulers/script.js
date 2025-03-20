/*Function
    -Arg, Parameter
        * Arg - Number, String, Bool, Null, Array, Object
        * Function - CallBack
    1.CallBack Function 
        - A function that is passed as an Argument to another function is called callback function
    2.Scheduler
        - The schedulers are used to schedule the execution of callback function
            1.setInterval
                Syntax :
            2.setTimeout
                Syntax
    NOTE: time - 1000 milliseconds = 1sec*/
function add(a,b){ //--> Parameter
    console.log(a+b)
}
add(10,10) //10 --> Argument

function a(val){ 
    console.log(val)
}

a(function ab(){ 
    console.log("ADDED")
})

let counter = 0
const id = setInterval(function(){
    counter = counter + 1
    console.log(counter)
},1000)

clearInterval(id)

const cid = setTimeout(()=>{
    counter = counter + 1
    console.log(counter)
},1000)


