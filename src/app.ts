const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map((pizza, index) => {
    return pizza.name.toUpperCase();
});

