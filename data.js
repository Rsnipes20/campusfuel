/* Invented sample nutrition values for demonstration only; not verified dietary data. */
const FOODS = [
  {
    "id": 1,
    "name": "Oatmeal bowl",
    "category": "Grains",
    "serving": "1 bowl",
    "calories": 280,
    "protein": 10,
    "carbs": 48,
    "fat": 6
  },
  {
    "id": 2,
    "name": "Greek-style yogurt",
    "category": "Dairy & alternatives",
    "serving": "1 cup",
    "calories": 150,
    "protein": 20,
    "carbs": 10,
    "fat": 3
  },
  {
    "id": 3,
    "name": "Scrambled eggs",
    "category": "Meat, fish & eggs",
    "serving": "2 eggs",
    "calories": 180,
    "protein": 12,
    "carbs": 2,
    "fat": 14
  },
  {
    "id": 4,
    "name": "Banana",
    "category": "Fruit",
    "serving": "1 medium",
    "calories": 105,
    "protein": 1,
    "carbs": 26,
    "fat": 0
  },
  {
    "id": 5,
    "name": "Chicken rice bowl",
    "category": "Prepared meals",
    "serving": "1 bowl",
    "calories": 520,
    "protein": 38,
    "carbs": 65,
    "fat": 12
  },
  {
    "id": 6,
    "name": "Chickpea wrap",
    "category": "Prepared meals",
    "serving": "1 wrap",
    "calories": 430,
    "protein": 16,
    "carbs": 60,
    "fat": 14
  },
  {
    "id": 7,
    "name": "Turkey sandwich",
    "category": "Prepared meals",
    "serving": "1 sandwich",
    "calories": 390,
    "protein": 28,
    "carbs": 42,
    "fat": 12
  },
  {
    "id": 8,
    "name": "Salmon and potatoes",
    "category": "Prepared meals",
    "serving": "1 plate",
    "calories": 580,
    "protein": 40,
    "carbs": 51,
    "fat": 24
  },
  {
    "id": 9,
    "name": "Tofu stir-fry",
    "category": "Prepared meals",
    "serving": "1 bowl",
    "calories": 460,
    "protein": 24,
    "carbs": 55,
    "fat": 16
  },
  {
    "id": 10,
    "name": "Pasta with lentils",
    "category": "Prepared meals",
    "serving": "1 bowl",
    "calories": 510,
    "protein": 22,
    "carbs": 83,
    "fat": 10
  },
  {
    "id": 11,
    "name": "Cottage cheese",
    "category": "Dairy & alternatives",
    "serving": "1 cup",
    "calories": 180,
    "protein": 25,
    "carbs": 11,
    "fat": 4
  },
  {
    "id": 12,
    "name": "Trail mix",
    "category": "Snacks",
    "serving": "30 g",
    "calories": 170,
    "protein": 5,
    "carbs": 15,
    "fat": 10
  },
  {
    "id": 13,
    "name": "Apple",
    "category": "Fruit",
    "serving": "1 medium",
    "calories": 95,
    "protein": 0,
    "carbs": 25,
    "fat": 0
  },
  {
    "id": 14,
    "name": "Peanut butter toast",
    "category": "Prepared meals",
    "serving": "1 slice",
    "calories": 210,
    "protein": 8,
    "carbs": 22,
    "fat": 10
  },
  {
    "id": 15,
    "name": "Berry smoothie",
    "category": "Drinks",
    "serving": "1 glass",
    "calories": 240,
    "protein": 18,
    "carbs": 36,
    "fat": 3
  },
  {
    "id": 16,
    "name": "Grilled chicken",
    "category": "Meat, fish & eggs",
    "serving": "100 g",
    "calories": 165,
    "protein": 31,
    "carbs": 0,
    "fat": 4
  },
  {
    "id": 17,
    "name": "Orange",
    "category": "Fruit",
    "serving": "1 medium",
    "calories": 65,
    "protein": 1,
    "carbs": 15,
    "fat": 0
  },
  {
    "id": 18,
    "name": "Strawberries",
    "category": "Fruit",
    "serving": "1 cup",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0
  },
  {
    "id": 19,
    "name": "Grapes",
    "category": "Fruit",
    "serving": "1 cup",
    "calories": 100,
    "protein": 1,
    "carbs": 25,
    "fat": 0
  },
  {
    "id": 20,
    "name": "Broccoli",
    "category": "Vegetables",
    "serving": "1 cup",
    "calories": 35,
    "protein": 3,
    "carbs": 6,
    "fat": 0
  },
  {
    "id": 21,
    "name": "Carrot sticks",
    "category": "Vegetables",
    "serving": "1 cup",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fat": 0
  },
  {
    "id": 22,
    "name": "Mixed greens",
    "category": "Vegetables",
    "serving": "2 cups",
    "calories": 20,
    "protein": 2,
    "carbs": 3,
    "fat": 0
  },
  {
    "id": 23,
    "name": "Baked potato",
    "category": "Vegetables",
    "serving": "1 medium",
    "calories": 160,
    "protein": 4,
    "carbs": 36,
    "fat": 0
  },
  {
    "id": 24,
    "name": "Cooked rice",
    "category": "Grains",
    "serving": "1 cup",
    "calories": 205,
    "protein": 4,
    "carbs": 45,
    "fat": 1
  },
  {
    "id": 25,
    "name": "Whole-grain bread",
    "category": "Grains",
    "serving": "1 slice",
    "calories": 95,
    "protein": 4,
    "carbs": 17,
    "fat": 1
  },
  {
    "id": 26,
    "name": "Cooked pasta",
    "category": "Grains",
    "serving": "1 cup",
    "calories": 200,
    "protein": 7,
    "carbs": 39,
    "fat": 1
  },
  {
    "id": 27,
    "name": "Cooked quinoa",
    "category": "Grains",
    "serving": "1 cup",
    "calories": 220,
    "protein": 8,
    "carbs": 39,
    "fat": 4
  },
  {
    "id": 28,
    "name": "Milk",
    "category": "Dairy & alternatives",
    "serving": "1 cup",
    "calories": 120,
    "protein": 8,
    "carbs": 12,
    "fat": 4
  },
  {
    "id": 29,
    "name": "Soy beverage",
    "category": "Dairy & alternatives",
    "serving": "1 cup",
    "calories": 100,
    "protein": 7,
    "carbs": 9,
    "fat": 4
  },
  {
    "id": 30,
    "name": "Cheddar-style cheese",
    "category": "Dairy & alternatives",
    "serving": "30 g",
    "calories": 120,
    "protein": 7,
    "carbs": 1,
    "fat": 10
  },
  {
    "id": 31,
    "name": "Baked salmon",
    "category": "Meat, fish & eggs",
    "serving": "100 g",
    "calories": 205,
    "protein": 22,
    "carbs": 0,
    "fat": 13
  },
  {
    "id": 32,
    "name": "Tuna",
    "category": "Meat, fish & eggs",
    "serving": "100 g",
    "calories": 115,
    "protein": 25,
    "carbs": 0,
    "fat": 1
  },
  {
    "id": 33,
    "name": "Boiled egg",
    "category": "Meat, fish & eggs",
    "serving": "1 egg",
    "calories": 75,
    "protein": 6,
    "carbs": 1,
    "fat": 5
  },
  {
    "id": 34,
    "name": "Firm tofu",
    "category": "Plant proteins",
    "serving": "100 g",
    "calories": 140,
    "protein": 15,
    "carbs": 3,
    "fat": 8
  },
  {
    "id": 35,
    "name": "Cooked lentils",
    "category": "Plant proteins",
    "serving": "1 cup",
    "calories": 230,
    "protein": 18,
    "carbs": 40,
    "fat": 1
  },
  {
    "id": 36,
    "name": "Cooked chickpeas",
    "category": "Plant proteins",
    "serving": "1 cup",
    "calories": 270,
    "protein": 14,
    "carbs": 44,
    "fat": 4
  },
  {
    "id": 37,
    "name": "Black beans",
    "category": "Plant proteins",
    "serving": "1 cup",
    "calories": 225,
    "protein": 15,
    "carbs": 40,
    "fat": 1
  },
  {
    "id": 38,
    "name": "Almonds",
    "category": "Snacks",
    "serving": "30 g",
    "calories": 175,
    "protein": 6,
    "carbs": 6,
    "fat": 15
  },
  {
    "id": 39,
    "name": "Popcorn",
    "category": "Snacks",
    "serving": "3 cups",
    "calories": 95,
    "protein": 3,
    "carbs": 19,
    "fat": 1
  },
  {
    "id": 40,
    "name": "Rice cakes",
    "category": "Snacks",
    "serving": "2 cakes",
    "calories": 70,
    "protein": 1,
    "carbs": 15,
    "fat": 0
  },
  {
    "id": 41,
    "name": "Water",
    "category": "Drinks",
    "serving": "1 cup",
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0
  },
  {
    "id": 42,
    "name": "Black coffee",
    "category": "Drinks",
    "serving": "1 cup",
    "calories": 5,
    "protein": 0,
    "carbs": 1,
    "fat": 0
  },
  {
    "id": 43,
    "name": "Orange juice",
    "category": "Drinks",
    "serving": "1 cup",
    "calories": 110,
    "protein": 2,
    "carbs": 25,
    "fat": 0
  },
  {
    "id": 44,
    "name": "Vegetable soup",
    "category": "Prepared meals",
    "serving": "1 bowl",
    "calories": 180,
    "protein": 6,
    "carbs": 28,
    "fat": 5
  }
];
const MEALS = ["Breakfast", "Lunch", "Dinner", "Snacks"];
