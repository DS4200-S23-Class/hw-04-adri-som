// data points
let dataset1 = [
  [1, 2],
  [2, 4],
  [6, 2],
  [9, 9],
];

// onmouseover and onmouseout functions
function mouseOverCircle(hovered_id) {
  let circle = document.getElementById(hovered_id);
  circle.style.fill = "blue";
}

function mouseOutCircle(out_id) {
  let circle = document.getElementById(out_id);
  circle.style.fill = "pink";
}

// onclick function
function onClickCircle(clicked_id) {
  let circle = document.getElementById(clicked_id);
  let pointMsg = document.getElementById("lastPointClicked").innerHTML;

  cx = circle.cx.baseVal.value;
  x = (cx / 200) * 10;

  cy = circle.cy.baseVal.value;
  y = 10 - (cy / 200) * 10;

  let coord = "(" + x + ", " + y + ")\n\n";

  if (circle.style.stroke === "green") {
    circle.style.stroke = "pink";
    circle.style.strokeWidth = 0;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    circle.style.stroke = "green";
    circle.style.strokeWidth = 3;
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

let circleIDCounter = 5;

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

    let circleID = "circle" + circleIDCounter;
    circleIDCounter++;

    newCircle.setAttribute("id", circleID);
    newCircle.setAttribute("cx", (x / 10) * 200);
    newCircle.setAttribute("cy", ((10 - y) / 10) * 200);
    newCircle.setAttribute("r", 10);
    newCircle.style.fill = "pink";

    newCircle.onmouseover = function () {
      mouseOverCircle(circleID);
    };

    newCircle.onmouseout = function () {
      mouseOutCircle(circleID);
    };

    newCircle.onclick = function () {
      onClickCircle(circleID);
    };

    document.querySelector("svg").appendChild(newCircle);
  }
}
