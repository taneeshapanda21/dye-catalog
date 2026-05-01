let i;
let filter;
let currentSquares = [];
let currentSquares2 = [];
let currentSquares3 = [];
let currentCategory = "";
let squareSize = 100;
let squarePadding = 30;
let imageSize = 100;
let titleY = 50;
let itemSpacing = 140;

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
  { color: [239, 229, 201], desc: "cotton / curly dock root" },
  { color: [239, 232, 214], desc: "cotton / curly dock + acid" }
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
let t_squares = [
  { color:[234, 208, 179], desc: "silk / bark" },
  { color: [154, 144, 129], desc: "silk / bark + iron" },
  { color: [228, 199, 161], desc: "wool / bark" },
  { color: [186, 167, 142], desc: "wool / bark + iron" },
  { color: [239, 227, 214], desc: "cotton / bark" },
  { color: [204, 193, 176], desc: "cotton / bark + iron" }
];
let t2_squares = [
  { color:[215, 149, 116], desc: "silk / eucalyptus" },
  { color: [100, 86, 85 ], desc: "silk / eucalyptus + iron" },
  { color: [190, 117, 79], desc: "wool / eucalyptus" },
  { color: [142, 97, 71 ], desc: "wool / eucalyptus + iron" },
  { color: [227, 192, 169], desc: "cotton / eucalyptus" },
  { color: [128, 120, 113], desc: "cotton / eucalyptus + iron" }
];
let t3_squares = [
  { color:[233, 213, 186], desc: "silk / oak gall" },
  { color: [170, 152, 140], desc: "silk / oak gall + iron" },
  { color: [213, 178, 134], desc: "wool / oak gall" },
  { color: [150, 130, 114], desc: "wool / oak gall + iron" },
  { color: [232, 217, 201], desc: "cotton / oak gall" },
  { color: [183, 177, 170], desc: "cotton / oak gall + iron" }
];

let lichen;
let blueb;
let avo;
let cd;
let bark;

function preload() {
  lichen = loadImage('assets/lichen.jpeg');
  blueb = loadImage('assets/blueb.jpeg');
  avo = loadImage('assets/avopit.jpeg');
  cd = loadImage('assets/curly.jpeg');
  bark = loadImage('assets/bark.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  filter = createSelect();
  filter.option("tannin");
  filter.option("non-native");
  filter.option("blueberry");
  filter.option("avocado pits");
  filter.option("lichen");
  filter.changed(updateSquares);

  updateLayout();
  updateSquares();
}

let currentImg;

function updateLayout() {
  squareSize = constrain(floor(min(120, width / 6, height / 7)), 60, 120);
  squarePadding = squareSize * 0.25;
  itemSpacing = squareSize + squarePadding;
  imageSize = constrain(floor(min(140, width * 0.2, height * 0.2)), 80, 140);
  titleY = max(40, floor(height * 0.06));

  filter.position(20, titleY + 15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateLayout();
}

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
    currentImg = cd;
  } else if (currentCategory === "tannin") {
    currentSquares = t_squares;
    currentSquares2 = t2_squares;
    currentSquares3 = t3_squares;
    currentImg = bark;
  }
}

function draw() {
  background('#fff');
  fill('black');
  textFont("Karla");
  textSize(min(28, max(18, width * 0.03)));
  textAlign(LEFT);
  text("Filter by dye:", 20, titleY);

  if (currentImg) {
    let imgX = width - imageSize - 20;
    let imgY = titleY - 20;

    if (width < 600) {
      imgX = 20;
      imgY = titleY + 40;
    }
    image(currentImg, imgX, imgY, imageSize, imageSize);
  }

  let contentY = titleY + imageSize + 40;
  if (width >= 600) {
    contentY = titleY + 80;
  }

  if (currentSquares.length) {
    contentY = drawSquareGrid(currentSquares, contentY);
  }
  if (currentSquares2.length) {
    contentY = drawSquareGrid(currentSquares2, contentY + 20);
  }
  if (currentSquares3.length) {
    contentY = drawSquareGrid(currentSquares3, contentY + 20);
  }
}

function drawSquareGrid(items, startY) {
  let maxColumns = max(1, floor((width - 40) / itemSpacing));
  let columns = min(items.length, maxColumns);
  let totalWidth = columns * itemSpacing;
  let startX = width / 2 - totalWidth / 2;
  let rows = ceil(items.length / columns);

  for (let i = 0; i < items.length; i++) {
    let col = i % columns;
    let row = floor(i / columns);
    let x = startX + col * itemSpacing;
    let y = startY + row * itemSpacing;

    fill(...items[i].color);
    noStroke();
    rect(x, y, squareSize, squareSize, 15);

    if (
      mouseX > x && mouseX < x + squareSize &&
      mouseY > y && mouseY < y + squareSize
    ) {
      fill(30);
      textAlign(CENTER);
      textSize(min(16, squareSize * 0.18));
      text(items[i].desc, x + squareSize / 2, y + squareSize + 20);
    }
  }

  return startY + rows * itemSpacing;
}
