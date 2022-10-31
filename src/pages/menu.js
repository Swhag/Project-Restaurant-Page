export { teaArray, appetizerArray, ramenArray, noodleArray };

class MenuItem {
  constructor(price, title, description) {
    this.price = price;
    this.title = title;
    this.description = description;
  }
}

let ramen1 = new MenuItem(
  "14.00",
  "R1. Tonkotsu",
  "Classic pork broth, topped w. egg, chashu pork, bamboo shoots, red ginger, scallion."
);

let ramen2 = new MenuItem(
  "14.00",
  "R2. Shoyu",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);

let ramen3 = new MenuItem(
  "14.00",
  "R3. Miso",
  "Pork broth w. miso, topped w. corn, egg, chashu pork, bamboo shoots, scallion."
);

let ramen4 = new MenuItem(
  "17.00",
  "R4. Spicy Miso",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);
let ramen5 = new MenuItem(
  "14.00",
  "R5. Negi",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);
let ramen6 = new MenuItem(
  "20.00",
  "R6. Gomoku",
  "Chef picked seafood, vegetable, egg in pork broth."
);
let ramen7 = new MenuItem(
  "16.00",
  "R7. Touchucha",
  "Tochucha tea broth, w. tochucha noodles, topped w. egg, pork chashu, bamboo shoots."
);

let ramen8 = new MenuItem(
  "16.00",
  "R8. Cold Tochucha",
  "Cold tochucha ramen topped w. kaiware, nori egg, wild mushrooms, in tochucha dressing."
);

let ramenArray = [
  ramen1,
  ramen2,
  ramen3,
  ramen4,
  ramen5,
  ramen6,
  ramen7,
  ramen8,
];

// ---------------------------------------------------

let tea1 = new MenuItem("6.50", "Matcha Latte");
let tea2 = new MenuItem("6.50", "Brown Sugar Matcha Latte");
let tea3 = new MenuItem("6.50", "Matcha Yuzu Lemonade");
let tea4 = new MenuItem("6.00", "Touchucha Yuzu Lemonade");
let tea5 = new MenuItem("5.00", "Touchucha w. Ginger");
let tea6 = new MenuItem("6.00", "Koucha Orange");
let tea7 = new MenuItem("12.00", "Matcha Tiramisu");
let tea8 = new MenuItem("4.00", "Touchucha Americano");

let teaArray = [tea1, tea2, tea3, tea4, tea5, tea6, tea7, tea8];

// ---------------------------------------------------

let appetizer1 = new MenuItem(
  "8.00",
  "A1. Edamame",
  "Steamed soybeans w. matcha salt."
);
let appetizer2 = new MenuItem(
  "9.00",
  "A2. Gyoza",
  "Japanese Pan fried pork dumplings."
);

let appetizer3 = new MenuItem(
  "9.00",
  "A3. Takoyaki",
  "Octopus balls w. bonito flakes."
);
let appetizer4 = new MenuItem(
  "10.00",
  "A4. Pork Bun",
  "Chashu pork in buns w. lettuce & cucumber."
);
let appetizer5 = new MenuItem(
  "10.00",
  "A5. Shishito pepper",
  "Sautéed shishito pepper w. matcha salt."
);
let appetizer6 = new MenuItem(
  "10.00",
  "A6. Agedashi Tofu",
  "Deep fried tofu with tensuyu sauce."
);
let appetizer7 = new MenuItem(
  "14.00",
  "A7. Geso Fry",
  "Japanese style fried calamari."
);
let appetizer8 = new MenuItem(
  "11.00",
  "A8. Yuzu Tebasaki",
  "Japanese fried chicken wings w. yuzu & lemon sauce."
);

let appetizerArray = [
  appetizer1,
  appetizer2,
  appetizer3,
  appetizer4,
  appetizer5,
  appetizer6,
  appetizer7,
  appetizer8,
];

// ---------------------------------------------------

let noodle1 = new MenuItem(
  "15.00",
  "Y1. Yaki Soba",
  "Pan fried soba noodles w. pork & veggies in okonomi sauce"
);
let noodle2 = new MenuItem(
  "18.00",
  "Y2. Seafood Yaki Soba",
  "Pan fried soba noodles w. shrimp, squid, veggies, salt & pepper"
);
let noodle3 = new MenuItem(
  "15.00",
  "Y3. Yaki Udon",
  "Pan fried udon w. pork veggies in okonomi sauce"
);
let noodle4 = new MenuItem(
  "16.00",
  "Y4. Kimchi Yaki Udon",
  "Pan fried udon w. kimchi, pork, veggies in okonomi sauce"
);
let noodle5 = new MenuItem("16.00", "Y5. Curry Udon w. Beef", "");

let noodleArray = [noodle1, noodle2, noodle3, noodle4, noodle5];
