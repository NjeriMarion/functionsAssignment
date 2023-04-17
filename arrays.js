// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.


let inventory = ["milk in ltrs", "water in ltrs", "flour in kgs", "salt in kgs", "fruits in crates", 
                "pancake mix in kg pkts", "black pepper per 100 gram can", "soy sauce in ltrs", "vinegar in ltrs", "crisps in 500g pakt"]
let stock = [ {item1: "milk ", quantity:15},{ item2: "water",  quantity: 20}, {item3:"flour" ,quantity:200}, 
            {item4:"salt",quantity :20}, {item5:"fruits" ,quantity: 25}, {item6:"pancakeMix" ,quantity: 50}, 
            {item7:"blackPepper" ,quantity:20}, {item8:"soySauce" ,quantity: 30}, {item9:"vinegar" ,quantity: 20},
             {item10:"crisps", quantity:200}]


// Write a function to add a new item to the inventory, updating both arrays.
let newinventoryitem = ["Bread in 500g pkts", {item11:"bread",quantity:100}]
function additionItem(){
    for(let i = 0 ; i <= newinventoryitem.length; i ++){
        if(i < 1){
            inventory.push(newinventoryitem[i])
        }
        else{
            stock.push(newinventoryitem[i])
        }  
    }

    console.log(inventory)
    console.log(stock)
}
additionItem()

// Write a function to update the stock quantity of an existing item
let newValue = 100
function updated(){
    stock[10].quantity = newValue
    return stock[10]
}
console.log(updated())



// Write a function to calculate the total number of items in the inventory
function totalQuantities(){
    let total = 0 ;
    for(let item = 0; item <= stock.length; item++){
        total +=item.quantity
    }
    return total
}
console.log(totalQuantities());

// Write a function to find the item with the lowest stock quantity.
console.log(stock[0].quantity)
let quantities = []
function leastValue(){   
    for(let i = 0; i <= stock.length; i++){
            quantities.push(stock[i].quantity)   
            return (Math.min(quantities)) 
            
    }
   
}
console.log(leastValue())

