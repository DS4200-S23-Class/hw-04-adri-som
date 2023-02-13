// on mouse over and mouse out functions

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

// on click functions

let isClicked = false;

function onClickCircle1() {
  let circle1 = document.getElementById("circle1");
  if (circle1.style.stroke === "green") {
    circle1.style.stroke = "pink";
    circle1.style.strokeWidth = 0;
  } else {
    circle1.style.stroke = "green";
    circle1.style.strokeWidth = 3;
  }

  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(1, 2)";
  if (!isClicked) {
    isClicked = true;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    isClicked = false;
    console.log("unclicking");
    let substring = pointMsg.substring(0, pointMsg.length - 6);
    document.getElementById("lastPointClicked").innerHTML = substring;
  }
}

function onClickCircle2() {
  let circle2 = document.getElementById("circle2");
  if (circle2.style.stroke === "green") {
    circle2.style.stroke = "pink";
    circle2.style.strokeWidth = 0;
  } else {
    circle2.style.stroke = "green";
    circle2.style.strokeWidth = 3;
  }

  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(2, 4)";
  if (!isClicked) {
    isClicked = true;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    isClicked = false;
    console.log("unclicking");
    let substring = pointMsg.substring(0, pointMsg.length - 6);
    document.getElementById("lastPointClicked").innerHTML = substring;
  }
}

function onClickCircle3() {
  let circle3 = document.getElementById("circle3");
  if (circle3.style.stroke === "green") {
    circle3.style.stroke = "pink";
    circle3.style.strokeWidth = 0;
  } else {
    circle3.style.stroke = "green";
    circle3.style.strokeWidth = 3;
  }

  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(6, 2)";
  if (!isClicked) {
    isClicked = true;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    isClicked = false;
    console.log("unclicking");
    let substring = pointMsg.substring(0, pointMsg.length - 6);
    document.getElementById("lastPointClicked").innerHTML = substring;
  }
}

function onClickCircle4() {
  let circle4 = document.getElementById("circle4");
  if (circle4.style.stroke === "green") {
    circle4.style.stroke = "pink";
    circle4.style.strokeWidth = 0;
  } else {
    circle4.style.stroke = "green";
    circle4.style.strokeWidth = 3;
  }

  let pointMsg = document.getElementById("lastPointClicked").innerHTML;
  let coord = "(9, 9)";
  if (!isClicked) {
    isClicked = true;
    document.getElementById("lastPointClicked").innerHTML = pointMsg + coord;
  } else {
    isClicked = false;
    console.log("unclicking");
    let substring = pointMsg.substring(0, pointMsg.length - 6);
    document.getElementById("lastPointClicked").innerHTML = substring;
  }
}
