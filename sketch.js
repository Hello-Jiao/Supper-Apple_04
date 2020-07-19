/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var collectables;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Initialise arrays of scenery objects.
  trees_x = [100, 300, 500, 1000];
  clouds = [
    { x_pos: 200, y_pos: 200 },
    { x_pos: 600, y_pos: 100 },
    { x_pos: 800, y_pos: 200 }
  ];
  mountains = [
    { x_pos: -400, y_pos: 100 },
    { x_pos: -100, y_pos: 100 },
    { x_pos: -800, y_pos: 100 }
  ];
  canyons = [
    { x_pos: -500, width: 100 },
    { x_pos: 1100, width: 100 },
    { x_pos: 1500, width: 100 }
  ];
  collectables = [
    { x_pos: 400, size: 48, y_pos: floorPos_y - 100 },
    { x_pos: 800, size: 48, y_pos: floorPos_y },
    { x_pos: 1300, size: 48, y_pos: floorPos_y - 100 }
  ];
}

function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  push();
  translate(scrollPos, 0);
  // Draw clouds.
  for (var i = 0; i < clouds.length; i++) {
    fill(255, 255, 255);
    rect(clouds[i].x_pos + 100, clouds[i].y_pos - 25, 199, 50, 25, 25, 25, 25);

    ellipse(clouds[i].x_pos + 170, clouds[i].y_pos - 18, 72, 72);
    ellipse(clouds[i].x_pos + 218, clouds[i].y_pos - 14, 72, 72);
  }

  // Draw mountains.
  for (var i = 0; i < mountains.length; i++) {
    fill(125, 139, 124);
    triangle(
      mountains[i].x_pos + 547,
      mountains[i].y_pos + 53,
      mountains[i].x_pos + 386,
      mountains[i].y_pos + 332,
      mountains[i].x_pos + 709,
      mountains[i].y_pos + 332
    );
    fill(156, 165, 155);
    triangle(
      mountains[i].x_pos + 650,
      mountains[i].y_pos + 8,
      mountains[i].x_pos + 356,
      mountains[i].y_pos + 332,
      mountains[i].x_pos + 894,
      mountains[i].y_pos + 332
    );
    fill(100, 124, 88);
    triangle(
      mountains[i].x_pos + 655,
      mountains[i].y_pos + 117,
      mountains[i].x_pos + 527,
      mountains[i].y_pos + 332,
      mountains[i].x_pos + 814,
      mountains[i].y_pos + 332
    );
    fill(120, 147, 107);
    triangle(
      mountains[i].x_pos + 545,
      mountains[i].y_pos + 172,
      mountains[i].x_pos + 393,
      mountains[i].y_pos + 332,
      mountains[i].x_pos + 635,
      mountains[i].y_pos + 332
    );
  }

  // Draw trees.
  for (var i = 0; i < trees_x.length; i++) {
    //big tree
    fill(137, 103, 27);
    rect(trees_x[i], floorPos_y - 86, 19, 87);
    fill(188, 222, 111);
    triangle(
      trees_x[i] + 10,
      floorPos_y - 250,
      trees_x[i] - 50,
      floorPos_y - 56,
      trees_x[i] + 10,
      floorPos_y - 56
    );

    fill(138, 195, 61);
    triangle(
      trees_x[i] + 10,
      floorPos_y - 250,
      trees_x[i] + 10,
      floorPos_y - 56,
      trees_x[i] + 69,
      floorPos_y - 56
    );
    fill(137, 103, 27);
    rect(trees_x[i] + 50, floorPos_y - 59, 10, 59);
    fill(188, 222, 111);
    triangle(
      trees_x[i] + 56,
      floorPos_y - 169,
      trees_x[i] + 56,
      floorPos_y - 37,
      trees_x[i] + 16,
      floorPos_y - 37
    );
    fill(138, 195, 61);
    triangle(
      trees_x[i] + 56,
      floorPos_y - 169,
      trees_x[i] + 96,
      floorPos_y - 37,
      trees_x[i] + 56,
      floorPos_y - 37
    );
  }
  // Draw canyons
  for (var i = 0; i < canyons.length; i++) {
    fill(100, 155, 255);
    rect(canyons[i].x_pos, floorPos_y, canyons[i].width, floorPos_y);
    fill(168, 167, 186);
    triangle(
      canyons[i].x_pos + canyons[i].width / 6,
      floorPos_y + 40,
      canyons[i].x_pos,
      height,
      canyons[i].x_pos + canyons[i].width / 3,
      height
    );
    triangle(
      canyons[i].x_pos + canyons[i].width / 2,
      floorPos_y + 40,
      canyons[i].x_pos + canyons[i].width / 3,
      height,
      canyons[i].x_pos + (canyons[i].width / 3) * 2,
      height
    );
    triangle(
      canyons[i].x_pos + (canyons[i].width / 6) * 5,
      floorPos_y + 40,
      canyons[i].x_pos + (canyons[i].width / 3) * 2,
      height,
      canyons[i].x_pos + (canyons[i].width / 3) * 3,
      height
    );
  }

  // Draw collectable items
  for (var i = 0; i < collectables.length; i++) {
    fill(186, 51, 51);
    noStroke();
    ellipse(
      collectables[i].x_pos + 14,
      collectables[i].y_pos - 20,
      collectables[i].size - 19,
      collectables[i].size - 11
    );
    ellipse(
      collectables[i].x_pos + 30,
      collectables[i].y_pos - 20,
      collectables[i].size - 19,
      collectables[i].size - 11
    );
    stroke(88, 70, 70);
    strokeWeight(3);

    line(
      collectables[i].x_pos + 30,
      collectables[i].y_pos - 42,
      collectables[i].x_pos + 22,
      collectables[i].y_pos - 32
    );
  }

  //s(top the background
  pop();

  // Draw the game character - this must be last
  //hair
  fill(0);
  ellipse(gameChar_x, gameChar_y - 54, 42, 33);
  //face
  fill(255, 227, 206);
  stroke(65);
  ellipse(gameChar_x, gameChar_y - 53, 22, 22);
  //eyes
  fill(255);
  stroke(65);
  ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
  ellipse(gameChar_x + 7, gameChar_y - 56, 10, 10);
  ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
  ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
  //mouth
  line(gameChar_x - 2, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
  //arms
  fill(255, 227, 206);
  stroke(65);
  strokeWeight(1);
  //left arm
  rect(gameChar_x - 15, gameChar_y - 38, 4, 17, 2);
  //right arm
  rect(gameChar_x + 10, gameChar_y - 38, 4, 17, 2);
  //left leg
  rect(gameChar_x - 9, gameChar_y - 15, 6, 12, 2);
  //right leg
  rect(gameChar_x + 2, gameChar_y - 15, 6, 12, 2);
  //body
  fill(248, 123, 142);
  noStroke();
  rect(gameChar_x - 9, gameChar_y - 42, 18, 30, 5);

  //////// Game character logic ///////
  // Logic to move

  if (isLeft) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  }

  if (isRight) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
    }
  }
}

function keyPressed() {
  if (key == "A" || keyCode == 37) {
    isLeft = true;
  }

  if (key == "D" || keyCode == 39) {
    isRight = true;
  }
}

function keyReleased() {
  if (key == "A" || keyCode == 37) {
    isLeft = false;
  }

  if (key == "D" || keyCode == 39) {
    isRight = false;
  }
}
