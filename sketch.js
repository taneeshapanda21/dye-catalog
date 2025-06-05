let i;
let filter;
let currentSquares = [];
let currentSquares2 = [];
let currentSquares3 = [];
let currentCategory = "";
let spacing = 150;

let l_squares = [
  { color: [204, 167, 164], desc: "wool" },
  { color: [225, 179, 174], desc: "wool + citric acid" },
  { color: [174, 121, 112], desc: "silk" },
  { color: [193, 123, 105], desc: "silk + citric acid" }
];
let b_squares = [
  { color: [179,160,170], desc: "silk" },
  { color: [198,200,186], desc: "wool" },
  { color: [164,166,181], desc: "cotton" },
  { color: [205,145,166], desc: "silk + lemon" },
  { color: [228,205,192], desc: "wool + lemon" },
  { color: [208,154,182], desc: "cotton + lemon" }
  ];
let b2_squares = [
  { color: [219,193,143], desc: "silk + baking soda" },
  { color: [218,210,161], desc: "wool + baking soda" },
  { color: [183,193,181], desc: "cotton + baking soda" },
  { color: [87, 83, 79], desc: "silk + iron" },
  { color: [158,153,137], desc: "wool + iron" },
  { color: [165,157,157], desc: "cotton + iron" }
];
let a_squares = [
  { color: [234, 165, 154], desc: "silk" },
  { color: [245, 174, 157], desc: "wool" },
  { color: [213, 148, 141], desc: "cotton" },
  { color: [250, 198, 150], desc: "silk + lemon" },
  { color: [253, 210, 159], desc: "wool + lemon" },
  { color: [249, 193, 159], desc: "cotton + lemon" }
];
let a2_squares = [
  { color: [197, 135, 122], desc: "silk + baking soda" },
  { color: [226, 162, 150], desc: "wool + baking soda" },
  { color: [202, 149, 133], desc: "cotton + baking soda" },
  { color: [111, 106, 101], desc: "silk + iron" },
  { color: [140, 125, 112], desc: "wool + iron" },
  { color: [111, 106, 101], desc: "cotton + iron" }
];
let n_squares = [
  { color: [230, 208, 177], desc: "silk / curly dock root" },
  { color: [246, 224, 204], desc: "silk / curly dock + acid" },
  { color: [244, 226, 187], desc: "wool / curly dock root" },
  { color: [248, 233, 195], desc: "wool / curly dock + acid" },
  { color: [239, 229, 201], desc: "cotton / curly dock root"},
  { color: [239, 232, 214], desc: "cotton / curly dock + acid"}
];
let n2_squares = [
  { color: [228, 205, 92],  desc: "silk / fresh seed" },
  { color: [220, 194, 130], desc: "silk / seed + acid" },
  { color: [240, 225, 111], desc: "wool / fresh seed" },
  { color: [244, 228, 166], desc: "wool / seed + acid" },
  { color: [209, 206, 139], desc: "cotton / fresh seed" },
  { color: [210, 207, 168], desc: "cotton / seed + acid" }
];
let n3_squares = [
  { color: [162, 119, 71],  desc: "silk / fresh leaves" },
  { color: [221, 177, 86],  desc: "wool / fresh leaves" },
  { color: [190, 153, 81],  desc: "cotton / fresh leaves" },
  { color: [227, 170, 113], desc: "silk / radish stem" },
  { color: [231, 190, 126], desc: "wool / radish stem" },
  { color: [219, 171, 135], desc: "cotton / radish stem" }
];

let lichen;
let blueb;
let avo;
let cd;

function preload(){
  lichen = loadImage('lichen.jpeg');
  blueb = loadImage('blueb.jpeg');
  avo = loadImage('avopit.jpeg');
  cd = loadImage('curly.jpeg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  filter = createSelect(); // https://p5js.org/reference/p5/createSelect/
  filter.position(150, 45); //
  filter.option("lichen");
  filter.option("blueberry");
  filter.option("avocado pits");
  filter.option("non-native");
  filter.changed(updateSquares);
    updateSquares();
}

let currentImg;

function updateSquares() {
  currentCategory = filter.value();

  if (currentCategory === "lichen") {
    currentSquares = l_squares;
    currentSquares2 = [];
    currentSquares3 = [];
    currentImg = lichen;
  } else if (currentCategory === "blueberry") {
    currentSquares = b_squares;
    currentSquares2 = b2_squares;
    currentSquares3 = [];
    currentImg = blueb;
  } else if (currentCategory === "avocado pits") {
    currentSquares = a_squares;
    currentSquares2 = a2_squares;
    currentSquares3 = [];
    currentImg = avo;
  } else if (currentCategory === "non-native") {
    currentSquares = n_squares;
    currentSquares2 = n2_squares;
    currentSquares3 = n3_squares;
    currentImg = cd
  }
}

function draw() {
  background('#fff')
  fill('black')
  textFont("Karla");
  textSize(20);
  textAlign(LEFT);
  text("Filter by dye:", 20, 60)
  
  if (currentImg) {
    image(currentImg, 300, 15, 100, 100);
  }
  
  // currentSquares
  let y = height / 2 - 400;
  let totalWidth = currentSquares.length * spacing;
  let startX = width / 2 - totalWidth / 2;

  for (let i = 0; i < currentSquares.length; i++) {
    let x = startX + i * spacing;

    fill(...currentSquares[i].color);
    noStroke();
    rect(x, y, 100, 100, 15);

    // Show description on hover
    if (
      mouseX > x && mouseX < x + 100 &&
      mouseY > y && mouseY < y + 100
    ) {
      fill(30);
      textAlign(CENTER);
      textSize(14);
      text(currentSquares[i].desc, x + 50, y + 125);
    }
  }
  
  // currentSquares2
  let y2 = height / 2 - 250;
  let totalWidth2 = currentSquares2.length * spacing;
  let startX2 = width / 2 - totalWidth2 / 2;

  for (let i = 0; i < currentSquares2.length; i++) {
    let x = startX2 + i * spacing;

    fill(...currentSquares2[i].color);
    noStroke();
    rect(x, y2, 100, 100, 15);

    if (
      mouseX > x && mouseX < x + 100 &&
      mouseY > y2 && mouseY < y2 + 100
    ) {
      fill(30);
      textAlign(CENTER);
      textSize(14);
      text(currentSquares2[i].desc, x + 50, y2 + 125);
    } }
  
  // currentSquares3
  let y3 = height / 2 - 100;
  let totalWidth3 = currentSquares3.length * spacing;
  let startX3 = width / 2 - totalWidth3 / 2;

  for (let i = 0; i < currentSquares3.length; i++) {
    let x = startX3 + i * spacing;

    fill(...currentSquares3[i].color);
    noStroke();
    rect(x, y3, 100, 100, 15);

    if (
      mouseX > x && mouseX < x + 100 &&
      mouseY > y3 && mouseY < y3 + 100
    ) {
      fill(30);
      textAlign(CENTER);
      textSize(14);
      text(currentSquares3[i].desc, x + 50, y3 + 125);
    } }
}
