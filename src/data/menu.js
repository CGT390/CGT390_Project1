export const MENU = {
  Pizza: {
    justCheese: {
      title: "Just Cheese",
      sizes: [
        { size: "Small 10″", price: 8.99 },
        { size: "Medium 12″", price: 11.99 },
        { size: "Large 14″", price: 15.99 },
        { size: "X-Large 16″", price: 19.99 },
        { size: "Massive 20″", price: 26.99 }
      ]
    },

    oneTopping: {
      title: "Cheese & 1-Topping",
      sizes: [
        { size: "Small 10″", price: 10.99 },
        { size: "Medium 12″", price: 14.99 },
        { size: "Large 14″", price: 18.99 },
        { size: "X-Large 16″", price: 22.99 },
        { size: "Massive 20″", price: 28.99 }
      ]
    },

    toppings: {
      available: [
        "Pepperoni", "Sausage", "Bacon", "Ham", "Beef", "Chicken",
        "Mushroom", "Pineapple", "Green Pepper", "Onions", "Jalapeno",
        "Tomatoes", "Banana Peppers", "Black Olives", "Feta",
        "Cheddar", "Pepper Jack"
      ],
      additionalPricing: [
        { size: "10″", price: 1.6 },
        { size: "12″", price: 1.9 },
        { size: "14″", price: 2.2 },
        { size: "16″", price: 2.5 },
        { size: "20″", price: 3.7 }
      ]
    },

    glutenFree: {
      size: "12″",
      description: "Gluten Free Crust – 1 Topping",
      price: 18.99
    }
  },

  SpecialtyPies: {
    sizes: [
      { size: "Small 10″", price: 14.0 },
      { size: "Medium 12″", price: 19.0 },
      { size: "Large 14″", price: 23.0 },
      { size: "X-Large 16″", price: 27.0 },
      { size: "Massive 20″", price: 34.0 }
    ],

    bestSellers: [
      {
        name: "Supreme",
        toppings: ["Pepperoni", "Sausage", "Mushroom", "Green Pepper", "Red Onion", "Cheese"]
      },
      {
        name: "Veggie",
        toppings: ["Mushroom", "Green Pepper", "Red Onion", "Tomato", "Black Olives", "Cheese"]
      },
      {
        name: "Meat Lovers",
        toppings: ["Pepperoni", "Sausage", "Beef", "Bacon", "Ham", "Cheese"]
      },
      {
        name: "Taco",
        toppings: [
          "Taco Sauce", "Seasonings", "Tortilla Chips", "Beef",
          "Lettuce", "Tomatoes", "3-Cheese Blend", "Sour Cream"
        ]
      }
    ],

    columbiaFavorites: [
      {
        name: "Uncle Jesse",
        toppings: ["Alfredo", "Chicken", "Bacon", "Pepper Jack", "Cheese"]
      },
      {
        name: "The Stoner Pie",
        toppings: [
          "Pepperoni", "Bacon", "Mozzarella Sticks",
          "French Fries", "Cheddar", "Mozzarella"
        ]
      },
      { name: "Aloha Hawaiian", toppings: ["Ham", "Pineapple", "Bacon", "Green Pepper"] },
      { name: "Luau", toppings: ["Ham", "Pineapple", "Tomato", "Green Pepper", "Jalapeno"] },
      { name: "Bacon Cheeseburger", toppings: ["Bacon", "Beef", "Cheddar", "Cheese"] },
      { name: "Chicken Philly", toppings: ["Chicken", "Pepper Jack", "Green Pepper", "Onion"] },
      { name: "Four Cheese", toppings: ["Mozzarella", "Pepper Jack", "Cheddar", "Parmesan"] },
      { name: "Buffalo Chicken", toppings: ["Buffalo Sauce", "Chicken", "Red Onion"] },
      { name: "Blockhead BBQ", toppings: ["BBQ", "Chicken", "Green Pepper", "Onion"] },
      { name: "Maui Wowi", toppings: ["BBQ", "Chicken", "Bacon", "Pineapple"] },
      { name: "Pesto Chicken", toppings: ["Pesto", "Chicken", "Tomato", "Red Onion", "Feta"] },
      { name: "Pesto Veggie", toppings: ["Pesto", "Artichoke", "Mushroom", "Olive", "Feta"] },
      { name: "Chicken Alfredo", toppings: ["Alfredo", "Chicken", "Tomato", "Onion"] },
      {
        name: "Randy Marsh",
        toppings: ["Crème Fraiche", "Macaroni", "3-Cheese Blend", "Bacon"]
      },
      {
        name: "Margherita",
        toppings: ["Thin Crust", "Tomato", "Fresh Mozzarella", "Basil", "Olive Oil"]
      },
      {
        name: "Chicken Bacon Ranch",
        toppings: ["Ranch", "Chicken", "Bacon", "Cheddar", "Mozzarella"]
      }
    ]
  },

  PokeyStix: {
    name: "Garlic Cheese Bread",
    sizes: [
      { size: "Small 10″", price: 9.99 },
      { size: "Medium 12″", price: 11.99 },
      { size: "Large 14″", price: 15.99 },
      { size: "X-Large 16″", price: 18.99 }
    ]
  },

  Calzones: {
    name: "Italian Folded-Style Pizza",
    price: 14.99,
    description: "Cheese & 1 topping",
    additionalToppingPrice: 1.6
  },

  ClayFusions: {
    description: "½ Pizza + ½ Pokey Stix",
    sizes: [
      { size: "Small 10″", price: 12.99 },
      { size: "Medium 12″", price: 15.99 },
      { size: "Large 14″", price: 21.99 },
      { size: "X-Large 16″", price: 24.99 }
    ]
  },

  DippingSauces: {
    price: 0.75,
    options: [
      "Ranch", "Marinara", "Garlic Butter", "Buffalo",
      "BBQ", "Greek Dressing", "Bleu Cheese"
    ]
  },

  Desserts: [
    { name: "Cinistix (10″)", price: 7.0 },
    { name: "Cinistix (12″)", price: 9.0 },
    { name: "Cinnamon Rolls", price: 11.0 },
    { name: "Apple Cinnamon Stix", price: 11.0 },
    { name: "Big Chocolate Chip Cookie", price: 10.0 }
  ],

  Beverages: {
    twoLiter: {
      price: 5.0,
      options: [
        "Pepsi", "Diet Pepsi", "Mountain Dew",
        "Mug Root Beer", "Sierra Mist", "Orange Crush"
      ]
    },
    twentyOz: {
      price: 4.0,
      options: [
        "Pepsi", "Diet Pepsi", "Mountain Dew",
        "Dr Pepper", "Starry", "Lemonade",
        "Fruit Punch", "Gatorade"
      ]
    },
    cans: {
      price: 2.0,
      options: [
        "Pepsi", "Diet Pepsi", "Mountain Dew",
        "Sierra Mist", "Orange Crush"
      ]
    }
  }
};
