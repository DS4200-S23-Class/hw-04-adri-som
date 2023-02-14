// onmouseover and onmouseout functions
function mouseOverCircle1() {
  let circle1 = document.getElementById("circle1");
  circle1.style.fill = "blue";
}

function mouseOutCircle1() {
  let circle1 = document.getElementById("circle1");
  circle1.style.fill = "pink";
}

function mouseOverCircle2() {
  let circle2 = document.getElementById("circle2");
  circle2.style.fill = "blue";
}

function mouseOutCircle2() {
  let circle2 = document.getElementById("circle2");
  circle2.style.fill = "pink";
}

function mouseOverCircle3() {
  let circle3 = document.getElementById("circle3");
  circle3.style.fill = "blue";
}

function mouseOutCircle3() {
  let circle3 = document.getElementById("circle3");
  circle3.style.fill = "pink";
}

function mouseOverCircle4() {
  let circle4 = document.getElementById("circle4");
  circle4.style.fill = "blue";
}

function mouseOutCircle4() {
  let circle4 = document.getElementById("circle4");
  circle4.style.fill = "pink";
}

function mouseOverNewCircle() {
  let newCircle = document.getElementById("newCircle");
  newCircle.style.fill = "blue";
  console.log("here");
}

function mouseOutNewCircle() {
  let newCircle = document.getElementById("newCircle");
  newCircle.style.fill = "pink";
}

// onclick functions
let isCircle1Clicked = false;
let isCircle2Clicked = false;
let isCircle3Clicked = false;
let isCircle4Clicked = false;

let clickedArr = [];

function onClickCircle1() {
  let circle1 = document.getElementById("circle1");
  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(1, 2)\n\n";

  if (circle1.style.stroke === "green") {
    circle1.style.stroke = "pink";
    circle1.style.strokeWidth = 0;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    circle1.style.stroke = "green";
    circle1.style.strokeWidth = 3;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  }
}

function onClickCircle2() {
  let circle2 = document.getElementById("circle2");
  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(2, 4)\n\n";

  if (circle2.style.stroke === "green") {
    circle2.style.stroke = "pink";
    circle2.style.strokeWidth = 0;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    circle2.style.stroke = "green";
    circle2.style.strokeWidth = 3;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  }
}

function onClickCircle3() {
  let circle3 = document.getElementById("circle3");
  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(6, 2)\n\n";

  if (circle3.style.stroke === "green") {
    circle3.style.stroke = "pink";
    circle3.style.strokeWidth = 0;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    circle3.style.stroke = "green";
    circle3.style.strokeWidth = 3;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  }
}

function onClickCircle4() {
  let circle4 = document.getElementById("circle4");
  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(9, 9)\n\n";

  if (circle4.style.stroke === "green") {
    circle4.style.stroke = "pink";
    circle4.style.strokeWidth = 0;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    circle4.style.stroke = "green";
    circle4.style.strokeWidth = 3;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  }
}

// finding the index of values in a given array
function findIndexInArray(givenArray, object) {
  for (let i = 0; i < givenArray.length; i++) {
    if (givenArray[i][0] == object[0] && givenArray[i][1] == object[1]) {
      return i;
    }
  }
  return -1;
}

// data points
let dataset1 = [
  [1, 2],
  [2, 4],
  [6, 2],
  [9, 9],
];

// adding in new coordinates
function addPoint() {
  let x = document.getElementById("xVal").value;
  let y = document.getElementById("yVal").value;

  // making sure the coordinates are limited to 1-9
  if (x < 1 || x > 9 || y < 1 || y > 9) {
    document.getElementById("addPointMsg").innerHTML =
      "x and y values must be within 1 and 9";
  }
  // checking if the coordinates have already been added
  else if (findIndexInArray(dataset1, [x, y]) != -1) {
    document.getElementById("addPointMsg").innerHTML = "Point Already Added";
  }
  // creating a new data point
  else {
    dataset1.push([x, y]);
    let newCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    newCircle.setAttribute("id", "newCircle");
    newCircle.setAttribute("cx", (x / 10) * 200);
    newCircle.setAttribute("cy", ((10 - y) / 10) * 200);
    newCircle.setAttribute("r", 10);
    newCircle.style.fill = "pink";
    // newCircle.addEventListener("onmouseover", mouseOverNewCircle());
    // newCircle.addEventListener("onmouseout", mouseOutNewCircle());
    document.querySelector("svg").appendChild(newCircle);
    console.log("appended");
  }
}
