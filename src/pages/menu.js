export { ramenArray };

class Ramen {
  constructor(price, title, description) {
    this.price = price;
    this.title = title;
    this.description = description;
  }
}

let ramen1 = new Ramen(
  "14.00",
  "R1. Tonkotsu",
  "Classic pork broth, topped w. egg, chashu pork, bamboo shoots, red ginger, scallion."
);

let ramen2 = new Ramen(
  "14.00",
  "R2. Shoyu",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);

let ramen3 = new Ramen(
  "14.00",
  "R3. Miso",
  "Pork broth w. miso, topped w. corn, egg, chashu pork, bamboo shoots, scallion."
);

let ramen4 = new Ramen(
  "17.00",
  "R4. Spicy Miso",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);
let ramen5 = new Ramen(
  "14.00",
  "R5. Negi",
  "Soy sauce pork broth, topped w. kikurage, egg, chashu pork, bamboo shoots, scallion."
);
let ramen6 = new Ramen(
  "20.00",
  "Gomoku",
  "Chef picked seafood, vegetable, egg in pork broth."
);
let ramen7 = new Ramen(
  "16.00",
  "Touchucha",
  "Tochucha tea broth, w. tochucha noodles, topped w. egg, pork chashu, bamboo shoots."
);

let ramen8 = new Ramen(
  "16.00",
  "Cold Tochucha",
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
