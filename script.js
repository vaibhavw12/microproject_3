const arr = [
    {
      "id": 1,
      "foodname": "Apple",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.3,
      "cab": 25
    },
    {
      "id": 2,
      "foodname": "Banana",
      "calorie": 105,
      "category": "Fruit",
      "protiens": 1.3,
      "cab": 27
    },
    {
      "id": 3,
      "foodname": "Orange",
      "calorie": 62,
      "category": "Fruit",
      "protiens": 1.2,
      "cab": 15
    },
    {
      "id": 4,
      "foodname": "Pear",
      "calorie": 95,
      "category": "Fruit",
      "protiens": 0.5,
      "cab": 25
    },
    {
      "id": 5,
      "foodname": "Grapefruit",
      "calorie": 42,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 11
    },
    {
      "id": 6,
      "foodname": "Strawberry",
      "calorie": 46,
      "category": "Fruit",
      "protiens": 1.5,
      "cab": 10
    },
    {
      "id": 7,
      "foodname": "Blueberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.1,
      "cab": 14
    },
    {
      "id": 8,
      "foodname": "Raspberry",
      "calorie": 52,
      "category": "Fruit",
      "protiens": 1.4,
      "cab": 15
    },
    {
      "id": 9,
      "foodname": "Broccoli",
      "calorie": 34,
      "category": "Vegetable",
      "protiens": 3.3,
      "cab": 5
    },
    {
      "id": 10,
      "foodname": "Cauliflower",
      "calorie": 25,
      "category": "Vegetable",
      "protiens": 2.6,
      "cab": 5
    },
    {
      "id": 11,
      "foodname": "Green Beans",
      "calorie": 31,
      "category": "Vegetable",
      "protiens": 2.4,
      "cab": 4
    },
    {
      "id": 12,
      "foodname": "Asparagus",
      "calorie": 20,
      "category": "Vegetable",
      "protiens": 2.2,
      "cab": 2
    },
    {
      "id": 13,
      "foodname": "Spinach",
      "calorie": 23,
      "category": "Vegetable",
      "protiens": 3.5,
      "cab": 4
    },
    {
      "id": 14,
      "foodname": "Kale",
      "calorie": 33,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 7
    },
    {
      "id": 15,
      "foodname": "Sweet Potato",
      "calorie": 103,
      "category": "Vegetable",
      "protiens": 2,
      "cab": 27
    },
    {
      "id": 16,
      "foodname": "Potato",
      "calorie": 161,
      "category": "Vegetable",
      "protiens": 4.3,
      "cab": 37
    },
    {"id": 17,
      "foodname": "Carrot",
      "calorie": 41,
      "category": "Vegetable",
      "protiens": 0.9,
      "cab": 9
    },
    {
      "id": 18,
      "foodname": "Onion",
      "calorie": 40,
      "category": "Vegetable",
      "protiens": 1.4,
      "cab": 9
    },
    {
      "id": 19,
      "foodname": "Egg",
      "calorie": 77,
      "category": "Protein",
      "protiens": 6.3,
      "cab": 0.5
    },
    {
      "id": 20,
      "foodname": "Chicken Breast",
      "calorie": 165,
      "category": "Protein",
      "protiens": 31,
      "cab": 0
    },
    {
      "id": 21,
      "foodname": "Salmon",
      "calorie": 206,
      "category": "Protein",
      "protiens": 22,
      "cab": 0
    },
    {
      "id": 22,
      "foodname": "Tuna",
      "calorie": 179,
      "category": "Protein",
      "protiens": 39,
      "cab": 0
    },
    {
      "id": 23,
      "foodname": "Beef",
      "calorie": 250,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 24,
      "foodname": "Pork",
      "calorie": 242,
      "category": "Protein",
      "protiens": 26,
      "cab": 0
    },
    {
      "id": 25,
      "foodname": "Lamb",
      "calorie": 294,
      "category": "Protein",
      "protiens": 25,
      "cab": 0
    },
    {
      "id": 26,
      "foodname": "Shrimp",
      "calorie": 85,
      "category": "Protein",
      "protiens": 20,
      "cab": 0.2
    },
    {
      "id": 27,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 28,
      "foodname": "Brown Rice",
      "calorie": 216,
      "category": "Grain",
      "protiens": 4.5,
      "cab": 45
    },
    {
      "id": 29,
      "foodname": "Oats",
      "calorie": 389,
      "category": "Grain",
      "protiens": 16.9,
      "cab": 66
    },
    {
      "id": 30,
      "foodname": "Quinoa",
      "calorie": 120,
      "category": "Grain",
      "protiens": 4.4,
      "cab": 21
    },
    {
      "id": 31,
      "foodname": "Bread",
      "calorie": 265,
      "category": "Grain",
      "protiens": 9.4,
      "cab": 49
    },
    {
      "id": 32,
      "foodname": "Pasta",
      "calorie": 131,
      "category": "Grain",
      "protiens": 5.5,
      "cab": 26
    },
    {
      "id": 33,
      "foodname": "Milk",
      "calorie": 60,
      "category": "Dairy",
      "protiens": 3.2,
      "cab": 5.1
    },
    {
      "id": 34,
      "foodname": "Cheese",
      "calorie": 402,
      "category": "Dairy",
      "protiens": 25,
      "cab": 2.4
    },
    {
      "id": 35,
      "foodname": "Yogurt",
      "calorie": 59,
      "category": "Dairy",
      "protiens": 3.5,
      "cab": 5
    },
    {
      "id": 36,
      "foodname": "Butter",
      "calorie": 717,
      "category": "Dairy",
      "protiens": 0.9,
      "cab": 0.1
    },
    {
      "id": 37,
      "foodname": "Almonds",
      "calorie": 579,
      "category": "Nuts",
      "protiens": 21,
      "cab": 22
    },
    {
      "id": 38,
      "foodname": "Walnuts",
      "calorie": 654,
      "category": "Nuts",
      "protiens": 15,
      "cab": 14
    },
    {
      "id": 39,
      "foodname": "Peanuts",
      "calorie": 567,
      "category": "Nuts",
      "protiens": 26,
      "cab": 16
    },
    {
      "id": 40,
      "foodname": "Cashews",
      "calorie": 553,
      "category": "Nuts",
      "protiens": 18,
      "cab": 30
    }
  ]

  
  // list all the food items
  function allFoodItems(items){
    // using for loop
    // for(let i=0;i<items.length;i++){
    //     console.log(items[i])
    // }
    // using forEach() function
    items.forEach(function display(item){
        console.log(item)
    });
  }
  console.log("list all the food items")
  allFoodItems(arr)
  console.log('------------------------------')

  // list all the food items with category vegetables
  function foodItemVegatable(items){
    // using for loop
    // for(let i=0;i<items.length;i++){
    //     if(items[i].category === "Vegetable"){
    //         console.log(items[i])
    //     }
    // }
    // using forEach() method
    items.forEach(function categoryVegetables(item){
        if(item.category === "Vegetable"){
            console.log(item)
        }
    })
  }
  console.log("list all the food items with category vegetables")
  foodItemVegatable(arr)
  console.log('------------------------------')

  // list all the food items with category fruit
  function foodItemFruit(items){
    // using for loop
    // for(let i=0;i<items.length;i++){
    //     if(items[i].category === "Fruit"){
    //         console.log(items[i])
    //     }
    // }
   // using forEach() method
    items.forEach(function categoryFruit(item){
        if(item.category === "Fruit"){
            console.log(item)
        }
    })
  }
  console.log("list all the food items with category fruits")
  foodItemFruit(arr)
  console.log('------------------------------')

//  list all the food items with category protien
function foodItemProtien(items){
  // using for loop
  // for(let i=0;i<items.length;i++){
  //     if(items[i].category === "Protein"){
  //         console.log(items[i])
  //     }
  // }
// using forEach() method
  items.forEach(function categoryProtien(item){
      if(item.category === "Protein"){
          console.log(item)
      }
  })
}
console.log("list all the food items with category protien")
foodItemProtien(arr)
console.log('------------------------------')

//  list all the food items with category nuts
function foodItemNuts(items){
  // using for loop
  // for(let i=0;i<items.length;i++){
  //     if(items[i].category === "Nuts"){
  //         console.log(items[i])
  //     }
  // }
// using forEach() method
  items.forEach(function categoryNuts(item){
      if(item.category === "Nuts"){
          console.log(item)
      }
  })
}
console.log("list all the food items with category nuts")
foodItemNuts(arr)
console.log('------------------------------')

// list all the food items with category grains
function foodItemGrains(items){
  // using for loop
  // for(let i=0;i<items.length;i++){
  //     if(items[i].category === "Grain"){
  //         console.log(items[i])
  //     }
  // }
// using forEach() method
  items.forEach(function categoryGrains(item){
      if(item.category === "Grain"){
          console.log(item)
      }
  })
}
console.log("list all the food items with category grains")
foodItemGrains(arr)
console.log('------------------------------')

// list all the food items with category dairy
function foodItemDairy(items){
  // using for loop
  // for(let i=0;i<items.length;i++){
  //     if(items[i].category === "Dairy"){
  //         console.log(items[i])
  //     }
  // }
// using forEach() method
  items.forEach(function categoryDairy(item){
      if(item.category === "Dairy"){
          console.log(item)
      }
  })
}
console.log("list all the food items with category dairy")
foodItemDairy(arr)
console.log('------------------------------')

// list all the food items with calorie above 100
function foodItemCalorieAbove100(items){
    // using for loop
    // for(let i=0;i<items.length;i++){
    //     if(items[i].calorie > 100){
    //         console.log(items[i])
    //     }
    // }
 //  using filter() method
  const filter = items.filter(function above100(item){
        return item.calorie > 100
   })
   console.log(filter)
  }
  console.log("list all the food items with calorie above 100")
  foodItemCalorieAbove100(arr)
  console.log('------------------------------')

 // list all the food items with calorie below 100
function foodItemCalorieBelow100(items){
    // using for loop
    // for(let i=0;i<items.length;i++){
    //     if(items[i].calorie < 100){
    //         console.log(items[i])
    //     }
    // }
 //  using filter() method
  const filter = items.filter(function above100(item){
        return item.calorie < 100
   })
   console.log(filter)
  }
  console.log("list all the food items with calorie below 100")
 foodItemCalorieBelow100(arr)
 console.log('------------------------------')

// list all the food items with highest protien content to lowest
function comapareProtienContent(item1 , item2){
  return item2.protiens - item1.protiens
}
console.log("list all the food items with highest protien content to lowest")
console.log(arr.sort(comapareProtienContent)) 
console.log('------------------------------')

// list all the food items with lowest cab content to highest
function comapareCabContent(item1 , item2){
  return item1.cab - item2.cab
}
console.log("list all the food items with lowest cab content to highest")
console.log(arr.sort(comapareCabContent))
console.log('------------------------------')