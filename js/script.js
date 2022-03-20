//business logic

function Pizza(type,size,crust, toppings) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}

//calculate the total price of the Pizza

let pizzaPrice = function(pizzaSize, pizzaCrust, pizzaToppings){
    let sizePrice = 0;
    if(pizzaSize = "Small"){
        sizePrice += 500;
    }else if(pizzaSize = "Medium"){
        sizePrice += 1000;
    }else if(pizzaSize = "Large"){
        sizePrice += 1500;
    }else{
        return('Please select a size');
    };

    let crustPrice = 0;
    if(pizzaCrust = "Crispy"){
        crustPrice += 150;
    }else if(pizzaCrust = "Stuffed"){
        crustPrice += 200;
    }else if(pizzaCrust = "Gluten Free"){
        crustPrice += 250;
    }else{
        return('Please select a crust');
    }

    let toppingsPrice = 0;
    if (pizzaSize == 'Large') {
        toppingsPrice = pizzaToppings.length * 150;
    } else if (pizzaSize == 'Ledium') {
        toppingsPrice = pizzaToppings.length * 100;
    } else if (pizzaSize == 'Small') {
        toppingsPrice = pizzaToppings.length * 50;
    }

    let totalPrice = sizePrice + crustPrice + toppingsPrice;
    return totalPrice;

}

// User interface logic


