
function orderPizza(){ //  t = 3
    console.log("Order Pizza") //  t = 3
    setTimeout(makePizza, 5000) //  t = 3 - 8
}

function makePizza(){ // t = 8
    console.log("Make Pizza") // t= 8
    setTimeout(deliverPizza, 2000) // t = 8 - 10
}

function deliverPizza(){
    console.log("Deliver Pizza")
}   

// step 1: Order Pizza => 3 seconds
// step 2:  Make the pizza:  5 secs 
// step 3:  Deliver the pizza:  2 secs


setTimeout(orderPizza, 3000) //  t = 0 
// setTimeout(makePizza, 8000)
// setTimeout(deliverPizza, 10000)


















