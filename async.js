

setTimeout(()=>console.log("0"), 0) 

console.log("1")


setTimeout(loading, 5000) 

setTimeout(()=>console.log("2"), 2000) 

console.log ("3")


// p1 = > function 

// p2 => time in milliseconds

function loading(){
    console.log("4")
}