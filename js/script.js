//business logic

function Pizza(type, size, crust, toppings) {
    this.preferred_type = type;
    this.preferred_size = size;
    this.preferred_crust = crust;
    this.preferred_toppings = toppings;
}

//calculate the total price of the Pizza

let pizzaPrice = function (pizzaSize, pizzaCrust, pizzaToppings) {
    let sizePrice;
    if (pizzaSize === "Small") {
        sizePrice = 500;
    } else if (pizzaSize === "Medium") {
        sizePrice = 1000;
    } else if (pizzaSize === "Large") {
        sizePrice = 1500;
    } else {
        location.reload();
        alert('Please select a size');
    };

    let crustPrice;
    if (pizzaCrust === "Crispy") {
        crustPrice = 150;
    } else if (pizzaCrust === "Stuffed") {
        crustPrice = 200;
    } else if (pizzaCrust === "Glutten Free") {
        crustPrice = 250;
    } else {
        location.reload();
        alert('Please select a crust');
    }

    let toppingsPrice;
    if (pizzaSize === 'Large') {
        toppingsPrice = pizzaToppings.length * 150;
    } else if (pizzaSize === 'Medium') {
        toppingsPrice = pizzaToppings.length * 100;
    } else if (pizzaSize === 'Small') {
        toppingsPrice = pizzaToppings.length * 50;
    }

    let totalPrice = sizePrice + crustPrice + toppingsPrice;
    return totalPrice;

}

// User interface logic
$(document).ready(function () {
    $('#place-order').click(function () {
        $('.second-view').show();
        $('.first-view').hide();
    });

    $('#next').click(function (event) {
        event.preventDefault();
        $('.third-view').show();
        $('.second-view').hide();


        //get values from selected options

        let pizzaType = $('#preferred_type option:selected').val();
        let pizzaSize = $('#preferred_size option:selected').val();
        let pizzaCrust = $('#preferred_crust option:selected').val();
        let pizzaToppings = [];

        $('input:checkbox[name=preferred_toppings]:checked').each(function () {
            pizzaToppings.push($(this).val());
        });

        let total = pizzaPrice(pizzaSize, pizzaCrust, pizzaToppings);
        let deliveryTotal = total + 200;

        //create a new instance of Pizza
        let order = new Pizza(pizzaType, pizzaSize, pizzaCrust, pizzaToppings);
        $('.pizza-status').append('<tr><td id= "type-confirm">' + order.preferred_type + '</td><td id ="size-confirm" >' + order.preferred_size + '</td><td id = "crust-confirm">' + order.preferred_crust + '</td><td id = "toppings-confirm">' + order.preferred_toppings + '</td><td id = "total-confirm">' + total);

        //display the total price for pick up
        $('#self-pick-up').click(function () {
            alert('Dear Customer, your order will be ready for pick up in 30 minutes. Thank you for choosing Pizza Hut! your total is: ' + total);


            location.reload();
        });

        //display the total price for delivery and contact information
        $('#delivery').click(function () {
            let clientName = $('#clientName').val();
            let clientAddress = $('#clientAddress').val();
            let clientLocation = $('#clientLocation').val();

            if (clientName === '' || clientAddress === '' || clientLocation === '') {
                alert('Please fill in all the fields');
            } else {
                alert('Dear ' + clientName + ', your order will be delivered to' + clientLocation + 'in 1 hour. Thank you for choosing Pizza Hut! your total is: ' + deliveryTotal);

            }

        });
    });










});